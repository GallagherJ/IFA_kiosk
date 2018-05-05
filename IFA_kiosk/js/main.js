//variables

var idle = 1;


//display and screenshot

 const video = document.querySelector('#screenshot-video');

 const constraints = {
  video: true
};

function handleSuccess(stream) {
  video.srcObject = stream;
}

function handleError(error) {
  console.error('cant find video obj', error);
}

navigator.mediaDevices.getUserMedia(constraints).
  then(handleSuccess).catch(handleError);


  const button = document.querySelector('#screenshot-button');
  const img = document.querySelector('#screenshot-img');


  const canvas = document.createElement('canvas');
  var photoPressed=false; 
  var d = document.getElementById("screenshot-video");

  button.onclick = function() {
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    img.src = canvas.toDataURL('image/webp');    

    if (photoPressed === false){
    document.getElementById('screenshot-video').pause();
    d.className += " flash";
    photoPressed=true;
    console.log(photoPressed);
    
  }
   else if (photoPressed === true){
    document.getElementById('screenshot-video').play();
    photoPressed=false;
    console.log(photoPressed);
    d.classList.remove("flash");
    

   }
   // canvas.style.transform = "scale3d(0.2,0.2,0)";
  /* var constraints = {
  video: {width: {min: 1280}, height: {min: 720}}*/
};




 //print

 printButton.onclick= function(){
 window.print();

}

 /*

 function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}
  
  var printButton = document.querySelector('printDiv');
  var toPrint = document.getElementById('#screenshot-img');
  printButton.onclick= printDiv('#screenshot-img');

    

                //toPrint.contentWindow.print()​​​​​​;
 
       
  /*     function printImg() {
  pwin = window.open(document.getElementById("screenshot-img").src,"_blank");
  pwin.onload = function () {window.print();}
}      */ 


 /*   window.win = open(toPrint).src;
             
                */

/*Anti Scrolling Straightjacket*/

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function(){
   if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
 
});

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}




//STATES

//INIT (LOADING SCREEN)

var bigboi = document.getElementById('bigboi');
var initbtn= document.getElementById('init');
var secondrow= document.getElementById('second');
var cam=document.getElementById('camera');
var booth=document.getElementById('booth');
var vidscreen=document.getElementById('screenshot-video');
var cameraBtn=document.getElementById('screenshot-button');
var printBtn=document.getElementById('printButton');

init.onclick = function() {

  console.log("click");
 init.className += " animated fadeOutDown";
 init.classList.remove("animgradbg");

 vidscreen.className += "  show animated fadeInLeft ";
 vidscreen.classList.remove("hide");

 cameraBtn.className += " show animated fadeInLeft";
  cameraBtn.classList.remove("hide");

 printBtn.className += " show animated fadeInLeft";
 printBtn.classList.remove("hide");

  secondrow.className += " show";

//document.getElementById('init').onclick = '';

}