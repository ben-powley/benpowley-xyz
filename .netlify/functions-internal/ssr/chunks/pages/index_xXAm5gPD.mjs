/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_D1Cxd8LB.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx } from 'react/jsx-runtime';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-slate-900 text-slate-100"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/benpowley/Dev/randd/benpowley-xyz/src/layouts/Layout.astro", void 0);

const TestReactComponent = () => {
  return /* @__PURE__ */ jsx("div", { children: "This is a React component." });
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-12 font-bold"> <h1 class="text-6xl">benpowley<span class="opacity-20">.xyz</span></h1> ${renderComponent($$result2, "TestReactComponent", TestReactComponent, {})} </main> ` })}`;
}, "/Users/benpowley/Dev/randd/benpowley-xyz/src/pages/index.astro", void 0);

const $$file = "/Users/benpowley/Dev/randd/benpowley-xyz/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
