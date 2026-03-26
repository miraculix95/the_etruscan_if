// === ENCYCLOPEDIA DATA ===
// Lore entries unlock as the player encounters places, people, and concepts.
// Each entry has an id, category, title, text, and a list of scenes that trigger it.

const ENCYCLOPEDIA = {

  // ──── PLACES ────

  delphi: {
    title: 'Delphi',
    category: 'places',
    text: 'Nestled on the slopes of Mount Parnassus, Delphi was considered the centre of the world by the ancient Greeks. The sacred precinct housed the Temple of Apollo and the legendary Oracle — the Pythia — whose cryptic prophecies shaped the fate of kings and colonies alike. Pilgrims from across the Mediterranean climbed the Sacred Way bearing gifts, hoping for divine guidance. The site also hosted the Pythian Games, one of the four great Panhellenic festivals.',
    scenes: ['road_to_delphi', 'arrival_delphi_storm', 'approach_delphi']
  },

  pythia: {
    title: 'The Pythia',
    category: 'people',
    text: 'The Pythia was the high priestess of the Temple of Apollo at Delphi, serving as the Oracle. Seated on a tripod over a chasm in the earth, she inhaled vapours rising from below and entered a trance-like state. Her utterances — often incoherent — were interpreted by the temple priests into hexameter verse. The Pythia held enormous political influence: no Greek colony was founded, no war declared, without first consulting her. The position was held by a succession of women, chosen from among the local peasantry, who served for life.',
    scenes: ['the_pythia']
  },

  apollo: {
    title: 'Apollo',
    category: 'gods',
    text: 'God of light, prophecy, music, and healing, Apollo was among the most important of the Olympian deities. His sanctuary at Delphi was the most prestigious oracle in the Greek world. Apollo was also associated with plague and destruction — his arrows brought sudden death. The Etruscans worshipped him as Aplu, and his cult spread across the entire Mediterranean. His twin sister Artemis shared his talent for archery but governed the wild places and the moon.',
    scenes: ['the_pythia', 'the_omphalos', 'temple_calm']
  },

  omphalos: {
    title: 'The Omphalos',
    category: 'culture',
    text: 'The Omphalos ("navel") was a sacred stone at Delphi marking the centre of the world. According to myth, Zeus released two eagles from the ends of the earth, and they met at Delphi — proving it was the midpoint of all things. The stone was a rounded, carved monument covered in a net-like pattern (the agrenon), and served as a focal point for ritual. Copies of the Omphalos were placed in temples throughout the Greek world.',
    scenes: ['the_omphalos']
  },

  sacred_way: {
    title: 'The Sacred Way',
    category: 'places',
    text: 'The Sacred Way was the processional road leading from the entrance of the sanctuary up to the Temple of Apollo at Delphi. Lined with treasuries, monuments, and votive offerings from Greek city-states, it was a display of wealth and piety. Each treasury — small temple-like buildings — held the offerings of a particular city. The Athenian Treasury, the Siphnian Treasury, and others competed in grandeur, turning the Sacred Way into a gallery of Greek art and politics.',
    scenes: ['temple_calm', 'temple_rush']
  },

  parnassus: {
    title: 'Mount Parnassus',
    category: 'places',
    text: 'Rising to 2,457 metres above the Gulf of Corinth, Mount Parnassus was sacred to Apollo and the Muses. Its slopes were home to Delphi and the Corycian Cave, where Dionysian rites were celebrated. The mountain was treacherous — sudden storms swept its ridges, and travellers caught on its paths in winter rarely survived. In myth, Parnassus was where Deucalion and Pyrrha landed after the great flood, making it a place of both death and renewal.',
    scenes: ['the_storm', 'storm_survived', 'road_to_delphi']
  },

  corinth: {
    title: 'Corinth',
    category: 'places',
    text: 'Positioned on the narrow isthmus connecting mainland Greece to the Peloponnese, Corinth controlled two harbours — Lechaion on the Gulf of Corinth and Cenchreae on the Saronic Gulf. This made it one of the wealthiest cities in the ancient world, a crossroads of trade between East and West. In the 6th century BCE, Corinth was ruled by tyrants and known for its pottery, shipbuilding, and the Temple of Aphrodite on Acrocorinth. It was also a city of sailors, merchants, and adventurers.',
    scenes: ['corinth_arrival', 'corinth_dionysius']
  },

  dionysius: {
    title: 'Dionysius of Phocaea',
    category: 'people',
    text: 'A historical figure mentioned by Herodotus, Dionysius was a naval commander from Phocaea who led the Ionian fleet at the Battle of Lade (494 BCE). After the devastating defeat, rather than submit to Persian rule, he turned pirate — raiding Phoenician and Carthaginian merchant ships across the western Mediterranean. He eventually settled in Sicily, where he continued his raiding career. In The Etruscan, he serves as the player\'s passage to the West.',
    scenes: ['corinth_dionysius', 'the_voyage', 'phoenician_waters']
  },

  phocaea: {
    title: 'Phocaea',
    category: 'places',
    text: 'An Ionian Greek city on the coast of Asia Minor (modern Turkey), Phocaea was famed for its seafarers and explorers. The Phocaeans were among the first Greeks to make long sea voyages, founding colonies as far west as Massalia (Marseille) and Emporion (northeast Spain). When the Persians conquered Ionia, many Phocaeans chose exile over submission — loading their families onto ships and sailing west. This diaspora spread Greek culture across the Mediterranean.',
    scenes: ['corinth_dionysius']
  },

  phoenicians: {
    title: 'The Phoenicians',
    category: 'culture',
    text: 'The Phoenicians were a Semitic seafaring people based in the coastal cities of Tyre, Sidon, and Byblos (modern Lebanon). Master traders and navigators, they established colonies across the Mediterranean — most notably Carthage in North Africa. They invented the alphabet that became the basis for Greek, Latin, and all Western scripts. In the 6th century BCE, Phoenician and Greek merchants competed fiercely for trade routes, and naval encounters between them were common.',
    scenes: ['phoenician_waters', 'sea_battle_choice']
  },

  sicily: {
    title: 'Sicily',
    category: 'places',
    text: 'The largest island in the Mediterranean was a melting pot of cultures in the 6th century BCE. Greek colonies dominated the east coast (Syracuse, Catana, Naxos), while Phoenician settlements held the west (Motya, Panormos). The native Sicels, Sicans, and Elymians occupied the interior. Sicily\'s fertile land and strategic position made it a prize fought over by Greeks, Carthaginians, and later Romans. The island was rich in grain, and its volcanic soil — fed by Mount Etna — produced abundant harvests.',
    scenes: ['sicily_shores']
  },

  himera: {
    title: 'Himera',
    category: 'places',
    text: 'A Greek colony on the north coast of Sicily, founded around 648 BCE. Himera sat at the boundary between the Greek east and the Phoenician-Carthaginian west of the island. In 480 BCE, it would become the site of a famous battle where the Greeks defeated a massive Carthaginian invasion force — a victory celebrated as the western counterpart to Salamis. In the time of The Etruscan, Himera was a frontier town, its mixed population reflecting the island\'s cultural complexity.',
    scenes: ['himera_gates', 'tanakil_feast', 'himera_winter']
  },

  eryx: {
    title: 'Mount Eryx',
    category: 'places',
    text: 'A dramatic mountain (modern Erice) on the western tip of Sicily, rising 751 metres above the sea. Its summit held one of the most ancient and sacred temples in the Mediterranean — a sanctuary of the fertility goddess known to the Elymians as their ancestral mother, to the Phoenicians as Astarte, and to the Greeks as Aphrodite. The temple was served by sacred prostitutes, and sailors approaching Sicily could see its fires burning as a beacon. The Etruscans venerated the site and associated it with their own goddess Turan.',
    scenes: ['road_to_eryx', 'temple_eryx', 'goddess_sleep']
  },

  aphrodite: {
    title: 'Aphrodite Erycina',
    category: 'gods',
    text: 'The cult of Aphrodite at Eryx was among the oldest in the Mediterranean, predating Greek colonisation. The goddess worshipped here was not the graceful Olympian of later art but an ancient, powerful fertility deity — closer to the Near Eastern Ishtar and Astarte. Her temple employed sacred prostitutes (hierodules), and her rites involved ecstatic worship, incense, and animal sacrifice. The Romans later adopted her as Venus Erycina, building a temple to her on the Capitoline Hill in Rome.',
    scenes: ['temple_eryx', 'goddess_sleep', 'arsinoe_night']
  },

  arsinoe: {
    title: 'Arsinoe',
    category: 'people',
    text: 'A young woman encountered at the Temple of Aphrodite on Mount Eryx. Her name — shared with several historical queens of the Ptolemaic dynasty — means "she who lifts the mind." In The Etruscan, Arsinoe represents the human face of the ancient temple: someone caught between the sacred and the personal, duty and desire.',
    scenes: ['arsinoe_night', 'arsinoe_day', 'arsinoe_saved']
  },

  etruscans: {
    title: 'The Etruscans',
    category: 'culture',
    text: 'A civilisation that flourished in central Italy (modern Tuscany, Umbria, and Lazio) from the 8th to 3rd century BCE. The Etruscans were master metalworkers, skilled sailors, and sophisticated urban planners. Their language — written in a Greek-derived alphabet — remains only partially understood. They heavily influenced early Rome: the Roman toga, triumphal processions, gladiatorial combat, and even the city\'s drainage system were Etruscan in origin. Their religion was deeply concerned with divination — reading the will of the gods in lightning, bird flight, and the entrails of sacrificed animals.',
    scenes: ['character_select', 'road_to_delphi']
  },

  pythian_games: {
    title: 'The Pythian Games',
    category: 'culture',
    text: 'One of the four Panhellenic Games of ancient Greece, held at Delphi every four years in honour of Apollo. Unlike the Olympics, the Pythian Games included both athletic and artistic competitions — music, poetry, and drama alongside running, wrestling, and chariot racing. Victors received a laurel wreath rather than an olive crown. The stadium at Delphi, cut into the rock of Mount Parnassus, seated 6,500 spectators.',
    scenes: ['the_stadium', 'after_race']
  },

  tanakil: {
    title: 'Tanaquil (Tanakil)',
    category: 'people',
    text: 'In Roman legend, Tanaquil was an Etruscan noblewoman who convinced her husband Lucumo to leave their home city of Tarquinii and seek power in Rome, where he became king as Lucius Tarquinius Priscus. She was renowned for her skill in divination and her political cunning. The name Tanakil (its Etruscan form) appears in The Etruscan as a Sicilian host — a woman of Etruscan descent maintaining her ancestral culture far from the homeland.',
    scenes: ['tanakil_feast', 'himera_winter']
  },

  divination: {
    title: 'Divination',
    category: 'culture',
    text: 'The art of reading divine will through signs was central to ancient Mediterranean religion. The Greeks consulted oracles and read bird omens (ornithomancy). The Etruscans developed the most elaborate system: haruspicy (reading animal entrails, especially the liver), fulguritura (interpreting lightning), and observing bird flight. Roman augurs inherited Etruscan methods. In The Etruscan, the omen system and dice rolls reflect this world where fate was not abstract but visible in the patterns of nature.',
    scenes: ['the_pythia', 'the_bones']
  },

  trireme: {
    title: 'The Trireme',
    category: 'culture',
    text: 'The dominant warship of the 6th–4th century BCE Mediterranean, powered by 170 oarsmen arranged in three tiers. About 37 metres long and just 6 metres wide, the trireme was built for speed and ramming — its bronze-sheathed prow could punch through an enemy hull. Crews were free citizens, not slaves. A trireme could reach 9 knots in short bursts but required constant resupply of food and water, forcing commanders to hug the coastline. Sea battles were violent, close-range affairs decided in minutes.',
    scenes: ['the_voyage', 'sea_battle_choice', 'the_crossing']
  },

  xenia: {
    title: 'Xenia (Guest-Friendship)',
    category: 'culture',
    text: 'The ancient Greek concept of hospitality (xenia) was a sacred obligation protected by Zeus Xenios. A host was required to offer food, shelter, and gifts to any traveller without first asking their name or business. A guest, in turn, owed respect to the host and was expected to reciprocate if the roles were ever reversed. Violating xenia — either as host or guest — was among the gravest sins in Greek society. The Trojan War itself was said to have started from a violation of guest-friendship.',
    scenes: ['village_rest', 'village_info', 'tanakil_feast']
  },

  astragaloi: {
    title: 'Astragaloi (Knucklebones)',
    category: 'culture',
    text: 'Knucklebones — the ankle bones of sheep or goats — were used throughout the ancient world for both gaming and divination. Each bone had four distinct faces, giving it different values when thrown. Greeks and Etruscans used them to gamble, to settle disputes, and to read the will of the gods. The "Venus throw" (all four faces different) was the luckiest cast. Archaeological sites across the Mediterranean have yielded thousands of astragaloi, often found in temples, tombs, and children\'s graves.',
    scenes: ['the_bones']
  },

  carthage: {
    title: 'Carthage',
    category: 'places',
    text: 'Founded by Phoenician colonists from Tyre (traditionally in 814 BCE), Carthage grew to dominate the western Mediterranean from its position on the North African coast (modern Tunisia). By the 6th century BCE, Carthage controlled trade routes, maintained a powerful navy, and established alliances with the Etruscans against Greek expansion. The Carthaginian-Etruscan alliance defeated a Greek fleet at the Battle of Alalia (535 BCE), reshaping the balance of power in the western Mediterranean.',
    scenes: ['phoenician_waters', 'sea_battle_choice']
  },

  mediterranean_trade: {
    title: 'Mediterranean Trade Routes',
    category: 'culture',
    text: 'The 6th century BCE saw the Mediterranean connected by a web of trade routes linking Greece, Phoenicia, Egypt, Etruria, and the western colonies. Ships carried pottery, olive oil, wine, metals (tin, copper, iron), amber, and luxury goods. Navigation relied on coastal landmarks, star positions, and seasonal wind patterns. The sailing season ran from April to October — winter voyages were considered suicidal. Major hubs included Corinth, Syracuse, Carthage, and the Etruscan port of Pyrgi.',
    scenes: ['the_voyage', 'the_crossing', 'corinth_arrival']
  },

};

// Scenes → encyclopedia entries mapping (which entries unlock at which scene)
const SCENE_ENCYCLOPEDIA = {};
for (const [id, entry] of Object.entries(ENCYCLOPEDIA)) {
  for (const scene of entry.scenes) {
    if (!SCENE_ENCYCLOPEDIA[scene]) SCENE_ENCYCLOPEDIA[scene] = [];
    SCENE_ENCYCLOPEDIA[scene].push(id);
  }
}

// Category display names
const ENCYCLOPEDIA_CATEGORIES = {
  all: 'All',
  places: 'Places',
  people: 'People',
  gods: 'Gods',
  culture: 'Culture'
};
