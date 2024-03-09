const accordionPage = () => {

const pages = document.querySelectorAll('.accessible-menu-btn');
const accessibleGroup = document.querySelectorAll('.main');

pages.forEach((page, index) => {
    page.addEventListener('click',() =>{
        pages.forEach(page => {page.classList.remove('active')});
        page.classList.add('active');


        accessibleGroup.forEach(main => {main.classList.remove('active')});
        accessibleGroup[index].classList.add('active');
    } );
});


// Accordion

document.addEventListener('DOMContentLoaded', () => {
    const accordionContainer = document.querySelector('.accordion-content');

    accordionContainer?.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.accordion-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.accordion-group-body');
        const icon = groupHeader.querySelector('i');

         // Toggle icon
         icon.classList.toggle('fa-plus');
         icon.classList.toggle('fa-close');

         // Toggle body

        groupBody.classList.toggle('open');

        const otherGroups = accordionContainer.querySelectorAll('.accordion-group');

        otherGroups.forEach((otherGroup) => {
            if(otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.accordion-group-body');
                const otherIcon = otherGroup.querySelector('.accordion-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-close');
                otherIcon.classList.add('fa-plus');

            }
        }); 
    });
});

};

export default accordionPage;
