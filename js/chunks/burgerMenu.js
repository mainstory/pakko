// (i) расположить
// (i) поменять set



function burgerMenu() {

   const set = {
      innerWidth: 769,
      // beforebegin \ afterend (menu)
      side: 'beforebegin',
   }
   const { side } = set

   //  базисное
   const open = document.querySelector('[data-burger-menu-open]')
   const menu = document.querySelector('[data-menu]')
   const shadow = document.querySelector('[data-burger-menu-shadow]')
   const close = document.querySelector('[data-burger-menu-close]')
   const bodyburgerMenu = document.querySelector('[data-burger-menu-body]')
   const burgerMenu = document.querySelector('[data-burger-menu]')
   const body = document.querySelector('body')
   const menuPaste = document.querySelector('[data-menu-paste]')


   if (burgerMenu) {

      menu.style.display = "block"

      open.addEventListener('click', (event) => {
         // открыть
         burgerMenu.classList.add('_active')
         shadow.classList.add('_active')
         body.style.overflow = 'hidden'
      })
      close.addEventListener('click', (event) => {
         // зыкрыть
         burgerMenu.classList.remove('_active')
         shadow.classList.remove('_active')
         body.style.overflow = 'auto'

      })
      shadow.addEventListener('click', (event) => {
         // зыкрыть
         burgerMenu.classList.remove('_active')
         shadow.classList.remove('_active')
         body.style.overflow = 'auto'

      })

      // перекидывание меню
      if (window.innerWidth < set.innerWidth) {

         // добавить одноразово
         // console.log('нету добавить')
         const outerHTML = document.querySelector('[data-menu]').outerHTML
         document.querySelector('[data-menu]').remove()
         bodyburgerMenu.innerHTML = outerHTML
         bodyburgerMenu.classList.add('_active')


      } else {

         // убрать одноразово
         // console.log('есть убрать')
         const outerHTML = document.querySelector('[data-menu]').outerHTML
         document.querySelector('[data-menu]').remove()
         menuPaste.insertAdjacentHTML(side, outerHTML)
         bodyburgerMenu.classList.remove('_active')

      }


      // перекидывание меню
      window.addEventListener('resize', (event) => {
         if (window.innerWidth < set.innerWidth) {

            // добавить одноразово
            if (!document.querySelector('[data-burger-menu-body]._active')) {
               // console.log('нету добавить')
               const outerHTML = document.querySelector('[data-menu]').outerHTML
               document.querySelector('[data-menu]').remove()
               bodyburgerMenu.innerHTML = outerHTML
               bodyburgerMenu.classList.add('_active')
            }

         } else {

            // убрать одноразово
            if (document.querySelector('[data-burger-menu-body]._active')) {
               // console.log('есть убрать')

               const outerHTML = document.querySelector('[data-menu]').outerHTML
               document.querySelector('[data-menu]').remove()

               menuPaste.insertAdjacentHTML(side, outerHTML)

               bodyburgerMenu.classList.remove('_active')
            }


         }
      })

   }


}
export {
   burgerMenu,
}


