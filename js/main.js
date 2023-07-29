document.addEventListener('DOMContentLoaded', function() {


let elHeaderBtn = document.querySelector('.site-header__btn');
let elSiteHeader = document.querySelector('.site-header');
let siteBody = document.querySelector('.site-body');
let elCountries = document.querySelector('.countries');
let elItems = document.querySelectorAll('.country');
let elSearchInputWrapper = document.querySelector('.countries__search-input-wrapper');
let elSearchInput = document.querySelector('.countries__search-input');
let elSearchFilter = document.querySelector('.countries__filter');
let elLogoImg = document.querySelector('.logo__img');
let elCountryName = document.querySelectorAll('.country__name');
let elCountryDesc = document.querySelectorAll('.country__desc');
let elCountryText = document.querySelectorAll('.country__text'); 
let elBelgiumBack = document.querySelector('.country-info__back-link');
   elHeaderBtn.addEventListener('click', () => {
   add_toggle(elHeaderBtn, 'dark-mode-text-color');
   add_toggle(elHeaderBtn, 'site-header__btn--dark-mode');
   add_toggle(elSiteHeader, 'dark-mode-header');
   add_toggle(siteBody, 'dark-mode-main');
   add_toggle(elSearchInput, 'dark-mode-header');
   add_toggle(elSearchFilter, 'dark-mode-header');
   add_toggle(elSearchInputWrapper, 'countries__search-input-wrapper--dark-mode'); 
   add_toggle(elSearchInput, 'countries__search-input--dark-mode');
   add_dark_mode(elItems, 'dark-mode-items');
   add_dark_mode(elCountryName, 'dark-mode-text-color');
   add_dark_mode(elCountryDesc, 'dark-mode-text-color');
   add_dark_mode(elCountryText, 'dark-mode-text-color');
   if(!elLogoImg.src.endsWith("/images/logo.svg")) {
   	 elLogoImg.src = "./images/logo.svg";
   }else {
   	 elLogoImg.src = "./images/logodarkmode.svg";
   }
   
   if(elSearchFilter.style.backgroundImage != 'url("./images/arrdndarkmode.svg")') {
      elSearchFilter.style.backgroundImage = 'url("./images/arrdndarkmode.svg")';
   }else {
   	elSearchFilter.style.backgroundImage = 'url("./images/arrdn.svg")';
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

