import menu from '../src/menu.json';
import menuMarkUpFunction from '../src/templates/cards.hbs';

const menuList = document.querySelector('.js-menu');
// const createMenuFunction = createMenu(menu);
menuList.insertAdjacentHTML('beforeend', createMenu(menu));

function createMenu(menu) {
    return menuMarkUpFunction(menu);
};


menuList.addEventListener('click', onMenuClick);