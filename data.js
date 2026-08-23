// ============================================================
// DATA — Mettre à jour ce fichier après chaque séance
// Dernière MAJ : 23 août 2026 (S6-D réalisé — sortie de référence 22k Gardiole)
// ============================================================

const RACE_DATE = new Date('2026-09-12');
const PLAN_START = new Date('2026-07-13');

const ZONES = [
  { name: 'Z1 Récup', range: '< 127 bpm', color: '#94a3b8' },
  { name: 'Z2 EF', range: '127–146 bpm', color: '#60a5fa' },
  { name: 'Z3 Tempo', range: '146–155 bpm', color: '#34d399' },
  { name: 'Z4 Seuil', range: '155–165 bpm', color: '#f59e0b' },
  { name: 'Z5 VMA', range: '165–172 bpm', color: '#f87171' },
  { name: 'Côtes max', range: '≤ 169 bpm', color: '#a78bfa' },
];

const OBSERVATIONS = {
  forme: 'Semaine de pointe (S6) bouclée avec succès. Sortie de référence 22k/728 m D+ validée : FC 132 moy, dérive 3,2%, 95% Z1–Z2. Progression aérobie continue (FC plus basse pour charges plus élevées). Prêt pour l\'affûtage.',
  points_forts: 'Capacité aérobie excellente (FC maîtrisée même après semaine de pointe). Tenue de l\'effort 2h36 avec 728 m D+ sans dégradation cardiaque. Seuil 3×10\' et 22× côte encaissés la même semaine. Cheville 100% guérie.',
  a_surveiller: 'Ischio fatigués post-S6 — surveiller en début d\'affûtage. Charge D+ systématiquement au-dessus du plan (tendance confirmée S1→S6). Côte de remplacement : récup cardiaque insuffisante au-delà de 20 reps.',
  ajustements: 'Créneaux matinaux validés (5h–7h). Affûtage S7–S8 : respecter la baisse de volume, ne pas compenser. Étirements/massage ischio avant reprise S7.',
};

