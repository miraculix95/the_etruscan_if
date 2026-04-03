// Developer Act Switch (F-113)
// Toggle acts for production vs. testing. URL override: ?acts=1,2
const ACT_CONFIG = {
  act1: true,
  act2: false,
};

// Beta access password hash (SHA-256). Change password: echo -n "yourpassword" | sha256sum
const BETA_PASSWORD_HASH = '9c68ef0ca4ced6b8937371813b8a10772e1235d2ba2003161fb6d4bd8d19e0a2';

const SCENE_ACTS = {
  // Act I — Delphi (Main)
  pilgrims_fire: 'act1',
  storm_vision: 'act1',
  castalia_spring: 'act1',
  priests_interrogation_1: 'act1',
  competing_letters: 'act1',
  fasting_begins: 'act1',
  priests_interrogation_2: 'act1',
  sardis_confession: 'act1',
  dove_feather_omen: 'act1',
  pythia_aftermath: 'act1',
  divine_recognition: 'act1',
  winter_in_delphi: 'act1',
  washing_by_brook: 'act1',
  dorieus_story: 'act1',
  turms_confession: 'act1',
  dorieus_oracle: 'act1',
  departure_preparations: 'act1',
  the_road_south: 'act1',
  coast_decision: 'act1',
  // Act I — Delphi (Side Quests)
  sq_egyptian_merchant: 'act1',
  sq_hecate_priestess: 'act1',
  sq_pythia_attendant: 'act1',
  sq_night_vigil: 'act1',
  sq_carving_names: 'act1',
  sq_phoenician_sailor: 'act1',
  sq_moonlight_delphi: 'act1',
  sq_wrestling: 'act1',
  sq_javelin: 'act1',
  sq_underworld_rocks: 'act1',
  sq_dorieus_javelin_omen: 'act1',
  sq_farewell_priests: 'act1',
  sq_last_castalia: 'act1',
  sq_megara: 'act1',
  sq_ephesus_flashback: 'act1',
  sq_souvenir_seller: 'act1',
  sq_spartan_delegation: 'act1',
  sq_sacred_way_monuments: 'act1',
  sq_black_cliff: 'act1',
  sq_anteroom: 'act1',
  sq_treasury_visit: 'act1',
  sq_theater: 'act1',
  sq_gymnasium: 'act1',
  sq_delphi_exploration: 'act1',
  sq_former_pythia: 'act1',
  sq_priests_council: 'act1',
  // Act I — Delphi (Side Quests S26–S40)
  sq_fasting_explore: 'act1',
  sq_winter_explore: 'act1',
  sq_winter_explore_2: 'act1',
  sq_winter_explore_3: 'act1',
  sq_corycian_cave: 'act1',
  sq_olive_grove: 'act1',
  sq_gambling: 'act1',
  sq_wine_merchant: 'act1',
  sq_marketplace: 'act1',
  sq_shepherd: 'act1',
  sq_athena_pronaia: 'act1',
  sq_charioteer_ghost: 'act1',
  sq_spartan_drill: 'act1',
  sq_sybaris_dream: 'act1',
  sq_stars: 'act1',
  sq_sick_pilgrim: 'act1',
  sq_dionysus_festival: 'act1',
  sq_poet_challenge: 'act1',
  sq_mountain_tomb: 'act1',
  // Act I — Delphi (Existing)
  road_to_delphi: 'act1',
  village_rest: 'act1',
  village_info: 'act1',
  the_storm: 'act1',
  storm_survived: 'act1',
  storm_death: 'act1',
  approach_delphi: 'act1',
  arrival_delphi_storm: 'act1',
  temple_calm: 'act1',
  temple_rush: 'act1',
  the_omphalos: 'act1',
  priests_question: 'act1',
  the_pythia: 'act1',
  after_pythia: 'act1',
  the_stadium: 'act1',
  after_race: 'act1',
  friendship: 'act1',
  the_bones: 'act1',
  choose_east: 'act1',
  choose_west: 'act1',
  choose_corinth: 'act1',
  act1_end: 'act1',
  // Act II — The Western Sea
  act2_title: 'act2',
  corinth_arrival: 'act2',
  corinth_dionysius: 'act2',
  the_voyage: 'act2',
  sea_battle_choice: 'act2',
  sea_storm_act2: 'act2',
  sea_survived_act2: 'act2',
  sea_death: 'act2',
  sicily_shores: 'act2',
  himera_gates: 'act2',
  tanakil_feast: 'act2',
  himera_winter: 'act2',
  kydippe_trap: 'act2',
  road_to_eryx: 'act2',
  temple_eryx: 'act2',
  goddess_sleep: 'act2',
  arsinoe_night: 'act2',
  arsinoe_day: 'act2',
  eryx_death: 'act2',
  arsinoe_saved: 'act2',
  flight_from_eryx: 'act2',
  act2_end: 'act2',
};

function isSceneEnabled(sceneId) {
  const act = SCENE_ACTS[sceneId];
  if (!act) return true;
  return ACT_CONFIG[act] === true;
}

const SCENE_IMAGES = {
  title: SCENE_IMAGES_DATA.title,
  road_to_delphi: SCENE_IMAGES_DATA.road_to_delphi,
  the_storm: SCENE_IMAGES_DATA.storm,
  storm_survived: SCENE_IMAGES_DATA.storm_survived,
  the_pythia: SCENE_IMAGES_DATA.pythia,
  corinth_arrival: SCENE_IMAGES_DATA.corinth,
  corinth_dionysius: SCENE_IMAGES_DATA.corinth,
  the_voyage: SCENE_IMAGES_DATA.crossing,
  phoenician_waters: SCENE_IMAGES_DATA.crossing,
  sea_battle_choice: SCENE_IMAGES_DATA.crossing,
  the_crossing: SCENE_IMAGES_DATA.crossing,
  sea_storm_act2: SCENE_IMAGES_DATA.storm,
  sicily_shores: SCENE_IMAGES_DATA.sicily,
  himera_gates: SCENE_IMAGES_DATA.sicily,
  road_to_eryx: SCENE_IMAGES_DATA.temple_eryx,
  temple_eryx: SCENE_IMAGES_DATA.temple_eryx,
  goddess_sleep: SCENE_IMAGES_DATA.temple_eryx,
  arsinoe_night: SCENE_IMAGES_DATA.arsinoe,
  arsinoe_day: SCENE_IMAGES_DATA.arsinoe,
  arsinoe_saved: SCENE_IMAGES_DATA.arsinoe,
  storm_death: SCENE_IMAGES_DATA.death,
  sea_death: SCENE_IMAGES_DATA.death,
  eryx_death: SCENE_IMAGES_DATA.death,
  act1_end: SCENE_IMAGES_DATA.act1_end,
  after_pythia: SCENE_IMAGES_DATA.after_pythia,
  after_race: SCENE_IMAGES_DATA.after_race,
  approach_delphi: SCENE_IMAGES_DATA.approach_delphi,
  arrival_delphi_storm: SCENE_IMAGES_DATA.arrival_delphi_storm,
  castalia_spring: SCENE_IMAGES_DATA.castalia_spring,
  choose_corinth: SCENE_IMAGES_DATA.choose_corinth,
  choose_east: SCENE_IMAGES_DATA.choose_east,
  choose_west: SCENE_IMAGES_DATA.choose_west,
  coast_decision: SCENE_IMAGES_DATA.coast_decision,
  competing_letters: SCENE_IMAGES_DATA.competing_letters,
  departure_preparations: SCENE_IMAGES_DATA.departure_preparations,
  divine_recognition: SCENE_IMAGES_DATA.divine_recognition,
  dorieus_oracle: SCENE_IMAGES_DATA.dorieus_oracle,
  dorieus_story: SCENE_IMAGES_DATA.dorieus_story,
  dove_feather_omen: SCENE_IMAGES_DATA.dove_feather_omen,
  fasting_begins: SCENE_IMAGES_DATA.fasting_begins,
  friendship: SCENE_IMAGES_DATA.friendship,
  pilgrims_fire: SCENE_IMAGES_DATA.pilgrims_fire,
  priests_interrogation_1: SCENE_IMAGES_DATA.priests_interrogation_1,
  priests_interrogation_2: SCENE_IMAGES_DATA.priests_interrogation_2,
  priests_question: SCENE_IMAGES_DATA.priests_question,
  pythia_aftermath: SCENE_IMAGES_DATA.pythia_aftermath,
  sardis_confession: SCENE_IMAGES_DATA.sardis_confession,
  sq_anteroom: SCENE_IMAGES_DATA.sq_anteroom,
  sq_black_cliff: SCENE_IMAGES_DATA.sq_black_cliff,
  sq_carving_names: SCENE_IMAGES_DATA.sq_carving_names,
  sq_egyptian_merchant: SCENE_IMAGES_DATA.sq_egyptian_merchant,
  sq_ephesus_flashback: SCENE_IMAGES_DATA.sq_ephesus_flashback,
  sq_former_pythia: SCENE_IMAGES_DATA.sq_former_pythia,
  sq_gymnasium: SCENE_IMAGES_DATA.sq_gymnasium,
  sq_hecate_priestess: SCENE_IMAGES_DATA.sq_hecate_priestess,
  sq_moonlight_delphi: SCENE_IMAGES_DATA.sq_moonlight_delphi,
  sq_night_vigil: SCENE_IMAGES_DATA.sq_night_vigil,
  sq_phoenician_sailor: SCENE_IMAGES_DATA.sq_phoenician_sailor,
  sq_priests_council: SCENE_IMAGES_DATA.sq_priests_council,
  sq_pythia_attendant: SCENE_IMAGES_DATA.sq_pythia_attendant,
  sq_sacred_way_monuments: SCENE_IMAGES_DATA.sq_sacred_way_monuments,
  sq_souvenir_seller: SCENE_IMAGES_DATA.sq_souvenir_seller,
  sq_spartan_delegation: SCENE_IMAGES_DATA.sq_spartan_delegation,
  sq_theater: SCENE_IMAGES_DATA.sq_theater,
  sq_treasury_visit: SCENE_IMAGES_DATA.sq_treasury_visit,
  storm_vision: SCENE_IMAGES_DATA.storm_vision,
  temple_calm: SCENE_IMAGES_DATA.temple_calm,
  temple_rush: SCENE_IMAGES_DATA.temple_rush,
  the_bones: SCENE_IMAGES_DATA.the_bones,
  the_omphalos: SCENE_IMAGES_DATA.the_omphalos,
  the_road_south: SCENE_IMAGES_DATA.the_road_south,
  the_stadium: SCENE_IMAGES_DATA.the_stadium,
  turms_confession: SCENE_IMAGES_DATA.turms_confession,
  village_info: SCENE_IMAGES_DATA.village_info,
  village_rest: SCENE_IMAGES_DATA.village_rest,
  washing_by_brook: SCENE_IMAGES_DATA.washing_by_brook,
  winter_in_delphi: SCENE_IMAGES_DATA.winter_in_delphi,
};

const SCENE_SOUNDS = {
  title: SCENE_SOUNDS_DATA.title,
  road_to_delphi: SCENE_SOUNDS_DATA.title,
  the_storm: SCENE_SOUNDS_DATA.storm,
  storm_survived: SCENE_SOUNDS_DATA.storm,
  the_pythia: SCENE_SOUNDS_DATA.oracle,
  corinth_arrival: SCENE_SOUNDS_DATA.sea,
  corinth_dionysius: SCENE_SOUNDS_DATA.sea,
  the_voyage: SCENE_SOUNDS_DATA.sea,
  phoenician_waters: SCENE_SOUNDS_DATA.sea,
  sea_battle_choice: SCENE_SOUNDS_DATA.sea,
  the_crossing: SCENE_SOUNDS_DATA.sea,
  sea_storm_act2: SCENE_SOUNDS_DATA.storm,
  sicily_shores: SCENE_SOUNDS_DATA.sea,
  himera_gates: SCENE_SOUNDS_DATA.sea,
  road_to_eryx: SCENE_SOUNDS_DATA.temple,
  temple_eryx: SCENE_SOUNDS_DATA.temple,
  goddess_sleep: SCENE_SOUNDS_DATA.temple,
  arsinoe_night: SCENE_SOUNDS_DATA.temple,
  arsinoe_day: SCENE_SOUNDS_DATA.temple,
  arsinoe_saved: SCENE_SOUNDS_DATA.temple,
  storm_death: SCENE_SOUNDS_DATA.death,
  sea_death: SCENE_SOUNDS_DATA.death,
  eryx_death: SCENE_SOUNDS_DATA.death,
};

const CHECKPOINT_SCENES = {
  'road_to_delphi': 'Act I — The Road to Delphi',
  'act2_title': 'Act II — The Western Sea',
  'corinth_arrival': 'Corinth',
  'sicily_shores': 'Sicily',
  'himera_gates': 'Himera',
  'road_to_eryx': 'The Road to Eryx',
  'temple_eryx': 'The Temple of Aphrodite'
};

