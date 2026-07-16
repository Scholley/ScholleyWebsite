import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: "Rent's Due", href: "/#rentsdue" },
    { text: "About", href: "/#about" },
    { text: "Contact", href: "/#contact" },
    { text: "Blog", href: "/blog" },
  ],

  position: "right",
  isSticky: true,
  showToggleTheme: false,
  showRssFeed: false,
};

export const footerData = {
  links: [],
  socialLinks: [],
  secondaryLinks: [],
  footNote: 'Scholley © 2026 | Kevin@Scholley.com',
};