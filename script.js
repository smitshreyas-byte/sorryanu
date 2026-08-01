/* =====================================
   SORRY FOR ANU
   COMMON JAVASCRIPT
   Shreyash ❤️ Anu
===================================== */



// ===============================
// PAGE FADE IN
// ===============================


document.addEventListener("DOMContentLoaded",()=>{


document.body.style.opacity="0";


setTimeout(()=>{

document.body.style.transition="opacity 1.2s ease";

document.body.style.opacity="1";


},100);



});





// ===============================
// PAGE TRANSITION
// ===============================


function goToPage(page){


document.body.style.transition="opacity .8s ease";


document.body.style.opacity="0";


setTimeout(()=>{


window.location.href=page;


},800);


}






// ===============================
// ROSE PETALS
// ===============================


function createPetal(){


let petal=document.createElement("div");


petal.className="petal";


petal.innerHTML="🌹";



petal.style.left=Math.random()*100+"vw";



petal.style.fontSize=

(15+Math.random()*20)+"px";



petal.style.animationDuration=

(8+Math.random()*8)+"s";



document.body.appendChild(petal);



setTimeout(()=>{


petal.remove();


},16000);



}





setInterval(createPetal,1200);







// ===============================
// FLOATING HEARTS
// ===============================


function createHeart(){


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML=

["❤️","💕","💖","✨"]
[Math.floor(Math.random()*4)];



heart.style.left=Math.random()*100+"vw";



heart.style.animationDuration=

(7+Math.random()*8)+"s";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},15000);


}



setInterval(createHeart,2000);







// ===============================
// SPARKLE EFFECT
// ===============================


function createSparkle(){


let sparkle=document.createElement("div");


sparkle.className="sparkle";



sparkle.style.left=

Math.random()*100+"vw";


sparkle.style.top=

Math.random()*100+"vh";



document.body.appendChild(sparkle);



setTimeout(()=>{


sparkle.remove();


},5000);



}



setInterval(createSparkle,1000);







// ===============================
// MUSIC SYSTEM
// ===============================



let music;



function startMusic(){


music=document.getElementById("music");


if(!music) return;



music.volume=.45;



music.play()
.then(()=>{


localStorage.setItem(
"musicPlaying",
"true"
);


})
.catch(()=>{


console.log(
"Music waiting for user interaction"
);


});


}






function stopMusic(){


if(music){


music.pause();


localStorage.setItem(
"musicPlaying",
"false"
);


}


}








// Continue music between pages


window.addEventListener(
"load",
()=>{


let saved=

localStorage.getItem(
"musicPlaying"
);



if(saved==="true"){


startMusic();


}


});







// ===============================
// BUTTON CLICK SOUND
// ===============================



document.addEventListener(
"click",
(e)=>{


if(
e.target.tagName==="BUTTON"
){


e.target.style.transform="scale(.95)";


setTimeout(()=>{


e.target.style.transform="";


},150);



}


});








// ===============================
// TYPING EFFECT
// ===============================


function typingEffect(element,text,speed=50){


let i=0;


element.innerHTML="";



function type(){


if(i<text.length){


element.innerHTML+=text.charAt(i);


i++;


setTimeout(type,speed);


}


}


type();



}






// ===============================
// BACK TO TOP
// ===============================


function topPage(){


window.scrollTo({

top:0,

behavior:"smooth"

});


}
