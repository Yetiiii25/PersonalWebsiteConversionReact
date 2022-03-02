
window.onload=function(){
    
    const doc = document;
    const menuOpen = doc.querySelector(".menu");
    const menuClose = doc.querySelector(".close");
    const overlay = doc.querySelector(".overlay");
    
    menuOpen.addEventListener("click", () => {
      overlay.classList.add("overlay--active");
    });
    
    menuClose.addEventListener("click", () => {
      overlay.classList.remove("overlay--active");
    });
    }



// window.onscroll = function () {
//   myFunction()
// };

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


