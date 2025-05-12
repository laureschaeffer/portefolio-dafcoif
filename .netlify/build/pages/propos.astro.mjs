import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../chunks/astro/server_CP-bybCP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$App } from '../chunks/App_20xDLAZq.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_wWWMq5Xw.mjs';
import { t as travail2, a as travail6 } from '../chunks/travail_6_CKl0AfWe.mjs';
export { renderers } from '../renderers.mjs';

const profilImage = new Proxy({"src":"/_astro/profil.CoemCmgf.jpg","width":959,"height":633,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/profil.jpg";
							}
							
							return target[name];
						}
					});

const iconeImage = new Proxy({"src":"/_astro/icone_1.C7B18Pd0.png","width":103,"height":92,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/icone_1.png";
							}
							
							return target[name];
						}
					});

const balayageImage = new Proxy({"src":"/_astro/travail_9.Ce0PuY5O.jpg","width":642,"height":856,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/travail_9.jpg";
							}
							
							return target[name];
						}
					});

const $$Propos = createComponent(($$result, $$props, $$slots) => {
  const specialites = [
    {
      titre: "Balayage",
      description: "Technique de coloration qui cr\xE9e un d\xE9grad\xE9 naturel et lumineux, parfait pour ajouter de la dimension.",
      image: balayageImage,
      alt: "exemple balayage"
    },
    {
      titre: "Couleur cr\xE9ative",
      description: "Des couleurs vibrantes et audacieuses pour ceux qui souhaitent exprimer leur personnalit\xE9 unique.",
      image: travail2,
      alt: "exemple couleur cr\xE9ative"
    },
    {
      titre: "Coupe alternative",
      description: "Des styles innovants et originaux pour affirmer votre individualit\xE9 avec audace.",
      image: travail6,
      alt: "exemple coupe alternative"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$App, { "title": "Dafcoiff - A propos", "description": "D\xE9couvrez [Nom du Salon], votre coiffeuse coloriste originale \xE0 Strasbourg. Sp\xE9cialiste des couleurs audacieuses, du balayage sur-mesure et des transformations capillaires uniques. Offrez \xE0 vos cheveux une touche de cr\xE9ativit\xE9 et de style !" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-10 px-4"> <h1 class="titre text-center">A propos</h1> <!-- container --> <div class="flex flex-col items-center py-12 gap-12 md:grid md:grid-cols-2 md:py-20 md:px-16"> <p class="text-center md:text-left">
Je crois que les cheveux sont une forme d'expression personnelle. Mon approche est centrée sur l'écoute et la compréhension de vos désirs, tout en tenant compte de vos habitudes avec vos cheveux. <br><br>
La santé capillaire est primordiale dans mon travail, car une belle chevelure commence par des cheveux en bonne santé.
</p> <div class="flex justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": profilImage, "alt": "Photo de Daphn\xE9" })} </div> <!-- style ici  --> <div class="card__daf flex flex-col items-center border-2 border-[#C2A7FF] py-6 px-4 gap-6"> <h2 class="titre whitespace-nowrap">Daphné, 'Dafcoiff'</h2> <p class="text-center">est une coiffeuse <span class="lavende">créative</span> basée à Strasbourg</p> </div> <div class="card__citation flex flex-col items-center text-center gap-4"> ${renderComponent($$result2, "Image", $$Image, { "src": iconeImage, "alt": "Icone \xE9tincelle", "class": "w-8" })} <span class="sous-titre">“Ma coiffure c'est entre du tuning et Kim Kardashian”</span> ${renderComponent($$result2, "Image", $$Image, { "src": iconeImage, "alt": "Icone \xE9tincelle", "class": "w-8" })} </div> </div> </section>  <div class="flex flex-col items-center gap-6 py-6 bg-[#630ACD] text-white text-center md:flex-row md:justify-around"> <!-- card --> <div class="flex flex-col items-center"> <span class="titre">7</span> <span>ans de pratique</span> </div> <!-- card --> <div class="flex flex-col items-center"> <span class="titre">+500</span> <span>cheveux pimpés</span> </div> <!-- card --> <div class="flex flex-col items-center"> <span class="titre">+100</span> <span>clients réguliers</span> </div> </div>  <section class="py-20 px-4"> <h2 class="titre text-center">Mes spécialités</h2> <!-- container cards --> <div class="flex flex-col items-center gap-8 mt-8 md:flex-row md:justify-center xl:justify-evenly"> ${specialites.map(({ titre, description, image, alt }) => renderTemplate`<article class="card__specialite w-full max-w-[300px] flex flex-col items-center"> <figure class="cropped-figure"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": alt, "class": "cropped-img" })} </figure> <div class="flex flex-col justify-center bg-lavende text-black py-4 px-2 w-[300px] h-[170px] text-center" id="specialite__card-content"> <h3 class="sous-titre">${titre}</h3> <p class="text-sm">${description}</p> </div> </article>`)} </div> </section> ${renderScript($$result2, "C:/laragon/www/portefolio-dafcoif/src/pages/propos.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/laragon/www/portefolio-dafcoif/src/pages/propos.astro", void 0);

const $$file = "C:/laragon/www/portefolio-dafcoif/src/pages/propos.astro";
const $$url = "/propos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Propos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
