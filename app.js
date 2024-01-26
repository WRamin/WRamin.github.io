const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content');


function pageTransitions () {
    //Button clicked active class and not the unactive button
    for (let i = 0; i <sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            //"this" refers to this fuction its in
            this.className += ' active-btn';
        })
    }

};

pageTransitions ()