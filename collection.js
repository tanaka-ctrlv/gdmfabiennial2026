
/* ================= DATA =================
   paper = COLOR MAIN, colors = COLOR SUB 1-3, blend = sheet notes (multiply / hard-light),
   style = sheet notes ("thin" / "small"), files = exact names inside HI RES PHOTOS/. */
const IMAGE_DIR = "HI RES PHOTOS/";
const DEFAULT_PAPER = "#f2f0ea", FALLBACK_RED = "#ff1a1a";
const ENTRIES = [{"no": 1, "artist": "Deborah Khodanovich", "title": "Relational Citation Style Handbook", "date": "March 2026", "medium": "Book with letterpressed covers", "paper": "#ffef7d", "colors": ["#49443a"], "blend": [null], "files": ["DSC03699-Edit - Deborah Khodanovich.jpg", "RCS_Book_New_MIDDLE copy - Deborah Khodanovich.png", "RCS_Book_enhanced-3 - Deborah Khodanovich.jpg", "RCS_Handbook - Deborah Khodanovich.jpeg", "exhibit design-1001 - Deborah Khodanovich.jpg", "exhibit design-973 - Deborah Khodanovich.jpg", "rcs-broadsheet002 - Deborah Khodanovich.jpg", "rcs-broadsheet003 - Deborah Khodanovich.jpg", "rcs-broadsheet004 - Deborah Khodanovich.jpg", "rcs-handbook01 - Deborah Khodanovich.jpg"], "description": "You've heard of MLA, APA, and Chicago—here comes Relational Citation Style (RCS). RCS is an alternative citation framework built on the premise that knowledge is communally generated, not individually produced. It grew from questions of attribution in my own practice—an attempt to track the conversations that shaped my work, and to resist claiming anything as my own. Set in EB Garamond, RCS uses custom glyphs alongside superscript footnotes to mark forms of knowledge existing systems can't record, cited beside published, copyrighted sources. Drawing on feminist and Indigenous citation practices, RCS treats oral transmission and collaborative thinking as rigorous, creditable sources."}, {"no": 3, "artist": "Buck Buettner", "title": "I Pray the Lord My Soul to Keep", "date": "August 2026", "medium": "Heat transfer graphics on cotton garments", "paper": "#faee4f", "colors": ["#686868", "#fe5a5a"], "blend": ["multiply", "multiply"], "files": ["sweats1 - Buck Buettner.png", "sweats2 - Buck Buettner.png"], "description": "Working over the summer at a uniform manufacturer specializing in K-12 school uniforms (many of them Catholic), I first set aside two misprinted garments and then began to reserve heat-sealable logos from our excess stock. The result of my covert crafting is this pious loungewear set, drawing into critique the branding of religious organizations when viewed as a collection."}, {"no": 4, "artist": "Maham Momin", "title": "Formal Transcriptions", "date": "2026", "medium": "Print on cotton canvas", "paper": "#2c2a2e", "colors": ["#d6dfe7"], "blend": [null], "files": ["ProceduralFormswebsite - Maham Momin.jpg", "ProceduralFormswebsite-1 - Maham Momin.jpg", "ProceduralFormswebsite-2 - Maham Momin.jpg", "ProceduralFormswebsite-6 - Maham Momin.jpg", "ProceduralFormswebsite-8 - Maham Momin.jpg"], "description": "Formal Transcriptions' is an active listening and transcription project that translates audio into textile notation using a custom system of graphic cues. Each 40 × 40 inch textile documents approximately six seconds of sound, recording spoken words along with embodied qualities of listening, including emphasis, pauses, breath, uncertainty, and more.\n\nThe notation system shifts attention away from semantic accuracy alone, making visible the rhythms, hesitations, and relational dynamics that conventional transcription often omits. Rather than treating transcription as a neutral conversion of speech into text, this project understands listening as an interpretive and contingent process shaped by the body."}, {"no": 5, "artist": "Annabel Gillespie", "title": "Report 1", "date": "10/25", "medium": "Two-channel video", "paper": "#000000", "colors": ["#9db0b6", "#2f525d", "#af897d"], "blend": [null, null, null], "files": ["InformationSociety - Annabel Gillespie.mp4"], "description": "Presented in split-screen, this short, fast paced profile categorically relays human hand gestures while fragmenting narration about the continuing cultural shift towards information and emerging technology as a primary driver of economic, social, and political life. As video and audio are introduced, reintroduced, reframed and recycled, data and knowledge become the most valuable commodities, and each hand remains faceless.", "still": "annabelle screenshot.png"}, {"no": 6, "artist": "Jacob Marcus", "title": "Laid By", "date": "January 2026", "medium": "Hand-bound booklet, white ink printed on black paper", "paper": "#dddddd", "colors": ["#79756c", "#73949d"], "blend": [null, null], "files": ["Artboard 1 - Jacob Marcus.png", "Untitled-1Artboard 13_1 - Jacob Marcus.jpg", "Untitled-1Artboard 6_1 - Jacob Marcus.jpg", "Untitled-1Artboard 7_1 - Jacob Marcus.jpg", "Untitled-1Artboard 9_1 - Jacob Marcus.jpg"], "style": "thin", "description": "Laid By is a formal exploration of Contractor Plaques in Providence, RI. Made up of two companion catalogs and cold-cast bronze business cards, the works follow my own discovery of the objects and failure to accurately define their histories."}, {"no": 8, "artist": "Josh Joseph", "title": "Radio Printer", "date": "December 2025", "medium": "Portable radio, Raspberry Pi, volume meter, thermal printer, laser-cut acrylic, receipt paper", "paper": "#ffffff", "colors": ["#eda63a", "#494a46", "#57987d"], "blend": [null, null, null], "files": ["DSC01702 - Josh Joseph.png", "RadioPrinter1 - Josh Joseph.jpg", "Scrolls - Josh Joseph.jpg", "Static - Josh Joseph.jpg", "static2 - Josh Joseph.jpg"], "description": "Inspired by QSL cards as a manifestation of invisible radio transmissions, the radio printer listens to the radio and transcribes what it hears. It's composed of the guts of a portable radio, which feeds audio into a Raspberry Pi. The Pi uses an on-device speech-to-text model to write words, which are typeset and immediately output by a thermal printer. The orange tuning knob invites the viewer to change the station, interrupting the flow of type. Installed in space, the transcribed text forms a haphazard pile on the floor.\n\nIncorporated into the typesetting system is a confidence metric — the worse the transcription becomes, the more the Pi injects random strings of unicode static, chopping up the words and upsetting the baseline."}, {"no": 9, "artist": "Maddie Ma", "title": "Primimod", "date": "2026", "medium": "Stamp, Hand Held Print, Print Poster", "paper": "#ed1d24", "colors": ["#fcdfe1", "#d98168"], "blend": [null, null], "files": ["Primimod-Installation - Maddie Ma.jpg", "Primimod-Module - Maddie Ma.jpg", "Primimod-Poster - Maddie Ma.jpg", "Primimod-Stamp - Maddie Ma.jpg", "video - Maddie Ma.mp4"], "description": "I examined historical examples of xian zhang (leisure seals) that demonstrate early forms of modular typographic logic. These findings informed the design of seven contemporary seals, each functioning as a typographic system rather than a single mark. Each font is constructed from six modular units that can be recombined to generate both Chinese characters and the full Latin alphabet. The video connects historical precedents with contemporary design decisions, framing modularity as a shared structural logic across time rather than a stylistic reference.", "still": "maddie screenshot.png"}, {"no": 10, "artist": "Roye Zhang", "title": "All the Days I Wish I Was a Giant Rodent", "date": "05/26", "medium": "Three layer letterpress print", "paper": "#d8d145", "colors": ["#fec84d", "#f0bfc7", "#5b322e"], "blend": [null, null, null], "files": ["1 - Roye Zhang.jpg", "2 - Roye Zhang.jpeg"], "style": "thin", "description": "Annual calendar for 2027"}, {"no": 11, "artist": "Ruzanna Rozman", "title": "Fall in Love or Fall Apart", "date": "January 2026", "medium": "Mixed-media poster, screenprinted on paper and hand threaded with a cloth strip", "paper": "#eae6e1", "colors": ["#ef3745", "#090708"], "blend": [null, null], "files": ["IMG_5256 - Ruzanna Rozman.jpeg", "IMG_5264 - Ruzanna Rozman.jpeg"], "description": "Fall In Love or Fall Apart is a poster screenprinted on non-specialty paper with a stencil that was made from the same non-specialty paper. It presents a broken heart with a plea for mending. It was designed simply and produced simply, emphasizing the accessibility of reframing a perspective. Produced as part of a workshop with General Store studio in Cincinnati, Ohio, the process involved very little planning and the production quantity was limited to the durability of the paper stencil and the duration of the workshop. A strip of cloth is woven through the holes in the broken heart, transforming the poster into an interactive piece for those who heed the call."}, {"no": 12, "artist": "Connie Zheng", "title": "Chinoiserie Grotesk", "date": "2026", "medium": "Book", "paper": "#2b3f95", "colors": ["#b8c7e0"], "blend": [null], "files": ["chinroserie_spreads - Connie Zheng.gif"], "description": "A publication that originated from researching patterns and porcelain objects from chinoiserie, the Western imitation of Chinese ornamental styles. This design movement popularized racialized depction of 'Oriental' features and bodies. Responding to this, I created a pattern with open source p5js code that exaggerates this existing precedent, in which the body parts of the 'oriental' woman literally fuses with ornaments to create grotesque forms. The pattern then further expands into typography and decorative patterns used throughout the book.", "still": "connie screenshot.png"}, {"no": 14, "artist": "Hannah Chosid", "title": "The Final Rose", "date": "January 2026", "medium": "Lithograph from photolitho plates, 2 layers", "paper": "#fef7e5", "colors": ["#ef4423"], "blend": ["multiply"], "files": ["The Final Rose - Hannah Chosid.jpg"], "description": "In The Final Rose, I use the imagery of a blurry and pixelated rose in motion, accompanied by screenshots from Hinge profiles I’ve encountered and a reference to the Bachelor, \"Will you accept this rose?\" written in a wedding-like calligraphic typeface to make light of the perils of dating apps and modern love. I play with the relationship between digital and analog, using a physical process to create images that primarily exist in a digital world. My process also deals with time and commitment, as the lithography process is extremely time-intensive, but these Hinge prompts were likely written off the cuff without a second thought."}, {"no": 16, "artist": "Michael Angelo Prisco", "title": "stonewebsite.com", "date": "June 2026", "medium": "Cast concrete", "paper": "#2b2b2b", "colors": ["#b2b2b2"], "blend": [null], "files": ["DSC06272 - Michael Prisco.jpg", "DSC06284 - Michael Prisco.jpg", "DSC06327 - Michael Prisco.jpg", "IMG_3303 - Michael Prisco.jpg", "IMG_3312 - Michael Prisco.jpg"], "description": "Stonewebsite.com is a website which is fixed in a singular physical space. the webpage is translated into a carved stone facsimile using cast concrete, When it rains the website gets wet, when the sun is out it is warm to the touch, when it is dark the website is difficult to read. The project explores slow technology, permanence, and the hidden physical infrastructure behind our digital world. In addition to the cast website, the website contains 3 bespoke dimensional typefaces inspired by traditional masonry techniques and design for cast applications: Prismatic, Vericular, and Pantograv Mono"}, {"no": 18, "artist": "Maya Braunstein", "title": "Butter Pecan, Held in Cadence", "date": "May 2026", "medium": "Video art, found footage and sound", "paper": "#38479d", "colors": ["#e5e9eb", "#252d2b"], "blend": [null, null], "files": ["stills - Maya Braunstein.png"], "description": "Butter Pecan, Held in Cadence, draws from archival footage of Black life, oral histories from the Great Migration, and institutional media that promoted linguistic standardization. These materials are brought into tension with visual elements built from words with histories of variation and cultural resonance, specifically “pecan.” The word becomes a site where regional pronunciation and Black cultural memory intersect, including narratives around butter pecan ice cream and Jim Crow era restrictions that shaped access and substitution within Black cultural life. The piece creates an immersive space where language is understood as something that resists containment and breaks from systems that try to define it."}, {"no": 19, "artist": "Karina Lopez", "title": "Altered Intimacies", "date": "August 2026", "medium": "Artist's book (limited edition) / fine press book", "paper": "#65767a", "colors": ["#e22d9d"], "blend": [null], "files": ["AI_Book_1 - Karina Lopez.png", "AI_Book_2 - Karina Lopez.png", "AI_Book_3 - Karina Lopez.png", "AI_Book_4 - Karina Lopez.png"], "description": "This book is an experiment of worldbuilding, exploring the relationship between technology, intimacy, and indentity through a flirtatious visual storytelling and design."}, {"no": 20, "artist": "Hamin Seo", "title": "Friction", "date": "2026", "medium": "Digital interaction, iPhone", "paper": "#e3dcd2", "colors": ["#15a981", "#678ec3", "#6b5d26"], "blend": [null, null, null], "files": ["IMG_2737 - Hamin Seo.jpg", "IMG_2738 - Hamin Seo.jpg", "Screenshot 2026-04-20 at 2.08.25 AM - Hamin Seo.png"], "style": "thin", "description": "What is the aesthetics of discomfort?\n\nWhen a machine does not work smoothly, we begin to see the machine as a machine. On this mobile screen, touch does not work as expected. Through “defamiliarization,” familiar touch gestures lose their usual function and instead become a new way of drawing through graphic forms."}, {"no": 21, "artist": "Khyati Patkar", "title": "After everyone left", "date": "Apr 2026", "medium": "Digital poster, digital print", "paper": "#ccdb5a", "colors": ["#375de2", "#412726"], "blend": ["hard-light", null], "files": ["After everyone left - Khyati Kashinath Patkar.png"], "description": "After Everyone Left' is about the conversations that continue in our minds after the space falls silent, a reflection on the moments between arrival and departure. Empty chairs, forgotten belongings, and unfinished sentences become reminders of the care and longing and the comfort of knowing someone is waiting to hear, \"I've reached home.\""}, {"no": 24, "artist": "Joe Qiao", "title": "Soundscape: A Listening Archive", "date": "December 2025", "medium": "Printed matter + laser-cut acrylic", "paper": "#fcf9ff", "colors": ["#ed8d48", "#5a6ba0"], "blend": [null, null], "files": ["1 - Joe Qiao.png", "2 - Joe Qiao.png", "3 - Joe Qiao.png", "4 - Joe Qiao.png", "5 - Joe Qiao.png"], "description": "This 192-page book catalogs five years of personal listening into an visual archive. Categorizing tracks by true tempo, arranging cover art alphabetically, and anchoring auditory memory in print. Integrated NFC tags bridge paper and playlist, resemble the gesture of coining the jukebox. Part catalog, part design study, it is a functional tool to revisit sonic history then discover a broader soundscape."}, {"no": 25, "artist": "Emma Hitchcock", "title": "Corners", "date": "December 2025", "medium": "Printed book, bound with coptic stitch", "paper": "#fdfefe", "colors": ["#bbc632", "#0f090b"], "blend": [null, null], "files": ["sem1-2025 1 Emma Hitchcock.png", "sem1-2025 2 Emma Hitchcock.png", "sem1-2025 Emma Hitchcock.png", "sem1-2025-final1_0012_img20260108_16093181 - Emma Hitchcock.jpg", "sem1-2025-final65 - Emma Hitchcock.jpeg"], "description": "In this project, I explored the endless possible compositions possible using only lines and a singular color. The typesetting responds to the text content and reacts to the lines and images it exists with. Corners are limiting and limitless.\n\n“For great dreamers of holes and corners nothing is empty.”\n\nTypeset, designed, and coptic bound for Type Studio I taught by Nancy Skolos RISD 2025."}, {"no": 26, "artist": "Xixi Qin", "title": "Ooooooooouch", "date": "10/2025", "medium": "Website; moving image, typography, and interactive web design", "paper": "#fefbea", "colors": ["#727270", "#4b4b4b", "#fcff92"], "blend": [null, null, null], "files": ["4.Ooooooooouch-1 - xixi Q.mp4", "Ooooooooouch-2 - xixi Q.mp4"], "style": "small", "description": "This project uses footage from my snowboarding trips in Zermatt to reflect on falling as an unavoidable part of both sport and life. It examines how failure is experienced physically and mentally, while questioning the idealized images of control and success often presented on social media. Built as a website, the project maps changes in the horizon during snowboarding to text behavior, allowing words to collapse at moments of impact and be repeatedly reconstructed through reset, mirroring the cycle of falling, recovery, and continuation.", "still": "xixi screenshot.png"}, {"no": 28, "artist": "Isha Young Lee", "title": "Blurry Assemblage Shifting Landscape", "date": "Mar 2026", "medium": "Cyanotype on cotton, cyanotype on paper, publication", "paper": "#2d5086", "colors": ["#eae9ef"], "blend": [null], "files": ["VF01 - Isha Lee.jpg", "VF02 - Isha Lee.jpg", "cyanofinal - Isha Lee.png"], "description": "Blurry Assemblage Shifting Landscape explores reproduction as a process of transforming existing reality rather than simply copying it. Cyanotype captures immaterial light as a physical trace and flattens objects into shadow-like silhouettes, making it suited to a landscape where perspective disappears. Objects from my desk and silhouettes of absent objects are layered into a fictional scene, while dictionary example sentences are reproduced and rearranged into an anonymous short story. Through repetition, flattening, and recontextualization, the work examines how fragments of reality can lose their origins and authorship, then shift into fiction."}, {"no": 29, "artist": "Avrie Allen", "title": "LOVE", "date": "March 2026", "medium": "Digital animated image, risograph print", "paper": "#febf3a", "colors": ["#ef4951", "#f06eaa", "#9bd8dc"], "blend": [null, null, null], "files": ["Avrie.mp4", "IMG_5679 - Avrie Allen.jpeg", "IMG_7743 - Avrie Allen.png"], "description": "LOVE was designed in Instagram story mode using animated GIFs to write out the most hashtagged word on the platform. GIFs—the ultimate 'art of technological reproduction,' distill design's most potent features—mass circulation, reproducibility, and the ability to democratically take on new meaning in their infinitely varying contexts.", "still": "avrie screenshot.png"}, {"no": 30, "artist": "Cat Chen", "title": "Geese Cam", "date": "4/2026", "medium": "Sculpture, poster", "paper": "#e0e0e0", "colors": ["#e5d5c4", "#504339"], "blend": [null, null], "files": ["IMG_4136 - Catherine Chen.png"], "description": "Geese Cam explores the hidden world of everyday waterfowl. Captured through a device that exists in two states at once — disguised as a decoy goose, embedded within the flock, yet operating as a hostile trail cam surveilling it — the images ask whether we can ever truly encounter nature on its own terms."}, {"no": 33, "artist": "Darian Newman", "title": "Welcome to Rhode Island, Bitch", "date": "May 26", "medium": "Billboard, street sign, stickers", "paper": "#ededed", "colors": ["#2d4c9c", "#4a93c0"], "blend": [null, null], "files": ["DSC03821 - Darian Newman.png", "DSC03848 - Darian Newman.png", "DSCF7291 - Darian Newman.JPG", "Frame 1 - Darian Newman.png"], "description": "In response to The Real Housewives of Rhode Island I published a series of stickers and a billboard in downtown Providence that feature online commentary about the show. The artifacts shift the dynamic between viewer and spectacle by placing the online audience in the role of the spectacle.\n\nThe billboard is strategically placed in downtown Providence, welcoming viewers to a destination they are already in, representing the echo chamber of conversation.\n\nThe billboard launched online investigations, conspiracy theories, and culminated in features on Providence local news, NBC Boston and an article in The Boston Globe."}, {"no": 35, "artist": "Kamber Lee", "title": "CounterCapture", "date": "Spring 2026", "medium": "Installation: pop-up tent space, interactive map, newsprint, photo book, and video", "paper": "#ececec", "colors": ["#8e8387"], "blend": [null], "files": ["DSCF0076 - Kamber Lee.jpg", "DSCF0142 - Kamber Lee.jpg", "DSCF0198 - Kamber Lee.jpg", "DSCF0253 5.45.45 PM - Kamber Lee.jpg", "DSCF0398 - Kamber Lee.jpg", "IMG_8109 - Kamber Lee.jpg", "KL_GSII_Final48 - Kamber Lee.jpg", "KL_GSII_Final65 - Kamber Lee.jpg", "KL_GSII_Final70 - Kamber Lee.jpg"], "style": "thin", "description": "Traveling installation inviting viewers to join a space for discussion and shelter against the ongoing mass surveillance happening in the city. This project was created in response to the new Real-Time Crime Center (RTCC) in Providence that opened in August 2025."}, {"no": 36, "artist": "Hamin Seo + Jeewoo Kang", "title": "Private Parking", "date": "2026", "medium": "Fabric installation / inkjet print on silk organza", "paper": "#55c2db", "colors": ["#117aa8", "#95b3d6"], "blend": ["multiply", null], "files": ["IMG_0109 - Jee Woo Kang.jpg", "IMG_0162 - Jee Woo Kang.jpg", "IMG_0172 - Jee Woo Kang.jpg", "IMG_9899 - Jee Woo Kang.png"], "description": "Private Parking is a collaborative fabric installation that explores the coexistence of public and private space within a public parking lot. While a parking lot is a shared communal environment, each car contains a personal and intimate space of its own. Through an anonymous survey, we collected private stories and translated their contexts into fabric installations, creating small one-person spaces within a shared public environment. The project also emphasizes a formal clash between the rigid white grid of the parking lot and the soft, flexible nature of fabric, reflecting the tension between public and private experiences."}, {"no": 39, "artist": "Faith Kaufman", "title": "Clock", "date": "Sept 2021", "medium": "Illustration, currently digital but will riso print it", "paper": "#474747", "colors": ["#baa134", "#69b2c4", "#bf351f"], "blend": [null, null, null], "files": ["Clock - Faith Kaufman.png"], "description": "The hands of a clock spin backward and forward, catching onto the numbers as they stretch and twist time."}, {"no": 40, "artist": "Joy Zou", "title": "LOST", "date": "2026", "medium": "Artist book and archival publication", "paper": "#a7a7a7", "colors": ["#5b5b5b"], "blend": [null], "files": ["IMG_0990 - Xiyue Zou.jpg", "IMG_9908 - Xiyue Zou.jpg", "IMG_9930 - Xiyue Zou.jpg"], "description": "LOST is a visual archive of Providence’s disappearing architectural history. The project collects nine demolished buildings and transforms them into new historical markers through the visual language of manhole covers."}, {"no": 41, "artist": "Clara Cayosa", "title": "Airconland", "date": "2026", "medium": "Vinyl", "paper": "#ededed", "colors": ["#36353b"], "blend": [null], "files": ["Clara Cayosa Aircon - Vinyl 260822 - Clara Cayosa.png"], "style": "thin", "description": "The typography draws from the vernacular lettering on the exteriors of Manila's taxis, centering on the hand-painted or decaled word AIRCON. In the streets of Manila, this word marks a vehicle as a premium, deluxe ride: a pocket of cool air available to those who can pay the higher fare. The artwork traces the divide between the passengers inside, who are sealed off from the climate, and pedestrians on the pavement who endure the sun, the humidity, and the exhaust of these deluxe taxis. The assemblage of these heavy, commercial letterforms is intentionally packed, confronting the physical reality of a city’s infrastructure that alienates and marginalizes those left exposed to its exhausting environment.", "imgBg": "#dcdcdc"}, {"no": 43, "artist": "Clara Waldheim", "title": "Devoid", "date": "2023", "medium": "Woodblock print on paper", "paper": "#edece6", "colors": ["#221db9"], "blend": [null], "files": ["Woodblock print - Clara Waldheim.jpg"], "style": "thin", "description": "Originally a woodblock print, this piece features an overgrown abandoned forest. Mixed into the weeds is a rusty sword and an overgrown skull leaning on the stump of a tree. The objective was to capture an eerie fantastical moment but fill it with dense line work and contrasting a strong contrasting yellow."}, {"no": 44, "artist": "Tanaka Mapondera", "title": "Would You Still Love Me If I Was a Polygon?", "date": "2026", "medium": "Book; corrugated cardboard; 3D-scan, 3D-modeling, laser-cutting", "paper": "#d2c4bd", "colors": ["#8b7d69"], "blend": [null], "files": ["IMG_0855 (2) - Tanaka Mapondera.jpg", "IMG_0862 (1) - Tanaka Mapondera.jpg", "IMG_0916 (1) - Tanaka Mapondera.jpg", "IMG_0919 (1) - Tanaka Mapondera.jpg", "IMG_0932 (1) - Tanaka Mapondera.JPG", "IMG_0939 (1) - Tanaka Mapondera.JPG", "IMG_0958 (1) - Tanaka Mapondera.JPG", "Screenshot 2026-03-31 at 6.04.05 AM - Tanaka Mapondera.png", "Screenshot 2026-03-31 at 6.08.34 AM - Tanaka Mapondera.png", "Tanaka_Biennial Subm1a - Tanaka Mapondera.png", "Tanaka_Biennial Subm1b - Tanaka Mapondera.png", "Tanaka_Biennial Subm1c - Tanaka Mapondera.png", "isThisStillTypography-05 - Tanaka Mapondera.jpg", "isThisStillTypography-06 - Tanaka Mapondera.jpg"], "description": "This book is a representation of a 3D-scan of Tanaka's face, re-meshed into a geometric object in AutoDesk Fusion 360, and expanded into two-dimensional polygons in Unfolder. The resulting polygons were then rescaled and laid out on separate art-boards in Adobe Illustrator to prepare for laser-cutting on sheets of corrugated cardboard. The sheets were then bound into a book using hemp twine."}];

