import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { t as r } from "./image-CekQzb8N.js";
import { i, n as a, r as o, t as s } from "./tabs-BypV-4kM.js";
import { t as c } from "./feed-examples-DLDXzc0f.js";
import { i as l, t as u } from "./story-format-fSYHdjty.js";
import { t as d } from "./source-post-dialog-BiM4D_hb.js";
var f = e(t(), 1),
  p = {
    schemaVersion: 1,
    reviewScope: `internal-preview`,
    reviewedAt: `2026-09-06T12:00:00Z`,
    reviewer: `Existing source review: current-telegram-post-examples-2026-09-06`,
    lioncall: [
      {
        id: `neko-call`,
        channel: `LionCALL`,
        url: `https://t.me/LionCALL/16841`,
        publishedAt: `2026-09-04T19:58:31Z`,
        title: `Artificial Neko`,
        kind: `call`,
      },
      {
        id: `neko-update`,
        channel: `LionCALL`,
        url: `https://t.me/LionCALL/16858`,
        publishedAt: `2026-09-05T17:50:00Z`,
        title: `The update that followed.`,
        kind: `update`,
        reportedMultiple: 20,
        replyTo: `https://t.me/LionCALL/16841`,
      },
    ],
    lionjungle: [
      {
        id: `jungle-shrek`,
        channel: `LionJUNGLE`,
        url: `https://t.me/LionJUNGLE/10302`,
        publishedAt: `2026-09-04T15:27:59Z`,
        title: `SHREK`,
        kind: `call`,
      },
      {
        id: `jungle-ap`,
        channel: `LionJUNGLE`,
        url: `https://t.me/LionJUNGLE/10310`,
        publishedAt: `2026-09-05T17:04:38Z`,
        title: `Artificial Pepe`,
        kind: `call`,
      },
    ],
  };
