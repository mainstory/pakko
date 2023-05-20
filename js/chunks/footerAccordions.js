// (i) расположить
// (i) поменять set

function footerAccordions() {

   const set = {
      innerWidth: 480,
   }

   const mains = document.querySelectorAll('[data-footer-accordions-main]')
   mains.forEach((main) => {
      
      function accordions() {

         const eventTarget = event.target
   
         if (eventTarget.closest('[data-footer-accordion-button]')) {
   
            const wrapper = eventTarget.closest('[data-footer-accordion]')
            const targetContent = wrapper.querySelector('[data-footer-accordion-content]')
   
            if (targetContent.classList.contains('_active')) {
               // если нажали на активный то свернуть его
               targetContent.classList.remove('_active')
               targetContent.style.maxHeight = '0'
               targetContent.closest('[data-footer-accordion]').classList.remove('_active')
            } else {
               // если нажали на не активный то свернуть активные
               const contents = document.querySelectorAll('[data-footer-accordion-content]')
               contents.forEach((content) => {
                  if (content === targetContent) {
                     // а таргет открыть
                     content.classList.add('_active')
                     content.style.maxHeight = content.scrollHeight + 'px'
                     content.closest('[data-footer-accordion]').classList.add('_active')
   
                  } else {
                     // то свернуть активные
                     content.classList.remove('_active')
                     content.style.maxHeight = '0'
                     content.closest('[data-footer-accordion]').classList.remove('_active')
   
                  }
               })
            }
   
         }
   
      }


      if (window.innerWidth < set.innerWidth) {
         main.addEventListener('click', accordions)
      } else {
         main.removeEventListener('click', accordions)
   
         const elems = document.querySelectorAll('[data-footer-accordion-content]')
         elems.forEach((accordion) => {
            accordion.style.maxHeight = ''
         })
   
      }
   
      // корекция высоты при девтулзе
      window.addEventListener('resize', (event) => {
   
         const activeAccordion = document.querySelector('[data-footer-accordion-content]._active')
         if (activeAccordion) {
            activeAccordion.style.maxHeight = activeAccordion.scrollHeight + 'px'
         }
   
         if (window.innerWidth < set.innerWidth) {
            main.addEventListener('click', accordions)
         } else {
            main.removeEventListener('click', accordions)
   
            const elems = document.querySelectorAll('[data-footer-accordion-content]')
            elems.forEach((elem) => {
               elem.style.maxHeight = ''
   
               // то свернуть активные
               elem.classList.remove('_active')
               elem.closest('[data-footer-accordion]').classList.remove('_active')
            })
   
   
   
         }
   
      })
   
   


   })





}
export { footerAccordions }






