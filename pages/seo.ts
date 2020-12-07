import type { NextSeoProps } from "next-seo"

export default {
  title: "Ricardo Busquet",
  description: "Ricardo Busquet's website",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.ricardobusquet.com/",
    site_name: "Ricardo Busquet",
    images: [
      {
        url: `https://ricardobusquet.com/images/og_home.png`,
        alt: "Ricardo Busquet's website",
      },
    ],
  },
  twitter: {
    handle: "@ricbusquet",
    cardType: "summary_large_image",
  },
} as NextSeoProps