function m(e) {
  if (typeof e != `string`) return !1;
  let t =
    /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(?:\.\d{1,3})?(?:Z|([+-])(\d\d):(\d\d))$/.exec(
      e
    );
  if (!t) return !1;
  let [, n, r, i, a, o, s, , c, l] = t,
    u = Number(n),
    d = Number(r),
    f = Number(i),
    p = [
      31,
      u % 4 == 0 && (u % 100 != 0 || u % 400 == 0) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
  return (
    d >= 1 &&
    d <= 12 &&
    f >= 1 &&
    f <= p[d - 1] &&
    Number(a) < 24 &&
    Number(o) < 60 &&
    Number(s) < 60 &&
    (!c || (Number(c) < 24 && Number(l) < 60)) &&
    Number.isFinite(Date.parse(e))
  );
}
function h(e, t) {
  if (typeof e != `string`) return 0;
  let n = e.match(RegExp(`^https://t\\.me/${t}/([1-9]\\d{0,11})$`));
  return n ? Number(n[1]) : 0;
}
function g(e) {
  if (!e || typeof e != `object` || Array.isArray(e))
    throw Error(`Invalid feed selection`);
  let t = e;
  if (
    t.schemaVersion !== 1 ||
    t.reviewScope !== `internal-preview` ||
    t.proposalOnly ||
    typeof t.reviewer != `string` ||
    !t.reviewer.trim() ||
    t.reviewer.length > 200 ||
    !m(t.reviewedAt)
  )
    throw Error(`Feed selection needs an explicit internal source review`);
  for (let [e, n] of [
    [`lioncall`, `LionCALL`],
    [`lionjungle`, `LionJUNGLE`],
  ]) {
    let r = t[e];
    if (!Array.isArray(r) || r.length < 1 || r.length > 6)
      throw Error(`Select between one and six posts per channel`);
    let i = new Set(),
      a = new Set();
    for (let e of r) {
      if (
        !e ||
        typeof e != `object` ||
        e.channel !== n ||
        typeof e.id != `string` ||
        !/^[a-z0-9-]{1,70}$/.test(e.id) ||
        i.has(e.id) ||
        a.has(e.url) ||
        !h(e.url, n) ||
        typeof e.title != `string` ||
        !e.title.trim() ||
        e.title.length > 120 ||
        !m(e.publishedAt) ||
        Date.parse(e.publishedAt) > Date.parse(t.reviewedAt)
      )
        throw Error(`Invalid selected post identity, title or date`);
      if ((i.add(e.id), a.add(e.url), e.kind === `update`)) {
        let t = h(e.replyTo, n);
        if (
          !Number.isFinite(e.reportedMultiple) ||
          e.reportedMultiple < 1 ||
          !t ||
          t >= h(e.url, n)
        )
          throw Error(
            `A selected update needs an earlier same-channel source and reported multiple`
          );
        let i = r.find((t) => t?.url === e.replyTo);
        if (
          i &&
          (!m(i.publishedAt) ||
            Date.parse(i.publishedAt) >= Date.parse(e.publishedAt))
        )
          throw Error(`The selected update must follow its referenced post`);
      } else if (
        e.kind !== `call` ||
        e.reportedMultiple !== void 0 ||
        e.replyTo !== void 0
      )
        throw Error(`Invalid selected post kind`);
    }
  }
  return e;
}
var _ = g(p);
function v(e) {
  return _[e].map((t) => {
    let n = c[e].find((e) => e.url === t.url);
    return {
      ...t,
      excerpt: n?.excerpt ?? ``,
      image: n?.image ?? `/${e}-logo.jpg`,
      imageDescription:
        n?.imageDescription ??
        `${t.channel} channel logo. Open the complete original post to see its media.`,
      ...(n?.video ? { video: n.video } : {}),
    };
  });
}
var y = { lioncall: v(`lioncall`), lionjungle: v(`lionjungle`) };
_.lioncall.length === 2 &&
  _.lioncall.every(
    (e, t) =>
      e.url === c.lioncall[t].url &&
      e.kind === c.lioncall[t].kind &&
      e.publishedAt === c.lioncall[t].publishedAt &&
      e.reportedMultiple === c.lioncall[t].reportedMultiple
  );
var b = n();
function displayChannelName(e) {
  return e === `LionJUNGLE` ? `MaestroLounge` : `cryptic_maestro`;
}
function x({ post: e }) {
  let [t, n] = (0, f.useState)(1100);
  return (0, b.jsxs)(`div`, {
    className: `post-gallery-selected`,
    children: [
      (0, b.jsxs)(`div`, {
        className: `post-gallery-context`,
        children: [
          (0, b.jsxs)(`span`, {
            className: `source-view-kicker`,
            children: [displayChannelName(e.channel), ` / Original source`],
          }),
          (0, b.jsx)(`h3`, { children: e.title }),
          (0, b.jsx)(`time`, {
            dateTime: e.publishedAt,
            children: u(e.publishedAt),
          }),
          (0, b.jsx)(`p`, {
            children:
              e.kind === `update`
                ? `${e.reportedMultiple}x reported by the channel. Not independently verified.`
                : `The complete call, exactly as it appeared in the channel.`,
          }),
          (0, b.jsxs)(d, {
            url: e.url,
            title: `${displayChannelName(e.channel)} · ${
              e.title
            } · Complete post`,
            children: [
              `Read full size `,
              (0, b.jsx)(`span`, { "aria-hidden": `true`, children: `↗` }),
            ],
          }),
          (0, b.jsx)(`a`, {
            href: e.url,
            target: `_blank`,
            rel: `noreferrer`,
            children: `Open on Telegram ↗`,
          }),
          (0, b.jsxs)(`span`, {
            className: `post-gallery-original-note`,
            children: [
              `Original words and media.`,
              (0, b.jsx)(`br`, {}),
              `Nothing trimmed from the post.`,
            ],
          }),
        ],
      }),
      (0, b.jsx)(`div`, {
        className: `post-gallery-overview`,
        style: { "--post-height": t },
        children: (0, b.jsx)(`div`, {
          className: `post-gallery-scaled`,
          children: (0, b.jsx)(l, {
            url: e.url,
            title: `${displayChannelName(e.channel)}: ${
              e.title
            } — complete Telegram post`,
            onHeight: n,
          }),
        }),
      }),
    ],
  });
}
function S({ channel: e }) {
  let t = y[e];
  return (0, b.jsxs)(s, {
    className: `post-gallery`,
    defaultValue: t[0].id,
    children: [
      (0, b.jsxs)(`noscript`, {
        children: [
          (0, b.jsx)(`p`, { children: `Read the complete posts on Telegram:` }),
          (0, b.jsx)(`ul`, {
            children: t.map((e) =>
              (0, b.jsx)(
                `li`,
                {
                  children: (0, b.jsxs)(`a`, {
                    href: e.url,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: [e.title, ` · `, u(e.publishedAt)],
                  }),
                },
                e.id
              )
            ),
          }),
        ],
      }),
      (0, b.jsx)(o, {
        className: `post-gallery-tabs`,
        "aria-label": `Choose an original post`,
        children: t.map((t) =>
          (0, b.jsxs)(
            i,
            {
              value: t.id,
              children: [
                (0, b.jsx)(r, { src: t.image, width: 48, height: 48, alt: `` }),
                (0, b.jsxs)(`span`, {
                  children: [
                    e === `lioncall`
                      ? t.kind === `call`
                        ? `Original call`
                        : `Follow-up`
                      : t.title,
                    (0, b.jsx)(`small`, { children: u(t.publishedAt) }),
                  ],
                }),
              ],
            },
            t.id
          )
        ),
      }),
      t.map((e) =>
        (0, b.jsx)(
          a,
          { value: e.id, children: (0, b.jsx)(x, { post: e }) },
          e.id
        )
      ),
    ],
  });
}
export { S as PostGallery };
