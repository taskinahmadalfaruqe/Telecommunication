


 let navber= document.querySelector("nav");
 let top_up= document.querySelector(".top_up");

 window.addEventListener("scroll", function(){
   let scroll_valu=window.scrollY;
   if (scroll_valu > 120) {
     navber.classList.add("nav_stiky");
      top_up.classList.add("top_up_show");
  
   } else {
     navber.classList.remove("nav_stiky");
     top_up.classList.remove("top_up_show");
   }
 })




$(function(){
  
  AOS.init();


// ==================================
//       VENO BOX JS PART START
// ==================================
    $(".venobox").venobox();
// ==================================
//       VENO BOX JS PART END
// ==================================


// ==================================
//       COUNTER UP JS PART START
// ==================================
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
// ==================================
//       COUNTER UP JS PART END
// ==================================


});





// ==================================
//       COUNTDOWN JS PART START
// ==================================
let countDownDate= new Date ("Feb 26, 2023 00:00:00").getTime();
let x= setInterval(function(){
  let today= new Date().getTime();
  let distance= countDownDate - today;
  
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if(distance < 0){
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  };
},1000);
// ==================================
//       COUNTDOWN JS PART END
// ==================================






// ==================================
//       COUNTDOWN JS PART START
// ==================================

// ==================================
//       COUNTDOWN JS PART END
// ==================================



// ==================================
//       COUNTDOWN JS PART START
// ==================================

// ==================================
//       COUNTDOWN JS PART END
// ==================================



// ==================================
//       COUNTDOWN JS PART START
// ==================================

// ==================================
//       COUNTDOWN JS PART END
// ==================================