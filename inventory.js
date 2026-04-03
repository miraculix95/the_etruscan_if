// === INVENTORY DATA ===
// Story-significant items that unlock dialogue options, alternative paths, or bonus scenes.
// Items are collected during gameplay and displayed in the sidebar.

const ITEMS = {

  // ── ACT I: Delphi ──

  laurel_branch: {
    name: 'Laurel Branch',
    icon: '🌿',
    description: 'A branch from the sacred laurel tree of Apollo, cut on the slopes of Parnassus. Pilgrims carry these to Delphi as offerings.',
    lore: 'The laurel was sacred to Apollo after he pursued the nymph Daphne, who was transformed into a laurel tree to escape him. Victors at the Pythian Games wore laurel wreaths.'
  },

  oracle_token: {
    name: 'Oracle\'s Token',
    icon: '🔮',
    description: 'A small clay disc pressed into your hand by one of the Pythia\'s attendants. It bears the mark of Apollo\'s tripod.',
    lore: 'Consultation tokens were issued to pilgrims awaiting their turn before the Oracle. The order of consultation was determined by lot — unless a city-state paid for promanteia, the right to jump the queue.'
  },

  delphi_coin: {
    name: 'Phocaean Electrum Coin',
    icon: '🪙',
    description: 'A small coin of electrum — a natural alloy of gold and silver — stamped with the seal of Phocaea. Given to you in friendship.',
    lore: 'Phocaea was among the first Greek cities to mint coins. Their electrum staters, stamped with a seal (phoke), circulated across the Mediterranean and were trusted for their consistent weight.'
  },

  knucklebones: {
    name: 'Astragaloi',
    icon: '🦴',
    description: 'A set of four polished sheep knucklebones, well-worn from use. They rattle softly in your pouch.',
    lore: 'Used for both gambling and divination throughout the ancient world. The four faces of each bone gave different values. The "Venus throw" — all four faces different — was the luckiest cast.'
  },

  // ── ACT II: Western Sea ──

  sea_charm: {
    name: 'Sailor\'s Charm',
    icon: '🐚',
    description: 'A polished cowrie shell on a leather cord, given as protection for the voyage west. Sailors believe it wards off drowning.',
    lore: 'Cowrie shells were used as currency and talismans across the ancient world. Their shape associated them with fertility goddesses — Aphrodite was said to have been born from the sea foam.'
  },

  phoenician_map: {
    name: 'Phoenician Chart',
    icon: '🗺️',
    description: 'A scrap of papyrus showing coastal landmarks between Corinth and Sicily. The annotations are in Phoenician script.',
    lore: 'Phoenician navigators were the master chartmakers of the ancient world. They sailed by the stars — particularly the constellation Ursa Minor, which the Greeks called the "Phoenician star."'
  },

  bronze_dagger: {
    name: 'Bronze Dagger',
    icon: '🗡️',
    description: 'A short-bladed dagger with an ivory handle, taken from a fallen enemy. The bronze is old but the edge is still keen.',
    lore: 'By the 6th century BCE, iron had largely replaced bronze for weapons. A bronze dagger was either an heirloom, a ceremonial piece, or — in the western Mediterranean — a sign of older, pre-Greek traditions.'
  },

  // ── ACT II: Sicily ──

  temple_oil: {
    name: 'Sacred Oil of Eryx',
    icon: '🏺',
    description: 'A small alabaster vial of perfumed oil from the Temple of Aphrodite at Eryx. Its scent is heavy with myrrh and roses.',
    lore: 'Sacred oils were central to temple rituals. The oil at Eryx was said to renew itself miraculously — the temple fires, fed with this oil, burned perpetually and could be seen by sailors far out to sea.'
  },

  golden_necklace: {
    name: 'Golden Necklace',
    icon: '📿',
    description: 'A delicate gold necklace set with amber beads. It catches the light like trapped sunlight.',
    lore: 'Amber was highly prized in the ancient Mediterranean, traded along routes stretching from the Baltic Sea. The Greeks believed amber was the solidified tears of the Heliades, sisters of Phaethon.'
  },

  etruscan_mirror: {
    name: 'Etruscan Mirror',
    icon: '🪞',
    description: 'A polished bronze hand mirror engraved on the back with a scene of two lovers. Etruscan craftsmanship, far from home.',
    lore: 'Etruscan bronze mirrors are among the finest surviving artworks of the civilisation. Their engraved backs depict mythological scenes — often romantic or erotic — and were prized possessions, frequently buried with their owners.'
  },

  passage_letter: {
    name: 'Letter of Passage',
    icon: '📜',
    description: 'A sealed letter of safe conduct, written in Greek and stamped with the signet of a Sicilian host. It grants passage through allied territories.',
    lore: 'Letters of introduction and safe conduct were essential for travel in the ancient world, where strangers were viewed with suspicion. A letter from a respected figure could mean the difference between hospitality and hostility.'
  },

  arsinoe_ring: {
    name: 'Arsinoe\'s Ring',
    icon: '💍',
    description: 'A simple silver ring set with a tiny carved scarab. A parting gift — or a promise.',
    lore: 'Scarab rings were Egyptian in origin but widely adopted across the Mediterranean. They served as seals, amulets, and tokens of affection. The beetle symbolised rebirth and transformation.'
  },

  // ──── ACT I EXPANSION ITEMS ────

  dove_feather: {
    name: 'Dove\'s Feather',
    icon: '🕊️',
    description: 'A bluish-white dove feather that drifted from an empty sky into your outstretched palm. The priests say it is Aphrodite\'s sign.',
    lore: 'The dove was Aphrodite\'s most sacred bird. A feather appearing from an empty sky was among the most powerful omens the ancients could receive — a direct, physical sign of divine favor, witnessed by the priests of Delphi themselves.'
  },

  hecate_torch: {
    name: 'Hecate\'s Token',
    icon: '🔥',
    description: 'A tiny clay torch-shaped amulet, warm to the touch at night. Given by a priestess of Hecate at a mountain crossroads.',
    lore: 'Hecate was worshipped at crossroads where three roads met. Her priestesses carried torches and performed divination by firelight. Small clay torches were left as offerings — or given to travelers as tokens of the goddess\'s protection on dark roads.'
  },

  // ──── SIDE QUESTS S14–S25 ────

  phoenician_chart: {
    name: 'Phoenician Chart',
    icon: '🗺️',
    description: 'A rough sketch on leather showing coastlines, harbors, and danger points between Corinth and Sicily.',
    lore: 'Phoenician navigators guarded their charts jealously — maritime knowledge was a commercial advantage worth killing for. A Phoenician chart, even a rough one, was worth more than gold to any sailor heading west.'
  },

  castalian_water: {
    name: 'Castalian Water',
    icon: '💧',
    description: 'A small flask of water from the sacred spring at Delphi. Cold even in summer.',
    lore: 'Water from the Castalian Spring was believed to carry prophetic and purifying power. Carrying it away from Delphi was unusual — the spring\'s power was thought to be tied to the place itself.'
  },

  // ──── SIDE QUESTS S26–S40 ────

  lucky_astragalos: {
    name: 'Lucky Knucklebone',
    icon: '🎲',
    description: 'A single polished knucklebone won from a Thessalian gambler in Delphi. It has an uncanny tendency to land on its best face.',
    lore: 'A knucklebone that consistently throws well was considered touched by Hermes — god of luck, travelers, and thieves. Professional gamblers treasured such bones and often had them buried with them, ensuring good fortune in the afterlife\'s gambling dens.'
  },

  winter_cloak: {
    name: 'Mountain Cloak',
    icon: '🧥',
    description: 'A heavy woolen cloak dyed with mountain saffron, bought from a Delphi vendor. It smells of lanolin and wood smoke.',
    lore: 'The mountain cloaks of Parnassus were woven from the wool of goats that grazed above the tree line. Dyed with wild saffron — one of the few plants that grew at altitude — they were prized for their warmth and their golden-brown color.'
  },

  clay_lamp: {
    name: 'Clay Lamp',
    icon: '🪔',
    description: 'A small terra-cotta oil lamp shaped like a crouching lion. Its wick-hole is worn smooth from use.',
    lore: 'Clay lamps were essential items in the ancient world, providing the only reliable light after sundown. The finest were made in Athens and Corinth, but local potters at Delphi produced their own — often shaped like animals sacred to Apollo. A lion lamp symbolized courage in the dark.'
  },

  ancient_shard: {
    name: 'Painted Shard',
    icon: '🏺',
    description: 'A fragment of painted plaster from an ancient mountain tomb. The faded image shows a dancing figure with elongated limbs and oversized eyes.',
    lore: 'Pre-Greek tomb paintings in the Parnassus region share striking similarities with Etruscan funerary art — dancing figures, processional scenes, and symbols associated with the passage between life and death. Whether this represents a common origin or parallel development remains one of archaeology\'s great unsolved questions.'
  },

  // ──── SIDE QUESTS S01–S13 ────

  ephesian_ring: {
    name: 'Ephesian Bee Ring',
    icon: '🐝',
    description: 'A bronze ring stamped with the bee of Ephesus — the symbol of Artemis\'s great temple. Bought from a roadside seller on the way to Delphi.',
    lore: 'The bee was the sacred symbol of Ephesus, appearing on its coins and associated with the cult of Artemis. Priestesses of the temple were called "Melissae" (bees), and the insect represented industry, community, and the goddess\'s nurturing power. To carry this ring far from Ephesus is to carry a piece of a world you can never return to.'
  }

};

// Scene → item awards mapping: { sceneId: [{ item: 'id', condition: fn|null }] }
const SCENE_ITEMS = {
  road_to_delphi: [{ item: 'laurel_branch' }],
  the_pythia: [{ item: 'oracle_token' }],
  the_bones: [{ item: 'knucklebones' }],
  after_race: [{ item: 'delphi_coin', condition: () => state.flags.won_race }],
  corinth_arrival: [{ item: 'sea_charm' }],
  corinth_dionysius: [{ item: 'phoenician_map' }],
  sea_battle_choice: [{ item: 'bronze_dagger' }],
  himera_winter: [{ item: 'passage_letter' }],
  the_golden_necklace: [{ item: 'golden_necklace' }],
  kydippe_trap: [{ item: 'golden_necklace', condition: () => state.flags.met_kydippe }],
  temple_eryx: [{ item: 'temple_oil' }],
  arsinoe_saved: [{ item: 'arsinoe_ring' }],
};
