/**
 * Lemmatize Skill
 * Comprehensive rule-based + irregular verb lemmatization.
 *
 * Coverage:
 *  - Irregular verbs (200+ forms)
 *  - Regular verb suffixes (-ed, -ing, -es, -s)
 *  - Doubled-consonant handling (running→run, tripped→trip, transferred→transfer)
 *  - Noun plurals (-s, -es, -ies→-y, -ves→-f/-fe)
 *  - Comparative / superlative adjectives (-er, -est)
 *  - Adverbs (-ly → base adjective)
 *
 * Pure function — no side effects, no imports from runtime.
 */

// ─── Irregular Verb Table ───

const IRREGULAR_VERBS: Record<string, string> = {
  // be
  am: 'be', is: 'be', are: 'be', was: 'be', were: 'be', been: 'be', being: 'be',
  // have
  has: 'have', had: 'have', having: 'have',
  // do
  does: 'do', did: 'do', doing: 'do', done: 'do',
  // go
  goes: 'go', went: 'go', going: 'go', gone: 'go',
  // come
  comes: 'come', came: 'come', coming: 'come',
  // get
  gets: 'get', got: 'get', getting: 'get', gotten: 'get',
  // make
  makes: 'make', made: 'make', making: 'make',
  // know
  knows: 'know', knew: 'know', knowing: 'know', known: 'know',
  // think
  thinks: 'think', thought: 'think', thinking: 'think',
  // take
  takes: 'take', took: 'take', taking: 'take', taken: 'take',
  // see
  sees: 'see', saw: 'see', seeing: 'see', seen: 'see',
  // find
  finds: 'find', found: 'find', finding: 'find',
  // give
  gives: 'give', gave: 'give', giving: 'give', given: 'give',
  // tell
  tells: 'tell', told: 'tell', telling: 'tell',
  // say
  says: 'say', said: 'say', saying: 'say',
  // become
  becomes: 'become', became: 'become', becoming: 'become',
  // leave
  leaves: 'leave', left: 'leave', leaving: 'leave',
  // feel
  feels: 'feel', felt: 'feel', feeling: 'feel',
  // bring
  brings: 'bring', brought: 'bring', bringing: 'bring',
  // begin
  begins: 'begin', began: 'begin', beginning: 'begin', begun: 'begin',
  // keep
  keeps: 'keep', kept: 'keep', keeping: 'keep',
  // hold
  holds: 'hold', held: 'hold', holding: 'hold',
  // write
  writes: 'write', wrote: 'write', writing: 'write', written: 'write',
  // seem
  seems: 'seem', seemed: 'seem', seeming: 'seem',
  // hear
  hears: 'hear', heard: 'hear', hearing: 'hear',
  // play
  plays: 'play', played: 'play', playing: 'play',
  // run
  runs: 'run', ran: 'run', running: 'run',
  // move
  moves: 'move', moved: 'move', moving: 'move',
  // live
  lives: 'live', lived: 'live', living: 'live',
  // believe
  believes: 'believe', believed: 'believe', believing: 'believe',
  // happen
  happens: 'happen', happened: 'happen', happening: 'happen',
  // lead
  leads: 'lead', led: 'lead', leading: 'lead',
  // understand
  understands: 'understand', understood: 'understand', understanding: 'understand',
  // appear
  appears: 'appear', appeared: 'appear', appearing: 'appear',
  // include
  includes: 'include', included: 'include', including: 'include',
  // continue
  continues: 'continue', continued: 'continue', continuing: 'continue',
  // change
  changes: 'change', changed: 'change', changing: 'change',
  // follow
  follows: 'follow', followed: 'follow', following: 'follow',
  // stop
  stops: 'stop', stopped: 'stop', stopping: 'stop',
  // create
  creates: 'create', created: 'create', creating: 'create',
  // speak
  speaks: 'speak', spoke: 'speak', speaking: 'speak', spoken: 'speak',
  // read
  reads: 'read', read: 'read', reading: 'read',
  // spend
  spends: 'spend', spent: 'spend', spending: 'spend',
  // grow
  grows: 'grow', grew: 'grow', growing: 'grow', grown: 'grow',
  // open
  opens: 'open', opened: 'open', opening: 'open',
  // walk
  walks: 'walk', walked: 'walk', walking: 'walk',
  // win
  wins: 'win', won: 'win', winning: 'win',
  // offer
  offers: 'offer', offered: 'offer', offering: 'offer',
  // remember
  remembers: 'remember', remembered: 'remember', remembering: 'remember',
  // love
  loves: 'love', loved: 'love', loving: 'love',
  // consider
  considers: 'consider', considered: 'consider', considering: 'consider',
  // sit
  sits: 'sit', sat: 'sit', sitting: 'sit',
  // stand
  stands: 'stand', stood: 'stand', standing: 'stand',
  // lose
  loses: 'lose', lost: 'lose', losing: 'lose',
  // pay
  pays: 'pay', paid: 'pay', paying: 'pay',
  // meet
  meets: 'meet', met: 'meet', meeting: 'meet',
  // learn
  learns: 'learn', learnt: 'learn', learned: 'learn', learning: 'learn',
  // build
  builds: 'build', built: 'build', building: 'build',
  // break
  breaks: 'break', broke: 'break', breaking: 'break', broken: 'break',
  // drive
  drives: 'drive', drove: 'drive', driving: 'drive', driven: 'drive',
  // choose
  chooses: 'choose', chose: 'choose', choosing: 'choose', chosen: 'choose',
  // choose / draw
  draws: 'draw', drew: 'draw', drawing: 'draw', drawn: 'draw',
  // eat
  eats: 'eat', ate: 'eat', eating: 'eat', eaten: 'eat',
  // fall
  falls: 'fall', fell: 'fall', falling: 'fall', fallen: 'fall',
  // fly
  flies: 'fly', flew: 'fly', flying: 'fly', flown: 'fly',
  // forget
  forgets: 'forget', forgot: 'forget', forgetting: 'forget', forgotten: 'forget',
  // freeze
  freezes: 'freeze', froze: 'freeze', freezing: 'freeze', frozen: 'freeze',
  // hide
  hides: 'hide', hid: 'hide', hiding: 'hide', hidden: 'hide',
  // lie
  lies: 'lie', lay: 'lie', lying: 'lie', lain: 'lie',
  // ride
  rides: 'ride', rode: 'ride', riding: 'ride', ridden: 'ride',
  // rise
  rises: 'rise', rose: 'rise', rising: 'rise', risen: 'rise',
  // shake
  shakes: 'shake', shook: 'shake', shaking: 'shake', shaken: 'shake',
  // shine
  shines: 'shine', shone: 'shine', shining: 'shine',
  // show
  shows: 'show', showed: 'show', showing: 'show', shown: 'show',
  // sing
  sings: 'sing', sang: 'sing', singing: 'sing', sung: 'sing',
  // sink
  sinks: 'sink', sank: 'sink', sinking: 'sink', sunk: 'sink',
  // sleep
  sleeps: 'sleep', slept: 'sleep', sleeping: 'sleep',
  // slide
  slides: 'slide', slid: 'slide', sliding: 'slide',
  // speak
  // steal
  steals: 'steal', stole: 'steal', stealing: 'steal', stolen: 'steal',
  // stick
  sticks: 'stick', stuck: 'stick', sticking: 'stick',
  // sting
  stings: 'sting', stung: 'sting', stinging: 'sting',
  // strike
  strikes: 'strike', struck: 'strike', striking: 'strike',
  // swear
  swears: 'swear', swore: 'swear', swearing: 'swear', sworn: 'swear',
  // sweep
  sweeps: 'sweep', swept: 'sweep', sweeping: 'sweep',
  // swim
  swims: 'swim', swam: 'swim', swimming: 'swim', swum: 'swim',
  // swing
  swings: 'swing', swung: 'swing', swinging: 'swing',
  // tear
  tears: 'tear', tore: 'tear', tearing: 'tear', torn: 'tear',
  // throw
  throws: 'throw', threw: 'throw', throwing: 'throw', thrown: 'throw',
  // wake
  wakes: 'wake', woke: 'wake', waking: 'wake', woken: 'wake',
  // wear
  wears: 'wear', wore: 'wear', wearing: 'wear', worn: 'wear',
  // blow
  blows: 'blow', blew: 'blow', blowing: 'blow', blown: 'blow',
  // buy
  buys: 'buy', bought: 'buy', buying: 'buy',
  // catch
  catches: 'catch', caught: 'catch', catching: 'catch',
  // deal
  deals: 'deal', dealt: 'deal', dealing: 'deal',
  // dig
  digs: 'dig', dug: 'dig', digging: 'dig',
  // feed
  feeds: 'feed', fed: 'feed', feeding: 'feed',
  // fight
  fights: 'fight', fought: 'fight', fighting: 'fight',
  // hang
  hangs: 'hang', hung: 'hang', hanging: 'hang',
  // hurt
  hurts: 'hurt', hurt: 'hurt', hurting: 'hurt',
  // lay
  lays: 'lay', laid: 'lay', laying: 'lay',
  // light
  lights: 'light', lit: 'light', lighting: 'light',
  // mean
  means: 'mean', meant: 'mean', meaning: 'mean',
  // quit
  quits: 'quit', quit: 'quit', quitting: 'quit',
  // seek
  seeks: 'seek', sought: 'seek', seeking: 'seek',
  // sell
  sells: 'sell', sold: 'sell', selling: 'sell',
  // send
  sends: 'send', sent: 'send', sending: 'send',
  // shoot
  shoots: 'shoot', shot: 'shoot', shooting: 'shoot',
  // shut
  shuts: 'shut', shut: 'shut', shutting: 'shut',
  // spread
  spreads: 'spread', spread: 'spread', spreading: 'spread',
  // teach
  teaches: 'teach', taught: 'teach', teaching: 'teach',
  // wind
  winds: 'wind', wound: 'wind', winding: 'wind',

  // ── DC-ops specific irregulars ──
  // trip (breaker trips)
  trips: 'trip', tripped: 'trip', tripping: 'trip',
  // transfer (UPS transfer)
  transfers: 'transfer', transferred: 'transfer', transferring: 'transfer',
  // occur
  occurs: 'occur', occurred: 'occur', occurring: 'occur',
  // refer
  refers: 'refer', referred: 'refer', referring: 'refer',
  // permit
  permits: 'permit', permitted: 'permit', permitting: 'permit',
  // submit
  submits: 'submit', submitted: 'submit', submitting: 'submit',
  // commit
  commits: 'commit', committed: 'commit', committing: 'commit',
  // fit
  fits: 'fit', fitted: 'fit', fitting: 'fit',
  // shut (already above)
  // set (already above)
  // cut
  cuts: 'cut', cut: 'cut', cutting: 'cut',
  // put
  puts: 'put', put: 'put', putting: 'put',
};

