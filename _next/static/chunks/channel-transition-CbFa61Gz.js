import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { t as r } from "./index-DrB47sXm.js";
import { t as i } from "./image-CekQzb8N.js";
var a = e(t(), 1),
  o = n();
function s() {
  let e = r(),
    t = (0, a.useRef)(null),
    n = (0, a.useRef)(null),
    s = (0, a.useRef)(void 0),
    c = (0, a.useRef)(null),
    l = (0, a.useRef)(0),
    [u, d] = (0, a.useState)(`lioncall`);
  return (
    (0, a.useEffect)(() => {
      if (!n.current || n.current !== e) return;
      (n.current = null), clearTimeout(s.current);
      let r = t.current;
      if (!r) return;
      let i = l.current;
      requestAnimationFrame(() => {
        i === l.current &&
          (c.current?.cancel(),
          (c.current = r.animate(
            [
              { opacity: 1, clipPath: `inset(0)` },
              { opacity: 0, clipPath: `inset(0 0 0 100%)` },
            ],
            {
              duration: 480,
              easing: `cubic-bezier(.22,.8,.22,1)`,
              fill: `forwards`,
            }
          )),
          c.current.finished
            .catch(() => {})
            .finally(() => {
              i === l.current && (r.hidden = !0);
            }));
      });
    }, [e]),
    (0, a.useEffect)(() => {
      let e = () => {
          l.current++;
        },
        r = async (e) => {
          if (
            e.defaultPrevented ||
            e.button !== 0 ||
            e.metaKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.altKey
          )
            return;
          let r = e.target?.closest(`.channel-switch a[href]`);
          if (!r || r.target === `_blank`) return;
          let i = new URL(r.href);
          if (
            i.origin !== location.origin ||
            ![`/`, `/jungle`].includes(i.pathname) ||
            i.pathname === location.pathname ||
            matchMedia(`(prefers-reduced-motion: reduce)`).matches ||
            !t.current ||
            typeof Element.prototype.animate != `function` ||
            (e.preventDefault(), n.current)
          )
            return;
          let a = ++l.current,
            o = t.current;
          d(i.pathname === `/jungle` ? `lionjungle` : `lioncall`),
            (n.current = i.pathname),
            (o.hidden = !1),
            c.current?.cancel(),
            (c.current = o.animate(
              [
                {
                  opacity: 1,
                  clipPath: `circle(0% at ${e.clientX}px ${e.clientY}px)`,
                },
                {
                  opacity: 1,
                  clipPath: `circle(150% at ${e.clientX}px ${e.clientY}px)`,
                },
              ],
              {
                duration: 360,
                easing: `cubic-bezier(.6,0,.25,1)`,
                fill: `forwards`,
              }
            )),
            (s.current = setTimeout(() => {
              a === l.current &&
                ((n.current = null), c.current?.cancel(), (o.hidden = !0));
            }, 2200)),
            await c.current.finished.catch(() => {}),
            !(a !== l.current || n.current !== i.pathname) &&
              window.location.assign(i.href);
        },
        i = () => {
          e(),
            (n.current = null),
            clearTimeout(s.current),
            c.current?.cancel(),
            t.current && (t.current.hidden = !0);
        };
      return (
        document.addEventListener(`click`, r, !0),
        window.addEventListener(`pageshow`, i),
        () => {
          e(),
            document.removeEventListener(`click`, r, !0),
            window.removeEventListener(`pageshow`, i),
            clearTimeout(s.current),
            c.current?.cancel();
        }
      );
    }, []),
    (0, o.jsxs)(`div`, {
      ref: t,
      className: `channel-curtain`,
      "data-channel": u,
      hidden: !0,
      "aria-hidden": `true`,
      children: [
        (0, o.jsx)(i, {
          src:
            u === `lionjungle`
              ? `/brand/lion-jungle.jpg`
              : `/brand/cryptic-maestro-background.jpg`,
          alt: ``,
          width: 1536,
          height: 1024,
          sizes: `100vw`,
        }),
        (0, o.jsx)(`span`, {
          children: u === `lionjungle` ? `MaestroLounge` : `cryptic_maestro`,
        }),
      ],
    })
  );
}
export { s as ChannelTransition };
