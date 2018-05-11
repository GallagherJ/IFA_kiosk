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
    vidscreen.classList.remove("fadeInLeft");
    d.className += " flash";
    photoPressed=true;
    console.log(photoPressed);

    
  }
   else if (photoPressed === true){
    document.getElementById('screenshot-video').play();
    photoPressed=false;
    console.log(photoPressed);
    d.classList.remove("flash");
    
    clearTimeout(idleWatcher);
 idleWatcher = setTimeout(idleTime, 120000);

   }
   // canvas.style.transform = "scale3d(0.2,0.2,0)";
  /* var constraints = {
  video: {width: {min: 1280}, height: {min: 720}}*/
};




 //print

 printButton.onclick= function(){
 window.print();
 clearTimeout(idleWatcher);
 idleWatcher = setTimeout(idleTime, 120000);

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
var rs= document.getElementById('resize');
var ret=document.getElementById('reticle');
var bod = document.getElementById('ontop');
var count =document.getElementById('countdown');

init.onclick = function() {

  console.log("click");
 initbtn.className += " animated fadeOutDown hide";
 initbtn.classList.remove("animgradbg");

 vidscreen.className += "  show fadeInLeft";
 vidscreen.classList.remove("hide");

//cameraBtn.classList.remove("hide");
 //cameraBtn.className += " show fadeInLeft";
  
//printBtn.classList.remove("hide");
// printBtn.className += " show fadeInLeft";
 
  secondrow.className += " show";
 // secondrow.classList.remove("animgradbg");

  rs.style.height = "500px";

//document.getElementById('init').onclick = '';

//RETICLE

//initbtn.addEventListener("webkitAnimationEnd", reticleAnim);

//idleWatcher = setTimeout(idleTime, 120000);
showRet = setTimeout(reticleAnim,800);

}

//CAMERA SCREEN TO INIT, IDLE TIMER
function idleTime() {

  initbtn.className += " fadeInUp show";
 initbtn.classList.remove("fadeOutDown");
  initbtn.classList.remove("hide");
  //init.classList.remove("animated");

  vidscreen.className += "  hide";
 vidscreen.classList.remove("show");
 vidscreen.classList.remove("fadeInLeft");
 //vidscreen.classList.remove("animated");

 cameraBtn.className += " hide";
   cameraBtn.classList.remove("show");
 cameraBtn.classList.remove("fadeInLeft");
 //cameraBtn.classList.remove("animated");

 printBtn.className += " hide";
 printBtn.classList.remove("show");
 printBtn.classList.remove("fadeInLeft");
 //printBtn.classList.remove("animated");
 //secondrow.className += " hide";
  //secondrow.classList.remove("show");




  //setTimeout(initanim, 800);

  initbtn.addEventListener("webkitAnimationEnd", initanim);

  }

function initanim(){

  //init.classList.remove("fadeInUp");
  initbtn.className += " animgradbg";
  init.classList.remove("fadeInUp");
  init.classList.remove("animated");
  console.log("spazzotron avoided");

  }

  function reticleAnim(){

  //init.classList.remove("fadeInUp");
  ret.className += " show flash";
  ret.classList.remove("hide");
  console.log('ret');
 // init.classList.remove("animated");
 // console.log("spazzotron avoided");
 ret.addEventListener("webkitAnimationEnd", removeRet);

  }

  function removeRet(){
    ret.className += " fadeOut";
    ret.classList.remove("show");
    ret.addEventListener("webkitAnimationEnd", countdown);
  }

  function countdown(){
    count.className += " fadeIn";
    count.classList.remove("hide");
    count.addEventListener("webkitAnimationEnd", countStart);
  }

//GOOD OL' W3SCHOOLS COUNTDOWN, CHAMPION OF INCLUSION IN ALL MY PROJECTS

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? " " + seconds : seconds;

        display.innerHTML = seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}
 function countStart () {
    var fiveMinutes = 10,
        display = document.getElementById('countdown');
    startTimer(fiveMinutes, display);
};
//END COUNTDOWN



//BG OPACITY

/*bod.onclick= function(){
console.log('opac');
var element = document.getElementById("ontop");
var targetOpacity = 0;
  var  currentOpacity;
   var interval = false;



interval = setInterval(function() {

   currentOpacity = element.style.background-opacity;

   if (currentOpacity > targetOpacity) {
      currentOpacity -= 0.1;
      element.style.opacity = currentOpacity;


   } else {
      clearInterval(interval);
   }


}, 100);
}*/