const S = { expand: 66, rag: 2.4, row: 1, misalign: 1, drift: 0, seed: 1029 };
const SEP = 2;              // black line between stacks
const BLOCK_H = 12;         // saved-image band height (px)
const SAVED_ALPHA = 0.3;
const ABOUT_FILL = 0.36;    // stack height while About is open

/* ---------- utils ---------- */
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function hash(a, b) { let h = 2166136261 ^ a; h = Math.imul(h ^ b, 16777619); h ^= h >>> 13; h = Math.imul(h, 2654435761); return (h ^ (h >>> 16)) >>> 0; }
function strHash(s) { let h = 0; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; }
function lum(hex) { const n = parseInt(hex.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255; }
const ink = hex => lum(hex) > 0.55 ? "#000" : "#fff";
const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- band generation ---------- */
function makeSegments(r, colors, blends, style) {
  const segs = [], thin = style === "thin", small = style === "small";
  let clusters = thin ? 2 + Math.floor(r() * 3) : small ? 3 + Math.floor(r() * 3) : 1 + Math.floor(r() * 3);
  clusters += Math.round(clusters * 0.25 + r() * 0.75);   // ~25% busier
  for (let c = 0; c < Math.max(clusters, colors.length); c++) {
    const ci = c % colors.length, color = colors[ci], blend = blends[ci] || null;
    const slope = (r() - 0.5) * 0.8, wobble = r() * Math.PI * 2;
    const push = (x0, x1) => segs.push({ x0, x1, color, blend, slope, wobble });
    if (thin) {
      const k = 3 + Math.floor(r() * 6), w = 0.004 + r() * 0.008, step = w * (1.8 + r() * 1.6), x = 0.02 + r() * Math.max(0, 0.96 - k * step);
      for (let j = 0; j < k; j++) push(x + j * step, x + j * step + w);
    } else if (small) {
      const w = 0.008 + r() * 0.018, x = 0.02 + r() * (0.96 - w); push(x, x + w);
    } else if (r() < 0.55) {
      const k = 2 + Math.floor(r() * 3), w = 0.022 + r() * 0.02, step = w * (1.25 + r() * 0.5), x = 0.02 + r() * (0.96 - k * step);
      for (let j = 0; j < k; j++) push(x + j * step, x + j * step + w);
    } else {
      const w = 0.05 + r() * 0.14, x = 0.02 + r() * (0.96 - w); push(x, x + w);
    }
  }
  return segs;
}
function genProject(e, i) {
  const seed = hash(S.seed, strHash(e.artist + "|" + e.title));
  const r = mulberry32(seed);
  const has = e.colors && e.colors.length;
  const colors = has ? e.colors : [FALLBACK_RED];
  return { ...e, idx: i, paper: e.paper || DEFAULT_PAPER, colors, seed,
    segments: makeSegments(r, colors, has ? (e.blend || []) : [], e.style),
    offset: (r() - 0.5) * 2, prog: 0, target: 0, y: 0, h: 0 };
}

/* ---------- state ---------- */
const cv = document.getElementById("cv"), ctx = cv.getContext("2d");
let W = 0, H = 0, DPR = 1;
let pieces = ENTRIES.map(genProject);
const V = { fill: 1, fillT: 1, col: 0, jut: 0, savedVis: 0, poster: 0 };
let mode = "stack";          // stack | busy | gallery
let aboutOpen = false;
let hover = -1, sel = -1, imgIdx = 0;
let dirty = true;
let localFiles = new Map();
let saved = [];              // poster queue: one entry per "Add to poster"
let uidSeq = 1;

function colW() { return clamp(Math.round(W * 0.065), 48, 96); }
const mctx = document.createElement("canvas").getContext("2d");
function tabGeom(p) {
  const fs = clamp(p.h * 0.42, 11, 15), bh = Math.round(fs * 1.2), pad = fs * 0.35;
  mctx.font = `${fs}px "Quadrant Text", "Times New Roman", serif`;
  const w = Math.ceil(mctx.measureText(`No.${p.idx + 1}`).width + pad * 2);
  return { bh, fs, w, jut: 34 };
}
function jutW() { return sel >= 0 ? tabGeom(pieces[sel]).jut : 40; }
const mobileMQ = matchMedia("(max-width: 700px)");
function barH() {
  if (mobileMQ.matches) { const b = document.getElementById("mMenuBtn"), nav = document.getElementById("mnav"); return (b.offsetHeight ? b.offsetHeight + (parseFloat(getComputedStyle(nav).paddingBottom) || 0) : 0) || 38; }
  return document.getElementById("bar").offsetHeight || 38;
}
function stackH() { return H - barH(); }

/* ---------- tween helper ---------- */
const tweens = new Map();
function tween(key, to, dur) {
  return new Promise(res => {
    if (reduce || dur <= 0) { V[key] = to; dirty = true; res(); return; }
    tweens.set(key, { from: V[key], to, t0: performance.now(), dur, res });
  });
}
const wait = ms => new Promise(r => setTimeout(r, reduce ? 0 : ms));

/* ---------- layout ---------- */
function layout() {
  const N = pieces.length;
  const T = stackH() * V.fill;
  const sep = Math.min(SEP, (T / N) * 0.12);
  const avail = T - sep * (N - 1);
  const base = avail / N;
  const E = Math.max(base, Math.min(mobileMQ.matches ? Math.max(S.expand, 80) : S.expand, avail * 0.6));
  let sumExp = 0, sumRest = 0;
  const raw = pieces.map(p => p.prog > 0 ? base + (E - base) * ease(p.prog) : base);
  pieces.forEach((p, i) => p.prog > 0 ? (sumExp += raw[i]) : (sumRest += raw[i]));
  const k = sumRest > 0 ? Math.max(0, avail - sumExp) / sumRest : 1;
  let y = 0;
  pieces.forEach((p, i) => { p.h = p.prog > 0 ? raw[i] : raw[i] * k; p.y = y; y += p.h + sep; });
  return T;
}

/* ---------- drawing: one solid block per stack, bands with staggered edges ---------- */
function drawStack(p, x0, y0, w, h, win = 0) {
  ctx.save(); ctx.beginPath(); ctx.rect(0, y0, W, h); ctx.clip();
  ctx.fillStyle = p.paper; ctx.fillRect(x0 - 6, y0, w + 6, h);
  const R = S.row, n = Math.ceil(h / R);
  for (let i = 0; i < n; i++) {
    const r = mulberry32(hash(p.seed, i * 7 + 3));
    const y = y0 + i * R;
    for (const s of p.segments) {
      const drift = (i * s.slope + Math.sin(i * 0.4 + s.wobble) * 1.5) * S.drift;
      const f0 = (s.x0 - win) / (1 - win), f1 = (s.x1 - win) / (1 - win);
      const a = x0 + f0 * w + drift + (r() - 0.5) * S.rag, b = x0 + f1 * w + drift + (r() - 0.5) * S.rag;
      const l = Math.max(x0 - 6, a), rr = Math.min(x0 + w, b);
      if (rr <= l) continue;
      ctx.fillStyle = s.color;
      if (s.blend) ctx.globalCompositeOperation = s.blend;
      ctx.fillRect(l, y, Math.max(1, rr - l), R);
      if (s.blend) ctx.globalCompositeOperation = "source-over";
    }
  }
  ctx.restore();
}

const aboutEl = document.getElementById("about");
function render(now) {
  for (const [k, tw] of tweens) {
    const t = clamp((now - tw.t0) / tw.dur, 0, 1);
    V[k] = lerp(tw.from, tw.to, ease(t)); dirty = true;
    if (t >= 1) { tweens.delete(k); tw.res(); }
  }
  if (Math.abs(V.fill - V.fillT) > 0.0005 && !tweens.has("fill")) { V.fill = lerp(V.fill, V.fillT, reduce ? 1 : 0.16); dirty = true; }
  const step = reduce ? 1 : 16 / 260;
  for (const p of pieces) {
    if (p.prog !== p.target) { const d = p.target - p.prog; p.prog = Math.abs(d) <= step ? p.target : p.prog + Math.sign(d) * step; dirty = true; }
  }
  if (saved.some(b => now - b.t0 < 450)) dirty = true;

  if (dirty) {
    dirty = false;
    const T = layout();
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.fillStyle = "#000"; ctx.fillRect(0, 0, W, H);
    const sw = lerp(W, colW(), ease(V.col));
    // saved images: one tone each (the stack's first secondary color) at 20%, stacking up to the very top
    const sv = Math.max(V.savedVis, V.poster);
    if (sv > 0.001 && saved.length) {
      const x0 = lerp(colW(), 0, ease(V.poster)), region = stackH();
      const bh = Math.min(BLOCK_H, region / saved.length);
      ctx.save(); ctx.globalAlpha = SAVED_ALPHA * sv;
      saved.forEach((b, k) => {
        const g = reduce ? 1 : ease(clamp((now - b.t0) / 420, 0, 1));
        const y = region - (k + 1) * bh, w = (W - x0) * g;
        if (w <= 0) return;
        ctx.fillStyle = b.color;
        ctx.fillRect(W - w, y, w, Math.max(1, bh - (bh > 3 ? 1 : 0)));
      });
      ctx.restore();
    }
    ctx.globalAlpha = 1 - V.poster;
    if (V.poster < 0.999) for (const p of pieces) {
      const w = p.idx === sel ? sw + jutW() * ease(V.jut) : sw;
      const dx = p.offset * S.misalign * (1 - ease(V.col));
      drawStack(p, dx, p.y, w + dx, p.h, 0.8 * ease(V.col));
    }
    ctx.globalAlpha = 1;
    aboutEl.style.setProperty("--aboutTop", Math.round(T) + "px");
    placeOverlays();
  }
  requestAnimationFrame(render);
}

/* ---------- overlays: hover label + work tab ---------- */
const labelEl = document.getElementById("label"), lt = labelEl.querySelector(".t"), la = labelEl.querySelector(".a");
const tabEl = document.getElementById("tab");
function placeOverlays() {
  const hp = hover >= 0 ? pieces[hover] : null;
  if (hp && mode === "stack" && hp.prog > 0.05) {
    labelEl.style.top = hp.y + "px"; labelEl.style.height = hp.h + "px";
    labelEl.style.opacity = clamp((hp.prog - 0.35) / 0.4, 0, 1);
    lt.style.fontSize = (mobileMQ.matches ? Math.max(16, Math.min(hp.h * 0.36, 26)) : Math.max(18, Math.min(hp.h * 0.62, 100))) + "px";
    const c1 = hp.colors[0], c2 = hp.colors[1] || hp.colors[0];
    lt.style.background = c1; lt.style.color = ink(c1);
    la.style.background = c2; la.style.color = ink(c2);
    la.style.fontSize = Math.max(13, Math.min(hp.h * 0.26, 24)) + "px";
    if (lt.textContent !== hp.title) { lt.textContent = hp.title; la.textContent = hp.artist; }
  } else labelEl.style.opacity = 0;
  if (sel >= 0) {
    const p = pieces[sel], g = tabGeom(p);
    tabEl.style.top = (p.y + (p.h - g.bh) / 2) + "px"; tabEl.style.height = g.bh + "px";
    tabEl.style.width = g.w + "px"; tabEl.style.fontSize = g.fs + "px";
    const c = p.colors[0]; tabEl.style.background = c; tabEl.style.color = ink(c);
  }
}

/* ---------- scroll: compress / expand; scroll up past full opens About ---------- */
function minFill() { return 1 / 3; }
function nudgeFill(dy) { if (mode !== "stack" || aboutOpen) return; V.fillT = clamp(V.fillT - dy * 0.0012, minFill(), 1); dirty = true; }
let upAcc = 0, upT = 0, downAcc = 0;
const aboutScroll = document.getElementById("aboutScroll");
const SNAP_FILL = 0.72;                 // scroll this far down the compression and About takes over
function handleScroll(dy, target) {
  if (mode !== "stack") return false;
  if (Math.abs(dy) < 0.5) return true;                   // ignore sideways / zero-delta trackpad events
  const now = performance.now();
  if (now - upT > 400) { upAcc = 0; downAcc = 0; }       // a new gesture starts counting again
  upT = now;
  if (!aboutOpen) {
    nudgeFill(dy);
    if (dy > 0 && V.fillT <= SNAP_FILL) openAbout();
    return true;
  }
  const inAbout = target && target.closest && target.closest("#about");
  const sc = aboutScroll, atBottom = sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 2, atTop = sc.scrollTop <= 0;
  if (inAbout && ((dy > 0 && !atBottom) || (dy < 0 && !atTop))) return false;   // let the text scroll
  if (dy < 0) { upAcc += -dy; if (upAcc > 50) { upAcc = 0; closeAbout(); } }
  return true;
}
addEventListener("wheel", e => {
  if (e.target.closest("#controls, #gallery")) return;
  const dy = e.deltaY * (e.deltaMode === 1 ? 16 : 1);
  if (handleScroll(dy, e.target) !== false) e.preventDefault();
}, { passive: false });
let touchY = null, touchMoved = false;
addEventListener("touchstart", e => { touchY = e.touches[0].clientY; touchMoved = false; }, { passive: true });
addEventListener("touchmove", e => { if (touchY == null || e.target.closest("#gallery, #controls")) return; const y = e.touches[0].clientY; if (Math.abs(y - touchY) > 8) touchMoved = true; handleScroll((touchY - y) * 2, e.target); touchY = y; }, { passive: true });
addEventListener("touchend", () => { touchY = null; });

function pieceAt(x, y) {
  if (y >= stackH() || mode === "poster") return -1;
  for (const p of pieces) if (y >= p.y && y < p.y + p.h + SEP) {
    if (mode === "gallery") { const sw = colW(), w = p.idx === sel ? sw + jutW() : sw; if (x > w) return -1; }
    return p.idx;
  }
  return -1;
}
function paintBar(p) {
  const pal = p ? [p.paper, ...p.colors] : [];
  [...document.querySelectorAll("#bar .cell")].forEach((b, k) => {
    if (p) { const c = pal[k % pal.length]; b.style.setProperty("--bb", c); b.style.setProperty("--bi", ink(c)); }
    else { b.style.removeProperty("--bb"); b.style.removeProperty("--bi"); }
  });
}
function setHover(i) {
  if (i === hover) return;
  paintBar(i >= 0 && mode === "stack" ? pieces[i] : null);
  if (hover >= 0) pieces[hover].target = 0;
  hover = i;
  if (i >= 0 && mode === "stack") pieces[i].target = 1;
  cv.style.cursor = i >= 0 ? "pointer" : "default";
}
let lastPointer = "mouse";
cv.addEventListener("pointermove", e => {
  lastPointer = e.pointerType;
  if (mode === "stack" && e.pointerType === "mouse") setHover(pieceAt(e.clientX, e.clientY));
  else if (mode === "gallery") { const i = pieceAt(e.clientX, e.clientY); cv.style.cursor = i >= 0 && i !== sel ? "pointer" : "default"; }
});
cv.addEventListener("pointerleave", e => { if (mode === "stack" && e.pointerType === "mouse") setHover(-1); });   // touch fires leave after every tap
cv.addEventListener("pointerdown", e => { lastPointer = e.pointerType; });
cv.addEventListener("click", e => {
  if (touchMoved) return;
  const i = pieceAt(e.clientX, e.clientY);
  if (i < 0) { if (mode === "stack" && lastPointer !== "mouse") setHover(-1); return; }
  if (mode === "stack") {
    if (lastPointer !== "mouse" && hover !== i) { setHover(i); return; }
    openGallery(i);
  } else if (mode === "gallery" && i !== sel) switchArtist(i);   // only INDEX goes back
});

/* ---------- about ---------- */
function setActive() {
  const idx = mode === "stack" && !aboutOpen, ab = aboutOpen, po = mode === "poster";
  document.getElementById("bIndex").classList.toggle("active", idx);
  document.getElementById("bAbout").classList.toggle("active", ab);
  document.getElementById("bPortal").classList.toggle("active", po);
  document.getElementById("mIndex").classList.toggle("active", idx);
  document.getElementById("mAbout").classList.toggle("active", ab);
  document.getElementById("mPortal").classList.toggle("active", po);
}
async function openAbout() {
  if (aboutOpen || mode !== "stack") return;
  aboutOpen = true; setHover(-1); setActive();
  V.fillT = ABOUT_FILL; dirty = true;
  await wait(160);
  if (aboutOpen) aboutEl.classList.add("on");
}
function closeAbout() {
  if (/\/about(?:\/|\/index\.html)?$/.test(location.pathname)) { location.assign("index/"); return; }
  if (!aboutOpen) return;
  aboutOpen = false; aboutEl.classList.remove("on"); setActive();
  aboutScroll.scrollTop = 0;
  V.fillT = 1; dirty = true;
}

/* ---------- gallery ---------- */
const gal = document.getElementById("gallery"), frame = document.getElementById("frame"), stage = document.getElementById("stage"), curEl = document.getElementById("cur");
const IMG = /\.(png|jpe?g|gif|webp|avif)$/i, VID = /\.(mp4|mov|webm|m4v)$/i;
const X_SVG = '<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="0" x2="100" y2="100" stroke="#555" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="100" y1="0" x2="0" y2="100" stroke="#555" stroke-width="1" vector-effect="non-scaling-stroke"/></svg>';
function srcFor(name) { const n = name.normalize("NFC"); return localFiles.get(n) || IMAGE_DIR + name.split("/").map(encodeURIComponent).join("/"); }
function placeholder(name) { const d = document.createElement("div"); d.className = "ph"; d.innerHTML = X_SVG + "<span></span>"; d.querySelector("span").textContent = name; return d; }

function fillGallery() {
  gal.scrollTop = 0;
  const p = pieces[sel];
  document.getElementById("gTitle").textContent = p.title;
  document.getElementById("gArtist").textContent = p.artist;
  document.getElementById("gMedium").textContent = p.medium;
  document.getElementById("gDate").textContent = p.date;
  document.getElementById("gDesc").textContent = p.description || "";
  const gd = document.getElementById("gDesc"); gd.scrollTop = 0;
  requestAnimationFrame(() => { gd.classList.toggle("more", gd.scrollHeight > gd.clientHeight + 2); gd.classList.remove("end"); });
  tabEl.textContent = `No.${p.idx + 1}`;
  stage.classList.toggle("navable", p.files.length > 1);
  showImage(0);
}
function showImage(k) {
  const p = pieces[sel]; const n = p.files.length;
  imgIdx = (k + n) % n; const name = p.files[imgIdx];
  frame.querySelectorAll("video").forEach(v => v.pause());
  frame.innerHTML = "";
  if (IMG.test(name)) {
    const im = new Image(); im.alt = `${p.title}, ${p.artist}, image ${imgIdx + 1}`;
    if (p.imgBg) im.style.background = p.imgBg;
    im.onerror = () => { frame.innerHTML = ""; frame.append(placeholder(name)); };
    im.src = srcFor(name); frame.append(im);
  } else if (VID.test(name)) {
    const v = document.createElement("video"); v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
    v.onerror = () => { frame.innerHTML = ""; frame.append(placeholder(name)); };
    v.src = srcFor(name); frame.append(v);
  } else frame.append(placeholder(name));
  document.getElementById("gCount").textContent = `${imgIdx + 1}/${n}`;
}
document.getElementById("gDesc").addEventListener("scroll", e => { const g = e.target; g.classList.toggle("end", g.scrollTop + g.clientHeight >= g.scrollHeight - 2); });
/* the photo's bounding box: left half = PREVIOUS cursor, right half = NEXT cursor */
function stageSide(e) { const r = stage.getBoundingClientRect(); return e.clientX < r.left + r.width / 2 ? -1 : 1; }
stage.addEventListener("pointermove", e => {
  if (!stage.classList.contains("navable") || e.pointerType !== "mouse") { curEl.classList.remove("on"); return; }
  curEl.textContent = stageSide(e) < 0 ? "Previous" : "Next";
  curEl.style.left = e.clientX + "px"; curEl.style.top = e.clientY + "px";
  curEl.classList.add("on");
});
stage.addEventListener("pointerleave", () => curEl.classList.remove("on"));
stage.addEventListener("click", e => {
  if (!stage.classList.contains("navable") || e.target.closest(".sr")) return;
  showImage(imgIdx + stageSide(e));
  curEl.textContent = stageSide(e) < 0 ? "Previous" : "Next";
});
document.getElementById("prevI").onclick = () => showImage(imgIdx - 1);
document.getElementById("nextI").onclick = () => showImage(imgIdx + 1);

async function openGallery(i) {
  if (mode !== "stack") return;
  mode = "busy"; setHover(-1); sel = i;
  if (aboutOpen) { aboutOpen = false; aboutEl.classList.remove("on"); aboutScroll.scrollTop = 0; }
  pieces.forEach(p => p.target = 0);
  V.fillT = 1;
  await tween("fill", 1, 320);                       // snap back to full page
  await wait(40);
  await tween("col", 1, 520);                        // shift left into a column
  fillGallery(); tabEl.classList.add("on");
  await tween("jut", 1, 260);                        // chosen stack sticks out with its number
  setPortalLabel("Poster Portal");
  gal.classList.add("on");
  tween("savedVis", 1, 380);
  mode = "gallery"; setActive();
  document.getElementById("add").focus({ preventScroll: true });
}
async function closeGallery() {
  if (mode !== "gallery") return;
  mode = "busy";
  frame.querySelectorAll("video").forEach(v => v.pause());
  gal.classList.remove("on"); curEl.classList.remove("on");
  tween("savedVis", 0, 260);
  await tween("jut", 0, 220);
  tabEl.classList.remove("on");
  setPortalLabel("Poster Portal");
  await tween("col", 0, 520);
  const last = sel; sel = -1;
  V.fill = V.fillT = 1; dirty = true;                // reset the stack
  mode = "stack"; setActive();
  document.querySelectorAll("#pieceList button")[last]?.focus({ preventScroll: true });
}
async function switchArtist(i) {
  if (mode !== "gallery" || i === sel) return;
  mode = "busy";
  gal.style.transition = "opacity .15s ease"; gal.classList.remove("on");
  await tween("jut", 0, 160);
  sel = i;
  fillGallery();
  await tween("jut", 1, 200);
  gal.classList.add("on"); gal.style.transition = "";
  mode = "gallery";
}

/* ---------- saving images ---------- */
function persist() { try { localStorage.setItem("biennial-saved", JSON.stringify(saved.map(({ t0, ...rest }) => rest))); } catch {} }
function restore() {
  try {
    const raw = JSON.parse(localStorage.getItem("biennial-saved") || "[]");
    raw.forEach(it => { const p = pieces.find(q => q.no === it.no); if (!p) return; uidSeq = Math.max(uidSeq, it.uid + 1); saved.push({ ...it, color: it.color || p.colors[0], t0: -1e9 }); });
  } catch {}
}
function addCurrent() {
  if (mode !== "gallery") return;
  const p = pieces[sel], uid = uidSeq++;
  const f = p.files[imgIdx];
  const posterFile = p.still && (VID.test(f) || /\.gif$/i.test(f)) ? p.still : f;   // videos use "<name> screenshot.png"
  saved.push({ uid, no: p.no, artist: p.artist, title: p.title, file: f, posterFile, fileIndex: imgIdx,
    src: IMAGE_DIR + p.files[imgIdx], color: p.colors[0], paper: p.paper, colors: p.colors,
    savedAt: new Date().toISOString(), t0: performance.now() });
  const currentImage = frame.querySelector("img");
  if (posterFile === f && currentImage && currentImage.naturalWidth) aspects.set(posterFile, currentImage.naturalWidth / currentImage.naturalHeight);
  addItem(posterFile, 0.5, 0.42);
  persist(); dirty = true;
  const b = document.getElementById("add"); b.classList.remove("pulse"); void b.offsetWidth; b.classList.add("pulse");
  flash("Added to poster");
}
function clearSaved() { saved = []; persist(); dirty = true; flash("Stack cleared"); }
document.getElementById("add").onclick = addCurrent;
document.getElementById("clear").onclick = clearSaved;
/* poster tool can read this later */
window.biennial = {
  get saved() { return saved.map(({ t0, ...rest }) => rest); },
  clear: clearSaved
};

/* ---------- keyboard ---------- */
addEventListener("keydown", e => {
  if (e.target.closest("input")) return;
  if (mode === "poster") { posterKey(e); return; }
  if (e.key === "Escape") { if (mode === "gallery") closeGallery(); else closeAbout(); }
  else if (mode === "gallery" && e.key === "ArrowRight") showImage(imgIdx + 1);
  else if (mode === "gallery" && e.key === "ArrowLeft") showImage(imgIdx - 1);
  else if (mode === "gallery" && (e.key === "+" || e.key === "=")) addCurrent();
  else if (e.key === "c" || e.key === "C") { const c = document.getElementById("controls"); c.hidden = !c.hidden; }
  else if (mode === "gallery" && (e.key === "ArrowDown" || e.key === "ArrowUp")) switchArtist((sel + (e.key === "ArrowDown" ? 1 : -1) + pieces.length) % pieces.length);
  else if (mode === "stack" && (e.key === "ArrowDown" || e.key === "ArrowUp")) handleScroll(e.key === "ArrowDown" ? 160 : -160, null);
});
const list = document.getElementById("pieceList");
pieces.forEach((p, i) => {
  const b = document.createElement("button"); b.type = "button"; b.setAttribute("role", "listitem");
  b.textContent = `${p.title}, ${p.artist}`;
  b.onfocus = () => mode === "stack" && setHover(i);
  b.onblur = () => mode === "stack" && setHover(-1);
  b.onclick = () => mode === "stack" ? openGallery(i) : switchArtist(i);
  list.append(b);
});

/* ---------- bar ---------- */
function setPortalLabel(s) { document.getElementById("portalLabel").textContent = s; document.getElementById("mPortal").textContent = s; }
function goIndex() {
  if (mode === "poster") leavePoster();
  else if (mode === "gallery") closeGallery();
  else if (aboutOpen) closeAbout();
  else if (mode === "stack") { V.fillT = 1; dirty = true; }
}
async function goAbout() {
  if (mode === "poster") { await leavePoster(); openAbout(); }
  else if (mode === "gallery") { await closeGallery(); openAbout(); }
  else if (mode === "stack") openAbout();
}
document.getElementById("bIndex").onclick = () => location.assign("index/");
document.getElementById("bAbout").onclick = () => location.assign("about/");
document.getElementById("bPortal").onclick = () => location.assign("poster-portal/");

/* mobile menu: pops up, shrinks when you tap off it */
const mnav = document.getElementById("mnav"), mBtn = document.getElementById("mMenuBtn");
function closeMobileMenu() { mnav.classList.remove("open"); mBtn.setAttribute("aria-expanded", "false"); }
mBtn.onclick = () => { mnav.classList.add("open"); mBtn.setAttribute("aria-expanded", "true"); };
document.getElementById("mcatch").addEventListener("pointerdown", e => { e.preventDefault(); closeMobileMenu(); });
document.getElementById("mlist").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  const act = b.dataset.act; closeMobileMenu();
  if (act === "index") location.assign("index/"); else if (act === "about") location.assign("about/"); else if (act === "portal") location.assign("poster-portal/");
});

