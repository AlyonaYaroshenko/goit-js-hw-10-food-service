import menu from '../src/menu.json';
import menuMarkUpFunction from '../src/templates/cards.hbs';

const menuList = document.querySelector('.js-menu');
const checkboxSwitchTheme = document.querySelector('#theme-switch-toggle');
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

checkboxSwitchTheme.addEventListener('change', changeTheme);
function changeTheme() {
    if (checkboxSwitchTheme.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    };
}

    if (localStorage.getItem('theme') === 'dark-theme') {
        body.classList.add('dark-theme');
        checkboxSwitchTheme.checked = true;
    }
