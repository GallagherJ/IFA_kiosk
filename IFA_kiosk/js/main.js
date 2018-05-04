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

  button.onclick = video.onclick = function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    img.src = canvas.toDataURL('image/webp');
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
