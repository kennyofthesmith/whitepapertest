// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const PAPER = '/paper/durability-heuristics';

/**
 * Manually built so the left rail doubles as the paper's own table of
 * contents (a "default template" left sidebar), instead of a doc-nav
 * sidebar on the left plus a separate on-page TOC on the right.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'durability-heuristics',
      label: 'Constraint, Not Novelty',
      className: 'sidebar-paper-title',
    },
    {
      type: 'html',
      value: '<div class="sidebar-contents-label">Contents</div>',
      defaultStyle: true,
    },
    {type: 'link', label: '1. Introduction', href: `${PAPER}#introduction`},
    {
      type: 'link',
      label: '2. Two Ways to Anchor a Claim',
      href: `${PAPER}#two-ways-to-anchor-a-claim`,
    },
    {
      type: 'link',
      label: '3. A Four-Item Heuristic',
      href: `${PAPER}#four-item-heuristic`,
    },
    {type: 'link', label: '4. Twelve Cases', href: `${PAPER}#twelve-cases`},
    {
      type: 'link',
      label: '5. Limitations and Objections',
      href: `${PAPER}#limitations-and-objections`,
    },
    {type: 'link', label: '6. Conclusion', href: `${PAPER}#conclusion`},
    {
      type: 'link',
      label: 'Appendix A',
      href: `${PAPER}#appendix-a`,
      className: 'sidebar-contents-minor',
    },
    {
      type: 'link',
      label: 'References',
      href: `${PAPER}#references`,
      className: 'sidebar-contents-minor',
    },
  ],
};

export default sidebars;
