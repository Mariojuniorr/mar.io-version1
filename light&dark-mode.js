const toggle = document.querySelector('#toggleDark');
const homeBackground = document.querySelector('.Homebackground');
const homeTitle = document.querySelector('.Hometitle');
const fixedTitle = document.querySelector('.Title-fixed');
const skillsBackground = document.querySelector('.Skills-background');


toggle.addEventListener('click', function(){
    if(this.classList.toggle('toggle')){
        homeBackground.style.background = 'black';
        homeBackground.style.transition = '2s';
        homeTitle.style.color = 'white';
        homeTitle.style.transition = '3s';
        fixedTitle.style.display = 'none';
        skillsBackground.style.background = 'black';
        skillsBackground.style.color = 'white';

    }else{
        homeBackground.style.background = 'white';
        homeBackground.style.transition = '2s';
        homeTitle.style.color = 'black';
        homeTitle.style.transition = '3s';
        fixedTitle.style.display = 'flex';
        fixedTitle.style.position = 'fixed';
        skillsBackground.style.background = 'white';
        skillsBackground.style.color = 'black';
    }
})
