import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { t as r } from "./arrow-up-right-BpVuVI5W.js";
import { a as i, i as a, n as o, r as s, t as c } from "./dialog-GtuMoOPd.js";
import { i as l } from "./story-format-fSYHdjty.js";
var u = e(t(), 1),
  d = n();
function f({
  url: e,
  title: t,
  children: n,
  className: f,
  style: p,
  onPreview: m,
}) {
  let [h, g] = (0, u.useState)(!1);
  return (0, d.jsxs)(c, {
    open: h,
    onOpenChange: g,
    children: [
      (0, d.jsx)(i, {
        className: f ?? `source-view-button`,
        style: p,
        onMouseEnter: m,
        onFocus: m,
        "aria-label": t,
        children: n,
      }),
      (0, d.jsxs)(o, {
        className: `source-post-dialog`,
        children: [
          (0, d.jsxs)(`div`, {
            className: `source-view-heading`,
            children: [
              (0, d.jsx)(`span`, {
                className: `source-view-kicker`,
                children: `Straight from the channel`,
              }),
              (0, d.jsx)(a, { children: t }),
              (0, d.jsx)(s, {
                children: `Original words, media and timestamp. Loading this post connects to Telegram.`,
              }),
              (0, d.jsxs)(`a`, {
                href: e,
                target: `_blank`,
                rel: `noreferrer`,
                children: [`Open on Telegram `, (0, d.jsx)(r, { size: 15 })],
              }),
            ],
          }),
          (0, d.jsx)(`div`, {
            className: `source-view-reading`,
            children: h && (0, d.jsx)(l, { url: e, title: t }),
          }),
        ],
      }),
    ],
  });
}
export { f as t };
