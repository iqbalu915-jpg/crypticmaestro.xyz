import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { t as r } from "./image-CekQzb8N.js";
import { L as i } from "./utils-CaPlbFnG.js";
import { t as a } from "./arrow-up-right-BpVuVI5W.js";
import { t as o } from "./download-BpFNrTLD.js";
import { t as s } from "./button-BFvZYHow.js";
import { a as c, i as l, n as u, r as d, t as f } from "./dialog-GtuMoOPd.js";
var p = i(`share-2`, [
    [`circle`, { cx: `18`, cy: `5`, r: `3`, key: `gq8acd` }],
    [`circle`, { cx: `6`, cy: `12`, r: `3`, key: `w7nqdw` }],
    [`circle`, { cx: `18`, cy: `19`, r: `3`, key: `1xt0gg` }],
    [
      `line`,
      { x1: `8.59`, x2: `15.42`, y1: `13.51`, y2: `17.49`, key: `47mynk` },
    ],
    [
      `line`,
      { x1: `15.41`, x2: `8.59`, y1: `6.51`, y2: `10.49`, key: `1n3mei` },
    ],
  ]),
  m = e(t(), 1),
  h = [
    {
      channel: `LionCALL`,
      contractAddress: `0x5a3e6A77ba2f983eC0d371ea3B475F8Bc0811AD5`,
      image: `/tokens/0x0-original-call.jpg`,
      alt: `0x0 brain logo from the original archive post`,
      sourceUrl: `https://t.me/LionCALL/2876`,
      caption: `Artwork from the original call`,
    },
    {
      channel: `LionCALL`,
      contractAddress: `0x5888641e3e6cbea6d84ba81edb217bd691d3be38`,
      image: `/tokens/bobo-original-call.jpg`,
      alt: `BOBO bear in a top hat, with the original archive watermark`,
      sourceUrl: `https://t.me/LionCALL/3767`,
      caption: `Artwork from the original call`,
    },
    {
      channel: `LionCALL`,
      contractAddress: `0x92eD61FB8955Cc4e392781cB8b7cD04AADc43D0c`,
      image: `/tokens/oggy-original-call.jpg`,
      alt: `OGGY INU mascot on yellow, with the original archive watermark`,
      sourceUrl: `https://t.me/LionCALL/3663`,
      caption: `Artwork from the original call`,
    },
    {
      channel: `LionJUNGLE`,
      contractAddress: `864YJRb3JAVARC4FNuDtPKFxdEsYRbB39Nwxkzudxy46`,
      image: `/tokens/habibi-token.jpg`,
      alt: `HABIBI kitten logo from contract-matched project metadata`,
      sourceUrl: `https://dexscreener.com/solana/2ukgjdc99nk34rfrjwjcohauqltlnz8tlcbrdqk3f2ay`,
      caption: `Project artwork · retrieved 7 Sep 2026`,
    },
    {
      channel: `LionJUNGLE`,
      contractAddress: `0xb93746dc7A8bf5E381FFB278085B1F62bd0A1fC8`,
      image: `/tokens/sendex-token.jpg`,
      alt: `Sendex orange and yellow arrow logo`,
      sourceUrl: `https://t.me/SendexAI`,
      caption: `Project artwork · retrieved 7 Sep 2026`,
    },
    {
      channel: `LionJUNGLE`,
      contractAddress: `H1aN3vcvB68eaFPbMkoAss3vnfi4AhP5C2dpnrZzdBc7`,
      image: `/tokens/myra-project-avatar.jpg`,
      alt: `MYRA dog mascot with a pink bow`,
      sourceUrl: `https://t.me/myracoinonsol`,
      caption: `Project artwork · retrieved 7 Sep 2026`,
    },
  ];
