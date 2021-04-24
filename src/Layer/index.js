import './style.css';

// 5 ¶Ingredience jako komponenty
// to dáš
// Každý nápoj bude obsahovat seznam ingrediencí. Na stránce vidíme příklad pro cappuccino. Budeme chtít, aby ingredience byla komponenta.
// Vytvořte komponentu Layer, která očekává props v následujícím tvaru.
// {
//   color: '#feeeca',
//   label: 'mléčná pěna',
// }
// Komponenta nechť vrací řetězec obsahující výsledné HTML.
// Použijte vaši komponentu a pomocí vlastnosti innerHTML zapojte do stránky tři ingredience pro cappuccino. Stránka by měla pro uživatele vypadat stejně jako na začátku.
// Ve vašem projektu vytvořte pro vaši komponentu separátní složku s názvem Layer. Tato složka bude v souboru index.js obsahovat JavaScript kód vaší komponenty. Kompnentu správně exportujte a správně ji importujte v hlavním index.js celého projektu. Vyzkoušejte, že váš projekt funguje.
// Do složky Layer vložte také soubor style.css a přesuňte do něj CSS styly, které se přímo týkají této komponenty. Nezapomeňte váš CSS soubor správně importovat aby jej Webpack zahrnul do výsledného sestavení.
// Jakmile váš projekt funguje, commitněte váš kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře.

export const Layer = (props) => {
  return `
<div class="layer">
  <div class="layer__color" style="background-color: ${props.color}"></div>
  <div class="layer__label">${props.label}</div>
</div>
`;
};