/* ---------- about background ribbons (decorative, non-interactive) ---------- */
document.querySelectorAll("#aboutBg .track").forEach(track => {
  const group = document.createElement("span"); group.className = "group";
  let i = 0;
  for (let k = 0; k < 2; k++) {
    const phrase = document.createElement("span"); phrase.className = "phrase";
    for (const word of ["Additional", "Editions"]) {
      const w = document.createElement("span"); w.className = "word";
      for (const ch of word) { const g = document.createElement("span"); g.className = "glyph"; g.style.setProperty("--i", i++); g.textContent = ch; w.append(g); }
      phrase.append(w);
    }
    group.append(phrase);
  }
  track.append(group, group.cloneNode(true));
});

/* ---------- controls ---------- */
[["cExpand","oExpand","expand"],["cRag","oRag","rag"],["cRow","oRow","row"],["cMis","oMis","misalign"],["cDrift","oDrift","drift"]]
.forEach(([id, out, key]) => {
  const inp = document.getElementById(id), o = document.getElementById(out);
  inp.value = S[key]; o.textContent = S[key];
  inp.addEventListener("input", () => { S[key] = parseFloat(inp.value); o.textContent = inp.value; dirty = true; });
});
document.getElementById("bSeed").onclick = () => {
  S.seed = Math.floor(Math.random() * 1e6);
  const keep = pieces.map(p => ({ prog: p.prog, target: p.target }));
  pieces = ENTRIES.map(genProject); pieces.forEach((p, i) => Object.assign(p, keep[i]));
  dirty = true; flash("Bands reshuffled · seed " + S.seed);
};
document.getElementById("bCopy").onclick = async () => {
  const data = JSON.stringify({ settings: S, saved: window.biennial.saved }, null, 2);
  try { await navigator.clipboard.writeText(data); flash(`Copied ${saved.length} saved images`); } catch { console.log(data); flash("Clipboard blocked. Logged to console."); }
};
document.getElementById("bClear").onclick = clearSaved;
document.getElementById("bHide").onclick = () => { document.getElementById("controls").hidden = true; };
document.getElementById("folder").addEventListener("change", e => {
  localFiles.forEach(u => URL.revokeObjectURL(u)); localFiles = new Map();
  for (const f of e.target.files) localFiles.set(f.name.normalize("NFC"), URL.createObjectURL(f));
  const wanted = ENTRIES.flatMap(x => x.files), hit = wanted.filter(n => localFiles.has(n.normalize("NFC"))).length;
  flash(`Matched ${hit} of ${wanted.length} files`);
  if (mode === "gallery") showImage(imgIdx);
});
let toastT; const toast = document.getElementById("toast");
function flash(msg) {
  toast.textContent = msg; clearTimeout(toastT); toastT = setTimeout(() => toast.textContent = "", 2600);
  if (mode === "gallery" && document.getElementById("controls").hidden) {
    const t = document.getElementById("gCount"); t.textContent = msg;
    setTimeout(() => { if (mode === "gallery" && sel >= 0) t.textContent = `${imgIdx + 1}/${pieces[sel].files.length}`; }, 1100);
  }
}


