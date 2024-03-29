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

    //sections active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id ){
            //remove the selected from the other buttons 
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');


            //hide other sects
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
        

};

pageTransitions ()