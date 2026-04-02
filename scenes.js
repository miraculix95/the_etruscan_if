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
  // Act I — Delphi (Side Quests)
  sq_egyptian_merchant: 'act1',
  sq_hecate_priestess: 'act1',
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
  storm_survived: SCENE_IMAGES_DATA.storm,
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
          renderScene('priests_interrogation_2');
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
          renderScene('after_pythia');
        }
      }
    ]
  },

  after_pythia: {
    title: 'Free — But Where?',
    text: [
      'The priests confer among themselves. The Pythia collapses into a convulsion and is carried away. When they return, their judgment is clear:',
      '<span class="italic">"You are free to go where you will, Turms. The gods have given their signs. Not your will but that of the gods is fulfilled in you. Continue to worship Artemis. But the god of Delphi neither condemns you nor assumes your guilt."</span>',
      '"Where am I to go?" you ask.',
      '<span class="bold">"Go to the West whence you once came. So says the Pythia, and so say we."</span>',
      'West. Everyone tells you to go west. The Pythia, the priests, even the dove feather that fluttered down from the sky during your trial. But the war rages in the East — in Ionia, where your guilt was born.',
      'You are free, but freedom without direction is just another kind of prison. Days pass. You exercise in the deserted stadium of Delphi, running alone against yourself.'
    ],
    choices: [
      { text: 'Continue to the stadium...', action: () => renderScene('the_stadium') }
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
        'Afterward, you wash in the swollen brook, rubbing each other\'s backs with sand. He points to the lightning scar on your body. You point to the sword wound on his chest.',
        '<span class="italic">"I am a Spartan,"</span> he says proudly. <span class="italic">"My name is Dorieus. My father was Dorieus too — the fairest man of his day. My uncle, King Cleomenes, had bad dreams about me and sent me away. I am also a prisoner of the oracle."</span>'
      ];
    },
    choices: [
      {
        text: '"I also am alone. I came to Delphi either to be purified or to die."',
        action: () => renderScene('friendship')
      }
    ]
  },

  friendship: {
    title: 'Two Exiles',
    text: [
      'Walking down the mountain path, Dorieus glances at you from the corner of his eye.',
      '<span class="italic">"I like you, although we Spartans usually shun strangers. But I am alone, and it is difficult to be without a companion. I would rather be dead with my name on a gravestone than here."</span>',
      'Something in his words touches the lonely place inside you. Two exiles — one from the East, one from the West. Both rejected by their cities, both prisoners of the oracle.',
      'You tell him about the burning of Sardis, the Pythia\'s vision, the priests\' verdict. He listens with the focused attention of a soldier receiving orders.',
      '<span class="bold">"Go east with me,"</span> you suggest. <span class="bold">"To Ionia, where they have danced the dance of freedom. A trained soldier would be welcome there."</span>',
      'He hesitates. "We Spartans do not love the sea."'
    ],
    onEnter: () => {
      addPebble('red', 'Dorieus — the first true friend');
    },
    choices: [
      {
        text: '"Let us each toss the sheep\'s bones to decide our direction."',
        action: () => renderScene('the_bones')
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
      { text: 'Continue to the coast...', action: () => renderScene('act1_end') }
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
      { text: 'Continue to the coast...', action: () => renderScene('act1_end') }
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
      { text: 'Continue toward Corinth...', action: () => renderScene('act1_end') }
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

