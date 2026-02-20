export interface PortfolioItem {
  id: number;
  title: string;
  venue: string;
  year: string;
  category: string;
  slug: string;
  image: string;
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
  image: string;
}

export const categories = [
  "All",
  "Theater & Dance",
  "Tactile Art Performances",
  "Sculptures",
  "Lino prints",
  "Authored Books",
] as const;

export type Category = (typeof categories)[number];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Lino Prints",
    venue: "",
    year: "2023",
    category: "Lino prints",
    slug: "lino-prints",
    image: "/images/portfolio/lino-prints.jpg",
  },
  {
    id: 2,
    title: "Prière de toucher",
    venue: "INECAT",
    year: "2023",
    category: "Tactile Art Performances",
    slug: "priere-de-toucher-2023",
    image: "/images/portfolio/priere-de-toucher.jpg",
  },
  {
    id: 3,
    title: "LA CHAMBRE D'ALBERTO",
    venue: "L'Harmattan - Paris",
    year: "2020",
    category: "Authored Books",
    slug: "la-chambre-dalberto",
    image: "/images/portfolio/la-chambre-dalberto.jpg",
  },
  {
    id: 4,
    title: "Elephant in the Dark",
    venue: "A Blindfold Walk Performance",
    year: "2020",
    category: "Tactile Art Performances",
    slug: "elephant-in-the-dark",
    image: "/images/portfolio/elephant-in-the-dark.jpg",
  },
  {
    id: 5,
    title: '"PERCEPTIONS"',
    venue: "The Theater by the Blind & Deaf",
    year: "2019-2020",
    category: "Theater & Dance",
    slug: "perceptions",
    image: "/images/portfolio/perceptions.jpg",
  },
  {
    id: 6,
    title: "The Diary of a Mulberry Tree",
    venue: "Residency at Hammana Artist House",
    year: "2018",
    category: "Theater & Dance",
    slug: "diary-mulberry-tree-2018",
    image: "/images/portfolio/diary-mulberry-tree-2018.jpg",
  },
  {
    id: 7,
    title: "Le journal d'un mûrier",
    venue: "L'Harmattan - Paris",
    year: "2018",
    category: "Authored Books",
    slug: "le-journal-dun-murier",
    image: "/images/portfolio/le-journal-dun-murier.jpg",
  },
  {
    id: 8,
    title: "De femme à homme",
    venue: "Marsam - Rabat & L'Harmattan - France",
    year: "2017 & 2014",
    category: "Authored Books",
    slug: "de-femme-a-homme-morocco",
    image: "/images/portfolio/de-femme-a-homme-morocco.jpg",
  },
  {
    id: 9,
    title: "The Diary of a Mulberry Tree",
    venue: "Al Madina Theater",
    year: "2017",
    category: "Theater & Dance",
    slug: "diary-mulberry-tree-2017",
    image: "/images/portfolio/diary-mulberry-tree-2017.jpg",
  },
  {
    id: 10,
    title: "Please Touch",
    venue: "Waste Studio",
    year: "2016",
    category: "Tactile Art Performances",
    slug: "please-touch-waste-studio",
    image: "/images/portfolio/please-touch-waste-studio.jpg",
  },
  {
    id: 11,
    title: "Please Touch the Trash",
    venue: "Beirut International Platform of Dance",
    year: "2016",
    category: "Tactile Art Performances",
    slug: "please-touch-trash",
    image: "/images/portfolio/please-touch-trash.jpg",
  },
  {
    id: 12,
    title: "Please Touch",
    venue: "Beirut Art Fair",
    year: "2015",
    category: "Tactile Art Performances",
    slug: "please-touch-baf-2015",
    image: "/images/portfolio/please-touch-baf-2015.jpg",
  },
  {
    id: 13,
    title: "Please Touch",
    venue: "Beirut Art Fair - Living sculptures",
    year: "2015",
    category: "Tactile Art Performances",
    slug: "please-touch-living-sculptures-2015",
    image: "/images/portfolio/please-touch-living-2015.jpg",
  },
  {
    id: 14,
    title: "Please Touch",
    venue: "Beirut Art Fair",
    year: "2015",
    category: "Tactile Art Performances",
    slug: "please-touch-baf-perf-2015",
    image: "/images/portfolio/please-touch-baf-perf-2015.jpg",
  },
  {
    id: 15,
    title: "L'HOMME TERRIBLE DE LA VILLE",
    venue: "L'Harmattan - PARIS & Dar An-Nahar - BEYROUTH",
    year: "2014 - 2015",
    category: "Authored Books",
    slug: "lhomme-terrible-de-la-ville",
    image: "/images/portfolio/lhomme-terrible.jpg",
  },
  {
    id: 16,
    title: '"Please Touch"',
    venue: "Agial Gallery - Beirut",
    year: "2014",
    category: "Sculptures",
    slug: "please-touch-agial",
    image: "/images/portfolio/please-touch-agial.jpg",
  },
  {
    id: 17,
    title: 'Best of "PLEASE TOUCH"',
    venue: "Agial Gallery - Station",
    year: "2014",
    category: "Tactile Art Performances",
    slug: "best-of-please-touch",
    image: "/images/portfolio/best-of-please-touch.jpg",
  },
  {
    id: 18,
    title: "Please Touch (Prière de toucher)",
    venue: "Living Sculptures",
    year: "2014",
    category: "Tactile Art Performances",
    slug: "please-touch-living-sculptures-2014",
    image: "/images/portfolio/please-touch-living-2014.jpg",
  },
  {
    id: 19,
    title: "Please Touch (Prière de toucher)",
    venue: "Sculptures",
    year: "2014",
    category: "Tactile Art Performances",
    slug: "please-touch-sculptures-2014",
    image: "/images/portfolio/please-touch-sculptures-2014.jpg",
  },
  {
    id: 20,
    title: "PLEASE TOUCH (Prière de toucher)",
    venue: "Expressionistic Film",
    year: "2014",
    category: "Tactile Art Performances",
    slug: "please-touch-film",
    image: "/images/portfolio/please-touch-film.jpg",
  },
  {
    id: 21,
    title: "De femme à homme",
    venue: "L'Harmattan - Paris",
    year: "2012",
    category: "Authored Books",
    slug: "de-femme-a-homme",
    image: "/images/portfolio/de-femme-a-homme.jpg",
  },
  {
    id: 22,
    title: "Public monuments",
    venue: "",
    year: "2010",
    category: "Sculptures",
    slug: "public-monuments",
    image: "/images/portfolio/public-monuments.jpg",
  },
  {
    id: 23,
    title: "Le Lieu et le corps",
    venue: "L'Harmattan - Paris",
    year: "2010",
    category: "Authored Books",
    slug: "le-lieu-et-le-corps",
    image: "/images/portfolio/le-lieu-et-le-corps.jpg",
  },
  {
    id: 24,
    title: '"And I fly off"',
    venue: "Surface Libre - Lebanon",
    year: "2008",
    category: "Sculptures",
    slug: "and-i-fly-off",
    image: "/images/portfolio/and-i-fly-off.jpg",
  },
  {
    id: 25,
    title: "Introduction aux Épîtres de la Sagesse",
    venue: "L'Harmattan - Paris",
    year: "2006",
    category: "Authored Books",
    slug: "introduction-aux-epitres",
    image: "/images/portfolio/introduction-aux-epitres.jpg",
  },
  {
    id: 26,
    title: '"The one acts, the other contemplates"',
    venue: "Espace SD - Beirut",
    year: "2004",
    category: "Sculptures",
    slug: "the-one-acts",
    image: "/images/portfolio/the-one-acts.jpg",
  },
  {
    id: 27,
    title: '"Towers of Silence"',
    venue: "Espace SD - Beirut",
    year: "2002",
    category: "Sculptures",
    slug: "towers-of-silence",
    image: "/images/portfolio/towers-of-silence.jpg",
  },
];

