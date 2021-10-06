let pic1=document.getElementById("pic1")
let pic2=document.getElementById("pic2")
let pic3=document.getElementById("pic3")
a=["images/1.png","images/2.png","images/3.png"]
x=["images/1.1.png","images/2.1.png","images/3.1.png"]
y=["images/1.2.png","images/2.2.png","images/3.2.png"]
z=["images/1.3.png","images/2.3.png","images/3.3.png"]
i=0;
j=1;
l=2;
      pic1.onclick = function(){
      i+=1
      pic1.src=x[parseInt(i%3)]


    }

      pic2.onclick = function(){
      j+=1
      pic2.src=y[parseInt(j%3)]
    
        
    }
      pic3.onclick = function(){
      l+=1
      pic3.src=z[parseInt(l%3)]
      

    }


    window.setInterval(function(){
      if((i%3==j%3)&&(j%3==l%3)){
          
          pic1.onclick=null;
          pic2.onclick=null;
          pic3.onclick=null;
         
      }    
    },10)
