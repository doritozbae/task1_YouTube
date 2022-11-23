const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const homePageSection = document.querySelector('.homePageSection');
const channelPageSection = document.querySelector('.channelPageSection');
const videoPageSection = document.querySelector('.videoPageSection');
const welcomePage = document.querySelector('.welcomePage');

const homePageBtn = document.querySelector('.welcomePage_btn1');
const channelPageBtn = document.querySelector('.welcomePage_btn2');
const videoPageBtn = document.querySelector('.welcomePage_btn3');

function toggleHeader() {
   header.classList.toggle('none');
}

function toggleHomePage() {
   homePageSection.classList.toggle('none');
}

function toggleChannelPage() {
   channelPageSection.classList.toggle('none');
}

function toggleVideoPage() {
   videoPageSection.classList.toggle('none');
}

function toggleWelcomePage() {
   welcomePage.classList.toggle('none');
}

function toggleSidebar() {
   sidebar.classList.toggle('none');
}

homePageBtn.addEventListener('click', e => {
   e.preventDefault();
   toggleSidebar()
   toggleHeader();
   toggleHomePage();  
   toggleWelcomePage()    
});

channelPageBtn.addEventListener('click', e => {
   e.preventDefault();
   toggleSidebar()
   toggleHeader();
   toggleChannelPage();  
   toggleWelcomePage()    
});

videoPageBtn.addEventListener('click', e => {
   e.preventDefault();
   toggleHeader();
   toggleVideoPage();    
   toggleWelcomePage()  
});