// ─── Nouns with irregular plurals ───

const IRREGULAR_NOUNS: Record<string, string> = {
  children: 'child', men: 'man', women: 'woman', mice: 'mouse',
  teeth: 'tooth', feet: 'foot', geese: 'goose', people: 'person',
  oxen: 'ox', knives: 'knife', wives: 'wife', lives: 'life',
  halves: 'half', selves: 'self', shelves: 'shelf', leaves: 'leaf',
  loaves: 'loaf', thieves: 'thief', calves: 'calf',
  data: 'datum', criteria: 'criterion', analyses: 'analysis',
  bases: 'basis', crises: 'crisis', diagnoses: 'diagnosis',
  theses: 'thesis', hypotheses: 'hypothesis',
  phenomena: 'phenomenon', automata: 'automaton',
  indices: 'index', matrices: 'matrix', vertices: 'vertex',
  appendices: 'appendix',
  // DC-specific
  batteries: 'battery',
  entries: 'entry',
  supplies: 'supply',
  copies: 'copy',
  duties: 'duty',
  parties: 'party',
  bodies: 'body',
  cities: 'city',
  stories: 'story',
  categories: 'category',
  emergencies: 'emergency',
  facilities: 'facility',
  activities: 'activity',
  authorities: 'authority',
  properties: 'property',
  capacities: 'capacity',
  utilities: 'utility',
  securities: 'security',
  communities: 'community',
  opportunities: 'opportunity',
  responsibilities: 'responsibility',
  possibilities: 'possibility',
  technologies: 'technology',
  strategies: 'strategy',
  policies: 'policy',
  companies: 'company',
  countries: 'country',
  industries: 'industry',
  discoveries: 'discovery',
  deliveries: 'delivery',
  recoveries: 'recovery',
  inquiries: 'inquiry',
  assemblies: 'assembly',
  families: 'family',
  histories: 'history',
  mysteries: 'mystery',
  libraries: 'library',
  factories: 'factory',
  memories: 'memory',
  salaries: 'salary',
  secretaries: 'secretary',
  universities: 'university',
  varieties: 'variety',
  victories: 'victory',
  studies: 'study',
};

