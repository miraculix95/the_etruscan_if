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
      '<div class="intro">Based on the novel by Mika Waltari<br><br>' +
      'The Mediterranean, 5th century BCE. Gods walk among mortals, oracles speak in riddles, and the great civilizations of Greece, Carthage and Etruria collide.<br><br>' +
      '<em>Collect pebbles at each turning point. Follow the omens — or defy them. The stones will remember what you choose.</em></div></div>'
    ],
    choices: [
      { text: 'Choose your path...', action: () => renderScene('character_select') },
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
      'This is a <span style="color:var(--warm);">solo text adventure</span> in the tradition of gamebooks like <em>Fighting Fantasy</em>, <em>Lone Wolf</em>, and the German <em>Das Schwarze Auge</em> solo adventures. The story follows the novel\'s arc but adapts to your choices — some paths mirror the book closely, others diverge into what might have been.' +
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
      '<em style="color:#665544;">No AI-generated images were used. No backend, no server, no tracking. Just HTML, CSS, JavaScript, and a good story.</em>' +

      '</div>'
    ],
    choices: [
      { text: 'Back to title', action: () => renderScene('title') }
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
        text: 'Wait until morning, then proceed carefully',
        type: 'omen',
        action: () => { state.omensFollowed++; updateStat('body', 1, 'Patience preserved your strength'); renderScene('approach_delphi'); }
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
          renderScene('arrival_delphi_storm');
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
        text: 'Purify yourself properly — follow the rituals step by step',
        type: 'omen',
        action: () => { state.omensFollowed++; updateStat('spirit', 1, 'Ritual purification opened your mind'); renderScene('temple_calm'); }
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
      'There you wait. On the walls you read the maxims of the seven wise men. The smell of holy bay wood burning at the altar reaches your nostrils. Hours pass.',
      'Finally, the four priests emerge, adjusting their headbands. They study you with tired, suspicious eyes. "Who are you, and what judgment do you seek?"'
    ],
    choices: [
      {
        text: 'Tell them everything — the burning of Sardis, the lightning, your guilt',
        action: () => { updateStat('spirit', 1, 'Honesty lightened your soul'); renderScene('priests_question'); }
      },
      {
        text: 'Speak carefully — reveal only what is necessary',
        action: () => { updateStat('fate', 1, 'Cunning may serve you later'); renderScene('priests_question'); }
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
      { text: 'Wait for the Pythia...', action: () => renderScene('the_pythia') }
    ]
  },

  priests_question: {
    title: 'Before the Priests',
    text: [
      'The old men listen. They are weary — winter approaches and they yearn for peace. But your story troubles them.',
      '"The burning of a temple," they mutter, "even that of the Asian Cybele, whom we abhor — is a serious matter. Once temples begin to be burned, not even the gods of the Hellenes will be safe."',
      'They read the wax tablets you brought from Ephesus. One, from the priestess Artemisia, declares you innocent. The other, from the Council of Elders, demands you be cast from the cliff.',
      'The priests fall into argument. Then — a disturbance. A woman\'s voice from the inner chamber. The Pythia has awakened.'
    ],
    choices: [
      { text: 'Follow the priests to the Pythia...', action: () => renderScene('the_pythia') }
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
      { text: 'Continue to Act II — The Western Sea', action: () => renderScene('act2_title') },
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

