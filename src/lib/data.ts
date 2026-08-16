export interface PortfolioItem {
  id: number;
  title: string;
  venue: string;
  year: string;
  category: string;
  slug: string;
  image: string;
  description?: string;
  galleryImages?: string[];
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
  slug: string;
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
    description: "The search for transcendence and the insatiable quest to transcend the limits of existence form the core of this series of linocut prints. Each print captures moments of introspection and spiritual elevation. The textures and raised surfaces of the embossings are designed to be tactile and accessible to all, inviting sensory exploration through touch.",
    galleryImages: ["/images/portfolio/gallery/lino-prints/1.jpg", "/images/portfolio/gallery/lino-prints/2.jpg", "/images/portfolio/gallery/lino-prints/3.jpg", "/images/portfolio/gallery/lino-prints/4.jpg", "/images/portfolio/gallery/lino-prints/5.jpg"],
  },
  {
    id: 2,
    title: "Prière de toucher",
    venue: "INECAT",
    year: "2023",
    category: "Tactile Art Performances",
    slug: "priere-de-toucher-2023",
    image: "/images/portfolio/priere-de-toucher.jpg",
    description: "\"Prière de Toucher\" (Please Touch) is an interactive tactile art performance and sculpture exhibition held at INECAT in Paris. The performance invites visitors to experience sculptures through touch rather than sight, exploring the relationship between tactile sensation and artistic perception. Preceded by \"Terre... Prière de Toucher\" art workshop, this event challenges conventional exhibition practices by prioritizing sensory engagement over visual observation.",
    galleryImages: ["/images/portfolio/gallery/priere-de-toucher-2023/1.jpg", "/images/portfolio/gallery/priere-de-toucher-2023/2.jpg", "/images/portfolio/gallery/priere-de-toucher-2023/3.jpg", "/images/portfolio/gallery/priere-de-toucher-2023/4.jpg", "/images/portfolio/gallery/priere-de-toucher-2023/5.jpg"],
  },
  {
    id: 3,
    title: "LA CHAMBRE D'ALBERTO",
    venue: "L'Harmattan - Paris",
    year: "2020",
    category: "Authored Books",
    slug: "la-chambre-dalberto",
    image: "/images/portfolio/la-chambre-dalberto.jpg",
    description: "Linda loue un appartement a Paris pour quelques jours. Elle est immediatement secouee a la vue du visage d'un homme qu'elle voit dans un cadre photo. A novel exploring identity, memory, and the lingering presence of the past through a woman's encounter with the traces of a man's life in a Parisian apartment.",
    galleryImages: ["/images/portfolio/gallery/la-chambre-dalberto/1.jpg"],
  },
  {
    id: 4,
    title: "Elephant in the Dark",
    venue: "A Blindfold Walk Performance",
    year: "2020",
    category: "Tactile Art Performances",
    slug: "elephant-in-the-dark",
    image: "/images/portfolio/elephant-in-the-dark.jpg",
    description: "\"Elephant in the Dark\" is a blindfold walk performance at MACAM Museum in Alita-Byblos. Inspired by Rumi's parable about blind men encountering an elephant, this immersive performance invites participants to navigate art through touch and sensory perception rather than sight, questioning our reliance on visual experience in understanding the world around us.",
    galleryImages: ["/images/portfolio/gallery/elephant-in-the-dark/1.jpg", "/images/portfolio/gallery/elephant-in-the-dark/2.jpg", "/images/portfolio/gallery/elephant-in-the-dark/3.jpg", "/images/portfolio/gallery/elephant-in-the-dark/4.jpg", "/images/portfolio/gallery/elephant-in-the-dark/5.jpg"],
  },
  {
    id: 5,
    title: '"PERCEPTIONS"',
    venue: "The Theater by the Blind & Deaf",
    year: "2019-2020",
    category: "Theater & Dance",
    slug: "perceptions",
    image: "/images/portfolio/perceptions.jpg",
    description: "Perceptions is Lebanon's first Theater by the Blind and Deaf -- a groundbreaking theatrical production bringing together blind, visually impaired, deaf, and hard-of-hearing performers. This pioneering work challenges conventional perceptions of disability and artistic expression, creating a space where different sensory experiences converge on stage.",
    galleryImages: ["/images/portfolio/gallery/perceptions/1.jpg", "/images/portfolio/gallery/perceptions/2.jpg", "/images/portfolio/gallery/perceptions/3.jpg", "/images/portfolio/gallery/perceptions/4.jpg", "/images/portfolio/gallery/perceptions/5.jpg"],
  },
  {
    id: 6,
    title: "The Diary of a Mulberry Tree",
    venue: "Residency at Hammana Artist House",
    year: "2018",
    category: "Theater & Dance",
    slug: "diary-mulberry-tree-2018",
    image: "/images/portfolio/diary-mulberry-tree-2018.jpg",
    description: "\"The Diary of a Mulberry Tree\" is a residency and performance at Hammana Artist House. Do trees have a memory? Do they have consciousness? Do they communicate with their environment? Can they hear, smell and feel? How do they respond emotionally to humans? This performance explores the relationship between humans and nature in today's digital age.",
    galleryImages: ["/images/portfolio/gallery/diary-mulberry-tree-2018/1.jpg", "/images/portfolio/gallery/diary-mulberry-tree-2018/2.jpg", "/images/portfolio/gallery/diary-mulberry-tree-2018/3.jpg", "/images/portfolio/gallery/diary-mulberry-tree-2018/4.jpg", "/images/portfolio/gallery/diary-mulberry-tree-2018/5.jpg"],
  },
  {
    id: 7,
    title: "Le journal d'un mûrier",
    venue: "L'Harmattan - Paris",
    year: "2018",
    category: "Authored Books",
    slug: "le-journal-dun-murier",
    image: "/images/portfolio/le-journal-dun-murier.jpg",
    description: "\"Le journal d'un murier\" published by L'Harmattan, Paris 2018. This book accompanies the theatrical performance of the same name, weaving together philosophy, nature, and artistic expression to explore the consciousness and memory of trees and their relationship with humans.",
    galleryImages: ["/images/portfolio/gallery/le-journal-dun-murier/1.jpg"],
  },
  {
    id: 8,
    title: "De femme à homme",
    venue: "Marsam - Rabat & L'Harmattan - France",
    year: "2017 & 2014",
    category: "Authored Books",
    slug: "de-femme-a-homme-morocco",
    image: "/images/portfolio/de-femme-a-homme-morocco.jpg",
    description: "Second edition of \"De femme a homme\" published by Marsam Editions in Rabat, Morocco (2014). This epistolary work with Pierre-Marie Hasse explores femininity, identity, and the dialogue between masculine and feminine perspectives in contemporary Arab society.",
    galleryImages: ["/images/portfolio/gallery/de-femme-a-homme-morocco/1.jpg"],
  },
  {
    id: 9,
    title: "The Diary of a Mulberry Tree",
    venue: "Al Madina Theater",
    year: "2017",
    category: "Theater & Dance",
    slug: "diary-mulberry-tree-2017",
    image: "/images/portfolio/diary-mulberry-tree-2017.jpg",
    description: "\"The Diary of a Mulberry Tree\" premiered at Al Madina Theater in 2017. This theatrical performance questions our relationship with nature: Do trees have a memory? Do they communicate? Can they feel? What is our responsibility as humans towards nature in today's digital age?",
    galleryImages: [],
  },
  {
    id: 10,
    title: "Please Touch",
    venue: "Waste Studio",
    year: "2016",
    category: "Tactile Art Performances",
    slug: "please-touch-waste-studio",
    image: "/images/portfolio/please-touch-waste-studio.jpg",
    description: "\"Please Touch\" at Waste Studio explores the intersection of art, sustainability, and tactile experience. What if you were a performer for one night? This interactive performance invited visitors to become living sculptures, blurring the boundaries between artist, artwork, and audience.",
    galleryImages: ["/images/portfolio/gallery/please-touch-waste-studio/1.jpg", "/images/portfolio/gallery/please-touch-waste-studio/2.jpg", "/images/portfolio/gallery/please-touch-waste-studio/3.jpg", "/images/portfolio/gallery/please-touch-waste-studio/4.jpg", "/images/portfolio/gallery/please-touch-waste-studio/5.jpg"],
  },
  {
    id: 11,
    title: "Please Touch the Trash",
    venue: "Beirut International Platform of Dance",
    year: "2016",
    category: "Tactile Art Performances",
    slug: "please-touch-trash",
    image: "/images/portfolio/please-touch-trash.jpg",
    description: "\"Please Touch the Trash\" is an interactive art performance presented at BIPOD (Beirut International Platform of Dance) at Al Madina Theatre. This performance questions the concept of waste and its philosophical, social, economic and environmental dimensions, inviting audiences to reconsider their relationship with discarded materials through touch and sensory engagement.",
    galleryImages: ["/images/portfolio/gallery/please-touch-trash/1.jpg", "/images/portfolio/gallery/please-touch-trash/2.jpg"],
  },
  {
    id: 12,
    title: "Please Touch",
    venue: "Beirut Art Fair",
    year: "2015",
    category: "Tactile Art Performances",
    slug: "please-touch-baf-2015",
    image: "/images/portfolio/please-touch-baf-2015.jpg",
    description: "\"Please Touch\" presented at Beirut Art Fair 2015, featured in the Digital Art segment \"Virtual Reality\". Four dancers -- Bshara Atallah, Lisa Chehade, Rabih Yammine & Corine Skaff -- performed as living sculptures, destabilizing visitors' senses and making them travel across the kingdom of illusions.",
    galleryImages: [],
  },
  {
    id: 13,
    title: "Please Touch",
    venue: "Beirut Art Fair - Living sculptures",
    year: "2015",
    category: "Tactile Art Performances",
    slug: "please-touch-living-sculptures-2015",
    image: "/images/portfolio/please-touch-living-2015.jpg",
    description: "\"Please Touch - Living Sculptures\" at Beirut Art Fair 2015. Living sculptures performed under designed fabrics, reacting to each visitor's touch and transforming into new sculptural forms. This performance challenges the boundary between performer and sculpture, audience and artwork.",
    galleryImages: [],
  },
  {
    id: 14,
    title: "Please Touch",
    venue: "Beirut Art Fair",
    year: "2015",
    category: "Tactile Art Performances",
    slug: "please-touch-baf-perf-2015",
    image: "/images/portfolio/please-touch-baf-perf-2015.jpg",
    description: "\"Please Touch\" performance at Beirut Art Fair 2015 within the \"Virtual/Reality\" segment curated by Pascal Odille. The exhibition destabilizes visitors' senses, creating an immersive experience that questions the role of touch and sight in experiencing art.",
    galleryImages: [],
  },
  {
    id: 15,
    title: "L'HOMME TERRIBLE DE LA VILLE",
    venue: "L'Harmattan - PARIS & Dar An-Nahar - BEYROUTH",
    year: "2014 - 2015",
    category: "Authored Books",
    slug: "lhomme-terrible-de-la-ville",
    image: "/images/portfolio/lhomme-terrible.jpg",
    description: "\"L'Homme Terrible de la Ville\" -- a book about Lebanese art critic Nazih Khater, published jointly by L'Harmattan (Paris) and Dar An-Nahar (Beirut). This biographical work pays tribute to one of Lebanon's most prominent art critics and his impact on the cultural landscape.",
    galleryImages: [],
  },
  {
    id: 16,
    title: '"Please Touch"',
    venue: "Agial Gallery - Beirut",
    year: "2014",
    category: "Sculptures",
    slug: "please-touch-agial",
    image: "/images/portfolio/please-touch-agial.jpg",
    description: "\"Please Touch\" is an interactive sculpture performance at Agial Gallery, Beirut. Visitors are invited to touch, experience and interact in the dark with living sculptures. This performance introduces a new concept to sculpture -- substituting the sense of sight with touch. What is sculpting without a body? Communicating without body? Desiring without body? What if you have to touch to see?",
    galleryImages: ["/images/portfolio/gallery/please-touch-agial/1.jpg", "/images/portfolio/gallery/please-touch-agial/2.jpg", "/images/portfolio/gallery/please-touch-agial/3.jpg", "/images/portfolio/gallery/please-touch-agial/4.jpg", "/images/portfolio/gallery/please-touch-agial/5.jpg"],
  },
  {
    id: 17,
    title: 'Best of "PLEASE TOUCH"',
    venue: "Agial Gallery - Station",
    year: "2014",
    category: "Tactile Art Performances",
    slug: "best-of-please-touch",
    image: "/images/portfolio/best-of-please-touch.jpg",
    description: "Best of \"Please Touch\" -- an interactive art performance at Station Beirut, curated by Agial Art Gallery. Nadine Abou Zaki sculpted blindfolded in the dark, questioning the role of image as a contemporary tool and the physical act of touching in artistic creation. Credits: Concept by Nadine Abou Zaki, Living sculptures by Lisa Chehade, Textile recreation by Bshara Atallah, Film by Muriel Aboulrouss, Lighting by Alaa Minawi.",
    galleryImages: ["/images/portfolio/gallery/best-of-please-touch/1.jpg", "/images/portfolio/gallery/best-of-please-touch/2.jpg", "/images/portfolio/gallery/best-of-please-touch/3.jpg", "/images/portfolio/gallery/best-of-please-touch/4.jpg", "/images/portfolio/gallery/best-of-please-touch/5.jpg"],
  },
  {
    id: 18,
    title: "Please Touch (Prière de toucher)",
    venue: "Living Sculptures",
    year: "2014",
    category: "Tactile Art Performances",
    slug: "please-touch-living-sculptures-2014",
    image: "/images/portfolio/please-touch-living-2014.jpg",
    description: "An interactive performance with living sculptures at Station Beirut (2014). Hidden under brown fabric designed by Bshara Atallah, the living sculpture (Lisa Chehade) moved when touched and transformed into other sculptural forms. Curated by Agial Art Gallery.",
    galleryImages: ["/images/portfolio/gallery/please-touch-living-sculptures-2014/1.jpg", "/images/portfolio/gallery/please-touch-living-sculptures-2014/2.jpg", "/images/portfolio/gallery/please-touch-living-sculptures-2014/3.jpg", "/images/portfolio/gallery/please-touch-living-sculptures-2014/4.jpg", "/images/portfolio/gallery/please-touch-living-sculptures-2014/5.jpg"],
  },
  {
    id: 19,
    title: "Please Touch (Prière de toucher)",
    venue: "Sculptures",
    year: "2014",
    category: "Tactile Art Performances",
    slug: "please-touch-sculptures-2014",
    image: "/images/portfolio/please-touch-sculptures-2014.jpg",
    description: "\"Please Touch\" sculpture exhibition at Station Beirut (2014). This collection of sculptures was created blindfolded, focusing on inner perception rather than visual form. The sculptures invite tactile exploration, redefining the relationship between viewer and artwork. Curated by Agial Art Gallery.",
    galleryImages: ["/images/portfolio/gallery/please-touch-sculptures-2014/1.jpg", "/images/portfolio/gallery/please-touch-sculptures-2014/2.jpg", "/images/portfolio/gallery/please-touch-sculptures-2014/3.jpg", "/images/portfolio/gallery/please-touch-sculptures-2014/4.jpg", "/images/portfolio/gallery/please-touch-sculptures-2014/5.jpg"],
  },
  {
    id: 20,
    title: "PLEASE TOUCH (Prière de toucher)",
    venue: "Expressionistic Film",
    year: "2014",
    category: "Tactile Art Performances",
    slug: "please-touch-film",
    image: "/images/portfolio/please-touch-film.jpg",
    description: "\"Please Touch\" is an expressionistic film portraying the artist's emotions while sculpting blindfolded in the dark. All sounds and images are extracted from her universe. Directed by Muriel Aboulrouss, produced by Denise Jabbour, edited by Liliane Hanbali.",
    galleryImages: ["/images/portfolio/gallery/please-touch-film/1.jpg"],
  },
  {
    id: 21,
    title: "De femme à homme",
    venue: "L'Harmattan - Paris",
    year: "2012",
    category: "Authored Books",
    slug: "de-femme-a-homme",
    image: "/images/portfolio/de-femme-a-homme.jpg",
    description: "\"De femme a homme\" -- Sur l'actuel feminin, Recits et correspondance avec Pierre-Marie Hasse. First edition, L'Harmattan, Paris 2012. An intimate epistolary work exploring femininity, identity, and the dialogue between woman and man through personal narratives and philosophical correspondence.",
    galleryImages: ["/images/portfolio/gallery/de-femme-a-homme/1.jpg"],
  },
  {
    id: 22,
    title: "Public monuments",
    venue: "",
    year: "2010",
    category: "Sculptures",
    slug: "public-monuments",
    image: "/images/portfolio/public-monuments.jpg",
    description: "A collection of monumental public sculptures installed across Lebanon and the UAE. These permanent stone sculptures were inaugurated as part of \"Beirut World Book Capital\" in 2010, including \"The Garden of Dialogue\" near the French Cultural Center in Beirut, created as a tribute to Lebanese writers and poets.",
    galleryImages: ["/images/portfolio/gallery/public-monuments/1.jpg", "/images/portfolio/gallery/public-monuments/2.jpg", "/images/portfolio/gallery/public-monuments/3.jpg", "/images/portfolio/gallery/public-monuments/4.jpg", "/images/portfolio/gallery/public-monuments/5.jpg"],
  },
  {
    id: 23,
    title: "Le Lieu et le corps",
    venue: "L'Harmattan - Paris",
    year: "2010",
    category: "Authored Books",
    slug: "le-lieu-et-le-corps",
    image: "/images/portfolio/le-lieu-et-le-corps.jpg",
    description: "\"Le Lieu et le corps\" -- edition bilingue francais-arabe, L'Harmattan, Paris, 2010. How have new technologies transformed our relationship to time, space, self and other? How have they changed our conception of place? And how does the loss of place announce the death of the body and the extinction of desire? How to communicate without a body? How to desire without desire?",
    galleryImages: ["/images/portfolio/gallery/le-lieu-et-le-corps/1.jpg"],
  },
  {
    id: 24,
    title: '"And I fly off"',
    venue: "Surface Libre - Lebanon",
    year: "2008",
    category: "Sculptures",
    slug: "and-i-fly-off",
    image: "/images/portfolio/and-i-fly-off.jpg",
    description: "\"Et je m'envole\" (And I fly off) -- exhibited at Surface Libre, Lebanon in 2008 with 26 sculptures in stone and wood. To give body to abstract tensions of desire. An impetus towards other incarnations of the self. To remain oneself while turning into many. To make time physical, tangible, palpable. Privilege of the art. And I fly off... The elsewhere imagined.",
    galleryImages: ["/images/portfolio/gallery/and-i-fly-off/1.jpg", "/images/portfolio/gallery/and-i-fly-off/2.jpg", "/images/portfolio/gallery/and-i-fly-off/3.jpg", "/images/portfolio/gallery/and-i-fly-off/4.jpg", "/images/portfolio/gallery/and-i-fly-off/5.jpg"],
  },
  {
    id: 25,
    title: "Introduction aux Épîtres de la Sagesse",
    venue: "L'Harmattan - Paris",
    year: "2006",
    category: "Authored Books",
    slug: "introduction-aux-epitres",
    image: "/images/portfolio/introduction-aux-epitres.jpg",
    description: "\"Introduction aux Epitres de la Sagesse\" -- L'esoterisme druze a la lumiere de la doctrine de Cankara, L'Harmattan, Paris, 2006. A comparative study between Druze Tawhid philosophy and Cankara's Advaita Vedanta, exploring the Absolute, the relationship of the world to the Absolute, and deliverance. The first work to establish a comparison between these two intimately close yet geographically distant doctrines.",
    galleryImages: ["/images/portfolio/gallery/introduction-aux-epitres/1.jpg"],
  },
  {
    id: 26,
    title: '"The one acts, the other contemplates"',
    venue: "Espace SD - Beirut",
    year: "2004",
    category: "Sculptures",
    slug: "the-one-acts",
    image: "/images/portfolio/the-one-acts.jpg",
    description: "\"L'un regarde, l'autre agit\" (The one acts, the other contemplates) -- exhibition at Espace SD, Beirut, 2004. Catalogue text by Nazih Khater: \"Nadine Abou Zaki sculpts with cold insolence and unyielding precision -- a geometer of simple, legible forms, an unconditional devotee of clean lines that determine concrete, stable, and fulfilled volumes. Stone and wood are her materials, veined and taut, almost refractory yet capable of great docility.\"",
    galleryImages: ["/images/portfolio/gallery/the-one-acts/1.jpg", "/images/portfolio/gallery/the-one-acts/2.jpg", "/images/portfolio/gallery/the-one-acts/3.jpg", "/images/portfolio/gallery/the-one-acts/4.jpg", "/images/portfolio/gallery/the-one-acts/5.jpg"],
  },
  {
    id: 27,
    title: '"Towers of Silence"',
    venue: "Espace SD - Beirut",
    year: "2002",
    category: "Sculptures",
    slug: "towers-of-silence",
    image: "/images/portfolio/towers-of-silence.jpg",
    description: "\"Tours du Silence\" (Towers of Silence) -- exhibition at Espace SD, Beirut, 2002. Catalogue text by Aref Rayess: \"Conceived with sobriety, the sculptures reflect her spirit and world -- a world rich with a variety of geometric forms, rigorously constructed and articulated. They express an architectural sculptural sense engaging the viewer in a silence equal to that of the artist at work before raw matter. A certain talent and a promising future.\"",
    galleryImages: ["/images/portfolio/gallery/towers-of-silence/1.jpg", "/images/portfolio/gallery/towers-of-silence/2.jpg", "/images/portfolio/gallery/towers-of-silence/3.jpg", "/images/portfolio/gallery/towers-of-silence/4.jpg", "/images/portfolio/gallery/towers-of-silence/5.jpg"],
  },
];

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

export const newsItems: NewsItem[] = [
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
    "Her distinctive approach involves creating sculptures while blindfolded, replacing sight with tactile sensation. She invites audiences to touch her work in darkness through interactive performances.",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/nadineabouzaki",
  twitter: "https://twitter.com/NadineAbouZaki",
  linkedin: "http://lb.linkedin.com/pub/nadine-abou-zaki/21/4b8/878",
};
