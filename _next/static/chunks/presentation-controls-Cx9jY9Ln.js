import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { L as r } from "./utils-CaPlbFnG.js";
import { t as i } from "./button-BFvZYHow.js";
var a = r(`maximize-2`, [
    [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
    [`path`, { d: `m21 3-7 7`, key: `1l2asr` }],
    [`path`, { d: `m3 21 7-7`, key: `tjx5ai` }],
    [`path`, { d: `M9 21H3v-6`, key: `wtvkvv` }],
  ]),
  o = r(`minimize-2`, [
    [`path`, { d: `m14 10 7-7`, key: `oa77jy` }],
    [`path`, { d: `M20 10h-6V4`, key: `mjg0md` }],
    [`path`, { d: `m3 21 7-7`, key: `tjx5ai` }],
    [`path`, { d: `M4 14h6v6`, key: `rmj7iw` }],
  ]),
  s = e(t(), 1),
  c = n();
function l() {
  let [e, t] = (0, s.useState)(!1),
    [n, r] = (0, s.useState)(!1);
  return (
    (0, s.useEffect)(() => {
      let e = () => t(!!document.fullscreenElement),
        n = requestAnimationFrame(() => {
          let e = Reflect.get(document.documentElement, `requestFullscreen`),
            t = Reflect.get(document, `exitFullscreen`);
          r(
            !!(
              document.fullscreenEnabled &&
              typeof e == `function` &&
              typeof t == `function`
            )
          );
        });
      return (
        document.addEventListener(`fullscreenchange`, e),
        () => {
          cancelAnimationFrame(n),
            document.removeEventListener(`fullscreenchange`, e);
        }
      );
    }, []),
    (0, c.jsxs)(i, {
      className: `presentation-button`,
      variant: `outline`,
      size: `sm`,
      onClick: async () => {
        try {
          let e = Reflect.get(document.documentElement, `requestFullscreen`),
            t = Reflect.get(document, `exitFullscreen`);
          if (document.fullscreenElement && typeof t == `function`) {
            await t.call(document);
            return;
          }
          document.fullscreenEnabled &&
            typeof e == `function` &&
            (await e.call(document.documentElement));
        } catch {
          t(!!document.fullscreenElement);
        }
      },
      disabled: !n,
      title: n ? void 0 : `Fullscreen is not available in this browser`,
      "aria-label": e ? `Exit presentation mode` : `Enter presentation mode`,
      children: [
        e
          ? (0, c.jsx)(o, { "aria-hidden": `true` })
          : (0, c.jsx)(a, { "aria-hidden": `true` }),
        (0, c.jsx)(`span`, { children: e ? `Exit` : `Present` }),
      ],
    })
  );
}
export { l as PresentationControls };
