import { d as createAstro, c as createComponent, e as addAttribute, a as renderTemplate, m as maybeRenderHead, s as spreadAttributes, k as renderSlot, r as renderComponent, b as renderScript, l as renderHead } from './astro/server_CP-bybCP.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const SITE_TITLE = "Daf Coif";

const $$Astro$2 = createAstro("https://example.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Orbit&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "C:/laragon/www/portefolio-dafcoif/src/components/BaseHead.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/laragon/www/portefolio-dafcoif/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav class="flex flex-row items-center justify-between px-6 py-4 shadow-xl bg-[#1d053e]"> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "titre logo" }, { "default": ($$result2) => renderTemplate`Dafcoiff` })} <!-- menu burger --> <button id="menu-toggle" class="md:hidden text-xl">
&#9776;
</button> <!-- Menu de navigation --> <div id="menu" class="hidden md:flex flex-col md:flex-row gap-6 text-xl absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent shadow-md md:shadow-none p-4 md:p-0"> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/propos", "class": "hover:opacity-80 duration-300" }, { "default": ($$result2) => renderTemplate`A propos` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/travail", "class": "hover:opacity-80 duration-300" }, { "default": ($$result2) => renderTemplate`Travail` })} <a href="https://www.instagram.com/daf_boy/" target="_blank" aria-label="lien profil instagram dafcoiff" class="hidden hover:opacity-80 duration-300 md:block"><i class="fa-brands fa-instagram"></i></a> </div> </nav> </header> ${renderScript($$result, "C:/laragon/www/portefolio-dafcoif/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/laragon/www/portefolio-dafcoif/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col gap-4 px-4 py-4 mt-10 bg-[#1d053e] border-t-1 md:flex-row md:gap-6 md:py-8 lg:justify-around"> <div class="flex flex-col gap-4"> <a href="/" class="titre logo">Dafcoiff</a>
&copy; ${today.getFullYear()} Laure Schaeffer. Tous droits réservés.
</div> <div class="flex flex-col gap-4 md:flex-row"> <ul> <li class="font-bold text-lg">Pages</li> <li class="pb-2"><a href="/propos" class="underline hover:opacity-80 duration-300">A propos</a></li> <li class="pb-2"><a href="/travail" class="underline hover:opacity-80 duration-300">Travail</a></li> </ul> <ul> <li class="font-bold text-lg">Légal</li> <li><a href="/mentions-legales" class="underline hover:opacity-80 duration-300">Mentions Légales</a></li> </ul> </div> </footer>`;
}, "C:/laragon/www/portefolio-dafcoif/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$App = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$App;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body> <div id="wrapper"> ${renderComponent($$result, "Header", $$Header, {})} <div id="stars1"></div> <div id="stars2"></div> <div id="stars3"></div> <main> <!-- ici contenu des pages enfants --> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "C:/laragon/www/portefolio-dafcoif/src/layouts/App.astro", void 0);

export { $$App as $ };
