import './style.css';

console.log('funguju!');

//3. Zprovoznění navigace

// 3.1 V JavaScriptu vyberte ze stránky ikonku #nav-btn. Připojte k ní posluchač události click. Tento posluchač odebere nebo přidá třídu nav-closed na prvku nav. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('#nav');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

// 3.2 Připojte posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.

navLinkElms = document.querySelectorAll('.nav-link');

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
