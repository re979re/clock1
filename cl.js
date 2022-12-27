function updateDate(){
    var date =new Date();
    var setTime= document.getElementById("settime");
    setTime.innerHTML=date.getHours() + ":" + date.getMinutes()+":"+date.getSeconds();
    var setDtae =document.getElementById("setdate");
    setDtae.innerHTML=date.getDate() + "-" +parseInt(date.getMonth()+1) + "-" +date.getFullYear();

}
setInterval(updateDate,100);
onload= updateDate();

function getcolor(){
    var getcolor = document.getElementById("setcolor").value;
    localStorag.setItem("color",getcolor);
    document.getElementById("time").style.background=localStorage.getItem("color");
    document.getElementById("body").style.background=localStorage.getItem("color");
}
function setColor(){
    document.getElementById("setcolor").value =localStorage.getItem("color");
    document.getElementById("time").style.background =localStorage.getItem("color");
    document.getElementById("body").style.background =localStorage.getItem("color");
    }
    
    setInterval(setColor,100);