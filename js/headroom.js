$(function () {
   var myElement = document.querySelector(".navigation");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 
// console.log("innit");
});
/* SHOW ELEMENT AFTER PAGE IS SCROLLED 100px */
var win = window,
    docEl = document.documentElement,
    $logo = document.querySelector(".navigation");

win.onscroll = function(){
   var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
 //  console.log(window);
   if (sTop < window.innerHeight) {

   	if(!$logo.classList.contains('white')){
   		$logo.classList.add("white");
   	}
   } else{
   	$logo.classList.remove("white");
   }
   //console.log($logo.classList);
   //$logo.style.display =  sTop > window.innerHeight ? "block":"none" ;
};

