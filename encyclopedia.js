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

  // ──── ACT I EXPANSION ────

  pilgrims_delphi: {
    title: 'Pilgrims of Delphi',
    category: 'culture',
    text: 'Pilgrims came to Delphi from across the Greek world and beyond — from Ionia, Egypt, Italy, and even Persia. They traveled by land and sea, often in groups for safety, bringing offerings and questions for the oracle. The journey itself was considered a sacred act. Pilgrims purified themselves at the Castalian Spring before entering the sacred precinct and were expected to observe strict ritual protocols. The economy of Delphi depended almost entirely on pilgrim traffic, which peaked during the four annual festivals.',
    scenes: []
  },

  guardian_spirits: {
    title: 'Guardian Spirits (Etruscan)',
    category: 'culture',
    text: 'The Etruscans believed each person was accompanied by a guardian spirit — a winged being that watched over them from birth to death. Unlike the Greek daimon or the Roman genius, the Etruscan guardian spirit was depicted as distinctly female, with powerful wings and an otherworldly beauty. In tomb paintings, these spirits are shown carrying the deceased to the afterlife. The relationship between mortal and spirit was intimate: the spirit knew the person\'s true name, and would whisper it at the moment of death.',
    scenes: []
  },

  castalian_spring: {
    title: 'Castalian Spring',
    category: 'places',
    text: 'The Castalian Spring flows from a cleft in the rocks between the twin Phaedriades cliffs at Delphi. Sacred to Apollo and the Muses, it was the primary site of ritual purification for all who entered the sacred precinct — pilgrims, priests, and the Pythia herself. The water was believed to carry prophetic power: those who drank deeply might receive visions, while the act of washing symbolized the stripping away of worldly corruption. The spring flows year-round, even in the driest summers.',
    scenes: []
  },

  four_priests: {
    title: 'The Four Priests of Delphi',
    category: 'people',
    text: 'The temple of Apollo at Delphi was administered by a college of priests drawn from Delphi\'s leading families. By the 6th century BCE, four senior priests typically handled judicial matters — hearing cases, interpreting the Pythia\'s utterances, and managing the treasury. They were shrewd political operators as well as religious officials, balancing the interests of competing Greek city-states while maintaining the oracle\'s reputation for impartiality. Their interrogation of supplicants could last weeks or months, involving fasting, purification, and detailed testimony.',
    scenes: []
  },

  artemisia: {
    title: 'Artemisia of Ephesus',
    category: 'people',
    text: 'Artemisia served as a high-ranking priestess of Artemis at Ephesus, one of the most powerful religious positions in the eastern Greek world. The Temple of Artemis at Ephesus was one of the Seven Wonders of the Ancient World — an enormous marble structure that served as both sanctuary and bank. Artemisia\'s letter of support for Turms reflects the complex politics of the Ionian cities: the temple establishment sometimes supported individuals whom the civil authorities condemned, creating a parallel system of justice rooted in divine rather than human law.',
    scenes: []
  },

  burning_sardis: {
    title: 'The Burning of Sardis',
    category: 'culture',
    text: 'In 498 BCE, a combined force of Athenians, Eretrians, and Ionians marched inland from Ephesus and attacked Sardis, the capital of the Persian satrapy of Lydia. The city\'s reed-thatched roofs caught fire during the assault, and the blaze spread uncontrollably, destroying much of the city including the temple of Cybele. The expedition retreated in disarray, pursued by Persian cavalry. The burning of Sardis enraged the Persian king Darius and is traditionally cited as the immediate cause of the Greco-Persian Wars.',
    scenes: []
  },

  purification_rites: {
    title: 'Purification Rites at Delphi',
    category: 'culture',
    text: 'Purification at Delphi was not a single act but an extended process. Supplicants fasted, washed in the Castalian Spring, offered sacrifices, and submitted to questioning by the priests. For serious cases — those involving bloodshed, sacrilege, or ambiguous guilt — the process could last weeks or months. The fasting was genuinely severe: reduced to bread, water, and occasional fruit, supplicants often experienced vivid dreams and altered states of consciousness, which the priests interpreted as signs of divine engagement.',
    scenes: []
  },

  ionian_revolt: {
    title: 'The Ionian Revolt',
    category: 'culture',
    text: 'The Ionian Revolt (499-493 BCE) was the uprising of Greek city-states in Asia Minor against Persian rule. Sparked by the ambitions of Aristagoras of Miletus and supported by Athens and Eretria, the revolt included the burning of Sardis but ultimately failed at the naval Battle of Lade (494 BCE). Miletus was destroyed, and the Persian Empire turned its attention to punishing Athens — leading directly to the Battles of Marathon and Salamis. For individuals like Turms, caught up in the revolt, the consequences were exile, displacement, and lasting guilt.',
    scenes: []
  },

  burning_sardis_ext: {
    title: 'The Burning of Sardis (Extended)',
    category: 'culture',
    text: 'The assault on Sardis was chaotic and poorly planned. The Greek forces reached the city easily — the Persians had not expected an attack so deep inland — but had no strategy for holding it. A soldier set fire to a house near the temple of Cybele, and the wind carried the flames across the city\'s thatched roofs. The fire was not intentional strategy but catastrophic accident. The destruction of Cybele\'s temple particularly outraged the Persians, who would later cite it as justification for burning Greek temples during Xerxes\' invasion.',
    scenes: []
  },

  aphrodite_dove: {
    title: 'Aphrodite and the Dove',
    category: 'gods',
    text: 'The dove was Aphrodite\'s most sacred bird — a symbol of love, beauty, and the goddess\'s gentler aspects. In Greek art, Aphrodite is frequently depicted with doves perched on her hand or shoulder. At her temple on Mount Eryx in Sicily, sacred doves were kept and fed by the priests. A dove appearing unexpectedly — especially a feather falling from an empty sky — was interpreted as a direct sign of Aphrodite\'s favor. The goddess was also associated with the sea, the evening star, and the western direction.',
    scenes: []
  },

  oracles_egypt: {
    title: 'Oracles of Egypt',
    category: 'culture',
    text: 'Long before Delphi, Egypt had developed elaborate systems of divine communication. The oracle of Amun at Siwa — which Alexander the Great would later visit — delivered prophecies through the movement of a sacred boat carried by priests. Temple incubation, where supplicants slept in sacred chambers to receive prophetic dreams, was practiced at temples of Isis and Serapis. Egyptian oracle practice influenced Greek traditions, though the Greeks adapted the concept to their own religious framework.',
    scenes: []
  },

  temple_incubation: {
    title: 'Temple Incubation',
    category: 'culture',
    text: 'Temple incubation was the practice of sleeping within a sacred precinct to receive divine messages through dreams. Practiced across the ancient Mediterranean — in Egypt, Greece, and Etruria — it was considered one of the most direct forms of communication with the gods. The supplicant would fast, purify, and make offerings before lying down in a specially designated chamber. The dreams that followed were interpreted by priests. The practice was particularly associated with healing cults — patients slept in temples of Asclepius hoping for curative visions.',
    scenes: []
  },

  hecate: {
    title: 'Hecate',
    category: 'gods',
    text: 'Hecate was the goddess of crossroads, the underworld, and the moon — a liminal deity who stood at the boundaries between worlds. Unlike the bright Olympians, Hecate operated in darkness, guiding souls, protecting travelers at night, and commanding spirits. Her sacred animal was the black dog. Offerings were left at crossroads where three roads met. Her priestesses practiced divination by torchlight. In the Etruscan religious system, Hecate corresponded to similar chthonic deities associated with the passage between life and death.',
    scenes: []
  },

  sacred_ecstasy: {
    title: 'Sacred Ecstasy',
    category: 'culture',
    text: 'Divine ecstasy — the state of being "outside oneself" — was central to Greek religion. The Pythia\'s trance was the most famous example, but ecstatic states were associated with many cults: the Maenads of Dionysus, the Corybantes of Cybele, the mystery initiates at Eleusis. The Greeks distinguished between "madness" and "divine madness" (entheos — literally "god within"). An uninvited seizure, outside ritual protocol, was deeply alarming to the priests.',
    scenes: []
  },

  dionysus_winter: {
    title: 'Dionysus at Delphi (Winter)',
    category: 'gods',
    text: 'For three winter months, Apollo was believed to leave Delphi for the land of the Hyperboreans. During his absence, the sanctuary was given over to the worship of Dionysus — the god of wine, ecstasy, and the boundary between civilization and wildness. The Thyiads performed ecstatic dances on Parnassus. The Oracle fell silent. It was a season of transformation, when the orderly world of Apollo yielded to something older and wilder.',
    scenes: []
  },

  dorieus_historical: {
    title: 'Dorieus of Sparta (Historical)',
    category: 'people',
    text: 'The historical Dorieus was a Spartan prince, son of King Anaxandridas II. Passed over for the throne, he led colonizing expeditions to Libya and western Sicily, where he was killed by the Carthaginians around 510 BCE. His son — also named Dorieus — inherited his father\'s restless ambition and was reportedly banished from Sparta. The oracle of Delphi frequently advised exiled Spartans to "go west."',
    scenes: []
  },

  sardis_expedition: {
    title: 'The Expedition to Sardis',
    category: 'culture',
    text: 'The expedition against Sardis in 498 BCE was a joint operation by Athenian, Eretrian, and Ionian forces. The march from Ephesus took three days. The attacking force easily captured the lower city but failed to take the acropolis. The accidental burning — including the temple of Cybele — transformed a military operation into a religious catastrophe. The Persians pursued the retreating Greeks and inflicted heavy casualties.',
    scenes: []
  },

  oracular_prophecy: {
    title: 'Oracular Prophecy and Self-Fulfillment',
    category: 'culture',
    text: 'The Greeks were acutely aware that prophecy could be self-fulfilling. Oedipus\'s parents tried to prevent the oracle\'s prediction and thereby caused it. Croesus attacked Persia because the oracle said "a great empire will fall" — and it was his own. The Delphic oracle was deliberately ambiguous: the gods showed possibilities, not certainties. The human response to prophecy — whether to follow or defy — was itself part of the pattern.',
    scenes: []
  },

  omens_road: {
    title: 'Omens on the Road',
    category: 'culture',
    text: 'The ancient Greeks read omens constantly — in the flight of birds, the behavior of animals, the sound of thunder, and unexpected objects. A thrown javelin striking a piece of ship\'s wreckage far from the sea was a powerful omen, combining travel (the javelin), destruction (the wreck), and the sea (the destination). The Etruscans would develop this practice into the most elaborate system of divination in the ancient world.',
    scenes: []
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
