$(function(){var o=document.querySelector(".navigation");new Headroom(o).init(),console.log("innit")});var win=window,docEl=document.documentElement,$logo=document.querySelector(".navigation");win.onscroll=function(){(this.pageYOffset||docEl.scrollTop)-(docEl.clientTop||0)<window.innerHeight?$logo.classList.contains("white")||$logo.classList.add("white"):$logo.classList.remove("white")};