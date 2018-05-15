//variables

var idle = 1;

var cameraBtn=document.getElementById('screenshot-button');
var tha=document.getElementById('thanks');

var bigboi = document.getElementById('bigboi');
var initbtn= document.getElementById('init');
var secondrow= document.getElementById('second');
var cam=document.getElementById('camera');
var booth=document.getElementById('booth');
var vidscreen=document.getElementById('screenshot-video');

var printBtn=document.getElementById('printButton');
var rs= document.getElementById('resize');
var ret=document.getElementById('reticle');
var bod = document.getElementById('ontop');
var count =document.getElementById('countdown');
var photoTaken=false;
var lo= document.getElementById('logo');
var pm=document.getElementById('printmsg');
var ent=document.getElementById('enteremail');
//var data = new FormData();
//var data = {};

//OVERWRITE PDF, need this code in extension appdata/... folder, edited manifest to include permissions: downloads

/*chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
  suggest({filename: '..', conflictAction: 'overwrite'});
});*/

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

  function takePhoto() {
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    img.src = canvas.toDataURL('image/png'); 

     document.getElementById('screenshot-video').pause();
    vidscreen.classList.remove("fadeInLeft");
    d.className += " flash";
    photoPressed=true;
    console.log(photoPressed);   

 /*   if (photoPressed === false){
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

 printBtn.onclick= function(){
 //window.print();
  ent.className += " fadeIn show";
  ent.classList.remove("hide");


 //clearTimeout(idleWatcher);
 //idleWatcher = setTimeout(idleTime, 120000);

}

cameraBtn.onclick = function(){

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

  pm.className += " hide";
 pm.classList.remove("show");

 tha.className += " show fadeInUp";
 tha.classList.remove("hide");

setTimeout("location.reload(true);",5000);

}

/*function endItall(){
  console.log('wtf');
}*/



  




//send email




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

//beginning of the jank
   pm.className += " hide";
 pm.classList.remove("show");


 tha.className += " hide";
 tha.classList.remove("show");

 bod.classList.remove("toWhitebg");
 bod.className += "show";

 lo.className += "show";
 lo.classList.remove("hide");
  vidscreen.play();

  //end jank




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

//COUNTDOWN, TAKE PHOTO, SAVE PHOTO


function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        if (photoTaken === false){

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
            console.log('ctd finished');
            display.className += " hide";
            takePhoto();
            photoTaken=true;
            lo.className += " tealtext";
             bod.className += " toWhitebg";
             ret.classList.remove("fadeOut");
             ret.className += " hide";
             setTimeout(startEmail, 2000);

        }
      }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}
 function countStart () {
  photoTaken=false;
    var fiveMinutes = 2,
        display = document.getElementById('countdown');
    startTimer(fiveMinutes, display);
};
//END COUNTDOWN

//PRINT,KEYBOARD,EMAIL

function startEmail(){
  //window.print();
  lo.className += " hide";
  cameraBtn.classList.remove("hide");
  cameraBtn.className += " show fadeInLeft";
  
  printBtn.classList.remove("hide");
  printBtn.className += " show fadeInLeft";

  pm.classList.remove("hide");
  pm.className += " show fadeIn";

//CREATE PDF

  var doc = new jsPDF({
  orientation: 'portrait',
  unit: 'in',
  format: [8.5, 11] //CHANGE THIS TO 4,6
})

//doc.text('LOL', 1, 1)
doc.addImage(img, 'png', 0, 0, 6, 4);//add 180,150 to size image on paper
doc.save('photoprint5.pdf')
var pdfData = doc.output('datauristring');
var str="Visit Microsoft!";
pdfData=pdfData.replace("data","");
//pdfData = pdfData.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'_')
//pdfData=pdfData.replace("application","");
//pdfData=pdfData.replace(",","");
//pdfData=pdfData.replace(":","");
pdfData=pdfData.slice(24);
//var n=pdfData.replace("base64","");
//var stringtosend = JSON.stringify(pdfData);
//var actual = JSON.parse(atob(pdfData));
//stringtosend.replace('data', 'blep');
//stringtosend.trim();
console.log(pdfData);
//var encoded = toString((pdfData));
//console.log(encoded);
// data:application/pdf;base64,

var printJobPayload = {
    "printerId": 402555,
    "title": "brother test",
    "contentType": "pdf_base64",
    "content": pdfData,
    "source": "javascript api client"
}
/*setTimeout(sendPrint(printJobPayload)
, 1000);*/

//POSTIN'
/*let data = {};
let formdata = new FormData(/*theform);


formdata.append('attachment', pdfData);
formdata.append('address', 'gallagherj7@gmail.com'); //get this from form

for (let tuple of formdata.entries()) data[tuple[0]] = tuple[1];*/

var myObj = { "image":pdfData, "address":"gallagherj7@gmail.com"};
var myJSON = JSON.stringify(myObj);

var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://127.0.0.1:3000', true);
xhr.setRequestHeader('Content-Type', 'application/JSON; charset=UTF-8');
xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
};
//console.log(printJobPayload);
xhr.send(myJSON);


}


//END KEYBOARD

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

//BEGIN PRINTNODE

 var API_KEY = '423fb5c4788db17fd798ee56e7214563be2935d2';

   var options = {
    // changes the value of 'this' in the success, error, timeout and complete
    // handlers. The default value of 'this' is the instance of the PrintNodeApi
    // object used to make the api call
    context: null,
    // called if the api call was a 2xx success
    success: function (response, headers, xhrObject) {
        console.log(this);
        console.log("success", response, headers);
    },
    // called if the api call failed in any way
    error: function (response, headers, xhrObject) {
        console.log("error", response, headers);
    },
    // called afer the api call has completed after success or error callback
    complete: function (xhrObject) {
      console.log(
          "%d %s %s returned %db in %dms",
          response.xhr.status,
          response.reqMethod,
          response.reqUrl,
          response.xhr.responseText.length,
          response.getDuration()
      );
    },
    // called if the api call timed out
    timeout: function (url, duration) {
        console.log("timeout", url, duration)
    },
    // the timeout duration in ms
    timeoutDuration: 3000
};

var api = new PrintNode.HTTP(
    new PrintNode.HTTP.ApiKey(API_KEY),
    options
);

            
/*var printJobPayload = {
    "printerId": 400871,
    "title": "hahah it works lol",
    "contentType": "pdf_base64",
    "content": "",
    "source": "javascript api client"
}*/
function sendPrint(printJobPayload){
api.createPrintjob(options, printJobPayload);
}




//END PRINTNODE

//PDF CANVAS STUFF  
/*function saveYokey(){
var doc = new jsPDF({
  orientation: 'landscape',
  unit: 'in',
  format: [4, 2]
})

doc.text('Hello world!', 1, 1)
doc.save('photoprint.pdf')
}
*/
//END CANVAS