/* ================= POSTER PORTAL ================= */
const posterEl = document.getElementById("poster"), paperEl = document.getElementById("paper"), sheetsEl = document.getElementById("sheets");
const stripEl = document.getElementById("strip"), ghostEl = document.getElementById("ghost");
const gV = document.getElementById("gV"), gH = document.getElementById("gH");
const WM_ASPECT = 293 / 775;            // watermark image height / width
const WM_SRC = "data:image/png;base64,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";
const X_DARK = '<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="0" x2="100" y2="100" stroke="#111" stroke-width="1" vector-effect="non-scaling-stroke"/><line x1="100" y1="0" x2="0" y2="100" stroke="#111" stroke-width="1" vector-effect="non-scaling-stroke"/></svg>';
let poster = { items: [], wm: { x: 0.5, y: 0.84, w: 0.62 } };
let psel = null, pid = 1, hist = [], redoStack = [];
let posterClipboard = null;
let PW = 0, PH = 0;                      // paper size on screen, px
const aspects = new Map();               // file -> natural w/h

function loadPoster() {
  try { const s = JSON.parse(localStorage.getItem("biennial-poster") || "null"); if (s && s.items && s.wm) { poster = s; pid = s.items.reduce((m, it) => Math.max(m, it.id + 1), 1); } } catch {}
}
function savePoster() { constrainWatermark(); try { localStorage.setItem("biennial-poster", JSON.stringify(poster)); } catch {} }
function snapshot() { return JSON.stringify(poster); }
function pushHist() { hist.push(snapshot()); if (hist.length > 150) hist.shift(); redoStack = []; }
function undo() { if (!hist.length) return; redoStack.push(snapshot()); poster = JSON.parse(hist.pop()); if (psel !== "wm" && !poster.items.some(i => i.id === psel)) psel = null; renderPoster(); savePoster(); }
function redo() { if (!redoStack.length) return; hist.push(snapshot()); poster = JSON.parse(redoStack.pop()); renderPoster(); savePoster(); }