// === SCENES ===
const SCENES = {

  // ---- TITLE ----
  title: {
    title: '',
    text: [
      '<div id="title-screen"><h1>THE ETRUSCAN</h1>' +
      '<div class="subtitle">A Solo Adventure</div>' +
      '<div class="act">Act I — Delphi</div>' +
      '<div class="intro">Inspired by the novel by Mika Waltari<br><br>' +
      'The Mediterranean, 5th century BCE. Gods walk among mortals, oracles speak in riddles, and the great civilizations of Greece, Carthage and Etruria collide.<br><br>' +
      '<em>Collect pebbles at each turning point. Follow the omens — or defy them. The stones will remember what you choose.</em></div></div>'
    ],
    choices: [
      { text: 'Choose your path... (Start Game)', action: () => renderScene('character_select') },
      { text: 'About this game', action: () => renderScene('about') }
    ]
  },

  // ---- ABOUT ----
  about: {
    title: 'About This Game',
    text: [
      '<div style="font-size:15px; line-height:1.8; color:#998877;">' +

      '<div style="font-family:Cinzel,serif; color:var(--gold); font-size:16px; letter-spacing:2px; margin-bottom:0.8rem;">THE SOURCE</div>' +
      '<span style="color:var(--warm);">The Etruscan</span> (<em>Turms, kuolematon</em>, 1955) is a historical novel by Finnish author <span style="color:var(--warm);">Mika Waltari</span>, best known for <em>The Egyptian</em>. Set in the 5th century BCE, it follows Turms — a man born of a thunderbolt outside Ephesus — as he travels from the Greek world to Sicily and finally to the mysterious cities of the Etruscans, discovering his true identity along the way. The novel is a meditation on fate, identity, and the collision of civilizations at the dawn of the classical age.' +
      '<br><br>' +
      'The English translation by Lily Leino (1957) is significantly abridged — 381 pages versus the Finnish original\'s 681 — which means this game draws on both the translated text and reconstructed elements from the broader narrative.' +

      '<div style="font-family:Cinzel,serif; color:var(--gold); font-size:16px; letter-spacing:2px; margin:1.5rem 0 0.8rem;">THE GAME</div>' +
      'This is a <span style="color:var(--warm);">solo text adventure</span> in the tradition of gamebooks like <em>Fighting Fantasy</em>, <em>Lone Wolf</em>, and the German <em>Das Schwarze Auge</em> solo adventures. Inspired by the novel\'s world and characters, the story adapts to your choices — some paths echo the book, others diverge into what might have been.' +
      '<br><br>' +
      'Four <span style="color:var(--warm);">character archetypes</span> offer different perspectives on the same events. The Storm-Born follows Turms\' original path; the Warrior sees through Dorieus\' eyes; the Seer adds a mystical dimension; the Seafarer brings the pirate captain\'s pragmatism.' +

      '<div style="font-family:Cinzel,serif; color:var(--gold); font-size:16px; letter-spacing:2px; margin:1.5rem 0 0.8rem;">THE MECHANICS</div>' +
      '<span style="color:var(--sage);">Attributes</span> — Spirit, Body, and Fate — shift based on your decisions. When a dice check occurs, you roll 2d6 and must roll equal to or under your attribute to succeed. Some failures are merely narrative; others are fatal.' +
      '<br><br>' +
      '<span style="color:var(--gold);">Pebbles</span> are your story\'s memory. At turning points you collect a stone with an inscription — not as reward, but as record. At the end, your pebbles tell the story of who you became.' +
      '<br><br>' +
      '<span style="color:var(--gold);">Omen choices</span> (marked ✦) follow the signs the gods have laid before you. <span style="color:var(--terra);">Defy choices</span> (marked ⚡) go against them. Neither is correct — but the balance shapes your ending.' +
      '<br><br>' +
      '<span style="color:var(--sage);">Checkpoints</span> save automatically at key moments. If you die, you can reload your last checkpoint instead of starting over. Your save persists in the browser — close the tab and return tomorrow.' +

      '<div style="font-family:Cinzel,serif; color:var(--gold); font-size:16px; letter-spacing:2px; margin:1.5rem 0 0.8rem;">CREDITS</div>' +
      'Novel: <span style="color:var(--warm);">Mika Waltari</span> (1908–1979)<br>' +
      'English translation: <span style="color:var(--warm);">Lily Leino</span> (1957)<br>' +
      'Game design & development: Created with <span style="color:var(--warm);">Claude</span> (Anthropic), prompted by a human who wanted to see if every novel could become an adventure.<br><br>' +
      '<em style="color:#665544;">Illustrations generated with AI (Flux). No backend, no server, no tracking. Just HTML, CSS, JavaScript, and a good story.</em>' +

      '<div style="font-family:Cinzel,serif; color:var(--gold); font-size:16px; letter-spacing:2px; margin:1.5rem 0 0.8rem;">CONTROLS</div>' +
      'Navigate with <span style="color:var(--sage);">mouse click</span> or <span style="color:var(--sage);">Tab</span> and <span style="color:var(--sage);">Enter</span>. Use the <span style="color:var(--sage);">☰ menu</span> on mobile to access stats, inventory, and encyclopedia.' +

      '</div>'
    ],
    choices: [
      { text: 'Back', action: () => renderScene(state.currentScene || 'title') }
    ]
  },

  // ---- CHARACTER SELECT ----
  character_select: {
    title: 'Choose Your Archetype',
    text: () => {
      let html = '<div style="text-align:center; margin-bottom:0.5rem; font-size:15px; color:#998877;">Each archetype experiences the story differently. Your gift aids you; your weakness tests you.</div>';
      html += '<div class="class-grid">';
      for (const [id, cls] of Object.entries(CLASSES)) {
        const spiritStyle = cls.spirit >= 7 ? 'high' : cls.spirit <= 4 ? 'low' : 'mid';
        const bodyStyle = cls.body >= 7 ? 'high' : cls.body <= 4 ? 'low' : 'mid';
        const fateStyle = cls.fate >= 6 ? 'high' : cls.fate <= 3 ? 'low' : 'mid';
        html += `<div class="class-card" onclick="selectClass('${id}')">` +
          `<div class="class-name">${cls.name}</div>` +
          `<div class="class-epithet">${cls.epithet}</div>` +
          `<div class="class-stats">` +
            `<span class="${spiritStyle}">Spirit ${cls.spirit}</span>` +
            `<span class="${bodyStyle}">Body ${cls.body}</span>` +
            `<span class="${fateStyle}">Fate ${cls.fate}</span>` +
          `</div>` +
          `<div class="class-gift">✦ ${cls.gift}: ${cls.giftDesc}</div>` +
          `<div class="class-weakness">⚡ ${cls.weakness}: ${cls.weakDesc}</div>` +
          `<div class="class-desc">${cls.desc}</div>` +
        `</div>`;
      }
      html += '</div>';
      html += '<div class="tutorial-box">' +
        '<strong>How to Play</strong><br><br>' +
        '<span class="tut-icon">⬤</span> <strong>Pebbles</strong> are your story\'s memory. At key turning points, you collect a stone with an inscription — not as a reward, but as a record. At the end, your pebbles tell the story of who you became. Different choices yield different stones.<br><br>' +
        '<span class="tut-icon">⚀</span> <strong>Attributes</strong> — Spirit (inner power), Body (physical strength), Fate (destiny\'s pull) — shift based on your decisions. You\'ll see a notification explaining each change. When a dice check occurs, you roll 2d6 and must roll equal to or under your attribute to succeed.<br><br>' +
        '<span class="tut-icon">✦</span> <strong>Omen choices</strong> (marked with ✦) follow the signs the gods have laid before you. <strong>Defy choices</strong> (marked with ⚡) go against them. Neither is "correct" — but the balance shapes your ending.' +
        '</div>';
      return [html];
    },
    choices: []  // No button choices — clicking cards triggers selectClass()
  },

  // ---- SCENE 1: The Road ----
  road_to_delphi: {
    title: 'The Road to Delphi',
    text: [
      'The road climbs through gloomy mountains. Behind you lies the coast and the Athenian ship that carried you from Ephesus, where the people tried to stone you to death for the second time.',
      'Lightning flashes in the distant west above the mountain peaks. As you reach a small village, the locals step into your path.',
      '<span class="italic">"Pilgrim, do not continue — a storm is coming. Landslides may close the road. Stay with us tonight. We have warm food, comfortable beds..."</span>',
      'You study them. They live off pilgrims, stopping travelers coming and going under many pretexts. But the storm is real — you can feel the air cooling, see the clouds rolling down the mountains.'
    ],
    onEnter: () => setOmen('Storm clouds gather over Delphi. The villagers urge caution.'),
    choices: [
      {
        text: 'Press on through the storm — guilt drives you forward',
        type: 'defy',
        action: () => { state.omensDefied++; updateStat('fate', 1, 'Defied the storm warning'); renderScene('the_storm'); }
      },
      {
        text: 'Wait for the storm to pass — heed the warning',
        type: 'omen',
        action: () => { state.omensFollowed++; renderScene('village_rest'); }
      },
      {
        text: 'Pay the villagers for information about the road ahead',
        action: () => { updateStat('spirit', 1, 'Sought knowledge before acting'); renderScene('village_info'); }
      },
      {
        text: 'Close your eyes — the memory of Ephesus rises unbidden',
        action: () => renderScene('sq_ephesus_flashback')
      },
      {
        text: 'An old woman by the roadside catches your eye — she sells carved tokens',
        action: () => renderScene('sq_souvenir_seller')
      },
      {
        text: 'A shepherd watches you from a rocky outcrop — he seems to know this mountain',
        action: () => renderScene('sq_shepherd')
      }
    ]
  },

  village_rest: {
    title: 'A Night Among Strangers',
    text: [
      'You accept their hospitality. The food is simple but warm, the bed a welcome relief after days at sea. Around the fire, you overhear other pilgrims whispering about the oracle.',
      '<span class="italic">"She has been troubled lately," says an old woman. "The Pythia sees things that frighten even the priests. Strange signs — a new age is coming, they say."</span>',
      'You sleep fitfully. In your dreams, the black dog of the goddess Hecate circles your bed, not barking but watching with knowing eyes. When you wake, the storm has passed. The road to Delphi gleams in morning light.',
    ],
    onEnter: () => { updateStat('body', 1, 'A night of rest restored your strength'); },
    choices: [
      { text: 'Join the other pilgrims by the fire before sleeping', action: () => renderScene('pilgrims_fire') },
      { text: 'Set out at dawn, rested and ready', action: () => renderScene('approach_delphi') }
    ]
  },

  village_info: {
    title: 'The Merchant\'s Warning',
    text: [
      'An old merchant eyes your purse and speaks freely. "The road is treacherous in storm, but passable for a strong man. More dangerous than the mountain is what awaits at the end."',
      '"The Pythia — the oracle-woman — she has been having fits even outside the sacred chamber. Last week she screamed at a potter and told him the name of his dead mother. The priests are nervous."',
      '<span class="italic">"If I were you, stranger, I would approach slowly. Whatever guilt you carry, the oracle already knows."</span>',
      'His words settle into you like cold water. You leave a silver coin and step back onto the road.'
    ],
    choices: [
      {
        text: 'Walk into the storm — you will not be slowed by fear',
        type: 'defy',
        action: () => { state.omensDefied++; updateStat('fate', 1, 'Defied the merchant\'s warning'); renderScene('the_storm'); }
      },
      {
        text: 'Wait until morning — join the pilgrims by the fire',
        type: 'omen',
        action: () => { state.omensFollowed++; updateStat('body', 1, 'Patience preserved your strength'); renderScene('pilgrims_fire'); }
      }
    ]
  },

  // ---- M01: PILGRIMS BY FIRELIGHT ----
  pilgrims_fire: {
    title: 'Pilgrims by Firelight',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Night falls over the mountain village. Around a shared fire, pilgrims from across the Greek world trade rumors about the oracle. A nervous Athenian whispers that the Pythia has been having unsanctioned visions. An Egyptian merchant with hooded eyes speaks of temples older than Apollo\'s. A Phoenician sailor stares into the flames and says nothing.',
        'The fire crackles, and for one moment every face is lit by the same uncertain glow. You are all strangers. You are all seeking answers.'
      ];
      if (cls === 'seer') {
        lines.push('The fire whispers to you. Not in words — in flickers. You see faces in the flames that are not reflections of anyone present. The other pilgrims do not notice.');
      } else if (cls === 'warrior') {
        lines.push('You sit apart from the group, studying them as a soldier studies terrain. Pilgrims are not warriors — they carry fear instead of weapons. But fear, too, is a kind of armor.');
      } else if (cls === 'seafarer') {
        lines.push('The Phoenician catches your eye. He has the weathered look of a man who has sailed beyond the charts. You recognize a fellow traveler — someone who measures distance in days at sea, not stadia on land.');
      } else {
        lines.push('Something in the fire pulls at you. Not warmth — something deeper. The flames dance in patterns that feel almost familiar, almost like a language you once knew.');
      }
      return lines;
    },
    onEnter: () => {
      state.flags.heard_pilgrims = true;
      unlockEncyclopedia('pilgrims_delphi');
    },
    choices: [
      {
        text: 'Listen to the Egyptian\'s tale of ancient oracles',
        action: () => { updateStat('spirit', 1, 'Ancient wisdom broadened your understanding'); renderScene('sq_egyptian_merchant'); }
      },
      {
        text: 'Step outside into the moonlight — you sense something watching',
        action: () => renderScene('sq_hecate_priestess')
      },
      {
        text: 'Sleep and conserve your strength for tomorrow',
        action: () => { updateStat('body', 1, 'A full night\'s rest restored your strength'); renderScene('approach_delphi'); }
      }
    ]
  },

  // ---- M02: VISION IN THE STORM ----
  storm_vision: {
    title: 'Vision in the Storm',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'As the ecstasy of the storm dance fades, a vision seizes you. A winged figure — female, radiant, neither human nor fully divine — hovers at the edge of sight. She speaks without words: <span class="omen-text">"Not yet. But some day you will know me."</span>',
        'The vision lasts only a heartbeat, but it leaves your limbs trembling and a strange certainty lodged beneath your ribs. You are not alone. You have never been alone.'
      ];
      if (cls === 'seer') {
        lines.push('You see her clearly — more clearly than the mountain, more clearly than your own hands. She is your guardian spirit, the winged being that has watched over you since before memory. You have always known she was there. This is the first time she has let you look.');
      } else if (cls === 'warrior') {
        lines.push('She carries a shield — or no, it is a wing. For a moment you see a warrior-goddess with eyes that burn like bronze in a forge. Then she is gone, and you are left with the echo of something ancient and fierce.');
      } else if (cls === 'seafarer') {
        lines.push('She walks on the storm-winds like waves — effortless, her wings spread like sails. A figure made for the sky the way you were made for the sea. She looks at you with recognition, as though she has been following your wake for years.');
      } else {
        lines.push('The winged being speaks your name — not Turms, but something older, something that vibrates in your chest like the string of a lyre. You cannot hold the sound. It slips away like water through fingers.');
      }
      return lines;
    },
    onEnter: () => {
      state.flags.saw_guardian_spirit = true;
      unlockEncyclopedia('guardian_spirits');
    },
    choices: [
      {
        text: 'Reach out to touch the vision — demand to know her name',
        roll: {
          label: 'Touch the Guardian Spirit',
          stat: 'spirit',
          success: () => {
            state.flags.touched_guardian = true;
            updateStat('spirit', 2, 'Your fingers brushed the edge of the divine');
            addPebble('white', 'A winged shadow in the storm');
            renderScene('arrival_delphi_storm');
          },
          failure: () => {
            updateStat('spirit', 1, 'The vision faded, but the certainty remains');
            addPebble('white', 'A winged shadow in the storm');
            renderScene('arrival_delphi_storm');
          }
        }
      },
      {
        text: 'Accept the mystery and continue walking',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          updateStat('fate', 1, 'You trusted the vision without demanding answers');
          addPebble('white', 'A winged shadow in the storm');
          renderScene('arrival_delphi_storm');
        }
      },
      {
        text: '"I am no one\'s puppet" — reject the vision',
        type: 'defy',
        action: () => {
          state.omensDefied++;
          updateStat('body', 1, 'You chose your own strength over divine whispers');
          renderScene('arrival_delphi_storm');
        }
      }
    ]
  },

  // ---- M03: THE CASTALIAN SPRING ----
  castalia_spring: {
    title: 'The Castalian Spring',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Before entering the sacred precinct, you must purify yourself at the Castalian Spring. The water pours from a cleft in the rock face between the twin Phaedriades cliffs, ice-cold and clear. Other pilgrims wash quietly, whispering prayers.',
        'The water stings your skin. As you submerge your hands, the guilt of Sardis seems to leach from your fingertips into the current. For a moment, you feel transparent — as though the water can see through you.'
      ];
      if (cls === 'seer') {
        lines.push('In the water\'s surface you see faces — not reflections, but visions. A woman with shifting features. A Spartan youth with a javelin. A dark-haired girl on a rooftop garden, watching ships. Future companions? The water does not explain.');
      } else if (cls === 'seafarer') {
        lines.push('"All water is the same goddess," you murmur, and a pilgrim beside you looks up sharply. But it is true — the spring, the sea, the rain that nearly killed you on the mountain. All one current, all one force.');
      } else if (cls === 'warrior') {
        lines.push('You perform the ritual with military precision — hands, face, feet, each movement deliberate. A soldier does not waste motion, even in prayer.');
      } else {
        lines.push('The water knows you. It flows over your lightning scar and the skin tingles — not with pain but with recognition. Whatever lives in this spring has met you before, in another form, in another age.');
      }
      return lines;
    },
    onEnter: () => {
      unlockEncyclopedia('castalian_spring');
    },
    choices: [
      {
        text: 'Perform the full ritual: drink, wash face, hands, and feet',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          state.flags.purified_castalia = true;
          updateStat('spirit', 1, 'The ritual purification opened your mind');
          renderScene('temple_calm');
        }
      },
      {
        text: 'Splash quickly and move on — the temple awaits',
        action: () => { state.flags.purified_castalia = true; renderScene('temple_calm'); }
      },
      {
        text: 'Notice a group of Spartans in red cloaks near the spring',
        action: () => { state.flags.purified_castalia = true; renderScene('sq_spartan_delegation'); }
      },
      {
        text: 'Walk the Sacred Way and study the monuments',
        action: () => { state.flags.purified_castalia = true; renderScene('sq_sacred_way_monuments'); }
      },
      {
        text: 'Climb toward the black cliff above the sanctuary',
        action: () => { state.flags.purified_castalia = true; renderScene('sq_black_cliff'); }
      },
      ...(state.flags.danced_in_storm ? [{
        text: '"The storm already cleansed me" — refuse to purify',
        type: 'defy',
        action: () => {
          state.omensDefied++;
          state.flags.refused_purification = true;
          renderScene('temple_rush');
        }
      }] : [])
    ]
  },

  // ---- S03: EGYPTIAN MERCHANT'S TALE ----
  sq_egyptian_merchant: {
    title: 'The Egyptian Merchant\'s Tale',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The Egyptian merchant pulls you aside from the fire. He has traveled farther than anyone here — from the temples of Thebes to the oracle at Siwa.',
        '<span class="italic">"Your oracle is young,"</span> he says with a thin smile. <span class="italic">"In Egypt, the gods have spoken for three thousand years. Through the movement of sacred boats, through the nodding of statues, through dreams induced by temple sleep."</span>',
        'He studies you over the rim of his wine cup. <span class="italic">"All oracles say the same thing,"</span> he concludes. <span class="italic">"They say what the seeker already knows."</span>'
      ];
      if (cls === 'seer') lines.push('His words strike you like a bell. What the seeker already knows. What do <span class="italic">you</span> know, beneath the guilt and the questions? The answer frightens you more than the storm.');
      else if (cls === 'seafarer') lines.push('You ask about the routes to Egypt. He laughs. "You sailors — always thinking in distances. The journey to wisdom is not measured in stadia."');
      return lines;
    },
    onEnter: () => {
      state.flags.met_egyptian = true;
      unlockEncyclopedia('oracles_egypt');
    },
    choices: [
      {
        text: '"Have you met people from the west — the Etruscans?"',
        action: () => {
          updateStat('spirit', 1, 'Ancient wisdom broadened your understanding');
          renderScene('approach_delphi');
        }
      },
      {
        text: 'Challenge his skepticism — "Then why do men still travel to oracles?"',
        action: () => {
          updateStat('fate', 1, 'You held your ground against cynicism');
          renderScene('approach_delphi');
        }
      },
      {
        text: 'Ask about temple sleep — could the gods speak through dreams?',
        action: () => {
          unlockEncyclopedia('temple_incubation');
          updateStat('spirit', 1, 'New knowledge settled into you');
          renderScene('approach_delphi');
        }
      }
    ]
  },

  // ---- S04: PRIESTESS OF HECATE ----
  sq_hecate_priestess: {
    title: 'The Priestess of Hecate',
    text: () => {
      const cls = state.charClass;
      const hadDream = state.flags.village_rest_taken;
      const lines = [
        'Outside in the moonlight, you encounter a woman dressed in black, her face half-veiled. She stands at the crossroads where three paths meet — the road to Delphi, the road back to the coast, and a goat track disappearing into the mountain.',
        'She recognizes something in you immediately.',
        '<span class="omen-text">"You have been touched,"</span> she says. <span class="omen-text">"Not by Apollo — he is too bright for whatever lives in you. By someone older. Darker. More loving."</span>'
      ];
      if (cls === 'seer') lines.push('You see her aura — dark, but not evil. The darkness of deep water, of rich earth, of the space between stars. She is a conduit for powers older than the Olympians.');
      else if (cls === 'storm_born') lines.push('The lightning scar on your body pulses faintly in her presence. She notices. Her eyes widen behind the veil.');
      lines.push('She offers to read your fate by torchlight at the crossroads.');
      return lines;
    },
    onEnter: () => {
      state.flags.met_hecate_priestess = true;
      unlockEncyclopedia('hecate');
    },
    choices: [
      {
        text: 'Accept the reading',
        roll: {
          label: 'Hecate\'s Reading',
          stat: 'fate',
          success: () => {
            state.flags.hecate_blessing = true;
            updateStat('fate', 1, 'Hecate\'s priestess saw a thread of destiny in your palm');
            awardItem('hecate_torch');
            renderScene('approach_delphi');
          },
          failure: () => {
            updateStat('spirit', -1, 'The vision was disturbing — faces in the dark, screaming');
            awardItem('hecate_torch');
            renderScene('approach_delphi');
          }
        }
      },
      {
        text: 'Decline respectfully — "I seek Apollo\'s judgment, not Hecate\'s"',
        action: () => {
          updateStat('fate', 1, 'You stayed true to your purpose');
          renderScene('approach_delphi');
        }
      },
      {
        text: '"I dreamed of a black dog. What does it mean?"',
        action: () => {
          updateStat('spirit', 1, 'The priestess smiled — "The dog guards the threshold. You are closer to crossing than you know"');
          awardItem('hecate_torch');
          renderScene('approach_delphi');
        }
      }
    ]
  },

  // ---- S01: THE EPHESUS FLASHBACK ----
  sq_ephesus_flashback: {
    title: 'The Ephesus Flashback',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Before the road, there was Ephesus. The memory rises like bile — the marketplace, the midday heat, the faces twisted with rage. You were standing near the temple precinct when the first stone struck your shoulder.',
        'You remember the crowd — fishermen, potters, a woman with a child on her hip screaming that you were cursed. The Athenian soldiers pushed through, dragging you toward the harbor. Behind you, the stink of burning thatch from the roofs you had helped set alight at Sardis still clung to the city\'s memory.',
        'Why did they hate you? Because you came back. Because you survived what others did not. Because the temple of Cybele burned and someone had to pay.'
      ];
      if (cls === 'warrior') lines.push('You remember the stones as a soldier remembers arrows — trajectory, weight, the sound of impact on flesh. You did not raise your hands. A warrior does not flinch from punishment he has earned.');
      else if (cls === 'seer') lines.push('Even then, you saw it — the pattern behind the fury. They were afraid, not angry. Afraid of what you represented: that a man could burn a temple and walk away alive. That the gods had not struck you down.');
      else if (cls === 'seafarer') lines.push('You remember the harbor — the Athenian trireme riding low, the gangplank slick with spray. The sea was your escape, as it always is. The crowd stopped at the waterline, as though an invisible wall separated land-rage from sea-mercy.');
      else lines.push('The stones. The voices. The taste of blood in your mouth. And beneath it all, a strange calm — as though something inside you had already accepted this exile. Had been waiting for it.');
      return lines;
    },
    onEnter: () => {
      state.flags.ephesus_remembered = true;
      unlockEncyclopedia('ephesus');
    },
    choices: [
      {
        text: 'Remember every detail — the faces, the words, the pain',
        action: () => {
          updateStat('spirit', 1, 'Memory is a wound that teaches');
          renderScene('road_to_delphi');
        }
      },
      {
        text: 'Push the memory away — you are not that man anymore',
        action: () => {
          updateStat('body', 1, 'You walled off the past with sheer will');
          renderScene('road_to_delphi');
        }
      },
      {
        text: 'Examine what you carry from Ephesus — the few possessions in your pack',
        action: () => {
          state.flags.ephesus_inventory_checked = true;
          renderScene('road_to_delphi');
        }
      }
    ]
  },

  // ---- S02: THE SOUVENIR SELLER ----
  sq_souvenir_seller: {
    title: 'The Souvenir Seller',
    text: [
      'An old woman sits by the roadside on a woven mat, her wares spread before her: carved wooden tokens, bone amulets threaded on gut, clay figurines of Apollo with chipped noses. The usual pilgrim-trade — sacred enough to feel meaningful, cheap enough to afford.',
      'But one item catches your eye. Half-buried under a pile of clay doves, a bronze ring stamped with a bee. The bee of Ephesus — the symbol of Artemis\'s temple, the city you fled.',
      '"You have a sharp eye, pilgrim," the old woman says, watching you. "That one came from a sailor who needed wine more than memories. It is real bronze, not pot-metal. Ephesian work."',
      'She names a price — modest, but not nothing. The ring gleams dully in the mountain light.'
    ],
    choices: [
      {
        text: 'Buy the ring — a piece of the home you can never return to',
        action: () => {
          state.flags.bought_bee_ring = true;
          updateStat('fate', -1, 'The ring binds you to your past');
          awardItem('ephesian_ring');
          renderScene('village_rest');
        }
      },
      {
        text: 'Haggle — offer half her price and a story from the east',
        roll: {
          label: 'Haggle with the Seller',
          stat: 'spirit',
          dc: 5,
          success: () => {
            state.flags.bought_bee_ring = true;
            awardItem('ephesian_ring');
            renderScene('village_rest');
          },
          failure: () => {
            renderScene('village_rest');
          }
        }
      },
      {
        text: 'Walk away — you carry enough of Ephesus already',
        action: () => renderScene('village_rest')
      }
    ]
  },

  // ---- S05: THE SPARTAN DELEGATION ----
  sq_spartan_delegation: {
    title: 'The Spartan Delegation',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Near the spring, a knot of men in red cloaks stand apart from the other pilgrims. Spartans — you recognize them by their bearing before you see the lambda on their shields. Five warriors and an older man who carries no weapon but commands more attention than the rest.',
        'They have come to consult the oracle. About what, you cannot say, but their faces are grim. One of them — young, with the build of a wrestler and a scar across his jaw — watches the spring with an expression that might be reverence or contempt.',
        'The Spartans notice you watching. The older man\'s gaze is measured, appraising.'
      ];
      if (cls === 'warrior') {
        lines.push('The young Spartan straightens when he sees you. He recognizes a fellow soldier — the way you stand, the way your eyes scan for exits. He nods, once. A warrior\'s greeting.');
        lines.push('<span class="italic">"You carry yourself like a man who has seen battle,"</span> the older Spartan says. <span class="italic">"From where do you come, soldier?"</span>');
      } else {
        lines.push('The Spartans regard you with polite indifference — you are not a warrior, and therefore not worth their sustained attention. But the older man\'s eyes linger. He is reading you the way a general reads terrain.');
      }
      return lines;
    },
    onEnter: () => {
      state.flags.saw_spartans = true;
      unlockEncyclopedia('spartan_diplomacy');
    },
    choices: [
      {
        text: 'Approach and speak — mention the name Dorieus',
        action: () => {
          if (state.charClass === 'warrior') {
            state.flags.spartan_contact = true;
            updateStat('spirit', 1, 'The Spartans share stories of Dorieus — a prince who went west');
          }
          renderScene('temple_calm');
        }
      },
      {
        text: 'Observe from a distance — learn what you can without risking attention',
        action: () => {
          updateStat('fate', 1, 'Patience reveals what boldness cannot');
          renderScene('temple_calm');
        }
      },
      {
        text: 'Avoid them entirely — Spartans bring trouble',
        action: () => renderScene('temple_calm')
      }
    ]
  },

  // ---- S06: THE MONUMENTS OF THE SACRED WAY ----
  sq_sacred_way_monuments: {
    title: 'Monuments of the Sacred Way',
    text: [
      'You walk the Sacred Way slowly, reading the inscriptions carved into stone and bronze. The treasuries of the Greek city-states line the path — each one a small temple stuffed with offerings, each one a boast carved in marble.',
      'The Athenian Treasury gleams with fresh paint, its metopes depicting the labors of Heracles and the deeds of Theseus. Below the Marathon monument, an inscription reads: <span class="italic">"The Athenians to Apollo, from the spoils of the Medes."</span> Victory over Persia, rendered in stone.',
      'The Siphnian Treasury is older, its caryatid columns worn smooth by centuries of pilgrim hands. And everywhere, bronze statues — charioteers frozen mid-race, warriors mid-thrust, athletes mid-leap. Delphi is a museum of Greek ambition.',
      'You think of Sardis. The Persians built nothing like this. They built gardens. The difference says everything about the two civilizations — one builds monuments to victory, the other cultivates paradise.'
    ],
    onEnter: () => {
      unlockEncyclopedia('treasuries_delphi');
    },
    choices: [
      {
        text: 'Study the Marathon monument — the victory that changed everything',
        action: () => {
          updateStat('spirit', 1, 'The weight of history deepened your understanding');
          renderScene('temple_calm');
        }
      },
      {
        text: 'Examine the bronze charioteer — the artistry is breathtaking',
        action: () => {
          updateStat('fate', 1, 'Beauty has its own kind of truth');
          renderScene('temple_calm');
        }
      },
      {
        text: 'Read the victory inscriptions aloud — feel their power',
        action: () => {
          updateStat('body', 1, 'The words of victors kindled fire in your blood');
          renderScene('temple_calm');
        }
      }
    ]
  },

  // ---- S07: THE BLACK CLIFF ----
  sq_black_cliff: {
    title: 'The Black Cliff',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Above the sanctuary, a goat track leads to Hyampeia — the black cliff. You climb through scrub and loose stones until the path ends at a precipice that drops straight into the gorge below. The fall is hundreds of feet. Nothing survives it.',
        'Black birds wheel in the updraft. The wind moans through crevices in the rock face. This is where Delphi executes its condemned — sacrilegious criminals hurled from the cliff\'s edge, their bodies broken on the rocks below.',
        'This is where Epenides wants you to die. His letter was clear: <span class="italic">"let Turms be cast from the cliff."</span> You stand at the very edge and look down.'
      ];
      if (cls === 'warrior') lines.push('You have stood on battlements and siege towers. Heights do not frighten you. But the emptiness below this cliff is different — it is not a fall to be survived, but a judgment to be endured.');
      else if (cls === 'seer') lines.push('You see them — ghost-shapes tumbling through the air, mouths open in silent screams. The cliff remembers every body it has claimed. Their terror lingers like a stain on the wind.');
      else lines.push('The void pulls at you. Not with malice — with indifference. The cliff does not care whether you are guilty or innocent. It only cares that you fall.');
      return lines;
    },
    onEnter: () => {
      state.flags.visited_cliff = true;
      unlockEncyclopedia('hyampeia');
    },
    choices: [
      {
        text: 'Stand at the very edge — look death in the face',
        roll: {
          label: 'Face the Abyss',
          stat: 'body',
          dc: 7,
          success: () => {
            updateStat('body', 1, 'You stood where others tremble');
            updateStat('spirit', 1, 'Confronting death clarified your will to live');
            renderScene('temple_calm');
          },
          failure: () => {
            updateStat('body', -1, 'Vertigo seized you — you crawled back from the edge');
            renderScene('temple_calm');
          }
        }
      },
      {
        text: 'Pray to Apollo — ask for protection from this fate',
        action: () => {
          updateStat('spirit', 1, 'Prayer steadied your trembling hands');
          renderScene('temple_calm');
        }
      },
      {
        text: 'Turn away — you have seen enough',
        action: () => {
          updateStat('fate', 1, 'Wisdom is knowing when not to look');
          renderScene('temple_calm');
        }
      }
    ]
  },

  // ---- S08: THE ANTEROOM OF WISDOM ----
  sq_anteroom: {
    title: 'The Anteroom of Wisdom',
    text: [
      'While the four priests confer in low voices, you study the anteroom. The walls are covered with inscriptions — the maxims of the Seven Sages of Greece, carved into the stone in letters that have been retraced so many times each word sits in a groove worn smooth as a riverbed.',
      '<span class="omen-text">"Know thyself."</span> <span class="omen-text">"Nothing in excess."</span> <span class="omen-text">"Surety brings ruin."</span>',
      'In an alcove stands a golden figure of Homer — or the man the Greeks call Homer. Blind, bearded, his bronze lips parted as though about to speak. Beside him, the treasures of Croesus fill a wooden case: gold bowls, a lion of electrum, offerings from a king who asked the oracle whether he should make war on Persia. The oracle said a great empire would fall. It was his own.',
      'The irony is not lost on you. You, too, came here seeking clarity. You, too, may find an answer that destroys you.'
    ],
    onEnter: () => {
      unlockEncyclopedia('seven_sages');
      unlockEncyclopedia('croesus_delphi');
    },
    choices: [
      {
        text: 'Meditate on "Know thyself" — what does it mean for you?',
        action: () => {
          updateStat('spirit', 1, 'The oldest wisdom cut the deepest');
          renderScene('priests_question');
        }
      },
      {
        text: 'Study the treasures of Croesus — the gifts of a doomed king',
        action: () => {
          updateStat('fate', 1, 'Croesus\'s fate illuminated your own');
          renderScene('priests_question');
        }
      },
      {
        text: 'Examine the figure of Homer — the blind poet who saw everything',
        action: () => {
          updateStat('spirit', 1, 'Homer\'s empty eyes seemed to look through you');
          renderScene('priests_question');
        }
      }
    ]
  },

  // ---- DELPHI EXPLORATION HUB ----
  sq_delphi_exploration: {
    title: 'Exploring Delphi',
    text: [
      'Between the rituals of fasting and purification, you find hours of empty time. The servants do not watch you closely — they assume a pilgrim under the temple\'s authority will not stray far. But Delphi is a small city unto itself, and your legs ache for movement after days of sitting.',
      'The sacred precinct offers several diversions for a restless exile.'
    ],
    choices: [
      {
        text: 'Visit the Treasury of the Siphnians — you heard it holds unusual bronzes',
        action: () => renderScene('sq_treasury_visit')
      },
      {
        text: 'Find the Theater of Dionysus — you could use the solitude',
        action: () => renderScene('sq_theater')
      },
      {
        text: 'Seek out the Gymnasium — your body craves exertion',
        action: () => renderScene('sq_gymnasium')
      },
      {
        text: 'Return to the temple — the priests will summon you soon enough',
        action: () => renderScene('priests_interrogation_2')
      }
    ]
  },

  // ---- S09: TREASURY OF THE SIPHNIANS ----
  sq_treasury_visit: {
    title: 'Treasury of the Siphnians',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The Treasury of the Siphnians is cool and dim, its marble walls carved with scenes of the Trojan War. The Siphnians built it with the wealth of their silver mines — before the mines flooded and their prosperity vanished overnight. Another lesson in the impermanence of fortune.',
        'You move through the collection slowly. Gold bowls from Corinth. An ivory comb from Egypt. And then — half-hidden behind a row of painted vases — a small bronze figure that stops you cold.',
        'It is not Greek. The proportions are wrong — the torso longer, the smile wider, the eyes larger. The figure wears a conical cap and holds what might be a lyre or a divination tool. It is western. It is old. It is, unmistakably, Etruscan.'
      ];
      if (cls === 'seer') lines.push('The figure pulses with something — not warmth, not light, but presence. As though the bronze remembers the hands that shaped it. As though it has been waiting here, in this Greek treasury, for someone who would recognize it.');
      else if (cls === 'storm_born') lines.push('Your scar tingles. The bronze figure\'s smile is knowing — the expression of someone who understands what you are before you do.');
      else lines.push('You stare at the figure for a long time. It is the first Etruscan thing you have seen since — since when? Since before memory, perhaps. The recognition is not intellectual. It is physical, visceral, like hearing your mother tongue after years abroad.');
      return lines;
    },
    onEnter: () => {
      state.flags.saw_etruscan_figure = true;
    },
    choices: [
      {
        text: 'Ask the treasury keeper about the figure\'s origin',
        action: () => {
          updateStat('spirit', 1, 'The keeper knew little — "from the west, they say" — but the question itself felt important');
          renderScene('priests_interrogation_2');
        }
      },
      {
        text: 'Touch the bronze figure — feel if it responds',
        roll: {
          label: 'Touch the Etruscan Bronze',
          stat: 'fate',
          dc: 6,
          success: () => {
            state.flags.touched_etruscan_bronze = true;
            updateStat('fate', 1, 'The bronze was warm — impossibly warm — and for a heartbeat you heard a word in a language you almost knew');
            renderScene('priests_interrogation_2');
          },
          failure: () => {
            state.flags.touched_etruscan_bronze = true;
            updateStat('fate', -1, 'A chill ran through you — the figure\'s smile seemed to shift');
            renderScene('priests_interrogation_2');
          }
        }
      },
      {
        text: 'Admire it from a distance and move on',
        action: () => {
          updateStat('fate', 1, 'Some things are best observed, not grasped');
          renderScene('priests_interrogation_2');
        }
      }
    ]
  },

  // ---- S10: THEATER OF DIONYSUS ----
  sq_theater: {
    title: 'The Theater of Dionysus',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The theater is empty. Cut into the mountainside, its stone seats rise in a great half-circle facing the orchestra floor below. The acoustics are uncanny — a whisper from the center of the stage reaches the highest row as clearly as if spoken beside your ear.',
        'You stand in the orchestra, alone. Above you, six thousand empty seats. Below, the valley of Delphi falling away to the distant sea. The silence is enormous — not empty, but full, as though the theater is holding its breath between performances.',
        'You imagine the tragedies that have echoed here. Prometheus chained. Oedipus blinded. Medea with her children\'s blood still wet on her hands. This is where the Greeks confront what they cannot face in daylight — the truth that the gods are not just.'
      ];
      if (cls === 'warrior') lines.push('The empty seats remind you of a formation waiting for orders. You could command from this stage — every word would carry, every gesture would be seen. The theater is a battlefield of a different kind.');
      else if (cls === 'seer') lines.push('The ghosts of performances past shimmer at the edges of your vision. Masked figures moving through choreographed grief. The theater is a temple to a different kind of prophecy — the kind that reveals truth through fiction.');
      else lines.push('The silence presses against you. In this place, every human emotion has been performed, rehearsed, amplified. Your own story — exile, guilt, the search for identity — is not original. It is the oldest story the Greeks know how to tell.');
      return lines;
    },
    onEnter: () => {
      state.flags.visited_theater = true;
      unlockEncyclopedia('greek_theater_delphi');
    },
    choices: [
      {
        text: 'Recite a passage from tragedy — let the theater carry your voice',
        roll: {
          label: 'Recite Tragedy',
          stat: 'spirit',
          dc: 5,
          success: () => {
            updateStat('spirit', 2, 'Your voice filled the theater — for a moment, you were not an exile but a performer, and the emptiness listened');
            renderScene('priests_interrogation_2');
          },
          failure: () => {
            updateStat('spirit', 1, 'The words faltered, but the attempt itself was a kind of prayer');
            renderScene('priests_interrogation_2');
          }
        }
      },
      {
        text: 'Sit in silence and let the theater\'s emptiness wash over you',
        action: () => {
          updateStat('spirit', 1, 'In the silence, something unknotted inside your chest');
          renderScene('priests_interrogation_2');
        }
      },
      ...(state.charClass === 'warrior' ? [{
        text: 'Practice combat forms in the orchestra — your body needs the work',
        action: () => {
          updateStat('body', 1, 'The movement felt ceremonial in this sacred space');
          renderScene('priests_interrogation_2');
        }
      }] : [])
    ]
  },

  // ---- S11: THE GYMNASIUM ----
  sq_gymnasium: {
    title: 'The Gymnasium',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The gymnasium lies below the sanctuary, near the road. A palaestra — a wrestling yard — opens onto a colonnaded track where athletes train for the Pythian Games. Even now, weeks from the next festival, a handful of men exercise: stretching, wrestling, throwing javelins at straw targets.',
        'A veteran athlete with a crooked nose and shoulders like an ox watches you enter. He has the loose, confident stance of a man who has won enough contests to stop counting.',
        '<span class="italic">"You are the exile,"</span> he says flatly. <span class="italic">"The one the priests are holding. I heard you were a soldier."</span> He looks you over. <span class="italic">"Your body is wasting under their fast. Come — train with me. The priests feed your soul; I will feed your strength."</span>'
      ];
      if (cls === 'warrior') lines.push('You recognize his type — a professional athlete, but one who has also seen combat. The way he shifts his weight, the old knife scar on his forearm. He is testing you with his eyes before he tests you with his hands.');
      else lines.push('The offer is unexpected. The gymnasium is a place of honor in Greek life — for citizens, not exiles. That he offers to train you is a courtesy, perhaps even a kindness.');
      return lines;
    },
    onEnter: () => {
      unlockEncyclopedia('greek_athletics');
    },
    choices: [
      {
        text: 'Train with the veteran — accept his instruction',
        action: () => {
          state.flags.gymnasium_trained = true;
          updateStat('body', 1, 'The veteran\'s drills honed your reflexes');
          renderScene('priests_interrogation_2');
        }
      },
      {
        text: 'Spar cautiously — do not reveal your full strength',
        action: () => {
          state.flags.gymnasium_trained = true;
          updateStat('fate', 1, 'You held back, and the veteran noticed — and respected it');
          renderScene('priests_interrogation_2');
        }
      },
      {
        text: 'Challenge him to a sprint — settle it with speed',
        roll: {
          label: 'Race the Veteran',
          stat: 'body',
          dc: 7,
          success: () => {
            state.flags.gymnasium_trained = true;
            updateStat('body', 2, 'You outran a Pythian athlete — he laughed and clasped your hand');
            renderScene('priests_interrogation_2');
          },
          failure: () => {
            state.flags.gymnasium_trained = true;
            updateStat('body', 1, 'He beat you, but the effort rekindled something in your legs');
            renderScene('priests_interrogation_2');
          }
        }
      }
    ]
  },

  // ---- S12: THE FORMER PYTHIA ----
  sq_former_pythia: {
    title: 'The Former Pythia',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Near the Castalian Spring, sitting on a stone worn smooth by decades of use, an old woman watches the water. She is thin, white-haired, and her eyes have the unfocused quality of someone who has spent too long staring into other worlds.',
        'The temple servants give her a wide berth. A younger priestess brings her food and water without being asked. The old woman eats mechanically, her attention somewhere else entirely.',
        'She speaks before you can decide whether to approach. <span class="italic">"You are the one they argue about. The exile from the east."</span> Her voice is hoarse but precise. <span class="italic">"I know because the walls of this temple have ears, and for thirty years those ears were mine."</span>',
        'A former Pythia. Retired — or replaced. The oracle\'s voice, silenced by age or by politics, but still listening.'
      ];
      if (cls === 'seer') lines.push('You feel the residue of power clinging to her like perfume. Whatever gift the Pythia possesses, this woman still carries its echo. Her eyes find yours, and for a moment you see yourself reflected in them — not as you are, but as you will be.');
      else lines.push('She fixes you with a gaze that sees through flesh and bone. Whatever the vapors showed her during her years on the tripod, the vision has not entirely faded.');
      return lines;
    },
    onEnter: () => {
      state.flags.met_former_pythia = true;
      unlockEncyclopedia('succession_pythias');
    },
    choices: [
      {
        text: '"What did you see, when you sat on the tripod?"',
        action: () => {
          updateStat('spirit', 1, 'She smiled — "Everything. And nothing I could keep"');
          renderScene('dove_feather_omen');
        }
      },
      {
        text: '"What do you know of the current Pythia?"',
        action: () => {
          state.flags.pythia_insight = true;
          renderScene('dove_feather_omen');
        }
      },
      {
        text: '"Are the vapors real? Or is the oracle a performance?"',
        action: () => {
          updateStat('fate', 1, 'She laughed — "The vapors are real. The performance is also real. The gods do not distinguish"');
          renderScene('dove_feather_omen');
        }
      }
    ]
  },

  // ---- S13: EAVESDROPPING ON THE COUNCIL ----
  sq_priests_council: {
    title: 'Eavesdropping on the Council',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'You cannot sleep. The temple walls are thick, but sound travels through stone in strange ways — through cracks, through the channels cut for water, through the hollow spaces behind the painted plaster.',
        'Voices. The four priests, arguing. You press your ear to the wall and listen.',
        '<span class="italic">"He is dangerous,"</span> says one — the youngest, you think. <span class="italic">"A temple-burner. If we shelter him and Persia hears of it—"</span>',
        '<span class="italic">"Persia hears everything,"</span> the eldest interrupts. <span class="italic">"The question is not what Persia thinks. The question is what the goddess wants. The dove feather was clear."</span>',
        '<span class="italic">"Dove feathers fall from the sky every day!"</span>',
        '<span class="italic">"Not into the outstretched palm of a man who just confessed to burning a temple. That is not coincidence. That is an answer."</span>',
        'Silence. Then the youngest priest again, quieter: <span class="italic">"And if the Pythia confirms it? If she tells us to send him west?"</span>',
        '<span class="italic">"Then we send him west,"</span> the eldest says. <span class="italic">"And let the western gods deal with whatever he is."</span>'
      ];
      if (cls === 'seer') lines.push('You sense the currents beneath their words — fear, obligation, a genuine uncertainty about what you represent. The eldest believes. The youngest is afraid. The others are calculating the political cost.');
      else lines.push('Your heart hammers against the wall. They are deciding your fate in a back room, the way men have always decided fates — with arguments, compromises, and the invocation of signs they half-believe.');
      return lines;
    },
    onEnter: () => {
      state.flags.overheard_priests = true;
      unlockEncyclopedia('priestly_hierarchy');
    },
    choices: [
      {
        text: 'Keep listening — learn everything you can',
        action: () => {
          state.flags.overheard_priests_detail = true;
          renderScene('dove_feather_omen');
        }
      },
      {
        text: 'Knock on the door and confront them — "I heard everything"',
        roll: {
          label: 'Confront the Priests',
          stat: 'spirit',
          dc: 8,
          success: () => {
            updateStat('spirit', 2, 'The priests were startled — but the eldest nodded slowly, as though he had expected this');
            renderScene('dove_feather_omen');
          },
          failure: () => {
            updateStat('spirit', -1, 'The priests were furious at the intrusion — trust eroded');
            updateStat('fate', -1, 'You showed your hand too soon');
            renderScene('dove_feather_omen');
          }
        }
      },
      {
        text: 'Walk away — some things are better not known',
        action: () => {
          updateStat('fate', 1, 'You chose ignorance as armor');
          renderScene('dove_feather_omen');
        }
      }
    ]
  },

  // ---- SCENE 2: The Storm ----
  the_storm: {
    title: 'The Dance in the Storm',
    text: [
      'The air cools. Clouds roll down the mountains. Lightning begins to flash around you. Deafening claps of thunder echo ceaselessly through the valleys. Lightning cleaves the boulders, rain and hail beat your body, squalls threaten to sweep you into the gorges.',
      'The mountain path narrows. Loose stones shift beneath your feet. The wind howls louder, and you realize — with a sudden, animal clarity — that <span class="bold">you could die here</span>.',
      '<span class="omen-text">The gods warned you. The villagers warned you. The sky itself warned you. And you walked into the storm anyway.</span>',
      'A rock shelf ahead crumbles under the rain. You must cross it, or the mountain will take you.'
    ],
    onEnter: () => {
      setOmen('The storm tests your body. Survive — or be swallowed by the mountain.');
    },
    choices: [
      {
        text: 'Fight through the crumbling path — trust your body',
        roll: {
          label: 'Survive the Storm',
          stat: 'body',
          success: () => renderScene('storm_survived'),
          failure: () => renderScene('storm_death')
        }
      },
      {
        text: 'Call upon the gods — let fate decide',
        roll: {
          label: 'Divine Intervention',
          stat: 'fate',
          success: () => renderScene('storm_survived'),
          failure: () => renderScene('storm_death')
        }
      }
    ]
  },

  storm_survived: {
    title: 'The Dance in the Storm',
    text: () => {
      const base = [
        'You cross the crumbling shelf. Stones cascade into the gorge behind you — a heartbeat later, and you would have fallen with them.',
        'But you did not fall. And now — something seizes you.'
      ];
      if (state.charClass === 'warrior') {
        base.push('Where others would cower, your body responds with instinct honed by years of training. You do not dance — you <span class="bold">march</span>. Each step deliberate, each breath controlled. The storm rages around you like a battlefield, and you walk through it as you would walk through a rain of arrows.');
        base.push('<span class="omen-text">The lightning strikes the ground at your feet but you do not flinch. A Spartan does not flinch. You are Dorieus, and the storm is merely weather.</span>');
      } else if (state.charClass === 'seer') {
        base.push('The lightning splits reality itself. Behind the flashes you see <span class="bold">shapes</span> — luminous beings streaking through the sky, vast and indifferent. Your eyes roll back, your mouth opens, and words in a language older than Greek pour from your lips.');
        base.push('<span class="omen-text">You see Delphi below you — not as it is, but as it will be in a thousand years: ruins. And beyond that, further still, you see yourself standing here again, in another body, remembering.</span>');
      } else if (state.charClass === 'seafarer') {
        base.push('You have weathered storms at sea that would have drowned lesser men. This mountain tempest is nothing. But then — something shifts. The wind <span class="bold">answers you</span>. Not as it does when you call it to fill a sail, but as though it recognizes a kinsman.');
        base.push('<span class="omen-text">For a moment the rain parts around you like the sea before a prow. You walk through the storm untouched, and you wonder whether you have always been more than a sailor.</span>');
      } else {
        base.push('Something seizes you — an ecstasy unlike anything you have known. Without realizing what you are doing, <span class="bold">you begin to dance</span>. Your feet move in steps you have never learned, your arms sway in a rhythm that lives inside you. Words in a strange language burst from your lips.');
        base.push('<span class="omen-text">For the first time in your life, you know yourself. No evil can befall you, nothing can do you harm. You are dancing on the road to Delphi, and the lightning cannot touch you.</span>');
      }
      return base;
    },
    onEnter: () => {
      setOmen('The storm reveals what lies beneath. You survived — changed.');
      updateStat('spirit', 2, 'The storm revealed something divine within you');
      state.flags.danced_in_storm = true;
    },
    choices: [
      {
        text: 'Continue dancing until you reach the valley of Delphi',
        action: () => {
          addPebble('black', 'The Storm Dance — I knew myself for the first time');
          renderScene('storm_vision');
        }
      }
    ]
  },

  storm_death: {
    title: 'The Mountain Takes You',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The shelf gives way beneath your feet. For one impossible moment you hang in the air — arms reaching for a handhold that does not exist.',
        'Then you fall.'
      ];
      if (cls === 'warrior') {
        lines.push('You twist mid-air, a soldier\'s reflex, grasping at rock. But the mountain does not care about training. It does not care about Sparta, or glory, or the name your father gave you.');
        lines.push('<span class="omen-text">The last thing you see is lightning splitting the sky above you — beautiful, indifferent, divine.</span>');
      } else if (cls === 'seer') {
        lines.push('As you fall, the visions come one final time — every future you will never live, collapsing into one bright point. You see the Pythia in her chamber, sensing your thread snap. She will weep for a moment. Then she will forget.');
        lines.push('<span class="omen-text">You see the pattern at last — complete and perfect. But there is no one left to speak it.</span>');
      } else if (cls === 'seafarer') {
        lines.push('The wind that always answered you is silent now. The sea is far below, but you will never reach it. Your body strikes the rocks of the gorge like a ship dashed against cliffs — the end you always feared, only without water.');
        lines.push('<span class="omen-text">No one will mark this wreck. No salvage, no cargo, no crew to mourn you.</span>');
      } else {
        lines.push('The ecstasy never comes. No dancing, no revelation, no divine fire. Only the weight of a body that was never strong enough for this road, and the silence of gods who tried to warn you.');
        lines.push('<span class="omen-text">The villagers will find you in the gorge when the storm clears. They will shake their heads. "Another one," they will say. "We told him not to go."</span>');
      }
      lines.push('<div style="text-align:center; margin-top:2rem; padding:2rem; border:2px solid var(--blood); border-radius:4px; background:rgba(139,37,0,0.1);">' +
        '<div style="font-family:Cinzel,serif; color:var(--blood); font-size:24px; margin-bottom:0.5rem;">YOU HAVE DIED</div>' +
        '<div style="font-size:15px; color:var(--sand); margin-bottom:0.5rem; font-style:italic;">"The gods had spoken, and Turms did not listen."</div>' +
        '<div style="font-size:13px; color:#887766;">The omens warned you. The villagers warned you. The storm was real.<br>Not every defiance is rewarded. Some roads end in silence.</div>' +
        '</div>');
      return lines;
    },
    choices: () => {
      const c = [];
      if (hasCheckpoint()) c.push({ text: 'Load last checkpoint — ' + (getCheckpointLabel() || 'saved game'), action: () => loadCheckpoint() });
      c.push({ text: 'Face the storm again (restart from the road)', action: () => {
        const cls = CLASSES[state.charClass];
        state.spirit = cls.spirit; state.body = cls.body; state.fate = cls.fate;
        state.pebbles = []; state.flags = {};
        state.omensFollowed = 0; state.omensDefied = 0;
        state.rerollAvailable = (state.charClass === 'seafarer');
        updateStat('spirit', 0); updateStat('body', 0); updateStat('fate', 0);
        renderPebbles();
        renderScene('road_to_delphi');
      }});
      c.push({ text: 'Choose a different archetype', action: () => {
        state.charClass = null;
        state.spirit = 5; state.body = 6; state.fate = 3;
        state.pebbles = []; state.flags = {};
        state.omensFollowed = 0; state.omensDefied = 0;
        state.rerollAvailable = false;
        updateStat('spirit', 0); updateStat('body', 0); updateStat('fate', 0);
        document.getElementById('char-name').textContent = '—';
        document.getElementById('char-desc').textContent = 'Choose your archetype...';
        renderPebbles();
        renderScene('character_select');
      }});
      return c;
    }
  },

  approach_delphi: {
    title: 'The Valley of Delphi',
    text: [
      'The storm has cleared. You follow the sacred road as it winds through the mountains. Slowly, the valley of Delphi opens before you — the buildings, the monuments, the great temple of Apollo gleaming in pale sunlight.',
      'Above everything towers the black cliff — the cliff from which the guilty are flung. Black birds hover over the gorge.',
      'You find the sacred fountain at the foot of the terraces. Other pilgrims wash themselves quietly, whispering prayers. The water is cool and clear.',
      'You feel the weight of your journey, the burning of Sardis still heavy on your conscience. How will you approach the temple?'
    ],
    choices: [
      {
        text: 'Approach the Castalian Spring to purify yourself',
        type: 'omen',
        action: () => renderScene('castalia_spring')
      },
      {
        text: 'Run straight for the temple — seize divine protection now',
        type: 'defy',
        action: () => { state.omensDefied++; renderScene('temple_rush'); }
      }
    ]
  },

  // ---- SCENE 3: Arrival at Delphi (storm path) ----
  arrival_delphi_storm: {
    title: 'Naked Before the God',
    text: [
      'Beyond the mountain wall you see the oval valley of Delphi blackened by clouds and blurred by rain. Then the storm ends, the clouds roll away, and the sun shines upon the buildings, the monuments, the holy temple.',
      'Alone and without guidance, you find the sacred fountain. You fling off your muddy garments and dive into the purifying waters. The rain has muddied the pool, but the water pouring from the lions\' maws cleanses your hair and body.',
      'You step naked into the sunlight. <span class="bold">The ecstasy still lingers</span> — your limbs feel like fire and you know no cold.',
      'Temple servants are hurrying toward you, their robes fluttering, heads bound with sacred ribbons. Above, the black cliff looms. You begin running up the terraces toward the temple, disregarding the sacred way entirely.'
    ],
    choices: [
      {
        text: 'Burst into the inner temple and seize the Omphalos — the center of the earth',
        action: () => renderScene('the_omphalos')
      }
    ]
  },

  temple_calm: {
    title: 'The Sacred Way',
    text: [
      'You wash in the fountain as custom requires, letting the cold water carry away the dust of travel. You dress in clean garments and follow the sacred way up the terraces, between statues and monuments offered by kings and cities.',
      'The servants acknowledge you with a nod. You make the proper offerings — a handful of coins — and are led into the anteroom of the temple.',
      'There you wait. On the walls you read the maxims of the seven wise men: <span class="italic">"Know thyself. Nothing in excess. Surety brings ruin."</span> The smell of holy bay wood burning at the altar reaches your nostrils. Hours pass.',
      'You are led deeper into the temple, past the great silver urns, until you reach the innermost chamber. The Omphalos — the black center of the earth — waits in the dim light.'
    ],
    choices: [
      {
        text: 'Touch the sacred stone...',
        action: () => renderScene('the_omphalos')
      }
    ]
  },

  temple_rush: {
    title: 'The Madman in the Temple',
    text: [
      'You sprint past the startled servants, ignoring their shouts. Up the terraces, past statues and monuments — the sacred way be damned. Your sandals slap on marble.',
      'Before the temple you slam your hand on the massive altar. <span class="bold">"I, Turms of Ephesus, evoke the protection of the deity and submit to the judgment of the oracle!"</span>',
      'Your voice echoes off stone. The servants hesitate, afraid to touch a man who has claimed divine protection at the altar. You push past them into the temple itself.',
      'Through the forecourt, by the giant silver urns, past costly statues — until you reach the innermost chamber. You see the eternal flame and beside it the Omphalos, the black center of the earth. You lay your hand on it.'
    ],
    onEnter: () => { state.flags.rushed_temple = true; },
    choices: [
      {
        text: 'Wrap your arms around the sacred stone and wait',
        action: () => renderScene('the_omphalos')
      }
    ]
  },

  the_omphalos: {
    title: 'The Omphalos',
    text: [
      'An indescribable feeling of peace emanates from the stone. You see the holy tomb of Dionysus, the eagles of the great deity in the temple shadows above. <span class="bold">You are safe.</span>',
      'The four holy men come in haste, adjusting their headbands, faces wry, eyes swollen from sleep. They had expected no one today.',
      '"Have you blood on your hands?" they ask.',
      'You answer quickly that you have not, and they are obviously relieved. Then they ask: "Have you sinned against the gods?"',
      'You deliberate. "I have not sinned against the Hellenic gods. On the contrary, the sacred virgin, the sister of your deity, watches over me."'
    ],
    choices: [
      { text: 'Submit to the priests\' judgment...', action: () => renderScene('priests_interrogation_1') }
    ]
  },

  // ---- M04: THE FIRST INTERROGATION ----
  priests_interrogation_1: {
    title: 'The First Interrogation',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The four priests settle onto their stone seats, adjusting sacred headbands. They are old, weary, and suspicious. The eldest speaks first:',
        '<span class="italic">"Who are you, stranger? Not your name — we know names are masks. Who are you truly?"</span>',
        'They want to know about Ephesus, about the lightning, about why you came dancing out of the storm — or walking calmly through the sacred way. Each question peels back a layer. You feel exposed — not by their skill, but by their patience. These are men who have spent decades sifting truth from pilgrims\' lies.'
      ];
      if (cls === 'warrior') lines.push('You sit like a soldier before a tribunal — spine straight, eyes forward. The priests notice your discipline. They have seen warriors before, but not ones with your particular wound.');
      else if (cls === 'seer') lines.push('You sense their thoughts like currents — skepticism from the youngest, weariness from the eldest, genuine curiosity from the one who says least. They are testing you, but you are also reading them.');
      else if (cls === 'seafarer') lines.push('You recognize a negotiation when you see one. These priests trade in truth the way merchants trade in silver. The question is what currency you carry.');
      else lines.push('Under their gaze, something stirs in you — the same force that danced in the storm. You feel your face grow warm. The youngest priest blinks and looks away.');
      return lines;
    },
    onEnter: () => {
      unlockEncyclopedia('four_priests');
    },
    choices: [
      {
        text: 'Tell the complete truth — the lightning, the stoning, everything',
        action: () => {
          state.flags.interrogation_approach = 'honest';
          state.flags.fully_honest = true;
          updateStat('spirit', 1, 'Honesty lightened your soul');
          renderScene('priests_question');
        }
      },
      {
        text: 'Tell a careful version — truth, but shaped',
        action: () => {
          state.flags.interrogation_approach = 'careful';
          state.flags.spoke_carefully = true;
          updateStat('fate', 1, 'Careful words may serve you later');
          renderScene('priests_question');
        }
      },
      {
        text: '"First tell me: does this temple truly speak for a god?"',
        roll: {
          label: 'Challenge the Priests',
          stat: 'spirit',
          success: () => {
            state.flags.interrogation_approach = 'bold';
            updateStat('spirit', 1, 'The priests respect your boldness');
            renderScene('priests_question');
          },
          failure: () => {
            state.flags.interrogation_approach = 'bold';
            updateStat('fate', -1, 'The priests grow cold at your presumption');
            renderScene('priests_question');
          }
        }
      },
      {
        text: 'While the priests confer, study the anteroom\'s inscriptions',
        action: () => renderScene('sq_anteroom')
      }
    ]
  },

  priests_question: {
    title: 'Before the Priests',
    text: [
      'The old men listen. They are weary — winter approaches and they yearn for peace. But your story troubles them.',
      '"The burning of a temple," they mutter, "even that of the Asian Cybele, whom we abhor — is a serious matter. Once temples begin to be burned, not even the gods of the Hellenes will be safe."',
      'They produce the wax tablets you brought from Ephesus. Two testimonies, sealed and unread until this moment. The priests exchange glances. "Let us see what your own people say about you."'
    ],
    choices: [
      { text: 'Watch as the priests unseal the tablets...', action: () => renderScene('competing_letters') }
    ]
  },

  // ---- M05: THE COMPETING LETTERS ----
  competing_letters: {
    title: 'The Competing Letters',
    text: [
      'The priests read the tablets aloud, and the contradiction hangs in the air like smoke.',
      'Artemisia of Ephesus, high priestess, declares you innocent — <span class="omen-text">"the goddess herself guided his hand. What was burned was Cybele\'s abomination, not a sanctuary of the Hellenic gods."</span>',
      'Epenides of the Council of Elders demands your death — <span class="omen-text">"let Turms be cast from the cliff lest he bring about still greater harm. He is a blasphemer, a rebel, and a temple-burner."</span>',
      'The priests fall into heated argument. One wonders aloud whether the burning of any temple, even Cybele\'s, might embolden those who would burn Apollo\'s. Another insists that the distinction matters — Cybele is foreign, Artemis is not.',
      'They turn to you. "What say you in your own defense?"'
    ],
    onEnter: () => {
      state.flags.letters_read = true;
      unlockEncyclopedia('artemisia');
      unlockEncyclopedia('burning_sardis');
    },
    choices: [
      {
        text: '"I was the goddess\'s instrument — my hand, her will"',
        roll: {
          label: 'Speak in Your Defense',
          stat: 'spirit',
          success: () => {
            state.flags.defense_convincing = true;
            updateStat('spirit', 1, 'Your words carried the weight of conviction');
            renderScene('fasting_begins');
          },
          failure: () => {
            renderScene('fasting_begins');
          }
        }
      },
      {
        text: 'Let the letters speak for themselves — silence is its own argument',
        action: () => {
          updateStat('fate', 1, 'You trusted the evidence to carry your case');
          renderScene('fasting_begins');
        }
      },
      {
        text: '"Epenides writes from cowardice, not righteousness"',
        action: () => {
          state.flags.denounced_epenides = true;
          updateStat('spirit', 1, 'You spoke with fire');
          updateStat('fate', -1, 'Bold words have consequences');
          renderScene('fasting_begins');
        }
      }
    ]
  },

  // ---- M06: THE FASTING BEGINS ----
  fasting_begins: {
    title: 'The Fasting Begins',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Days blur into weeks. The servants instruct you in the rituals of purification: fasting, cold water, prayers at dawn. Your body thins. Your mind sharpens.',
        'The world takes on a crystalline quality — sounds are louder, colors brighter, and at night you dream of things you have never seen. A city of painted tombs. A woman whose face shifts like the Pythia\'s. A language that lives in your throat but will not reach your tongue.',
        'The fasting strips away everything that is not essential. What remains is the question: <span class="bold">who are you?</span>'
      ];
      if (cls === 'warrior') lines.push('The inaction gnaws at you. Your body, trained for daily exertion, rebels against the stillness. You pace the anteroom like a caged animal, counting the stones in the wall, shadow-boxing against columns.');
      else if (cls === 'seer') lines.push('The fasting intensifies your visions. At night, the boundary between dream and waking dissolves. You see the temple as it was a thousand years ago — bare rocks worshipped under an open sky, before Apollo, before names.');
      else if (cls === 'seafarer') lines.push('You are restless. The mountain air feels wrong — too thin, too still, too far from the salt-tang of the coast. At night you dream of tides, and your body rocks gently as though the temple floor were a deck.');
      else lines.push('Something is changing. The fasting peels back layers you did not know you had. Beneath the exile, beneath the guilt, beneath the man who ran from Ephesus — there is something else. Something older. You feel it stirring.');
      return lines;
    },
    onEnter: () => {
      unlockEncyclopedia('purification_rites');
    },
    choices: [
      {
        text: 'Embrace the fast completely — let the visions come',
        action: () => {
          state.flags.deep_fast = true;
          updateStat('spirit', 2, 'The visions came, and you did not flinch');
          updateStat('body', -1, 'The fasting weakened your body');
          renderScene('priests_interrogation_2');
        }
      },
      {
        text: 'Maintain your strength — eat when the servants aren\'t looking',
        action: () => {
          updateStat('body', 1, 'You kept your strength through quiet disobedience');
          renderScene('priests_interrogation_2');
        }
      },
      {
        text: 'Use the time between rituals to explore Delphi',
        action: () => {
          state.flags.explored_during_fast = true;
          renderScene('sq_fasting_explore');
        }
      }
    ]
  },

  // ---- M07: THE SECOND INTERROGATION ----
  priests_interrogation_2: {
    title: 'The Second Interrogation',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The priests summon you again, leaner and paler than before. This time they want details. Not the political facts — they have those from merchants and sailors. They want to know what it <span class="italic">felt</span> like to hold the torch.',
        '"As old men are wont to do," they make you begin at the beginning. What possessed you. Whether you heard a voice, saw a sign, felt a hand on your shoulder.',
        'The youngest priest watches you with particular intensity. You wonder whether he believes you or is simply cataloguing your lies.'
      ];
      if (cls === 'warrior') lines.push('You tell it like a battle report — the march inland, the three days\' journey, the reed-thatched roofs. You are precise about the tactical failure. You say nothing about the screaming.');
      else if (cls === 'seer') lines.push('As you speak, the visions that accompanied the fire return — the women\'s festival, the flames leaping from roof to roof, the faces illuminated by destruction. You relive it as the priests watch.');
      else if (cls === 'seafarer') lines.push('You describe the naval context — the Athenian ships at the quay, the supply lines, the sea routes. You frame Sardis as a port that burned instead of a city. The priests are unconvinced.');
      else lines.push('Your voice falters. The guilt is a physical thing — a weight on your chest, a taste in your mouth. The youngest priest leans forward. He sees something in your face that interests him.');
      return lines;
    },
    onEnter: () => {
      unlockEncyclopedia('ionian_revolt');
    },
    choices: [
      {
        text: 'Describe the burning in full honesty — the chaos, the shame',
        action: () => {
          state.flags.shame_confessed = true;
          updateStat('spirit', 1, 'The truth, even the ugly truth, has weight');
          renderScene('sardis_confession');
        }
      },
      {
        text: '"Artemis guided my hand against Cybele" — frame it as divine mission',
        roll: {
          label: 'Convince the Priests',
          stat: 'fate',
          success: () => {
            updateStat('fate', 1, 'The priests accepted your framing');
            renderScene('sardis_confession');
          },
          failure: () => {
            updateStat('fate', -1, 'The priests saw through your framing');
            renderScene('sardis_confession');
          }
        }
      },
      {
        text: 'Break down — the guilt overwhelms you',
        action: () => {
          updateStat('spirit', 2, 'Vulnerability is its own kind of strength');
          updateStat('fate', -1, 'The priests see your weakness');
          renderScene('sardis_confession');
        }
      }
    ]
  },

  // ---- M08: THE BURNING OF SARDIS ----
  sardis_confession: {
    title: 'The Burning of Sardis',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'As you speak, memory becomes vision. You are back in Sardis.',
        'The Athenian ships at the quay. The march inland — three days, sheep following a ram. The city\'s reed-thatched roofs. The temple of Cybele, squat and dark. The torch in your hand. The wind that caught the flames and spread them beyond anything you intended.',
        'The flight, the Persian auxiliaries, the Ephesians\' midnight festival gone wrong. And through it all, the sickening certainty that you have done something that cannot be undone.'
      ];
      if (cls === 'storm_born') lines.push('You remember the fire matching the lightning — the same force, the same indifference. Was it you who burned Sardis, or the storm that lives inside you?');
      else if (cls === 'warrior') lines.push('You analyze the tactical failure with a soldier\'s eye. The roofs. The wind direction. The lack of a firebreak. It was not arson — it was incompetence. That is worse.');
      else if (cls === 'seer') lines.push('You see the future fires this act will kindle — the Persian reprisal, the fleet at Lade, the decades of war. One torch, one city, one cascade of consequences spreading like ripples across the Aegean.');
      else lines.push('You think of the ships that will never come home. The sailors who trusted their captains. The women on the rooftops watching the smoke. War is not a story. War is a smell — burning thatch, burning flesh, burning hope.');
      return lines;
    },
    onEnter: () => {
      unlockEncyclopedia('burning_sardis_ext');
    },
    choices: [
      {
        text: '"I accept full responsibility — the fire was my hand, my choice"',
        type: 'omen',
        action: () => {
          state.flags.sardis_stance = 'responsible';
          state.omensFollowed++;
          updateStat('spirit', 1, 'You shouldered the weight of your actions');
          addPebble('black', 'Sardis burns in my memory');
          renderScene('dove_feather_omen');
        }
      },
      {
        text: '"The goddess used me — I was her instrument, not the author"',
        type: 'defy',
        action: () => {
          state.flags.sardis_stance = 'instrument';
          state.omensDefied++;
          updateStat('fate', 1, 'You placed the burden on the divine');
          addPebble('black', 'Sardis burns in my memory');
          renderScene('dove_feather_omen');
        }
      },
      {
        text: '"It was war. War burns. I am neither hero nor monster"',
        action: () => {
          state.flags.sardis_stance = 'pragmatic';
          updateStat('body', 1, 'Pragmatic acceptance steadied your resolve');
          addPebble('black', 'Sardis burns in my memory');
          renderScene('dove_feather_omen');
        }
      },
      {
        text: 'Before the priests dismiss you, an old woman by the spring catches your eye',
        action: () => {
          addPebble('black', 'Sardis burns in my memory');
          renderScene('sq_former_pythia');
        }
      },
      {
        text: 'That night, you hear voices through the temple walls — priests arguing',
        action: () => {
          addPebble('black', 'Sardis burns in my memory');
          renderScene('sq_priests_council');
        }
      }
    ]
  },

  // ---- M09: THE DOVE'S FEATHER ----
  dove_feather_omen: {
    title: 'The Dove\'s Feather',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'You and the priests step outside the anteroom into the open air. The sky is somber. The priests clutch their robes against the cold.',
        'You extend your hand, palm up, and say: <span class="bold">"Let us wait for an omen."</span>',
        'And then it happens. A bluish-white dove\'s feather drifts down from the empty sky and lands in your outstretched palm.',
        'The priests crowd around, eyes wide. <span class="omen-text">"The dove is Aphrodite\'s bird,"</span> the eldest whispers. <span class="omen-text">"Behold — the Cytherean has thrown her golden veil over him."</span>',
        'Lightning flickers on a western peak. Thunder rumbles through the valley. Then silence.'
      ];
      if (cls === 'seer') lines.push('For a flicker — less than a heartbeat — you see her. Not the dove, not the feather. Aphrodite herself, golden and amused, watching from the edge of the sky. Then she is gone.');
      else if (cls === 'seafarer') lines.push('A dove. A navigator\'s sign — doves always fly toward land. This one came from the west. The direction is clear.');
      else if (cls === 'warrior') lines.push('You are unmoved by superstition. But you cannot explain the chill that runs through you, or the way the feather sits in your palm as though it was always meant to land there.');
      else lines.push('The thunder echoes the storm dance. The feather echoes the winged figure. Everything is connected — thread by thread, omen by omen — and the pattern is pulling you west.');
      return lines;
    },
    onEnter: () => {
      unlockEncyclopedia('aphrodite_dove');
      awardItem('dove_feather');
    },
    choices: [
      {
        text: 'Hold the feather aloft — "This is the sign. Let the Pythia speak"',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          state.flags.dove_omen_response = 'proclaimed';
          updateStat('spirit', 1, 'You proclaimed the sign before the priests');
          addPebble('white', 'Aphrodite\'s feather fell into my hand');
          renderScene('the_pythia');
        }
      },
      {
        text: 'Pocket the feather quietly — trust the sign, but need no spectacle',
        action: () => {
          state.flags.dove_omen_response = 'quiet';
          updateStat('fate', 1, 'You kept the sign between yourself and the goddess');
          renderScene('the_pythia');
        }
      },
      {
        text: '"It is only a feather. Doves fly over Delphi every day"',
        type: 'defy',
        action: () => {
          state.omensDefied++;
          state.flags.dove_omen_response = 'dismissed';
          renderScene('the_pythia');
        }
      }
    ]
  },

  // ---- SCENE 4: The Pythia ----
  the_pythia: {
    title: 'The Pythia Speaks',
    text: () => {
      const stormed = state.flags.danced_in_storm;
      const cls = state.charClass;
      const lines = [
        'She enters supported by her attendants — still a young woman, with a bare and direful face, dilated eyes, a swaying walk.' +
        (stormed ? ' When she sees you — still glowing with the ecstasy of the storm — her face transforms.' : ' Her gaze fixes on you with unsettling recognition.')
      ];

      if (cls === 'warrior') {
        lines.push('<span class="omen-text">"You! Son of Herakles, child of war! I have seen you in the flames — you fall in the west, but your name never dies. The gods have written your death in golden letters."</span>');
        lines.push('Her words chill you more than any storm. A Spartan does not fear death — but to hear the manner of it spoken aloud by a god\'s vessel...');
        lines.push('She reaches toward you. <span class="bold">"Do not go east, warrior. East is another man\'s fate. The west calls you — and the west will make you immortal."</span>');
      } else if (cls === 'seer') {
        lines.push('<span class="omen-text">"Sister!"</span> she cries, and the priests recoil. <span class="omen-text">"I have dreamed your eyes watching me from behind the veil. You see what I see — but you are not yet broken by it."</span>');
        lines.push('She seizes your hands. Visions flood through the contact — a burning city, a ship at sea, a mountain tomb. Past and future collapse into a single moment.');
        lines.push('<span class="bold">"Go west,"</span> she whispers. <span class="bold">"The old gods are waiting for someone who can still hear them. In the west you will learn to bear the sight."</span>');
      } else if (cls === 'seafarer') {
        lines.push('<span class="omen-text">"The sea has carried you here, captain, but it is not done with you. I see sails — black sails and red — and a treasure that will cost you everything."</span>');
        lines.push('You shift uncomfortably. The Pythia should not know about the ships, the treasure, the blood on the water at Lade.');
        lines.push('<span class="bold">"Sail west,"</span> she commands. <span class="bold">"Beyond the pillars where the Phoenicians guard their routes. The sea has a home for you, if you are brave enough to find it."</span>');
      } else {
        lines.push('<span class="omen-text">"At last you have come, expected one! Naked you came on dancing feet, purified by the fountain. Son of the moon, the seashell, the sea horse — I know you. You come from the West."</span>');
        lines.push('You want to tell her she is wrong — you came from the East, from Ephesus. But her words move something deep within you.');
        lines.push('"Holy woman, do you really know me?"');
        lines.push('She bursts into wild laughter. <span class="italic">"Should I not know you! Arise and look into my face."</span>');
        lines.push('Under the compulsion of those eyes, you stare at her. Before your eyes her face changes — shifting through the faces of women you have known and women you have never seen. Dione, who carved her name on an apple. The black statue of Artemis. A comely woman glimpsed only in dreams...');
      }

      lines.push('<span class="bold">"This one is mine,"</span> she declares. <span class="bold">"Consecrated or not. Whatever has been done was done in fulfillment of divine will. Guiltless."</span>');
      return lines;
    },
    onEnter: () => {
      setOmen('The Pythia has spoken: "You come from the West." The priests say: "Go West."');
    },
    choices: [
      {
        text: 'Accept the Pythia\'s judgment — you are free',
        action: () => {
          addPebble('white', 'The Pythia knew me before I knew myself');
          renderScene('pythia_aftermath');
        }
      }
    ]
  },

  // ---- M10: THE PYTHIA FALLS ----
  pythia_aftermath: {
    title: 'The Pythia Falls',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The Pythia collapses into convulsion. Foam at her lips, eyes rolling. Her attendants catch her and carry her from the chamber.',
        'The priests stand frozen. Whatever just happened — whether divine ecstasy or madness — it has shaken them.',
        '<span class="italic">"She was not on the tripod,"</span> the eldest mutters. <span class="italic">"She was not chewing the bay leaf. She was not breathing the vapors. Yet the ecstasy seized her."</span>',
        'They stare at you as though you are the cause. And perhaps you are.'
      ];
      if (cls === 'seer') lines.push('You felt the ecstasy echo through your own body — a sympathetic vibration, like two strings tuned to the same note. Whatever seized the Pythia tried to seize you too. You held on. Barely.');
      else if (cls === 'warrior') lines.push('You are disturbed. You have seen men lose control in battle — the killing frenzy, the berserker rage. This was different. This was surrender, not fury. It frightens you more than any sword.');
      else if (cls === 'seafarer') lines.push('You have seen storms take ships — the moment when the captain realizes that skill is irrelevant and only the sea decides. The Pythia\'s collapse has that same quality. Something larger than human will.');
      else lines.push('The force that danced in the storm, the force that moved in the guardian spirit\'s wings — it was here, in this room, in this woman. And it knows you.');
      return lines;
    },
    onEnter: () => {
      unlockEncyclopedia('sacred_ecstasy');
    },
    choices: [
      {
        text: '"What did she mean — \'You come from the West\'? I came from the East"',
        action: () => {
          state.flags.pythia_reaction = 'questioned';
          renderScene('divine_recognition');
        }
      },
      {
        text: 'Stand in silence — let the power of the moment linger',
        action: () => {
          state.flags.pythia_reaction = 'silent';
          updateStat('spirit', 1, 'Silence held more weight than words');
          renderScene('divine_recognition');
        }
      },
      {
        text: '"Is she well? Will she recover?"',
        action: () => {
          state.flags.pythia_reaction = 'concerned';
          state.flags.cared_for_pythia = true;
          updateStat('fate', 1, 'Concern for the woman, not the oracle');
          renderScene('divine_recognition');
        }
      },
      {
        text: 'An attendant catches your arm in the corridor...',
        action: () => renderScene('sq_pythia_attendant')
      },
      {
        text: 'Return to the temple tonight — the Omphalos calls',
        action: () => renderScene('sq_night_vigil')
      }
    ]
  },

  // ---- M11: THE DIVINE LIGHT ----
  divine_recognition: {
    title: 'The Divine Light',
    text: () => {
      const cls = state.charClass;
      const deepFast = state.flags.deep_fast;
      const lines = [
        'The priests study you in the anteroom light. And then, one by one, they begin to blink and avert their eyes.',
        'Something is happening to your face.' + (deepFast ? ' After weeks of intensive fasting and purification, a "divine fever" permeates you —' : ' The ecstasy of the oracle lingers on your skin —') + ' your eyes glow with an inner light that is not human.',
        'The priests cannot look directly at you. You see through them: their doubts, their faded faith, their yearning for winter\'s peace. <span class="bold">Something in you is more powerful than they are. Something in you knows more.</span>'
      ];
      if (cls === 'storm_born') lines.push('The glow is strongest in you — it pulses with each heartbeat, casting faint shadows on the walls. The eldest priest crosses himself in a gesture older than Apollo.');
      else if (cls === 'warrior') lines.push('The light manifests as an aura of command. The priests feel it as soldiers feel a general\'s presence — an involuntary straightening of the spine, a lowering of the eyes.');
      else if (cls === 'seer') lines.push('The light is a halo of shifting visions — the priests see their own faces reflected in your glow, but aged, transformed, no longer quite their own.');
      else lines.push('The light is faint but unmistakable, like phosphorescence on night waves. It clings to your skin, your hair, the tips of your fingers.');
      return lines;
    },
    onEnter: () => {
      state.flags.priests_saw_light = true;
    },
    choices: [
      {
        text: '"Old men, give me peace and yourselves peace. Let us be done with this"',
        action: () => {
          updateStat('spirit', 1, 'You spoke with the authority of something beyond yourself');
          renderScene('after_pythia');
        }
      },
      {
        text: '"You see what I am. Tell me what you see"',
        roll: {
          label: 'Demand the Truth',
          stat: 'spirit',
          success: () => {
            state.flags.priests_revealed_truth = true;
            updateStat('spirit', 1, 'The eldest whispered: "You are not Greek. Whatever you are, it is older than our gods"');
            renderScene('after_pythia');
          },
          failure: () => {
            renderScene('after_pythia');
          }
        }
      },
      {
        text: 'Say nothing — let the glow speak for itself',
        action: () => {
          updateStat('fate', 1, 'The silence was answer enough');
          renderScene('after_pythia');
        }
      }
    ]
  },

  after_pythia: {
    title: 'Free — But Where?',
    text: [
      'The priests return with their judgment:',
      '<span class="italic">"You are free to go where you will, Turms. The gods have given their signs. Not your will but that of the gods is fulfilled in you. Continue to worship Artemis. But the god of Delphi neither condemns you nor assumes your guilt."</span>',
      '"Where am I to go?" you ask.',
      '<span class="bold">"Go to the West whence you once came. So says the Pythia, and so say we."</span>',
      'West. Everyone tells you to go west. The Pythia, the priests, even the dove feather. But the war rages in the East — in Ionia, where your guilt was born.',
      'You are free. But freedom without direction is just another kind of prison.'
    ],
    choices: [
      { text: 'Winter descends on Delphi...', action: () => renderScene('winter_in_delphi') }
    ]
  },

  // ---- M12: WINTER IN DELPHI ----
  winter_in_delphi: {
    title: 'Winter in Delphi',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Winter descends. Apollo departs for the land of lakes and swans — Delphi belongs to Dionysus now. The sacred precinct empties. Snow dusts the monuments. Ships seek harbors; no pilgrims come.',
        'You haunt the deserted grounds alone. Days are long and cold and luminous. The maxims on the temple walls blur into a single instruction: <span class="italic">wait.</span>',
        'You do not yet know what you are waiting for. But the waiting itself feels purposeful — as though the mountain is holding you until someone else arrives.'
      ];
      if (cls === 'warrior') lines.push('The inaction is torture. You pace the empty stadium, throwing imaginary javelins, sparring with your shadow. A soldier without a war is just a man with callouses.');
      else if (cls === 'seer') lines.push('Winter\'s silence is sacred to you. The visions come more often now — fragments of lives you have not lived, faces you have not met. The boundary between dream and waking thins like ice.');
      else if (cls === 'seafarer') lines.push('You miss the sea desperately. At night you dream of tides, and your body rocks gently as though the temple floor were a deck. The mountain air feels wrong — too thin, too still.');
      else lines.push('You feel the god\'s absence like a physical ache — a hollow space where the divine presence once pressed. In its place, something older stirs. The underworld gods who dwell in the rocks beneath Delphi do not leave for winter.');
      return lines;
    },
    onEnter: () => {
      unlockEncyclopedia('dionysus_winter');
    },
    choices: [
      {
        text: 'Spend the winter training — exercise and run the stadium',
        action: () => {
          state.flags.winter_activity = 'training';
          updateStat('body', 1, 'Winter training hardened your body');
          renderScene('the_stadium');
        }
      },
      {
        text: 'Spend the winter in contemplation — meditate and read',
        action: () => {
          state.flags.winter_activity = 'contemplation';
          updateStat('spirit', 1, 'Winter\'s silence deepened your understanding');
          renderScene('the_stadium');
        }
      },
      {
        text: 'Explore Delphi\'s hidden corners — there is more to this place',
        action: () => {
          state.flags.winter_activity = 'exploration';
          updateStat('fate', 1, 'Curiosity led you to unexpected places');
          renderScene('sq_winter_explore');
        }
      },
      {
        text: 'Carve your name into the temple wall with a friend',
        action: () => renderScene('sq_carving_names')
      },
      {
        text: 'Seek out the Phoenician sailor stranded by winter',
        action: () => renderScene('sq_phoenician_sailor')
      },
      {
        text: 'Walk the sacred precinct by moonlight',
        action: () => renderScene('sq_moonlight_delphi')
      }
    ]
  },

  // ---- SCENE 5: Meeting Dorieus ----
  the_stadium: {
    title: 'The Stadium',
    text: () => {
      const cls = state.charClass;
      if (cls === 'warrior') {
        return [
          'You ascend to the deserted stadium of Delphi. A lone figure runs the track — lean, quick-footed, with an odd grace that no Spartan would possess.',
          'He sees you and calls out: <span class="italic">"Run with me! I am tired of competing against myself."</span>',
          'You thrust your javelin into the ground and study him. An Ionian, clearly — too clever in the eyes, too light in the bones. But something about him holds your gaze. He has the look of a man who has been struck by something beyond human reckoning.',
          '<span class="bold">"I am Dorieus,"</span> you say. <span class="bold">"A Spartan does not refuse a challenge."</span>'
        ];
      } else if (cls === 'seer') {
        return [
          'You ascend to the deserted stadium. Before you see him, you <span class="bold">feel</span> him — a presence like a forge-fire, all heat and hammered iron.',
          'A youth, sturdier than you, his body bearing an ugly scar. He throws a javelin with terrifying precision. When he sees you, his sullen face softens.',
          '<span class="italic">"You have the look of the temple about you,"</span> he says. <span class="italic">"But you are no priest. Will you run with me? I am tired of this solitude."</span>',
          'You see his fate-thread glowing around him — bright and short, ending in the west. You say nothing of it.'
        ];
      } else if (cls === 'seafarer') {
        return [
          'You ascend to the stadium looking for exercise to work off the restlessness. Days on land make you itch for the deck of a ship.',
          'A youth is throwing a javelin with the precision of a man who has killed with one. Spartan, you guess — the build, the scar, the way he moves as though the world is a battlefield.',
          '<span class="bold">"You throw well,"</span> you call out. <span class="bold">"But can you run? On a ship, the slow ones drown."</span>',
          'He looks at you with frank curiosity. "I am Dorieus. I have never met a sailor who could outrun a Spartan."'
        ];
      }
      return [
        'You ascend to the deserted stadium of Delphi. A javelin flashes through the air — once, twice, rising like an omen. Then you see him.',
        'A youth, no older than yourself but sturdier. His face is sullen, his body bears an ugly scar, his muscles are knotty. Yet he exudes such confidence and strength that you think him the handsomest youth you have ever seen.',
        '<span class="bold">"Run with me!"</span> you shout. <span class="bold">"I am tired of competing against myself."</span>',
        'He thrusts the javelin into the ground and joins you at the starting line. His eyes assess you — a warrior\'s gaze, measuring a potential opponent or ally.'
      ];
    },
    choices: [
      {
        text: 'Race him — prove your speed',
        roll: {
          label: 'Foot Race',
          stat: 'body',
          success: () => {
            state.flags.won_race = true;
            renderScene('after_race');
          },
          failure: () => {
            state.flags.won_race = false;
            renderScene('after_race');
          }
        }
      }
    ]
  },

  after_race: {
    title: 'A Worthy Opponent',
    text: () => {
      const won = state.flags.won_race;
      return [
        won
          ? 'You beat him — barely, by a hand. He is breathless but hides it well. "You run well," he concedes.'
          : 'He beats you — his heavy stride more powerful than you expected. "Not bad," he says, barely winded. "For an Ionian."',
        'You compete through the afternoon. Javelin — his throw swoops far beyond yours like a hawk in flight. Broad jump — ' + (won ? 'you edge him by a hair.' : 'nearly equal.') + ' Wrestling — you look at his arms and wisely concede.',
        'The light turns golden. Sweat cools on your skin. For the first time in months, you feel something that is not guilt or fear or divine compulsion. You feel <span class="bold">alive</span>.'
      ];
    },
    choices: [
      {
        text: 'Wash in the brook together...',
        action: () => renderScene('washing_by_brook')
      }
    ]
  },

  // ---- M13: THE BROOK ----
  washing_by_brook: {
    title: 'The Brook',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'You wash in the swollen brook, rubbing each other\'s backs with sand. The water is ice-cold from mountain snowmelt.',
        'He points to the lightning scar on your body. You point to the sword wound on his chest. Two marks, two stories. The water is cold, the light is golden, and for this one moment the weight of exile lifts.',
        'You are two young men, strong and alive, cleaning the honest sweat of competition from your skin. It is the simplest and purest moment you have experienced since Ephesus.'
      ];
      if (cls === 'warrior') lines.push('Two soldiers comparing battle marks. He traces his scar with a soldier\'s pride — no shame, only the proof of survival. You understand this language without translation.');
      else if (cls === 'seer') lines.push('You see his fate-thread glowing around him — bright and short, ending in the west. The thread is beautiful. You say nothing of its brevity.');
      else if (cls === 'seafarer') lines.push('"This brook," you say, "is trying to reach the sea. Everything flows downhill to the water." He looks at you strangely. "You think like a fish," he says. It is, you realize, a compliment.');
      else lines.push('The lightning scar on your body pulses faintly in his presence — not pain, but recognition. Something in him resonates with whatever lives in you.');
      return lines;
    },
    onEnter: () => {
      state.flags.brook_moment = true;
    },
    choices: [
      {
        text: '"What battle left that mark?" — ask about his scar',
        action: () => renderScene('dorieus_story')
      },
      {
        text: 'Show him your lightning scar — "Zeus himself tried to kill me and failed"',
        action: () => {
          state.flags.showed_scar = true;
          updateStat('spirit', 1, 'Humor bridged the distance between strangers');
          renderScene('dorieus_story');
        }
      },
      {
        text: 'Stay quiet — enjoy the silence between friends',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          updateStat('fate', 1, 'The silence spoke louder than words');
          renderScene('dorieus_story');
        }
      },
      {
        text: '"Dorieus — wrestle me. I want to see if I can take a Spartan"',
        action: () => renderScene('sq_wrestling')
      },
      {
        text: 'Pick up his javelin — "Teach me to throw like that"',
        action: () => renderScene('sq_javelin')
      }
    ]
  },

  // ---- M14: THE SON OF DORIEUS ----
  dorieus_story: {
    title: 'The Son of Dorieus',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Clothed and walking down the mountain path, he speaks. His voice is different now — quieter, stripped of Spartan bravado.',
        '<span class="italic">"I am a Spartan. My name is Dorieus. My father was Dorieus the Fair — the handsomest man of his day, who left Sparta to found a colony in the west and died there."</span>',
        'His jaw tightens. <span class="italic">"My mother told me the truth before the state took me at age seven. My uncle, King Cleomenes, had bad dreams about me and sent me away. That is the Spartan way — bad dreams are taken seriously."</span>',
        'You hear in his voice the same wound you carry: the child who does not know where he belongs.'
      ];
      if (cls === 'warrior') lines.push('You understand exile from a warrior\'s perspective — to be banished is to be stripped of purpose. A sword without a hand to wield it. His pain is your pain, refracted through a different culture.');
      else if (cls === 'seer') lines.push('You see the tragic arc of his life stretching out before him like a road — westward, always westward, toward the grave his oracle described. The beauty of it breaks your heart.');
      return lines;
    },
    onEnter: () => {
      state.flags.dorieus_backstory_heard = true;
      unlockEncyclopedia('dorieus_historical');
    },
    choices: [
      {
        text: '"I was also sent away as a child — from Sybaris to Miletus, and beaten there"',
        action: () => {
          updateStat('spirit', 1, 'Shared vulnerability deepened the bond');
          renderScene('friendship');
        }
      },
      {
        text: '"Your father died in the west. The oracle sends you west. Does that not trouble you?"',
        action: () => {
          state.flags.dorieus_fate_discussed = true;
          renderScene('friendship');
        }
      },
      {
        text: '"You are stronger than any exile. Sparta\'s loss is my gain"',
        action: () => {
          updateStat('fate', 1, 'Encouragement forged a bond');
          renderScene('friendship');
        }
      }
    ]
  },

  friendship: {
    title: 'Two Exiles',
    text: [
      'Walking together, something shifts. The wariness between strangers dissolves into something rarer — trust.',
      '<span class="italic">"I like you,"</span> Dorieus says, <span class="italic">"although we Spartans usually shun strangers. But I am alone, and it is difficult to be without a companion. I would rather be dead with my name on a gravestone than here."</span>',
      'Something in his words touches the lonely place inside you. Two exiles — one from the East, one from the West. Both rejected by their cities, both prisoners of the oracle.',
      'The days that follow are the closest thing to peace you have known. You train together, eat together, argue about everything from the nature of the gods to the proper way to cook barley.'
    ],
    onEnter: () => {
      addPebble('red', 'Dorieus — the first true friend');
    },
    choices: [
      {
        text: 'Tell Dorieus about Sardis...',
        action: () => renderScene('turms_confession')
      },
      {
        text: 'Sit among the bare rocks where the underworld gods dwell',
        action: () => renderScene('sq_underworld_rocks')
      }
    ]
  },

  // ---- M15: THE CONFESSION BETWEEN FRIENDS ----
  turms_confession: {
    title: 'The Confession Between Friends',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Walking together one cold morning, you tell Dorieus about the burning of Sardis. You expect horror, disgust, the end of this fragile friendship.',
        'Instead, his eyes begin to twinkle.',
        '<span class="bold">"How can you consider yourself a criminal?"</span> he demands, clapping your shoulders. <span class="bold">"You are the hero of the Hellenes! The burning of Sardis has lit the flames of revolt all over Ionia!"</span>',
        'His words fill you with new horror. Hero? For an act of destruction you cannot undo? But Dorieus sees the world simply: war is war, glory is glory. Perhaps that simplicity is its own kind of wisdom.'
      ];
      if (cls === 'warrior') lines.push('The military framing resonates differently coming from a soldier. You have both seen battle. But you cannot share his enthusiasm for the glory of it.');
      else if (cls === 'seer') lines.push('You see the revolt spreading in vision — fire leaping from city to city across the Aegean, each flame lit by the first. Sardis was not an end. It was a beginning.');
      return lines;
    },
    onEnter: () => {
      state.flags.sardis_told_dorieus = true;
      unlockEncyclopedia('sardis_expedition');
    },
    choices: [
      {
        text: 'Accept his framing — perhaps you are a hero',
        type: 'defy',
        action: () => {
          state.flags.accepted_hero = true;
          state.omensDefied++;
          updateStat('body', 1, 'You straightened your back and accepted the weight');
          addPebble('red', 'Dorieus called me a hero — I am not sure he was wrong');
          renderScene('dorieus_oracle');
        }
      },
      {
        text: '"No. Our expedition was shameful. I ran like everyone else"',
        action: () => {
          updateStat('spirit', 1, 'Truth preserved, even when a lie would feel better');
          addPebble('red', 'Dorieus called me a hero — I am not sure he was wrong');
          renderScene('dorieus_oracle');
        }
      },
      {
        text: '"You don\'t understand. War is not what the bards make of it"',
        action: () => {
          updateStat('spirit', 1, 'You spoke a truth Dorieus could not hear');
          addPebble('red', 'Dorieus called me a hero — I am not sure he was wrong');
          renderScene('dorieus_oracle');
        }
      }
    ]
  },

  // ---- M16: DORIEUS BEFORE THE ORACLE ----
  dorieus_oracle: {
    title: 'Dorieus Before the Oracle',
    text: [
      'At last the temple servants come for Dorieus. His face lights up — rare, for that sullen mouth. He runs toward the temple. You wait by the great sacrificial altar, cold wind tugging at your cloak.',
      'When he returns, his head is bowed.',
      '<span class="italic">"The Pythia has spoken,"</span> he says quietly. <span class="italic">"Sparta is threatened by a curse should I ever return. I must sail beyond the sea. They recommend the west."</span>',
      'He pauses. <span class="bold">"My grave will lie in the west, they said. And there too I will find undying fame."</span>',
      'The words hang between you. Fame — and a grave.'
    ],
    onEnter: () => {
      state.flags.dorieus_prophecy_heard = true;
      unlockEncyclopedia('oracular_prophecy');
    },
    choices: [
      {
        text: '"Hence we shall sail east. You are still young — why hasten to your grave?"',
        action: () => {
          state.flags.suggested_east = true;
          renderScene('the_bones');
        }
      },
      {
        text: '"Then the west it is. We go together"',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          renderScene('the_bones');
        }
      },
      {
        text: '"The oracle tells every exile to go west. Good advice, not prophecy"',
        action: () => {
          updateStat('fate', 1, 'Skepticism as a shield against fear');
          renderScene('the_bones');
        }
      }
    ]
  },

  // ---- SCENE 6: The Bones ----
  the_bones: {
    title: 'The Sheep\'s Bones',
    text: [
      'By the rocks of the underground gods, where the natural stones have been worshipped for a thousand years before Apollo came to Delphi, you kneel with Dorieus.',
      'Three times each, you toss the sheep\'s bones.',
      '<span class="omen-text">Each time, they point clearly westward — away from Ionia.</span>',
      'Dorieus scowls. "There is something wrong with them. They are not prophetic."',
      'His words reveal his desire — he wants to go east, to war, to glory. But the bones, the Pythia, the priests — all say west.',
      'You face the great decision. The omens are unanimous. Do you follow them, or prove that you cannot escape your fate by defying them?'
    ],
    onEnter: () => {
      setOmen('The bones point West. The Pythia says West. The priests say West. Everything says West.');
    },
    choices: [
      {
        text: '"Let us go east — to war, to Ionia. I must prove that omens cannot prevent my doing what I will."',
        type: 'defy',
        action: () => {
          state.omensDefied++;
          updateStat('fate', 2, 'Every omen said West — you chose East');
          renderScene('choose_east');
        }
      },
      {
        text: '"The bones speak clearly. Let us go west — to Corinth first, then beyond the sea."',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          updateStat('spirit', 1, 'You trusted the signs');
          renderScene('choose_west');
        }
      },
      {
        text: '"Let us go to Corinth — it lies between east and west. There we can decide."',
        action: () => {
          renderScene('choose_corinth');
        }
      },
      {
        text: 'Watch as Dorieus hurls his javelin toward Corinth...',
        action: () => renderScene('sq_dorieus_javelin_omen')
      }
    ]
  },

  choose_east: {
    title: 'Against the Current',
    text: [
      'Dorieus grins — a rare sight on his sullen face. "Now you speak like a warrior, not an Ionian philosopher."',
      '"You don\'t understand," you say. "I want to prove to myself that I <em>cannot</em> escape my fate."',
      'He laughs. "You are contradicting yourself."',
      '"Exactly."',
      'You set off toward the coast. The wind blows from the west, pushing against you. Every step eastward feels like walking uphill, even on level ground. The omens are not pleased.',
      '<span class="omen-text">A crow watches you from a dead pine. It caws three times — a warning of blood.</span>',
      'But you walk on. Two exiles, heading the wrong way, toward war.'
    ],
    onEnter: () => {
      state.flags.chose_east = true;
      addPebble('black', 'I defied every omen and walked east');
    },
    choices: [
      { text: 'Prepare to leave Delphi...', action: () => renderScene('departure_preparations') }
    ]
  },

  choose_west: {
    title: 'Following the Thread',
    text: [
      'Dorieus nods slowly, as though confirming something he already knew. "The oracle says my grave lies in the west. I will find undying fame there, they said."',
      '"You are still young," you say. "Why hasten to your grave?"',
      'He does not answer. You walk together in silence toward the coast. The wind is at your back — warm, steady, almost guiding.',
      '<span class="omen-text">A dove\'s feather drifts past you on the breeze. You catch it instinctively. Another sign.</span>',
      'You will go west. First Corinth — the most hospitable of Greek cities, where ships sail both east and west. From there, who knows? Sicily, Italy, the lands of the mysterious Etruscans...',
    ],
    onEnter: () => {
      state.flags.chose_west = true;
      addPebble('blue', 'I followed the omens westward');
    },
    choices: [
      { text: 'Prepare to leave Delphi...', action: () => renderScene('departure_preparations') }
    ]
  },

  choose_corinth: {
    title: 'The Middle Way',
    text: [
      '"Corinth lies between all things," you say. "Between east and west, between war and peace. Let us go there and listen to the news before we decide."',
      'Dorieus scowls. "A Spartan does not wait and listen. A Spartan acts." But after a moment: "Very well. But this is <em>my</em> decision, not yours."',
      'You suppress a smile. "Of course."',
      'Walking down from the mountains, Dorieus throws his javelin ahead of him as far as he can in the direction of Corinth. When you reach it, you see it has struck a rotted piece of ship\'s rail washed up by the sea.',
      '<span class="omen-text">You both feel the omen to be unfavorable. You say nothing and avoid each other\'s eyes.</span>',
      'You pull the javelin free and walk on without looking back.'
    ],
    onEnter: () => {
      state.flags.chose_corinth = true;
      addPebble('white', 'The middle way — Corinth');
    },
    choices: [
      { text: 'Prepare to leave Delphi...', action: () => renderScene('departure_preparations') }
    ]
  },

  // ---- M18: DEPARTURE PREPARATIONS ----
  departure_preparations: {
    title: 'Preparations for Departure',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The morning of departure. You pack your few possessions: clean garments, a purse of coins lighter than when you arrived, the knucklebones, whatever else you have gathered.',
        'Dorieus sharpens his javelin with a flat stone, testing the point against his thumb. The deserted buildings of Delphi watch you leave like old men who have seen too many young travelers go.',
        'The temple servant at the gate nods. <span class="italic">"May the gods of whatever land you find protect you,"</span> he says. It is the kindest farewell you have received in a long time.'
      ];
      if (cls === 'warrior') lines.push('You leave like a soldier departing a posting — efficiently, without sentiment. But at the gate you pause and look back once. Just once.');
      else if (cls === 'seer') lines.push('You feel the sacred ground recede like a tide. The visions that came so freely here will be harder to find on the road. You are leaving the center of the world for its edge.');
      else if (cls === 'seafarer') lines.push('Finally — you are heading toward the sea. The mountain air that suffocated you for months begins to thin, and you can almost taste salt on the wind.');
      else lines.push('The mountain where you danced in the storm rises behind you. Whatever answered your dance — the winged figure, the guardian spirit — does not speak now. Perhaps it is waiting at the other end of the road.');
      return lines;
    },
    choices: [
      {
        text: 'Take one last look back at the temple',
        action: () => {
          state.flags.departure_manner = 'reflective';
          updateStat('spirit', 1, 'The temple\'s image burned into your memory');
          renderScene('the_road_south');
        }
      },
      {
        text: 'Walk away without looking — forward is the only direction',
        action: () => {
          state.flags.departure_manner = 'decisive';
          updateStat('body', 1, 'You left the past behind');
          renderScene('the_road_south');
        }
      },
      {
        text: '"What happens to the Pythia? Will she be all right?"',
        action: () => {
          state.flags.departure_manner = 'concerned';
          if (state.flags.cared_for_pythia) {
            updateStat('fate', 1, 'The servant smiled — "She speaks your name sometimes. In her sleep"');
          } else {
            updateStat('fate', 1, 'The servant shrugged — "The god takes care of his own"');
          }
          renderScene('the_road_south');
        }
      },
      {
        text: 'Say farewell to the priests of Apollo',
        action: () => renderScene('sq_farewell_priests')
      },
      {
        text: 'Visit the Castalian Spring one last time',
        action: () => renderScene('sq_last_castalia')
      }
    ]
  },

  // ---- M19: THE ROAD SOUTH ----
  the_road_south: {
    title: 'The Road South',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'You and Dorieus descend from the mountains. The road to the coast passes through Megara, where shepherds watch you from hillsides and the sea glimmers in the distance.',
        'Dorieus throws his javelin ahead of him as far as he can, then walks to retrieve it and throws again — the Spartan version of making a tedious road bearable.',
        'When the javelin strikes something at the roadside, he pulls it free without comment. You both saw what it struck: a rotted piece of ship\'s rail, washed far inland by some ancient flood.',
        '<span class="omen-text">An omen? Or just debris? You walk on without discussing it.</span>'
      ];
      if (cls === 'seer') lines.push('You see the omen clearly and it chills you. The ship\'s rail is old — decades, perhaps centuries. Whatever storm carried it this far inland was beyond human scale. The sea remembers what men forget.');
      else if (cls === 'seafarer') lines.push('You recognize the timber — cedar, salt-eaten, the kind used for merchant galleys. You know what storm destroyed this ship. You know the sea that swallowed it. The sea is waiting.');
      return lines;
    },
    onEnter: () => {
      state.flags.road_south_event = true;
      unlockEncyclopedia('omens_road');
    },
    choices: [
      {
        text: '"That ship\'s rail. What do you think it means?"',
        action: () => {
          state.flags.acknowledged_rail_omen = true;
          updateStat('spirit', 1, 'You spoke the omen aloud');
          renderScene('coast_decision');
        }
      },
      {
        text: 'Say nothing — some signs are best left unread',
        action: () => {
          updateStat('fate', 1, 'Silence preserved the mystery');
          renderScene('coast_decision');
        }
      },
      {
        text: 'Throw the javelin yourself — test your own luck',
        roll: {
          label: 'Javelin Throw',
          stat: 'body',
          success: () => {
            updateStat('body', 1, 'The javelin flew true — Dorieus nodded with respect');
            renderScene('coast_decision');
          },
          failure: () => {
            renderScene('coast_decision');
          }
        }
      },
      {
        text: 'The road forks at Megara — pause and consider',
        action: () => renderScene('sq_megara')
      }
    ]
  },

  // ---- M20: THE SHORE OF DECISION ----
  coast_decision: {
    title: 'The Shore of Decision',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'You reach the coast. The sea stretches before you — grey-green, restless, vast. Ships in the harbor creak against their moorings. The wind carries salt and the calls of gulls.',
        'This is the edge of the world you know. Everything behind you — Ephesus, the storm, the oracle, the priests, the winter of purification — was preparation. Everything ahead is the unknown.',
        'Dorieus stands beside you, his javelin over his shoulder, staring at the water he has been trained to distrust. Two exiles at the shoreline. The road ends here. The sea begins.'
      ];
      if (state.flags.chose_east) {
        lines.push('<span class="omen-text">The wind blows against you. Good. You chose east, against every omen. Let the sea try to stop you.</span>');
      } else if (state.flags.chose_west) {
        lines.push('<span class="omen-text">The wind is at your backs. The gods approve — or at least, they do not object. The western sea awaits.</span>');
      } else {
        lines.push('<span class="omen-text">Corinth lies ahead — the city between worlds, where east meets west and strangers are judged by their coin, not their origin.</span>');
      }
      if (cls === 'seafarer') lines.push('Homecoming. The sea is where you belong. Your feet find the rhythm of the waves before you even board a ship.');
      else if (cls === 'seer') lines.push('The sea surface shows flickering visions — sails, storms, a woman\'s face reflected in dark water. Act II of your story is already written. You just haven\'t read it yet.');
      else if (cls === 'warrior') lines.push('The sea is an enemy to be conquered. Dorieus feels it too — the Spartan distrust of water deeper than a river. But the road leads only forward now.');
      else lines.push('The waves echo the rhythm of the storm dance. The same force that moved through you on the mountain moves through the sea. It has been waiting.');
      return lines;
    },
    onEnter: () => {
      state.flags.reached_coast = true;
    },
    choices: [
      {
        text: 'The journey continues...',
        action: () => renderScene('act1_end')
      }
    ]
  },

  // ---- ACT 1 END ----
  act1_end: {
    title: 'End of Act I',
    text: () => {
      const pebbleCount = state.pebbles.length;
      const cls = CLASSES[state.charClass];
      const dir = state.flags.chose_east ? 'east, toward war' : state.flags.chose_west ? 'west, toward destiny' : 'to Corinth, the city between worlds';
      const companion = state.charClass === 'warrior' ? 'an Ionian dreamer' : state.charClass === 'seer' ? 'a Spartan warrior' : state.charClass === 'seafarer' ? 'a Spartan exile' : 'a Spartan';
      return [
        `<span class="bold">${cls.name} — you leave Delphi with ${pebbleCount} pebbles in your pouch and ${companion} at your side.</span>`,
        `You are heading ${dir}. The Pythia's words echo in your mind. Whether you believe her or not, the road will reveal the truth.`,
        `<span class="omen-text">Omens followed: ${state.omensFollowed} — Omens defied: ${state.omensDefied}</span>`,
        state.omensDefied > state.omensFollowed
          ? 'You have chosen to fight against the current of fate. The gods are watching — some with displeasure, others with amusement. Turms the defiant.'
          : state.omensFollowed > state.omensDefied
          ? 'You have listened to the signs and followed where they led. The current carries you gently, but toward what shore? Turms the seeker.'
          : 'You have walked the line between obedience and defiance — a path more dangerous than either. Turms the uncertain.',
        '<div style="margin-top:2rem; padding:1.2rem; border-left:2px solid var(--terra); background:rgba(184,80,66,0.06); border-radius:0 4px 4px 0; font-size:15px;">' +
        '<div style="color:var(--terra); font-style:italic; margin-bottom:0.5rem;">Meanwhile, far to the west, on the island of Sicily...</div>' +
        '<div style="color:#998877;">A woman named <span style="color:var(--warm);">Arsinoe</span> watches the harbor of Himera from a rooftop garden. She is beautiful, dangerous, and patient. She has been waiting — though she does not yet know for whom.</div>' +
        '<div style="color:#887766; font-size:13px; margin-top:0.5rem;">When your paths cross, nothing will be the same. But that is a story for <span style="color:var(--gold);">Act II</span>.</div>' +
        '</div>',
        '<div style="text-align:center; margin-top:2rem; padding:1.5rem; border:1px solid var(--gold); border-radius:4px;">' +
        '<div style="font-family:Cinzel,serif; color:var(--gold); font-size:20px; margin-bottom:0.5rem;">Act I Complete</div>' +
        '<div style="font-size:14px; color:#998877;">Your pebbles have been recorded. When Act II is written, they will remember your choices.</div>' +
        '<div style="font-size:13px; color:var(--sage); margin-top:1rem;">Spirit: ' + state.spirit + ' · Body: ' + state.body + ' · Fate: ' + state.fate + '</div>' +
        '</div>'
      ];
    },
    choices: [
      { text: 'Continue to Act II — The Western Sea', target: 'act2_title', action: () => renderScene('act2_title') },
      { text: 'Review your pebbles and start again', action: () => {
        state.charClass = null;
        state.spirit = 5; state.body = 6; state.fate = 3;
        state.pebbles = []; state.flags = {};
        state.omensFollowed = 0; state.omensDefied = 0;
        state.rerollAvailable = false;
        updateStat('spirit', 0); updateStat('body', 0); updateStat('fate', 0);
        document.getElementById('char-name').textContent = '—';
        document.getElementById('char-desc').textContent = 'Choose your archetype...';
        renderPebbles();
        renderScene('title');
      }}
    ]
  },

  // ============================================================
  // ACT II — THE WESTERN SEA
  // ============================================================

  act2_title: {
    title: '',
    text: [
      '<div id="title-screen"><h1>ACT II</h1>' +
      '<div class="subtitle">The Western Sea</div>' +
      '<div class="act">Corinth — Phoenician Waters — Sicily — Eryx</div>' +
      '<div class="intro">The oracle said West. The bones said West. Whether you obeyed or defied, the current of fate carries you toward the same shore.<br><br>' +
      'Ahead lie pirate ships and plundered seas, a city of hot springs and strange customs, and on a mountain at the edge of the world — a woman whose face changes with every glance.<br><br>' +
      '<em>Your pebbles remember what you chose. The gods are still watching.</em></div></div>'
    ],
    choices: [
      { text: 'Continue...', action: () => renderScene('corinth_arrival') }
    ]
  },

  corinth_arrival: {
    title: 'Corinth',
    text: () => {
      const east = state.flags.chose_east;
      const west = state.flags.chose_west;
      const lines = [];
      if (east) {
        lines.push('You walked east — toward Ionia, toward war. But the wind blew against you every step, and at every port the news grew worse. The Persians had crushed the revolt. Miletus had fallen. The fleet was scattered.');
        lines.push('At last, in Corinth, you stopped. Not because you chose to, but because there was nowhere east left to go. The omens had been right all along.');
        lines.push('<span class="omen-text">Even defiance has its limits. The current carried you west despite yourself.</span>');
      } else if (west) {
        lines.push('You followed the omens westward, through mountain passes and coastal roads, until you reached the great isthmus. Corinth sprawls across it — the richest, most corrupt, most alive of all Greek cities.');
        lines.push('Ships from every nation crowd its two harbors. The air smells of perfume, salt, and money.');
      } else {
        lines.push('The road to Corinth was shorter than you expected. The city sprawls across the isthmus between two seas — a crossroads of the entire Mediterranean. Ships crowd both harbors, merchants shout in a dozen languages.');
        lines.push('You chose the middle way, and Corinth is the middle of everything.');
      }
      lines.push('Dorieus walks beside you, restless. "I need a war," he mutters. "A Spartan without a war is like a sword without a hand."');
      lines.push('At the harbor, you hear sailors whispering about a man named <span class="bold">Dionysius of Phocaea</span> — a captain who fought at the battle of Lade and now prowls the eastern seas with three warships, raiding Persian supply lines.');
      return lines;
    },
    onEnter: () => { setOmen('Corinth: where all roads meet. A pirate captain seeks crew.'); },
    choices: [
      { text: 'Seek out this Dionysius — a ship is a way west', action: () => renderScene('corinth_dionysius') },
      { text: 'Explore Corinth first — gather information', action: () => { updateStat('spirit', 1, 'Knowledge gathered in Corinth'); renderScene('corinth_dionysius'); } }
    ]
  },

  corinth_dionysius: {
    title: 'The Pirate of Phocaea',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'You find him at a dockside tavern — a massive man with sun-blackened skin, a rope-scarred fist wrapped around a wine cup, and eyes that miss nothing. His men sit around him like wolves around a fire.',
        '<span class="italic">"So,"</span> says Dionysius, looking you over. <span class="italic">"More refugees from the great Ionian catastrophe. What can you do?"</span>'
      ];
      if (cls === 'warrior') {
        lines.push('Dorieus steps forward. "I am Dorieus, son of Dorieus, a Spartan. I have never lost a fight."');
        lines.push('Dionysius laughs. "A Spartan! On my ship! The gods have a sense of humor. Can you row?"');
        lines.push('"I can kill," says Dorieus flatly. Dionysius stops laughing.');
      } else if (cls === 'seafarer') {
        lines.push('You step forward and introduce yourself. Dionysius stares — a fellow Phocaean.');
        lines.push('<span class="bold">"Another son of Phocaea?"</span> He grins. "The gods are playing games. But can you navigate?"');
        lines.push('"By the stars, the currents, the taste of the water and the color of the sky," you say. He stops grinning and nods with respect.');
      } else if (cls === 'seer') {
        lines.push('Before you can speak, Dionysius points at you. "You — with the strange eyes. My helmsman says a storm is coming but the sky is clear. What do you see?"');
        lines.push('You close your eyes. The vision comes unbidden — dark clouds, white-capped waves, a broken mast. "Your helmsman is right," you say. "Two days. From the northwest."');
        lines.push('Dionysius watches you for a long moment. "Get on the ship."');
      } else {
        lines.push('"I am Turms of Ephesus," you say. "I have no skills useful to a pirate."');
        lines.push('Dionysius studies your face. "You have an Etruscan look about you. That face alone might be useful where we\'re going." He leans forward. "I\'m heading west. Through Phoenician waters, past Cyprus, and then — Sicily. The western sea. Interested?"');
      }
      lines.push('He outlines his plan: raid the Persian supply lines while the Persian fleet is busy at Miletus, then sail west to Sicily with the plunder. Three warships, seventy men, and more loot than any of them have ever seen.');
      return lines;
    },
    choices: [
      {
        text: '"We\'ll join you. West is where the omens point."',
        type: 'omen',
        action: () => { state.omensFollowed++; renderScene('the_voyage'); }
      },
      {
        text: '"We\'ll join you — but not for the omens. For the adventure."',
        type: 'defy',
        action: () => { state.omensDefied++; updateStat('body', 1, 'A warrior\'s choice — strength through action'); renderScene('the_voyage'); }
      }
    ]
  },

  the_voyage: {
    title: 'Phoenician Waters',
    text: [
      'You sail east first — into the heart of Persian-controlled waters. Dionysius is fearless, cunning, and utterly without mercy.',
      'In the straits near Rhodes you capture a grain fleet. Off Cyprus, a merchant vessel laden with gold, silver, purple cloth, and passengers. Dionysius kills the men with his axe. The women he leaves to his crew, then has their throats slit.',
      'You watch in horror. <span class="bold">This is not war. This is butchery.</span>',
      'Dorieus refuses to participate. "I fight armed men," he says. "The killing of unarmed men is beneath my dignity." Dionysius accepts this with a shrug — he respects strength in any form.',
      'But the loot piles up. Gold chains, Phoenician silver, rolls of purple cloth. You are becoming rich on the blood of strangers.'
    ],
    onEnter: () => { setOmen('The sea demands a price for passage. What are you willing to pay?'); },
    choices: [
      {
        text: 'Confront Dionysius — this slaughter must stop',
        action: () => { updateStat('spirit', 1, 'You spoke against injustice'); state.flags.confronted_dionysius = true; renderScene('sea_battle_choice'); }
      },
      {
        text: 'Stay silent — survival requires ugly compromises',
        action: () => { updateStat('fate', -1, 'Silence in the face of evil weighs on the soul'); renderScene('sea_battle_choice'); }
      }
    ]
  },

  sea_battle_choice: {
    title: 'The Price of Gold',
    text: () => {
      const confronted = state.flags.confronted_dionysius;
      const lines = [];
      if (confronted) {
        lines.push('"Turms," says Dionysius, lowering his axe, "you call me merciless. But a man who leaves witnesses leaves enemies. I learned that in Ionia."');
        lines.push('He studies you. "Still — I respect a man who speaks his mind on a pirate ship. Most would keep quiet and count their gold. I won\'t change, but I\'ll remember what you said."');
        lines.push('<span class="omen-text">Dionysius treats you differently after that — with a wary respect, like a man who has found a conscience he doesn\'t want.</span>');
      } else {
        lines.push('You say nothing. The screams fade. The gold accumulates. At night you lie on the deck and stare at the stars and wonder what kind of man you are becoming.');
        lines.push('<span class="omen-text">The sea is vast and indifferent. It does not care about the blood on your deck.</span>');
      }
      lines.push('Weeks pass. Then Dionysius summons the wind for the final crossing — west, toward Sicily. The sea darkens. A storm front approaches from the horizon like a wall of black horses.');
      lines.push('"All hands!" roars Dionysius. "This is the crossing. We go through, or we go under."');
      return lines;
    },
    choices: [
      { text: 'Brace for the storm...', action: () => renderScene('sea_storm_act2') }
    ]
  },

  sea_storm_act2: {
    title: 'The Crossing',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The storm hits like a fist. Waves higher than the mast crash over the deck. The ship groans, rolls, and for a terrible moment you feel the hull <span class="bold">lift clear of the water</span>.',
        'Men are swept overboard. The ropes snap. Dionysius is lashed to the helm, screaming orders that no one can hear over the wind.'
      ];
      if (cls === 'seafarer') {
        lines.push('This is your element. You <span class="bold">feel</span> the currents beneath the chaos, the rhythm inside the storm. Your hands find the ropes instinctively.');
        lines.push('<span class="omen-text">The wind knows you. It has always known you.</span>');
      } else if (cls === 'seer') {
        lines.push('You saw this storm two days ago. You warned them. But seeing it and <span class="bold">surviving</span> it are different things. The visions come now unbidden — the ship breaking apart, bodies in the water, darkness.');
        lines.push('You must focus. Pull yourself back from the vision and into your body. <span class="bold">Your body is all that can save you now.</span>');
      } else {
        lines.push('A wave sweeps the deck. You are flung against the railing. Your fingers close around a rope — the only thing between you and the black water.');
      }
      lines.push('The ship tilts at a sickening angle. You must hold on or be thrown into the sea.');
      return lines;
    },
    onEnter: () => { setOmen('The sea tests all who cross it. Not all survive.'); },
    choices: [
      {
        text: 'Hold on with everything you have — trust your body',
        roll: {
          label: 'Survive the Crossing',
          stat: 'body',
          success: () => renderScene('sea_survived_act2'),
          failure: () => renderScene('sea_death')
        }
      },
      {
        text: 'Call the wind — summon the storm dance',
        roll: {
          label: 'Command the Storm',
          stat: 'spirit',
          success: () => { state.flags.summoned_wind = true; renderScene('sea_survived_act2'); },
          failure: () => renderScene('sea_death')
        }
      }
    ]
  },

  sea_survived_act2: {
    title: 'Land!',
    text: () => {
      const summoned = state.flags.summoned_wind;
      const lines = [];
      if (summoned) {
        lines.push('Something seizes you — the same ecstasy as on the road to Delphi. You stagger to your feet on the rolling deck, raise your arms, and <span class="bold">dance</span>.');
        lines.push('The men stare in terror. But the wind shifts. The waves part. The storm does not end — but it bends around you, as though the sea itself has decided to let you pass.');
        lines.push('Dionysius, still lashed to the helm, stares at you with an expression you have never seen on his face before: <span class="bold">fear</span>.');
        lines.push('"What are you?" he whispers when the storm has passed.');
      } else {
        lines.push('Your fingers bleed. Your muscles scream. But you hold on — through the worst of it, through three hours of darkness and salt and noise that is not noise but the voice of the sea trying to kill you.');
        lines.push('And then — silence. The storm passes as quickly as it came. The ship still floats, though it lists badly. Half the crew is gone.');
      }
      lines.push('At dawn, through the mist, you see it: a coastline. And rising above it, a gigantic mountain capped with smoke and fire.');
      lines.push('<span class="bold">"Sicily,"</span> breathes Dionysius. <span class="bold">"We\'ve made it."</span>');
      return lines;
    },
    onEnter: () => {
      updateStat('body', -1, 'The crossing took a physical toll');
      addPebble('blue', 'The Crossing — I survived the western sea');
    },
    choices: [
      { text: 'Sail for the shore...', action: () => renderScene('sicily_shores') }
    ]
  },

  sea_death: {
    title: 'The Sea Takes You',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The rope snaps. Or your fingers fail. Or the wave is simply too large and too indifferent to notice one small human body.',
        'You are in the water. The ship is already gone — swallowed by darkness and foam. The cold hits you like a wall.'
      ];
      if (cls === 'warrior') {
        lines.push('You fight the sea as you would fight any enemy — with fury, with discipline, with everything Sparta taught you. But the sea is not an enemy. It simply <span class="bold">is</span>.');
        lines.push('<span class="omen-text">You drown as you lived — refusing to surrender. But the sea does not care about courage.</span>');
      } else if (cls === 'seer') {
        lines.push('In the water, the visions come one final time. You see everything — every shore you will never reach. The pattern is complete and beautiful.');
        lines.push('<span class="omen-text">You slip beneath the surface with your eyes open. The last thing you see is the face of the goddess, and she is weeping.</span>');
      } else if (cls === 'seafarer') {
        lines.push('The sea was your home. And now it takes you back — not with malice, but with the casual indifference of a mother turning in her sleep.');
        lines.push('<span class="omen-text">You always knew this was how it would end. Every sailor does.</span>');
      } else {
        lines.push('The water closes over your head. You think of the Pythia\'s words: <em>"You come from the West."</em> You never got there.');
        lines.push('<span class="omen-text">Somewhere in the darkness, Dorieus is shouting your name. But the sea is louder than any Spartan.</span>');
      }
      lines.push('<div style="text-align:center; margin-top:2rem; padding:2rem; border:2px solid var(--blood); border-radius:4px; background:rgba(139,37,0,0.1);">' +
        '<div style="font-family:Cinzel,serif; color:var(--blood); font-size:24px; margin-bottom:0.5rem;">YOU HAVE DIED</div>' +
        '<div style="font-size:15px; color:var(--sand); margin-bottom:0.5rem; font-style:italic;">"The sea gives nothing freely. The sea takes everything eventually."</div>' +
        '<div style="font-size:13px; color:#887766;">You were warned about the crossing. Some journeys end before the destination.</div>' +
        '</div>');
      return lines;
    },
    choices: () => {
      const c = [];
      if (hasCheckpoint()) c.push({ text: 'Load last checkpoint — ' + (getCheckpointLabel() || 'saved game'), action: () => loadCheckpoint() });
      c.push({ text: 'Face the storm again (restart from Corinth)', action: () => {
        const cls = CLASSES[state.charClass];
        state.spirit = cls.spirit; state.body = cls.body; state.fate = cls.fate;
        state.pebbles = state.pebbles.filter(p => p.label.indexOf('Crossing') === -1);
        state.flags = Object.fromEntries(Object.entries(state.flags).filter(([k]) => k.startsWith('chose_') || k === 'danced_in_storm' || k === 'won_race'));
        state.rerollAvailable = (state.charClass === 'seafarer');
        updateStat('spirit', 0); updateStat('body', 0); updateStat('fate', 0);
        renderPebbles();
        renderScene('corinth_arrival');
      }});
      c.push({ text: 'Start over from the beginning', action: () => {
        state.charClass = null;
        state.spirit = 5; state.body = 6; state.fate = 3;
        state.pebbles = []; state.flags = {};
        state.omensFollowed = 0; state.omensDefied = 0;
        state.rerollAvailable = false;
        updateStat('spirit', 0); updateStat('body', 0); updateStat('fate', 0);
        document.getElementById('char-name').textContent = '—';
        document.getElementById('char-desc').textContent = 'Choose your archetype...';
        renderPebbles();
        renderScene('title');
      }});
      return c;
    }
  },

  sicily_shores: {
    title: 'The Shores of Sicily',
    text: [
      'The ships barely make it. Water rises to the rowers\' benches as you limp into a river mouth. One vessel runs aground with a groan and rolls onto its side. The men leap into the shallows and drag themselves onto land.',
      'You lie on the grass, feeling the solid earth beneath you, and laugh with the sheer joy of being alive. Even Dorieus smiles.',
      '<span class="italic">"The land of my father\'s death greets me with thunder and pillars of fire,"</span> he says, watching the smoking mountain. <span class="italic">"I know now why the sheep\'s bones pointed westward."</span>',
      'A crowd gathers — curious, friendly, speaking Greek in a strange dialect. They tell you this is <span class="bold">Himera</span>, a free city ruled by an old tyrant named Krinippos. Dionysius negotiates sanctuary for the winter.',
      'For the first time in months, you are safe.'
    ],
    choices: [
      { text: 'Enter the city...', action: () => renderScene('himera_gates') }
    ]
  },

  himera_gates: {
    title: 'Himera',
    text: [
      'Through the gates you see a living city — craftsmen at their looms, merchants at their stalls, temples to Poseidon, Demeter, and even the Carthaginian Baal. The air smells of hot springs and baking bread.',
      'You notice the emblem of a <span class="bold">cock</span> carved into the gate frame and stamped on every coin. Dorieus stares at it with recognition.',
      '<span class="italic">"The cock of Herakles,"</span> he whispers. <span class="italic">"We were destined to come here."</span>',
      'The Himerans compete to offer you hospitality. Gradually your group shrinks as men peel off to accept invitations, until only you, Dorieus, and Mikon the physician remain.',
      'Following a white feather that drifts past on the breeze, you find yourselves before a bronze gate depicting a satyr and a fleeing nymph. The door creaks open at your touch.'
    ],
    onEnter: () => { setOmen('A white feather led you to this door. The goddess is guiding you.'); },
    choices: [
      { text: 'Step into the garden...', action: () => renderScene('tanakil_feast') }
    ]
  },

  tanakil_feast: {
    title: 'Tanakil\'s House',
    text: [
      'A large woman in a striped robe confronts you — proud, once beautiful, with black eyes that flash dangerously. <span class="bold">"Are you thieves?"</span> she demands.',
      'But when Dorieus declares himself a Spartan, her manner changes entirely. She introduces herself as <span class="bold">Tanakil</span>, the finest hostess in Himera, and within the hour you are bathed, oiled, dressed in fresh robes, and reclining on couches in her banquet room.',
      'The food is extraordinary. Lamb, beef, boned birds on skewers, root vegetables in mustard sauce. Three girls sing old Himeran songs, then dance. Mint wine that makes your limbs tingle and your thoughts dissolve.',
      'Tanakil watches you all with glittering eyes. She is a spider, you realize — a magnificent, generous, very dangerous spider. And you have walked into her web willingly.',
      '<span class="omen-text">You notice that her eyes linger longest on Dorieus. Something is being planned that you cannot yet see.</span>'
    ],
    onEnter: () => {
      updateStat('body', 2, 'Tanakil\'s feast restored your strength');
      updateStat('spirit', 1, 'Warmth and hospitality after the sea');
    },
    choices: [
      { text: 'Settle into Himera for the winter...', action: () => renderScene('himera_winter') }
    ]
  },

  himera_winter: {
    title: 'The Sicilian Winter',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Weeks pass. The Sicilian winter is mild and gentle. Dionysius puts his men to work raising the city wall, but you are free to explore.',
        'At the Etruscan trading post you meet <span class="bold">Lars Alsir</span>, a merchant with oval eyes and a straight nose — a face that looks eerily like your own reflection.'
      ];
      if (cls === 'seer') {
        lines.push('Lars Alsir studies you with knowing eyes. "You have the sight," he says. "Among our people, those with the sight are honored. Among the Greeks, they are feared."');
        lines.push('He teaches you to read the Etruscan liver-signs. The knowledge comes to you not as learning but as <span class="bold">remembering</span>.');
      } else if (cls === 'warrior') {
        lines.push('Lars Alsir looks at you and laughs softly. "A Spartan with an Etruscan face. The gods are generous with their jokes."');
        lines.push('"My face is Spartan," you growl. But when he holds up a polished bronze mirror, the resemblance is undeniable.');
      } else {
        lines.push('"You could pass for an Etruscan anywhere," Lars Alsir tells you. "The oval face, the straight nose, the wide mouth. Have you never wondered about your origins?"');
        lines.push('His words unsettle something deep within you. The thunderbolt, the missing memory, the strange familiarity of this western land...');
      }
      lines.push('Lars Alsir gives you a censer as a gift and speaks of <span class="bold">Turan</span> — the Etruscan goddess of love, whose emblem is an ivy leaf. "The Etruscan gods follow an Etruscan wherever he may be reborn," he says mysteriously.');
      lines.push('But it is another encounter that will change everything. Through Lars Alsir\'s shop comes <span class="bold">Kydippe</span>, the granddaughter of the tyrant — fifteen years old, golden-eyed, and devastating.');
      return lines;
    },
    onEnter: () => {
      addPebble('white', 'Lars Alsir — "You could pass for an Etruscan"');
    },
    choices: [
      { text: 'You cannot resist Kydippe\'s pull...', action: () => renderScene('kydippe_trap') }
    ]
  },

  kydippe_trap: {
    title: 'The Golden Necklace',
    text: [
      'You are obsessed. Kydippe\'s smile haunts your sleep. You circle her grandfather\'s house like a lovesick fool, hoping for a glimpse of her.',
      'Lars Alsir helps you set a trap — a necklace of golden grains, displayed when Kydippe visits the Etruscan shop. She sees it, wants it, and Lars Alsir names you as the buyer.',
      '<span class="italic">"Oh, Turms,"</span> she breathes, <span class="italic">"won\'t you sell it to me?"</span>',
      'You name your price: one silver coin and a kiss. She pretends shock, hesitates, then parts her lips. The kiss is brief and calculated. She takes the necklace and the coin.',
      '<span class="bold">"Frankly,"</span> she says coldly, <span class="bold">"it was like kissing the wet nose of a calf."</span>',
      'She leaves you poorer, humiliated, and more in love than ever. She is shrewder than you — and you know it.'
    ],
    onEnter: () => {
      updateStat('spirit', -1, 'Kydippe\'s rejection wounds your pride');
      state.flags.met_kydippe = true;
    },
    choices: [
      {
        text: 'Pray to Aphrodite for release from this obsession',
        type: 'omen',
        action: () => { state.omensFollowed++; renderScene('road_to_eryx'); }
      },
      {
        text: 'Try again with Kydippe — persistence must prevail',
        type: 'defy',
        action: () => { state.omensDefied++; updateStat('spirit', -1, 'Kydippe is ice that will not melt'); renderScene('road_to_eryx'); }
      }
    ]
  },

  road_to_eryx: {
    title: 'The Road to Eryx',
    text: [
      'Dorieus announces a journey to <span class="bold">Eryx</span> — the mountain city on Sicily\'s western tip, home to the most famous temple of Aphrodite in all the western sea.',
      'Tanakil will go to have new teeth made. Mikon will accompany his wife Aura. And you — you will beg Aphrodite to free you from Kydippe\'s spell.',
      'You travel by horse and donkey through the Sicilian hills. The land is lush, strange, and ancient. Siculian shepherds watch you from hilltops. Sacred springs bubble from the earth.',
      'On the third day, you see Eryx — a mountain rising sheer from the coastal plain, its summit wreathed in cloud. On top, barely visible through the mist, the <span class="bold">Temple of Aphrodite</span>.',
      '<span class="omen-text">Doves circle the mountain in a white spiral. The goddess is awake.</span>'
    ],
    onEnter: () => {
      setOmen('Eryx: where the goddess of love rules from the clouds. You came to forget Kydippe. The goddess has other plans.');
    },
    choices: [
      { text: 'Climb the mountain to the temple...', action: () => renderScene('temple_eryx') }
    ]
  },

  temple_eryx: {
    title: 'The Temple of Aphrodite',
    text: [
      'The temple crowns the mountain like a jewel. Priests with bead-trimmed headbands and silver rattles escort you through colonnaded courts where doves nest in every crevice.',
      'The air is thick with myrrh and the sound of distant flutes. Sacred women move through the shadows — trained from girlhood in the arts of the goddess.',
      'You tell the priests you wish to sleep the <span class="bold">Sleep of the Goddess</span> — the sacred ritual in which suppliants lie in the temple overnight and receive visions to heal their hearts.',
      '<span class="italic">"Your offering is accepted,"</span> says the chief priest. <span class="italic">"The goddess will show you what you need to see. Whether you can bear it is another matter."</span>',
      'At nightfall, you are led to a dark chamber. A couch. A woolen mantle embroidered with doves. A single lamp. The door closes behind you.'
    ],
    choices: [
      { text: 'Close your eyes and submit to the goddess...', action: () => renderScene('goddess_sleep') }
    ]
  },

  goddess_sleep: {
    title: 'The Sleep of the Goddess',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The myrrh-scented darkness swallows you. At first there is nothing — only the distant sound of the sea far below the mountain.',
        'Then the visions come.'
      ];
      if (cls === 'seer') {
        lines.push('For you, the veil between worlds was always thin. Now it dissolves entirely. You see Kydippe — but she transforms before your eyes into a rabbit that flees into darkness. The vision answers your question: <span class="bold">she was never yours</span>.');
        lines.push('Then — another presence. Not a vision but a <span class="bold">person</span>. The lamp flickers. Someone is in the room.');
      } else if (cls === 'warrior') {
        lines.push('You don\'t trust visions. You lie rigid on the couch, one hand near your hidden knife, waiting. The air shifts. The lamp flickers. A shadow moves at the edge of the light.');
        lines.push('Every instinct says: threat. But the shadow smells of myrrh and carries no weapon.');
      } else if (cls === 'seafarer') {
        lines.push('The rocking of the couch reminds you of the sea. You drift between sleep and waking. Kydippe\'s face appears — and dissolves like foam.');
        lines.push('Then the lamp gutters and you feel a presence. Someone has entered the chamber. The air changes — warmer, charged, like the moment before a squall.');
      } else {
        lines.push('You see Kydippe, but as you reach for her she transforms — shifting through the faces of women you have known and women you have never seen. She becomes a rabbit and flees.');
        lines.push('Then — softly, so softly — you feel a hand on your face. The visions shatter. Someone is <span class="bold">here</span>.');
      }
      lines.push('A woman\'s voice, barely a whisper: <span class="italic">"Are you awake?"</span>');
      lines.push('The lamplight catches her face for just a moment — high slanting brows, a vivid mouth, eyes that seem to hold a thousand different faces. She is not Kydippe. She is not anyone you have ever seen. And yet she is the most familiar person in the world.');
      return lines;
    },
    choices: [
      { text: '"Who are you?"', action: () => renderScene('arsinoe_night') }
    ]
  },

  arsinoe_night: {
    title: 'Arsinoe',
    text: [
      'She does not answer. Instead she sits on the edge of your couch and studies you with those impossible eyes — eyes that seem to change color as you watch.',
      '<span class="italic">"Tell me your name,"</span> you plead, <span class="italic">"so that I may know you."</span>',
      'She shakes her head. "If you knew my name you would have me in your power. I belong to the goddess. I cannot be dominated by any man."',
      'But something stronger than either of you is at work. You feel it — a force that pins you together like iron to lodestone.',
      '"You cannot escape me," you tell her. "In starting a new life a person chooses a new name. At this very moment I am giving you a name — <span class="bold">Arsinoe</span>."',
      '"Arsinoe," she repeats slowly, savoring it. "How did you invent that? Have you known an Arsinoe?"',
      '"Never. The name just came to me. It came from somewhere beyond us."',
      'She looks at you — really looks at you — and her face changes one final time. Not into a mask of the goddess, but into <span class="bold">herself</span>.',
      '<span class="omen-text">"Turms," she whispers. "Swear that you are only a human."</span>'
    ],
    onEnter: () => {
      setOmen('You came to Eryx to forget one woman. You found another. The goddess is more cunning than you knew.');
      addPebble('red', 'Arsinoe — "Swear that you are only a human"');
    },
    choices: [
      {
        text: '"I am human — but I was born of a thunderbolt, and the gods have marked me."',
        action: () => { updateStat('spirit', 2, 'The truth, spoken at last'); renderScene('arsinoe_day'); }
      },
      {
        text: '"I swear it. I am only a man, and you are the woman I was meant to find."',
        action: () => { updateStat('fate', 1, 'A promise that binds you to her'); renderScene('arsinoe_day'); }
      }
    ]
  },

  arsinoe_day: {
    title: 'The Mountain Garden',
    text: [
      'You must see her again — not in darkness, not through the veil of ritual, but in daylight. Tanakil arranges it, reluctantly.',
      '<span class="italic">"She is the worst slut I know,"</span> warns Tanakil. <span class="italic">"In the summer she appears to sailors and shepherds on the mountain slopes. Turn your thoughts away from her."</span>',
      'But the goddess confuses calculation with her own will. On the temple\'s garden terrace, overlooking the sea, Arsinoe waits under a parasol. Blossoms drift from the trees.',
      'She closes her parasol, raises her head, and you see her face in full sunlight for the first time. Every thought you have ever had about beauty — about Kydippe, about anyone — <span class="bold">evaporates</span>.',
      'You step toward her. But as you do, a <span class="bold">temple guard</span> materializes at the garden\'s edge. The priests have been watching. A man who touches the goddess\'s vessel without permission is thrown from the cliff.',
      '<span class="omen-text">The guard\'s hand is on his sword. Arsinoe\'s eyes are wide. One wrong move and you die on the rocks below.</span>'
    ],
    onEnter: () => { setOmen('The cliff of Eryx. The temple guards. One wrong step and you fall.'); },
    choices: [
      {
        text: 'Stand your ground — let Arsinoe speak for you',
        roll: {
          label: 'Trust in Fate',
          stat: 'fate',
          success: () => renderScene('arsinoe_saved'),
          failure: () => renderScene('eryx_death')
        }
      },
      {
        text: 'Seize the moment — the storm dance will protect you',
        roll: {
          label: 'Defy the Temple',
          stat: 'spirit',
          success: () => { state.flags.defied_temple = true; renderScene('arsinoe_saved'); },
          failure: () => renderScene('eryx_death')
        }
      }
    ]
  },

  eryx_death: {
    title: 'The Cliff of Eryx',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The guard moves. You are not fast enough — not strong enough — not <span class="bold">fated</span> enough.',
        'Hands seize you. You are dragged to the cliff\'s edge. Below, the sea crashes against the rocks, impossibly far down.'
      ];
      if (cls === 'warrior') {
        lines.push('You fight — of course you fight. But there are too many of them, and the cliff does not care about Spartan training.');
      } else if (cls === 'seer') {
        lines.push('You saw this ending in a vision, weeks ago. You thought you could change it. The gods do not allow editing.');
      } else if (cls === 'seafarer') {
        lines.push('You survived the open sea only to die on a mountain. The irony would make you laugh if you could breathe.');
      } else {
        lines.push('The last thing you see is Arsinoe\'s face — her real face, the one she showed you in the dark. She is screaming your name.');
      }
      lines.push('<div style="text-align:center; margin-top:2rem; padding:2rem; border:2px solid var(--blood); border-radius:4px; background:rgba(139,37,0,0.1);">' +
        '<div style="font-family:Cinzel,serif; color:var(--blood); font-size:24px; margin-bottom:0.5rem;">YOU HAVE DIED</div>' +
        '<div style="font-size:15px; color:var(--sand); margin-bottom:0.5rem; font-style:italic;">"The goddess gives, and the goddess takes. Eryx remembers."</div>' +
        '<div style="font-size:13px; color:#887766;">You reached the woman you were meant to find. But reaching and keeping are not the same.</div>' +
        '</div>');
      return lines;
    },
    choices: () => {
      const c = [];
      if (hasCheckpoint()) c.push({ text: 'Load last checkpoint — ' + (getCheckpointLabel() || 'saved game'), action: () => loadCheckpoint() });
      c.push({ text: 'Try the temple again (restart from Eryx)', action: () => {
        state.pebbles = state.pebbles.filter(p => p.label.indexOf('storm on Eryx') === -1);
        renderPebbles();
        renderScene('temple_eryx');
      }});
      c.push({ text: 'Start over from the beginning', action: () => {
        state.charClass = null;
        state.spirit = 5; state.body = 6; state.fate = 3;
        state.pebbles = []; state.flags = {};
        state.omensFollowed = 0; state.omensDefied = 0;
        state.rerollAvailable = false;
        updateStat('spirit', 0); updateStat('body', 0); updateStat('fate', 0);
        document.getElementById('char-name').textContent = '—';
        document.getElementById('char-desc').textContent = 'Choose your archetype...';
        renderPebbles();
        renderScene('title');
      }});
      return c;
    }
  },

  arsinoe_saved: {
    title: 'The Storm on Eryx',
    text: () => {
      const defied = state.flags.defied_temple;
      const lines = [];
      if (defied) {
        lines.push('You seize Arsinoe\'s hand. The storm dance erupts from you — unbidden, unstoppable. Your arms rise, your feet stamp the stone, and the sky answers.');
        lines.push('The guard freezes. A bolt of lightning splits the garden. The wind screams down from the mountain\'s peak, tearing tiles from the temple roof.');
      } else {
        lines.push('Arsinoe steps forward. Her voice is calm and carries the weight of the goddess herself: <span class="bold">"This man is mine. The goddess has chosen him. Touch him and Eryx will burn."</span>');
        lines.push('The guard hesitates. And in that hesitation, the sky darkens. The wind rises. As though the goddess herself has confirmed Arsinoe\'s words.');
      }
      lines.push('The storm on Eryx is catastrophic. Buildings collapse. Trees are uprooted. People flee into cellars. Tanakil will later say that people died, that roofs were torn away, that the economic damage was immense.');
      lines.push('But in the eye of the storm, on the temple terrace, you and Arsinoe stand together. Her hair flies wild. Her face — her real face — is luminous with terror and joy.');
      lines.push('<span class="omen-text">"Turms," she says. "Something terrible and wonderful has happened. I don\'t think I can go back to what I was."</span>');
      return lines;
    },
    onEnter: () => {
      updateStat('spirit', 2, 'The storm dance on Eryx — your greatest power');
      state.flags.storm_on_eryx = true;
    },
    choices: [
      { text: 'Take her hand...', action: () => renderScene('flight_from_eryx') }
    ]
  },

  flight_from_eryx: {
    title: 'Flight',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'In the chaos of the storm, escape is possible. Tanakil, ever practical, has already prepared horses and supplies.',
        '<span class="italic">"You fool,"</span> she says, not unkindly. <span class="italic">"You magnificent, reckless fool. Take her and go before the priests recover."</span>'
      ];
      if (cls === 'warrior') {
        lines.push('Dorieus is already armed. "A tactical retreat," he says. "Not a flight. There is a difference." He takes the rear guard, sword drawn, daring anyone to follow.');
      } else if (cls === 'seafarer') {
        lines.push('You know escape routes by instinct. Every port, every hidden bay — the sailor\'s mind serves you now on land. You lead them through back paths the priests won\'t know.');
      }
      lines.push('Arsinoe rides beside you, wrapped in Aura\'s clothes, her temple garments abandoned on the mountain. She is shaking — not from cold, but from the enormity of what she has done.');
      lines.push('"I have never been outside the temple," she says quietly. "Not since I was a child. The world is very large, isn\'t it?"');
      lines.push('You ride through the night, back toward Himera. Behind you, the mountain of Eryx is still crowned with storm clouds, as though the goddess is deciding whether to forgive.');
      return lines;
    },
    onEnter: () => {
      addPebble('red', 'Flight from Eryx — Arsinoe chose freedom');
    },
    choices: [
      {
        text: '"The world is larger than you can imagine. And we will see all of it."',
        action: () => { state.flags.promised_world = true; renderScene('act2_end'); }
      },
      {
        text: '"I don\'t know what comes next. But I know it comes with you."',
        action: () => { state.flags.promised_together = true; renderScene('act2_end'); }
      }
    ]
  },

  // ---- S14: THE PYTHIA'S ATTENDANT ----
  sq_pythia_attendant: {
    title: 'The Pythia\'s Attendant',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'One of the Pythia\'s attendants finds you in the corridor. She is young, nervous, and clearly acting without permission.',
        '<span class="italic">"She asked me to find you,"</span> the attendant whispers. <span class="italic">"The Pythia. She is awake now but... changed. Since she saw you, she speaks of nothing else."</span>',
        'The attendant glances behind her, afraid of being caught. <span class="bold">"She says you are not what you think you are. She says the face she saw was not Greek."</span>',
        'The attendant looks at you with fear and fascination. "What are you?"'
      ];
      if (cls === 'seer') lines.push('You feel the Pythia\'s presence through the walls — a faint pulse, like a second heartbeat. She is reaching for you with something that is not hands.');
      else if (cls === 'storm_born') lines.push('The lightning scar on your body warms. Whatever the Pythia saw in you, it recognizes her recognition.');
      return lines;
    },
    onEnter: () => {
      state.flags.pythia_message_received = true;
    },
    choices: [
      {
        text: '"I don\'t know. That\'s why I came to Delphi"',
        action: () => {
          updateStat('spirit', 1, 'Honesty in the face of mystery');
          renderScene('divine_recognition');
        }
      },
      {
        text: '"Tell her I will come to see her"',
        action: () => {
          state.flags.promised_pythia_visit = true;
          renderScene('divine_recognition');
        }
      },
      {
        text: '"Tell her to forget me. For her own safety"',
        action: () => {
          state.flags.cared_for_pythia = true;
          updateStat('fate', 1, 'You chose to protect her from whatever you are');
          renderScene('divine_recognition');
        }
      }
    ]
  },

  // ---- S15: NIGHT VIGIL AT THE OMPHALOS ----
  sq_night_vigil: {
    title: 'Night Vigil at the Omphalos',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Unable to sleep, you return to the inner temple at night. The eternal flame casts shifting shadows on the Omphalos. The stone is warm to the touch — warmer than it should be.',
        'You sit beside it, and the silence of the temple becomes a presence, not an absence. Something speaks to you without words. Not the Pythia\'s god — something older, something that was here before Apollo, when these were just rocks worshipped by forgotten people.',
        'The stone hums beneath your palm.'
      ];
      if (cls === 'seer') lines.push('The hum resolves into images — not visions but memories. Not yours. The stone\'s. You see a thousand years of hands pressing against this surface, a thousand prayers in a hundred languages, and beneath them all a single question: <span class="italic">who am I?</span>');
      else if (cls === 'storm_born') lines.push('The hum matches the frequency of the storm — the same vibration that shook the mountain, the same force that moved through the guardian spirit\'s wings. The Omphalos remembers a time before names.');
      return lines;
    },
    onEnter: () => {
      state.flags.night_vigil = true;
    },
    choices: [
      {
        text: 'Place both hands on the Omphalos and open your mind',
        roll: {
          label: 'Touch the Center of the World',
          stat: 'spirit',
          success: () => {
            updateStat('spirit', 2, 'The stone showed you a glimpse of your origin');
            addPebble('white', 'The stone remembers what I have forgotten');
            renderScene('divine_recognition');
          },
          failure: () => {
            updateStat('body', -1, 'The vision overwhelmed you — dizziness, nausea');
            renderScene('divine_recognition');
          }
        }
      },
      {
        text: 'Simply sit and absorb the peace',
        action: () => {
          updateStat('spirit', 1, 'The temple\'s silence filled you');
          updateStat('fate', 1, 'You accepted what the stone offered freely');
          renderScene('divine_recognition');
        }
      },
      {
        text: 'Speak aloud into the darkness — "Who am I?"',
        action: () => {
          state.flags.asked_the_stone = true;
          updateStat('spirit', 1, 'The question echoed. No answer came. But the stone grew warmer');
          renderScene('divine_recognition');
        }
      }
    ]
  },

  // ---- S16: CARVING NAMES IN STONE ----
  sq_carving_names: {
    title: 'Carving Names in Stone',
    text: [
      'By the temple wall, you and Dorieus carve your names into the soft stone. The walls are already covered with centuries of names — kings, generals, poets, and countless anonymous pilgrims who left only this trace of their passage.',
      'Dorieus carves with fierce precision: <span class="bold">DORIEUS, SON OF DORIEUS</span>.',
      'You carve more slowly: <span class="bold">TURMS OF EPHESUS</span>.',
      'Both of you stare at the names. They look permanent. They are not.'
    ],
    onEnter: () => {
      state.flags.carved_names = true;
      unlockEncyclopedia('pilgrim_graffiti');
    },
    choices: [
      {
        text: 'Add an inscription — "Two exiles who chose the road together"',
        action: () => {
          state.flags.carved_inscription = true;
          updateStat('spirit', 1, 'Words carved in stone carry weight');
          renderScene('the_stadium');
        }
      },
      ...(typeof state !== 'undefined' && state.flags && state.flags.bought_bee_ring ? [{
        text: 'Carve the Ephesian bee symbol beside your name',
        action: () => {
          state.flags.carved_bee = true;
          updateStat('spirit', 1, 'The bee of Ephesus — your first home');
          renderScene('the_stadium');
        }
      }] : []),
      {
        text: 'Let Dorieus carve alone — names are vanity',
        action: () => {
          updateStat('fate', 1, 'You let the stone speak for itself');
          renderScene('the_stadium');
        }
      }
    ]
  },

  // ---- S17: THE PHOENICIAN SAILOR ----
  sq_phoenician_sailor: {
    title: 'The Phoenician Sailor',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'A Phoenician sailor, stranded in Delphi by winter storms, drinks alone at a pilgrim inn. He is dark-skinned, sharp-eyed, and speaks broken Greek.',
        'He has sailed to places the Greeks only whisper about — Carthage, the Pillars of Herakles, the tin islands in the north. He has a map. Not a proper chart, but scratched lines on leather showing coastlines, harbors, and danger points between Corinth and Sicily.',
        '<span class="italic">"The western sea,"</span> he says, tracing a line with a stained finger, <span class="italic">"is not like your little pond. It has teeth."</span>'
      ];
      if (cls === 'seafarer') lines.push('You lean in. This is your language — currents, harbors, windward approaches. The Phoenician recognizes a fellow sailor and his manner changes from guarded to conspiratorial.');
      return lines;
    },
    onEnter: () => {
      state.flags.met_phoenician = true;
      unlockEncyclopedia('phoenician_navigation');
    },
    choices: [
      {
        text: 'Trade for the map — offer coins',
        action: () => {
          updateStat('fate', -1, 'Knowledge costs');
          awardItem('phoenician_chart');
          renderScene('the_stadium');
        }
      },
      {
        text: '"What lies beyond Sicily?" — ask about the western sea',
        action: () => {
          updateStat('spirit', 1, 'He spoke of Etruria — cities older than Athens, tombs painted with dancers');
          renderScene('the_stadium');
        }
      },
      {
        text: 'Share wine and stories — build rapport',
        action: () => {
          updateStat('fate', 1, 'The Phoenician warmed to you — a rare thing for his kind');
          renderScene('the_stadium');
        }
      }
    ]
  },

  // ---- S18: DELPHI BY MOONLIGHT ----
  sq_moonlight_delphi: {
    title: 'Delphi by Moonlight',
    text: [
      'On a clear winter night, you walk alone through the sacred precinct. The moon turns the marble silver. The monuments cast long shadows.',
      'Delphi is a different place at night — older, stranger, more honest. The monuments are not trophies but gravestones of ambition. The temple is not a house of god but a wound in the earth from which the divine bleeds.',
      'You feel, for the first time, that you could stay here forever. And you know, with equal certainty, that you must leave.'
    ],
    onEnter: () => {
      state.flags.moonlight_walk = true;
    },
    choices: [
      {
        text: 'Climb to the theater and look at the stars',
        action: () => {
          updateStat('spirit', 1, 'The stars above Delphi are closer than anywhere else');
          updateStat('fate', 1, 'The constellations spell a direction: west');
          renderScene('the_stadium');
        }
      },
      {
        text: 'Visit the Castalian Spring by moonlight',
        roll: {
          label: 'Moonlit Vision',
          stat: 'spirit',
          success: () => {
            updateStat('spirit', 1, 'In the water you saw a face — beautiful and dangerous. A woman on a distant shore, watching ships');
            renderScene('the_stadium');
          },
          failure: () => {
            updateStat('spirit', 1, 'The water showed you only your own face — thinner, older, no longer the man who left Ephesus');
            renderScene('the_stadium');
          }
        }
      },
      {
        text: 'Simply walk and think — let the night do its work',
        action: () => {
          updateStat('spirit', 1, 'The night asked nothing and gave everything');
          renderScene('the_stadium');
        }
      }
    ]
  },

  // ---- S19: THE WRESTLING CHALLENGE ----
  sq_wrestling: {
    title: 'The Wrestling Challenge',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Dorieus strips to his waist, crouches, and extends his arms. His body is a weapon — every muscle defined, every movement economy.',
        '<span class="italic">"I will not be gentle,"</span> he warns. <span class="italic">"A Spartan does not know how."</span>'
      ];
      if (cls === 'warrior') lines.push('You recognize his stance — the Spartan wrestler\'s guard. You have seen it break men\'s arms. But you have your own training, and his arrogance might be his weakness.');
      else lines.push('You look at those arms and consider your options. In a fair wrestling match against a trained Spartan, you would lose. But who said anything about fair?');
      return lines;
    },
    onEnter: () => {
      state.flags.wrestled_dorieus = true;
    },
    choices: [
      {
        text: 'Accept the challenge',
        roll: {
          label: 'Wrestle a Spartan',
          stat: 'body',
          target: 9,
          success: () => {
            updateStat('body', 2, 'You defeated a Spartan at wrestling — a feat few can claim');
            addPebble('red', 'I defeated a Spartan at wrestling — once');
            renderScene('dorieus_story');
          },
          failure: () => {
            updateStat('body', -1, 'He pinned you in moments — but gently, for a Spartan');
            renderScene('dorieus_story');
          }
        }
      },
      {
        text: '"You are better than I" — decline wisely',
        action: () => {
          updateStat('fate', 1, 'Dorieus respects honesty more than foolish bravery');
          renderScene('dorieus_story');
        }
      },
      {
        text: 'Propose a different contest — knucklebones instead of fists',
        action: () => {
          updateStat('spirit', 1, 'Dorieus laughed — the first real laugh you\'ve heard from him');
          renderScene('dorieus_story');
        }
      }
    ]
  },

  // ---- S20: THE JAVELIN CONTEST ----
  sq_javelin: {
    title: 'The Javelin Contest',
    text: [
      'Dorieus hands you his Spartan javelin. It is heavier than you expected.',
      'He throws first — the javelin arcs through the air <span class="italic">"like a hawk in flight,"</span> far beyond any mark you could hope to match.',
      'But you try anyway. You gather momentum, feel the weight, and release. It flies farther than you dared hope.',
      'Dorieus nods. <span class="italic">"You throw like a man who has been taught by no one. Raw talent. Dangerous."</span>'
    ],
    onEnter: () => {
      state.flags.javelin_contest = true;
    },
    choices: [
      {
        text: 'Try one more throw — push your limits',
        roll: {
          label: 'Javelin Throw',
          stat: 'body',
          success: () => {
            updateStat('body', 1, 'The second throw flew true — Dorieus raised an eyebrow');
            renderScene('dorieus_story');
          },
          failure: () => {
            updateStat('body', -1, 'Your shoulder strained on the follow-through');
            renderScene('dorieus_story');
          }
        }
      },
      {
        text: '"The javelin is yours. I\'ll stick to running"',
        action: () => {
          updateStat('spirit', 1, 'Grace in concession');
          renderScene('dorieus_story');
        }
      },
      {
        text: '"Show me the Spartan technique"',
        action: () => {
          state.flags.javelin_trained = true;
          updateStat('body', 1, 'He taught you the wrist-snap that gives the throw its spin');
          unlockEncyclopedia('spartan_military');
          renderScene('dorieus_story');
        }
      }
    ]
  },

  // ---- S21: THE ROCKS OF THE UNDERWORLD GODS ----
  sq_underworld_rocks: {
    title: 'The Rocks of the Underworld Gods',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'You and Dorieus sit among the bare, natural rocks that were worshipped a thousand years before Apollo came. Dorieus lashes at them with a willow switch, restless and impatient.',
        '<span class="italic">"These rocks,"</span> he mutters. <span class="italic">"They look like nothing. But the old men say they are doors to the underworld."</span>',
        'You place your palm on the nearest stone. It is cold — colder than stone should be. Something stirs beneath. Not a sound, not a movement, but a presence. The underworld gods do not speak. They simply watch.'
      ];
      if (cls === 'seer') lines.push('You feel them clearly — ancient, patient, indifferent to Apollo and his bright architecture. These gods were old when the mountain was young.');
      else if (cls === 'storm_born') lines.push('The lightning scar aches near these stones. Whatever lives beneath them knows the storm. Knows the force that dances in you. It is the same force, seen from below instead of above.');
      return lines;
    },
    onEnter: () => {
      state.flags.felt_underworld = true;
      unlockEncyclopedia('chthonic_religion');
    },
    choices: [
      {
        text: 'Press your ear to the stone — listen for the underworld',
        roll: {
          label: 'Listen to the Deep',
          stat: 'spirit',
          success: () => {
            updateStat('spirit', 1, 'You heard it — a low hum, like the earth breathing');
            renderScene('dorieus_oracle');
          },
          failure: () => {
            renderScene('dorieus_oracle');
          }
        }
      },
      {
        text: 'Tell Dorieus about Hecate\'s dog in your dreams',
        action: () => {
          updateStat('spirit', 1, 'He listened without understanding — but he listened');
          renderScene('dorieus_oracle');
        }
      },
      {
        text: 'Leave an offering — a pebble from your pouch',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          updateStat('fate', 1, 'The offering vanished into a crack in the stone');
          renderScene('dorieus_oracle');
        }
      }
    ]
  },

  // ---- S22: DORIEUS' JAVELIN OMEN ----
  sq_dorieus_javelin_omen: {
    title: 'Dorieus\' Javelin at the Crossroads',
    text: [
      'Before you leave, Dorieus suggests one more test. He throws his javelin in the direction of Corinth — as far as he can.',
      'You both watch it arc through the air. When you reach it, the point is embedded in a rotted piece of ship\'s rail, washed far inland by some ancient flood. The wood is grey and salt-eaten.',
      '<span class="omen-text">Neither of you speaks. The omen is clear — and unfavorable.</span>',
      'Dorieus pulls the javelin free without looking at you. You walk on.'
    ],
    onEnter: () => {
      state.flags.javelin_omen_seen = true;
    },
    choices: [
      {
        text: '"That was a ship once. Ships mean the sea. The sea means west"',
        action: () => {
          updateStat('spirit', 1, 'You spoke the omen aloud');
          renderScene('departure_preparations');
        }
      },
      {
        text: 'Say nothing — the silence is its own acknowledgment',
        action: () => {
          updateStat('fate', 1, 'Some omens need no interpreter');
          renderScene('departure_preparations');
        }
      },
      {
        text: '"It\'s just wood. Let\'s go"',
        action: () => {
          updateStat('body', 1, 'Pragmatism has its own strength');
          renderScene('departure_preparations');
        }
      }
    ]
  },

  // ---- S23: FAREWELL TO THE PRIESTS ----
  sq_farewell_priests: {
    title: 'Farewell to the Priests',
    text: [
      'Before leaving, you return to the temple one last time. The eldest priest meets you at the anteroom.',
      '<span class="italic">"You are going, then,"</span> he says. It is not a question.',
      'He returns your purse of coins — lighter now, but they withheld only the cost of maintenance and purification.',
      '<span class="bold">"Send no offering to the Delphic god,"</span> he says firmly. <span class="bold">"We will not accept it."</span>',
      'His words carry a finality that hurts more than rejection: the god of Delphi wants nothing to do with you. You are free — and utterly alone.'
    ],
    onEnter: () => {
      state.flags.farewell_priests = true;
    },
    choices: [
      {
        text: 'Accept the rejection with dignity',
        action: () => {
          updateStat('spirit', 1, 'You bowed once and walked away');
          renderScene('the_road_south');
        }
      },
      {
        text: '"Will I ever return to Delphi?"',
        roll: {
          label: 'One Final Question',
          stat: 'fate',
          success: () => {
            updateStat('fate', 1, 'The priest paused. "The stones will remember you. Whether you return... that is not for me to say"');
            renderScene('the_road_south');
          },
          failure: () => {
            renderScene('the_road_south');
          }
        }
      },
      {
        text: '"Your god is a coward" — leave in anger',
        type: 'defy',
        action: () => {
          state.omensDefied++;
          updateStat('spirit', -1, 'Anger is not strength');
          renderScene('the_road_south');
        }
      }
    ]
  },

  // ---- S24: LAST VISIT TO THE SPRING ----
  sq_last_castalia: {
    title: 'Last Visit to the Spring',
    text: [
      'You return to the Castalian Spring one final time. The water is colder now — deep winter. No other pilgrims.',
      'You wash your hands and face. The water carries away nothing this time; you are already clean.',
      'But you feel the spring say goodbye. Not in words — in the way the water flows over your knuckles, cold and certain and indifferent. You have been purified. What you do with that purity is no longer Delphi\'s concern.'
    ],
    onEnter: () => {
      state.flags.last_spring_visit = true;
    },
    choices: [
      {
        text: 'Drink deeply — carry the water\'s blessing with you',
        action: () => {
          updateStat('spirit', 1, 'The cold water settled in your chest like a prayer');
          renderScene('the_road_south');
        }
      },
      {
        text: 'Fill a small flask to take on the journey',
        action: () => {
          awardItem('castalian_water');
          renderScene('the_road_south');
        }
      },
      {
        text: 'Whisper a prayer to Aphrodite at the water\'s edge',
        action: () => {
          updateStat('fate', 1, 'The dove\'s feather warmed in your pouch');
          renderScene('the_road_south');
        }
      }
    ]
  },

  // ---- S25: THE MEGARA CROSSROADS ----
  sq_megara: {
    title: 'The Megara Crossroads',
    text: [
      'At Megara, the road forks. One path leads to Athens — where you have friends from the Sardis expedition, but where a conservative faction now rules and those friends might prefer to forget you.',
      'The other leads to Corinth — the most hospitable of Greek cities, where money is the only passport.',
      'Dorieus defers to you, then regrets it. <span class="italic">"This is my decision and not yours,"</span> he insists, though you both know it was your suggestion.'
    ],
    onEnter: () => {
      state.flags.megara_decision = true;
    },
    choices: [
      {
        text: '"I have friends in Athens" — suggest the eastern road',
        action: () => {
          state.flags.considered_athens = true;
          renderScene('coast_decision');
        }
      },
      {
        text: '"Corinth — where ships sail and strangers are welcome"',
        action: () => {
          updateStat('fate', 1, 'The practical choice — and the right one');
          renderScene('coast_decision');
        }
      },
      {
        text: 'Toss the bones one more time at the crossroads',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          updateStat('fate', 1, 'The bones pointed west. Again. Always west');
          renderScene('coast_decision');
        }
      }
    ]
  },

  // ---- HUB: FASTING EXPLORATION (S27, S30, S35, S37) ----
  sq_fasting_explore: {
    title: 'Between the Rituals',
    text: [
      'The hours between purification rites are long and luminous. The priests do not watch you every moment — there are gaps in the day when you can slip away from the temple precinct and explore.',
      'Delphi in this liminal time is a different place. The pilgrims move slowly, weakened by fasting. The merchants lower their voices. Even the birds seem subdued, as though the mountain itself is holding its breath.'
    ],
    choices: () => {
      const c = [];
      if (!state.flags.olive_grove) c.push({
        text: 'Walk among the olive groves below the precinct',
        action: () => renderScene('sq_olive_grove')
      });
      if (!state.flags.visited_marketplace) c.push({
        text: 'Browse the winter market near the Sacred Way',
        action: () => renderScene('sq_marketplace')
      });
      if (!state.flags.sybaris_dream) c.push({
        text: 'Rest your eyes — the fasting brings strange dreams',
        action: () => renderScene('sq_sybaris_dream')
      });
      if (!state.flags.sick_pilgrim_encounter) c.push({
        text: 'A commotion near the pilgrim quarters — someone is ill',
        action: () => renderScene('sq_sick_pilgrim')
      });
      c.push({
        text: 'Return to the purification rituals',
        action: () => renderScene('priests_interrogation_2')
      });
      return c;
    }
  },

  // ---- HUB: WINTER EXPLORATION PAGE 1 (S26, S32, S33, S34 + more) ----
  sq_winter_explore: {
    title: 'Winter\'s Hidden Delphi',
    text: [
      'The snow transforms Delphi into something ancient and strange. Without the press of pilgrims, the sanctuary reveals its older face — the face it wore before Apollo, before the Greeks, before names.',
      'You wander the deserted grounds, breath steaming in the cold air. There is more to discover here than the priests would have you believe.'
    ],
    choices: () => {
      const c = [];
      if (!state.flags.visited_corycian) c.push({
        text: 'Climb to the Corycian Cave on the slopes of Parnassus',
        action: () => renderScene('sq_corycian_cave')
      });
      if (!state.flags.visited_athena) c.push({
        text: 'Visit the Temple of Athena Pronaia below the precinct',
        action: () => renderScene('sq_athena_pronaia')
      });
      if (!state.flags.charioteer_encounter) c.push({
        text: 'Walk among the monuments at night — the Bronze Charioteer waits',
        action: () => renderScene('sq_charioteer_ghost')
      });
      if (!state.flags.spartan_trained) c.push({
        text: 'Dorieus offers to teach you Spartan combat drills',
        action: () => renderScene('sq_spartan_drill')
      });
      c.push({
        text: 'There is more to see...',
        action: () => renderScene('sq_winter_explore_2')
      });
      c.push({
        text: 'Head to the stadium — enough exploring',
        action: () => renderScene('the_stadium')
      });
      return c;
    }
  },

  // ---- HUB: WINTER EXPLORATION PAGE 2 (S28, S29, S36, S38 + more) ----
  sq_winter_explore_2: {
    title: 'Winter\'s Hidden Delphi',
    text: [
      'The cold air sharpens your senses. Even in winter, Delphi hums with quiet activity — pilgrims who could not leave before the passes closed, merchants wintering over, temple servants going about their duties.'
    ],
    choices: () => {
      const c = [];
      if (!state.flags.gambled_at_delphi) c.push({
        text: 'Follow the sound of laughter to a back room — a gambling den',
        action: () => renderScene('sq_gambling')
      });
      if (!state.flags.met_wine_merchant) c.push({
        text: 'A merchant offers you wine from a familiar-looking amphora',
        action: () => renderScene('sq_wine_merchant')
      });
      if (!state.flags.stargazing) c.push({
        text: 'Join Dorieus in the stadium at night — the stars are brilliant',
        action: () => renderScene('sq_stars')
      });
      if (!state.flags.dionysus_festival) c.push({
        text: 'Torches and drums — the festival of Dionysus approaches',
        action: () => renderScene('sq_dionysus_festival')
      });
      c.push({
        text: 'There is more to see...',
        action: () => renderScene('sq_winter_explore_3')
      });
      c.push({
        text: 'Head to the stadium — enough exploring',
        action: () => renderScene('the_stadium')
      });
      return c;
    }
  },

  // ---- HUB: WINTER EXPLORATION PAGE 3 (S39, S40) ----
  sq_winter_explore_3: {
    title: 'Winter\'s Hidden Delphi',
    text: [
      'The mountain holds its secrets loosely in winter. With fewer eyes watching, the wilder corners of Parnassus reveal themselves to those willing to look.'
    ],
    choices: () => {
      const c = [];
      if (!state.flags.poetry_contest) c.push({
        text: 'An Ionian poet by the fire challenges you to a verse contest',
        action: () => renderScene('sq_poet_challenge')
      });
      if (!state.flags.found_tomb) c.push({
        text: 'A goat track leads to something ancient on the mountain slopes',
        action: () => renderScene('sq_mountain_tomb')
      });
      if (!state.flags.olive_grove) c.push({
        text: 'Walk among the olive groves below the precinct',
        action: () => renderScene('sq_olive_grove')
      });
      if (!state.flags.sick_pilgrim_encounter) c.push({
        text: 'A commotion near the pilgrim quarters — someone is ill',
        action: () => renderScene('sq_sick_pilgrim')
      });
      c.push({
        text: 'Back to the first choices...',
        action: () => renderScene('sq_winter_explore')
      });
      c.push({
        text: 'Head to the stadium — enough exploring',
        action: () => renderScene('the_stadium')
      });
      return c;
    }
  },

  // ---- S26: THE CORYCIAN CAVE ----
  sq_corycian_cave: {
    title: 'The Corycian Cave',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'High on the slopes of Parnassus, above the tree line where the wind cuts like a blade, you find the cave. The Corycian Cave — sacred to Pan and the mountain nymphs since before memory.',
        'The entrance is vast, a dark mouth in the grey rock fringed with ice. Inside, stalactites hang like the fingers of sleeping giants. Offerings litter the floor: clay masks with hollow eyes, terracotta figurines, shards of pottery inscribed with prayers. Some are centuries old.',
        'Deeper in, the cave narrows. The air grows thick and warm — impossibly warm for a mountain winter. And from somewhere in the darkness, you hear breathing. Slow, heavy, rhythmic. Something is alive down there.'
      ];
      if (cls === 'seer') lines.push('Your inner sight flares. The cave is not empty — it teems with presences. Old gods, older than Apollo, older than names. They do not threaten. They <span class="italic">observe</span>.');
      else if (cls === 'warrior') lines.push('Every soldier\'s instinct screams to retreat from an unscouted position. But the breathing is too steady, too deep. Whatever lives here is not ambushing. It is waiting.');
      return lines;
    },
    onEnter: () => {
      state.flags.visited_corycian = true;
      unlockEncyclopedia('corycian_cave');
    },
    choices: [
      {
        text: 'Go deeper into the darkness — face whatever breathes',
        roll: {
          label: 'Descend into the Cave',
          stat: 'spirit',
          dc: 8,
          success: () => {
            updateStat('spirit', 2, 'You touched the cave\'s deepest secret and emerged changed');
            renderScene('sq_winter_explore');
          },
          failure: () => {
            updateStat('spirit', -1, 'Panic seized you in the dark — you fled');
            renderScene('sq_winter_explore');
          }
        }
      },
      {
        text: 'Leave an offering to Pan at the cave mouth',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          updateStat('fate', 1, 'Pan accepts offerings from those who respect the wild places');
          renderScene('sq_winter_explore');
        }
      },
      {
        text: 'Stay near the entrance — study the ancient masks',
        action: () => {
          updateStat('spirit', 1, 'The masks told stories older than the Greek alphabet');
          renderScene('sq_winter_explore');
        }
      }
    ]
  },

  // ---- S27: THE OLIVE GROVE ----
  sq_olive_grove: {
    title: 'The Olive Grove',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Below the sacred precinct, ancient olive trees stand in crooked rows. Their trunks are gnarled and split, some so old they must have been planted when the first temple was built — or before.',
        'An old gardener works among them, pruning with a curved bronze knife. He does not look up as you approach.',
        '<span class="italic">"The olive is the wisest tree,"</span> he says, as though continuing a conversation already begun. <span class="italic">"It grows slowly. It endures drought. It gives oil for lamps, food for the hungry, and balm for the wounded. What more could a god ask of any living thing?"</span>'
      ];
      if (cls === 'seafarer') lines.push('You think of olive oil in the holds of merchant ships — the most traded commodity in the Mediterranean. Every port smells of it. The gardener\'s wisdom is also commerce.');
      else if (cls === 'seer') lines.push('The trees shimmer in your vision. Each one holds decades of sunlight in its rings — a library of seasons, readable to those who know the language of growing things.');
      return lines;
    },
    onEnter: () => {
      state.flags.olive_grove = true;
      unlockEncyclopedia('sacred_olives');
    },
    choices: [
      {
        text: 'Help the gardener prune — honest work for idle hands',
        action: () => {
          updateStat('body', 1, 'The labor of the groves strengthened your arms');
          renderScene(state.flags.explored_during_fast ? 'sq_fasting_explore' : 'sq_winter_explore');
        }
      },
      {
        text: 'Sit beneath the oldest tree and meditate',
        action: () => {
          updateStat('spirit', 1, 'The olive\'s patience seeped into your bones');
          renderScene(state.flags.explored_during_fast ? 'sq_fasting_explore' : 'sq_winter_explore');
        }
      },
      {
        text: 'Ask about the oil that feeds the eternal flame',
        action: () => {
          updateStat('fate', 1, 'The gardener smiled — "The flame remembers every tree that fed it"');
          renderScene(state.flags.explored_during_fast ? 'sq_fasting_explore' : 'sq_winter_explore');
        }
      }
    ]
  },

  // ---- S28: PILGRIMS' GAMBLING DEN ----
  sq_gambling: {
    title: 'The Gambling Den',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Behind a wine shop near the pilgrim quarters, a back room hums with low voices and the rattle of knucklebones on stone. A Thessalian with quick eyes and quicker hands spots you at the threshold.',
        '<span class="italic">"Sit, stranger. The gods love a game of chance — why shouldn\'t we?"</span>',
        'The room is thick with smoke and the smell of cheap wine. Pilgrims, merchants, even a temple servant or two — all bent over their astragaloi, reading fate in the fall of bone.'
      ];
      if (cls === 'seafarer') lines.push('You have played in every port from Ephesus to Corcyra. The Thessalian\'s quick hands do not worry you — you have quicker eyes.');
      else if (cls === 'warrior') lines.push('Spartans do not gamble. But Spartans also do not run from a challenge, and the Thessalian\'s smile is unmistakably a challenge.');
      return lines;
    },
    onEnter: () => {
      state.flags.gambled_at_delphi = true;
    },
    choices: [
      {
        text: 'Play a few rounds — test your luck',
        roll: {
          label: 'Knucklebones',
          stat: 'fate',
          dc: 5,
          success: () => {
            updateStat('fate', 1, 'The bones fell in your favor');
            renderScene('sq_winter_explore_2');
          },
          failure: () => {
            updateStat('fate', -1, 'The Thessalian swept your coins away with a grin');
            renderScene('sq_winter_explore_2');
          }
        }
      },
      {
        text: 'Watch the game — observe the players, gather rumors',
        action: () => {
          updateStat('spirit', 1, 'The gamblers\' gossip held grains of truth');
          renderScene('sq_winter_explore_2');
        }
      },
      {
        text: 'High stakes — wager everything on a single throw',
        roll: {
          label: 'High-Stakes Throw',
          stat: 'fate',
          dc: 8,
          success: () => {
            awardItem('lucky_astragalos');
            updateStat('fate', 1, 'The Venus throw — the Thessalian stared in disbelief');
            renderScene('sq_winter_explore_2');
          },
          failure: () => {
            updateStat('fate', -1, 'You lost your purse — the Thessalian bought you a drink out of pity');
            renderScene('sq_winter_explore_2');
          }
        }
      }
    ]
  },

  // ---- S29: WINE MERCHANT OF CORINTH ----
  sq_wine_merchant: {
    title: 'The Wine Merchant of Corinth',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'A Corinthian merchant has set up a modest stall near the pilgrim quarters, clay amphorae arranged by region. He pours samples with the practiced hand of a man who has made wine his life\'s work.',
        '<span class="italic">"Try this,"</span> he says, pushing a cup toward you. The wine is rich and dark — not the thin, resinous Greek wine you have grown accustomed to. It tastes like earth and sun and something you cannot name.',
        '<span class="italic">"Etruscan. From Caere. They make it differently in the west — heavier, darker, with a sweetness the Greeks cannot replicate. It is the soil, they say. Volcanic."</span>'
      ];
      if (cls === 'storm_born') lines.push('The word <span class="italic">volcanic</span> resonates in your chest. Fire beneath the earth, rising. You know that taste — not from memory, but from somewhere deeper.');
      return lines;
    },
    onEnter: () => {
      state.flags.met_wine_merchant = true;
      unlockEncyclopedia('etruscan_wine');
    },
    choices: [
      {
        text: 'Buy a cup of the Etruscan wine — drink deeply',
        action: () => {
          state.flags.tasted_etruscan_wine = true;
          updateStat('spirit', 1, 'The wine tasted like a country you have never visited — and yet');
          renderScene('sq_winter_explore_2');
        }
      },
      {
        text: '"Tell me about Etruria — what is it like?"',
        action: () => {
          updateStat('spirit', 1, 'The merchant\'s descriptions stirred something in you');
          renderScene('sq_winter_explore_2');
        }
      },
      {
        text: 'Stick with the Greek wine — the familiar is safer',
        action: () => {
          updateStat('body', 1, 'The Greek wine warmed your belly without troubling your mind');
          renderScene('sq_winter_explore_2');
        }
      }
    ]
  },

  // ---- S30: DELPHI MARKETPLACE ----
  sq_marketplace: {
    title: 'The Winter Market',
    text: [
      'Even in winter, the market near the Sacred Way persists — reduced to a handful of hardy vendors selling essentials to those pilgrims who could not leave before the passes closed.',
      'Honey cakes wrapped in fig leaves. Heavy woolen cloaks dyed in mountain saffron. Small clay lamps shaped like animals. Miniature bronze tripods — souvenirs of Apollo\'s oracle, mass-produced and sold by the hundred.',
      'The vendors call out in a dozen dialects, their breath steaming in the cold.'
    ],
    onEnter: () => {
      state.flags.visited_marketplace = true;
      unlockEncyclopedia('commerce_delphi');
    },
    choices: [
      {
        text: 'Buy a heavy winter cloak — the mountain cold is merciless',
        action: () => {
          awardItem('winter_cloak');
          renderScene(state.flags.explored_during_fast ? 'sq_fasting_explore' : 'sq_winter_explore');
        }
      },
      {
        text: 'Buy a clay lamp — light for the long nights',
        action: () => {
          awardItem('clay_lamp');
          renderScene(state.flags.explored_during_fast ? 'sq_fasting_explore' : 'sq_winter_explore');
        }
      },
      {
        text: 'Browse without buying — let the market wash over you',
        action: () => {
          updateStat('fate', 1, 'You watched the world trade its wares and learned something about value');
          renderScene(state.flags.explored_during_fast ? 'sq_fasting_explore' : 'sq_winter_explore');
        }
      }
    ]
  },

  // ---- S31: THE SHEPHERD'S TALE ----
  sq_shepherd: {
    title: 'The Shepherd\'s Tale',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'An old shepherd sits on a rock above the road, watching his goats pick their way across a scree slope. His face is weathered to the color and texture of the mountain itself.',
        '<span class="italic">"You are going to the oracle,"</span> he says. It is not a question. <span class="italic">"Everyone who takes this road is going to the oracle. But the mountain was here before the oracle, and it will be here after."</span>',
        'He speaks of Parnassus as though it were a living thing — its moods, its seasons, its sacred places that existed long before Apollo claimed the shrine. <span class="italic">"The Pythia sits on the mountain\'s breath. She does not command it."</span>'
      ];
      if (cls === 'seer') lines.push('His words confirm something you have felt since setting foot on this slope — the mountain is aware. Not as men are aware, but as the earth is aware: slowly, deeply, with a memory measured in millennia.');
      else if (cls === 'seafarer') lines.push('You are a man of the sea, and mountains unsettle you. But this shepherd speaks of Parnassus the way an old captain speaks of the ocean — with love, respect, and healthy fear.');
      return lines;
    },
    onEnter: () => {
      state.flags.met_shepherd = true;
      unlockEncyclopedia('pre_olympian_religion');
    },
    choices: [
      {
        text: '"What gods lived here before Apollo?"',
        action: () => {
          updateStat('spirit', 1, 'The old gods have old names — and the shepherd knew them all');
          renderScene('approach_delphi');
        }
      },
      {
        text: '"Which paths are safe in this weather?"',
        action: () => {
          updateStat('body', 1, 'The shepherd\'s knowledge of the mountain saved you hours of climbing');
          renderScene('approach_delphi');
        }
      },
      {
        text: 'Share your food with the old man',
        action: () => {
          updateStat('fate', 1, 'Generosity on the mountain road — the gods see such things');
          renderScene('approach_delphi');
        }
      }
    ]
  },

  // ---- S32: TEMPLE OF ATHENA PRONAIA ----
  sq_athena_pronaia: {
    title: 'The Temple of Athena Pronaia',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Below the main precinct, half-hidden by olive trees, stands the sanctuary of Athena Pronaia — "Athena Before the Temple." It is smaller than Apollo\'s domain but infinitely more graceful. The famous tholos — a circular marble building with slender columns — catches the winter light like a jewel.',
        'A priestess tends the altar, a woman of middle years with calm, intelligent eyes. She notices you and smiles.',
        '<span class="italic">"Most pilgrims rush past us to reach Apollo,"</span> she says. <span class="italic">"They forget that wisdom is quieter than prophecy. Athena does not shout. She <span class="bold">thinks</span>."</span>'
      ];
      if (cls === 'seer') lines.push('The tholos hums with a different frequency than Apollo\'s temple — not the wild surge of prophecy, but the steady light of reason. You feel your scattered visions settling, ordering themselves.');
      else if (cls === 'warrior') lines.push('Athena is a warrior\'s goddess too — but of strategy, not brute force. You feel a kinship with this quiet place that surprises you.');
      return lines;
    },
    onEnter: () => {
      state.flags.visited_athena = true;
      unlockEncyclopedia('athena_pronaia');
    },
    choices: [
      {
        text: 'Ask Athena for wisdom — kneel at her altar',
        action: () => {
          updateStat('spirit', 1, 'The owl-eyed goddess grants clarity to those who ask quietly');
          renderScene('sq_winter_explore');
        }
      },
      {
        text: 'Make an offering at the tholos',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          updateStat('fate', 1, 'The circular temple accepted your offering — a good sign');
          renderScene('sq_winter_explore');
        }
      },
      {
        text: 'Ask the priestess what she has seen in her years at Delphi',
        action: () => {
          updateStat('spirit', 1, 'Her stories were worth more than any oracle\'s riddling');
          renderScene('sq_winter_explore');
        }
      }
    ]
  },

  // ---- S33: THE CHARIOTEER'S GHOST ----
  sq_charioteer_ghost: {
    title: 'The Charioteer\'s Ghost',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'You cannot sleep. The moon is full over Delphi, and you find yourself walking among the monuments — the bronze statues and stone dedications that line the Sacred Way.',
        'Then you see it. The Charioteer.',
        'A life-sized bronze figure of a young man in a long chariot-driver\'s robe, his right hand still holding invisible reins. In the moonlight, the bronze seems to breathe. And the eyes — inlaid with onyx and white stone — the eyes are <span class="bold">alive</span>.',
        'A dedication at the base reads: <span class="italic">From Polyzalus of Gela, in Sicily.</span> From the west. From the direction you will go.'
      ];
      if (cls === 'seer') lines.push('You see the charioteer\'s spirit still bound to the bronze — a young man who won his race and died young, preserved in metal for eternity. He turns his inlaid eyes toward you. He has been waiting.');
      else if (cls === 'storm_born') lines.push('The lightning scar on your body pulses. The bronze was forged in fire — you feel a kinship with this figure, this man trapped between the living and the eternal.');
      return lines;
    },
    onEnter: () => {
      state.flags.charioteer_encounter = true;
      unlockEncyclopedia('charioteer_delphi');
    },
    choices: () => {
      const c = [];
      if (state.charClass === 'seer') {
        c.push({
          text: 'Speak to the statue — your seer\'s sight pierces the veil',
          action: () => {
            state.flags.charioteer_spoke = true;
            updateStat('spirit', 2, 'The charioteer whispered: "The west remembers what the east forgets"');
            renderScene('sq_winter_explore');
          }
        });
      } else {
        c.push({
          text: 'Speak to the statue — ask what the west holds',
          roll: {
            label: 'Commune with Bronze',
            stat: 'spirit',
            dc: 7,
            success: () => {
              state.flags.charioteer_spoke = true;
              updateStat('spirit', 2, 'A voice in your mind: "The west remembers what the east forgets"');
              renderScene('sq_winter_explore');
            },
            failure: () => {
              updateStat('spirit', 1, 'The statue was silent — but the moonlight on its face seemed almost like a smile');
              renderScene('sq_winter_explore');
            }
          }
        });
      }
      c.push({
        text: 'Touch the bronze hand — feel what time has left in the metal',
        action: () => {
          state.flags.touched_charioteer = true;
          updateStat('spirit', 1, 'The bronze was warm. It should not have been warm.');
          renderScene('sq_winter_explore');
        }
      });
      c.push({
        text: 'Bow and move on — some things are best left undisturbed',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          updateStat('fate', 1, 'You honored the dead and the dead honored you in return');
          renderScene('sq_winter_explore');
        }
      });
      return c;
    }
  },

  // ---- S34: SPARTAN DRILL ----
  sq_spartan_drill: {
    title: 'Spartan Drill',
    text: () => {
      const cls = state.charClass;
      const lines = [];
      if (cls === 'warrior') {
        lines.push('Dorieus grins when you ask to train. "Finally — an Ionian who understands that the body is a weapon." But his drills are different from what you know. Harder. More precise. Brutally efficient.');
        lines.push('He teaches you the Spartan way: shield high, strike low, never overextend. <span class="italic">"A dead hero is still dead,"</span> he says. <span class="italic">"Spartans prefer living victories."</span>');
        lines.push('You spar until your arms burn. For the first time, you face someone whose combat instincts are genuinely superior to yours. It is humbling — and exhilarating.');
      } else {
        lines.push('Dorieus takes one look at your fighting stance and shakes his head.');
        lines.push('<span class="italic">"Who taught you to hold a shield? A baker?"</span> he says. <span class="italic">"We will start from the beginning."</span>');
        lines.push('The drills are merciless. Shield position. Footwork. The precise angle of a counterattack. Dorieus corrects you with sharp blows — not cruel, but not gentle either. The Spartan way.');
        lines.push('<span class="italic">"Again. Faster. The Persians will not wait for you to find your balance."</span>');
      }
      return lines;
    },
    onEnter: () => {
      state.flags.spartan_trained = true;
    },
    choices: () => {
      const cls = state.charClass;
      const c = [];
      if (cls === 'warrior') {
        c.push({
          text: 'Match his intensity — train until you cannot stand',
          action: () => {
            updateStat('body', 2, 'Spartan training pushed beyond your limits');
            updateStat('spirit', -1, 'Your body broke before your will did');
            renderScene('sq_winter_explore');
          }
        });
        c.push({
          text: 'Trade techniques — your eastern style for his western discipline',
          action: () => {
            updateStat('body', 1, 'Two fighting styles merged into something new');
            updateStat('spirit', 1, 'Teaching is its own form of learning');
            renderScene('sq_winter_explore');
          }
        });
      } else {
        c.push({
          text: 'Train until you drop — earn his respect through endurance',
          action: () => {
            updateStat('body', 2, 'Spartan training pushed beyond your limits');
            updateStat('spirit', -1, 'Your body broke before your will did');
            renderScene('sq_winter_explore');
          }
        });
        c.push({
          text: 'Train at a measured pace — learn the basics well',
          action: () => {
            updateStat('body', 1, 'The fundamentals of Spartan combat lodged in your muscles');
            renderScene('sq_winter_explore');
          }
        });
      }
      c.push({
        text: 'Ask Dorieus about Spartan strategy instead of fighting',
        action: () => {
          state.flags.learned_tactics = true;
          updateStat('spirit', 1, 'Spartan tactics are simple — and devastatingly effective');
          renderScene('sq_winter_explore');
        }
      });
      return c;
    }
  },

  // ---- S35: DREAM OF SYBARIS ----
  sq_sybaris_dream: {
    title: 'Dream of Sybaris',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'The fast pulls you under. You dream.',
        'You are a child — very small — in a city of white stone and green gardens. The sun is warm. Bread bakes in an oven nearby. A woman sings in a language that is not Greek. The melody is familiar in a way that aches.',
        'Then soldiers. Shouting. The sound of things breaking. Fire climbing the white walls. The woman scoops you up and runs. A ship. The sea. Days of salt and terror. Then a new city — Miletus, someone says — and a flash of lightning that splits the sky above your cradle.',
        'You wake gasping, the taste of ash and bread still in your mouth. The dream was not a dream. It was a <span class="bold">memory</span>.'
      ];
      if (cls === 'seer') lines.push('The vision is sharp — sharper than waking life. You see the city\'s name written in flame: <span class="bold">Sybaris</span>. Destroyed. Erased. But not forgotten — not by your blood, not by the gods who watched it burn.');
      else if (cls === 'storm_born') lines.push('The lightning in the dream was real. You know it in your scar, in the electricity that crackles at the edge of your awareness. You were marked before you were named.');
      return lines;
    },
    onEnter: () => {
      state.flags.sybaris_dream = true;
      unlockEncyclopedia('sybaris_city');
      unlockEncyclopedia('sybaris_destruction');
    },
    choices: [
      {
        text: 'Focus on the woman\'s voice — try to remember the language',
        action: () => {
          state.flags.sybaris_language_hint = true;
          updateStat('spirit', 1, 'The language hovered at the edge of understanding — not Greek, not Persian, something else');
          renderScene('sq_fasting_explore');
        }
      },
      {
        text: 'Push the dream away — you cannot afford to break now',
        action: () => {
          updateStat('body', 1, 'You buried the memory and steadied your hands');
          renderScene('sq_fasting_explore');
        }
      },
      {
        text: 'Scratch the details into the wall before they fade',
        action: () => {
          state.flags.recorded_dream = true;
          updateStat('spirit', 1, 'The scratched words preserved what the mind would forget');
          renderScene('sq_fasting_explore');
        }
      }
    ]
  },

  // ---- S36: READING THE STARS ----
  sq_stars: {
    title: 'Reading the Stars',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'A clear winter night. You and Dorieus lie on the cold stone seats of the stadium, wrapped in cloaks, staring up at a sky so dense with stars it seems to press down on you.',
        '<span class="italic">"That one,"</span> says Dorieus, pointing. <span class="italic">"The Spartan navigators call it the Soldier\'s Star. It points south — toward Libya, toward the lands the oracle told my father to colonize."</span>',
        'You know the same stars by different names — Ionian names, learned from sailors in Miletus and Ephesus. The same lights, different stories. The sky is a text that every people reads differently.'
      ];
      if (cls === 'seafarer') lines.push('You know these stars as no landsman can. They are your charts, your compass, your companions on the night watch. You could sail to Egypt by starlight alone. You show Dorieus the Phoenician star — <span class="italic">"They call it the Sailor\'s Eye. It never moves."</span>');
      else if (cls === 'seer') lines.push('The stars pulse gently in your vision — not cold and distant, but alive. Each one a story, a god, a fate. You see the threads of destiny strung between them like a vast celestial loom.');
      return lines;
    },
    onEnter: () => {
      state.flags.stargazing = true;
      unlockEncyclopedia('ancient_navigation');
    },
    choices: [
      {
        text: 'Teach Dorieus the Ionian names for the constellations',
        action: () => {
          updateStat('spirit', 1, 'Sharing knowledge under the stars deepened the bond between you');
          renderScene('sq_winter_explore_2');
        }
      },
      {
        text: 'Learn the Spartan navigation stars — useful for the voyage west',
        action: () => {
          updateStat('body', 1, 'Practical star-knowledge for the journey ahead');
          renderScene('sq_winter_explore_2');
        }
      },
      {
        text: 'Lie in silence together — some things need no words',
        action: () => {
          updateStat('fate', 1, 'The silence between friends is its own language');
          renderScene('sq_winter_explore_2');
        }
      }
    ]
  },

  // ---- S37: THE SICK PILGRIM ----
  sq_sick_pilgrim: {
    title: 'The Sick Pilgrim',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Near the pilgrim quarters, a Thessalian man lies on a pallet, shaking with fever. His wife kneels beside him, weeping quietly. The temple servants have done what they can — cold water, prayers to Asclepius — but the fever will not break.',
        'As you approach, something strange happens. Your hands grow warm — not from the fire, not from exertion. A deep, internal heat that rises from your core and concentrates in your palms. Your lightning scar tingles.',
        'The wife looks up at you with desperate eyes. <span class="italic">"Please,"</span> she whispers. <span class="italic">"The healers say it is in the gods\' hands now."</span>'
      ];
      if (cls === 'seer') lines.push('You see the sickness — a dark cloud around his body, thickest at his chest. And you see something else: a thread of light running from your hands to his fever. You could pull the darkness out. You have never done this before. But you know you can.');
      else if (cls === 'storm_born') lines.push('The lightning that lives in you reaches toward the sick man like a hand. Not to strike — to <span class="italic">heal</span>. The force that destroys can also mend. You feel this truth in your blood.');
      return lines;
    },
    onEnter: () => {
      state.flags.sick_pilgrim_encounter = true;
      unlockEncyclopedia('temple_healing');
    },
    choices: [
      {
        text: 'Place your hands on his forehead — let the warmth flow',
        roll: {
          label: 'Healing Touch',
          stat: 'spirit',
          dc: 7,
          success: () => {
            state.flags.healed_pilgrim = true;
            state.flags.has_healing_gift = true;
            updateStat('spirit', 2, 'The fever broke under your hands — a gift you did not know you had');
            renderScene(state.flags.explored_during_fast ? 'sq_fasting_explore' : 'sq_winter_explore_3');
          },
          failure: () => {
            updateStat('spirit', 1, 'The heat faded before it could take hold — but the attempt itself was not nothing');
            renderScene(state.flags.explored_during_fast ? 'sq_fasting_explore' : 'sq_winter_explore_3');
          }
        }
      },
      {
        text: 'Help practically — fresh water, clean cloths, broth',
        action: () => {
          updateStat('body', 1, 'Practical compassion is its own form of healing');
          renderScene(state.flags.explored_during_fast ? 'sq_fasting_explore' : 'sq_winter_explore_3');
        }
      },
      {
        text: 'Pray to Artemis — the healer, the protector',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          updateStat('fate', 1, 'The prayer rose like smoke — and the sick man\'s breathing eased');
          renderScene(state.flags.explored_during_fast ? 'sq_fasting_explore' : 'sq_winter_explore_3');
        }
      }
    ]
  },

  // ---- S38: FESTIVAL OF DIONYSUS ----
  sq_dionysus_festival: {
    title: 'The Festival of Dionysus',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Torches blaze along the Sacred Way. Drums pound a rhythm that bypasses the mind and strikes directly at the blood. Masked figures process through the sanctuary — animal faces, god faces, faces that are neither human nor divine.',
        'This is Dionysus\'s night. Apollo is gone, and the rules that govern the sanctuary dissolve for these hours. Wine flows freely. Voices rise in song. The boundary between sacred and profane, between self and other, melts like snow.',
        'A dancer in a fox mask pulls at your arm. <span class="italic">"Come! Tonight the god permits everything!"</span>'
      ];
      if (cls === 'seer') lines.push('The ecstasy calls to you — the same force that drives the Pythia\'s visions. Dionysus and Apollo are brothers in madness. One channels it into prophecy; the other into <span class="italic">becoming</span>.');
      else if (cls === 'warrior') lines.push('The wildness offends your Spartan discipline. And yet — something in the drums speaks to the part of you that screams in battle. The berserker\'s rage and the dancer\'s ecstasy are not so different.');
      return lines;
    },
    onEnter: () => {
      state.flags.dionysus_festival = true;
      unlockEncyclopedia('dionysian_rites');
    },
    choices: [
      {
        text: 'Join the revelers — let the god take you',
        action: () => {
          state.flags.danced_for_dionysus = true;
          updateStat('spirit', 1, 'The dance dissolved every boundary you had built');
          updateStat('body', -1, 'The ecstasy left your body wrung out and trembling');
          addPebble('black', 'I danced for Dionysus in the god\'s own precinct');
          renderScene('sq_winter_explore_2');
        }
      },
      {
        text: 'Watch from the edges — observe the sacred madness',
        action: () => {
          updateStat('fate', 1, 'The observer sees what the participant cannot');
          renderScene('sq_winter_explore_2');
        }
      },
      {
        text: 'Perform — recite, sing, give yourself to the art',
        roll: {
          label: 'Dionysian Performance',
          stat: 'spirit',
          dc: 6,
          success: () => {
            updateStat('spirit', 1, 'Your performance drew cheers from the masked crowd');
            updateStat('fate', 1, 'The god of theater smiled on your art');
            renderScene('sq_winter_explore_2');
          },
          failure: () => {
            updateStat('spirit', 1, 'The performance faltered — but the attempt was its own offering');
            renderScene('sq_winter_explore_2');
          }
        }
      }
    ]
  },

  // ---- S39: THE POET'S CHALLENGE ----
  sq_poet_challenge: {
    title: 'The Poet\'s Challenge',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'An Ionian poet — sharp-eyed, wine-flushed, with the competitive gleam of a man who lives by his words — blocks your path near the fire.',
        '<span class="italic">"You have the look of a man who knows his Homer,"</span> he declares. <span class="italic">"I challenge you. Verse for verse, line for line. The loser buys the wine."</span>',
        'A small crowd gathers. In the Greek world, poetry is not a pastime — it is combat by other means. The man who can recite the most Homer, improvise the cleverest verse, or tell the most moving story commands respect that no sword can earn.'
      ];
      if (cls === 'seer') lines.push('Words are your element. You feel them gathering in your chest like a storm — the old verses, the ancient cadences, the rhythm of the hexameter that predates writing itself. This is a contest you were born for.');
      else if (cls === 'warrior') lines.push('Spartans are taught to speak briefly and strike hard — with words as with weapons. You know your Homer, but not as a poet does. Still, brevity has its own power.');
      return lines;
    },
    onEnter: () => {
      state.flags.poetry_contest = true;
      unlockEncyclopedia('homeric_recitation');
    },
    choices: () => {
      const c = [];
      const dc = state.charClass === 'seer' ? 5 : 6;
      c.push({
        text: 'Recite from the Iliad — the shield of Achilles, the death of Hector',
        roll: {
          label: 'Homeric Recitation',
          stat: 'spirit',
          dc: dc,
          success: () => {
            updateStat('spirit', 1, 'Your Homer drew silence, then applause — the poet conceded with grace');
            renderScene('sq_winter_explore_3');
          },
          failure: () => {
            updateStat('spirit', 0, 'You stumbled over the hexameters — the poet won, but not by much');
            renderScene('sq_winter_explore_3');
          }
        }
      });
      c.push({
        text: 'Improvise a verse about Sardis — the city that burned',
        roll: {
          label: 'Improvised Verse',
          stat: 'spirit',
          dc: 8,
          success: () => {
            updateStat('spirit', 2, 'Your verse silenced the crowd — truth spoken in meter cuts deeper than any blade');
            renderScene('sq_winter_explore_3');
          },
          failure: () => {
            updateStat('spirit', 0, 'The verse broke under the weight of its subject — some truths resist meter');
            renderScene('sq_winter_explore_3');
          }
        }
      });
      c.push({
        text: 'Decline the contest — tell a story instead',
        action: () => {
          updateStat('fate', 1, 'The poet frowned, but the crowd leaned in — a good story outranks clever verse');
          renderScene('sq_winter_explore_3');
        }
      });
      return c;
    }
  },

  // ---- S40: THE MOUNTAIN TOMB ----
  sq_mountain_tomb: {
    title: 'The Mountain Tomb',
    text: () => {
      const cls = state.charClass;
      const lines = [
        'Following a goat track up the mountain slopes, you find it: a tomb cut into the rock face, half-hidden by scrub and snow. The entrance is narrow but passable. Inside, the air is dry and still.',
        'The tomb is ancient — far older than anything Greek. Faded paintings cover the walls: figures with elongated bodies and oversized eyes, dancing or processing toward a door that leads nowhere. Animals that are not quite horses, not quite deer. Symbols that tug at something deep in your memory.',
        'This is not Greek work. It predates the colony at Delphi by centuries. The style is — you cannot name it, but your hands tremble when you touch the painted stone.'
      ];
      if (cls === 'seer') lines.push('Your inner sight blazes. These paintings are <span class="italic">Etruscan</span> — or something that came before the Etruscans, something they inherited and carried west. The dancing figures are performing a funeral rite you have seen in visions but never in life.');
      else if (cls === 'storm_born') lines.push('The symbols on the wall include a jagged line — lightning. Your scar burns. Whoever painted this tomb knew about the thunderbolt-born. You are not the first.');
      return lines;
    },
    onEnter: () => {
      state.flags.found_tomb = true;
      unlockEncyclopedia('pre_greek_burial');
    },
    choices: [
      {
        text: 'Study the paintings carefully — commit every detail to memory',
        action: () => {
          state.flags.saw_ancient_tomb_art = true;
          updateStat('spirit', 1, 'The painted figures danced behind your eyelids long after you left');
          renderScene('sq_winter_explore_3');
        }
      },
      {
        text: 'Take a painted shard from the crumbling wall — evidence',
        action: () => {
          awardItem('ancient_shard');
          renderScene('sq_winter_explore_3');
        }
      },
      {
        text: 'Seal the entrance with stones — this place should rest undisturbed',
        type: 'omen',
        action: () => {
          state.omensFollowed++;
          updateStat('fate', 1, 'The dead rest easier when the living show respect');
          renderScene('sq_winter_explore_3');
        }
      }
    ]
  },

  act2_end: {
    title: 'End of Act II',
    text: () => {
      const pebbleCount = state.pebbles.length;
      const cls = CLASSES[state.charClass];
      const summoned = state.flags.summoned_wind;
      const defied = state.flags.defied_temple;
      const lines = [];

      lines.push(`<span class="bold">${cls.name} — you leave Eryx with ${pebbleCount} pebbles, a Spartan at your side, and a woman whose face holds a thousand faces.</span>`);

      if (summoned) {
        lines.push('You summoned the storm at sea. You summoned it again on the mountain. The power within you is growing — and it frightens you as much as it thrills others.');
      }
      if (defied) {
        lines.push('You defied the temple itself. The priests of Eryx will not forget. Nor will the goddess — though whether her memory is wrath or admiration, you cannot tell.');
      }

      lines.push(`<span class="omen-text">Omens followed: ${state.omensFollowed} — Omens defied: ${state.omensDefied}</span>`);

      if (state.omensDefied > state.omensFollowed + 1) {
        lines.push('You have bent fate like a bow — but a bow can only be drawn so far before it breaks. The gods are taking notice.');
      } else if (state.omensFollowed > state.omensDefied + 1) {
        lines.push('The current of fate carries you gently. But Arsinoe is not gentle, and the path ahead is anything but smooth.');
      } else {
        lines.push('You walk the knife\'s edge between obedience and defiance. It is the most dangerous path — and the one most worthy of the gods\' attention.');
      }

      lines.push('<div style="margin-top:2rem; padding:1.2rem; border-left:2px solid var(--sage); background:rgba(167,190,174,0.06); border-radius:0 4px 4px 0; font-size:15px;">' +
        '<div style="color:var(--sage); font-style:italic; margin-bottom:0.5rem;">Somewhere ahead, across the Tyrrhenian Sea...</div>' +
        '<div style="color:#998877;">The twelve cities of the <span style="color:var(--warm);">Etruscans</span> await. Lars Alsir said you would come. The Etruscan gods follow an Etruscan wherever he may be reborn.</div>' +
        '<div style="color:#887766; font-size:13px; margin-top:0.5rem;">But first you must survive Himera\'s politics, Dionysius\'s ambition, and Arsinoe\'s past. That is a story for <span style="color:var(--gold);">Act III</span>.</div>' +
        '</div>');

      lines.push('<div style="text-align:center; margin-top:2rem; padding:1.5rem; border:1px solid var(--gold); border-radius:4px;">' +
        '<div style="font-family:Cinzel,serif; color:var(--gold); font-size:20px; margin-bottom:0.5rem;">Act II Complete</div>' +
        '<div style="font-size:14px; color:#998877;">Your pebbles remember. Your choices echo forward.</div>' +
        '<div style="font-size:13px; color:var(--sage); margin-top:1rem;">Spirit: ' + state.spirit + ' · Body: ' + state.body + ' · Fate: ' + state.fate + '</div>' +
        '</div>');
      return lines;
    },
    choices: [
      { text: 'Review your pebbles and start again', action: () => {
        state.charClass = null;
        state.spirit = 5; state.body = 6; state.fate = 3;
        state.pebbles = []; state.flags = {};
        state.omensFollowed = 0; state.omensDefied = 0;
        state.rerollAvailable = false;
        updateStat('spirit', 0); updateStat('body', 0); updateStat('fate', 0);
        document.getElementById('char-name').textContent = '—';
        document.getElementById('char-desc').textContent = 'Choose your archetype...';
        renderPebbles();
        renderScene('title');
      }}
    ]
  }
};

