import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_CP-bybCP.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/laragon/www/portefolio-dafcoif/","cacheDir":"file:///C:/laragon/www/portefolio-dafcoif/node_modules/.astro/","outDir":"file:///C:/laragon/www/portefolio-dafcoif/dist/","srcDir":"file:///C:/laragon/www/portefolio-dafcoif/src/","publicDir":"file:///C:/laragon/www/portefolio-dafcoif/public/","buildClientDir":"file:///C:/laragon/www/portefolio-dafcoif/dist/","buildServerDir":"file:///C:/laragon/www/portefolio-dafcoif/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.4D6bKhql.css"}],"routeData":{"route":"/mentions-legales","isIndex":false,"type":"page","pattern":"^\\/mentions-legales\\/?$","segments":[[{"content":"mentions-legales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mentions-legales.astro","pathname":"/mentions-legales","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.4D6bKhql.css"}],"routeData":{"route":"/propos","isIndex":false,"type":"page","pattern":"^\\/propos\\/?$","segments":[[{"content":"propos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/propos.astro","pathname":"/propos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.4D6bKhql.css"}],"routeData":{"route":"/travail","isIndex":false,"type":"page","pattern":"^\\/travail\\/?$","segments":[[{"content":"travail","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/travail.astro","pathname":"/travail","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.4D6bKhql.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/laragon/www/portefolio-dafcoif/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/portefolio-dafcoif/src/pages/mentions-legales.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/portefolio-dafcoif/src/pages/propos.astro",{"propagation":"none","containsHead":true}],["C:/laragon/www/portefolio-dafcoif/src/pages/travail.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/mentions-legales@_@astro":"pages/mentions-legales.astro.mjs","\u0000@astro-page:src/pages/propos@_@astro":"pages/propos.astro.mjs","\u0000@astro-page:src/pages/travail@_@astro":"pages/travail.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BQFt3aa4.mjs","C:/laragon/www/portefolio-dafcoif/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/laragon/www/portefolio-dafcoif/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CdPzyIxa.mjs","C:/laragon/www/portefolio-dafcoif/src/pages/propos.astro?astro&type=script&index=0&lang.ts":"_astro/propos.astro_astro_type_script_index_0_lang.Bmk9eknx.js","C:/laragon/www/portefolio-dafcoif/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.WRI7H30J.js","C:/laragon/www/portefolio-dafcoif/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BK7-jVfw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/laragon/www/portefolio-dafcoif/src/components/Header.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"menu-toggle\"),e=document.getElementById(\"menu\");t.addEventListener(\"click\",()=>{e.classList.toggle(\"hidden\"),e.classList.toggle(\"flex\"),e.classList.add(\"bg-[#1d053e]\")});"]],"assets":["/_astro/logo_1.2.HQ31CnET.webp","/_astro/illuscafe_1.D8Mcqk2X.jpg","/_astro/illuscafe_2.3t07tF2_.jpg","/_astro/illuscafe_3.o7Jl77B5.jpg","/_astro/profil.CoemCmgf.jpg","/_astro/travail_10.kJYc9dhN.jpg","/_astro/icone_1.C7B18Pd0.png","/_astro/travail_11.BFlcU02H.jpg","/_astro/travail_1.nOqZr8Ja.jpg","/_astro/travail_2.Cfm6SJg4.jpg","/_astro/travail_4.DgQ7-aTU.jpg","/_astro/travail_8.BJSCIgf0.jpg","/_astro/travail_7.DxK8nk2Q.jpg","/_astro/travail_5.D-XrVpDk.jpg","/_astro/travail_6.DEVYSzfq.jpg","/_astro/travail_3.B2RWugCO.jpg","/_astro/insta_3.Bh_-c_aY.webp","/_astro/insta_1.BQ8lv2W4.jpg","/_astro/insta_2.2BZRpwQr.webp","/_astro/index.4D6bKhql.css","/favicon.svg","/_astro/index.astro_astro_type_script_index_0_lang.WRI7H30J.js","/_astro/propos.astro_astro_type_script_index_0_lang.Bmk9eknx.js","/_astro/ScrollTrigger.CKx49QUS.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"bMF+zQXnCng1xBXEx736wFTyhyVb0wIG84Q/2n3ymPc=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\laragon\\www\\portefolio-dafcoif\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
