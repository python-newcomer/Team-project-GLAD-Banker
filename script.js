document.getElementById("submit").onclick = function() {
    alert("User id is successfully created");
  }
function deposit(){
    var a=parseInt(document.getElementById("d2").value);
    document.getElementById("Deposit").innerHTML="Your Deposited amount is:"+a;}
function withdraw(){
    var b=parseInt(document.getElementById("w2").value);
    document.getElementById("Withdraw").innerHTML="Your Withdrawal amount is:"+b;}
function balance(){
    let c=parseInt(a-b);
    document.getElementById("balance").innerHTML="Your balance amount is:"+c;}
    