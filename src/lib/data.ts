export interface Credit {
  role?: string;
  name: string;
}

export interface PortfolioSection {
  title: string;
  description?: string;
  images?: string[];
  videoId?: string;
  videoLabel?: string;
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
  slug: string;
  image: string;
  /** Paragraphs are separated by a blank line. */
  description?: string;
  credits?: Credit[];
  editions?: string[];
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
    description:
      "“Prière de toucher” (Please Touch) is an interactive tactile performance and sculpture exhibition presented at INECAT in Paris. Visitors are invited to encounter sculpture through touch rather than sight. At its centre is the living sculpture as a body-window between the visible and the invisible, opening questions of intimacy, transformation and perception.",
    credits: [
      { role: "Concept", name: "Nadine Abou Zaki" },
      { role: "Living sculpture", name: "Jean-Pierre Mehansio" },
      { role: "Textile recreation", name: "Bshara Atallah" },
      { role: "Expressionistic film", name: "Muriel Aboulrouss" },
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
    year: "2020",
    category: "Tactile Performances",
    slug: "elephant-in-the-dark",
    image: "/images/portfolio/elephant-night-wide.jpg",
    description:
      "“Elephant in the Dark” is a series of blindfolded walking performances and tactile experiments exploring what darkness reveals about space, certainty and perception. Inspired by Rumi’s parable of the elephant in the dark, the project unfolded through several stages at the Modern and Contemporary Art Museum (MACAM) and the National Museum of Beirut.\n\nMACAM, Alita-Byblos — The project began with a daytime encounter in which a blind guide led blindfolded sighted participants through the museum, reversing familiar roles of seeing and being guided. It later developed into a nocturnal blindfold walk in MACAM’s outdoor landscape, where sighted performers/dancers interacted with blindfolded participants, who in turn became performers.\n\nNational Museum of Beirut — In collaboration with the Lebanese Academy of Fine Arts (ALBA), visual arts students were introduced to haptic aesthetics and took part in a blindfolded tactile visit of archaeological objects.\n\nAcross these stages, the work shifts perception from the eye to the whole body and treats darkness as a space of uncertainty, touch and reorientation.",
    credits: [
      { name: "Supported by the Arab Fund for Arts and Culture (AFAC)" },
      { name: "In collaboration with Red Oak" },
      {
        name: "National Museum of Beirut edition developed with the Lebanese Academy of Fine Arts (ALBA)",
      },
    ],
    galleryImages: [
      "/images/portfolio/gallery/elephant-in-the-dark/night-close.jpg",
      "/images/portfolio/gallery/elephant-in-the-dark/night-hands.jpg",
      "/images/portfolio/gallery/elephant-in-the-dark/macam-blind-guide.jpg",
      "/images/portfolio/gallery/elephant-in-the-dark/2.jpg",
      "/images/portfolio/gallery/elephant-in-the-dark/4.jpg",
    ],
    archiveImages: [
      {
        src: "/images/portfolio/elephant-in-the-dark.jpg",
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
    image: "/images/portfolio/please-touch-waste-studio.jpg",
    description:
      "At Waste Studio, “Please Touch” invited visitors not only to touch the work, but to become part of it. For one night, visitors could take the place of the living sculpture, transforming the encounter between artist, artwork and audience. Continuing the “Please Touch” series, the performance re-examined exhibition conventions and the role of touch in experiencing sculpture.",
    credits: [
      { role: "Living sculpture", name: "Bshara Atallah" },
      { role: "Expressionistic film", name: "Muriel Aboulrouss" },
      { role: "Artistic lighting", name: "Alaa Minawi" },
    ],
    galleryImages: [
      "/images/portfolio/gallery/please-touch-waste-studio/1.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/2.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/3.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/4.jpg",
      "/images/portfolio/gallery/please-touch-waste-studio/5.jpg",
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
    description:
      "“Please Touch the Trash” is an interactive performance presented at BIPOD at Al Madina Theatre. Using discarded materials as a tactile and performative medium, the work questions what we call waste and the social, economic, environmental and philosophical values attached to it. Visitors encounter “living” waste that shifts shape through touch, revealing discarded matter as a trace of both intimate and collective history.",
    credits: [
      { role: "Concept", name: "Nadine Abou Zaki" },
      {
        role: "Performers",
        name: "Bshara Atallah, Lisa Chehade, Corine Skaff, Rabih Yammine",
      },
      { role: "Sound", name: "Zeid Hamdan" },
      { role: "Lighting", name: "Alaa Minawi" },
      { role: "Textile recreation", name: "Bshara Atallah" },
    ],
    galleryImages: [
      "/images/portfolio/gallery/please-touch-trash/1.jpg",
      "/images/portfolio/gallery/please-touch-trash/2.jpg",
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
    description:
      "Presented within the “Virtual/Reality” segment curated by Pascal Odille at Beirut Art Fair, “Please Touch” transformed four performers into living sculptures. Concealed within sculptural textile forms, their bodies responded to visitors’ touch and continually reshaped the work. The performance destabilized the usual boundaries between sculpture and performer, viewer and artwork, inviting the audience to experience form through touch rather than sight.",
    credits: [
      { role: "Concept", name: "Nadine Abou Zaki" },
      {
        role: "Living sculptures",
        name: "Lisa Chehade, Bshara Atallah, Corine Skaff, Rabih Yammine",
      },
      { role: "Textile recreation", name: "Bshara Atallah" },
      { role: "Expressionistic film", name: "Muriel Aboulrouss" },
      { role: "Artistic lighting", name: "Alaa Minawi" },
    ],
    galleryImages: [
      "/images/portfolio/please-touch-living-2015.jpg",
      "/images/portfolio/please-touch-baf-perf-2015.jpg",
    ],
  },
  {
    id: 6,
    title: "Please Touch",
    venue: "Station Beirut · Curated by Agial Art Gallery",
    year: "2014",
    category: "Tactile Performances",
    slug: "please-touch-agial",
    image: "/images/portfolio/gallery/please-touch-sculptures-2014/3.jpg",
    description:
      "“Please Touch” at Station Beirut brought together blindfolded sculpting, tactile sculpture, living sculpture and an expressionistic film within one immersive project. Visitors entered a darkened space and encountered form through touch. A living sculpture concealed beneath textile responded to contact and transformed into new forms, while the sculptural works were created blindfolded. The project questioned the primacy of vision and the shifting boundaries between body, sculpture and viewer.",
    credits: [
      { role: "Concept", name: "Nadine Abou Zaki" },
      { role: "Living sculpture", name: "Lisa Chehade" },
      { role: "Textile recreation", name: "Bshara Atallah" },
      { role: "Expressionistic film", name: "Muriel Aboulrouss" },
      { role: "Artistic lighting", name: "Alaa Minawi" },
      { role: "Touch-sound design", name: "Zeid Hamdan" },
    ],
    sections: [
      {
        title: "Sculptures",
        description:
          "Please Touch was presented at Station Beirut in 2014, curated by Agial Art Gallery. The project included approximately 20 sculptures created blindfolded, alongside an interactive performance with a living sculpture and an expressionistic film. Visitors were invited to encounter the sculptures through touch and darkness.",
        images: [
          "/images/portfolio/gallery/please-touch-agial/2.jpg",
          "/images/portfolio/gallery/please-touch-agial/4.jpg",
          "/images/portfolio/gallery/please-touch-agial/5.jpg",
          "/images/portfolio/gallery/please-touch-agial/1.jpg",
          "/images/portfolio/gallery/please-touch-sculptures-2014/2.jpg",
          "/images/portfolio/gallery/please-touch-sculptures-2014/4.jpg",
        ],
      },
      {
        title: "Living sculpture & performance",
        images: [
          "/images/portfolio/gallery/please-touch-living-sculptures-2014/1.jpg",
          "/images/portfolio/gallery/please-touch-living-sculptures-2014/2.jpg",
          "/images/portfolio/gallery/please-touch-living-sculptures-2014/3.jpg",
          "/images/portfolio/gallery/please-touch-living-sculptures-2014/4.jpg",
          "/images/portfolio/gallery/please-touch-living-sculptures-2014/5.jpg",
          "/images/portfolio/gallery/best-of-please-touch/1.jpg",
          "/images/portfolio/gallery/best-of-please-touch/4.jpg",
          "/images/portfolio/gallery/best-of-please-touch/5.jpg",
          "/images/portfolio/gallery/best-of-please-touch/2.jpg",
        ],
      },
      {
        title: "Expressionistic film",
        description:
          "An expressionistic film portraying the artist’s emotions while sculpting blindfolded in the dark. All sounds and images are extracted from her universe. Directed by Muriel Aboulrouss, produced by Denise Jabbour, edited by Liliane Hanbali.",
        images: ["/images/portfolio/gallery/please-touch-film/1.jpg"],
        videoId: "acn0FVo538g",
        videoLabel: "Watch the film",
      },
    ],
  },

  // ─── Sculptures ───
  {
    id: 7,
    title: "Public Sculptures",
    venue: "Beirut",
    year: "2010",
    category: "Sculptures",
    slug: "public-monuments",
    image: "/images/portfolio/gallery/public-monuments/2.jpg",
    description:
      "This page brings together public sculptures created for sites in Beirut, including The Garden of Dialogue (2010) and The Traveller (2002).",
    sections: [
      {
        title: "The Garden of Dialogue — Beirut — 2010",
        description:
          "Created within the framework of Beirut World Book Capital, The Garden of Dialogue consists of five stone sculpture-benches installed in a public square in Beirut. The sculptures pay tribute to Gibran Khalil Gibran, Nadia Tueni, Abdallah Alayli and Hussein Mroueh. They were designed both as sculptures and as benches where people can sit and read.",
        images: [
          "/images/portfolio/gallery/public-monuments/3.jpg",
          "/images/portfolio/gallery/public-monuments/5.jpg",
          "/images/portfolio/gallery/public-monuments/4.jpg",
        ],
      },
      {
        title: "The Traveller — Ministry of Tourism, Beirut — 2002",
        description:
          "The Traveller is an architectural constructivist sculpture conceived for the Lebanese Ministry of Tourism and inaugurated on 30 November 2002. The work developed from questions about travel, place and virtual communication in the age of globalization.",
        images: [
          "/images/portfolio/public-monuments.jpg",
          "/images/portfolio/gallery/public-monuments/1.jpg",
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
    description:
      "And I Fly Off (Et je m’envole) was a solo exhibition presented at Surface Libre in Lebanon in 2008. It brought together 26 sculptures in stone and wood. The accompanying text focused on desire, transformation, multiplicity and the idea of an imagined elsewhere.",
    galleryImages: [
      "/images/portfolio/gallery/and-i-fly-off/1.jpg",
      "/images/portfolio/gallery/and-i-fly-off/2.jpg",
      "/images/portfolio/gallery/and-i-fly-off/3.jpg",
      "/images/portfolio/gallery/and-i-fly-off/4.jpg",
      "/images/portfolio/gallery/and-i-fly-off/5.jpg",
    ],
  },
  {
    id: 9,
    title: "The One Acts, the Other Contemplates",
    venue: "Espace SD, Beirut",
    year: "2004",
    category: "Sculptures",
    slug: "the-one-acts",
    image: "/images/portfolio/the-one-acts.jpg",
    description:
      "The One Acts, the Other Contemplates (L’un regarde, l’autre agit) was presented at Espace SD in Beirut in 2004. The exhibition comprised 18 sculptures: nine in stone and nine in wood. Catalogue text by Nazih Khater.",
    galleryImages: [
      "/images/portfolio/gallery/the-one-acts/1.jpg",
      "/images/portfolio/gallery/the-one-acts/2.jpg",
      "/images/portfolio/gallery/the-one-acts/3.jpg",
      "/images/portfolio/gallery/the-one-acts/4.jpg",
      "/images/portfolio/gallery/the-one-acts/5.jpg",
    ],
  },
  {
    id: 10,
    title: "Towers of Silence",
    venue: "Espace SD, Beirut",
    year: "2002",
    category: "Sculptures",
    slug: "towers-of-silence",
    image: "/images/portfolio/towers-of-silence.jpg",
    description:
      "Towers of Silence (Tours du Silence) was Nadine Abou Zaki’s first solo sculpture exhibition, presented at Espace SD in Beirut in 2002. Catalogue text by Aref Rayess.",
    galleryImages: [
      "/images/portfolio/gallery/towers-of-silence/1.jpg",
      "/images/portfolio/gallery/towers-of-silence/2.jpg",
      "/images/portfolio/gallery/towers-of-silence/3.jpg",
      "/images/portfolio/gallery/towers-of-silence/4.jpg",
      "/images/portfolio/gallery/towers-of-silence/5.jpg",
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
    description:
      "The Diary of a Mulberry Tree is a dance-theatre work written and directed by Nadine Abou Zaki, first presented at Al Madina Theatre in Beirut in 2017 and later developed at Hammana Artist House in 2018. Inspired by the Lebanese Civil War and Eastern philosophy, the work gives voice to a mulberry tree that bears witness to the intimate lives and conflicts unfolding around it. Through dance, narration, poetry and music, the performance explores memory, nature, human violence and our relationship with the living world.",
    credits: [
      { role: "Written & directed by", name: "Nadine Abou Zaki" },
      { role: "Choreographer & dancer", name: "Jean-Paul Mehansio" },
      { role: "Performers", name: "Dana Mikhail & Rouaida al Ghali" },
      { role: "Assistant director", name: "Bshara Atallah" },
      { role: "Live music", name: "Tony Elieh" },
      { role: "Scenography & light design", name: "Alaa Minawi" },
      { role: "Costumes", name: "Bshara Atallah" },
      { role: "Designer", name: "Souheil Saab" },
      {
        role: "In collaboration with",
        name: "L’Institut Français du Liban & Red Oak",
      },
    ],
    sections: [
      {
        title: "Al Madina Theatre, Beirut — 2017",
        images: [
          "/images/portfolio/gallery/diary-mulberry-tree-2018/5.jpg",
          "/images/portfolio/gallery/diary-mulberry-tree-2018/4.jpg",
        ],
        videoId: "IiR9x1REd0c",
        videoLabel: "Watch the trailer",
      },
      {
        title: "Hammana Artist House — 2018",
        images: ["/images/portfolio/gallery/diary-mulberry-tree-2018/1.jpg"],
      },
    ],
    archiveImages: [
      {
        src: "/images/portfolio/diary-mulberry-tree-2017.jpg",
        caption: "Al Madina Theatre, 2017 — original poster",
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
    description:
      "PERCEPTIONS is a theatre project developed with separate groups of blind and Deaf participants in Lebanon. Through theatre-based workshops and collaborative creation, the project explored expression, communication and participation through different sensory experiences. Written by Nadine Abou Zaki and co-directed with Rouaida al Ghali Hornig, the project was developed with Red Oak and supported by the Euro-Mediterranean Foundation of Support to Human Rights Defenders (EMHRF).",
    credits: [
      { role: "Written by", name: "Nadine Abou Zaki" },
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
    year: "2023",
    category: "Lino prints",
    slug: "lino-prints",
    image: "/images/portfolio/lino-prints.jpg",
    description:
      "The search for transcendence and the insatiable quest to transcend the limits of existence form the core of this series of linocut prints. Each print captures moments of introspection and spiritual elevation. The textures and raised surfaces of the embossings are designed to be tactile and accessible to all, inviting sensory exploration through touch.",
    galleryImages: [
      "/images/portfolio/gallery/lino-prints/1.jpg",
      "/images/portfolio/gallery/lino-prints/2.jpg",
      "/images/portfolio/gallery/lino-prints/3.jpg",
      "/images/portfolio/gallery/lino-prints/4.jpg",
      "/images/portfolio/gallery/lino-prints/5.jpg",
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
    image: "/images/portfolio/la-chambre-dalberto.jpg",
    description:
      "Linda rents an apartment in Paris for a few days and is immediately unsettled by the photograph of a man she has never met. Convinced that something inexplicably connects them, she begins to uncover the traces of his life and the secrets of a man who believes his illness is linked to his radical political engagement in 1970s Italy. The novel moves between intuition, memory and the elusive presence of another life.",
  },
  {
    id: 15,
    title: "Le journal d’un mûrier",
    venue: "Bilingual French–Arabic edition · L’Harmattan",
    year: "2018",
    category: "Books",
    slug: "le-journal-dun-murier",
    image: "/images/portfolio/le-journal-dun-murier.jpg",
    description:
      "Do trees have memory or consciousness? Can they communicate with their environment and respond emotionally to human beings? Inspired by the Lebanese Civil War and Hindu philosophy, the book gives voice to a mulberry tree that bears witness to the intimate daily lives of those around it. Through this non-human perspective, it explores memory, violence, nature and our responsibility towards the living world.",
    relatedLink: {
      label: "Related work: The Diary of a Mulberry Tree",
      href: "/portfolio/diary-mulberry-tree-2018",
    },
  },
  {
    id: 16,
    title: "L’homme terrible de la ville",
    subtitle:
      "Nazih Khater : témoin, acteur et inspirateur de la vie culturelle de Beyrouth de 1960 à 2014",
    venue: "Biographical portrait · L’Harmattan",
    year: "2015",
    category: "Books",
    slug: "lhomme-terrible-de-la-ville",
    image: "/images/portfolio/lhomme-terrible.jpg",
    description:
      "A literary portrait and biographical journey through the life of Lebanese art critic Nazih Khater, a decisive and controversial figure in Beirut’s cultural life for more than half a century. Drawing on memories, conversations and testimonies, the book revisits a man who witnessed — and helped shape — the city’s artistic and intellectual life from the 1960s to 2014.",
    editions: [
      "French edition: L’Harmattan, 2015.",
      "Arabic translation: Dar An-Nahar, Beirut · 2015 · translated by Nahla Baydoun.",
    ],
  },
  {
    id: 17,
    title: "De femme à homme",
    subtitle:
      "Sur l’actuel féminin — Récits et correspondance avec Pierre-Marie Hasse",
    venue: "Narratives & correspondence with Pierre-Marie Hasse · L’Harmattan",
    year: "2012",
    category: "Books",
    slug: "de-femme-a-homme",
    image: "/images/portfolio/de-femme-a-homme.jpg",
    description:
      "A collection of narratives, observations and correspondence with philosopher Pierre-Marie Hasse on the contemporary condition of women. Drawing on travel observations and personal experience, the book develops into a frank dialogue between an Arab woman and a French man, addressing the body, motherhood, work, gender equality, sexuality and the contradictions surrounding what it means to be a woman today.",
    editions: [
      "Original edition: L’Harmattan, Paris · 2012.",
      "Second edition: Marsam, Rabat · 2013.",
      "Arabic edition: من امرأة إلى رجل · Dar al-Farabi, Beirut · 2017.",
    ],
    galleryImages: ["/images/portfolio/de-femme-a-homme-morocco.jpg"],
  },
  {
    id: 18,
    title: "Le lieu et le corps",
    subtitle:
      "Du lieu délocalisé à la perte du corps : vers la dé-mondialisation",
    venue: "Bilingual French–Arabic philosophical essay · L’Harmattan",
    year: "2010",
    category: "Books",
    slug: "le-lieu-et-le-corps",
    image: "/images/portfolio/le-lieu-et-le-corps.jpg",
    description:
      "At a time when technology promises mobility, connectivity and a world without borders, this philosophical essay examines a paradox: can increased communication also produce a loss of place, body and genuine encounter? It explores how new technologies transform our relationship to space, time, others and ourselves, and questions what remains of travel, communication and desire when place becomes increasingly detached from physical presence.",
  },
  {
    id: 19,
    title: "Introduction aux Épîtres de la Sagesse",
    subtitle: "L’ésotérisme druze à la lumière de la doctrine de Çankara",
    venue: "Philosophical study · L’Harmattan, Ouverture Philosophique",
    year: "2006",
    category: "Books",
    slug: "introduction-aux-epitres",
    image: "/images/portfolio/introduction-aux-epitres.jpg",
    description:
      "A comparative philosophical study of Druze Tawhîd and Śaṅkara’s Advaita Vedanta. Through three central questions — the Absolute, the relationship between the world and the Absolute, and liberation — the book brings two geographically distant philosophical and spiritual traditions into dialogue and offers an interpretation of the Druze Epistles of Wisdom through this comparative perspective.",
  },
];

/** The curated homepage selection, in order. Slugs resolve against `portfolioItems`. */
export const homeSelection = [
  "priere-de-toucher-2023",
  "diary-mulberry-tree-2018",
  "and-i-fly-off",
  "elephant-in-the-dark",
  "please-touch-baf-2015",
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
  { id: 4, title: "The Diary of a Mulberry Tree", venue: "Al Madina Theater", year: "2020", youtubeId: "fYtY4hdasos" },
  { id: 3, title: "Please Touch (Prière de Toucher)", venue: "Beirut Art Fair", year: "2020", youtubeId: "XlN7PJHVZlk" },
  { id: 2, title: "Elephant in the Dark", venue: "MACAM", year: "2020", youtubeId: "V8_sJ8L5hAc" },
  { id: 11, title: "Please Touch", venue: "TV interview — Future TV", year: "2016", youtubeId: "2n-ljAGAEWg" },
  { id: 7, title: "Doors. Please Touch — MACAM", venue: "TV interview — Al Araby TV", year: "2019", youtubeId: "tE26NyE3Pts" },
  { id: 10, title: "Please Touch the Trash", venue: "Beirut International Platform of Dance", year: "2016", youtubeId: "lRkIo7bdEFQ" },
  { id: 5, title: "Please Touch (Prière de Toucher)", venue: "Waste Studio", year: "2019", youtubeId: "fQQvJPNaQWU" },
  { id: 15, title: "Please Touch", venue: "Sculpting Blindfolded", year: "2014", youtubeId: "acn0FVo538g" },
  { id: 9, title: "Doors. Please Touch — National Museum of Beirut", venue: "TV interview — LBCI", year: "2017", youtubeId: "hGTE1nDIE6Y" },
  { id: 16, title: "Please Touch", venue: "Exhibition & Performance", year: "2014", youtubeId: "RIydAu3nEpI" },
  { id: 14, title: "Please Touch", venue: "Al Hurra TV", year: "2015", youtubeId: "mqZnaEXLzv8" },
  { id: 8, title: "The Diary of a Mulberry Tree", venue: "Trailer", year: "2017", youtubeId: "IiR9x1REd0c" },
  { id: 18, title: "Le Lieu et le corps", venue: "MTV", year: "2010", youtubeId: "2CaruHpYFwM" },
  { id: 12, title: "Nazih Khater", venue: "L'homme terrible de la ville", year: "2016", youtubeId: "TnBdmih2ef4" },
  { id: 13, title: "The Father of the Blinds", venue: "", year: "2015", youtubeId: "RHBy8j-V8Vo" },
];

/**
 * News & Highlights — the curated, reverse-chronological listing.
 * Items with `href` link straight to their Portfolio or Books page; the rest
 * keep their legacy detail page, which is served from `newsArchive` below.
 */
export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Lino Prints — Centre hospitalier des Quatre Villes, Saint-Cloud",
    date: "Mar–Apr 2024",
    description:
      "A solo presentation of Nadine Abou Zaki’s linocuts was shown at the Centre hospitalier des Quatre Villes in Saint-Cloud. The exhibition explored movement, inner transformation and the desire to transcend the limits of existence through linocut.",
    image: "/images/news/quatre-villes.jpg",
    slug: "exhibition-centre-hospitalier-des-quatre-villes",
    href: "/portfolio/lino-prints",
  },
  {
    id: 2,
    title: "Prière de toucher — INECAT, Paris",
    date: "Sep 2023",
    description:
      "“Prière de toucher” (Please Touch) was presented at INECAT in Paris during “Fenêtres”, from 29 September to 1 October 2023. The programme combined the tactile workshop “Terre… Prière de toucher” with an interactive performance and sculpture exhibition centred on touch, perception and the living sculpture.",
    image: "/images/portfolio/gallery/priere-de-toucher-2023/1.jpg",
    slug: "priere-de-toucher-inecat-paris",
    href: "/portfolio/priere-de-toucher-2023",
  },
  {
    id: 3,
    title: "Elephant in the Dark",
    date: "2020",
    description:
      "Supported by the Arab Fund for Arts and Culture (AFAC), “Elephant in the Dark” developed through blindfolded performance experiences at the Modern and Contemporary Art Museum (MACAM) and the National Museum of Beirut, exploring darkness, touch, space and perception.",
    image: "/images/portfolio/elephant-night-wide.jpg",
    slug: "elephant-in-the-dark-blindfold-walk",
    href: "/portfolio/elephant-in-the-dark",
  },
  {
    id: 4,
    title: "Le journal d’un mûrier — Braille edition",
    date: "Oct 2018",
    description:
      "“Le journal d’un mûrier” was published in Braille. The edition was printed by Blessed School, with a relief cover produced by the Omero National Museum of Ancona, and distributed to schools, centres and organisations serving blind and visually impaired readers.",
    image: "/images/news/nazih-khater-braille.jpg",
    slug: "nazih-khater-braille",
    href: "/portfolio/le-journal-dun-murier",
  },
  {
    id: 5,
    title: "The Diary of a Mulberry Tree — Al Madina Theatre, Beirut",
    date: "2017",
    description:
      "“The Diary of a Mulberry Tree”, a dance-theatre work written and directed by Nadine Abou Zaki, was presented at Al Madina Theatre in Beirut. The work brings together dance, narration, poetry and music around memory, nature and the Lebanese Civil War.",
    image: "/images/portfolio/gallery/diary-mulberry-tree-2018/3.jpg",
    slug: "diary-mulberry-tree-al-madina-2017",
    href: "/portfolio/diary-mulberry-tree-2018",
  },
  {
    id: 6,
    title: "Chevalier dans l’Ordre des Palmes Académiques",
    date: "2016",
    description:
      "Nadine Abou Zaki was named Chevalier dans l’Ordre des Palmes Académiques by the French Ministry of National Education.",
    slug: "palmes-academiques",
  },
  {
    id: 7,
    title: "Please Touch — Beirut Art Fair",
    date: "Sep 2015",
    description:
      "“Please Touch” was presented at Beirut Art Fair within the “Virtual/Reality” segment curated by Pascal Odille. Four performers became living sculptures, responding to visitors’ touch and shifting the boundary between sculpture, body and audience.",
    image: "/images/portfolio/please-touch-baf-2015.jpg",
    slug: "please-touch-beirut-art-fair-digital",
    href: "/portfolio/please-touch-baf-2015",
  },
  {
    id: 8,
    title: "Please Touch — Station Beirut / Agial Gallery",
    date: "Nov 2014",
    description:
      "“Please Touch” was presented at Station Beirut, curated by Agial Art Gallery. The project brought together a sculpture exhibition, blindfolded sculpting, living sculpture, film, sound and light, inviting visitors to encounter sculpture through touch and darkness.",
    image: "/images/portfolio/gallery/please-touch-sculptures-2014/3.jpg",
    slug: "please-dont-touch-station-beirut",
    href: "/portfolio/please-touch-agial",
  },
  {
    id: 9,
    title: "De femme à homme — Institut du monde arabe, Paris",
    date: "Dec 2012",
    description:
      "Nadine Abou Zaki and philosopher Pierre-Marie Hasse presented and discussed “De femme à homme” at the Institut du monde arabe in Paris during a Café littéraire moderated by François Zabbal.",
    image: "/images/news/arab-world-institute-paris.jpg",
    slug: "arab-world-institute-paris",
    href: "/portfolio/de-femme-a-homme",
  },
  {
    id: 10,
    title: "Book signing at the 18th Francophone Book Fair — Beirut",
    date: "2011",
    description:
      "Nadine Abou Zaki took part in a book signing at the 18th Francophone Book Fair in Beirut.",
    image: "/images/news/book-signing-18th-francophone.jpg",
    slug: "book-signing-18th-francophone-beirut",
  },
  {
    id: 11,
    title: "Le lieu et le corps — Le Scribe / L’Harmattan, Paris",
    date: "2010",
    description:
      "A public debate around “Le lieu et le corps” was held at Le Scribe — L’Harmattan in Paris, addressing place, body, travel and communication in the age of new technologies.",
    image: "/images/news/le-lieu-et-le-corps-paris.jpg",
    slug: "le-lieu-et-le-corps-paris",
    href: "/portfolio/le-lieu-et-le-corps",
  },
  {
    id: 12,
    title: "The Garden of Dialogue — Beirut World Book Capital",
    date: "Apr 2010",
    description:
      "Five stone sculpture-benches forming “The Garden of Dialogue” were inaugurated in Beirut as part of Beirut World Book Capital. The works honour Gibran Khalil Gibran, Nadia Tueni, Abdallah Alayli and Hussein Mroueh, and were conceived for sitting, reading and dialogue.",
    image: "/images/portfolio/gallery/public-monuments/2.jpg",
    slug: "garden-of-dialogue-beirut",
    href: "/portfolio/public-monuments",
  },
  {
    id: 13,
    title: "Sculptor Ambassador — Jeux de la Francophonie",
    date: "Oct 2009",
    description:
      "Nadine Abou Zaki was selected by the Lebanese Ministry of Culture as Lebanon’s Sculptor Ambassador for the 6th Jeux de la Francophonie in Beirut.",
    image: "/images/news/sculptor-ambassador-francophone.jpg",
    slug: "sculptor-ambassador-francophone-games",
  },
  {
    id: 14,
    title: "International Secular Award — Paris",
    date: "Jan 2009",
    description:
      "Nadine Abou Zaki received the 4th International Secular Award (Prix International de la Laïcité) from the Comité de la laïcité républicaine at Paris City Hall.",
    image: "/images/news/secular-award-paris.jpg",
    slug: "secular-award-paris",
  },
  {
    id: 15,
    title: "And I Fly Off — solo sculpture exhibition, Beirut",
    date: "Oct 2008",
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
    title: "The Diary of a Mulberry Tree - Al Madina Theater 2017",
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
  "Nadine Abou Zaki is a Lebanese-French multidisciplinary artist, sculptor, writer and director whose work explores touch, perception, darkness, and the relationship between the body, the artwork and the viewer.",
  "At the core of her practice is a questioning of the dominance of sight in the experience of art. Working in total darkness, she sculpts blindfolded, replacing vision with touch and allowing form to emerge through a direct bodily encounter with matter. In her interactive performances and exhibitions Please Touch (Pri\u00e8re de Toucher), visitors are invited to move beyond looking and experience sculpture through touch, often in darkness. Her work on tactility was featured in Contemporary Art and the Discovery of the Value of Tactility, published by the Omero National Museum in Ancona, Italy.",
  "Her practice extends into performance, theatre and participatory work. She wrote and directed the dance-theatre performance The Diary of a Mulberry Tree, received a grant from the Arab Fund for Arts and Culture (AFAC) for Elephant in the Dark, an immersive blindfolded walking performance, and developed Perceptions, a theatre project with blind and Deaf participants.",
  "Questions of perception, disability and access to art have become an integral part of her work. In 2018, she launched Doors. Please Touch, a pioneering cultural accessibility project in Lebanon developed with museums and cultural institutions to create new ways for people with disabilities to encounter art through tactile, sensory and accessible forms of mediation.",
  "In 2017, she founded Red Oak, a non-profit organization active in Lebanon and France, developing projects at the intersection of art, education, mental health and cultural inclusion.",
  "Her artistic practice is informed by a longstanding engagement with philosophy and research. She holds a PhD in Philosophy from Sorbonne\u2013Paris IV and taught Philosophy for nine years at the American University of Beirut. Her research focuses on haptic aesthetics and the relationship between museums, accessibility and disability. She is certified in artistic mediation by INECAT in Paris and is currently pursuing a Master\u2019s degree in Dramatherapy at Universit\u00e9 Paris Cit\u00e9.",
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
  twitter: "https://twitter.com/NadineAbouZaki",
  linkedin: "http://lb.linkedin.com/pub/nadine-abou-zaki/21/4b8/878",
};