/* unique saved images, first occurrence wins */
function posterFileOf(s) {
  if (s.posterFile) return s.posterFile;
  const p = pieces.find(q => q.no === s.no);
  return p && p.still && (VID.test(s.file) || /\.gif$/i.test(s.file)) ? p.still : s.file;
}
function uniqueSaved() { const seen = new Set(), out = []; for (const s of saved) { const f = posterFileOf(s); if (!seen.has(f)) { seen.add(f); out.push({ ...s, file: f }); } } return out; }
function contentFor(file, dark) {
  const wrap = document.createDocumentFragment();
  if (IMG.test(file)) {
    const im = new Image(); im.alt = ""; im.draggable = false;
    im.onload = () => { if (im.naturalWidth) aspects.set(file, im.naturalWidth / im.naturalHeight); };
    im.onerror = () => { const ph = document.createElement("div"); ph.className = "ph2"; ph.innerHTML = X_DARK; im.replaceWith(ph); };
    im.src = srcFor(file); wrap.append(im);
  } else { const ph = document.createElement("div"); ph.className = "ph2"; ph.innerHTML = X_DARK; wrap.append(ph); }
  return wrap;
}
function buildStrip() {
  stripEl.innerHTML = "";
  const list = pieces.map(p => ({ title: p.title, artist: p.artist, file: p.still && (VID.test(p.files[0]) || /\.gif$/i.test(p.files[0])) ? p.still : p.files[0] }));
  if (!list.length) { const e = document.createElement("div"); e.className = "empty"; e.textContent = "Nothing saved yet. Open a work and press Add to poster."; stripEl.append(e); return; }
  list.forEach(s => {
    const b = document.createElement("button"); b.type = "button"; b.className = "thumb"; b.setAttribute("role", "listitem");
    b.setAttribute("aria-label", `${s.title}, ${s.artist}: place on poster`); b.dataset.file = s.file;
    if (IMG.test(s.file)) { const im = new Image(); im.alt = ""; im.draggable = false; im.onload = () => aspects.set(s.file, im.naturalWidth / im.naturalHeight); im.onerror = () => { im.remove(); b.insertAdjacentHTML("beforeend", X_DARK); }; im.src = srcFor(s.file); b.append(im); }
    else b.innerHTML = X_DARK;
    stripEl.append(b);
  });
  requestAnimationFrame(updateStripArrows);
}
function layoutPaper() {
  const top = mobileMQ.matches ? 52 : 44, bottom = (stripEl.offsetHeight || 46) + (mobileMQ.matches ? 34 : 22), side = mobileMQ.matches ? 16 : 70, stackOff = mobileMQ.matches ? 18 : 62;
  const availH = H - barH() - top - bottom, availW = W - side * 2 - stackOff;
  PH = Math.max(120, Math.min(availH, availW * 11 / 8.5)); PW = PH * 8.5 / 11;
  const left = Math.round((W - PW - stackOff) / 2), tp = Math.round(top + (availH - PH) / 2);
  Object.assign(paperEl.style, { left: left + "px", top: tp + "px", width: PW + "px", height: PH + "px" });
  sheetsEl.innerHTML = "";
  const n = 5, step = stackOff / n;
  for (let k = n; k >= 1; k--) {
    const s = document.createElement("div"); s.className = "sheet";
    Object.assign(s.style, { left: (left + k * step) + "px", top: tp + "px", width: PW + "px", height: PH + "px" });
    sheetsEl.append(s);
  }
}
const pclip = document.getElementById("pclip"), pui = document.getElementById("pui");
function itemEl(key, isWm) {
  let el = pui.querySelector(`.pitem[data-key="${key}"]`);
  if (el) return el;
  el = document.createElement("div"); el.className = "pitem" + (isWm ? " wm" : ""); el.dataset.key = key;
  for (const [hx, hy] of [[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]]) {
    const h = document.createElement("span"); h.className = "h" + (hx && hy ? " corner" : " edge"); h.dataset.hx = hx; h.dataset.hy = hy;
    h.style.left = (50 + hx * 50) + "%"; h.style.top = (50 + hy * 50) + "%";
    h.style.cursor = hx && hy ? (hx === hy ? "nwse-resize" : "nesw-resize") : (hx ? "ew-resize" : "ns-resize");
    el.append(h);
  }
  const rot = document.createElement("span"); rot.className = "rot"; el.append(rot);
  const del = document.createElement("button"); del.type = "button"; del.className = "del"; del.textContent = "×"; del.setAttribute("aria-label", "Remove from poster"); el.append(del);
  pui.append(el);
  const c = document.createElement("div"); c.className = "pcontent" + (isWm ? " wm" : ""); c.dataset.key = key;
  if (isWm) { const im = new Image(); im.alt = ""; im.src = WM_SRC; c.append(im); }
  pclip.append(c);
  el._content = c;
  return el;
}
function place(el, it, h) {
  const s = { left: ((it.x - it.w / 2) * 100) + "%", top: ((it.y - h / 2) * 100) + "%", width: (it.w * 100) + "%", height: (h * 100) + "%", transform: `rotate(${it.rot || 0}deg)` };
  Object.assign(el.style, s); Object.assign(el._content.style, s);
  el.style.setProperty("--r", (it.rot || 0) + "deg");
}
function constrainWatermark() {
  const it = poster.wm, ratio = 8.5 / 11;
  const angle = (it.rot || 0) * Math.PI / 180;
  const c = Math.abs(Math.cos(angle)), s = Math.abs(Math.sin(angle));
  let width = it.w * (c + s * WM_ASPECT);
  let height = it.w * ratio * (s + c * WM_ASPECT);
  const scale = Math.min(1, 1 / width, 1 / height);
  it.w *= scale; width *= scale; height *= scale;
  it.x = clamp(it.x, width / 2, 1 - width / 2);
  it.y = clamp(it.y, height / 2, 1 - height / 2);
}
function wmH() { return poster.wm.w * WM_ASPECT * (8.5 / 11); }
function renderPoster() {
  constrainWatermark();
  const keep = new Set(["wm", ...poster.items.map(i => String(i.id))]);
  pui.querySelectorAll(".pitem").forEach(el => { if (!keep.has(el.dataset.key)) { el._content.remove(); el.remove(); } });
  const wm = itemEl("wm", true); place(wm, poster.wm, wmH()); wm.style.zIndex = wm._content.style.zIndex = 0; wm.classList.toggle("sel", psel === "wm");
  poster.items.forEach((it, k) => {
    const el = itemEl(String(it.id), false);
    if (!el.dataset.file) { el.dataset.file = it.file; el._content.append(contentFor(it.file)); }
    place(el, it, it.h); el.style.zIndex = el._content.style.zIndex = k + 1; el.classList.toggle("sel", psel === it.id);
  });
}
function addItem(file, fx, fy) {
  const a = aspects.get(file) || 0.8;
  let w = 0.34, h = w * (8.5 / 11) / a;
  if (h > 0.5) { h = 0.5; w = h * a / (8.5 / 11); }
  pushHist();
  const it = { id: pid++, file, x: clamp(fx, w / 2, 1 - w / 2), y: clamp(fy, h / 2, 1 - h / 2), w, h, rot: 0 };
  poster.items.push(it); psel = it.id; renderPoster(); savePoster();
}
function deleteSel() {
  if (psel == null || psel === "wm") return;
  pushHist(); poster.items = poster.items.filter(i => i.id !== psel); psel = null; renderPoster(); savePoster();
}
function getSel() { return psel === "wm" ? poster.wm : poster.items.find(i => i.id === psel); }

