/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'nextarter-mui',
  titleTemplate: '%s | nextarter-mui',
  defaultTitle: 'nextarter-mui',
  description: 'Next.js + mui v5 + TypeScript template',
  canonical: 'https://nextarter-mui.sznm.dev',
  openGraph: {
    url: 'https://nextarter-mui.sznm.dev',
    title: 'nextarter-mui',
    description: 'Next.js + mui v5 + TypeScript template',
    images: [
      {
        url: 'https://og-image.sznm.dev/**nextarter-mui**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
        alt: 'nextarter-mui.sznm.dev og-image',
      },
    ],
    site_name: 'nextarter-mui',
  },
  twitter: {
    handle: '@sozonome',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
