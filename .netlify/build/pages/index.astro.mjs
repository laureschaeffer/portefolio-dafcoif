import { c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate, b as renderScript } from '../chunks/astro/server_CP-bybCP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$App } from '../chunks/App_20xDLAZq.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_wWWMq5Xw.mjs';
export { renderers } from '../renderers.mjs';

const logoImage = new Proxy({"src":"/_astro/logo_1.2.HQ31CnET.webp","width":1080,"height":480,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/logo/logo_1.2.webp";
							}
							
							return target[name];
						}
					});

const illusCafeImg1 = new Proxy({"src":"/_astro/illuscafe_1.D8Mcqk2X.jpg","width":1277,"height":1277,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/illuscafe_1.jpg";
							}
							
							return target[name];
						}
					});

const illusCafeImg2 = new Proxy({"src":"/_astro/illuscafe_2.3t07tF2_.jpg","width":1440,"height":1440,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/illuscafe_2.jpg";
							}
							
							return target[name];
						}
					});

const illusCafeImg3 = new Proxy({"src":"/_astro/illuscafe_3.o7Jl77B5.jpg","width":1440,"height":1440,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/illuscafe_3.jpg";
							}
							
							return target[name];
						}
					});

const insta1 = new Proxy({"src":"/_astro/insta_1.BQ8lv2W4.jpg","width":1440,"height":1439,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/insta/insta_1.jpg";
							}
							
							return target[name];
						}
					});

const insta2 = new Proxy({"src":"/_astro/insta_2.2BZRpwQr.webp","width":1284,"height":1605,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/insta/insta_2.webp";
							}
							
							return target[name];
						}
					});

const insta3 = new Proxy({"src":"/_astro/insta_3.Bh_-c_aY.webp","width":1284,"height":1283,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/portefolio-dafcoif/src/assets/img/insta/insta_3.webp";
							}
							
							return target[name];
						}
					});

