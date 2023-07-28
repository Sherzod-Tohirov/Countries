document.addEventListener('DOMContentLoaded', function() {
  let elHeaderBtn = document.querySelector('.site-header__btn');
  let elSiteHeader = document.querySelector('.site-header');
  let elLogoImg = document.querySelector('.logo__img');
  let siteBody = document.querySelector('.site-body');
  let elBelgiumBack = document.querySelector('.country-info__back-link');
  let elCountryName = document.querySelector('.country-info__name');
  let elCountryInfoTitles = document.querySelectorAll('.country-info__title');
  let elCountryInfoDescs = document.querySelectorAll('.country-info__desc');
  let elAddDesc = document.querySelector('.country-info__additional-desc');
  let elAddDescStages = document.querySelectorAll('.country-info__additional-desc-stage');
  elHeaderBtn.addEventListener('click', () => {
  	add_toggle(elBelgiumBack, 'dark-mode-header');
  	add_toggle(elBelgiumBack, 'country-info__back-link--dark-mode');
  	add_toggle(elSiteHeader, 'dark-mode-header');
  	add_toggle(elHeaderBtn, 'dark-mode-text-color');
  	add_toggle(siteBody, 'dark-mode-main');
  	add_toggle(elCountryName, 'dark-mode-text-color');
  	add_dark_mode(elCountryInfoTitles, 'dark-mode-text-color');
  	add_dark_mode(elCountryInfoDescs, 'dark-mode-text-color');
  	add_toggle(elAddDesc, 'dark-mode-main');
  	add_dark_mode(elAddDescStages, 'dark-mode-header');
  	 if(!elLogoImg.src.endsWith("/images/logo.svg")) {
   	 elLogoImg.src = "../images/logo.svg";
     }else {
   	 elLogoImg.src = "../images/logodarkmode.svg";
     }

  });
});


function add_dark_mode(element, css_class) {
	element.forEach(item => {
   	item.classList.toggle(`${css_class}`);
   });
}

function add_toggle(element, css_class) {
	element.classList.toggle(`${css_class}`);
}
