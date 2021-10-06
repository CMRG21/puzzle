window.onload = function () {

    let myImage = document.querySelector('img');
    
    myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/1.1.png') {
       myImage.setAttribute('src', 'images/2.1.png');
      } 
      if(mySrc === 'images/2.1.png') {
         myImage.setAttribute('src', 'images/3.1.png');
      }
      if(mySrc === 'images/3.1.png') {
      myImage.setAttribute('src', 'images/1.1.png');
      }

    };

    //    myImage.onclick = function() {
    //    let mySrc = myImage.getAttribute('src');
    //    if(mySrc === 'images/1.1.png') {
    //      myImage.setAttribute('src', 'images/1.2.png');
    //    } 
    //    if(mySrc === 'images/1.2.png') {
    //      myImage.setAttribute('src', 'images/1.3.png');
    //    }
    //    if(mySrc === 'images/1.3.png') {
    //      myImage.setAttribute('src', 'images/1.1.png');
     //   }