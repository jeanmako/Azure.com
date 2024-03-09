import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

import '../styles/modern-normal.css'
import '../styles/style.css'
import '../styles/parts/header.css'
import '../styles/parts/showcase.css'
import '../styles/parts/mission.css'
import '../styles/parts/choice.css'
import '../styles/parts/steps.css'
import '../styles/parts/news.css'
import '../styles/parts/expert.css'
import '../styles/parts/info.css'
import '../styles/parts/more.css'
import '../styles/parts/arrow-up.css'
import '../styles/parts/footer.css'
import '../styles/parts/about-us.css'
import '../styles/parts/academics.css'
import '../styles/parts/mobile-nav.css'
import '../styles/parts/team.css'
import '../styles/parts/pricing.css'
import '../styles/parts/contact.css'
import '../styles/parts/faq.css'
import '../styles/parts/portal.css'
import '../styles/parts/apply.css'
import '../styles/parts/consult-expert.css'
import '../styles/parts/search.css'
import '../styles/parts/grades.css'
import '../styles/parts/dashboard.css'
import '../styles/parts/counter.css'
import '../styles/parts/dropdown.css'
import '../styles/utils.css'

import searchBox from './utils/search';
import azureCounter from './utils/counter';
import faqPage from './utils/faq';
import accordionPage from './utils/accordion';
import dashboardMenu from './utils/dashboard';
import applyForm from './utils/form';
import hamburgerMenu from './utils/hamburger';
import contactForm from './utils/contactForm';


searchBox();
azureCounter();
applyForm();
faqPage();
accordionPage();
dashboardMenu();
hamburgerMenu();
contactForm();




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show');
            }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));