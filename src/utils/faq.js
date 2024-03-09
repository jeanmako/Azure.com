const faqPage = () => {

// Active menu

const tabs = document.querySelectorAll('.tab-btn');
const faqGroup = document.querySelectorAll('.group');

tabs.forEach((tab, index) => {
    tab.addEventListener('click',() =>{
        tabs.forEach(tab => {tab.classList.remove('active')});
        tab.classList.add('active');


        faqGroup.forEach(group => {group.classList.remove('active')});
        faqGroup[index].classList.add('active');
    } );
});


// Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer?.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');
        
        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle body

        groupBody.classList.toggle('open');

        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if(otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');

            }
        }); 
    });
});

};

export default faqPage;
