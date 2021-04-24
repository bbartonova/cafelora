import './style.css';
import { Layer } from './Layer/index';

console.log('funguju!');

//3. Zprovoznění navigace

// 3.1 V JavaScriptu vyberte ze stránky ikonku #nav-btn. Připojte k ní posluchač události click. Tento posluchač odebere nebo přidá třídu nav-closed na prvku nav. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('#nav');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

// 3.2 Připojte posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.

const navLinkElms = document.querySelectorAll('.nav-link');

for (let i = 0; i < navLinkElms.lenght; i++) {
  navLinkElms[i].addEventListener('click', () => {
    navElm.classList.add('nav-closed');
  });
}

// pomocí forEach
// navLinkElms.forEach((item) => {
//   item.addEventListener('click', () => {
//     navElm.classList.toggle('nav-closed');
//   });
// });

// 3.3 Jakmile je váš kód funkční, proveďte commmit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.

// 4. Objednávání
// to dáš
// Zařiďte, aby fungovalo objednávání jednotlivých nápojů. Zatím na stránce vidíme pouze jeden, poději jich však bude mnohem více.

// 4.1 Na tlačíko .order-btn pověste posluchač, který při kliknutí přidá na prvek .drink__cup třídu .drink__cup--selected. Zároveň změní nápis na tlačítku na Zrušit.

const orderBtnElm = document.querySelector('.order-btn'); //lze samozřejmě přidat id a přes hash tahat
const drinkCupElm = document.querySelector('.drink__cup');
let ordered = false; // možná by to šlo jen s let ordered, ale pak by bylo undefined a nemusely by ty true false fungovat dobře

orderBtnElm.addEventListener('click', () => {
  if (!ordered) {
    drinkCupElm.classList.add('drink__cup--selected');
    orderBtnElm.textContent = 'Zrušit';
    ordered = true;
  } else {
    drinkCupElm.classList.remove('drink__cup--selected');
    orderBtnElm.textContent = 'Objednat';
    ordered = false; // na false, abychom mohli zase objednat
  }
});

// 4.2 Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a nápis na tlačítku se vrátil zpět na Objednat. Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou ordered, která bude obsahovat true nebo false podle toho, zde je nápoj objednaný či nikoliv. - viz výše let ordered

// 4.3 Ve chvíli, kdy máte objednávání funkční commitněte váš kód se smysluplnou zprávnou a pushněte jej.

// cvičení5

const drinkInfoElm = document.querySelector('.drink__info');
drinkInfoElm.innerHTML +=
  Layer({
    color: '#feeeca',
    label: 'mléčná pěna',
  }) +
  Layer({
    color: '#fed7b0',
    label: 'teplé mléko',
  }) +
  Layer({
    color: '#613916',
    label: 'espresso',
  });