// ─── Adjective comparatives / superlatives ───

const IRREGULAR_ADJ: Record<string, string> = {
  better: 'good', best: 'good',
  worse: 'bad', worst: 'bad',
  more: 'much', most: 'much',
  less: 'little', least: 'little',
  further: 'far', furthest: 'far', farther: 'far', farthest: 'far',
  older: 'old', oldest: 'old', elder: 'old', eldest: 'old',
};

// ─── Main lemmatize function ───

export function lemmatize(word: string): string {
  if (!word || word.length < 2) return word;

  const w = word.toLowerCase().trim();

  // 1. Check irregular verbs
  if (IRREGULAR_VERBS[w]) return IRREGULAR_VERBS[w];

  // 2. Check irregular nouns
  if (IRREGULAR_NOUNS[w]) return IRREGULAR_NOUNS[w];

  // 3. Check irregular adjectives
  if (IRREGULAR_ADJ[w]) return IRREGULAR_ADJ[w];

  // 4. Rule-based suffix stripping (ordered by specificity)

  // 4a. -ies → -y  (batteries→battery, studies→study, supplies→supply)
  if (w.endsWith('ies') && w.length > 4) {
    return w.slice(0, -3) + 'y';
  }

  // 4b. -ves → -f or -fe  (knives→knife, halves→half)
  if (w.endsWith('ves') && w.length > 4) {
    // Try -fe first (knives, lives, wives)
    const fe_candidate = w.slice(0, -3) + 'fe';
    const f_candidate = w.slice(0, -3) + 'f';
    // Common -fe words
    if (['knife', 'life', 'wife'].includes(fe_candidate)) return fe_candidate;
    return f_candidate;
  }

  // 4c. -ses, -xes, -zes, -ches, -shes → strip -es
  if (
    w.endsWith('sses') || w.endsWith('xes') || w.endsWith('zes') ||
    w.endsWith('ches') || w.endsWith('shes')
  ) {
    return w.slice(0, -2);
  }

  // 4d. -ing with doubled consonant  (running→run, sitting→sit, stopping→stop)
  if (w.endsWith('ing') && w.length > 4) {
    const stem = w.slice(0, -3);
    // Check doubled consonant: last two chars are same consonant
    if (
      stem.length >= 2 &&
      stem[stem.length - 1] === stem[stem.length - 2] &&
      !'aeiou'.includes(stem[stem.length - 1])
    ) {
      return stem.slice(0, -1);
    }
    // -ying → -y  (studying→study, carrying→carry)
    if (stem.endsWith('y') && stem.length > 1) {
      // keep as-is (e.g., "playing" → "play" not "pla")
      // Actually: studying → stud + y + ing? No. studying → study
      // The stem after removing -ing is "study" minus nothing... wait.
      // "studying" → remove "ing" → "study" — already correct!
      // But "carrying" → remove "ing" → "carry" — also correct.
      // So just return stem for -y ending
      return stem;
    }
    // -ting where stem ends in 'e' (making→make, writing→write)
    if (stem.length > 1 && !'aeiou'.includes(stem[stem.length - 1])) {
      const withE = stem + 'e';
      // Common verbs that take -e: make, write, drive, ride, etc.
      // We can't know for sure, so return stem as-is (conservative)
      // But for very common cases, add 'e' back
      if (isLikelyEDropVerb(stem)) return withE;
    }
    // Simple -ing removal  (working→work, checking→check)
    return stem;
  }

  // 4e. -ed with doubled consonant  (stopped→stop, tripped→trip, transferred→transfer)
  if (w.endsWith('ed') && w.length > 3) {
    const stem = w.slice(0, -2);
    // Doubled consonant: running→run pattern for past tense
    if (
      stem.length >= 2 &&
      stem[stem.length - 1] === stem[stem.length - 2] &&
      !'aeiou'.includes(stem[stem.length - 1])
    ) {
      return stem.slice(0, -1);
    }
    // -ied → -y  (studied→study, carried→carry)
    if (stem.endsWith('i') && stem.length > 1) {
      return stem.slice(0, -1) + 'y';
    }
    // -ed where base ends in 'e'  (completed→complete, transferred check)
    // "completed" → stem "complet" → add 'e' → "complete"
    if (stem.length > 2 && !'aeiou'.includes(stem[stem.length - 1])) {
      const withE = stem + 'e';
      if (isLikelyEDropVerb(stem)) return withE;
    }
    // Simple -ed removal  (checked→check, worked→work)
    return stem;
  }

  // 4f. -es → -e  (changes→change, includes→include)
  if (w.endsWith('es') && w.length > 3) {
    const stemE = w.slice(0, -1); // keep the 'e': changes→change
    if (stemE.endsWith('e') && stemE.length > 2) {
      // Verify it's not a word that naturally ends in -es (like "boxes" which should go to "box")
      // Conservative: if removing -es gives a valid-looking stem, prefer that
      const stemNoE = w.slice(0, -2);
      // Words ending in -ce, -ge, -se, -ze typically keep the 'e'
      if (
        stemE.endsWith('ce') || stemE.endsWith('ge') ||
        stemE.endsWith('se') || stemE.endsWith('ze')
      ) {
        return stemE; // change, include, advise, etc.
      }
    }
  }

  // 4g. -s (general plural / 3rd person singular)
  if (w.endsWith('s') && !w.endsWith('ss') && !w.endsWith('us') && !w.endsWith('is') && w.length > 3) {
    return w.slice(0, -1);
  }

  // 4h. -er / -est comparative / superlative
  if (w.endsWith('est') && w.length > 4) {
    const stem = w.slice(0, -3);
    if (stem.length > 1 && stem[stem.length - 1] === stem[stem.length - 2] &&
        !'aeiou'.includes(stem[stem.length - 1])) {
      return stem.slice(0, -1); // biggest→big
    }
    return stem; // fastest→fast
  }
  if (w.endsWith('er') && w.length > 3 && !w.endsWith('fer') && !w.endsWith('ter') && !w.endsWith('her')) {
    // Be conservative — only strip -er for obvious comparatives
    // This is ambiguous (teacher vs. taller), skip for safety
  }

  // 4i. -ly adverb → adjective  (quickly→quick, slowly→slow)
  if (w.endsWith('ly') && w.length > 4) {
    const stem = w.slice(0, -2);
    if (stem.length > 2 && !'aeiou'.includes(stem[stem.length - 1])) {
      return stem; // quickly→quick, slowly→slow
    }
  }

  // No rule matched — return as-is
  return w;
}