export const videoItems: VideoItem[] = [
  { id: 1, title: "Prière de toucher", venue: "INECAT", year: "2023", youtubeId: "pGSWEwTEnIM" },
  { id: 2, title: "Elephant in the Dark", venue: "MACAM Museum", year: "2020", youtubeId: "Y1ecoU_TWXE" },
  { id: 3, title: "Please Touch (Prière de Toucher)", venue: "Beirut Art Fair", year: "2020", youtubeId: "2CaruHpYFwM" },
  { id: 4, title: "The Diary of a Mulberry Tree", venue: "Al Madina Theater", year: "2020", youtubeId: "V8_sJ8L5hAc" },
  { id: 5, title: "Please Touch (Prière de Toucher)", venue: "Waste Studio", year: "2019", youtubeId: "RHBy8j-V8Vo" },
  { id: 6, title: "Doors. Please Touch", venue: "Sky News Arabiya", year: "2019", youtubeId: "mqZnaEXLzv8" },
  { id: 7, title: "Doors. Please Touch", venue: "Al Araby TV", year: "2019", youtubeId: "lRkIo7bdEFQ" },
  { id: 8, title: "The Diary of a Mulberry Tree", venue: "Trailer", year: "2017", youtubeId: "acn0FVo538g" },
  { id: 9, title: "Doors. Please Touch", venue: "National Museum of Beirut", year: "2017", youtubeId: "RIydAu3nEpI" },
  { id: 10, title: "Please Touch the Trash", venue: "Beirut International Platform of Dance", year: "2016", youtubeId: "2n-ljAGAEWg" },
  { id: 11, title: "Please Touch", venue: "Future TV", year: "2016", youtubeId: "XlN7PJHVZlk" },
  { id: 12, title: "Nazih Khater", venue: "L'homme terrible de la ville", year: "2016", youtubeId: "fQQvJPNaQWU" },
  { id: 13, title: "The Father of the Blinds", venue: "", year: "2015", youtubeId: "TnBdmih2ef4" },
  { id: 14, title: "Please Touch", venue: "Al Hurra TV", year: "2015", youtubeId: "IiR9x1REd0c" },
  { id: 15, title: "Please Touch", venue: "Sculpting Blindfolded", year: "2014", youtubeId: "hGTE1nDIE6Y" },
  { id: 16, title: "Please Touch", venue: "Exhibition & Performance", year: "2014", youtubeId: "fYtY4hdasos" },
  { id: 17, title: "A Women's Uprising", venue: "KorberForum", year: "2013", youtubeId: "uSL-Bk2vtrs" },
  { id: 18, title: "Le Lieu et le corps", venue: "MTV", year: "2010", youtubeId: "tE26NyE3Pts" },
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Exhibition at Centre Hospitalier des Quatre Villes",
    date: "March 2024",
    description:
      "My series of lino prints and sculptures are currently on display at the Centre Hospitalier des Quatre Villes - Saint-Cloud.",
    image: "/images/news/quatre-villes.jpg",
  },
  {
    id: 2,
    title: '"Un artiste, un commerçant" at Le Carré',
    date: "March 2024",
    description:
      "An event organized by the city of Saint-Cloud showcasing lino prints alongside other creatives at Le Carré gallery.",
    image: "/images/news/le-carre.jpg",
  },
  {
    id: 3,
    title: '"Prière de Toucher" Performance and Sculpture Exhibition at INECAT - Paris',
    date: "September 2023",
    description:
      'Participated in the "Fenêtres" Open House event at INECAT in Paris (Sept 29 - Oct 1, 2023) featuring a tactile performance and sculpture display.',
    image: "/images/news/inecat.jpg",
  },
  {
    id: 4,
    title: "Lino Prints Exhibition",
    date: "June 2023",
    description:
      'Work displayed at Saint-Sulpice in Paris during the "Journée de l\'estampe contemporaine" (Contemporary Print Day).',
    image: "/images/news/lino-prints-exhibition.jpg",
  },
];

