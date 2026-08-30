export interface Credit {
  role?: string;
  name: string;
}

export interface SectionVideo {
  id: string;
  label: string;
}

export interface PortfolioSection {
  title: string;
  description?: string;
  images?: string[];
  videos?: SectionVideo[];
}

export interface EditionImage {
  src: string;
  caption: string;
}

export interface ArchiveImage {
  src: string;
  caption?: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  subtitle?: string;
  venue: string;
  year: string;
  category: string;
  /** Extra filter categories this work also belongs to. Defaults to [category]. */
  categories?: string[];
  slug: string;
  image: string;
  /** Paragraphs are separated by a blank line. */
  description?: string;
  credits?: Credit[];
  editions?: string[];
  editionImages?: EditionImage[];
  galleryImages?: string[];
  sections?: PortfolioSection[];
  archiveImages?: ArchiveImage[];
  relatedLink?: { label: string; href: string };
}

export interface VideoItem {
  id: number;
  title: string;
  venue: string;
  year: string;
  youtubeId: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
  slug: string;
  /** When set, the card links here (a Portfolio or Books page) instead of a news detail page. */
  href?: string;
}

export const categories = [
  "All",
  "Tactile Performances",
  "Theatre & Dance",
  "Sculptures",
  "Lino prints",
  "Books",
] as const;

export type Category = (typeof categories)[number];