// ─── Helper: detect stems that likely come from e-dropping verbs ───

const E_DROP_STEMS = new Set([
  // Common verbs where -ing/-ed drops the final 'e'
  'complet', 'mak', 'tak', 'giv', 'hav', 'us', 'mov', 'liv', 'writ',
  'driv', 'rid', 'hid', 'bit', 'hop', 'not', 'stat', 'creat', 'updat',
  'delet', 'remov', 'stor', 'clos', 'open', 'chang', 'manag', 'handl',
  'enabl', 'disabl', 'configur', 'schedul', 'monitor', 'provid', 'requir',
  'indicat', 'operat', 'generat', 'calculat', 'validat', 'allocat',
  'activat', 'deactivat', 'isolat', 'terminat', 'initiat', 'migrat',
  'consolidat', 'automat', 'replicat', 'synchroniz', 'optimiz',
  'replac', 'maintain', 'restor', 'upgrad', 'downgrad', 'invers',
  'transferr', 'occurr', 'preferr', 'referr',
  // Additional common ones
  'advis', 'surpris', 'exercis', 'promis', 'realiz', 'recogniz',
  'organiz', 'summariz', 'analyz', 'categoriz', 'prioritiz',
]);

function isLikelyEDropVerb(stem: string): boolean {
  if (E_DROP_STEMS.has(stem)) return true;
  // Heuristic: stem ends in consonant cluster that doesn't form a valid English word ending
  // e.g., "complet" → not a word, so "complete" is the lemma
  // But "work" → is a word, so "worked" → "work" (no 'e' needed)
  // Conservative: only match known stems
  return false;
}

// ─── Batch lemmatize ───

export function lemmatizeAll(words: string[]): Map<string, string> {
  const result = new Map<string, string>();
  for (const w of words) {
    result.set(w, lemmatize(w));
  }
  return result;
}

// ─── Check if a word is likely a stop word / function word ───

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'am', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'shall', 'should',
  'may', 'might', 'can', 'could', 'must', 'of', 'in', 'to', 'for', 'with', 'on',
  'at', 'by', 'from', 'as', 'into', 'through', 'during', 'before', 'after', 'above',
  'below', 'between', 'out', 'off', 'over', 'under', 'again', 'further', 'then',
  'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'both', 'each',
  'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own',
  'same', 'so', 'than', 'too', 'very', 'just', 'because', 'but', 'and', 'or', 'if',
  'while', 'about', 'up', 'it', 'its', 'i', 'me', 'my', 'we', 'our', 'you', 'your',
  'he', 'him', 'his', 'she', 'her', 'they', 'them', 'their', 'this', 'that', 'these',
  'those', 'what', 'which', 'who', 'whom', 'whose', 'also', 'any', 'every',
]);

export function isStopWord(word: string): boolean {
  return STOP_WORDS.has(word.toLowerCase());
}
