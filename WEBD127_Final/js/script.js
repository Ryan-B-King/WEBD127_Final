const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const accordionItemHeaders = document.querySelectorAll ('.accordion-item-header')


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {
        const currentlyActiveAccordionItemHeader = document.querySelector('.accordion-item-header.active')
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle('active')
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight=0
        }

        accordionItemHeader.classList.toggle('active')
        const accordionItemBody = accordionItemHeader.nextElementSibling
        if(accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'
        } else {
            accordionItemBody.style.maxHeight = 0
        }
    })
})
