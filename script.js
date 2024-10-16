const contentFrame = document.getElementById('contentFrame');
const homeButton = document.getElementById('homeButton');
const sideBar = document.querySelector('.searchBar');

window.addEventListener("load", (event) => {
    contentFrame.src = 'homePage.html';
});
sideBar.addEventListener('click', (event) =>{
    contentFrame.src = 'browsePage.html';
});
homeButton.addEventListener('click', (event) =>{
    contentFrame.src = 'homePage.html';
});