const stripPrev = document.getElementById("stripPrev"), stripNext = document.getElementById("stripNext");
function updateStripArrows() {
  const end = Math.max(0, stripEl.scrollWidth - stripEl.clientWidth);
  const atStart = stripEl.scrollLeft <= 1, atEnd = stripEl.scrollLeft >= end - 1;
  stripPrev.classList.toggle("off", atStart); stripPrev.disabled = atStart;
  stripNext.classList.toggle("off", atEnd); stripNext.disabled = atEnd;
}
stripEl.addEventListener("scroll", updateStripArrows, { passive: true });
new ResizeObserver(updateStripArrows).observe(stripEl);
stripPrev.onclick = () => stripEl.scrollBy({ left: -Math.max(64, stripEl.clientWidth * .75), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
stripNext.onclick = () => stripEl.scrollBy({ left: Math.max(64, stripEl.clientWidth * .75), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
stripEl.addEventListener("keydown", e => {
  const button = e.target.closest(".thumb");
  if (button && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); addItem(button.dataset.file, .5, .42); }
});

/* ---- dragging thumbnails from the strip ---- */
let tdrag = null;
stripEl.addEventListener("pointerdown", e => {
  const b = e.target.closest(".thumb"); if (!b) return;
  tdrag = { file: b.dataset.file, x0: e.clientX, y0: e.clientY, active: false, id: e.pointerId, btn: b, type: e.pointerType };
});
addEventListener("pointermove", e => {
  if (!tdrag || e.pointerId !== tdrag.id) return;
  const dx = e.clientX - tdrag.x0, dy = e.clientY - tdrag.y0;
  if (!tdrag.active) {
    const far = Math.hypot(dx, dy) > 8, upish = tdrag.type === "mouse" || Math.abs(dy) > Math.abs(dx);
    if (!far || !upish) { if (far) tdrag = null; return; }
    tdrag.active = true;
    ghostEl.innerHTML = ""; const src = tdrag.btn.querySelector("img");
    if (src) { const im = new Image(); im.src = src.src; ghostEl.append(im); } else ghostEl.innerHTML = X_DARK;
    ghostEl.style.display = "block";
    try { tdrag.btn.setPointerCapture(e.pointerId); } catch {}
  }
  ghostEl.style.left = e.clientX + "px"; ghostEl.style.top = e.clientY + "px";
});
addEventListener("pointerup", e => {
  if (!tdrag || e.pointerId !== tdrag.id) return;
  const d = tdrag; tdrag = null; ghostEl.style.display = "none";
  const r = paperEl.getBoundingClientRect();
  if (d.active) {
    const inside = e.clientX > r.left && e.clientX < r.right && e.clientY > r.top && e.clientY < r.bottom;
    if (inside) addItem(d.file, (e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
  } else addItem(d.file, 0.5, 0.42);          // a tap or click places it in the middle
});
addEventListener("pointercancel", () => { tdrag = null; ghostEl.style.display = "none"; });

/* ---- move / resize / rotate on the paper ---- */
let op = null;
const SNAP = 6;
function paperPt(e) { const r = paperEl.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
paperEl.addEventListener("pointerdown", e => {
  if (e.button > 0) return;
  const el = e.target.closest(".pitem");
  if (!el) { psel = null; renderPoster(); return; }
  if (e.target.closest(".del")) return;
  const key = el.dataset.key; psel = key === "wm" ? "wm" : Number(key);
  const it = getSel(), isWm = psel === "wm";
  if (!isWm) { poster.items = poster.items.filter(i => i !== it).concat(it); }   // bring to front
  renderPoster();
  const p = paperPt(e), h = isWm ? wmH() : it.h;
  const base = { x: it.x, y: it.y, w: it.w, h, rot: it.rot || 0 };
  let kind = "move", hx = 0, hy = 0;
  if (e.target.classList.contains("h")) { kind = "resize"; hx = +e.target.dataset.hx; hy = +e.target.dataset.hy; }
  else if (e.target.classList.contains("rot")) kind = "rotate";
  op = { kind, hx, hy, p0: p, base, it, isWm, pushed: false, id: e.pointerId };
  try { paperEl.setPointerCapture(e.pointerId); } catch {}
  e.preventDefault();
});
paperEl.addEventListener("click", e => { if (e.target.closest(".del")) deleteSel(); });
paperEl.addEventListener("pointermove", e => {
  if (!op || e.pointerId !== op.id) return;
  const p = paperPt(e), b = op.base, it = op.it;
  if (!op.pushed) { if (Math.hypot(p.x - op.p0.x, p.y - op.p0.y) < 2) return; hist.push(snapshot()); redoStack = []; op.pushed = true; }
  if (op.kind === "move") {
    let nx = b.x + (p.x - op.p0.x) / PW, ny = b.y + (p.y - op.p0.y) / PH;
    const sx = Math.abs((nx - 0.5) * PW) < SNAP, sy = Math.abs((ny - 0.5) * PH) < SNAP;
    if (sx) nx = 0.5; if (sy) ny = 0.5;
    gV.classList.toggle("on", sx); gH.classList.toggle("on", sy);
    it.x = nx; it.y = ny;
  } else if (op.kind === "rotate") {
    const cx = b.x * PW, cy = b.y * PH;
    let a = Math.atan2(p.y - cy, p.x - cx) * 180 / Math.PI + 90;
    if (e.shiftKey) a = Math.round(a / 15) * 15;
    else for (const s of [0, 90, 180, -90, 270, -180]) if (Math.abs(a - s) < 4) a = s;
    it.rot = Math.round(a * 10) / 10;
  } else {
    const th = (b.rot || 0) * Math.PI / 180, cs = Math.cos(th), sn = Math.sin(th);
    const W0 = b.w * PW, H0 = b.h * PH, cx = b.x * PW, cy = b.y * PH;
    const rx = p.x - cx, ry = p.y - cy;
    const vx = rx * cs + ry * sn, vy = -rx * sn + ry * cs;          // pointer in the item's own frame
    const ax = -op.hx * W0 / 2, ay = -op.hy * H0 / 2;                // opposite side stays put
    let Wn = W0, Hn = H0;
    const corner = op.hx && op.hy;
    if (corner || op.isWm) {
      const s = Math.max(0.08, ((vx - ax) * op.hx / W0 + (vy - ay) * op.hy / H0) / 2);
      Wn = W0 * s; Hn = H0 * s;
    } else {
      if (op.hx) Wn = Math.max(14, (vx - ax) * op.hx);
      if (op.hy) Hn = Math.max(14, (vy - ay) * op.hy);
    }
    const lx = op.hx ? ax + op.hx * Wn / 2 : 0, ly = op.hy ? ay + op.hy * Hn / 2 : 0;
    it.x = (cx + lx * cs - ly * sn) / PW; it.y = (cy + lx * sn + ly * cs) / PH;
    it.w = Wn / PW; if (!op.isWm) it.h = Hn / PH;
  }
  renderPoster();
});
function endOp(e) { if (!op || (e && e.pointerId !== op.id)) return; const changed = op.pushed; op = null; gV.classList.remove("on"); gH.classList.remove("on"); if (changed) savePoster(); }
paperEl.addEventListener("pointerup", endOp); paperEl.addEventListener("pointercancel", endOp);

function copyPosterItem() {
  const it = getSel();
  if (!it || psel === "wm") return;
  posterClipboard = { ...it };
}
function pastePosterItem() {
  if (!posterClipboard) return;
  const selected = psel !== "wm" && getSel();
  const anchor = selected || posterClipboard;
  const copy = { ...posterClipboard, id: pid++ };
  const extent = it => {
    const angle = (it.rot || 0) * Math.PI / 180;
    return Math.abs(Math.cos(angle)) * it.w / 2 + Math.abs(Math.sin(angle)) * it.h * PH / PW / 2;
  };
  const half = extent(copy), distance = extent(anchor) + half + 12 / PW;
  copy.x = anchor.x + distance;
  if (copy.x + half > 1) copy.x = anchor.x - distance;
  if (copy.x - half < 0) copy.x = Math.max(half, Math.min(1 - half, anchor.x + 12 / PW));
  copy.y = anchor.y;
  pushHist();
  poster.items.push(copy); psel = copy.id;
  renderPoster(); savePoster();
}
function posterKey(e) {
  if (e.target.closest("input, textarea, [contenteditable]")) return;
  const mod = e.metaKey || e.ctrlKey;
  if (mod && e.key.toLowerCase() === "c" && psel !== "wm" && getSel()) { e.preventDefault(); copyPosterItem(); return; }
  if (mod && e.key.toLowerCase() === "v" && posterClipboard) { e.preventDefault(); pastePosterItem(); return; }
  if (mod && (e.key === "z" || e.key === "Z")) { e.preventDefault(); e.shiftKey ? redo() : undo(); return; }
  if (mod && (e.key === "y" || e.key === "Y")) { e.preventDefault(); redo(); return; }
  if (e.key === "Delete" || e.key === "Backspace") { e.preventDefault(); deleteSel(); return; }
  if (e.key === "Escape") { psel = null; renderPoster(); return; }
  const it = getSel();
  if (it && e.key.startsWith("Arrow")) {
    e.preventDefault(); pushHist();
    const step = (e.shiftKey ? 10 : 1);
    if (e.key === "ArrowLeft") it.x -= step / PW; if (e.key === "ArrowRight") it.x += step / PW;
    if (e.key === "ArrowUp") it.y -= step / PH; if (e.key === "ArrowDown") it.y += step / PH;
    renderPoster(); savePoster();
  }
}
document.getElementById("printMe").onclick = () => { psel = null; renderPoster(); window.print(); };

/* Save the sheet as a full-colour PNG (letter size at 200 dpi) */
function drawXBox(c, w, h) {
  c.fillStyle = "#d9d9d9"; c.fillRect(-w / 2, -h / 2, w, h);
  c.strokeStyle = "#111"; c.lineWidth = Math.max(1, w / 400);
  c.strokeRect(-w / 2, -h / 2, w, h);
  c.beginPath(); c.moveTo(-w / 2, -h / 2); c.lineTo(w / 2, h / 2); c.moveTo(w / 2, -h / 2); c.lineTo(-w / 2, h / 2); c.stroke();
}
async function posterBlob() {
  const OW = 1700, OH = 2200;                       // 8.5 x 11 in at 200 dpi
  const cv2 = document.createElement("canvas"); cv2.width = OW; cv2.height = OH;
  const c = cv2.getContext("2d");
  c.fillStyle = "#fff"; c.fillRect(0, 0, OW, OH);
  const wmOp = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--wm-opacity")) || 0.13;
  const wmImg = await new Promise(res => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = WM_SRC; });
  const layers = [{ it: poster.wm, h: wmH(), wm: true }, ...poster.items.map(it => ({ it, h: it.h }))];
  for (const L of layers) {
    const it = L.it, w = it.w * OW, h = L.h * OH;
    c.save(); c.translate(it.x * OW, it.y * OH); c.rotate((it.rot || 0) * Math.PI / 180);
    if (L.wm) { if (wmImg) { c.globalAlpha = wmOp; c.drawImage(wmImg, -w / 2, -h / 2, w, h); } }
    else {
      const el = pui.querySelector(`.pitem[data-key="${it.id}"]`);
      const img = el && el._content.querySelector("img");
      if (img && img.complete && img.naturalWidth) { try { c.drawImage(img, -w / 2, -h / 2, w, h); } catch { drawXBox(c, w, h); } }
      else drawXBox(c, w, h);
    }
    c.restore();
  }
  return new Promise(res => cv2.toBlob(res, "image/png"));
}
document.getElementById("saveImg").onclick = async () => {
  psel = null; renderPoster();
  let blob;
  try { blob = await posterBlob(); } catch { blob = null; }
  if (!blob) { flash("Couldn't build the image"); return; }
  const file = new File([blob], "additional-editions-poster.png", { type: "image/png" });
  try {
    if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: "Additional Editions poster" }); return; }
  } catch (e) { if (e && e.name === "AbortError") return; }
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = file.name; document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
};

async function goPoster() {
  if (mode === "busy" || mode === "poster") return;
  const from = mode; mode = "busy"; setHover(-1); closeMobileMenu();
  if (aboutOpen) { aboutOpen = false; aboutEl.classList.remove("on"); aboutScroll.scrollTop = 0; }
  if (from === "gallery") { frame.querySelectorAll("video").forEach(v => v.pause()); gal.classList.remove("on"); curEl.classList.remove("on"); tabEl.classList.remove("on"); }
  buildStrip(); posterEl.classList.add("on"); layoutPaper(); renderPoster();
  await tween("poster", 1, 380);
  sel = -1; V.col = 0; V.jut = 0; V.fill = V.fillT = 1; V.savedVis = 0;
  setPortalLabel("Poster Portal"); mode = "poster"; setActive();
}
async function leavePoster() {
  if (/\/poster-portal(?:\/|\/index\.html)?$/.test(location.pathname)) { location.assign("index/"); return; }
  if (mode !== "poster") return;
  mode = "busy"; psel = null; renderPoster(); posterEl.classList.remove("on");
  await tween("poster", 0, 320);
  setPortalLabel("Poster Portal"); mode = "stack"; setActive();
}
window.biennial.poster = () => JSON.parse(JSON.stringify(poster));
loadPoster();

/* ---------- boot ---------- */
function resize() {
  DPR = window.devicePixelRatio || 1; W = innerWidth; H = innerHeight;
  cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
  cv.style.width = W + "px"; cv.style.height = H + "px";
  document.documentElement.style.setProperty("--barH", (mobileMQ.matches ? 38 : clamp(Math.round(W * 0.026), 32, 40)) + "px");
  document.documentElement.style.setProperty("--barFull", barH() + "px");
  if (mode === "poster" || posterEl.classList.contains("on")) { layoutPaper(); renderPoster(); }
  document.documentElement.style.setProperty("--gl", (colW() + clamp(Math.round(W * 0.062), 36, 96)) + "px");
  dirty = true;
}
addEventListener("resize", resize);
resize(); restore(); setActive();
if (/\/about(?:\/|\/index\.html)?$/.test(location.pathname) || location.hash === "#about") openAbout();
if (/\/poster-portal(?:\/|\/index\.html)?$/.test(location.pathname)) goPoster();
requestAnimationFrame(render);
