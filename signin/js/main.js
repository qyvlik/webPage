
function exchange(divId1,divId2,btn01,btn02,Input01,input02){
    var divId1=document.getElementById(divId1);
    var divId2=document.getElementById(divId2);
    var btn01=document.getElementById(btn01);
    var  btn02=document.getElementById(btn02);
    var Input01=document.getElementById(Input01);
    var Input02=document.getElementById(input02);
    btn01.onclick=function(){
        divId2.style.display='block';
        divId1.style.display='none';

    }
    btn02.onclick=function(){
        if(Input02.value != "") {
            Input01.innerHTML=Input02.value;
        }
        divId1.style.display='block';
        Input02.value='';
        divId2.style.display='none';

    }
}
window.onload=function() {
    exchange('div1', 'div2', 'button', 'button1', 'email', 'email1');
    exchange("phone", "phone01", "button2", "button3", "phoneNumber", "phoneNumber1");
    exchange("QQ", "QQ01", "button4", "button5", "QQNumber", "QQNumber1");
    exchange("weixin", "weixin01", "button6", "button7", "weixinNumber", "weixinNumber1");
}