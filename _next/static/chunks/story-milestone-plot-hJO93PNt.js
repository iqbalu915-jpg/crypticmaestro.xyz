import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { t as r } from "./arrow-left-D6wix-Qx.js";
import { t as i } from "./arrow-right-BEtrTvYA.js";
import { t as a } from "./arrow-up-right-BpVuVI5W.js";
import { t as o } from "./button-BFvZYHow.js";
import { n as s, r as c, t as l } from "./story-format-fSYHdjty.js";
import { t as u } from "./source-post-dialog-BiM4D_hb.js";
var d = e(t(), 1),
  f = n(),
  p = () => () => {},
  m = () => !0,
  h = () => !1;
function g({
  points: e,
  symbol: t,
  callUrl: n,
  callLabel: g = `Original call`,
  callChannel: _,
  callMarketCap: v,
}) {
  let [y, b] = (0, d.useState)(e.length - 1),
    [x, S] = (0, d.useState)(``),
    C = (0, d.useSyncExternalStore)(p, m, h),
    w = (0, d.useId)(),
    T = (0, d.useRef)(null),
    E = e[Math.min(y, e.length - 1)],
    D = Math.max(...e.map((e) => e.multiple)),
    O = (e) => new Intl.NumberFormat(c, { maximumFractionDigits: 2 }).format(e),
    k = (n) => {
      let r = Math.max(0, Math.min(e.length - 1, y + n)),
        i = e[r];
      b(r);
      let a = T.current,
        o = a?.children[r];
      a &&
        o &&
        a.scrollTo({
          left:
            o.offsetLeft - a.offsetLeft - (a.clientWidth - o.clientWidth) / 2,
        }),
        S(
          `${t}: ${
            r === 0
              ? `Call, 1x reference`
              : `${O(i.multiple)}x reported in the channel`
          }, ${l(i.postedAt)}, ${s(i.postedAt)}`
        );
    },
    A = (0, f.jsxs)(f.Fragment, {
      children: [
        (0, f.jsxs)(`div`, {
          className: `milestone-bars-heading`,
          children: [
            (0, f.jsx)(`span`, { children: `Reported milestones` }),
            (0, f.jsxs)(`span`, { children: [`0–`, O(D), `x · Linear scale`] }),
          ],
        }),
        (0, f.jsx)(`ol`, {
          className: `milestone-bars`,
          ref: T,
          "aria-label": `Source timeline and reported posts for ${t}`,
          children: e.map((e, r) => {
            let i = r === 0 ? n : e.url,
              a = `${t} · ${
                r === 0 ? `Original call` : `${O(e.multiple)}x channel update`
              } · ${l(e.postedAt)}`,
              o = (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsx)(`span`, {
                    className: `milestone-bar-track`,
                    "aria-hidden": `true`,
                    children: (0, f.jsx)(`span`, {
                      className: `milestone-bar-fill`,
                    }),
                  }),
                  (0, f.jsx)(`span`, {
                    className: `milestone-timeline-node`,
                    "aria-hidden": `true`,
                    children: (0, f.jsx)(`span`, {}),
                  }),
                  (0, f.jsx)(`span`, {
                    className: `milestone-bar-kind`,
                    children: r === 0 ? g : `${O(e.multiple)}x update`,
                  }),
                  (0, f.jsx)(`span`, {
                    className: `milestone-timeline-channel`,
                    children:
                      r === 0
                        ? `${_ ?? `Call`} · 1x reference`
                        : e.sourceChannel ?? `Channel update`,
                  }),
                  (0, f.jsx)(`time`, {
                    dateTime: e.postedAt,
                    className: `milestone-timeline-date`,
                    children: l(e.postedAt),
                  }),
                  (0, f.jsx)(`span`, {
                    className: `milestone-timeline-time`,
                    children: s(e.postedAt),
                  }),
                  r === 0 &&
                    v &&
                    (0, f.jsxs)(`span`, {
                      className: `milestone-call-cap`,
                      children: [
                        (0, f.jsx)(`span`, { children: `Market cap at call` }),
                        (0, f.jsx)(`strong`, { children: v.value }),
                        (0, f.jsx)(`small`, { children: v.note }),
                      ],
                    }),
                ],
              });
            return (0, f.jsx)(
              `li`,
              {
                "data-selected": r === y,
                "data-reference": r === 0,
                style: {
                  "--bar-height": `${((e.multiple / D) * 100).toFixed(4)}%`,
                },
                children: i
                  ? (0, f.jsx)(u, {
                      url: i,
                      title: a,
                      className: `milestone-bar-button`,
                      onPreview: () => b(r),
                      children: o,
                    })
                  : (0, f.jsx)(`div`, {
                      className: `milestone-bar-button`,
                      children: o,
                    }),
              },
              i ?? `call-reference`
            );
          }),
        }),
      ],
    });
  return (0, f.jsxs)(f.Fragment, {
    children: [
      (0, f.jsxs)(`div`, {
        className: `story-milestone-readout`,
        id: `${w}-readout`,
        children: [
          (0, f.jsxs)(`div`, {
            className: `milestone-selected-label`,
            children: [
              (0, f.jsx)(`span`, {
                className: `milestone-eyebrow`,
                children: `From the channel`,
              }),
              (0, f.jsx)(`strong`, {
                children:
                  y === 0
                    ? `Call · 1x reference`
                    : `${O(E.multiple)}x reported`,
              }),
              (0, f.jsx)(`time`, {
                dateTime: E.postedAt,
                title: s(E.postedAt),
                children: l(E.postedAt),
              }),
            ],
          }),
          (0, f.jsxs)(`div`, {
            className: `milestone-actions`,
            children: [
              (E.url || (y === 0 && n)) &&
                (0, f.jsxs)(u, {
                  url: E.url ?? n,
                  title: `${t} · ${
                    y === 0
                      ? `Original call`
                      : `${O(E.multiple)}x channel update`
                  } · ${l(E.postedAt)}`,
                  children: [
                    `Read original post `,
                    (0, f.jsx)(a, { size: 14, "aria-hidden": `true` }),
                  ],
                }),
              (0, f.jsxs)(`fieldset`, {
                className: `milestone-navigation`,
                "aria-label": `Milestones for ${t}`,
                children: [
                  (0, f.jsx)(o, {
                    type: `button`,
                    variant: `ghost`,
                    size: `icon`,
                    disabled: !C || y === 0,
                    "aria-label": `Previous milestone for ${t}`,
                    "aria-controls": `${w}-readout`,
                    onClick: () => k(-1),
                    children: (0, f.jsx)(r, {
                      size: 16,
                      "aria-hidden": `true`,
                    }),
                  }),
                  (0, f.jsx)(o, {
                    type: `button`,
                    variant: `ghost`,
                    size: `icon`,
                    disabled: !C || y === e.length - 1,
                    "aria-label": `Next milestone for ${t}`,
                    "aria-controls": `${w}-readout`,
                    onClick: () => k(1),
                    children: (0, f.jsx)(i, {
                      size: 16,
                      "aria-hidden": `true`,
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      A,
      (0, f.jsx)(`output`, {
        className: `sr-only`,
        "aria-live": `polite`,
        "aria-atomic": `true`,
        children: x,
      }),
    ],
  });
}
export { g as StoryMilestonePlot };
