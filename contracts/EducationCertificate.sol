// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract EducationCertificate is ERC721, Ownable {
    uint256 public nextCertificateId;
    address public admin;


    struct Certificate {
        string studentName;
        string courseName;
        string grade;
        uint256 dateIssued;
    }

    mapping(uint256 => Certificate) public certificates;

    constructor(address initialAdmin) ERC721("EducationCertificate", "EDU") Ownable() {
        admin = initialAdmin;
    }

    function mintCertificate(
        address to,
        string memory studentName,
        string memory courseName,
        string memory grade,
        uint256 dateIssued
    ) external onlyOwner {
        certificates[nextCertificateId] = Certificate(studentName, courseName, grade, dateIssued);
        _safeMint(to, nextCertificateId);
        nextCertificateId++;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://api.example.com/certificates/";
    }

    function setAdmin(address newAdmin) external onlyOwner {
        admin = newAdmin;
    }

    function getCertificate(uint256 certificateId) external view returns (Certificate memory) {
        return certificates[certificateId];
    }
}