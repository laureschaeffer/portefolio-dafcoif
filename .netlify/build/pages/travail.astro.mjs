import { d as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CP-bybCP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$App } from '../chunks/App_20xDLAZq.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_wWWMq5Xw.mjs';
import { t as travail2, a as travail6 } from '../chunks/travail_6_CKl0AfWe.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$CardTravail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardTravail;
  const { imgSrc, titre } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative group"> ${renderComponent($$result, "Image", $$Image, { "src": imgSrc, "width": 300, "alt": titre, "class": "w-full object-cover rounded-lg shadow-lg" })} <!-- hover pour desktop --> <div class="absolute inset-0 bg-black flex flex-col items-center gap-6 pb-6 justify-end text-white text-center opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg"> <h3 class="text-lg font-bold">${titre}</h3> </div> <!-- text version mobile --> <div class="md:hidden text-center mt-2"> <h3 class="text-lg font-bold">${titre}</h3> </div> </div>`;
}, "C:/laragon/www/portefolio-dafcoif/src/components/CardTravail.astro", void 0);

const travail1 = new Proxy({"src":"/_astro/travail_1.nOqZr8Ja.jpg","width":642,"height":856,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/travail_1.jpg";
							}
							
							return target[name];
						}
					});

const travail3 = new Proxy({"src":"/_astro/travail_3.B2RWugCO.jpg","width":642,"height":856,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/travail_3.jpg";
							}
							
							return target[name];
						}
					});

const travail4 = new Proxy({"src":"/_astro/travail_4.DgQ7-aTU.jpg","width":642,"height":856,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/travail_4.jpg";
							}
							
							return target[name];
						}
					});

const travail5 = new Proxy({"src":"/_astro/travail_5.D-XrVpDk.jpg","width":642,"height":856,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/travail_5.jpg";
							}
							
							return target[name];
						}
					});

const travail7 = new Proxy({"src":"/_astro/travail_7.DxK8nk2Q.jpg","width":642,"height":856,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/travail_7.jpg";
							}
							
							return target[name];
						}
					});

const travail8 = new Proxy({"src":"/_astro/travail_8.BJSCIgf0.jpg","width":638,"height":850,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/travail_8.jpg";
							}
							
							return target[name];
						}
					});

const $$Travail = createComponent(($$result, $$props, $$slots) => {
  const dataCards = [
    {
      imgSrc: travail1,
      titre: "Couleur cr\xE9ative"
    },
    {
      imgSrc: travail2,
      titre: "Balayage"
    },
    {
      imgSrc: travail3,
      titre: "Couleur cr\xE9ative"
    },
    {
      imgSrc: travail4,
      titre: "Couleur cr\xE9ative"
    },
    {
      imgSrc: travail5,
      titre: "Couleur"
    },
    {
      imgSrc: travail6,
      titre: "Balayage"
    },
    {
      imgSrc: travail7,
      titre: "Couleur"
    },
    {
      imgSrc: travail8,
      titre: "Couleur"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$App, { "title": "Mon travail", "description": "D\xE9couvrez [Nom du Salon], votre coiffeuse coloriste originale \xE0 Strasbourg. Sp\xE9cialiste des couleurs audacieuses, du balayage sur-mesure et des transformations capillaires uniques. Offrez \xE0 vos cheveux une touche de cr\xE9ativit\xE9 et de style !" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center"> <div class="bg-[#331858] shadow-xl pt-10 pl-4 pr-4 pb-4" style="background: linear-gradient(rgb(0 0 0 / 20%), rgba(0, 0, 0, 0), rgb(0 0 0 / 20%));"> <h1 class="titre">Mon travail</h1> <p class="py-12">Découvrez une sélection de mes travaux de coloration. Chaque chevelure raconte une histoire unique, reflétant la personnalité et les désirs de mes clients.</p> <p>Suivez-moi sur Instagram pour plus de créations <a href="https://www.instagram.com/daf_boy/" target="_blank" class="underline">@daf_boy</a></p> </div> <!-- choix de 9 photos --> <div class="flex justify-center flex-wrap gap-10 mt-10"> ${dataCards.map(
    (data) => renderTemplate`${renderComponent($$result2, "CardTravail", $$CardTravail, { "imgSrc": data.imgSrc, "titre": data.titre })}`
  )} </div> </section> ` })}`;
}, "C:/laragon/www/portefolio-dafcoif/src/pages/travail.astro", void 0);

const $$file = "C:/laragon/www/portefolio-dafcoif/src/pages/travail.astro";
const $$url = "/travail";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Travail,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