export const portfolioItems: PortfolioItem[] = [
  // ─── Tactile Performances ───
  {
    id: 1,
    title: "Prière de toucher",
    venue: "INECAT, Paris",
    year: "2023",
    category: "Tactile Performances",
    slug: "priere-de-toucher-2023",
    image: "/images/portfolio/gallery/priere-de-toucher-2023/1.jpg",
    description: "“Prière de toucher” (Please Touch) is an interactive tactile performance and sculpture exhibition presented at INECAT in Paris. Visitors are invited to encounter sculpture through touch rather than sight. At its centre is the living sculpture as a body-window between the visible and the invisible, opening questions of intimacy, transformation and perception.",
    credits: [
      {
        role: "Concept",
        name: "Nadine Abou Zaki",
      },
      {
        role: "Living sculpture",
        name: "Jean-Pierre Mehansio",
      },
      {
        role: "Textile recreation",
        name: "Bshara Atallah",
      },
      {
        role: "Expressionistic film",
        name: "Muriel Aboulrouss",
      },
    ],
    galleryImages: [
      "/images/portfolio/gallery/priere-de-toucher-2023/4.jpg",
      "/images/portfolio/gallery/priere-de-toucher-2023/3.jpg",
      "/images/portfolio/gallery/priere-de-toucher-2023/5.jpg",
      "/images/portfolio/gallery/priere-de-toucher-2023/2.jpg",
    ],
  },
  {
    id: 2,
    title: "Elephant in the Dark",
    venue: "Blindfold walk performance",
    year: "2019–2020",
    category: "Tactile Performances",
    slug: "elephant-in-the-dark",
    image: "/images/portfolio/elephant-night-wide.jpg",
    description: "Elephant in the Dark is a series of blindfolded walking performances exploring what darkness reveals about space, certainty and perception. Inspired by Rumi’s parable of the elephant in the dark, the project unfolded at the Modern and Contemporary Art Museum (MACAM) and the National Museum of Beirut.",
    credits: [
      {
        name: "Supported by the Arab Fund for Arts and Culture (AFAC)",
      },
      {
        name: "In collaboration with Red Oak",
      },
      {
        name: "National Museum of Beirut edition developed with the Lebanese Academy of Fine Arts (ALBA)",
      },
    ],
    sections: [
      {
        title: "MACAM, Alita-Byblos — 2019",
        description: "At MACAM, the project first reversed familiar roles of seeing and being guided: blindfolded sighted participants moved through the museum with a blind guide. A second nocturnal performance extended the experiment outdoors, where sighted performers/dancers interacted with blindfolded participants, who in turn became performers.",
        images: [
          "/images/portfolio/gallery/elephant-in-the-dark/night-close.jpg",
          "/images/portfolio/gallery/elephant-in-the-dark/night-hands.jpg",
          "/images/portfolio/gallery/elephant-in-the-dark/macam-with-a-blind-guide-1.jpg",
          "/images/portfolio/gallery/elephant-in-the-dark/macam-with-a-blind-guide-3.jpg",
          "/images/portfolio/gallery/elephant-in-the-dark/macam-with-a-blind-guide-2.jpg",
        ],
        videos: [
          {
            id: "V8_sJ8L5hAc",
            label: "Performance video — MACAM",
          },
        ],
      },
      {
        title: "National Museum of Beirut — 2020",
        description: "At the National Museum of Beirut, in collaboration with the Lebanese Academy of Fine Arts (ALBA), visual-arts students were introduced to haptic aesthetics and took part in a blindfolded tactile visit of archaeological objects.",
        images: [
          "/images/portfolio/gallery/elephant-in-the-dark/elephant-in-the-dark.jpg",
          "/images/portfolio/gallery/elephant-in-the-dark/national-museum-of-beirut-1.jpg",
          "/images/portfolio/gallery/elephant-in-the-dark/national-museum-of-beirut-3.jpg",
          "/images/portfolio/gallery/elephant-in-the-dark/national-museum-of-beirut-4.jpg",
          "/images/portfolio/gallery/elephant-in-the-dark/national-museum-of-beirut-5.jpg",
          "/images/portfolio/gallery/elephant-in-the-dark/national-museum-of-beirut-6.jpg",
        ],
      },
    ],
    archiveImages: [
      {
        src: "/images/portfolio/gallery/elephant-in-the-dark/elephant-in-the-dark-event-page-2.jpg",
        caption: "Project poster",
      },
    ],
  },
  {
    id: 3,
    title: "Please Touch",
    venue: "Waste Studio, Beirut",
    year: "2016",
    category: "Tactile Performances",
    slug: "please-touch-waste-studio",
    image: "/images/portfolio/please-touch-waste-studio-home.jpg",
    description: "At Waste Studio, “Please Touch” invited visitors not only to touch the work, but to become part of it. For one night, visitors could take the place of the living sculpture, transforming the encounter between artist, artwork and audience. Continuing the “Please Touch” series, the performance re-examined exhibition conventions and the role of touch in experiencing sculpture.",
    credits: [
      {
        role: "Living sculpture",
        name: "Bshara Atallah",
      },
      {
        role: "Expressionistic film",
        name: "Muriel Aboulrouss",
      },
      {
        role: "Artistic lighting",
        name: "Alaa Minawi",
      },
    ],
    galleryImages: [
      "/images/portfolio/gallery/please-touch-waste-studio/ws-02-1.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-03-6.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-04-2.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-05-img-1058-2.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-06-n06.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-07-3.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-08-4.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-09-5.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-10-7.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-11-8.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-12-10.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-13-img-0605.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-14-img-0723.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-15-img-1071.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-16-img-1077.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-17-img-1106.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-18-img-1146.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-19-img-1206.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-20-img-1214.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-21-img-1326.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-22-img-1332.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-23-img-1402.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-24-img-1407.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-25-img-1464.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-26-img-1471.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/ws-27-waste.jpg",
    ],
    sections: [
      {
        title: "Video",
        videos: [
          {
            id: "fQQvJPNaQWU",
            label: "Performance video",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Please Touch the Trash",
    venue: "BIPOD / Al Madina Theatre, Beirut",
    year: "2016",
    category: "Tactile Performances",
    slug: "please-touch-trash",
    image: "/images/portfolio/please-touch-trash.jpg",
    description: "“Please Touch the Trash” is an interactive performance presented at BIPOD at Al Madina Theatre. Using discarded materials as a tactile and performative medium, the work questions what we call waste and the social, economic, environmental and philosophical values attached to it. Visitors encounter “living” waste that shifts shape through touch, revealing discarded matter as a trace of both intimate and collective history.",
    credits: [
      {
        role: "Concept",
        name: "Nadine Abou Zaki",
      },
      {
        role: "Performers",
        name: "Bshara Atallah, Lisa Chehade, Corine Skaff, Rabih Yammine",
      },
      {
        role: "Sound",
        name: "Zeid Hamdan",
      },
      {
        role: "Lighting",
        name: "Alaa Minawi",
      },
      {
        role: "Textile recreation",
        name: "Bshara Atallah",
      },
    ],
    galleryImages: [
      "/images/portfolio/gallery/please-touch-trash/1.jpg",
      "/images/portfolio/gallery/please-touch-trash/2.jpg",
    ],
    sections: [
      {
        title: "Video",
        videos: [
          {
            id: "lRkIo7bdEFQ",
            label: "Performance video",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Please Touch",
    venue: "Beirut Art Fair",
    year: "2015",
    category: "Tactile Performances",
    slug: "please-touch-baf-2015",
    image: "/images/portfolio/please-touch-baf-2015.jpg",
    description: "Presented within the “Virtual/Reality” segment curated by Pascal Odille at Beirut Art Fair, “Please Touch” transformed four performers into living sculptures. Concealed within sculptural textile forms, their bodies responded to visitors’ touch and continually reshaped the work. The performance destabilized the usual boundaries between sculpture and performer, viewer and artwork, inviting the audience to experience form through touch rather than sight.",
    credits: [
      {
        role: "Concept",
        name: "Nadine Abou Zaki",
      },
      {
        role: "Living sculptures",
        name: "Lisa Chehade, Bshara Atallah, Corine Skaff, Rabih Yammine",
      },
      {
        role: "Textile recreation",
        name: "Bshara Atallah",
      },
      {
        role: "Expressionistic film",
        name: "Muriel Aboulrouss",
      },
      {
        role: "Artistic lighting",
        name: "Alaa Minawi",
      },
    ],
    galleryImages: [
      "/images/portfolio/gallery/please-touch-baf-2015/living-1.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-2.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-3.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-4.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-6.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-7.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-9.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-8.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-12.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-10.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-14.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-16.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-17.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-18-2.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-18.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-img-2903.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-15.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-13.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/living-img-2212.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-1-0.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-4-2.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-2886.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-kp-7835.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-4-0.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-3664.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-elie-saab.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-bassam-fattouh.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-9944.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-3-0.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-0087.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-1-2.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-2-2.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-3-2.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-1999.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-2-0.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-6-0.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-dans.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-2277.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-2707.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-kp-7833.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-kp-7850.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-2328.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-2953.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-3287.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-3446.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-3688.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-3741.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-9347.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-9959.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-img-9960.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafb-mona-saudi.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-0.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-2-1.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-5.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-3-2-0.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-img-9386.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-kp-7511.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-2-2-0.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-7-1.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-4-1.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-img-9223.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-6-1.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-may-khalil.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-kp-7820.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-img-3111.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-3-1.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-img-9655.jpg",
      "/images/portfolio/gallery/please-touch-baf-2015/bafa-kp-7479.jpg",
    ],
    sections: [
      {
        title: "Video",
        videos: [
          {
            id: "XlN7PJHVZlk",
            label: "Performance video",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Please Touch",
    venue: "Station Beirut · Curated by Agial Art Gallery",
    year: "2014",
    category: "Tactile Performances",
    categories: [
      "Tactile Performances",
      "Sculptures",
    ],
    slug: "please-touch-agial",
    image: "/images/portfolio/gallery/please-touch-sculptures-2014/3.jpg",
    description: "Please Touch brought together around twenty sculptures created blindfolded, alongside an interactive living-sculpture performance and an expressionistic film. Visitors were invited to encounter the sculptures through touch and in darkness, shifting the experience of sculpture from sight to tactile perception.\n\nThe project explored the role of touch in artistic creation, its relationship to memory, and the boundaries between body, sculpture and viewer. What if you have to touch to see?",
    credits: [
      {
        role: "Concept",
        name: "Nadine Abou Zaki",
      },
      {
        role: "Living sculpture",
        name: "Lisa Chehade",
      },
      {
        role: "Textile recreation",
        name: "Bshara Atallah",
      },
      {
        role: "Expressionistic film",
        name: "Muriel Aboulrouss",
      },
      {
        role: "Artistic lighting",
        name: "Alaa Minawi",
      },
      {
        role: "Touch-sound design",
        name: "Zeid Hamdan",
      },
    ],
    sections: [
      {
        title: "Interactive Performance & Living Sculpture",
        description: "A living sculpture concealed beneath textile responded to contact and transformed into new forms. Visitors entered a darkened space and encountered the work through touch rather than sight.",
        images: [
          "/images/portfolio/gallery/please-touch-agial/living2014-2-img-3734.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-16-img-3741.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-1-img-3724.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-3-img-3727.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-4-img-3731.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-5-img-3736.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-12-img-3590.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-13-img-3776-2.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-14-img-3775-copy.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-6-img-20141127-200246.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-7-img-3488.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-8-img-3496.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-9-img-3504.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-10-img-3511.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-11-img-3510.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-15-img-2239.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-17-img-2172.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-18-img-2155.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-19-img-2150.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-20-img-2147.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-21-img-3583.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-22-img-2168.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-23-img-2165.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-24-img-2325.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-25-img-2477.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-26-img-3597.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-27-img-3708.jpg",
          "/images/portfolio/gallery/please-touch-agial/living2014-28-img-2158.jpg",
          "/images/portfolio/gallery/please-touch-agial/bestof-touching-the-sculptures-9.jpg",
          "/images/portfolio/gallery/please-touch-agial/bestof-touching-the-sculptures-3-0.jpg",
          "/images/portfolio/gallery/please-touch-agial/bestof-touching-the-sculptures-1-0.jpg",
          "/images/portfolio/gallery/please-touch-agial/bestof-touching-the-sculptures-2-0.jpg",
          "/images/portfolio/gallery/please-touch-agial/bestof-touching-the-sculptures-4-1.jpg",
          "/images/portfolio/gallery/please-touch-agial/bestof-touching-the-sculptures-5-0.jpg",
          "/images/portfolio/gallery/please-touch-agial/bestof-touching-the-sculptures-6.jpg",
          "/images/portfolio/gallery/please-touch-agial/bestof-touching-the-sculptures-7.jpg",
          "/images/portfolio/gallery/please-touch-agial/bestof-touching-the-sculptures-8.jpg",
          "/images/portfolio/gallery/please-touch-agial/bestof-touching-the-sculptures-10.jpg",
        ],
      },
      {
        title: "Sculpture Exhibition",
        description: "Approximately twenty sculptures created blindfolded, shown so that each work could be approached and touched.",
        images: [
          "/images/portfolio/gallery/please-touch-agial/sculpt-please-dont-touch-without-ads-6.jpg",
          "/images/portfolio/gallery/please-touch-agial/sculpt-please-dont-touch-without-ads-3.jpg",
          "/images/portfolio/gallery/please-touch-agial/sculpt-please-dont-touch-without-ads-4.jpg",
          "/images/portfolio/gallery/please-touch-agial/sculpt-please-dont-touch-without-ads-5.jpg",
          "/images/portfolio/gallery/please-touch-agial/sculpt-please-dont-touch-without-ads-7.jpg",
          "/images/portfolio/gallery/please-touch-agial/sculpt-please-dont-touch-without-ads-8.jpg",
          "/images/portfolio/gallery/please-touch-agial/sculpt-please-dont-touch-without-ads-9.jpg",
          "/images/portfolio/gallery/please-touch-agial/sculpt-please-dont-touch-without-ads-10.jpg",
          "/images/portfolio/gallery/please-touch-agial/sculpt-please-dont-touch-without-ads-11.jpg",
          "/images/portfolio/gallery/please-touch-agial/sculpt-please-dont-touch-without-ads-12.jpg",
          "/images/portfolio/gallery/please-touch-agial/sculpt-please-dont-touch-without-ads-13.jpg",
          "/images/portfolio/gallery/please-touch-agial/sculpt-please-dont-touch-without-ads-2.jpg",
          "/images/portfolio/gallery/please-touch-agial/exh-1-2-2124.jpg",
          "/images/portfolio/gallery/please-touch-agial/exh-2-img-4241.jpg",
          "/images/portfolio/gallery/please-touch-agial/exh-3-img-1829.jpg",
          "/images/portfolio/gallery/please-touch-agial/exh-3-img-4175.jpg",
          "/images/portfolio/gallery/please-touch-agial/exh-5-img-4170-s.jpg",
          "/images/portfolio/gallery/please-touch-agial/exh-6-img-1927.jpg",
          "/images/portfolio/gallery/please-touch-agial/exh-7-img-1776-resize.jpg",
        ],
      },
      {
        title: "Expressionistic Film",
        description: "An expressionistic film portraying the artist’s emotions while sculpting blindfolded in the dark. All sounds and images are extracted from her universe. Directed by Muriel Aboulrouss, produced by Denise Jabbour, edited by Liliane Hanbali.",
        videos: [
          {
            id: "acn0FVo538g",
            label: "Watch the film",
          },
        ],
      },
    ],
    archiveImages: [
      {
        src: "/images/portfolio/please-dont-touch-poster.jpg",
        caption: "PLEASE DON’T TOUCH — original exhibition poster, Station Beirut 2014",
      },
    ],
  },
  // ─── Sculptures ───
  {
    id: 7,
    title: "Public Sculptures",
    venue: "Lebanon & UAE",
    year: "1999–2010",
    category: "Sculptures",
    slug: "public-monuments",
    image: "/images/portfolio/gallery/public-monuments/2.jpg",
    description: "Public Sculptures brings together works created for public sites and international sculpture symposia in Lebanon and the UAE.",
    sections: [
      {
        title: "The Garden of Dialogue — Beirut — 2010",
        description: "Created within the framework of Beirut World Book Capital, The Garden of Dialogue consists of five stone sculpture-benches installed in Beirut. The sculptures pay tribute to Gibran Khalil Gibran, Nadia Tueni, Abdallah Alayli and Hussein Mroueh. They were designed both as sculptures and as benches where people can sit and read.",
        images: [
          "/images/portfolio/gallery/public-monuments/beirut-world-capital-img1-0.jpg",
          "/images/portfolio/gallery/public-monuments/beirut-world-capital-img2-0.jpg",
          "/images/portfolio/gallery/public-monuments/beirut-world-capital-img3-0.jpg",
          "/images/portfolio/gallery/public-monuments/beirut-world-capital-img4-0.jpg",
          "/images/portfolio/gallery/public-monuments/2.jpg",
          "/images/portfolio/gallery/public-monuments/3.jpg",
          "/images/portfolio/gallery/public-monuments/5.jpg",
          "/images/portfolio/gallery/public-monuments/4.jpg",
        ],
      },
      {
        title: "Chamber of Commerce and Industry — Beirut — 2009",
        description: "Monumental sculpture installed in front of the Chamber of Commerce and Industry in Beirut in 2009.",
        images: [
          "/images/portfolio/gallery/public-monuments/pf8b-1.jpg",
        ],
      },
      {
        title: "Jeux de la Francophonie — Beirut — 2009",
        description: "Work in Murano glass created for the 6th Jeux de la Francophonie in Beirut, where Nadine Abou Zaki represented Lebanon as Sculptor Ambassador.",
        images: [
          "/images/portfolio/gallery/public-monuments/pf9-1.jpg",
        ],
      },
      {
        title: "Emaar International Art Symposium — Dubai — 2008",
        description: "Sculpture created during participation in the Emaar International Art Symposium in Dubai in 2008.",
        images: [
          "/images/portfolio/gallery/public-monuments/pf10b-0.jpg",
        ],
      },
      {
        title: "International Sculpture Symposium — Mechref, Lebanon",
        description: "Sculpture created during the International Sculpture Symposium at Mechref, Lebanon.",
        images: [
          "/images/portfolio/gallery/public-monuments/mechref-public-monument-0.jpg",
        ],
      },
      {
        title: "Marble International Symposium of Sculpture — Lebanon",
        description: "Sculpture created during the Marble International Symposium of Sculpture in Lebanon.",
        images: [
          "/images/portfolio/gallery/public-monuments/pf12-0.jpg",
        ],
      },
      {
        title: "The Traveller — Ministry of Tourism, Beirut — 2002",
        description: "The Traveller is an architectural constructivist sculpture conceived for the Lebanese Ministry of Tourism and inaugurated on 30 November 2002. The work developed from questions about travel, place and virtual communication in the age of globalization.",
        images: [
          "/images/portfolio/gallery/public-monuments/pf11b-0.jpg",
          "/images/portfolio/public-monuments.jpg",
        ],
      },
      {
        title: "Aley International Art Symposium — Mount Lebanon — 1999–2001",
        description: "Sculptures created during participation in the Aley International Art Symposium in Mount Lebanon between 1999 and 2001.",
        images: [
          "/images/portfolio/gallery/public-monuments/pf13-0-0.jpg",
          "/images/portfolio/gallery/public-monuments/pf14b-0.jpg",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "And I Fly Off",
    venue: "Surface Libre, Lebanon",
    year: "2008",
    category: "Sculptures",
    slug: "and-i-fly-off",
    image: "/images/portfolio/and-i-fly-off.jpg",
    description: "And I Fly Off (Et je m’envole) was a solo exhibition presented at Surface Libre in Lebanon in 2008. It brought together 26 sculptures in stone and wood. The accompanying text focused on desire, transformation, multiplicity and the idea of an imagined elsewhere.",
    galleryImages: [
      "/images/portfolio/gallery/and-i-fly-off/pf24.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf27.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf23.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf25.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf26.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf35.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf28.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf36.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf30.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf37.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf29.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf41.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf32.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf40.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf31.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf33.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf38.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf39.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf34.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf43.jpg",
      "/images/portfolio/gallery/and-i-fly-off/pf42.jpg",
    ],
  },
  {
    id: 9,
    title: "The One Acts, the Other Contemplates",
    venue: "Espace SD, Beirut",
    year: "2004",
    category: "Sculptures",
    slug: "the-one-acts",
    image: "/images/portfolio/the-one-acts-home.jpg",
    description: "The One Acts, the Other Contemplates (L’un regarde, l’autre agit) was presented at Espace SD in Beirut in 2004. The exhibition comprised 18 sculptures: nine in stone and nine in wood. Catalogue text by Nazih Khater.",
    galleryImages: [
      "/images/portfolio/gallery/the-one-acts/pf47.jpg",
      "/images/portfolio/gallery/the-one-acts/pf60.jpg",
      "/images/portfolio/gallery/the-one-acts/pf55.jpg",
      "/images/portfolio/gallery/the-one-acts/pf49.jpg",
      "/images/portfolio/gallery/the-one-acts/pf50.jpg",
      "/images/portfolio/gallery/the-one-acts/pf58.jpg",
      "/images/portfolio/gallery/the-one-acts/pf59.jpg",
      "/images/portfolio/gallery/the-one-acts/pf51.jpg",
      "/images/portfolio/gallery/the-one-acts/pf54.jpg",
      "/images/portfolio/gallery/the-one-acts/pf56.jpg",
      "/images/portfolio/gallery/the-one-acts/pf52.jpg",
      "/images/portfolio/gallery/the-one-acts/pf61.jpg",
      "/images/portfolio/gallery/the-one-acts/pf57.jpg",
      "/images/portfolio/gallery/the-one-acts/pf53.jpg",
      "/images/portfolio/gallery/the-one-acts/pf62.jpg",
      "/images/portfolio/gallery/the-one-acts/pf48.jpg",
    ],
  },
  {
    id: 10,
    title: "Towers of Silence",
    venue: "Espace SD, Beirut",
    year: "2002",
    category: "Sculptures",
    slug: "towers-of-silence",
    image: "/images/portfolio/gallery/towers-of-silence/pf65.jpg",
    description: "Towers of Silence (Tours du Silence) was Nadine Abou Zaki’s first solo sculpture exhibition, presented at Espace SD in Beirut in 2002. Catalogue text by Aref Rayess.",
    galleryImages: [
      "/images/portfolio/gallery/towers-of-silence/pf66.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf68.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf80.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf69.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf70.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf72.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf67.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf73.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf79.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf74.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf77.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf75.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf76.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf71.jpg",
      "/images/portfolio/gallery/towers-of-silence/pf78.jpg",
    ],
  },
  // ─── Theatre & Dance ───
  {
    id: 11,
    title: "The Diary of a Mulberry Tree",
    venue: "Dance-theatre performance · Beirut / Hammana",
    year: "2017–2018",
    category: "Theatre & Dance",
    slug: "diary-mulberry-tree-2018",
    image: "/images/portfolio/gallery/diary-mulberry-tree-2018/3.jpg",
    description: "The Diary of a Mulberry Tree is a dance-theatre work written and directed by Nadine Abou Zaki, first presented at Al Madina Theatre in Beirut in 2017 and later developed at Hammana Artist House in 2018. Inspired by the Lebanese Civil War and Eastern philosophy, the work gives voice to a mulberry tree that bears witness to the intimate lives and conflicts unfolding around it. Through dance, narration, poetry and music, the performance explores memory, nature, human violence and our relationship with the living world.",
    credits: [
      {
        role: "Written & directed by",
        name: "Nadine Abou Zaki",
      },
      {
        role: "Choreographer & dancer",
        name: "Jean-Paul Mehansio",
      },
      {
        role: "Performers",
        name: "Dana Mikhail & Rouaida al Ghali",
      },
      {
        role: "Assistant director",
        name: "Bshara Atallah",
      },
      {
        role: "Live music",
        name: "Tony Elieh",
      },
      {
        role: "Scenography & light design",
        name: "Alaa Minawi",
      },
      {
        role: "Costumes",
        name: "Bshara Atallah",
      },
      {
        role: "Designer",
        name: "Souheil Saab",
      },
      {
        role: "In collaboration with",
        name: "L’Institut Français du Liban & Red Oak",
      },
    ],
    sections: [
      {
        title: "Al Madina Theatre, Beirut — 2017",
        images: [
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-facebook-event-page-1.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-1-0.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-17.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-2-mulberry-tree.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-the-diary-of-a-mulberry-tree-2018-0.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-9.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-2-0.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-6-0.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-7-0.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-8-0.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-3-1.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-4-0.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-10-0.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-11.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-11-mulberry-tree.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-12.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-13.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-14.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-15.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-16.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-performance-1.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-performance-2.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/almadina2017-the-diary-of-a-mulberry-tree-poster-2017.jpg",
        ],
        videos: [
          {
            id: "IiR9x1REd0c",
            label: "Trailer",
          },
          {
            id: "fYtY4hdasos",
            label: "Performance video — 10 min",
          },
        ],
      },
      {
        title: "Hammana Artist House — 2018",
        images: [
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-facebook-the-diary-of-a-mulberry-tree-2.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-unnamed-1.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-unnamed-2.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-unnamed-3.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-unnamed-4.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-unnamed-5.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-unnamed-6.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-unnamed-8.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-1-1.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-6-1.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-3-2.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-4-1.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-6-2.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-img-6557.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/hammana2018-the-diary-of-a-mulberry-tree-antoine-poster.jpg",
        ],
      },
    ],
  },
  {
    id: 12,
    title: "PERCEPTIONS",
    venue: "Theatre project with blind and Deaf participants",
    year: "2019–2020",
    category: "Theatre & Dance",
    slug: "perceptions",
    image: "/images/portfolio/gallery/perceptions/1.jpg",
    description: "PERCEPTIONS is a theatre project developed with separate groups of blind and Deaf participants in Lebanon. Through theatre-based workshops and collaborative creation, the project explored expression, communication and participation through different sensory experiences. Written by Nadine Abou Zaki and co-directed with Rouaida al Ghali Hornig, the project was developed with Red Oak and supported by the Euro-Mediterranean Foundation of Support to Human Rights Defenders (EMHRF).",
    credits: [
      {
        role: "Written by",
        name: "Nadine Abou Zaki",
      },
      {
        role: "Co-directed by",
        name: "Rouaida al Ghali Hornig & Nadine Abou Zaki",
      },
      {
        role: "Supported by",
        name: "Euro-Mediterranean Foundation of Support to Human Rights Defenders (EMHRF) and Red Oak",
      },
      {
        role: "In collaboration with",
        name: "Italian Cultural Institute and Lebanese School for the Blind and Deaf",
      },
    ],
    galleryImages: [
      "/images/portfolio/gallery/perceptions/2.jpg",
      "/images/portfolio/gallery/perceptions/3.jpg",
    ],
  },
  // ─── Lino prints ───
  {
    id: 13,
    title: "Lino Prints",
    venue: "",
    year: "2024",
    category: "Lino prints",
    slug: "lino-prints",
    image: "/images/portfolio/lino-prints.jpg",
    description: "The search for transcendence and the insatiable quest to transcend the limits of existence form the core of this series of linocut prints. Each print captures moments of introspection and spiritual elevation. The textures and raised surfaces of the embossings are designed to be tactile and accessible to all, inviting sensory exploration through touch.",
    galleryImages: [
      "/images/portfolio/gallery/lino-prints/6-souffle.jpg",
      "/images/portfolio/gallery/lino-prints/1-dans-le-vent.jpg",
      "/images/portfolio/gallery/lino-prints/2-envol.jpg",
      "/images/portfolio/gallery/lino-prints/3-envol-tactile-1.jpg",
      "/images/portfolio/gallery/lino-prints/5-hybride.jpg",
      "/images/portfolio/gallery/lino-prints/7-l-ailleurs.jpg",
      "/images/portfolio/gallery/lino-prints/4-a-contre-courant-tactile.jpg",
      "/images/portfolio/gallery/lino-prints/10-devenir.jpg",
      "/images/portfolio/gallery/lino-prints/11-a-contre-courant.jpg",
    ],
  },
  // ─── Books ───
  {
    id: 14,
    title: "La chambre d’Alberto",
    venue: "Novel · L’Harmattan, Écritures",
    year: "2020",
    category: "Books",
    slug: "la-chambre-dalberto",
    image: "/images/portfolio/books/la-chambre-dalberto.jpg",
    description: "Linda rents an apartment in Paris for a few days and is immediately unsettled by the photograph of a man she has never met. Convinced that something inexplicably connects them, she begins to uncover the traces of his life and the secrets of a man who believes his illness is linked to his radical political engagement in 1970s Italy. The novel moves between intuition, memory and the elusive presence of another life.",
  },
  {
    id: 15,
    title: "Le journal d’un mûrier",
    venue: "Bilingual French–Arabic edition · L’Harmattan",
    year: "2018",
    category: "Books",
    slug: "le-journal-dun-murier",
    image: "/images/portfolio/books/le-journal-dun-murier.jpg",
    description: "Do trees have memory or consciousness? Can they communicate with their environment and respond emotionally to human beings? Inspired by the Lebanese Civil War and Hindu philosophy, the book gives voice to a mulberry tree that bears witness to the intimate daily lives of those around it. Through this non-human perspective, it explores memory, violence, nature and our responsibility towards the living world.",
    relatedLink: {
      label: "Related work: The Diary of a Mulberry Tree",
      href: "/portfolio/diary-mulberry-tree-2018",
    },
  },
  {
    id: 16,
    title: "L’homme terrible de la ville",
    subtitle: "Nazih Khater : témoin, acteur et inspirateur de la vie culturelle de Beyrouth de 1960 à 2014",
    venue: "Biographical portrait · L’Harmattan",
    year: "2015",
    category: "Books",
    slug: "lhomme-terrible-de-la-ville",
    image: "/images/portfolio/books/lhomme-terrible-harmattan-2015.jpg",
    description: "A literary portrait and biographical journey through the life of Lebanese art critic Nazih Khater, a decisive and controversial figure in Beirut’s cultural life for more than half a century. Drawing on memories, conversations and testimonies, the book revisits a man who witnessed — and helped shape — the city’s artistic and intellectual life from the 1960s to 2014.",
    editions: [
      "French edition: L’Harmattan, Paris · 2015.",
      "Arabic edition: Dar An-Nahar, Beirut · 2015 · translated by Nahla Baydoun.",
    ],
    editionImages: [
      {
        src: "/images/portfolio/books/lhomme-terrible-harmattan-2015.jpg",
        caption: "L’Harmattan, Paris — French edition, 2015",
      },
    ],
  },
  {
    id: 17,
    title: "De femme à homme",
    subtitle: "Sur l’actuel féminin — Récits et correspondance avec Pierre-Marie Hasse",
    venue: "Narratives & correspondence with Pierre-Marie Hasse · L’Harmattan",
    year: "2012",
    category: "Books",
    slug: "de-femme-a-homme",
    image: "/images/portfolio/books/de-femme-a-homme-harmattan-2012.jpg",
    description: "A collection of narratives, observations and correspondence with philosopher Pierre-Marie Hasse on the contemporary condition of women. Drawing on travel observations and personal experience, the book develops into a frank dialogue between an Arab woman and a French man, addressing the body, motherhood, work, gender equality, sexuality and the contradictions surrounding what it means to be a woman today.",
    editions: [
      "Original edition: L’Harmattan, Paris · 2012.",
      "Second edition: Marsam, Rabat, Morocco · 2013.",
      "Arabic edition: من امرأة إلى رجل · Dar al-Farabi, Beirut · 2017.",
    ],
    editionImages: [
      {
        src: "/images/portfolio/books/de-femme-a-homme-harmattan-2012.jpg",
        caption: "L’Harmattan, Paris — 2012",
      },
      {
        src: "/images/portfolio/books/de-femme-a-homme-marsam-2013.jpg",
        caption: "Marsam, Rabat — second edition, 2013",
      },
    ],
  },
  {
    id: 18,
    title: "Le lieu et le corps",
    subtitle: "Du lieu délocalisé à la perte du corps : vers la dé-mondialisation",
    venue: "Bilingual French–Arabic philosophical essay · L’Harmattan",
    year: "2010",
    category: "Books",
    slug: "le-lieu-et-le-corps",
    image: "/images/portfolio/books/le-lieu-et-le-corps.jpg",
    description: "At a time when technology promises mobility, connectivity and a world without borders, this philosophical essay examines a paradox: can increased communication also produce a loss of place, body and genuine encounter? It explores how new technologies transform our relationship to space, time, others and ourselves, and questions what remains of travel, communication and desire when place becomes increasingly detached from physical presence.",
  },
  {
    id: 19,
    title: "Introduction aux Épîtres de la Sagesse",
    subtitle: "L’ésotérisme druze à la lumière de la doctrine de Çankara",
    venue: "Philosophical study · L’Harmattan, Ouverture Philosophique",
    year: "2006",
    category: "Books",
    slug: "introduction-aux-epitres",
    image: "/images/portfolio/books/introduction-aux-epitres.jpg",
    description: "A comparative philosophical study of Druze Tawhîd and Śaṅkara’s Advaita Vedanta. Through three central questions — the Absolute, the relationship between the world and the Absolute, and liberation — the book brings two geographically distant philosophical and spiritual traditions into dialogue and offers an interpretation of the Druze Epistles of Wisdom through this comparative perspective.",
  },
];

/** The curated homepage selection, in order. Slugs resolve against `portfolioItems`. */
export const homeSelection = [
  "priere-de-toucher-2023",
  "diary-mulberry-tree-2018",
  "the-one-acts",
  "elephant-in-the-dark",
  "please-touch-waste-studio",
  "le-journal-dun-murier",
  "public-monuments",
  "lino-prints",
  "perceptions",
  "please-touch-trash",
  "please-touch-agial",
  "la-chambre-dalberto",
];

export const homeItems: PortfolioItem[] = homeSelection
  .map((slug) => portfolioItems.find((item) => item.slug === slug))
  .filter((item): item is PortfolioItem => Boolean(item));

export const videoItems: VideoItem[] = [
  { id: 1, title: "Prière de toucher", venue: "INECAT", year: "2023", youtubeId: "pGSWEwTEnIM" },
  { id: 2, title: "The Diary of a Mulberry Tree", venue: "Al Madina Theatre", year: "2020", youtubeId: "fYtY4hdasos" },
  { id: 3, title: "The Diary of a Mulberry Tree", venue: "Trailer", year: "2017", youtubeId: "IiR9x1REd0c" },
  { id: 4, title: "Please Touch", venue: "Beirut Art Fair", year: "2020", youtubeId: "XlN7PJHVZlk" },
  { id: 5, title: "Elephant in the Dark", venue: "MACAM", year: "2020", youtubeId: "V8_sJ8L5hAc" },
  { id: 6, title: "Please Touch the Trash", venue: "Beirut International Platform of Dance", year: "2016", youtubeId: "lRkIo7bdEFQ" },
  { id: 7, title: "Please Touch", venue: "Waste Studio", year: "2019", youtubeId: "fQQvJPNaQWU" },
  { id: 8, title: "Please Touch", venue: "Sculpting Blindfolded", year: "2014", youtubeId: "acn0FVo538g" },
  { id: 9, title: "Please Touch", venue: "Exhibition & Performance", year: "2014", youtubeId: "RIydAu3nEpI" },
  { id: 10, title: "Doors. Please Touch — MACAM", venue: "TV interview — Al Araby TV", year: "2019", youtubeId: "tE26NyE3Pts" },
  { id: 11, title: "Doors. Please Touch — National Museum of Beirut", venue: "TV interview — LBCI", year: "2017", youtubeId: "hGTE1nDIE6Y" },
  { id: 12, title: "Please Touch", venue: "TV interview — Future TV", year: "2016", youtubeId: "2n-ljAGAEWg" },
  { id: 13, title: "Please Touch", venue: "TV interview — Al Hurra TV", year: "2015", youtubeId: "mqZnaEXLzv8" },
  { id: 14, title: "Le lieu et le corps", venue: "TV interview — MTV", year: "2010", youtubeId: "2CaruHpYFwM" },
  { id: 15, title: "L’homme terrible de la ville", venue: "Nazih Khater", year: "2016", youtubeId: "TnBdmih2ef4" },
  { id: 16, title: "The Father of the Blind", venue: "", year: "2015", youtubeId: "RHBy8j-V8Vo" },
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Lino Prints — Centre hospitalier des Quatre Villes, Saint-Cloud",
    date: "2024",
    description:
      "A solo presentation of Nadine Abou Zaki’s linocuts was shown at the Centre hospitalier des Quatre Villes in Saint-Cloud. The exhibition explored movement, inner transformation and the desire to transcend the limits of existence through linocut.",
    image: "/images/news/quatre-villes.jpg",
    slug: "exhibition-centre-hospitalier-des-quatre-villes",
    href: "/portfolio/lino-prints",
  },
  {
    id: 2,
    title: "Prière de toucher — INECAT, Paris",
    date: "2023",
    description:
      "“Prière de toucher” (Please Touch) was presented at INECAT in Paris during “Fenêtres”, from 29 September to 1 October 2023. The programme combined the tactile workshop “Terre… Prière de toucher” with an interactive performance and sculpture exhibition centred on touch, perception and the living sculpture.",
    image: "/images/portfolio/gallery/priere-de-toucher-2023/1.jpg",
    slug: "priere-de-toucher-inecat-paris",
    href: "/portfolio/priere-de-toucher-2023",
  },
  {
    id: 3,
    title: "Lino Prints Exhibition",
    date: "2023",
    description:
      "A presentation of Nadine Abou Zaki\u2019s linocut prints, a series exploring movement, inner transformation and the desire to transcend the limits of existence.",
    image: "/images/news/lino-prints-exhibition.jpg",
    slug: "lino-prints-exhibition",
    href: "/portfolio/lino-prints",
  },
  {
    id: 4,
    title: "Elephant in the Dark",
    date: "2020",
    description:
      "Supported by the Arab Fund for Arts and Culture (AFAC), “Elephant in the Dark” developed through blindfolded performance experiences at the Modern and Contemporary Art Museum (MACAM) and the National Museum of Beirut, exploring darkness, touch, space and perception.",
    image: "/images/portfolio/elephant-night-wide.jpg",
    slug: "elephant-in-the-dark-blindfold-walk",
    href: "/portfolio/elephant-in-the-dark",
  },
  {
    id: 5,
    title: "Le journal d’un mûrier — Braille edition",
    date: "2018",
    description:
      "“Le journal d’un mûrier” was published in Braille. The edition was printed by Blessed School, with a relief cover produced by the Omero National Museum of Ancona, and distributed to schools, centres and organisations serving blind and visually impaired readers.",
    image: "/images/news/nazih-khater-braille.jpg",
    slug: "nazih-khater-braille",
    href: "/portfolio/le-journal-dun-murier",
  },
  {
    id: 6,
    title: "The Diary of a Mulberry Tree — Al Madina Theatre, Beirut",
    date: "2017",
    description:
      "“The Diary of a Mulberry Tree”, a dance-theatre work written and directed by Nadine Abou Zaki, was presented at Al Madina Theatre in Beirut. The work brings together dance, narration, poetry and music around memory, nature and the Lebanese Civil War.",
    image: "/images/news/diary-mulberry-tree-wide.jpg",
    slug: "diary-mulberry-tree-al-madina-2017",
    href: "/portfolio/diary-mulberry-tree-2018",
  },
  {
    id: 7,
    title: "Chevalier dans l’Ordre des Palmes Académiques",
    date: "2016",
    description:
      "Nadine Abou Zaki was named Chevalier dans l’Ordre des Palmes Académiques by the French Ministry of National Education.",
    slug: "palmes-academiques",
  },
  {
    id: 8,
    title: "Please Touch — Beirut Art Fair",
    date: "2015",
    description:
      "“Please Touch” was presented at Beirut Art Fair within the “Virtual/Reality” segment curated by Pascal Odille. Four performers became living sculptures, responding to visitors’ touch and shifting the boundary between sculpture, body and audience.",
    image: "/images/portfolio/please-touch-baf-2015.jpg",
    slug: "please-touch-beirut-art-fair-digital",
    href: "/portfolio/please-touch-baf-2015",
  },
  {
    id: 9,
    title: "Please Touch — Station Beirut / Agial Gallery",
    date: "2014",
    description:
      "“Please Touch” was presented at Station Beirut, curated by Agial Art Gallery. The project brought together a sculpture exhibition, blindfolded sculpting, living sculpture, film, sound and light, inviting visitors to encounter sculpture through touch and darkness.",
    image: "/images/portfolio/gallery/please-touch-sculptures-2014/3.jpg",
    slug: "please-dont-touch-station-beirut",
    href: "/portfolio/please-touch-agial",
  },
  {
    id: 10,
    title: "The second edition of De femme \u00e0 homme (Marsam ed. Morocco) at Paris Book Fair",
    date: "2014",
    description:
      "The second edition of \u201cDe femme \u00e0 homme\u201d, published by Marsam in Rabat, was presented at the Paris Book Fair.",
    image: "/images/news/de-femme-a-homme-paris-book-fair.jpg",
    slug: "de-femme-a-homme-paris-book-fair",
    href: "/portfolio/de-femme-a-homme",
  },
  {
    id: 11,
    title: "De femme à homme — Institut du monde arabe, Paris",
    date: "2012",
    description:
      "Nadine Abou Zaki and philosopher Pierre-Marie Hasse presented and discussed “De femme à homme” at the Institut du monde arabe in Paris during a Café littéraire moderated by François Zabbal.",
    image: "/images/news/arab-world-institute-paris.jpg",
    slug: "arab-world-institute-paris",
    href: "/portfolio/de-femme-a-homme",
  },
  {
    id: 12,
    title: "Book signing at the 18th Francophone Book Fair — Beirut",
    date: "2011",
    description:
      "Nadine Abou Zaki took part in a book signing at the 18th Francophone Book Fair in Beirut.",
    image: "/images/news/book-signing-18th-francophone.jpg",
    slug: "book-signing-18th-francophone-beirut",
  },
  {
    id: 13,
    title: "Le lieu et le corps — Le Scribe / L’Harmattan, Paris",
    date: "2010",
    description:
      "A public debate around “Le lieu et le corps” was held at Le Scribe — L’Harmattan in Paris, addressing place, body, travel and communication in the age of new technologies.",
    image: "/images/news/le-lieu-et-le-corps-paris.jpg",
    slug: "le-lieu-et-le-corps-paris",
    href: "/portfolio/le-lieu-et-le-corps",
  },
  {
    id: 14,
    title: "The Garden of Dialogue — Beirut World Book Capital",
    date: "2010",
    description:
      "Five stone sculpture-benches forming “The Garden of Dialogue” were inaugurated in Beirut as part of Beirut World Book Capital. The works honour Gibran Khalil Gibran, Nadia Tueni, Abdallah Alayli and Hussein Mroueh, and were conceived for sitting, reading and dialogue.",
    image: "/images/portfolio/gallery/public-monuments/2.jpg",
    slug: "garden-of-dialogue-beirut",
    href: "/portfolio/public-monuments",
  },
  {
    id: 15,
    title: "Book signing at the 17th Francophone Book Fair \u2014 Beirut",
    date: "2010",
    description:
      "Nadine Abou Zaki signed \u201cLe lieu et le corps / Al Makan Wal Jasad\u201d at the 17th Francophone Book Fair in Beirut.",
    image: "/images/news/book-signing-17th-francophone.jpg",
    slug: "book-signing-17th-francophone-beirut",
  },
  {
    id: 16,
    title: "Sculptor Ambassador — Jeux de la Francophonie",
    date: "2009",
    description:
      "Nadine Abou Zaki was selected by the Lebanese Ministry of Culture as Lebanon’s Sculptor Ambassador for the 6th Jeux de la Francophonie in Beirut.",
    image: "/images/news/sculptor-ambassador-francophone.jpg",
    slug: "sculptor-ambassador-francophone-games",
  },
  {
    id: 17,
    title: "International Secular Award — Paris",
    date: "2009",
    description:
      "Nadine Abou Zaki received the 4th International Secular Award (Prix International de la Laïcité) from the Comité de la laïcité républicaine at Paris City Hall.",
    image: "/images/news/secular-award-paris.jpg",
    slug: "secular-award-paris",
  },
  {
    id: 18,
    title: "And I Fly Off — solo sculpture exhibition, Beirut",
    date: "2008",
    description:
      "Nadine Abou Zaki presented her third solo sculpture exhibition, “And I Fly Off”, at Surface Libre in Beirut, bringing together 26 sculptures in stone and wood.",
    image: "/images/news/and-i-fly-off-surface-libre.jpg",
    slug: "and-i-fly-off-surface-libre",
    href: "/portfolio/and-i-fly-off",
  },
];

/**
 * Every historical news entry. Not listed on /news, but still served at
 * /news/[slug] so existing links keep working.
 */
export const newsArchive: NewsItem[] = [
  {
    id: 1,
    title: "Exhibition at the Centre Hospitalier des Quatre Villes",
    date: "March 2024",
    description:
      "I am thrilled to share that my series of lino prints and sculptures are currently on display at the Centre Hospitalier des Quatre Villes - Saint-Cloud.",
    image: "/images/news/quatre-villes.jpg",
    slug: "exhibition-centre-hospitalier-des-quatre-villes",
  },
  {
    id: 2,
    title: '"Un artiste, un commerçant" at Le Carré',
    date: "March 2024",
    description:
      'The opening of the event organized by la ville de Saint-Cloud "Un artiste, un commerçant" will be held at Le Carré gallery. I am delighted to showcase lino prints alongside other talented artists.',
    image: "/images/news/le-carre.jpg",
    slug: "un-artiste-un-commercant-le-carre",
  },
  {
    id: 3,
    title: '"Prière de Toucher" Performance and Sculpture Exhibition at INECAT - Paris',
    date: "September 2023",
    description:
      'I am thrilled to announce my participation to "Fenêtres" in the upcoming Open House event at INECAT in Paris with "Prière de Toucher" ("Please Touch") performance and exhibition. It will be preceded by "Terre... Prière de Toucher" art workshop. The event will take place from Sept 29 to October 1, 2023.',
    image: "/images/news/inecat.jpg",
    slug: "priere-de-toucher-inecat-paris",
  },
  {
    id: 4,
    title: "Lino Prints Exhibition",
    date: "June 2023",
    description:
      'On the occasion of the "Journée de l\'estampe contemporaine", I will be exhibiting my lino prints at Saint-Sulpice in Paris on June 12-13, along with other engravers.',
    image: "/images/news/lino-prints-exhibition.jpg",
    slug: "lino-prints-exhibition",
  },
  {
    id: 5,
    title: "Arts and Inclusiveness in light of the COVID-19 - UNESCO",
    date: "July 2020",
    description:
      'Nadine Abou Zaki animated a training of trainers (TOT) workshop on "How Arts help the inclusiveness of our society" during the workshop on Intercultural Dialogue and human rights through Arts. She discussed the new challenges to cultural participation for persons with disabilities in light of the Covid-19 and the key opportunities. The event was organized by UNESCO and the Lebanese National Commission for UNESCO.',
    image: "/images/news/arts-inclusiveness-covid-unesco.jpg",
    slug: "arts-inclusiveness-covid-unesco",
  },
  {
    id: 6,
    title: 'New book release "La chambre d\'Alberto"',
    date: "July 2020",
    description:
      "A book by Nadine Abou Zaki has now been released. You can also order a print or ebook version online at l'harmattan.",
    image: "/images/news/la-chambre-dalberto.jpg",
    slug: "la-chambre-dalberto-book-release",
  },
  {
    id: 7,
    title: "Elephant in the Dark, A Blindfold Walk Performance",
    date: "August 2019",
    description:
      'We have the pleasure to cordially invite you to the blindfold walk performance "Elephant in the Dark" on Saturday, September 28 at MACAM in Alita- Byblos.',
    image: "/images/news/elephant-in-the-dark.jpg",
    slug: "elephant-in-the-dark-blindfold-walk",
  },
  {
    id: 8,
    title: 'My Book on "Nazih Khater" published in Braille',
    date: "October 2018",
    description:
      'In 2018, my book on the Lebanese art critic "Nazih Khater: the Republic of Enemies" was translated in Braille, along with my book "Le Lieu et le corps". This initiative intends to make my books accessible to the blind and visually impaired and to support this segment of the population to participate fully in the cultural and artistic life of Lebanon.',
    image: "/images/news/nazih-khater-braille.jpg",
    slug: "nazih-khater-braille",
  },
  {
    id: 9,
    title: "The Diary of a Mulberry Tree at Hammana Artist House",
    date: "September 2018",
    description:
      'Following the success of "The Diary of a Mulberry Tree" at Al Madina Theatre last summer, Red Oak Performing Troupe has the pleasure to invite you to "The Diary of a Mulberry Tree" on 15 September 2018 at 8:00 pm at Hammana Artist House.',
    image: "/images/news/diary-mulberry-tree-hammana.jpg",
    slug: "diary-mulberry-tree-hammana",
  },
  {
    id: 10,
    title: "The Diary of a Mulberry Tree - Al Madina Theatre 2017",
    date: "September 2017",
    description:
      "Do trees have a memory? Do they have consciousness? Do they communicate with their environment? Can they hear, smell and feel? How do they respond emotionally to humans? Do they feel pain or experience joy or sadness? What is our responsibility as humans towards the nature and environment in today's digital age?",
    image: "/images/news/diary-mulberry-tree-al-madina.jpg",
    slug: "diary-mulberry-tree-al-madina-2017",
  },
  {
    id: 11,
    title: "Please Touch the Trash - BIPOD 2016",
    date: "March 2016",
    description:
      'Please Touch the Trash is an Interactive Art Performance that will take place on April 16-17, 2016 during Moultaqa Leymoun within BIPOD (Beirut International Platform of Dance) at Al Madina theatre- Beirut. This interactive performance questions the concept of waste and its philosophical, social, economic and environmental dimensions.',
    image: "/images/news/please-touch-trash-bipod.jpg",
    slug: "please-touch-the-trash-bipod",
  },
  {
    id: 12,
    title: "PLEASE TOUCH - Waste 2016",
    date: "February 2016",
    description:
      "What if you were a performer for one night?! Come & be the sculpture at Waste pop-up shop - Saifi village - Beirut - Feb 17 2016 at 7pm.",
    image: "/images/news/please-touch-waste.jpg",
    slug: "please-touch-waste-2016",
  },
  {
    id: 13,
    title: "Book Signing - Nazih Khater: L'HOMME TERRIBLE DE LA VILLE",
    date: "October 2015",
    description:
      'Nadine Abou Zaki will be signing her new book "Nazih Khater: L\'HOMME TERRIBLE DE LA VILLE" at the Salon du livre francophone de Beyrouth (Beirut French Book Fair) on Saturday 31 October 2015 at 6 p.m.',
    image: "/images/news/book-signing-nazih-khater.jpg",
    slug: "book-signing-nazih-khater",
  },
  {
    id: 14,
    title: 'Opening of Beirut Art Fair: "Please Touch" in the Segment Digital Art: "Virtual Reality"',
    date: "September 2015",
    description:
      '"Please Touch" new performances will be presented at Beirut Art Fair 2015 (Biel) with four dancers: Bshara Atallah, Lisa Chehade, Rabih Yammine & Corine Skaff. This performance/installation is featured in the segment Digital Art: "Virtual Reality".',
    image: "/images/news/please-touch-beirut-art-fair.jpg",
    slug: "please-touch-beirut-art-fair-digital",
  },
  {
    id: 15,
    title: '"PLEASE TOUCH" on 17-20 September in Beirut Art Fair',
    date: "September 2015",
    description:
      '"PLEASE DON\'T TOUCH" will be performed for the second time in Lebanon at Beirut Art Fair #6- Biel. This edition of the Fair will focus on digital art: "Virtual/Reality". Curated by Pascal Odille, it presents an exhibition that will destabilize the visitors\' senses and will make them travel across the kingdom of illusions.',
    image: "/images/news/please-touch-beirut-art-fair-2.jpg",
    slug: "please-touch-beirut-art-fair-sept-2015",
  },
  {
    id: 16,
    title: '"DE FEMME A HOMME" on 23 May at Marsam Gallery & Editions - Rabat',
    date: "May 2015",
    description:
      'Moroccan writer and sociologist Fatema Mernissi will present "De femme à homme" (second edition, Marsam Ed.) by Nadine Abou Zaki. The event will take place on May 23, 2015 at Marsam Editions- Rabat. Marsam is one of the oldest contemporary art galleries in Morocco and the first art editor.',
    image: "/images/news/de-femme-a-homme-marsam.jpg",
    slug: "de-femme-a-homme-marsam-rabat",
  },
  {
    id: 17,
    title: '"PLEASE DON\'T TOUCH" on 20 November at Station - Beirut',
    date: "October 2014",
    description:
      '"PLEASE DON\'T TOUCH" is an interactive performance introducing a new concept to sculpture. Nadine Abou Zaki sculpted blindfolded in the dark, focusing on the inner self, thereby substituting the sense of sight with that of touch. She questions the role of image as a contemporary tool, the physical act of touching in artistic creation, and its relation to memory.',
    image: "/images/news/please-dont-touch-station.jpg",
    slug: "please-dont-touch-station-beirut",
  },
  {
    id: 18,
    title: "19 artists from Lebanon & Syria at SV gallery in Saifi village - Beirut",
    date: "October 2014",
    description:
      "Solidere & Afak organized an exhibition with 19 artists from Lebanon and Syria at SV gallery in Saifi village- Beirut. Nadine Abou Zaki exhibited a sculpture along with the artworks of Wajih Nahle, Hussein Madi, Amine Al Basha, Halim Jerdak, Nazir Nabaa, Bahram, Moustapha Ali, Sabhan Adam, and others.",
    image: "/images/news/19-artists-sv-gallery.jpg",
    slug: "19-artists-lebanon-syria-sv-gallery",
  },
  {
    id: 19,
    title: 'The second edition of "De femme à homme" (Marsam ed. Morocco) at Paris Book Fair',
    date: "March 2014",
    description:
      'Nadine Abou Zaki and Pierre-Marie Hasse signed the second edition of "De femme à homme" (Marsam Editions, Morocco) at Paris Book Fair (Salon du livre de Paris). Paris Book Fair is an event of international repute that is held at the Paris Porte de Versailles, for a period of 4 days.',
    image: "/images/news/de-femme-a-homme-paris-book-fair.jpg",
    slug: "de-femme-a-homme-paris-book-fair",
  },
  {
    id: 20,
    title: "Public discussion at the KoerberForum - Hamburg",
    date: "December 2013",
    description:
      'The DAFG and the Koerber Foundation invited Nadine Abou Zaki for a public discussion on "A Women\'s Uprising? Emancipation in the Arab World" at the KoerberForum, Korber Foundation\'s headquarters in Hamburg on 10 December 2013. The discussion was moderated by television journalist Minou Amir-Sehhi.',
    image: "/images/news/koerberforum-hamburg.jpg",
    slug: "public-discussion-koerberforum-hamburg",
  },
  {
    id: 21,
    title: "Public lecture at the DAFG - Berlin",
    date: "December 2013",
    description:
      'Nadine Abou Zaki gave a public lecture on: "The New Arab Woman Forum: The transforming role of Arab women and its future impact on society" in the DAFG-office in Berlin on 11 December 2013.',
    image: "/images/news/public-lecture-dafg-berlin.jpg",
    slug: "public-lecture-dafg-berlin",
  },
  {
    id: 22,
    title: '"Socrates and Women" at the Hellenic Cultural Center - Beirut',
    date: "June 2013",
    description:
      'Nadine Abou Zaki presented a paper on "Socrates and Women" during the "Philosophical symposium on Socrates- True Wisdom" at the Hellenic Cultural Center, Beirut, Lebanon.',
    image: "/images/news/socrates-and-women.jpg",
    slug: "socrates-and-women-hellenic-center",
  },
  {
    id: 23,
    title: "Nadine Abou Zaki & Pierre-Marie Hasse at the Arab World Institute - Paris",
    date: "December 2012",
    description:
      'Nadine Abou Zaki and Pierre-Marie Hasse were invited to a debate about the book "De femme à homme" at the Arab World Institute (Institut du Monde Arabe- IMA). The discussion was moderated by François Zabbal, editor in chief of Qantara magazine - Institut du monde arabe.',
    image: "/images/news/arab-world-institute-paris.jpg",
    slug: "arab-world-institute-paris",
  },
  {
    id: 24,
    title: "Book signing at the 18th Francophone Book Fair - Beirut",
    date: "October 2012",
    description:
      'Nadine Abou Zaki signed her book "De femme à homme" at the "18th Francophone Book Fair". The most prominent francophone cultural event in Lebanon took place at the Beirut International Exhibition center (BIEL). The center was filled with conferences, book signings, readings, and exhibitions.',
    image: "/images/news/book-signing-18th-francophone.jpg",
    slug: "book-signing-18th-francophone-beirut",
  },
  {
    id: 25,
    title: 'New book release "De femme à homme" (From Woman to Man)',
    date: "September 2012",
    description:
      "A book by Nadine Abou Zaki has now been released. You can buy your copy in Paris at L'Harmattan bookstore and in Lebanon at Virgin Megastore, Librairie Antoine and Al Bourj. You can also order a print or ebook version online at editions-harmattan.fr or at Amazon.",
    image: "/images/news/de-femme-a-homme-book.jpg",
    slug: "de-femme-a-homme-book-release",
  },
  {
    id: 26,
    title: '"Sawa sawa" march in Beirut: "No spring without women"',
    date: "February 2012",
    description:
      'NAWF Founder and Executive Chair Nadine Abou Zaki initiated a women\'s march in Beirut under the slogan "Sawa Sawa". The march was organized within the framework of NAWF, held under the theme: "Women and the Arab Spring". Representatives from Lebanon, Egypt, UAE, KSA, Afghanistan, Bahrain, Yemen, Tunisia, Libya notably activists from women rights organizations participated in the march.',
    image: "/images/news/sawa-sawa-march.jpg",
    slug: "sawa-sawa-march-beirut",
  },
  {
    id: 27,
    title: 'Debate about "Le lieu et le corps" at Le Scribe l\'Harmattan - Paris',
    date: "March 2011",
    description:
      'On March 2011, Nadine Abou Zaki presented her book "Le lieu et le corps" at Le Scribe L\'Harmattan in Paris. The presentation was followed by a debate and a book signing.',
    image: "/images/news/le-lieu-et-le-corps-paris.jpg",
    slug: "le-lieu-et-le-corps-paris",
  },
  {
    id: 28,
    title: "Book signing at the 17th Francophone Book Fair - Beirut",
    date: "November 2010",
    description:
      'Nadine Abou Zaki signed her book "Le lieu et le corps / Al Makan Wal Jasad" at the 17th Francophone Book Fair and in NAWF 2010, along with Malek Chebel, Rachid Al-Daif, Mona Abou Hamzeh, Rima Karaki, Mona Tayem, and Rasha Atrach.',
    image: "/images/news/book-signing-17th-francophone.jpg",
    slug: "book-signing-17th-francophone-beirut",
  },
  {
    id: 29,
    title: "Art Book Festival - UNESCO - Beirut",
    date: "November 2010",
    description:
      "A sculpture installation was exhibited by the artist Nadine Abou Zaki at the Lebanese Art Book Festival in UNESCO Palace, Beirut. This 2nd edition was inaugurated by the Lebanese Minister of Culture H.E. Mr. Tammam Salam.",
    image: "/images/news/art-book-festival-unesco.jpg",
    slug: "art-book-festival-unesco-beirut",
  },
  {
    id: 30,
    title: 'Inauguration of the "Garden of Dialogue" - Beirut World Book Capital - Beirut',
    date: "April 2010",
    description:
      'At the occasion of "Beirut World Book Capital" and as a tribute to Lebanese writers and poets, Nadine Abou Zaki inaugurated "The Garden of Dialogue" with 5 sculptures in stone that will be permanently exhibited near the French Cultural Center in Damascus Street- Beirut. The inauguration was held in the presence of H.E. Tammam Salam, H.E. Marwan Hamadeh, Beirut Municipal President Abdel Mounim Ariss and the French ambassador Denis Pieton.',
    image: "/images/news/garden-of-dialogue.jpg",
    slug: "garden-of-dialogue-beirut",
  },
  {
    id: 31,
    title: 'Nadine Abou Zaki selected as the "Sculptor Ambassador" at the 6th Francophone Games - Beirut',
    date: "October 2009",
    description:
      'Nadine Abou Zaki was selected as the "Sculptor Ambassador" for Lebanon by the Ministry of Culture and represented Lebanon at the 6th Francophone Games (6iemes Jeux de la Francophonie). Lebanon hosted the 6th Francophone Games held from September 27 to October 6 with the participation of 42 French-speaking countries and more than 3,000 athletes.',
    image: "/images/news/sculptor-ambassador-francophone.jpg",
    slug: "sculptor-ambassador-francophone-games",
  },
  {
    id: 32,
    title: "The Secular Republican Committee honores Nadine Abou Zaki with its 4th International Secular Award - Paris",
    date: "January 2009",
    description:
      "The Secular Republican Committee (Comite de la laicite republicaine), one of the largest and most important secular foundations in France, has honored Nadine Abou Zaki, with its 4th International Secular Award (Prix de la Laicite) at a special ceremony held at the Paris municipality headed by the First Assistant to the mayor of Paris Anne Hidalgo with the participation of a number of French and Lebanese personalities.",
    image: "/images/news/secular-award-paris.jpg",
    slug: "secular-award-paris",
  },
  {
    id: 33,
    title: '3rd Sculpture exhibition "And I fly off" at Surface Libre - Beirut',
    date: "October 2008",
    description:
      'Nadine Abou Zaki held her third individual exhibition "And I fly off" at Surface Libre gallery and exhibited 26 sculptures in stone and wood.',
    image: "/images/news/and-i-fly-off-surface-libre.jpg",
    slug: "and-i-fly-off-surface-libre",
  },
  {
    id: 34,
    title: "Discussion at the European Parliament Information office in France - Paris",
    date: "September 2008",
    description:
      'Nadine Abou Zaki participated in the conference "Transmission des cultures et du dialogue interculturel à travers le rôle de la femme" organized by the Association of Intercultural and Inter-Religious Dialogue (ADICR), in partnership with the European Parliament information office in France.',
    image: "/images/news/european-parliament-paris.jpg",
    slug: "european-parliament-paris",
  },
  {
    id: 35,
    title: 'Celebrating "V to the Tenth" with Eve Ensler & Jane Fonda - New Orleans',
    date: "April 2008",
    description:
      "On April 16, V-Day, the global movement to end violence against women and girls, celebrated its tenth anniversary, V TO THE TENTH, in New Orleans. Over 30,000 people attended the events over the two days. The event featured over 125 speakers, over 40 stars. Two days of revolutionary conversations, slam poets, singers, performers, storytelling, astounding art.",
    image: "/images/news/v-to-the-tenth-new-orleans.jpg",
    slug: "v-to-the-tenth-new-orleans",
  },
  {
    id: 36,
    title: "Workshop with Fatema Mernissi - Cultural Center of Asturias - Spain",
    date: "January 2008",
    description:
      'The world-famous Moroccan sociologist and writer Fatema Mernissi organized a two-day workshop on "Love in Digital Islam". The workshop was hosted by the Cultural Center of Asturias and ended up with a conference in the Niemeyer Center. The diversity of generations and nationalities encouraged the in-depth meditation.',
    image: "/images/news/workshop-fatema-mernissi.jpg",
    slug: "workshop-fatema-mernissi-spain",
  },
  {
    id: 37,
    title: 'V-Day Festival - "Until the violence stops: NYC" - New York',
    date: "June 2006",
    description:
      'Nadine Abou Zaki participated in the panel "Women in Conflict Zones" in V-Day Festival "Until the violence stops: NYC", New York. This panel was moderated by V-Day Founder and playwright Eve Ensler.',
    image: "/images/news/v-day-festival-nyc.jpg",
    slug: "v-day-festival-nyc",
  },
  {
    id: 38,
    title: 'Public lecture on "New Media for a New Arab Woman" - Cairo - Egypt',
    date: "January 2005",
    description:
      'Nadine Abou Zaki gave a public lecture on: "New Media for a New Arab Woman", during the conference "Women, Creativity, and Dissidence", led by writer and activist Nawal El Saadawi- Cairo- Egypt. The conference was part of the 7th International conference of the Arab Women\'s Solidarity Association (AWSA).',
    image: "/images/news/new-media-arab-woman-cairo.jpg",
    slug: "new-media-arab-woman-cairo",
  },
  {
    id: 39,
    title: "Chevalier dans l’Ordre des Palmes Académiques",
    date: "2016",
    description:
      "Nadine Abou Zaki was named Chevalier dans l’Ordre des Palmes Académiques by the French Ministry of National Education.",
    slug: "palmes-academiques",
  },
];

export const biography = [
  "Nadine Abou Zaki is a Lebanese-French multidisciplinary artist, writer and director whose work explores touch, perception, darkness, and the relationship between the body, the artwork and the viewer.",
  "At the core of her practice is a questioning of the dominance of sight in the experience of art. Working in total darkness, she sculpts blindfolded, allowing touch to guide the emergence of form through a direct bodily encounter with matter. In her interactive performances and exhibitions Please Touch (Pri\u00e8re de Toucher), visitors are invited to move beyond looking and experience sculpture through touch, often in darkness. Her work on tactility was featured in Contemporary Art and the Discovery of the Value of Tactility, published by the Omero National Museum in Ancona, Italy.",
  "Her practice extends into performance, theatre and participatory work. She wrote and directed the dance-theatre performance The Diary of a Mulberry Tree, received a grant from the Arab Fund for Arts and Culture (AFAC) for Elephant in the Dark, an immersive blindfolded walking performance, and developed Perceptions, a theatre project with blind and Deaf participants.",
  "Questions of perception, disability and access to art have become an integral part of her work. In 2018, she launched Doors. Please Touch, a pioneering cultural accessibility project in Lebanon developed with museums and cultural institutions to create new ways for people with disabilities to encounter art through tactile, sensory and accessible forms of mediation.",
  "In 2017, she founded Red Oak, a non-profit organization active in Lebanon and France, developing projects at the intersection of art, education, mental health and cultural inclusion.",
  "Her artistic practice is informed by a longstanding engagement with philosophy and research. She holds a PhD in Philosophy from Sorbonne\u2013Paris IV. Her research focuses on haptic aesthetics and the relationship between museums, accessibility and disability. She holds a certification in artistic mediation from the Institut National d\u2019Expression, de Cr\u00e9ation, d\u2019Art et de Transformation (INECAT \u2013 Art & Th\u00e9rapie) in Paris and is currently pursuing a Master\u2019s degree in Dramatherapy at Universit\u00e9 Paris Cit\u00e9.",
  "Her sculptures and performances have been presented in Lebanon and internationally, and her monumental works are installed in public spaces in Lebanon and the United Arab Emirates. She is a member of the Lebanese National Commission for UNESCO and was named Chevalier dans l\u2019Ordre des Palmes Acad\u00e9miques by the French Ministry of National Education.",
];

export const siteConfig = {
  name: "Nadine Abou Zaki",
  tagline: "Sculptor, Writer, Director",
  email: "info@nadineabouzaki.com",
  domain: "nadineabouzaki.com",
  url: "https://www.nadineabouzaki.com",
  description:
    "Lebanese-French sculptor, writer, and director exploring tactile aesthetics and sensory perception.",
  featuredHeading:
    "Exploring the boundaries between touch and perception",
  featuredDescription:
    "Sculpting blindfolded, touch takes the place of sight. Through interactive performances, audiences are invited to encounter sculpture through touch and darkness.",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/nadineabouzaki",
  linkedin: "http://lb.linkedin.com/pub/nadine-abou-zaki/21/4b8/878",
};
