import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CP-bybCP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$App } from '../chunks/App_20xDLAZq.mjs';
export { renderers } from '../renderers.mjs';

const $$MentionsLegales = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$App, { "title": "Mentions l\xE9gales", "description": "Informations l\xE9gales et politique de confidentialit\xE9" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-10 px-4 flex flex-col gap-4"> <h1 class="text-center titre">Mentions légales</h1> <h2 class="sous-titre">1. Informations légales</h2> <p>Le site que vous consultez actuellement est la propriété de :</p> <ul> <li><strong>Laure Schaeffer</strong></li> <li>Email : laure.schaeffer(at)hotmail.com</li> </ul> <p>Ce site est hébergé par la société :</p> <ul> <li><strong>Netlify</strong></li> <li>Site web : <a href="https://www.netlify.com/" target="_blank" rel="noopener">https://www.netlify.com/</a></li> </ul> <h2 class="sous-titre">2. Données personnelles</h2> <p>Les informations que vous communiquez via le formulaire sont confidentielles et envoyées à <strong>Daphné</strong> pour qu'elle puisse vous recontacter. Elles ne feront l'objet d'aucune commercialisation.</p> <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification, de modification et de suppression des données personnelles que vous nous avez communiquées. Vous pouvez exercer ce droit en envoyant un email à : daphneklock13(at)gmail.com</p> <h2 class="sous-titre">3. Cookies</h2> <p>Notre site n'utilise aucun cookie.</p> </section> ` })}`;
}, "C:/laragon/www/portefolio-dafcoif/src/pages/mentions-legales.astro", void 0);

const $$file = "C:/laragon/www/portefolio-dafcoif/src/pages/mentions-legales.astro";
const $$url = "/mentions-legales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MentionsLegales,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
