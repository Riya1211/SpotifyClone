const allArtists = document.getElementById('allArtists');
const contentFrame = document.getElementById('contentFrame');
const mainContent = document.querySelector('.mainContent');

allArtists.addEventListener('click', (event) => {
    mainContent.style.display = 'none';
    contentFrame.style.display = 'block';
    contentFrame.src = 'popularArtistsPage.html';
})