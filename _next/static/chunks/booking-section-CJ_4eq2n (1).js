import { r as e } from "./rolldown-runtime-C60lm6uB.js";
import { i as t, r as n } from "./framework-D_rUT4EX.js";
import { t as r } from "./image-CekQzb8N.js";
import { t as i } from "./arrow-right-BEtrTvYA.js";
import { t as a } from "./arrow-up-right-BpVuVI5W.js";
import { i as o, n as s, r as c, t as l } from "./tabs-BypV-4kM.js";
import { t as u } from "./channel-links-Copatm9u.js";
var d = e(t(), 1),
  f = [
    {
      id: `lioncall`,
      name: `cryptic_maestro`,
      logo: `/brand/cryptic-maestro-logo.png?v=1`,
      label: `The wider conversation.`,
      description: `For early-stage and established projects looking to reach a broader trading audience.`,
      format: `Discuss a call placement, a package or a custom campaign.`,
    },
    {
      id: `lionjungle`,
      name: `MaestroLounge`,
      logo: `/lionjungle-logo.jpg`,
      label: `Earlier. More speculative.`,
      description: `For early-stage projects in a fast-moving, higher-risk corner of the market.`,
      format: `Discuss a Jungle placement and the campaign around it.`,
    },
  ],
  p = [
    {
      title: `Share your brief`,
      description: `Tell the team your preferred channel, campaign duration and what you want to promote.`,
    },
    {
      title: `Shape the campaign`,
      description: `Review the proposed setup and price. Agree the content and details with support.`,
    },
    {
      title: `Confirm & schedule`,
      description: `Confirm the offer and complete payment. The team then schedules and delivers the agreed campaign.`,
    },
  ],
  m = n();
function h({ initialChannel: e }) {
  let [t, n] = (0, d.useState)(e);
  return (0, m.jsxs)(`section`, {
    className: `booking-section section-shell`,
    id: `contact`,
    "aria-labelledby": `booking-title`,
    "data-channel": t,
    children: [
      (0, m.jsxs)(`div`, {
        className: `booking-intro`,
        children: [
          (0, m.jsx)(`p`, {
            className: `section-kicker`,
            children: `For the teams building what’s next`,
          }),
          (0, m.jsxs)(`h2`, {
            id: `booking-title`,
            children: [
              `Your project.`,
              (0, m.jsx)(`br`, {}),
              (0, m.jsx)(`em`, { children: `The next conversation.` }),
            ],
          }),
          (0, m.jsx)(`p`, {
            children: `Plan a call with the Maestro team. Start with your project; we’ll work through the placement, content and timing together.`,
          }),
        ],
      }),
      (0, m.jsxs)(l, {
        value: t,
        onValueChange: (e) => n(String(e)),
        className: `booking-console`,
        children: [
          (0, m.jsx)(c, {
            className: `booking-channel-tabs`,
            "aria-label": `Choose a channel for your campaign`,
            children: f.map((e) =>
              (0, m.jsxs)(
                o,
                {
                  value: e.id,
                  children: [
                    (0, m.jsx)(r, {
                      src: e.logo,
                      width: 42,
                      height: 42,
                      alt: ``,
                    }),
                    e.name,
                  ],
                },
                e.id
              )
            ),
          }),
          f.map((e) =>
            (0, m.jsxs)(
              s,
              {
                value: e.id,
                children: [
                  (0, m.jsxs)(`div`, {
                    className: `booking-channel-intro`,
                    children: [
                      (0, m.jsxs)(`span`, {
                        children: [`Let’s talk `, e.name],
                      }),
                      (0, m.jsx)(`h3`, { children: e.label }),
                      (0, m.jsx)(`p`, { children: e.description }),
                      (0, m.jsx)(`small`, { children: e.format }),
                    ],
                  }),
                  (0, m.jsx)(`ol`, {
                    className: `booking-steps`,
                    children: p.map((e, t) =>
                      (0, m.jsxs)(
                        `li`,
                        {
                          children: [
                            (0, m.jsxs)(`span`, {
                              className: `booking-step-number`,
                              children: [`0`, t + 1],
                            }),
                            (0, m.jsxs)(`div`, {
                              children: [
                                (0, m.jsx)(`h4`, { children: e.title }),
                                (0, m.jsx)(`p`, { children: e.description }),
                              ],
                            }),
                          ],
                        },
                        e.title
                      )
                    ),
                  }),
                ],
              },
              e.id
            )
          ),
          (0, m.jsxs)(`div`, {
            className: `booking-action-row`,
            children: [
              (0, m.jsxs)(`a`, {
                className: `booking-primary`,
                href: u.bookingBot,
                target: `_blank`,
                rel: `noreferrer`,
                children: [
                  `Talk to @CrypticMaestrooo `,
                  (0, m.jsx)(a, { size: 20 }),
                ],
              }),
              (0, m.jsxs)(`a`, {
                href: u.bookingDocs,
                target: `_blank`,
                rel: `noreferrer`,
                children: [`How booking works `, (0, m.jsx)(i, { size: 16 })],
              }),
            ],
          }),
          (0, m.jsx)(`p`, {
            className: `booking-terms`,
            children: `Pricing depends on the agreed setup. Availability depends on the schedule. A booking does not guarantee trading results.`,
          }),
          (0, m.jsx)(`a`, {
            className: `booking-docs`,
            href: u.callDocs,
            target: `_blank`,
            rel: `noreferrer`,
            children: `Compare channels & campaign options ↗`,
          }),
        ],
      }),
    ],
  });
}
export { h as BookingSection };
