// (i) расположить
// (i) поменять set
import {
   isMobile,
} from "./isMobile.js"


function headerAccordions() {

   const set = {
      innerWidth: 769,
   }

   function accordions() {

      const eventTarget = event.target

      if (eventTarget.closest('[data-header-accordion-button]')) {

         const wrapper = eventTarget.closest('[data-header-accordion]')
         const targetContent = wrapper.querySelector('[data-header-accordion-content]')

         if (targetContent.classList.contains('_active')) {
            // если нажали на активный то свернуть его
            targetContent.classList.remove('_active')
            targetContent.style.maxHeight = '0'
            targetContent.closest('[data-header-accordion]').classList.remove('_active')
         } else {
            // если нажали на не активный то свернуть активные
            const contents = document.querySelectorAll('[data-header-accordion-content]')
            contents.forEach((content) => {
               if (content === targetContent) {
                  // а таргет открыть
                  content.classList.add('_active')
                  content.style.maxHeight = content.scrollHeight + 'px'
                  content.closest('[data-header-accordion]').classList.add('_active')

               } else {
                  // то свернуть активные
                  content.classList.remove('_active')
                  content.style.maxHeight = '0'
                  content.closest('[data-header-accordion]').classList.remove('_active')

               }
            })
         }

      }

   }

   if (window.innerWidth < set.innerWidth) {
      document.addEventListener('click', accordions)
   } else {
      document.removeEventListener('click', accordions)

      const elems = document.querySelectorAll('[data-header-accordion-content]')
      elems.forEach((accordion) => {
         accordion.style.maxHeight = ''
      })

   }

   // корекция высоты при девтулзе
   window.addEventListener('resize', (event) => {

      const activeAccordion = document.querySelector('[data-header-accordion-content]._active')
      if (activeAccordion) {
         activeAccordion.style.maxHeight = activeAccordion.scrollHeight + 'px'
      }

      if (window.innerWidth < set.innerWidth) {
         document.addEventListener('click', accordions)
         document.removeEventListener('click', spoiler)

      } else {
         document.removeEventListener('click', accordions)

         if (isMobile.any()) {
            document.addEventListener('click', spoiler)
         }

         const elems = document.querySelectorAll('[data-header-accordion-content]')
         elems.forEach((elem) => {
            elem.style.maxHeight = ''

            // то свернуть активные
            elem.classList.remove('_active')
            elem.closest('[data-header-accordion]').classList.remove('_active')
         })



      }

   })

   if (window.innerWidth < set.innerWidth) {
      document.removeEventListener('click', spoiler)

   } else {

      if (isMobile.any()) {

         document.addEventListener('click', spoiler)
      }

   }


   function spoiler() {

      const eventTarget = event.target

      if (eventTarget.closest('[data-header-accordion]')) {

         if (!eventTarget.closest('[data-header-accordion]').classList.contains('_visible')) {
            eventTarget.closest('[data-header-accordion]').classList.add('_visible')
         } else {
            eventTarget.closest('[data-header-accordion]').classList.remove('_visible')
         }
      } else {
         document.querySelector('[data-header-accordion]').classList.remove('_visible')
      }


   }


}

export { headerAccordions }






