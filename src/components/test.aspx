<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ConsentMint._Default" %>

<%@ Register Src="~/ViewSwitcher.ascx" TagPrefix="uc1" TagName="ViewSwitcher" %>


<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <main>
        <div class="sec-container suit2 main-page">
    <div class="container clear-padding">
        <div class="container-padding">
            <div class="body-area">
                <div class="body-header">
                    <nav class="breadcrumb">
                        <a class="breadcrumb-item" href="#">
                            <img src="images/icon-home.png"></a>
                        <span>> </span>
                        <a class="breadcrumb-item" href="#">Online Request </a>
                        <span>> </span>
                        <a class="breadcrumb-item" href="#">Consent Form </a>
                    </nav>
                    <h2 class="hidden-xs name">Consent Form
                    </h2>
                </div>

                <div class="body-body">

                    <div class="col-sm-4 col-md-3 hidden-xs nopadding">
                        <div class="body-menu container">

                        </div>
                    </div>


                    <div class="col-sm-4 col-md-3 hidden-sm hidden-md hidden-lg nopadding">
                        <div class="body-mobile-menu container">
                            <a class="tab-collapse collapsed" role="button" data-toggle="collapse" href="#menuCollapse" aria-expanded="false" aria-controls="menuCollapse">
                                <h2>Consent Form
                                </h2>
                                <div class="right-menu-arrow">
                                    <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
                                </div>
                            </a>
                            <div class="collapse" id="menuCollapse">

                            </div>
                        </div>
                    </div>

                    <form id="form1" runat="server">
                        <div class="col-sm-8 col-md-9 right-box nopadding">
                            <!--  <div class="col-sm-8 col-md-12 right-box nopadding"> -->

                            <div class="body-right container">
                                <div class="top-yellow-line"></div>


                                <!-- Consent Header -->
                                <div class="body-right-content" id="lbl_HSec_0">
                                    <div class="content-header container">
                                        <div class="col-sm-12 left">
                                            <!--<h4><%=GetLocalResourceObject("Header1") %></h4>-->
                                            <h4>Header 1</h4>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 content-input-container t-white-bg nopadding">
                                        <div class="col-xs-12">
                                            <div class="question-container">
                                                <div class="t-brown">
                                                    <!--<p style="margin: 10px; text-align: justify; text-justify: inter-word;"><%=GetLocalResourceObject("Header2") %></p>-->
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;">Header 2</p>
                                                </div>
                                                <br />
                                                <div class="question-header t-brown" style="border: 1px solid grey; border-radius: 8px; padding: 10px;">
                                                    <!--<p style="margin: 10px;"><%=GetLocalResourceObject("Header3") %></p>--> 
                                                    <p style="margin: 10px;">Header 3</p> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                

                                <!-- Consent Part 1 Container -->
                                <div class="body-right-content" id="lbl_HSec_1">
                                    <div class="content-header container">
                                        <div class="col-sm-12 left">
                                            <!--<h4 style="text-align: justify; text-justify: inter-word;"><%=GetLocalResourceObject("Section1_Header") %></h4> -->
                                            <h4 style="text-align: justify; text-justify: inter-word;">Section1_Header</h4>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 content-input-container t-white-bg nopadding">
                                        <div class="col-xs-12">

                                            <!-- Consent Part 1 Container -->
                                            <div class="question-container">
                                                <div class="t-brown">
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;">
                                                       <!-- <%=GetLocalResourceObject("Section1_Intro") %>-->
                                                        Section1_Intro
                                                    </p>
                                                </div>
                                            </div>

                                            <!-- Consent Part 1.1 Container -->
                                            <div class="question-container">
                                                <div class="question-header t-brown">
                                                    <!--<p style="margin: 10px; text-align: justify; text-justify: inter-word;"><%=GetLocalResourceObject("Question1_1") %></p> -->
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;"><%=GetLocalResourceObject("Question1_1") %></p>
                                                <br /><img src="images/BAY_Groups.png" /><br /><br />
                                                </div>
                                                <div class="col-xs-12 content-input-box margin-top-10 nopadding">
                                                    <div class="col-sm-12 col-xs-12 padding-left-0">
                                                        <div class="checkbox question-checkbox">
                                                            <input type="checkbox" id="cbl_Q_1_1" name="cbl_Q_1_1" style="width: 24px; height: 24px; pointer-events: auto;">
                                                            <label class="checkbox" for="cbl_Q_1_1"></label>
                                                            <span class="question-radio-desc"><%=GetLocalResourceObject("Consent") %></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Consent Part 1.2 Container -->
                                            <div class="question-container">
                                                <div class="question-header t-brown">
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;"><%=GetLocalResourceObject("Question1_2") %></p>
                                                </div>
                                                <div class="col-xs-12 content-input-box margin-top-10 nopadding">
                                                    <div class="col-sm-12 col-xs-12 padding-left-0">
                                                        <div class="checkbox question-checkbox">
                                                            <input type="checkbox" id="cbl_Q_1_2" name="cbl_Q_1_2" style="width: 24px; height: 24px; pointer-events: auto;">
                                                            <label class="checkbox" for="cbl_Q_1_2"></label>
                                                            <span class="question-radio-desc"><%=GetLocalResourceObject("Consent") %></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Consent BizPartner -->
                                            <div class="question-container">
                                                <div class="t-brown">
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;">
                                                        <%=GetLocalResourceObject("Consent_BizPartner") %>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <!-- Consent Part 2 Container -->
                                <div class="body-right-content" id="lbl_HSec_2">
                                    <div class="content-header container">
                                        <div class="col-sm-12 left">
                                            <h4 style="text-align: justify; text-justify: inter-word;"><%=GetLocalResourceObject("Section2_Header") %></h4>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 content-input-container t-white-bg nopadding">
                                        <div class="col-xs-12">

                                            <!-- Consent Part 2.1 Container -->
                                            <div class="question-container">
                                                <div class="t-brown">
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;">
                                                        <%=GetLocalResourceObject("Section2_Intro") %>
                                                    </p>
                                                </div>
                                            </div>

                                            <!-- Consent Part 2.1.1 Container -->
                                            <div class="question-container">
                                                <div class="question-header t-brown">
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;"><%=GetLocalResourceObject("Question2_1_1") %></p>
                                                </div>
                                                <div class="col-xs-12 content-input-box margin-top-10 nopadding">
                                                    <div class="col-sm-12 col-xs-12 padding-left-0">
                                                        <div class="checkbox question-checkbox">
                                                            <input type="checkbox" id="cbl_Q_2_1_1" name="cbl_Q_2_1_1" style="width: 24px; height: 24px; pointer-events: auto;">
                                                            <label class="checkbox" for="cbl_Q_2_1_1"></label>
                                                            <span class="question-radio-desc"><%=GetLocalResourceObject("Consent") %></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Consent Part 2.1.2 Container -->
                                            <div class="question-container">
                                                <div class="question-header t-brown">
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;"><%=GetLocalResourceObject("Question2_1_2") %></p>
                                                </div>
                                                <div class="col-xs-12 content-input-box margin-top-10 nopadding">
                                                    <div class="col-sm-12 col-xs-12 padding-left-0">
                                                        <div class="checkbox question-checkbox">
                                                            <input type="checkbox" id="cbl_Q_2_1_2" name="cbl_Q_2_1_2" value="1" style="width: 24px; height: 24px; pointer-events: auto;">
                                                            <label class="checkbox" for="cbl_Q_2_1_2"></label>
                                                            <span class="question-radio-desc"><%=GetLocalResourceObject("Consent") %></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Consent Part 2.1.3 Container -->
                                            <div class="question-container">
                                                <div class="question-header t-brown">
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;"><%=GetLocalResourceObject("Question2_1_3") %></p>
                                                </div>
                                                <div class="col-xs-12 content-input-box margin-top-10 nopadding">
                                                    <div class="col-sm-12 col-xs-12 padding-left-0">
                                                        <div class="checkbox question-checkbox">
                                                            <input type="checkbox" id="cbl_Q_2_1_3" name="cbl_Q_2_1_3" value="1" style="width: 24px; height: 24px; pointer-events: auto;">
                                                            <label class="checkbox" for="cbl_Q_2_1_3"></label>
                                                            <span class="question-radio-desc">Consent</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Consent Part 2.1.4 Container -->
                                            <div class="question-container">
                                                <div class="question-header t-brown">
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;">Question2_1_4</p>
                                                </div>
                                                <div class="col-xs-12 content-input-box margin-top-10 nopadding">
                                                    <div class="col-sm-12 col-xs-12 padding-left-0">
                                                        <div class="checkbox question-checkbox">
                                                            <input type="checkbox" id="cbl_Q_2_1_4" name="cbl_Q_2_1_4" value="1" style="width: 24px; height: 24px; pointer-events: auto;" <%=answerNo214%>>
                                                            <label class="checkbox" for="cbl_Q_2_1_4"></label>
                                                            <span class="question-radio-desc"><%=GetLocalResourceObject("Consent") %></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Consent Part 2.2 Container -->
                                            <!--
                                            <div class="question-container">
                                                <div class="question-header t-brown">
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;">
                                                        <%=GetLocalResourceObject("Question2_2") %>
                                                    </p>
                                                </div>
                                                <div class="col-xs-12 content-input-box margin-top-10 nopadding">
                                                    <div class="col-sm-12 col-xs-12 padding-left-0">
                                                        <div class="checkbox question-checkbox">
                                                            <input type="checkbox" id="cbl_Q_2_2" name="cbl_Q_2_2" value="1" style="width: 24px; height: 24px; pointer-events: auto;" <%=answerNo22%>>
                                                            <label class="checkbox" for="cbl_Q_2_2"></label>
                                                            <span class="question-radio-desc"><%=GetLocalResourceObject("Consent") %></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            -->

                                            <!-- Consent Part 2.2 Container -->
                                            <div class="question-container">
                                                <div class="t-brown">
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;"><%=GetLocalResourceObject("PrivacyNotice_Footer1") %></p>
                                                    <br /><img src="images/QR_Consent.png" /><br />
                                                    <p style="margin: 10px; text-align: justify; text-justify: inter-word;"><%=GetLocalResourceObject("PrivacyNotice_Footer2") %></p>
                                                </div>
                                            </div>
                                            <div class="question-container">
                                                 <div class="t-brown">
                                                      <p style="margin: 10px; text-align: justify; text-justify: inter-word;"><%=GetLocalResourceObject("Version") %></p>
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="body-right-content">
                                    <div class="col-xs-12">
                                        <div class="question-pin">
                                            <span>PIN : <b class="t-red">*</b></span> &nbsp;
                                            <div class="content-input-box">

                                                <input type="password" name="pin" id="pin" class="form-design" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-xs-12 nopadding text-center margin-top-0 margin-bottom-20">
                                <!--<a class="button padding-left-30 padding-right-30 margin-left-10" href="javascript:void(0)" id="btn-reset" onclick="javascript: document.getElementById('form1').reset();">กลับ</a>-->
                                <a class="button padding-left-30 padding-right-30" href="javascript:void(0)" id="submit-search"><%=GetLocalResourceObject("bt_submit") %></a>
                            </div>
                        </div>
                    </form>
                </div>
                <a href="#scroll-to-top" class="back-to-top">
                    <img src="images/back-to-top.png">
                    <span>BACK TO TOP</span>
                </a>
            </div>
        </div>
    </div>
</div>
    </main>

</asp:Content>
