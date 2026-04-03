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

  // ──── SIDE QUESTS S14–S25 ────

  pilgrim_graffiti: {
    title: 'Pilgrim Graffiti at Delphi',
    category: 'culture',
    text: 'The walls of the sacred precinct at Delphi are covered with centuries of carved names — kings, generals, victorious athletes, and anonymous pilgrims who left only this trace. The practice was not vandalism but devotion: carving your name into sacred stone meant asking the god to remember you. Some inscriptions include prayers, dedications, or records of debts paid. Archaeologists have catalogued thousands of these graffiti, which provide invaluable evidence about who visited Delphi and why.',
    scenes: []
  },

  phoenician_navigation: {
    title: 'Phoenician Navigation',
    category: 'culture',
    text: 'The Phoenicians were the greatest navigators of the ancient world. Based in the coastal cities of Tyre, Sidon, and Byblos (modern Lebanon), they developed techniques that allowed them to sail at night using the constellation they called "the Tail" (Ursa Minor). They established trading posts across the entire Mediterranean and beyond — to the Atlantic coast of Africa, Spain, and possibly Britain. Their charts and routes were closely guarded commercial secrets, giving them a navigational monopoly that lasted centuries.',
    scenes: []
  },

  chthonic_religion: {
    title: 'Chthonic Religion at Delphi',
    category: 'culture',
    text: 'Before Apollo claimed Delphi, the site was sacred to older, chthonic ("of the earth") deities. Natural rock formations in the sacred precinct were worshipped as portals to the underworld long before any temple was built. The myth of Apollo slaying the serpent Python represents the Olympian gods displacing these older powers — but they were never fully erased. The Oracle itself drew its power from a chasm in the earth, and the Omphalos (navel stone) marked the intersection of upper and lower worlds.',
    scenes: []
  },

  spartan_military: {
    title: 'Spartan Military Training',
    category: 'culture',
    text: 'The Spartan agoge was the most demanding military training program in the ancient world. Boys were taken from their families at age seven and subjected to years of physical hardship, combat training, and psychological conditioning. They learned to fight with spear and shield, to endure pain without complaint, and to value the unit above the individual. The javelin throw was both a combat skill and a sport — Spartans threw with a leather thong (ankyle) wrapped around the shaft for extra spin and distance.',
    scenes: []
  },

  // ──── SIDE QUESTS S26–S40 ────

  corycian_cave: {
    title: 'The Corycian Cave',
    category: 'places',
    text: 'High on the slopes of Mount Parnassus, some 1,300 metres above sea level, lies the Corycian Cave — a vast limestone cavern sacred to Pan, the Nymphs, and Dionysus. The cave stretches over 60 metres deep and was used for worship from at least the Neolithic period. During the Dionysian festivals, the Thyiads — ecstatic female worshippers — climbed from Delphi to perform their rites here by torchlight. Archaeological excavations have uncovered tens of thousands of offerings: clay figurines, terracotta masks, bronze pins, knucklebones, and miniature vessels. The cave was sacred long before Apollo claimed the lowlands — a reminder that the mountain gods do not answer to the oracle.',
    scenes: ['sq_corycian_cave']
  },

  sacred_olives: {
    title: 'The Sacred Olives of Delphi',
    category: 'culture',
    text: 'Olive trees were among the most sacred plants in the Greek world. Athena herself was said to have given the olive to Athens. At Delphi, ancient groves supplied the oil for the temple\'s eternal flame — a fire that was never permitted to go out. The oil was pressed from trees so old that their trunks had split and regrown multiple times. Olive cultivation was considered a sacred art: the trees took decades to mature, demanded patience, and rewarded care with fruit for centuries. To destroy an olive grove was a war crime; to tend one was an act of piety.',
    scenes: ['sq_olive_grove']
  },

  commerce_delphi: {
    title: 'Commerce at Delphi',
    category: 'culture',
    text: 'Delphi\'s economy depended almost entirely on pilgrims. Merchants, innkeepers, and artisans clustered around the sacred precinct, selling everything from sacrificial animals to souvenir miniatures of Apollo\'s tripod. The market operated year-round, though winter reduced it to essentials. Prices at Delphi were notoriously high — the priests took a cut, and the pilgrims, having traveled so far, had little choice but to pay. Specialty goods included honey cakes for offerings, woolen cloaks against the mountain cold, clay lamps, and pre-written prayer tablets for the illiterate.',
    scenes: ['sq_marketplace']
  },

  pre_olympian_religion: {
    title: 'Pre-Olympian Religion',
    category: 'culture',
    text: 'Before Apollo claimed Delphi, the site was sacred to Gaia — the Earth Mother — and guarded by the serpent Python. This older religion, focused on earth, fertility, and the cycle of seasons, was gradually absorbed by the Olympian gods but never fully replaced. Pan, the wild god of shepherds and mountain places, was worshipped alongside Apollo well into the classical period. The Corycian Cave, the deep clefts in the rock, and the vapours rising from the earth all pointed to a power older than any named god — the mountain itself, alive and breathing.',
    scenes: ['sq_shepherd']
  },

  athena_pronaia: {
    title: 'Athena Pronaia',
    category: 'places',
    text: 'The sanctuary of Athena Pronaia ("Before the Temple") lay below the main precinct at Delphi, on the road approaching from the east. It was the first sacred site pilgrims encountered and served as a kind of prelude to Apollo\'s domain. The sanctuary contained several temples and the famous Tholos — a circular marble building whose purpose remains debated. Some scholars believe it housed a hero cult; others that it was purely votive. The Tholos is one of the most photographed ruins in Greece, its three restored columns among the iconic images of the ancient world.',
    scenes: ['sq_athena_pronaia']
  },

  charioteer_delphi: {
    title: 'The Charioteer of Delphi',
    category: 'culture',
    text: 'The Bronze Charioteer is one of the finest surviving examples of ancient Greek sculpture. Cast around 470 BCE, it was dedicated by Polyzalus, tyrant of Gela in Sicily, to commemorate a victory in the Pythian Games\' chariot race. The life-sized figure stands in a long chiton, his right hand still holding the reins. His inlaid eyes — onyx and white stone — give the bronze an eerie lifelike quality. The statue survived because it was buried in a landslide caused by an earthquake in 373 BCE. It represents the connection between Sicily and Delphi — between the Greek west and the Greek heartland.',
    scenes: ['sq_charioteer_ghost']
  },

  sybaris_city: {
    title: 'Sybaris',
    category: 'places',
    text: 'Sybaris was a Greek colony in southern Italy, founded around 720 BCE and legendary for its wealth and luxury — the word "sybarite" still means a lover of pleasure. Located on the Gulf of Taranto, Sybaris controlled a vast territory and grew rich from trade with the Etruscans and other Italian peoples. Its coins were among the first in the western Greek world. The city\'s culture was cosmopolitan: Greek, Italian, and Etruscan influences mingled freely. At its height, Sybaris was said to have 300,000 inhabitants — one of the largest cities in the ancient world.',
    scenes: ['sq_sybaris_dream']
  },

  sybaris_destruction: {
    title: 'The Destruction of Sybaris',
    category: 'culture',
    text: 'In 510 BCE, Sybaris was destroyed by its rival Croton after a brief, savage war. The Crotoniates diverted the river Crathis to flood the ruins, ensuring the city could never be rebuilt. The destruction was total — Sybaris was literally wiped from the map. Refugees scattered across the Mediterranean, carrying their wealth, their culture, and their memories to new homes. The event shocked the Greek world: if a city so powerful could be erased overnight, no civilization was safe. Archaeological excavations have confirmed the ancient accounts — the ruins lie buried under metres of river sediment.',
    scenes: ['sq_sybaris_dream']
  },

  ancient_navigation: {
    title: 'Ancient Navigation',
    category: 'culture',
    text: 'Ancient sailors navigated by stars, landmarks, wind patterns, and hard-won experience. The Phoenicians used the constellation Ursa Minor (the "Phoenician star") to find north; the Greeks preferred Ursa Major. Latitude could be estimated by the height of the pole star above the horizon; longitude was essentially guesswork. Experienced navigators recognized coastal profiles, knew the colour and taste of water near different shores, and could read wave patterns to detect land beyond the horizon. Most voyages hugged the coast, but the bravest sailors — Phoenicians, Phocaeans, Etruscans — crossed open water by dead reckoning and prayer.',
    scenes: ['sq_stars']
  },

  temple_healing: {
    title: 'Temple Healing',
    category: 'culture',
    text: 'Healing in the ancient world was inseparable from religion. Temples of Asclepius offered "incubation" — patients slept in sacred dormitories, hoping the god would appear in a dream and prescribe treatment. Priest-physicians combined herbal remedies, surgery, and divine intervention. But alongside institutional healing, there existed a folk tradition of "holy men" and charismatic healers — individuals believed to channel divine power through touch. Such healers were both revered and feared: their gift was seen as proof of divine favor, but also as a mark that set them apart from ordinary mortals.',
    scenes: ['sq_sick_pilgrim']
  },

  dionysian_rites: {
    title: 'Dionysian Rites',
    category: 'culture',
    text: 'The worship of Dionysus was the ecstatic counterpart to Apollo\'s rational order. During winter festivals, when Apollo was believed absent from Delphi, Dionysus held sway. His rites involved masked processions, wine, dancing, and the deliberate dissolution of social boundaries. The Thyiads — female worshippers — climbed Parnassus to perform ecstatic dances in the Corycian Cave. The Dionysia festivals were also the origin of Greek theater: tragedy and comedy both emerged from choral performances in the god\'s honor. Dionysus represented transformation, intoxication, and the wildness that civilization suppresses but can never eliminate.',
    scenes: ['sq_dionysus_festival']
  },

  homeric_recitation: {
    title: 'Homeric Recitation',
    category: 'culture',
    text: 'In the 6th century BCE, Homer\'s epics were not read but performed — recited from memory by professional bards (rhapsodes) at festivals, banquets, and public gatherings. Knowing your Homer was a mark of education and culture. Poetry contests were common, with contestants competing to recite the longest passages, the most moving scenes, or the most technically demanding verses. The Athenian tyrant Peisistratus is credited with establishing the first official text of the Iliad and Odyssey, but oral performance remained the primary means of transmission. To recite Homer was to participate in a living tradition stretching back centuries.',
    scenes: ['sq_poet_challenge']
  },

  pre_greek_burial: {
    title: 'Pre-Greek Burial Practices',
    category: 'culture',
    text: 'Before the Greeks settled at Delphi, the region was inhabited by peoples whose identity remains debated. Their burial practices — rock-cut tombs decorated with painted figures, animal motifs, and abstract symbols — share striking similarities with Etruscan and other Italian funerary traditions. Some scholars argue for a common pre-Indo-European culture that once spanned the Mediterranean; others see the similarities as coincidence or trade contact. The dancing figures, elongated bodies, and processional scenes found in these tombs resemble nothing so much as the painted tombs of Tarquinia — raising tantalizing questions about the origins of the Etruscans themselves.',
    scenes: ['sq_mountain_tomb']
  },

  etruscan_wine: {
    title: 'Etruscan Wine',
    category: 'culture',
    text: 'The Etruscans were among the great winemakers of the ancient Mediterranean. Their wines — darker, heavier, and sweeter than Greek varieties — were exported in distinctive bucchero-ware amphorae across the western sea. Etruscan viticulture benefited from volcanic soil, which imparted a mineral richness Greek vineyards could not match. Wine played a central role in Etruscan social life: their banquets (at which, scandalously to Greek eyes, women reclined alongside men) were famous for their luxury. The Greeks both envied and disparaged Etruscan wines — a cultural tension that mirrored broader rivalries between East and West.',
    scenes: ['sq_wine_merchant']
  },

  // ──── SIDE QUESTS S01–S13 ────

  ephesus: {
    title: 'Ephesus',
    category: 'places',
    text: 'One of the greatest cities of the ancient world, Ephesus sat on the coast of Ionia (modern western Turkey). Its Temple of Artemis was one of the Seven Wonders — an enormous marble structure that served as sanctuary, treasury, and asylum. The city was a hub of trade between Greece, Persia, and the East. In the aftermath of the Ionian Revolt and the burning of Sardis, Ephesus became a dangerous place for anyone associated with the rebellion. The bee was its symbol, stamped on coins and worn as an emblem of Artemis.',
    scenes: ['sq_ephesus_flashback']
  },

  treasuries_delphi: {
    title: 'The Treasuries of Delphi',
    category: 'places',
    text: 'The Sacred Way at Delphi was lined with treasuries — small temple-like buildings erected by Greek city-states to house their offerings to Apollo. Each treasury was a statement of wealth, piety, and political power. The Athenian Treasury, built from Marathon spoils, celebrated victory over Persia. The Siphnian Treasury, funded by silver mines, was among the most ornate. The treasuries competed in grandeur, turning the Sacred Way into a gallery of Greek art and interstate rivalry. When a city\'s fortunes declined, its treasury fell into disrepair — a visible mark of shame.',
    scenes: ['sq_sacred_way_monuments']
  },

  hyampeia: {
    title: 'Hyampeia (The Black Cliff)',
    category: 'places',
    text: 'Hyampeia was the name given to one of the twin Phaedriades cliffs at Delphi — specifically the cliff from which those condemned for sacrilege were hurled to their deaths. The drop was several hundred feet onto jagged rocks. Execution by precipitation was reserved for the worst religious crimes: temple robbery, violation of sacred truces, and blasphemy against Apollo. The cliff served as both punishment and warning — visible from the Sacred Way, it reminded every pilgrim that Delphi\'s justice was absolute and final.',
    scenes: ['sq_black_cliff']
  },

  seven_sages: {
    title: 'The Seven Sages of Greece',
    category: 'people',
    text: 'The Seven Sages were legendary wise men of the 7th-6th centuries BCE whose maxims were inscribed at Delphi. The traditional list includes Thales of Miletus, Solon of Athens, Pittacus of Mytilene, Bias of Priene, Cleobulus of Lindos, Periander of Corinth, and Chilon of Sparta. Their sayings — "Know thyself," "Nothing in excess," "Surety brings ruin" — became the foundational principles of Greek ethics. The maxims were carved into the pronaos (entrance hall) of the Temple of Apollo, where every supplicant would read them before approaching the oracle.',
    scenes: ['sq_anteroom']
  },

  croesus_delphi: {
    title: 'Croesus and the Oracle',
    category: 'culture',
    text: 'Croesus, the fabulously wealthy king of Lydia, was the most famous — and most cautionary — of Delphi\'s patrons. He tested all the oracles of the Greek world before trusting Delphi, then lavished the sanctuary with gold offerings. When he asked whether he should attack Persia, the oracle replied that "a great empire would fall." Encouraged, Croesus invaded — and it was his own empire that fell. His treasures remained at Delphi for centuries, a monument to the dangers of hearing what you want to hear in divine pronouncements.',
    scenes: ['sq_anteroom']
  },

  succession_pythias: {
    title: 'Succession of the Pythias',
    category: 'culture',
    text: 'The Pythia was not a single woman but a succession of oracles who served for life. Originally young virgins, after an incident of abduction the requirement changed to women over fifty who dressed as maidens. They were chosen from the local peasantry of Delphi — ordinary women called to extraordinary service. Upon taking the role, a Pythia gave up her name, her family, and her former life. When a Pythia could no longer serve — due to age, illness, or loss of the prophetic gift — she was quietly retired. Former Pythias lived out their days near the sanctuary, revered but isolated, unable to return to ordinary life.',
    scenes: ['sq_former_pythia']
  },

  priestly_hierarchy: {
    title: 'The Priestly Hierarchy of Delphi',
    category: 'culture',
    text: 'The administration of Delphi was a complex bureaucracy disguised as divine service. The four senior priests (hosioi) handled judicial matters and interpreted the Pythia\'s utterances. Below them, prophets (prophetai) managed the daily consultations. Temple servants maintained the sacred flame, prepared sacrificial animals, and guarded the treasury. The priests wielded enormous political influence — they could delay or expedite consultations, shape the interpretation of prophecies, and grant or deny asylum. Their deliberations were private, conducted behind closed doors, and their decisions were presented as divine will.',
    scenes: ['sq_priests_council']
  },

  greek_athletics: {
    title: 'Greek Athletics',
    category: 'culture',
    text: 'Athletic training was central to Greek male identity. The gymnasium (from gymnos, "naked" — athletes trained unclothed) was both training ground and social club. Events included the stadion (sprint), diaulos (double sprint), dolichos (long distance), wrestling, boxing, pankration (a brutal combination of both), and the pentathlon. Athletes trained under professional coaches, followed strict diets, and were celebrated as near-divine figures. The Pythian Games at Delphi ranked second only to Olympia in prestige, and the gymnasium at Delphi served as a training ground for athletes from across the Greek world.',
    scenes: ['sq_gymnasium']
  },

  greek_theater_delphi: {
    title: 'The Theater at Delphi',
    category: 'places',
    text: 'The theater at Delphi was built into the slope above the Temple of Apollo, seating approximately 5,000 spectators with a commanding view of the valley below. It hosted the musical and dramatic competitions of the Pythian Games — the only Panhellenic festival to include artistic events alongside athletics. Tragedies, comedies, and dithyrambs (choral hymns to Dionysus) were performed here, making Delphi a crucible of Greek theatrical tradition. The theater\'s acoustics were engineered so precisely that a coin dropped on the orchestra floor could be heard in the highest seats.',
    scenes: ['sq_theater']
  },

  spartan_diplomacy: {
    title: 'Spartan Diplomacy at Delphi',
    category: 'culture',
    text: 'Sparta maintained a uniquely close relationship with the Delphic oracle. Spartan kings consulted the Pythia before every major military campaign, and Sparta\'s dual kingship, its constitution (the Great Rhetra), and its colonizing expeditions were all attributed to oracular guidance. Spartan delegations at Delphi were conspicuous — red-cloaked warriors who carried themselves with the disciplined arrogance of men who considered themselves the finest soldiers in Greece. The oracle, in turn, showed Sparta notable favoritism, a political alliance disguised as divine preference.',
    scenes: ['sq_spartan_delegation']
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