const WEEKS = [
  // ──────────────────────────────────────────────
  // SEMAINE 1
  // ──────────────────────────────────────────────
  {
    id: 1, label: 'S1', dates: '13–19 juil', tag: null,
    planned_dplus: 350, actual_dplus: null,
    sessions: [
      {
        id: 'A', name: 'EF 40 min', type: 'ef',
        planned: '40 min Z2, FC 116–134',
        status: 'done',
        actual: { distance: 7.49, duration: '41 min 58 s', dplus: 0, fc_avg: 137, fc_max: 154, pace: '5:36/km' },
        notes: '14 juil., midi (12h18). Terrain plat côtier Lattes/Pérols. FC moy légèrement au-dessus de Z2 — attendu avec la chaleur. Rythme et durée conformes.'
      },
      {
        id: 'B', name: '6 × côte 50 m', type: 'cote',
        planned: '6 répétitions, FC ≤ 165 en montée',
        status: 'done',
        actual: { distance: 9.81, duration: '1 h 06', dplus: 293, fc_avg: 140, fc_max: 165 },
        notes: '15 juil., midi (~29 °C). La Gardiole. Difficile — pause en haut de chaque montée, marche sur les 2 dernières. FC max 165 = plafond atteint. Viser créneau frais pour la suite.'
      },
      {
        id: 'C', name: 'Renfo + tapis 20 min', type: 'renfo',
        planned: "Fartlek 35 min → remplacé par renfo + tapis (cheville)",
        status: 'done',
        actual: { duration: '~45 min', dplus: 0 },
        notes: '19 juil. Salle : renfo dos/abdos/épaules + 20 min tapis à 6:00/km (~120 bpm, ~3,3 km). Aucune douleur cheville. Fartlek reporté en S2.'
      },
      {
        id: 'D', name: 'Sortie longue 1h30', type: 'long',
        planned: 'EF trail 1h30, Gardiole si dispo',
        status: 'done',
        actual: { distance: 18.2, duration: '2 h 21', dplus: 577, fc_avg: 124, fc_max: 159, pace: '7:44/km' },
        notes: '18 juil. Prades d\'Aubrac (alt. 815–1123 m). Dépassée : 2h21 vs 1h30, 577 m D+ vs ~100 prévu. FC parfaitement maîtrisée en Z2, aucune dérive (126→121). ⚠️ Petite gêne cheville droite externe.'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // SEMAINE 2 — ajustée (consolidation post S1)
  // ──────────────────────────────────────────────
  {
    id: 2, label: 'S2', dates: '20–26 juil', tag: null,
    planned_dplus: 550, actual_dplus: null,
    sessions: [
      {
        id: 'A', name: 'EF 45 min', type: 'ef',
        planned: '45 min Z2 (FC 116–134), terrain plat',
        status: 'done',
        actual: { distance: 7.58, duration: '44 min', dplus: 64, fc_avg: 130, fc_max: 141, pace: '5:49/km' },
        notes: '20 juil., midi. Montpellier/Castelnau. EF bien calibré, FC moy 130 en Z2. Aucune gêne cheville — 1er test extérieur post-gêne réussi.'
      },
      {
        id: 'B', name: '6 × côte 50 m', type: 'cote',
        planned: '6 rép. (réintro prudente, pas 8×), FC ≤ 170, créneau frais',
        status: 'done',
        actual: { distance: 10.0, duration: '1 h 00', dplus: 284, fc_avg: 139, fc_max: 164 },
        notes: '22 juil., matin (7h42). La Gardiole. Nette progression vs S1 : même D+/FC mais 6 min plus rapide (1h00 vs 1h06). Créneau matinal = tout changé. Aucun problème cheville.'
      },
      {
        id: 'C', name: 'Fartlek 35 min', type: 'quality',
        planned: "10' EF + 5×(2' Z4 / 2' Z2) + 5' EF (reporté de S1)",
        status: 'done',
        actual: { distance: 8.67, duration: '47 min 52 s', dplus: 62, fc_avg: 141, fc_max: 168, pace: '5:31/km' },
        notes: '23 juil., midi (12h24). Lattes/Castelnau. 5 accélérations ~2 min à 14–16 km/h. FC pointe des reps : 154→160→162→166→165 (Z4, pointes bas Z5). Réintroduction qualité réussie.'
      },
      {
        id: 'R1', name: 'Renfo / proprio', type: 'renfo',
        planned: 'Dos, abdos, proprioception cheville + genou',
        status: 'done',
        actual: { duration: '~45 min', dplus: 0 },
        notes: '25 juil. Salle. Proprio cheville/genou consolide l\'articulation qui gênait en S1. Fait la veille de la sortie longue sans gêne → bon signe.'
      },
      {
        id: 'D', name: 'Sortie longue 1h30–1h45', type: 'long',
        planned: 'EF trail, 250–350 m D+, terrain peu technique',
        status: 'done',
        actual: { distance: 10.33, duration: '1 h 16', dplus: 428, fc_avg: 126, fc_max: 151, pace: '7:39/km' },
        notes: '26 juil., matin (7h19). La Gardiole sud (alt. 42–192 m). FC moy 126 en Z2, aucune dérive (128→125). Répartition : 18% Z1 / 52% Z2 / 30% Z3, 0% Z4–Z5. Zéro douleur cheville. D+ un peu au-dessus (428 vs 250–350) mais durée sous le prévu.'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // SEMAINE 3
  // ──────────────────────────────────────────────
  {
    id: 3, label: 'S3', dates: '27 juil – 2 août', tag: null,
    planned_dplus: 700, actual_dplus: null,
    sessions: [
      {
        id: 'A', name: 'EF 50 min', type: 'ef',
        planned: '50 min Z2, terrain plat',
        status: 'done',
        actual: { distance: 9.31, duration: '51 min 10 s', dplus: 69, fc_avg: 129, fc_max: 142, pace: '5:29/km' },
        notes: '28 juil., matin (7h11). Lattes. FC moy 129 en Z2, 0% Z4–Z5. Légère dérive (124→133) = chaleur matinale estivale. + Salle à midi : abdos, dos, proprio chevilles/genoux.'
      },
      {
        id: 'B', name: '10 × côte 50 m', type: 'cote',
        planned: '10 répétitions, FC ≤ 165, créneau frais',
        status: 'done',
        actual: { distance: 12.14, duration: '1 h 23', dplus: 469, fc_avg: 133, fc_max: 163 },
        notes: '29 juil., matin (7h09). La Gardiole, 10 montées. Saut de charge réussi : 6→10 reps. FC max 163 sous plafond. Progression nette vs S1/S2 : +4 reps, D+ 469 m, FC moy plus basse (133 vs 139–140) = meilleure économie.'
      },
      {
        id: 'C', name: 'Seuil 3×6\' (r=2\')', type: 'quality',
        planned: "10' EF + 3×(6' Z4 / 2' trot) + 5' retour — remplace VMA 5×3'",
        status: 'done',
        actual: { distance: 8.27, duration: '40 min 19 s', dplus: 89, fc_avg: 145, fc_max: 164, pace: '4:52/km' },
        notes: '31 juil., matin (7h42). Lattes. 1ère séance seuil soutenu. Allure régulière (4:15–4:16/km), FC progresse : 148→155→159. Bloc 1 en Z3 haut (normal 1ère fois), blocs 2–3 pleinement Z4. FC max 164 = plafond Z4, jamais dépassé. → Prêt pour 3×8\' en S5.'
      },
      {
        id: 'D', name: 'Sortie longue 2h', type: 'long',
        planned: 'EF trail 2h, 300–400 m D+',
        status: 'done',
        actual: { distance: 13.63, duration: '1 h 46', dplus: 386, fc_avg: 146, fc_max: 162, pace: '7:49/km' },
        notes: '1er août, midi (14h15). La Gardiole sud. FC très au-dessus de Z2 (146 moy) → sortie seuil aérobie de facto (61% Z3 + 33% Z4). Écart purement thermique. ⚠️ Incident chien : malaise chaleur au km 9, porté ~2 km. Ne plus emmener le chien > 25 °C.'
      },
      {
        id: 'R1', name: 'Renfo bas du corps', type: 'renfo',
        planned: 'Routine salle hebdo',
        status: 'done',
        actual: { duration: '~45 min', dplus: 0 },
        notes: '2 août. Salle : adducteurs/abducteurs (machines), abdos, proprio cheville+genou, squats sautés, gainage. Renfo spécifique trail (stabilité latérale, puissance montée).'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // SEMAINE 4 — Régénération
  // ──────────────────────────────────────────────
  {
    id: 4, label: 'S4', dates: '3–9 août', tag: 'regen', tagLabel: 'Régénération',
    planned_dplus: 250, actual_dplus: null,
    sessions: [
      {
        id: 'A', name: 'EF 35 min', type: 'ef',
        planned: '35 min Z2, terrain plat, récup',
        status: 'done',
        actual: { distance: 6.51, duration: '38 min 48 s', dplus: 73, fc_avg: 122, fc_max: 152, pace: '5:57/km' },
        notes: '3 août, matin (6h52). Lattes. Récup parfaitement calibrée : 89% en Z2, FC moy 122, dérive quasi nulle (+4 bpm). Pic 152 ponctuel. Bonne entrée en S4 récup.'
      },
      {
        id: 'B', name: '15 × côte remplacement', type: 'cote',
        planned: '5–6 × grande côte → adapté 15 reps sur côte alternative (~165 m / 13 m D+ / 8%)',
        status: 'done',
        actual: { distance: 11.39, duration: '1 h 06', dplus: 194, fc_avg: 138, fc_max: 164 },
        notes: '5 août, matin (6h44). Côte remplacement. ~15 montées. Brûlure quadriceps sur les 3 dernières. Récup cardiaque de + en + difficile (FC ne redescend plus sous 135). Drift : FC moy montées 141→158. → Plafonner à 18–22 reps max, ajouter marche en bas si FC > 130.'
      },
      {
        id: 'R1', name: 'Salle — renfo léger', type: 'renfo',
        planned: 'Renfo allégé (semaine régénération)',
        status: 'done',
        actual: { duration: '~40 min', dplus: 0 },
        notes: '6 août. 3×10 squats bulgares (2 kg/main), 3×10 mollets, 3×60s planche, 1×30s gainage latéral/côté, 3×10 step-ups, 3×8 squats excentriques lents (5s descente).'
      },
      {
        id: 'C', name: 'Fartlek léger 25 min', type: 'quality',
        planned: "8' EF + 5×(1'30 Z3 haut / 2' Z2) + 5' retour — garder du rythme sans charge",
        status: 'done',
        actual: { distance: 5.95, duration: '30 min 27 s', dplus: 0, fc_avg: 132, fc_max: 149, pace: '5:12/km' },
        notes: '7 août, matin (5h50). Lattes. 4 reps ~2 min à 13,4–13,8 km/h (4:21–4:28/km). Intensité Z2 haut / bas Z3 (max 149) = plus léger que prescrit, parfait pour récup. Créneau 5h50 = excellentes conditions.'
      },
      {
        id: 'R2', name: 'Salle — renfo + proprio', type: 'renfo',
        planned: 'Routine salle',
        status: 'done',
        actual: { duration: '~50 min', dplus: 0 },
        notes: '8 août. Adducteurs/abducteurs, 3×1 min équilibre unipodal sur demi-ballon, 3×20 abdos, 2 min gainage ventral, 2×30s gainage latéral, 3 longueurs fentes marchées (6 kg/main), 4×15 mollets, 12 min proprio chevilles plan incliné.'
      },
      {
        id: 'D', name: 'EF 1h15', type: 'long',
        planned: 'Endurance fondamentale longue',
        status: 'done',
        actual: { distance: 13.01, duration: '1 h 23', dplus: 20, fc_avg: 132, fc_max: 145, pace: '6:21/km' },
        notes: '9 août, matin (9h05). Lattes, terrain plat (alt. 2–12 m). Sensations pas géniales : fatigue résiduelle de la séance salle de la veille + mauvaise nuit (otite). Malgré ça, données cardio propres : 85% Z2 / 15% Z1, 0% Z3–Z5, FC moy 132, dérive modérée (+7 bpm, 129→136). Bonne clôture de S4 régénération. ⚠️ Surveiller otite avant relance S5.'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // SEMAINE 5
  // ──────────────────────────────────────────────
  {
    id: 5, label: 'S5', dates: '10–16 août', tag: null,
    planned_dplus: 900, actual_dplus: null,
    sessions: [
      {
        id: 'A', name: 'EF 55 min', type: 'ef',
        planned: '55 min Z2',
        status: 'done',
        actual: { distance: 10.23, duration: '58 min 43 s', dplus: 12, fc_avg: 127, fc_max: 144, pace: '5:44/km' },
        notes: '10 août, fin d\'après-midi (18h27). Lattes, terrain plat (alt. −2 à 11 m). EF bien calibrée : FC moy 127 pile en bas de Z2, 40% Z1 / 60% Z2, 0% Z3–Z5. Dérive cardiaque notable (+14 bpm, 120→134) — chaleur résiduelle de fin de journée en août. Distance un peu au-dessus (10,2 km vs ~9–10 attendus) mais durée conforme (~59 min vs 55 prévues). Bonne reprise post-S4 régénération.'
      },
      {
        id: 'B', name: '21 × côte remplacement', type: 'cote',
        planned: '18–20 reps sur côte alternative (~165 m / 13 m D+ / 8%), même parcours que S4-B. Marche 15–20 s en bas si FC > 130. Créneau frais.',
        status: 'done',
        actual: { distance: 10.17, duration: '59 min 48 s', dplus: 215, fc_avg: 140, fc_max: 175 },
        notes: '12 août, matin (8h38). Côte remplacement, 21 montées (vs 18–20 prévues). Super sensations. Progression nette vs S4-B : +6 reps (15→21), même durée (~1h), D+ 215 m vs 194 m. FC max 175 sur rep 1 (artefact probable — ceinture ou 1er effort explosif), puis toutes les reps suivantes ≤ 160. Drift maîtrisé : FC max montées 145–152 (reps 2–9) → 155–160 (reps 14–20) → 166 sur la dernière (finish). FC max moy 7 premières reps : 152, 7 dernières : 159 (+7 bpm). Dérive globale +8 bpm (136→144). Récup cardiaque bien meilleure que S4-B (où FC ne redescendait plus sous 135 dès rep 12). Créneau matinal efficace.'
      },
      {
        id: 'R1', name: 'Proprio / mobilité / gainage', type: 'renfo',
        planned: 'Séance activation ~1h15, veille de côtes — zéro fatigue musculaire',
        status: 'done',
        actual: { duration: '~1h15', dplus: 0 },
        notes: '11 août. Séance réalisée avec ajustements :\n'
          + '## Bloc 1 — Proprioception chevilles\n'
          + '• Proprio plan incliné latéral (inversion/éversion) : 8 min (vs 6 min prévu — +2 min)\n'
          + '• Proprio plan incliné sagittal (1\'30 orteils hauts + 1\'30 talons hauts) : 3 min\n'
          + '• Équilibre unipodal demi-ballon : 3×60 s / jambe (vs 3×45 s — +15 s/série)\n'
          + '\n## Bloc 2 — Mobilité chevilles + hanches\n'
          + '• Knee-to-wall (dorsiflexion) : 3×10 / pied\n'
          + '• Leg swings avant-arrière + latéral : 15 / côté\n'
          + '• 90/90 rotations hanches : 2×10 transitions\n'
          + '• Deep squat hold (prying) : 2×45 s\n'
          + '\n## Bloc 3 — Activation jambes\n'
          + '• Step-ups légers sans charge : 2×10 / jambe\n'
          + '\n## Bloc 4 — Gainage + dos (abdos sautés)\n'
          + '• Gainage ventral : 3×1 min\n'
          + '• Gainage latéral : 2×45 s / côté\n'
          + '• ❌ Abdos crunch : non fait\n'
          + '• ❌ Abdos obliques : non fait\n'
          + '• Relevé de dos (extensions lombaires) : 3×15\n'
          + '\nBilan : proprio renforcée (+ volume latéral + équilibre), abdos/obliques zappés. L\'essentiel activation/proprio est fait pour la séance côtes de demain.'
      },
      {
        id: 'C', name: 'Seuil 3×8\' (r=2\'30)', type: 'quality',
        planned: "10' EF + 3×(8' Z4 / 2'30 trot) + 5' retour — 24' de Z4 soutenu (ajusté de 4×8')",
        status: 'done',
        actual: { distance: 9.51, duration: '44 min 49 s', dplus: 0, fc_avg: 141, fc_max: 160, pace: '4:42/km' },
        notes: '14 août, matin (6h42). Lattes, terrain plat (alt. 3–8 m). Créneau très matinal = conditions idéales. '
          + '3 blocs seuil bien identifiés avec progression FC nette : '
          + 'Bloc 1 (~7 min) : HR moy 146, max 151, allure 4:14/km — Z2 haut / Z3, mise en route ; '
          + 'Bloc 2 (~8 min) : HR moy 152, max 155, allure 4:18/km — Z3 plein ; '
          + 'Bloc 3 (~8 min) : HR moy 154, max 158, allure 4:10/km — Z3 haut / Z4, le seul bloc réellement en Z4 (5 min sur 8). '
          + 'Récupérations efficaces : HR redescend à 130 (R1) et 137 (R2). '
          + 'Intensité globale un cran sous le prescrit (Z3 haut plutôt que Z4 plein) mais allure maintenue identique à S3-C (4:14–4:18 vs 4:15–4:16) pour des blocs +2 min. '
          + 'FC max 160 < 164 (S3-C) alors que volume supérieur → meilleure économie cardiaque. '
          + 'Répartition globale : 14% Z1 / 38% Z2 / 34% Z3 / 14% Z4 / 0% Z5. '
          + 'Dérive +16 bpm (133→149). → Prêt pour 3×10\' en S6.'
      },
      {
        id: 'D', name: 'Trail 2h / 465 m D+', type: 'long',
        planned: 'Sortie longue trail 2h30, 400–500 m D+, tracé Gardiole 18k',
        status: 'done',
        actual: { distance: 18.38, duration: '1 h 58', dplus: 465, fc_avg: 134, fc_max: 160, pace: '6:26/km' },
        notes: '16 août, matin (7h02). Gardiole boucle 18k (alt. 43–191 m). Accès en vélo (11,4 km A/R, 35+33 min, FC moy 104/120). '
          + 'Tracé GPX.studio suivi intégralement : 3 bosses principales (km 1–4 montée 140 m, km 9–10 à 145 m, km 13–17 passage au point haut 191 m). '
          + 'FC parfaitement maîtrisée : 71% Z2, 23% Z1, 5% Z3, <1% Z4, 0% Z5. '
          + 'Dérive cardiaque faible : +7 bpm (130→137). '
          + 'Allure régulière ~6:00–6:50/km sur le plat, 7:00–7:35/km en montée, 5:19–5:38/km en descente. '
          + 'Km les plus chargés en D+ : km 10 (62 m), km 13 (62 m), km 17 (61 m). '
          + 'FC max 160 atteinte ponctuellement, jamais dépassée. '
          + 'Durée sous le prévu (1h58 vs 2h30) mais distance et D+ conformes → allure plus rapide qu\'anticipée grâce au créneau frais matinal et terrain connu. '
          + 'Bilan journée : 41 km totaux (vélo+trail), 526 m D+ cumulés. Excellente sortie de prépa avant la référence S6.'
      }
    ]
  },

  // ──────────────────────────────────────────────
  // SEMAINE 6 — Pointe
  // ──────────────────────────────────────────────
  {
    id: 6, label: 'S6', dates: '17–23 août', tag: 'pointe', tagLabel: 'Pointe',
    planned_dplus: 1100, actual_dplus: null,
    sessions: [
      { id: 'A', name: 'EF 55 min', type: 'ef', planned: '55 min Z2', status: 'done',
        actual: { distance: 10.15, duration: '56 min 08 s', dplus: 9, fc_avg: 130, fc_max: 142, pace: '5:31/km' },
        notes: '17 août, 18h37. Terrain plat côtier (alt. 1–7 m). Séance parfaitement exécutée : 76 % du temps en Z2, 24 % en Z1, jamais au-dessus de Z2 (FC max 142). Dérive cardiaque modérée (+8,5 %, FC 125→135) malgré chaleur fin d\'après-midi — bonne gestion. Distance (10,15 km) et durée (56 min) conformes au plan. Entrée en semaine de pointe réussie.' },
      { id: 'B', name: '22 × côte remplacement', type: 'cote',
        planned: '22 reps sur côte alternative (~165 m / 13 m D+ / 8%). Intensité progressive 3 blocs : B1 reps 1–8 dynamique (FC ≤ 155), B2 reps 9–16 soutenu (FC ≤ 162), B3 reps 17–22 finish maximal (FC libre). Marche 15–20 s en bas si FC > 130. Créneau matin. Objectif ~280 m D+, ~1h05–1h10.',
        status: 'done',
        actual: { distance: 11.00, duration: '1 h 09', dplus: 249, fc_avg: 137, fc_max: 162 },
        notes: '19 août, matin (5h01). Côte remplacement (~165 m / 13 m D+ / 8%). 22 reps réalisées, plan respecté. '
          + 'Intensité progressive conforme aux 3 blocs prescrits : '
          + 'Bloc 1 (reps 1–8) : FC moy montées 139, max 152 (cible ≤ 155 ✓). Récup moy en bas 124. '
          + 'Bloc 2 (reps 9–16) : FC moy montées 144, max 157 (cible ≤ 162 ✓). Récup moy en bas 130. '
          + 'Bloc 3 (reps 17–22) : FC moy montées 150, max 162 (finish maximal). Récup moy en bas 136. Très exigeant musculairement — jambes en feu sur les derniers 50 m de chaque rep. '
          + 'Récup cardiaque dégradée en fin de bloc 3 : FC vallée à 145 entre reps 20–21 (pire récup de la séance). '
          + 'Drift global +11 bpm (131→143). '
          + 'Progression vs S5-B (21 reps) : +1 rep, +34 m D+, FC moy plus basse (137 vs 140) = meilleure économie cardiaque. FC max identique (162 vs 160). '
          + 'Répartition FC globale : 20% Z1 / 53% Z2 / 22% Z3 / 6% Z4. '
          + '⚠️ Tour 21 Suunto = descente+montée fusionnées (oubli marquage). Tour 20 = montée, tour 22 = descente.' },
      { id: 'C', name: 'Seuil 3×10\' (r=3\')', type: 'quality',
        planned: "10' EF + 3×(10' Z4 / 3' trot) + 5' retour — 30' de Z4, séance-clé de la prépa",
        status: 'done',
        actual: { distance: 9.80, duration: '~53 min (45 min trace + 8 min échauffement hors trace)', dplus: 3, fc_avg: 145, fc_max: 159, pace: '4:18/km (blocs seuil)' },
        notes: '21 août, matin (6h01 trace, ~5h53 réel). Lattes, terrain plat (alt. 4–10 m). 8 min d\'échauffement manquantes sur la trace GPS. '
          + '3 blocs seuil de 10 min parfaitement exécutés, progression FC conforme : '
          + 'Bloc 1 (10 min) : HR moy 146, max 150, allure 4:18/km — Z3 haut, montée progressive 137→150. '
          + 'Bloc 2 (10 min) : HR moy 150, max 154, allure 4:18/km — Z3 plein, montée 140→154. '
          + 'Bloc 3 (10 min) : HR moy 153, max 156, allure 4:16/km — Z3 haut / Z4, montée 145→156. Sensations de mieux en mieux. '
          + 'Récupérations (3 min) : R1 HR 143→129, R2 HR 147→135. '
          + 'Répartition FC (trace) : 2% Z1 / 41% Z2 / 48% Z3 / 10% Z4 / 0% Z5. Drift +6 bpm (141→148). '
          + 'Progression vs S5-C (3×8\') : blocs +2 min, allure identique (4:16–4:18 vs 4:14–4:18), FC max PLUS BASSE (156 vs 160) = meilleure économie cardiaque pour un volume seuil supérieur (+6 min de Z3–Z4). '
          + 'Jambes fatiguées (48h post 22× côte) mais sensations en amélioration au fil de la séance — excellent signe de capacité de récupération.' },
      { id: 'D', name: 'Référence 22k / 728 m D+', type: 'long',
        planned: '⚡ Sortie de référence 2h30–3h, 500–600 m D+, tracé Gardiole 22k',
        status: 'done',
        actual: { distance: 22.39, duration: '2 h 36', dplus: 728, fc_avg: 132, fc_max: 160, pace: '6:58/km' },
        notes: '23 août, matin (7h07). Gardiole boucle 22k (alt. 33–221 m). Tracé GPX.studio intégralement suivi : 4 bosses (km 0–4 +175 m, km 6–12 +208 m point haut 221 m, km 14–19 +202 m, km 19–21 +131 m). '
          + 'FC remarquablement maîtrisée : 68% Z2 / 27% Z1 / 5% Z3 / <1% Z4 / 0% Z5. FC moy 132 (sous la cible ≤ 135). '
          + 'Dérive cardiaque excellente : +4 bpm (130→134, soit 3,2%) — nettement sous le seuil de 10%. '
          + 'Montées gérées proprement : bosse 2 (km 10–11, +139 m D+) FC moy 144/138 max 149/148, jamais Z4. '
          + 'Km 21 (dernière bosse, 115 m D+ sur 1 km) : FC moy 146, max 158 — seul moment Z3 soutenu, attendu sur la 4e bosse à 2h20 d\'effort. '
          + 'Progression vs S5-D (18k Gardiole) : +4 km, +38 min, +263 m D+, et pourtant FC moy PLUS BASSE (132 vs 134) et drift PLUS FAIBLE (+4 vs +7 bpm). Excellente progression aérobie. '
          + 'Allure régulière ~6:58/km moy, cohérente avec le terrain vallonné. '
          + '⚠️ Ischio un peu fatigués — fatigue musculaire attendue en fin de semaine de pointe (22× côte J-4 + seuil 3×10\' J-2). '
          + 'Bilan : sortie de référence parfaitement exécutée. FC, dérive, répartition zones = tous les voyants verts pour l\'Apéro 32°.' }
    ]
  },

  // ──────────────────────────────────────────────
  // SEMAINE 7 — Affûtage
  // ──────────────────────────────────────────────
  {
    id: 7, label: 'S7', dates: '24–30 août', tag: 'affut', tagLabel: 'Affûtage',
    planned_dplus: 600, actual_dplus: null,
    sessions: [
      { id: 'A', name: 'EF 40 min', type: 'ef', planned: '40 min Z2', status: 'pending', actual: null, notes: null },
      { id: 'B', name: '6–8 × côte', type: 'cote', planned: '6–8 répétitions', status: 'pending', actual: null, notes: null },
      { id: 'C', name: 'VMA 5×2\' (r=1\'30)', type: 'quality', planned: "10' EF + 5×(2' Z5 / 1'30 trot) + 5' retour — court et vif, vivacité affûtage", status: 'pending', actual: null, notes: null },
      { id: 'D', name: 'Trail 1h45', type: 'long', planned: 'Trail endurance', status: 'pending', actual: null, notes: null }
    ]
  },

  // ──────────────────────────────────────────────
  // SEMAINE 8 — Affûtage final
  // ──────────────────────────────────────────────
  {
    id: 8, label: 'S8', dates: '31 août – 6 sept', tag: 'affut', tagLabel: 'Affûtage final',
    planned_dplus: 300, actual_dplus: null,
    sessions: [
      { id: 'A', name: 'EF 30 min', type: 'ef', planned: '30 min Z2', status: 'pending', actual: null, notes: null },
      { id: 'B', name: '4–5 × côte', type: 'cote', planned: '4–5 répétitions', status: 'pending', actual: null, notes: null },
      { id: 'C', name: '4×5\' allure trail', type: 'quality', planned: "10' EF + 4×(5' Z3 haut ~140–150 / 2' trot) + 5' retour — allure course, sensations", status: 'pending', actual: null, notes: null },
      { id: 'D', name: 'Trail EF 1h', type: 'long', planned: 'Endurance fondamentale trail', status: 'pending', actual: null, notes: null }
    ]
  },

  // ──────────────────────────────────────────────
  // SEMAINE DE COURSE
  // ──────────────────────────────────────────────
  {
    id: 9, label: 'Course', dates: '7–12 sept', tag: 'course', tagLabel: 'Semaine de course',
    planned_dplus: 0, actual_dplus: null,
    sessions: [
      { id: 'RACE', name: '🏔️ Apéro 32° — 32 km / 1000 m D+', type: 'long', planned: 'Objectif : 3h45–4h30', status: 'pending', actual: null, notes: null }
    ]
  }
];