const $$InstagramFeed = createComponent(($$result, $$props, $$slots) => {
  const data = [
    {
      link: "https://www.instagram.com/p/DJL_V02s6UK/?img_index=1",
      media_url: insta1,
      caption: `"April dump Que de l'amour au final \u{1F5A4}\u2728\u2728\u{1F5A4}"`
    },
    {
      link: "https://www.instagram.com/p/DHGo26dMw-P/?img_index=1",
      media_url: insta2,
      caption: `"Mon nouveau set d'ongles est ma nouvelle personnalit\xE9"`
    },
    {
      link: "https://www.instagram.com/p/DB0y9UAM2cA/?img_index=1",
      media_url: insta3,
      caption: '"\u{1F987} October dump \u{1F987}"'
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap items-start justify-center gap-x-20 gap-y-8 px-12"> ${data?.map((post) => renderTemplate`<a${addAttribute(post.link, "href")} target="_blank" class="card__insta"> <figure class="cropped-figure"> ${renderComponent($$result, "Image", $$Image, { "src": post.media_url, "alt": "post instagram dafcoiff", "loading": "eager", "class": "cropped-img border-solid border-2 border-[#EDE5FF] delay-100 hover:opacity-80 duration-300", "width": 300, "height": 350 })} <figcaption> ${post.caption ?? ""} </figcaption> </figure> </a>`)}</div>`;
}, "C:/laragon/www/portefolio-dafcoif/src/components/InstagramFeed.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    { icon: "fa-hand-sparkles", label: "Approche personnalis\xE9e" },
    { icon: "fa-scissors", label: "Sant\xE9 capillaire prioritaire" },
    { icon: "fa-leaf", label: "Produits premium" }
  ];
  const prestations = [
    { title: "Coupe", description: "Coupe sur tout type de longueur", isFirst: true },
    { title: "Accompagnement", description: "Conseil personnalis\xE9" },
    { title: "Couleur", description: "Projet sur mesure, du plus classique au plus cr\xE9atif" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$App, { "title": "Dafcoiff - Accueil", "description": "D\xE9couvrez Dafcoiff, votre coiffeuse coloriste originale \xE0 Strasbourg. Sp\xE9cialiste des couleurs audacieuses, du balayage sur-mesure et des transformations capillaires uniques. Offrez \xE0 vos cheveux une touche de cr\xE9ativit\xE9 et de style !" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="w-[90%] mx-auto py-20 flex flex-col-reverse md:flex-row items-center gap-7"> <!-- partie de gauche --> <div class="flex flex-col gap-5 text-center md:text-left md:flex-1"> <h1 class="titre"> <span class="block text-end">Coiffeuse</span> <span class="block text-center lavende">coloriste</span> <span class="block text-start">à Strasbourg</span> </h1> <p>
Les cheveux étant un reflet de la personnalité, il est important que vous puissiez l'exprimer de la façon dont vous voulez.
</p> <a href="/propos" class="underline">En savoir plus sur Daphné</a> </div> <!-- partie de droite --> <div class="flex-1 flex justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": logoImage, "alt": "Logo dafcoiff", "loading": "eager", "width": 675, "height": 300 })} </div> </section>  <div class="flex flex-col md:flex-row justify-center gap-8 py-10 px-4 lg:py-20"> ${cards.map((card) => renderTemplate`<div class="flex flex-col items-center p-6 gap-4 bg-[#331858] card__home opacity-0 translate-y-10" style="box-shadow: 12px 11px #C2A7FF;"> <i${addAttribute(`fa-solid ${card.icon} text-2xl`, "class")}></i> <span>${card.label}</span> </div>`)} </div>  <div class="grid justify-center gap-8 py-10 px-4 lg:py-40" id="illuscafe"> ${renderComponent($$result2, "Image", $$Image, { "src": illusCafeImg1, "width": 460, "height": 460, "alt": "Illustration de la collaboration Illuscafe et Dafcoiff", "class": "card__illuscafe" })} <div class="card__illuscafe flex flex-col justify-center items-center border-2 border-[#EDE5FF] p-6 gap-6"> <h2 class="titre lavende">Illuscafe x Dafcoiff</h2> <span class="text-center">Collaboration entre le graphiste Illuscafe et Dafcoiff</span> </div> ${renderComponent($$result2, "Image", $$Image, { "src": illusCafeImg2, "width": 460, "height": 460, "alt": "Illustration de la collaboration Illuscafe et Dafcoiff", "class": "card__illuscafe" })} ${renderComponent($$result2, "Image", $$Image, { "src": illusCafeImg3, "width": 460, "height": 460, "alt": "Illustration de la collaboration Illuscafe et Dafcoiff", "class": "card__illuscafe" })} </div>  <section class="py-20 px-4 lg:py-20"> <h2 class="sous-titre text-center mb-6">Prestations</h2> <div class="space-y-6"> ${prestations.map((item, index) => {
    const borderClasses = item.isFirst ? "border-y-2" : "border-b-2";
    return renderTemplate`<div${addAttribute(`flex flex-col pb-4 md:flex-row md:items-end md:gap-8 md:mx-16 ${borderClasses} border-[#EDE5FF] ${item.isFirst ? "pt-4" : ""}`, "class")}> <h3 class="text-2xl font-bold">${item.title}</h3> <span>${item.description}</span> </div>`;
  })} </div> </section>  <section class="py-10 text-center lg:py-20"> <h3 class="sous-titre">Instagram</h3> <p class="text-xl underline my-4"> <a href="https://www.instagram.com/daf_boy/" target="_blank">@daf_boy</a> </p> ${renderComponent($$result2, "InstagramFeed", $$InstagramFeed, {})} </section> ${renderScript($$result2, "C:/laragon/www/portefolio-dafcoif/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/laragon/www/portefolio-dafcoif/src/pages/index.astro", void 0);

const $$file = "C:/laragon/www/portefolio-dafcoif/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
