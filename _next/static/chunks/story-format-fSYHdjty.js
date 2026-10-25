import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
var r = e(t(), 1);
function i(e) {
  if (!/^https:\/\/t\.me\/[A-Za-z][A-Za-z0-9_]*\/[1-9]\d*$/.test(e))
    throw Error(`Invalid Telegram post URL`);
  return `${e}?embed=1&userpic=false`;
}
function a(e, t) {
  if (
    !t ||
    e.origin !== `https://t.me` ||
    e.source !== t ||
    typeof e.data != `string`
  )
    return null;
  try {
    let t = JSON.parse(e.data);
    return !t ||
      typeof t != `object` ||
      !(`event` in t) ||
      t.event !== `resize` ||
      !(`height` in t) ||
      typeof t.height != `number` ||
      !Number.isFinite(t.height) ||
      t.height <= 0
      ? null
      : Math.ceil(t.height);
  } catch {
    return null;
  }
}
var o = n();
function s({ url: e, title: t, onHeight: n, loadOnMount: r = !1 }) {
  return (0, o.jsx)(c, { url: e, title: t, onHeight: n, loadOnMount: r }, e);
}
function c({ url: e, title: t, onHeight: n, loadOnMount: s }) {
  let c = (0, r.useRef)(null),
    l = (0, r.useRef)(null),
    [u, d] = (0, r.useState)(s),
    [f, p] = (0, r.useState)(null),
    [m, h] = (0, r.useState)(0),
    g = i(e);
  return (
    (0, r.useEffect)(() => {
      let e = navigator.connection,
        t = l.current;
      if (!t || u || e?.saveData || typeof IntersectionObserver != `function`)
        return;
      let n = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (d(!0), n.disconnect());
        },
        { rootMargin: `300px` }
      );
      return n.observe(t), () => n.disconnect();
    }, [u]),
    (0, r.useEffect)(() => {
      if (!u) return;
      let e = c.current;
      if (!e) return;
      let t = (e) => {
        let t = a(e, c.current?.contentWindow ?? null);
        t !== null && (p(t), n?.(t));
      };
      return (
        window.addEventListener(`message`, t),
        (e.src = g),
        () => window.removeEventListener(`message`, t)
      );
    }, [g, m, n, u]),
    (0, o.jsxs)(`div`, {
      ref: l,
      className: `telegram-post-embed`,
      "data-resized": f !== null,
      children: [
        f === null &&
          (0, o.jsxs)(`div`, {
            className: `telegram-embed-fallback`,
            children: [
              (0, o.jsx)(`span`, {
                children: u ? `Post not loading?` : `Original Telegram post`,
              }),
              (0, o.jsx)(`a`, {
                href: e,
                target: `_blank`,
                rel: `noopener noreferrer`,
                children: `Open original ↗`,
              }),
              (0, o.jsx)(`button`, {
                type: `button`,
                onClick: () => {
                  d(!0), h((e) => e + 1);
                },
                children: u ? `Try again` : `Load full post`,
              }),
            ],
          }),
        (0, o.jsx)(
          `iframe`,
          {
            ref: c,
            "data-post-url": e,
            title: t,
            width: `100%`,
            height: f ?? 1100,
            scrolling: f === null ? `auto` : `no`,
            loading: `lazy`,
            referrerPolicy: `no-referrer`,
            allowFullScreen: !0,
          },
          `${e}-${m}`
        ),
        (0, o.jsx)(`noscript`, {
          children: `Embedded posts need JavaScript. Select “Open original” to read the full post on Telegram.`,
        }),
      ],
    })
  );
}
var l = `en-GB`,
  u = (e) =>
    new Intl.DateTimeFormat(l, {
      day: `2-digit`,
      month: `short`,
      year: `numeric`,
      timeZone: `UTC`,
    }).format(new Date(e)),
  d = (e) =>
    new Intl.DateTimeFormat(l, {
      hour: `2-digit`,
      minute: `2-digit`,
      second: `2-digit`,
      hourCycle: `h23`,
      timeZone: `UTC`,
    }).format(new Date(e)) + ` UTC`;
export { s as i, d as n, l as r, u as t };
