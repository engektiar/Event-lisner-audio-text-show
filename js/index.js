var len = document.querySelectorAll(".mybtn").length;
for(var i=0; i<len; i++){
  document.querySelectorAll(".mybtn")[i].addEventListener("click",function(){
    var text=this.innerHTML;
    document.querySelector("h1").innerHTML=text+ "is cleeked";
  })
} 

// Audio add 
var audiolen=document.querySelectorAll(".mybutton").length;
for(var i=0; i<audiolen; i++){
  document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
    var mytext=this.innerHTML;
    audioplay(mytext);
    myanimation(mytext);

   
  })
}
function audioplay(mytext){
  switch(mytext){
    case "a":
     var audio = new Audio('sound/a (1).mp3');
     audio.play();
     break;

     case "b":
     var audio = new Audio('sound/a (2).mp3');
     audio.play();
     break;

     case "c":
       var audio = new Audio('sound/a (3).mp3');
       audio.play();
       break;

       case "d":
         var audio = new Audio('sound/a (4).mp3');
         audio.play();
         break;
      
 }
}
function myanimation(mytext){
 var mysetbutton= document.querySelector("."+ mytext);
 mysetbutton.classList.add("anim");

 setTimeout(function(){
  mysetbutton.classList.remove("anim");
 },2000);
}