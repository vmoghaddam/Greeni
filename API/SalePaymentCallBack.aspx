<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SalePaymentCallBack.aspx.cs" Inherits="API.SalePaymentCallBack" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container">
	<div class="row">

		<div class="col-md-5">
			<asp:Label runat="server" AssociatedControlID="txtToken">Token : </asp:Label>
			<asp:TextBox runat="server" ID="txtToken"></asp:TextBox>
		</div>

		<div class="col-md-5">
			<asp:Label runat="server" AssociatedControlID="txtOrderId">Order Id: </asp:Label>
			<asp:TextBox runat="server" ID="txtOrderId"></asp:TextBox>
		</div>

		<div class="col-md-5">
			<asp:Label runat="server" AssociatedControlID="txtStatus">Status: </asp:Label>
			<asp:TextBox runat="server" ID="txtStatus"></asp:TextBox>
		</div>

		<div class="col-md-5">
			<asp:Label runat="server" AssociatedControlID="txtTerminalNo">Terminal Number: </asp:Label>
			<asp:TextBox runat="server" ID="txtTerminalNo"></asp:TextBox>
		</div>

		<div class="col-md-5">
			<asp:Label runat="server" AssociatedControlID="txtRRN">Transaction Reference Number: </asp:Label>
			<asp:TextBox runat="server" ID="txtRRN"></asp:TextBox>
		</div>

		<div class="col-md-5">
			<asp:Label runat="server" AssociatedControlID="txtHashCardNumber">Hash Card Number : </asp:Label>
			<asp:TextBox runat="server" ID="txtHashCardNumber"></asp:TextBox>
		</div>

		<div class="col-md-5">
			<asp:Label runat="server" AssociatedControlID="txtAmount">Amount : </asp:Label>
			<asp:TextBox runat="server" ID="txtAmount"></asp:TextBox>
		</div>

		<div class="col-md-5">
			<asp:Label runat="server" AssociatedControlID="txtTspToken">TSP Token : </asp:Label>
			<asp:TextBox runat="server" ID="txtTspToken"></asp:TextBox>
		</div>

	</div>

	<div class="row">
		<h2>
			<asp:Label runat="server" ID="lblConfirmStatus"></asp:Label></h2>
	</div>
</div>
    </form>
</body>
</html>
