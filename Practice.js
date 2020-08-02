function fun(){
var Stove=document.forms["myform"]["selectstove"].value;
var Qty=document.forms["myform"]["Qty"].value;
var transporter=document.forms["myform"]["selectTransporter"].value;
switch(Stove,transporter){
    case "JS","FedEx":
        var x=(Qty*10.3*1.21*6+.001*2350*Qty)*1.18;
        document.getElementById("result").innerHTML=x;
        
        case "SS","FedEx":
        var x=(Qty*10.3*1.21*4+.001*1750*Qty)*1.18;
        document.getElementById("result").innerHTML=x;
        break;

}

    
document.getElementById("click").style.backgroundColor="green";
  

}
function fun1(){
document.forms["myform"]["Qty"].value=" ";
document.getElementById("result").innerHTML=" ";


}