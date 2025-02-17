import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReadContract from "./components/ReadContract";
import WriteContract from "./components/WriteContract";
import web3Service from "./components/web3.server"; // ✅ ใช้ instance ที่ถูกต้อง
import Abount from "./components/Abount";
import Example from "./components/Example";
import Standard from "./components/Standard";

class App extends React.Component {
  async componentDidMount() {
    await web3Service.init(); // ✅ ใช้ instance `web3Service`
    const kmutnbToken = web3Service.contracts.get("kmutnbToken");

    if (kmutnbToken) {
      const balanceOf = await kmutnbToken.balanceOf(web3Service.account);
      const totalSupply = await kmutnbToken.totalSupply(); // ❌ ไม่ต้องใช้ .call()
      const name = await kmutnbToken.name(); // ❌ ไม่ต้องใช้ .call()
      this.setState({
        account: web3Service.account,
        balanceOf: balanceOf,
        kmutnbToken: kmutnbToken,
        totalSupply: totalSupply,
        SName: name
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: "",
      balanceOf: 0,
      totalSupply: 0,
      SName: "",
    };
  }

  currencyFormat(num) {
    return Intl.NumberFormat().format(num);
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<ReadContract />} />
          <Route path="/write" element={<WriteContract />} />
          <Route path="/erc20" element={<Abount />} />
          <Route path="/example" element={<Example />} />
          <Route path="/standard" element={<Standard />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;