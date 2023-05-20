import {
   burgerMenu,
} from "./chunks/burgerMenu.js"
import {
   headerAccordions,
} from "./chunks/headerAccordions.js"
import {
   popup,
} from "./chunks/popup.js"
import {
   footerAccordions,
} from "./chunks/footerAccordions.js"
import {
   headerAnimation,
} from "./chunks/headerAnimation.js"


burgerMenu()
headerAccordions()
popup()
footerAccordions()
headerAnimation()


// (i) addition
const preloader = document.querySelector('[data-preloader]')
setTimeout(() => {
   
   preloader.classList.add('_close')

   document.querySelector('body').style.paddingRight = `0px`
   document.querySelector('body').style.overflowY = `auto`

   // функции
   new WOW(
      {
         mobile: false,
      }
   ).init();

}, 1000)
