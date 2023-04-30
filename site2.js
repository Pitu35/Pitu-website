 let menubar =document.querySelector('#menubar');
 let navbar =document.querySelector('.navbar');

 menubar .onclik=() =>{
    menubar.classList .toggle('fa-xmark');
    navbar.classList  .toggle('active');
 }
 
 window .onscroll=() =>{
     if(window.scrollY >0){
        Document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
        }
   
    menubar.classList .remove('fa-xmark');
    navbar.classList  .remove('active');
 }
 
 window .onload=() =>{
    if(window.scrollY >0){
       Document.querySelector('.header').classList.add('active');
       }else{
           document.querySelector('.header').classList.remove('active');
       }
  
   }
 document.querySelector ('#close-login-btn').onclick =() =>{
    document.querySelector ('.login-form-container').classList.remove('active');
}


document.querySelector('.home').onmousemove =(e) =>{
    document.querySelector('.home-parallax').forEach(element =>{
     let speed =element.getAttribute('data-speed')

     let x=(window.innerWidth -e.pageX *speed) /90;
     let y=(window.innerHeight -e.pageY *speed) /90;

     element.style.transform = `translateX(${y}px) translateY(${x}px)`;
    })
        
    }

    document.querySelector('.home').onmouseleave =(e) =>{
        document.querySelector('.home-parallax').forEach(element =>{
         
    
         element.style.transform = `translateX(0px) translateY(0px)`;
        })
            
        }
    