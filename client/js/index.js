import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';


buildPage();

function buildPage(){
    footer();
    header();
    navContact();
    navHome();
    navProjects();
}

function footer(){
    const footerElem = document.querySelector('.footer');
    footerElem.innerHTML = Footer();
}

function header(){
    const headerElem = document.querySelector('.header');
    headerElem.innerHTML = Header();
}

function navContact(){
    const contactElem = document.querySelector('.nav-list__contact');
    contactElem.addEventListener('click', ()=>{
        const app = document.querySelector('#app');
        app.innerHTML = Contact();
    });
}

function navHome(){
    const homeElem = document.querySelector('.nav-list__home');
    homeElem.addEventListener('click', ()=>{
        const app = document.querySelector('#app');
        app.innerHTML = Home();
    });
}

function navProjects(){
    const ProjectsElem = document.querySelector('.nav-list__projects');
    ProjectsElem.addEventListener('click', ()=>{
        const app = document.querySelector('#app');
        app.innerHTML = Projects();
    });
}