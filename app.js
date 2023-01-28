const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const homePageSection = document.querySelector('.homePageSection');
const channelPageSection = document.querySelector('.channelPageSection');
const videoPageSection = document.querySelector('.videoPageSection');
const welcomePage = document.querySelector('.welcomePage');
const YTlogo = document.querySelector('.header__main_info');

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


function HP() {
   YTlogo.classList.toggle('HP');
}
function CP() {
   YTlogo.classList.toggle('CP');
}
function VP() {
   YTlogo.classList.toggle('VP');
}

function backBtn() {
   if (YTlogo.classList.contains("HP")) {
      toggleHomePage();
      toggleHeader();
      toggleSidebar();
      toggleWelcomePage();
      HP();
   } 
   else if (YTlogo.classList.contains("CP")) {
      toggleChannelPage();
      toggleHeader();
      toggleSidebar();
      toggleWelcomePage();
      CP();
   } 
   else if (YTlogo.classList.contains("VP")) {
      toggleVideoPage();
      toggleHeader();
      toggleWelcomePage();
      VP();
   } 
}


homePageBtn.addEventListener('click', e => {
   e.preventDefault();
   toggleSidebar()
   toggleHeader();
   toggleHomePage();  
   toggleWelcomePage(); 
   HP();   
});

channelPageBtn.addEventListener('click', e => {
   e.preventDefault();
   toggleSidebar()
   toggleHeader();
   toggleChannelPage();  
   toggleWelcomePage();
   CP();
});

videoPageBtn.addEventListener('click', e => {
   e.preventDefault();
   toggleHeader();
   toggleVideoPage();    
   toggleWelcomePage();
   VP();  
});

YTlogo.addEventListener('click', e => {
   e.preventDefault();
   backBtn();
});


