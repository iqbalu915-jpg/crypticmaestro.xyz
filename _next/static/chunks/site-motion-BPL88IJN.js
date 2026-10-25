import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t } from "./framework-D_rUT4EX.js";
var n = e(t(), 1);
function r(e) {
  let t = e.querySelector(`.cinematic-image`),
    n = e.querySelector(`.cinematic-hero`);
  if (
    !t ||
    typeof t.animate != `function` ||
    typeof IntersectionObserver != `function`
  )
    return () => {};
  let r = matchMedia(`(prefers-reduced-motion: reduce)`),
    i = matchMedia(`(hover: hover) and (pointer: fine) and (min-width: 701px)`),
    a,
    o = new Set(),
    s = !1,
    c = !1,
    l = 0,
    u = 0,
    d = 0,
    f = () => {
      if ((cancelAnimationFrame(l), (l = 0), n)) {
        delete n.dataset.pointerActive;
        for (let e of [
          `--scene-drift-x`,
          `--scene-drift-y`,
          `--scene-light-x`,
          `--scene-light-y`,
        ])
          n.style.removeProperty(e);
      }
    },
    p = () => {
      a?.cancel(), (a = void 0);
      for (let e of o) e.cancel();
      o.clear(), f();
    },
    m = () => {
      if (
        ((l = 0),
        !n ||
          !c ||
          r.matches ||
          !i.matches ||
          document.visibilityState !== `visible`)
      )
        return;
      let e = n.getBoundingClientRect(),
        t = Math.max(0, Math.min(1, (u - e.left) / e.width)),
        a = Math.max(0, Math.min(1, (d - e.top) / e.height));
      n.style.setProperty(`--scene-drift-x`, `${(t - 0.5) * 12}px`),
        n.style.setProperty(`--scene-drift-y`, `${(a - 0.5) * 8}px`),
        n.style.setProperty(`--scene-light-x`, `${(t - 0.5) * 80}px`),
        n.style.setProperty(`--scene-light-y`, `${(a - 0.5) * 50}px`),
        (n.dataset.pointerActive = `true`);
    },
    h = (e) => {
      e.pointerType !== `mouse` ||
        !c ||
        r.matches ||
        !i.matches ||
        ((u = e.clientX), (d = e.clientY), (l ||= requestAnimationFrame(m)));
    },
    g = new IntersectionObserver(
      ([i]) => {
        if (((c = i.isIntersecting), !i.isIntersecting)) {
          p();
          return;
        }
        s ||
          r.matches ||
          document.visibilityState !== `visible` ||
          ((s = !0),
          e.querySelector(`.brand-film`) ||
            (a = t.animate(
              [
                { transform: `scale(1.045)`, filter: `brightness(0.8)` },
                { transform: `scale(1)`, filter: `brightness(1)` },
              ],
              { duration: 4200, easing: `cubic-bezier(.18,.65,.35,1)` }
            )),
          !(
            !n ||
            n.getBoundingClientRect().top < -40 ||
            (location.hash && location.hash !== `#top`) ||
            n.contains(document.activeElement)
          ) &&
            n
              .querySelectorAll(
                `.eyebrow, h1, .hero-intro, .hero-actions, .channel-resources`
              )
              .forEach((e, t) => {
                let n = e.animate(
                  [
                    { opacity: 0.35, transform: `translateY(12px)` },
                    { opacity: 1, transform: `translateY(0)` },
                  ],
                  {
                    duration: 620,
                    delay: t * 70,
                    easing: `cubic-bezier(.16,1,.3,1)`,
                    fill: `backwards`,
                  }
                );
                o.add(n),
                  (n.onfinish = () => o.delete(n)),
                  (n.oncancel = () => o.delete(n));
              }));
      },
      { threshold: 0.15 }
    );
  g.observe(t);
  let _ = () => {
      document.visibilityState !== `visible` && p();
    },
    v = () => {
      r.matches && p(), i.matches || f();
    };
  return (
    document.addEventListener(`visibilitychange`, _),
    r.addEventListener(`change`, v),
    i.addEventListener(`change`, v),
    n?.addEventListener(`pointermove`, h, { passive: !0 }),
    n?.addEventListener(`pointerleave`, f),
    n?.addEventListener(`focusin`, p),
    window.addEventListener(`hashchange`, p),
    window.addEventListener(`beforeprint`, p),
    () => {
      p(),
        g.disconnect(),
        document.removeEventListener(`visibilitychange`, _),
        r.removeEventListener(`change`, v),
        i.removeEventListener(`change`, v),
        n?.removeEventListener(`pointermove`, h),
        n?.removeEventListener(`pointerleave`, f),
        n?.removeEventListener(`focusin`, p),
        window.removeEventListener(`hashchange`, p),
        window.removeEventListener(`beforeprint`, p);
    }
  );
}
function i({ channel: e }) {
  return (
    (0, n.useEffect)(() => {
      let e = document.querySelector(`main.site-shell:not(.hold-shell)`);
      if (!e) return;
      let t = r(e);
      return () => {
        t();
      };
    }, [e]),
    null
  );
}
export { i as SiteMotion };
