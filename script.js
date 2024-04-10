const Aniket = document.querySelector('.aniket');
const run = document.querySelector('#run');
const button = document.querySelector('.btn');
const yesBtn = document.querySelector('#yes-btn');
const noBtn = document.querySelector('#no-btn');

yesBtn.addEventListener('click', () => { 
    run.innerHTML = 'I Love You Too :)';
    var nomads = document.getElementById("nomads");
    nomads.innerHTML = '<source src="kiss.jpg.mp4" type="video/mp4">';
    var video = document.getElementById("nomads");
    video.load();
});

noBtn.addEventListener("click", function() {
    window.open("love.bat","_blank");



});