export const biography = {
  intro:
    "Nadine Abou Zaki is a Lebanese-French sculptor, writer and director.",
  education: [
    "PhD in Philosophy from Sorbonne-Paris IV",
    "Master's degree in Dramatherapy at Université Paris Cité",
    "Certified in artistic mediation from INECAT (Institut National d'Expression, de Création, d'Art et de Transformation)",
    "Nine years teaching Philosophy at the American University of Beirut",
  ],
  research:
    "She specializes in three areas: Haptic Aesthetics, Museums Accessibility and Disability, and Philosophy of Sex and Gender.",
  artisticPractice:
    'Her distinctive approach involves creating sculptures while blindfolded, replacing sight with tactile sensation. She invites audiences to touch her work in darkness through interactive performances titled "Please Touch" ("Prière de Toucher"). This method was featured in a museum publication about tactile value in contemporary art.',
  socialImpact:
    "Founded Red Oak in 2017—a nonprofit addressing education, art, mental health, with emphasis on vulnerable populations and disabled persons. She serves on the Lebanese National Commission for UNESCO.",
  achievements: [
    '"Doors. Please Touch" (2018): First Lebanese accessibility initiative for blind, visually impaired, deaf, and hard-of-hearing visitors to major museums',
    '"Elephant in the Dark" (2019): Blindfold performance receiving Arab Fund for Arts and Culture funding',
    '"Perceptions": Lebanon\'s first Theater by the Blind and Deaf',
    "Named Knight of the French Academic Palms (2016)",
    "International Secular Award recipient (2009)",
    "Beirut World Book Capital sculptor ambassador (2009)",
    "Monumental sculptures displayed at Lebanese Ministry of Tourism and public spaces across Lebanon and UAE",
  ],
};

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
    "Her distinctive approach involves creating sculptures while blindfolded, replacing sight with tactile sensation. She invites audiences to touch her work in darkness through interactive performances.",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/nadineabouzaki",
  twitter: "https://twitter.com/NadineAbouZaki",
  linkedin: "http://lb.linkedin.com/pub/nadine-abou-zaki/21/4b8/878",
};
