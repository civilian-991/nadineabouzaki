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
    title: "Exhibition at the Centre Hospitalier des Quatre Villes",
    date: "March 2024",
    description:
      "I am thrilled to share that my series of lino prints and sculptures are currently on display at the Centre Hospitalier des Quatre Villes - Saint-Cloud.",
    image: "/images/news/quatre-villes.jpg",
  },
  {
    id: 2,
    title: '"Un artiste, un commerçant" at Le Carré',
    date: "March 2024",
    description:
      'The opening of the event organized by la ville de Saint-Cloud "Un artiste, un commerçant" will be held at Le Carré gallery. I am delighted to showcase lino prints alongside other talented artists.',
    image: "/images/news/le-carre.jpg",
  },
  {
    id: 3,
    title: '"Prière de Toucher" Performance and Sculpture Exhibition at INECAT - Paris',
    date: "September 2023",
    description:
      'I am thrilled to announce my participation to "Fenêtres" in the upcoming Open House event at INECAT in Paris with "Prière de Toucher" ("Please Touch") performance and exhibition. It will be preceded by "Terre... Prière de Toucher" art workshop. The event will take place from Sept 29 to October 1, 2023.',
    image: "/images/news/inecat.jpg",
  },
  {
    id: 4,
    title: "Lino Prints Exhibition",
    date: "June 2023",
    description:
      'On the occasion of the "Journée de l\'estampe contemporaine", I will be exhibiting my lino prints at Saint-Sulpice in Paris on June 12-13, along with other engravers.',
    image: "/images/news/lino-prints-exhibition.jpg",
  },
  {
    id: 5,
    title: "Arts and Inclusiveness in light of the COVID-19 - UNESCO",
    date: "July 2020",
    description:
      'Nadine Abou Zaki animated a training of trainers (TOT) workshop on "How Arts help the inclusiveness of our society" during the workshop on Intercultural Dialogue and human rights through Arts. She discussed the new challenges to cultural participation for persons with disabilities in light of the Covid-19 and the key opportunities. The event was organized by UNESCO and the Lebanese National Commission for UNESCO.',
    image: "/images/news/arts-inclusiveness-covid-unesco.jpg",
  },
  {
    id: 6,
    title: 'New book release "La chambre d\'Alberto"',
    date: "July 2020",
    description:
      "A book by Nadine Abou Zaki has now been released. You can also order a print or ebook version online at l'harmattan.",
    image: "/images/news/la-chambre-dalberto.jpg",
  },
  {
    id: 7,
    title: "Elephant in the Dark, A Blindfold Walk Performance",
    date: "August 2019",
    description:
      'We have the pleasure to cordially invite you to the blindfold walk performance "Elephant in the Dark" on Saturday, September 28 at MACAM in Alita- Byblos.',
    image: "/images/news/elephant-in-the-dark.jpg",
  },
  {
    id: 8,
    title: 'My Book on "Nazih Khater" published in Braille',
    date: "October 2018",
    description:
      'In 2018, my book on the Lebanese art critic "Nazih Khater: the Republic of Enemies" was translated in Braille, along with my book "Le Lieu et le corps". This initiative intends to make my books accessible to the blind and visually impaired and to support this segment of the population to participate fully in the cultural and artistic life of Lebanon.',
    image: "/images/news/nazih-khater-braille.jpg",
  },
  {
    id: 9,
    title: "The Diary of a Mulberry Tree at Hammana Artist House",
    date: "September 2018",
    description:
      'Following the success of "The Diary of a Mulberry Tree" at Al Madina Theatre last summer, Red Oak Performing Troupe has the pleasure to invite you to "The Diary of a Mulberry Tree" on 15 September 2018 at 8:00 pm at Hammana Artist House.',
    image: "/images/news/diary-mulberry-tree-hammana.jpg",
  },
  {
    id: 10,
    title: "The Diary of a Mulberry Tree - Al Madina Theater 2017",
    date: "September 2017",
    description:
      "Do trees have a memory? Do they have consciousness? Do they communicate with their environment? Can they hear, smell and feel? How do they respond emotionally to humans? Do they feel pain or experience joy or sadness? What is our responsibility as humans towards the nature and environment in today's digital age?",
    image: "/images/news/diary-mulberry-tree-al-madina.jpg",
  },
  {
    id: 11,
    title: "Please Touch the Trash - BIPOD 2016",
    date: "March 2016",
    description:
      'Please Touch the Trash is an Interactive Art Performance that will take place on April 16-17, 2016 during Moultaqa Leymoun within BIPOD (Beirut International Platform of Dance) at Al Madina theatre- Beirut. This interactive performance questions the concept of waste and its philosophical, social, economic and environmental dimensions.',
    image: "/images/news/please-touch-trash-bipod.jpg",
  },
  {
    id: 12,
    title: "PLEASE TOUCH - Waste 2016",
    date: "February 2016",
    description:
      "What if you were a performer for one night?! Come & be the sculpture at Waste pop-up shop - Saifi village - Beirut - Feb 17 2016 at 7pm.",
    image: "/images/news/please-touch-waste.jpg",
  },
  {
    id: 13,
    title: "Book Signing - Nazih Khater: L'HOMME TERRIBLE DE LA VILLE",
    date: "October 2015",
    description:
      'Nadine Abou Zaki will be signing her new book "Nazih Khater: L\'HOMME TERRIBLE DE LA VILLE" at the Salon du livre francophone de Beyrouth (Beirut French Book Fair) on Saturday 31 October 2015 at 6 p.m.',
    image: "/images/news/book-signing-nazih-khater.jpg",
  },
  {
    id: 14,
    title: 'Opening of Beirut Art Fair: "Please Touch" in the Segment Digital Art: "Virtual Reality"',
    date: "September 2015",
    description:
      '"Please Touch" new performances will be presented at Beirut Art Fair 2015 (Biel) with four dancers: Bshara Atallah, Lisa Chehade, Rabih Yammine & Corine Skaff. This performance/installation is featured in the segment Digital Art: "Virtual Reality".',
    image: "/images/news/please-touch-beirut-art-fair.jpg",
  },
  {
    id: 15,
    title: '"PLEASE TOUCH" on 17-20 September in Beirut Art Fair',
    date: "September 2015",
    description:
      '"PLEASE DON\'T TOUCH" will be performed for the second time in Lebanon at Beirut Art Fair #6- Biel. This edition of the Fair will focus on digital art: "Virtual/Reality". Curated by Pascal Odille, it presents an exhibition that will destabilize the visitors\' senses and will make them travel across the kingdom of illusions.',
    image: "/images/news/please-touch-beirut-art-fair-2.jpg",
  },
  {
    id: 16,
    title: '"DE FEMME A HOMME" on 23 May at Marsam Gallery & Editions - Rabat',
    date: "May 2015",
    description:
      'Moroccan writer and sociologist Fatema Mernissi will present "De femme à homme" (second edition, Marsam Ed.) by Nadine Abou Zaki. The event will take place on May 23, 2015 at Marsam Editions- Rabat. Marsam is one of the oldest contemporary art galleries in Morocco and the first art editor.',
    image: "/images/news/de-femme-a-homme-marsam.jpg",
  },
  {
    id: 17,
    title: '"PLEASE DON\'T TOUCH" on 20 November at Station - Beirut',
    date: "October 2014",
    description:
      '"PLEASE DON\'T TOUCH" is an interactive performance introducing a new concept to sculpture. Nadine Abou Zaki sculpted blindfolded in the dark, focusing on the inner self, thereby substituting the sense of sight with that of touch. She questions the role of image as a contemporary tool, the physical act of touching in artistic creation, and its relation to memory.',
    image: "/images/news/please-dont-touch-station.jpg",
  },
  {
    id: 18,
    title: "19 artists from Lebanon & Syria at SV gallery in Saifi village - Beirut",
    date: "October 2014",
    description:
      "Solidere & Afak organized an exhibition with 19 artists from Lebanon and Syria at SV gallery in Saifi village- Beirut. Nadine Abou Zaki exhibited a sculpture along with the artworks of Wajih Nahle, Hussein Madi, Amine Al Basha, Halim Jerdak, Nazir Nabaa, Bahram, Moustapha Ali, Sabhan Adam, and others.",
    image: "/images/news/19-artists-sv-gallery.jpg",
  },
  {
    id: 19,
    title: 'The second edition of "De femme à homme" (Marsam ed. Morocco) at Paris Book Fair',
    date: "March 2014",
    description:
      'Nadine Abou Zaki and Pierre-Marie Hasse signed the second edition of "De femme à homme" (Marsam Editions, Morocco) at Paris Book Fair (Salon du livre de Paris). Paris Book Fair is an event of international repute that is held at the Paris Porte de Versailles, for a period of 4 days.',
    image: "/images/news/de-femme-a-homme-paris-book-fair.jpg",
  },
  {
    id: 20,
    title: "Public discussion at the KoerberForum - Hamburg",
    date: "December 2013",
    description:
      'The DAFG and the Koerber Foundation invited Nadine Abou Zaki for a public discussion on "A Women\'s Uprising? Emancipation in the Arab World" at the KoerberForum, Korber Foundation\'s headquarters in Hamburg on 10 December 2013. The discussion was moderated by television journalist Minou Amir-Sehhi.',
    image: "/images/news/koerberforum-hamburg.jpg",
  },
  {
    id: 21,
    title: "Public lecture at the DAFG - Berlin",
    date: "December 2013",
    description:
      'Nadine Abou Zaki gave a public lecture on: "The New Arab Woman Forum: The transforming role of Arab women and its future impact on society" in the DAFG-office in Berlin on 11 December 2013.',
    image: "/images/news/public-lecture-dafg-berlin.jpg",
  },
  {
    id: 22,
    title: '"Socrates and Women" at the Hellenic Cultural Center - Beirut',
    date: "June 2013",
    description:
      'Nadine Abou Zaki presented a paper on "Socrates and Women" during the "Philosophical symposium on Socrates- True Wisdom" at the Hellenic Cultural Center, Beirut, Lebanon.',
    image: "/images/news/socrates-and-women.jpg",
  },
  {
    id: 23,
    title: "Nadine Abou Zaki & Pierre-Marie Hasse at the Arab World Institute - Paris",
    date: "December 2012",
    description:
      'Nadine Abou Zaki and Pierre-Marie Hasse were invited to a debate about the book "De femme à homme" at the Arab World Institute (Institut du Monde Arabe- IMA). The discussion was moderated by François Zabbal, editor in chief of Qantara magazine - Institut du monde arabe.',
    image: "/images/news/arab-world-institute-paris.jpg",
  },
  {
    id: 24,
    title: "Book signing at the 18th Francophone Book Fair - Beirut",
    date: "October 2012",
    description:
      'Nadine Abou Zaki signed her book "De femme à homme" at the "18th Francophone Book Fair". The most prominent francophone cultural event in Lebanon took place at the Beirut International Exhibition center (BIEL). The center was filled with conferences, book signings, readings, and exhibitions.',
    image: "/images/news/book-signing-18th-francophone.jpg",
  },
  {
    id: 25,
    title: 'New book release "De femme à homme" (From Woman to Man)',
    date: "September 2012",
    description:
      "A book by Nadine Abou Zaki has now been released. You can buy your copy in Paris at L'Harmattan bookstore and in Lebanon at Virgin Megastore, Librairie Antoine and Al Bourj. You can also order a print or ebook version online at editions-harmattan.fr or at Amazon.",
    image: "/images/news/de-femme-a-homme-book.jpg",
  },
  {
    id: 26,
    title: '"Sawa sawa" march in Beirut: "No spring without women"',
    date: "February 2012",
    description:
      'NAWF Founder and Executive Chair Nadine Abou Zaki initiated a women\'s march in Beirut under the slogan "Sawa Sawa". The march was organized within the framework of NAWF, held under the theme: "Women and the Arab Spring". Representatives from Lebanon, Egypt, UAE, KSA, Afghanistan, Bahrain, Yemen, Tunisia, Libya notably activists from women rights organizations participated in the march.',
    image: "/images/news/sawa-sawa-march.jpg",
  },
  {
    id: 27,
    title: 'Debate about "Le lieu et le corps" at Le Scribe l\'Harmattan - Paris',
    date: "March 2011",
    description:
      'On March 2011, Nadine Abou Zaki presented her book "Le lieu et le corps" at Le Scribe L\'Harmattan in Paris. The presentation was followed by a debate and a book signing.',
    image: "/images/news/le-lieu-et-le-corps-paris.jpg",
  },
  {
    id: 28,
    title: "Book signing at the 17th Francophone Book Fair - Beirut",
    date: "November 2010",
    description:
      'Nadine Abou Zaki signed her book "Le lieu et le corps / Al Makan Wal Jasad" at the 17th Francophone Book Fair and in NAWF 2010, along with Malek Chebel, Rachid Al-Daif, Mona Abou Hamzeh, Rima Karaki, Mona Tayem, and Rasha Atrach.',
    image: "/images/news/book-signing-17th-francophone.jpg",
  },
  {
    id: 29,
    title: "Art Book Festival - UNESCO - Beirut",
    date: "November 2010",
    description:
      "A sculpture installation was exhibited by the artist Nadine Abou Zaki at the Lebanese Art Book Festival in UNESCO Palace, Beirut. This 2nd edition was inaugurated by the Lebanese Minister of Culture H.E. Mr. Tammam Salam.",
    image: "/images/news/art-book-festival-unesco.jpg",
  },
  {
    id: 30,
    title: 'Inauguration of the "Garden of Dialogue" - Beirut World Book Capital - Beirut',
    date: "April 2010",
    description:
      'At the occasion of "Beirut World Book Capital" and as a tribute to Lebanese writers and poets, Nadine Abou Zaki inaugurated "The Garden of Dialogue" with 5 sculptures in stone that will be permanently exhibited near the French Cultural Center in Damascus Street- Beirut. The inauguration was held in the presence of H.E. Tammam Salam, H.E. Marwan Hamadeh, Beirut Municipal President Abdel Mounim Ariss and the French ambassador Denis Pieton.',
    image: "/images/news/garden-of-dialogue.jpg",
  },
  {
    id: 31,
    title: 'Nadine Abou Zaki selected as the "Sculptor Ambassador" at the 6th Francophone Games - Beirut',
    date: "October 2009",
    description:
      'Nadine Abou Zaki was selected as the "Sculptor Ambassador" for Lebanon by the Ministry of Culture and represented Lebanon at the 6th Francophone Games (6iemes Jeux de la Francophonie). Lebanon hosted the 6th Francophone Games held from September 27 to October 6 with the participation of 42 French-speaking countries and more than 3,000 athletes.',
    image: "/images/news/sculptor-ambassador-francophone.jpg",
  },
  {
    id: 32,
    title: "The Secular Republican Committee honores Nadine Abou Zaki with its 4th International Secular Award - Paris",
    date: "January 2009",
    description:
      "The Secular Republican Committee (Comite de la laicite republicaine), one of the largest and most important secular foundations in France, has honored Nadine Abou Zaki, with its 4th International Secular Award (Prix de la Laicite) at a special ceremony held at the Paris municipality headed by the First Assistant to the mayor of Paris Anne Hidalgo with the participation of a number of French and Lebanese personalities.",
    image: "/images/news/secular-award-paris.jpg",
  },
  {
    id: 33,
    title: '3rd Sculpture exhibition "And I fly off" at Surface Libre - Beirut',
    date: "October 2008",
    description:
      'Nadine Abou Zaki held her third individual exhibition "And I fly off" at Surface Libre gallery and exhibited 26 sculptures in stone and wood.',
    image: "/images/news/and-i-fly-off-surface-libre.jpg",
  },
  {
    id: 34,
    title: "Discussion at the European Parliament Information office in France - Paris",
    date: "September 2008",
    description:
      'Nadine Abou Zaki participated in the conference "Transmission des cultures et du dialogue interculturel à travers le rôle de la femme" organized by the Association of Intercultural and Inter-Religious Dialogue (ADICR), in partnership with the European Parliament information office in France.',
    image: "/images/news/european-parliament-paris.jpg",
  },
  {
    id: 35,
    title: 'Celebrating "V to the Tenth" with Eve Ensler & Jane Fonda - New Orleans',
    date: "April 2008",
    description:
      "On April 16, V-Day, the global movement to end violence against women and girls, celebrated its tenth anniversary, V TO THE TENTH, in New Orleans. Over 30,000 people attended the events over the two days. The event featured over 125 speakers, over 40 stars. Two days of revolutionary conversations, slam poets, singers, performers, storytelling, astounding art.",
    image: "/images/news/v-to-the-tenth-new-orleans.jpg",
  },
  {
    id: 36,
    title: "Workshop with Fatema Mernissi - Cultural Center of Asturias - Spain",
    date: "January 2008",
    description:
      'The world-famous Moroccan sociologist and writer Fatema Mernissi organized a two-day workshop on "Love in Digital Islam". The workshop was hosted by the Cultural Center of Asturias and ended up with a conference in the Niemeyer Center. The diversity of generations and nationalities encouraged the in-depth meditation.',
    image: "/images/news/workshop-fatema-mernissi.jpg",
  },
  {
    id: 37,
    title: 'V-Day Festival - "Until the violence stops: NYC" - New York',
    date: "June 2006",
    description:
      'Nadine Abou Zaki participated in the panel "Women in Conflict Zones" in V-Day Festival "Until the violence stops: NYC", New York. This panel was moderated by V-Day Founder and playwright Eve Ensler.',
    image: "/images/news/v-day-festival-nyc.jpg",
  },
  {
    id: 38,
    title: 'Public lecture on "New Media for a New Arab Woman" - Cairo - Egypt',
    date: "January 2005",
    description:
      'Nadine Abou Zaki gave a public lecture on: "New Media for a New Arab Woman", during the conference "Women, Creativity, and Dissidence", led by writer and activist Nawal El Saadawi- Cairo- Egypt. The conference was part of the 7th International conference of the Arab Women\'s Solidarity Association (AWSA).',
    image: "/images/news/new-media-arab-woman-cairo.jpg",
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
