import menu from '../src/menu.json';
import menuMarkUpFunction from '../src/templates/cards.hbs';

const menuList = document.querySelector('.js-menu');
const checkbox = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
// const createMenuFunction = createMenu(menu);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

menuList.insertAdjacentHTML('beforeend', createMenu(menu));
function createMenu(menu) {
    return menuMarkUpFunction(menu);
};


checkbox.addEventListener('change', changeTheme);
function changeTheme(event) {
    console.log(event.currentTarget.checked);
    if (event.currentTarget.checked === true) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}