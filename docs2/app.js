const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

function pageTransitions(){
    //button click active class
    for(let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', () => {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })
    }
}

pageTransitions()