function g(e, t) {
  if (!t) return;
  let n = (e) => (e.startsWith(`0x`) ? e.toLowerCase() : e);
  return h.find((r) => r.channel === e && n(r.contractAddress) === n(t));
}
function _(e) {
  return [`lioncall`, `lionjungle`].includes(e);
}
var v = {
  canvasWidth: 1080,
  baseHeight: 1120,
  left: 64,
  width: 952,
  rowHeight: 44,
  callTop: 900,
  updateTop: 944,
};
function y(e) {
  let t = b(e);
  return [
    { id: `call`, label: `Original call`, url: e.callUrl, top: v.callTop },
    {
      id: `update`,
      label: `${t.multiple} update`,
      url: e.updateUrl,
      top: v.updateTop,
    },
  ].flatMap((e) => (e.url ? [{ ...e, url: e.url }] : []));
}
function b(e) {
  if (!Number.isFinite(e.multiple) || e.multiple < 1 || !e.token.trim())
    throw Error(`This story has no valid reported multiple.`);
  let t = (e) => /^https:\/\/t\.me\/[A-Za-z][A-Za-z0-9_]*\/[1-9]\d*$/.test(e);
  if (!t(e.updateUrl) || (e.callUrl && !t(e.callUrl)))
    throw Error(`This story has no valid original source link.`);
  let n = (e) => {
    if (e === null) return `Not confirmed`;
    if (!Number.isFinite(Date.parse(e)))
      throw Error(`This story has an invalid source date.`);
    return new Intl.DateTimeFormat(`en-GB`, {
      day: `2-digit`,
      month: `short`,
      year: `numeric`,
      timeZone: `UTC`,
    }).format(new Date(e));
  };
  return {
    multiple: `${new Intl.NumberFormat(`en-GB`, {
      maximumFractionDigits: 2,
    }).format(e.multiple)}x`,
    callDate: n(e.calledAt),
    updateDate: n(e.updatedAt),
    status: e.disputeKind
      ? `DISPUTED CLAIM · REPORTED BY ${A(e.reportingChannel).toUpperCase()}`
      : `REPORTED BY ${A(e.reportingChannel).toUpperCase()}`,
    qualification:
      e.disputeKind === `price`
        ? `Not supported by the available price data.`
        : e.disputeKind === `source`
        ? `Source conflict. This report is not independently verified.`
        : `Not independently verified. Not a realised return.`,
    preview: _(e.channel === `LionJUNGLE` ? `lionjungle` : `lioncall`)
      ? `FROM THE CHANNEL ARCHIVE · CRYPTIC MAESTRO`
      : `INTERNAL PREVIEW · NOT APPROVED FOR PUBLICATION`,
    footer: `Historical channel report, not a verified profit. Selected story, not an overall success rate. Update date is not the exact price peak. No guarantee of future results.`,
  };
}
function displayChannelName(e) {
  return e === `LionJUNGLE`
    ? `MaestroLounge`
    : e === `LionCALL`
    ? `cryptic_maestro`
    : e.replace(/lion/gi, `Maestro`);
}
function x(e) {
  return new Promise((t, n) => {
    let r = new Image();
    (r.onload = () => t(r)),
      (r.onerror = () =>
        n(Error(`The artwork could not be loaded. Please try again.`))),
      (r.src = e);
  });
}
async function S(e, t) {
  let n = b(e);
  await document.fonts.ready;
  let [r, i] = await Promise.all([
      x(
        e.channel === `LionJUNGLE`
          ? `/lionjungle-logo.jpg`
          : `/brand/cryptic-maestro-logo.png?v=1`
      ),
      t ? x(t.image) : Promise.resolve(null),
    ]),
    a = document.createElement(`canvas`);
  (a.width = v.canvasWidth), (a.height = v.baseHeight);
  let o = a.getContext(`2d`);
  if (!o) throw Error(`Image export is not supported in this browser.`);
  let s = [...new Set(e.sourceNotes.filter(Boolean))].join(` `);
  o.font = `400 22px "Avenir Next", "Helvetica Neue", Arial, sans-serif`;
  let c = 0,
    l = ``;
  for (let e of s.split(/\s+/)) {
    if (!e) continue;
    let t = l ? `${l} ${e}` : e;
    l && o.measureText(t).width > 952 ? (c++, (l = e)) : (l = t);
  }
  l && c++, (a.height = v.baseHeight + (c ? c * 32 + 64 : 0));
  let u = e.channel === `LionJUNGLE`,
    d = u ? `#a0d8ad` : `#dec28b`;
  (o.fillStyle = u ? `#102d22` : `#073569`),
    o.fillRect(0, 0, 1080, a.height),
    (o.fillStyle = u ? `#092018` : `#062b56`),
    o.fillRect(0, 1040, 1080, a.height - 1040);
  let f = (e, t, n, r, i = `#f3f1e8`, a = 500) => {
      (o.fillStyle = i),
        (o.font = `${a} ${r}px "Avenir Next", "Helvetica Neue", Arial, sans-serif`),
        o.fillText(e, t, n);
    },
    p = (e, t, n, r, i, a, s) => {
      (o.font = `400 ${i}px "Avenir Next", "Helvetica Neue", Arial, sans-serif`),
        (o.fillStyle = s);
      let c = ``,
        l = n;
      for (let n of e.split(` `)) {
        let e = c ? `${c} ${n}` : n;
        c && o.measureText(e).width > r
          ? (o.fillText(c, t, l), (l += a), (c = n))
          : (c = e);
      }
      return c && o.fillText(c, t, l), l + a;
    };
  o.save(),
    (o.globalAlpha = 0.08),
    o.drawImage(r, 360, 340, 360, 360),
    o.restore(),
    o.drawImage(r, 64, 58, 68, 68),
    f(displayChannelName(e.channel), 150, 102, 30, `#f3f1e8`, 700),
    f(`STORY FILE`, 815, 99, 20, d),
    (o.fillStyle = d),
    o.fillRect(64, 164, 952, 2),
    f(n.status, 64, 218, 21, e.disputeKind ? `#ffc0a6` : d, 650);
  let m = i ? 675 : 950,
    h = 88;
  do {
    if (
      ((o.font = `800 ${h}px "Avenir Next", Arial, sans-serif`),
      o.measureText(e.token).width <= m)
    )
      break;
    h -= 2;
  } while (h > 24);
  return (
    f(e.token, 64, 340, h, `#f3f1e8`, 800),
    i &&
      (o.drawImage(i, 796, 250, 220, 220),
      p(t.caption, 796, 496, 220, 16, 22, `#b4c9d5`)),
    f(n.multiple, 58, 590, 176, d, 600),
    p(n.qualification, 64, 650, 940, 27, 38, `#d7e2e5`),
    (o.fillStyle = `#ffffff30`),
    o.fillRect(64, 712, 952, 1),
    f(`CALL POSTED`, 64, 765, 19, d),
    f(n.callDate, 64, 810, 33),
    f(`UPDATE POSTED`, 560, 765, 19, d),
    f(n.updateDate, 560, 810, 33),
    f(`ORIGINAL SOURCES`, 64, 888, 19, d),
    f(e.callUrl ?? `Original call not confirmed`, v.left, v.callTop + 30, 25),
    f(e.updateUrl, v.left, v.updateTop + 30, 25),
    s &&
      (f(`SOURCE CONTEXT`, 64, 1072, 18, d, 650),
      p(s, 64, 1110, 952, 22, 32, `#c1d0d5`)),
    f(
      `CRYPTIC MAESTRO · THE STORIES BEHIND THE CALLS`,
      64,
      a.height - 32,
      18,
      d
    ),
    a.toDataURL(`image/png`)
  );
}
var C = n();
function w({ image: e, story: t }) {
  let [n, i] = (0, m.useState)(0),
    o = y(t),
    s = v;
  return (0, C.jsxs)(`figure`, {
    className: `story-card-preview`,
    children: [
      (0, C.jsxs)(`div`, {
        className: `story-card-preview-surface`,
        children: [
          (0, C.jsx)(r, {
            unoptimized: !0,
            className: `story-share-preview`,
            src: e,
            width: s.canvasWidth,
            height: s.baseHeight,
            onLoad: (e) => i(e.currentTarget.naturalHeight),
            alt: `${t.token}: source-labelled ${t.multiple}x channel report, not an independently verified return.`,
          }),
          n > 0 &&
            o.map((e) =>
              (0, C.jsx)(
                `a`,
                {
                  className: `story-card-source-hotspot`,
                  href: e.url,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  title: `Open ${e.label.toLowerCase()}`,
                  "aria-hidden": `true`,
                  tabIndex: -1,
                  style: {
                    left: `${(s.left / s.canvasWidth) * 100}%`,
                    width: `${(s.width / s.canvasWidth) * 100}%`,
                    top: `${(e.top / n) * 100}%`,
                    height: `${(s.rowHeight / n) * 100}%`,
                  },
                },
                e.id
              )
            ),
        ],
      }),
      (0, C.jsxs)(`figcaption`, {
        className: `story-card-sources`,
        children: [
          (0, C.jsx)(`span`, { children: `Open the original posts` }),
          (0, C.jsx)(`div`, {
            className: `story-card-source-links`,
            children: o.map((e) =>
              (0, C.jsxs)(
                `a`,
                {
                  className: `story-card-source-link`,
                  href: e.url,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  children: [
                    e.label,
                    ` `,
                    (0, C.jsx)(a, { size: 16, "aria-hidden": `true` }),
                  ],
                },
                e.id
              )
            ),
          }),
        ],
      }),
    ],
  });
}
var T = {
  telegram: `M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z`,
  x: `M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z`,
};
function E({ name: e }) {
  let t = e === `telegram` ? 24 : 20;
  return (0, C.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    width: t,
    height: t,
    fill: `currentColor`,
    "aria-hidden": `true`,
    focusable: `false`,
    children: (0, C.jsx)(`path`, { d: T[e] }),
  });
}
function D(e) {
  let t = 0;
  for (let n of e.replace(/https:\/\/\S+/g, `x`.repeat(23)))
    t += n.codePointAt(0) > 127 ? 2 : 1;
  return t;
}
function O(e) {
  let t = b(e),
    n = [...new Set(e.sourceNotes.filter((e) => e.trim()))],
    r = `${displayChannelName(e.channel)} · ${e.token}`,
    i = `${t.multiple} reported by ${e.reportingChannel}.`,
    a = e.callUrl
      ? `${
          n.length || e.disputeKind === `source`
            ? `Call/source post`
            : `Original call`
        } · ${t.callDate}\n${e.callUrl}`
      : `Original call: not confirmed.`,
    o = [
      r,
      e.disputeKind ? `DISPUTED CLAIM · ${i}` : i,
      t.qualification,
      n.length
        ? `Source context:\n${n.join(`
`)}`
        : ``,
      a,
      `Channel update · ${t.updateDate}`,
      t.preview,
      t.footer,
    ].filter(Boolean).join(`

`),
    s = `${o}\n\nUpdate source:\n${e.updateUrl}`,
    c = !!e.disputeKind || n.length > 0 || !e.callUrl,
    l = e.disputeKind
      ? `Disputed claim. ${t.qualification}`
      : `Not a verified return.`,
    u = e.callUrl
      ? n.length
        ? `Qualified source record.`
        : ``
      : `Original call not confirmed.`,
    d = e.token.replace(/\s+/g, ` `).trim(),
    f =
      typeof Intl.Segmenter == `function`
        ? Array.from(
            new Intl.Segmenter(`en-GB`, { granularity: `grapheme` }).segment(d),
            (e) => e.segment
          )
        : Array.from(d),
    p = f.length > 24 ? `${f.slice(0, 23).join(``)}…` : f.join(``),
    m = (n, r) =>
      [
        n,
        r,
        l,
        u,
        t.preview.startsWith(`INTERNAL PREVIEW`)
          ? `Internal preview; not approved for publication.`
          : `From the channel archive at lioncalls.io.`,
        e.callUrl ? `Call: ${e.callUrl}` : ``,
      ].filter(Boolean).join(`
`),
    h = m(`${displayChannelName(e.channel)} · ${p}`, c ? `Story sources.` : i);
  D(h) > 256 && (h = m(displayChannelName(e.channel), `Story sources.`));
  let g = new URL(`https://x.com/intent/tweet`);
  g.searchParams.set(`text`, h), g.searchParams.set(`url`, e.updateUrl);
  let _ = new URL(`https://t.me/share/url`);
  return (
    _.searchParams.set(`url`, e.updateUrl),
    _.searchParams.set(`text`, o),
    {
      caption: s,
      xText: h,
      xUrl: g.href,
      telegramUrl: _.href,
      title: `${r} · Story card`,
      filename: `${displayChannelName(e.channel)}-${
        e.token.replace(/[^a-z0-9_-]/gi, ``).slice(0, 80) || `token`
      }-story-preview.png`,
    }
  );
}
function k(e, t) {
  let n = /^data:image\/png;base64,([A-Za-z0-9+/]+={0,2})$/.exec(e);
  if (!n) throw Error(`The story image is not a valid PNG.`);
  let r;
  try {
    r = Uint8Array.from(atob(n[1]), (e) => e.charCodeAt(0));
  } catch {
    throw Error(`The story image could not be prepared for sharing.`);
  }
  if (![137, 80, 78, 71, 13, 10, 26, 10].every((e, t) => r[t] === e))
    throw Error(`The story image is not a valid PNG.`);
  return new File([r], t, { type: `image/png` });
}
var A = {
  x: { label: `X`, url: `https://x.com/intent/tweet` },
  telegram: { label: `Telegram`, url: `https://web.telegram.org/` },
};
function j({ story: e }) {
  return (0, C.jsx)(M, { story: e }, JSON.stringify(e));
}
function M({ story: e }) {
  let [t, n] = (0, m.useState)(!1),
    [r, i] = (0, m.useState)(null),
    [h, _] = (0, m.useState)(``),
    [v, y] = (0, m.useState)(!1),
    [b, x] = (0, m.useState)(!1),
    [T, D] = (0, m.useState)(``),
    [j, M] = (0, m.useState)(null),
    N = (0, m.useRef)(!1),
    P = (0, m.useRef)(0),
    F = (0, m.useId)();
  (0, m.useEffect)(
    () => () => {
      P.current++;
    },
    []
  );
  let I = async () => {
      if (!v) {
        y(!0), _(``);
        try {
          let t = O(e),
            n = await S(e, g(e.channel, e.contractAddress));
          i({
            image: n,
            file: k(n, t.filename),
            canCopyImage:
              !!navigator.clipboard?.write &&
              typeof ClipboardItem < `u` &&
              (!ClipboardItem.supports || ClipboardItem.supports(`image/png`)),
          });
        } catch (e) {
          _(
            e instanceof Error
              ? e.message
              : `The story card could not be created. Please try again.`
          );
        } finally {
          y(!1);
        }
      }
    },
    L = async (e) => {
      if (!r || N.current) return;
      N.current = !0;
      let t = ++P.current;
      x(!0), D(``), M(null);
      let n = !1;
      try {
        r.canCopyImage &&
          (await navigator.clipboard.write([
            new ClipboardItem({ "image/png": r.file }),
          ]),
          (n = !0));
      } catch {}
      if (t !== P.current) {
        (N.current = !1), x(!1);
        return;
      }
      if (n)
        try {
          window.open(A[e].url, `_blank`, `noopener,noreferrer`);
        } catch {}
      D(
        n
          ? e === `x`
            ? `Image copied. Paste it into your X post, then review and post it yourself.`
            : `Image copied. Choose a Telegram chat or channel, then paste and send it yourself.`
          : `Your browser could not copy the image. Download the PNG below, then open ${A[e].label} and attach it.`
      ),
        M({ platform: e, imageCopied: n }),
        (N.current = !1),
        x(!1);
    };
  return (0, C.jsxs)(`div`, {
    className: `story-share-action`,
    children: [
      (0, C.jsxs)(f, {
        open: t,
        onOpenChange: (e) => {
          e || P.current++, n(e), e && !r && I();
        },
        children: [
          (0, C.jsxs)(c, {
            className: `story-share-trigger`,
            children: [(0, C.jsx)(p, { size: 16 }), ` Share story card`],
          }),
          (0, C.jsxs)(u, {
            className: `story-share-dialog`,
            children: [
              (0, C.jsxs)(l, { children: [e.token, ` · Story card`] }),
              (0, C.jsx)(d, {
                children: `Open the original posts from the preview below. The downloaded PNG is a static image.`,
              }),
              v &&
                (0, C.jsx)(`output`, {
                  children: `Preparing your story card…`,
                }),
              h &&
                (0, C.jsxs)(`div`, {
                  role: `alert`,
                  children: [
                    (0, C.jsx)(`p`, { children: h }),
                    (0, C.jsx)(s, {
                      onClick: () => void I(),
                      children: `Try again`,
                    }),
                  ],
                }),
              r &&
                (0, C.jsxs)(`div`, {
                  className: `story-share-layout`,
                  children: [
                    (0, C.jsx)(w, { image: r.image, story: e }),
                    (0, C.jsxs)(`div`, {
                      className: `story-share-options`,
                      children: [
                        (0, C.jsx)(`h3`, {
                          className: `story-share-image-heading`,
                          children: `Choose where to post.`,
                        }),
                        (0, C.jsx)(`p`, {
                          className: `story-share-hint`,
                          id: F,
                          children: r.canCopyImage
                            ? `Copies the image and opens your platform. Paste it there, then review and send. The image is not attached or posted automatically.`
                            : `Choose a platform to get the PNG download and posting link. Attach the image there, then review and send.`,
                        }),
                        (0, C.jsx)(`div`, {
                          className: `story-share-destinations`,
                          children: Object.keys(A).map((e) =>
                            (0, C.jsxs)(
                              s,
                              {
                                variant: `outline`,
                                disabled: b,
                                "aria-describedby": F,
                                onClick: () => void L(e),
                                children: [
                                  (0, C.jsx)(E, { name: e }),
                                  ` `,
                                  A[e].label,
                                ],
                              },
                              e
                            )
                          ),
                        }),
                        (0, C.jsx)(`output`, {
                          className: `story-share-status`,
                          "aria-live": `polite`,
                          "aria-atomic": `true`,
                          children: T,
                        }),
                        j &&
                          (0, C.jsxs)(`div`, {
                            className: `story-share-followup`,
                            children: [
                              (0, C.jsxs)(`a`, {
                                className: `story-share-download`,
                                href: r.image,
                                download: r.file.name,
                                children: [
                                  (0, C.jsx)(o, { size: 17 }),
                                  ` Download PNG`,
                                ],
                              }),
                              (0, C.jsxs)(`a`, {
                                className: `story-share-open-platform`,
                                href: A[j.platform].url,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                children: [
                                  `Open `,
                                  A[j.platform].label,
                                  ` `,
                                  (0, C.jsx)(a, { size: 16 }),
                                ],
                              }),
                              j.imageCopied &&
                                (0, C.jsx)(`p`, {
                                  className: `story-share-hint`,
                                  children: `If no new tab opened, use the link above. If pasting does not work, download the PNG and attach it instead.`,
                                }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      (0, C.jsx)(`span`, {
        children: `Original sources travel with the story.`,
      }),
    ],
  });
}
export { j as StoryShare };
