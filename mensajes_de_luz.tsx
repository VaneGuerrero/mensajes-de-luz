import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  History, 
  Heart, 
  Compass, 
  Share2, 
  X, 
  RotateCw, 
  Bookmark, 
  BookmarkCheck,
  ChevronRight,
  Check
} from 'lucide-react';

const ARCHANGELS_DATA = [
  {
    id: 'miguel',
    name: 'Arcángel Miguel',
    title: 'Príncipe de la Protección y la Fuerza',
    color: '#3b82f6', // Azul eléctrico
    accentColor: '#f59e0b', // Oro
    energy: 'Protección, Fuerza, Valentía, Disipar Miedos',
    aura: 'from-blue-600 via-indigo-950 to-amber-950',
    cardStyle: 'border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.25)]',
    glowColor: 'rgba(59, 130, 246, 0.6)',
    symbolPath: 'M12 2v20M5 12h14M8 7l4-5 4 5M8 17l4 5 4-5',
    iconSvg: (
      <svg className="w-12 h-12 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 6-3-2-3 2 3-6z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6v14" strokeLinecap="round"/>
        <path d="M9 17h6M10 14h4M8 8l4 2 4-2" strokeLinecap="round"/>
      </svg>
    ),
    vocab: {
      openings: [
        'Bajo mi manto de luz azul cobalto, hoy te resguardo.',
        'Siente la firmeza de mi espada cortando todo lazo de duda.',
        'La fuerza del Gran Creador fluye ahora a través de mi presencia hacia ti.',
        'Se disipan las sombras de la incertidumbre en este instante.',
        'He escuchado tu llamado silencioso y he acudido con mi ejército de luz.'
      ],
      guidances: [
        'No hay obstáculo terrenal que pueda detener tu libre albedrío guiado por el bien.',
        'Libera el miedo a lo desconocido; es solo el preludio de una gran revelación.',
        'Corta valientemente con aquellos hábitos y pensamientos que drenan tu energía vital.',
        'Mantente firme como una montaña divina frente a las tempestades transitorias.',
        'Confía en tu autoridad espiritual para manifestar paz y orden en tu entorno inmediato.'
      ],
      affirmations: [
        'Yo soy fuerte, yo soy libre, y estoy eternamente protegido.',
        'La armadura celestial resguarda mi mente, mi cuerpo y mi espíritu.',
        'Suelto el control y abrazo el poder divino que actúa a mi favor.',
        'Doy un paso al frente con la absoluta certeza de que el camino está seguro.',
        'Mi energía es inviolable y solo vibra en la más alta frecuencia de la paz.'
      ],
      closings: [
        'Vete en paz, pues las huestes celestiales caminan a tu lado hoy.',
        'Mi rayo azul eléctrico permanece activo en tu aura para proteger tu paz.',
        'Visualiza un escudo de zafiro a tu alrededor cada vez que dudes.',
        'El poder divino ya ha resuelto lo que tanto te preocupaba.',
        'Camina erguido, alma valiente, la victoria espiritual es tuya.'
      ],
      energyKeyword: 'Protección Absoluta'
    }
  },
  {
    id: 'gabriel',
    name: 'Arcángel Gabriel',
    title: 'Mensajero Divino de la Claridad y Renovación',
    color: '#e2e8f0', // Blanco perlado
    accentColor: '#6366f1', // Indigo
    energy: 'Claridad, Inspiración, Nuevos Comienzos, Creatividad',
    aura: 'from-slate-100 via-indigo-950 to-slate-900',
    cardStyle: 'border-slate-300/40 shadow-[0_0_30px_rgba(226,232,240,0.2)]',
    glowColor: 'rgba(226, 232, 240, 0.5)',
    iconSvg: (
      <svg className="w-12 h-12 text-indigo-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3a9 9 0 019 9v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-1a9 9 0 019-9z" strokeLinecap="round"/>
        <path d="M12 16v5M9 21h6M12 8a2 2 0 100-4 2 2 0 000 4z" strokeLinecap="round"/>
        <path d="M18 10a12 12 0 00-12 0" strokeLinecap="round"/>
      </svg>
    ),
    vocab: {
      openings: [
        'Soplo una brisa de claridad celestial sobre tu mente inquieta.',
        'La pureza de mi rayo blanco perlado abre tus canales de comunicación divina.',
        'Un mensaje importante del cosmos está listo para ser sembrado en tu corazón.',
        'Las plumas de mi ala derecha traen la noticia de una nueva alborada para ti.',
        'Despierta tu atención mística, pues el cielo te habla de manera directa.'
      ],
      guidances: [
        'Es el momento propicio para expresar tu verdad con dulzura, arte y elocuencia.',
        'La confusión actual es solo la niebla previa a una deslumbrante revelación interior.',
        'Confía en tus ideas creativas; son susurros divinos moldeando tu destino inmediato.',
        'La vida te pide iniciar un nuevo capítulo libre de resentimientos del pasado.',
        'Escribe, canta, habla o crea; el universo fluye a través de tus talentos latentes.'
      ],
      affirmations: [
        'Mi mente es un canal claro para recibir la guía y sabiduría divina.',
        'Abrazo la renovación de mi vida y acepto con gozo este nuevo comienzo.',
        'Expreso mis sentimientos con absoluta gracia, amor y sinceridad.',
        'Soy libre para crear una realidad colmada de belleza y propósito sagrado.',
        'Confío plenamente en las señales divinas que iluminan mi sendero diario.'
      ],
      closings: [
        'Sella este mensaje en tu alma y permite que florezca en su momento perfecto.',
        'Mi trompeta de luz ha anunciado ya el orden divino en todos tus asuntos.',
        'Mantente atento a los sueños de esta noche; allí te hablaré con sutileza.',
        'La inspiración divina nunca te abandonará si mantienes tu corazón puro.',
        'Que la gracia cósmica guíe cada palabra que pronuncies hoy.'
      ],
      energyKeyword: 'Claridad Reveladora'
    }
  },
  {
    id: 'rafael',
    name: 'Arcángel Rafael',
    title: 'Médico Divino de la Sanación y la Armonía',
    color: '#10b981', // Verde esmeralda
    accentColor: '#059669',
    energy: 'Sanación Integral, Paz Interior, Regeneración, Equilibrio',
    aura: 'from-emerald-600 via-teal-950 to-green-950',
    cardStyle: 'border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.25)]',
    glowColor: 'rgba(16, 185, 129, 0.6)',
    iconSvg: (
      <svg className="w-12 h-12 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" strokeLinecap="round"/>
        <path d="M12 6c-2 0-3 1.5-3 3.5S10.5 13 12 15c1.5-2 3-3 3-5.5S14 6 12 6z" strokeLinecap="round"/>
        <path d="M8 12h8M12 8v8" strokeLinecap="round"/>
      </svg>
    ),
    vocab: {
      openings: [
        'Bajo mi cálido resplandor verde esmeralda, tu sanación da inicio.',
        'Siente la caricia regeneradora de la naturaleza divina fluyendo en ti.',
        'Traigo el bálsamo de la paz infinita para calmar cualquier aflicción corporal o mental.',
        'Alineo tus centros energéticos para restaurar el flujo vital original.',
        'La matriz perfecta de tu salud espiritual está siendo reactivada en este momento.'
      ],
      guidances: [
        'Acepta el descanso sagrado como una medicina indispensable para tu evolución.',
        'Presta atención a lo que consumes: pensamientos, palabras, alimentos y emociones.',
        'El verdadero perdón es el antídoto definitivo para liberar tensiones corporales.',
        'Vuelve a la naturaleza; abraza un árbol, camina descalzo o contempla el cielo.',
        'Escucha con profunda compasión los susurros y alertas que te envía tu propio cuerpo.'
      ],
      affirmations: [
        'Cada célula de mi ser se regenera ahora en perfecta salud y armonía.',
        'Suelto el dolor del ayer y permito que la sanación divina me sature.',
        'Mi mente está en completa paz y mi cuerpo refleja esa maravillosa calma.',
        'Soy un canal limpio para la infinita energía sanadora del universo.',
        'Agradezco mi perfecta vitalidad y celebro el milagro diario de la vida.'
      ],
      closings: [
        'Respira hondo y confía en el proceso inteligente de autosanación de tu alma.',
        'Mi rayo esmeralda te envuelve en un capullo protector de perfecta salud.',
        'He disipado la discordia en tu templo sagrado; mantén encendida tu fe.',
        'Camina con la frente en alto; tu bienestar es la voluntad del Creador.',
        'Te bendigo con paz inalterable, vigor incansable y armonía perdurable.'
      ],
      energyKeyword: 'Sanación Activa'
    }
  },
  {
    id: 'uriel',
    name: 'Arcángel Uriel',
    title: 'Ángel de la Sabiduría, Abundancia y Provisión',
    color: '#f97316', // Oro rubí / ámbar
    accentColor: '#dc2626', // Rubí
    energy: 'Abundancia, Sabiduría Práctica, Prosperidad, Enfoque Mental',
    aura: 'from-amber-600 via-rose-950 to-amber-950',
    cardStyle: 'border-amber-500/40 shadow-[0_0_30px_rgba(249,115,22,0.25)]',
    glowColor: 'rgba(249, 115, 22, 0.6)',
    iconSvg: (
      <svg className="w-12 h-12 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 4 5 1-4 4 1 5-5-3-5 3 1-5-4-4 5-1 3-4z" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" strokeLinecap="round"/>
      </svg>
    ),
    vocab: {
      openings: [
        'Enciendo mi llama dorada y rubí en la base de tu columna para arraigar tu prosperidad.',
        'Traigo la llave de oro de la sabiduría práctica para resolver tus encrucijadas.',
        'Las puertas del granero divino de la abundancia se abren ante tu fe sincera.',
        'Siente la calidez y el resplandor de mi fuego divino iluminando tus finanzas.',
        'Vengo a disipar todo velo de carencia que nuble tu grandioso derecho divino.'
      ],
      guidances: [
        'Enfoca tus esfuerzos con paciencia constructiva; las grandes obras toman tiempo.',
        'Agradece de antemano lo que deseas recibir; la gratitud es el imán de la provisión.',
        'Sé sabio con tus recursos materiales; úsalos para bendecir tu vida y la de otros.',
        'Deshazte de la idea de escasez; el universo es un océano de recursos ilimitados.',
        'La verdadera riqueza nace del servicio amoroso y la excelencia en tu labor.'
      ],
      affirmations: [
        'Soy un imán viviente para la prosperidad, la riqueza y el éxito bien habido.',
        'La sabiduría divina me guía para tomar decisiones financieras perfectas hoy.',
        'Tengo todo lo que necesito para cumplir mi sagrado propósito terrenal.',
        'Acepto con infinito amor los tesoros espirituales y materiales que llegan a mí.',
        'Mi mente es rica, mis ideas son prósperas y mi camino rebosa abundancia.'
      ],
      closings: [
        'Mi luz ámbar bendice tus manos para que todo lo que toques prospere.',
        'Mantén encendida la llama de la generosidad y la opulencia divina te seguirá.',
        'No temas al porvenir, pues el sustento perfecto ya está decretado para ti.',
        'Eres el heredero de un universo próspero; actúa con esa nobleza espiritual.',
        'Te dejo envuelto en el rayo oro-rubí de la paz material perdurable.'
      ],
      energyKeyword: 'Sabiduría y Provisión'
    }
  },
  {
    id: 'chamuel',
    name: 'Arcángel Chamuel',
    title: 'Mensajero del Amor Incondicional y la Compasión',
    color: '#ec4899', // Rosa luminoso
    accentColor: '#db2777',
    energy: 'Amor Divino, Reconciliación, Autoestima, Compasión Hermosa',
    aura: 'from-pink-500 via-rose-950 to-purple-950',
    cardStyle: 'border-pink-500/40 shadow-[0_0_30px_rgba(236,72,153,0.25)]',
    glowColor: 'rgba(236, 72, 153, 0.6)',
    iconSvg: (
      <svg className="w-12 h-12 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="2" strokeLinecap="round"/>
      </svg>
    ),
    vocab: {
      openings: [
        'Te envuelvo en la frecuencia más alta del cosmos: el rayo rosa del Amor Divino.',
        'Vengo a sanar las heridas más profundas e invisibles de tu noble corazón.',
        'Permite que mi presencia disuelva cualquier rastro de amargura o soledad.',
        'Las alas del amor incondicional te abrazan con ternura y contención absoluta.',
        'Abro tu chacra del corazón para que sintonice con las relaciones puras del universo.'
      ],
      guidances: [
        'Antes de buscar el amor afuera, encarna el romance sagrado de amarte a ti mismo.',
        'Perdona a quienes te ofendieron, no por ellos, sino para liberar a tu propio corazón.',
        'El amor no exige posesión; florece con la libertad y la confianza mutua.',
        'Sé amable con tus imperfecciones; eres una obra maestra espiritual en evolución.',
        'Sintoniza tus palabras con el aprecio; un elogio sincero puede transformar un día.'
      ],
      affirmations: [
        'Me amo, me acepto, me valoro y me perdono por completo en este día.',
        'Atraigo únicamente relaciones sanas, armoniosas, leales y colmadas de luz.',
        'Soy un canal radiante de amor incondicional hacia toda la creación divina.',
        'Mi corazón la al compás armónico de la paz cósmica infinita.',
        'El amor divino disuelve instantáneamente cualquier rastro de resentimiento.'
      ],
      closings: [
        'Mi rayo rosa queda anclado en tu pecho; respira amor cada segundo de hoy.',
        'Ve y expande esta calidez con todo ser humano que cruce tu sagrado camino.',
        'El amor es la fuerza más poderosa de la creación; confía plenamente en su magia.',
        'Te bendigo con un dulce encuentro interior y el abrazo de almas afines.',
        'Que la compasión sea tu brújula en cada interacción terrenal.'
      ],
      energyKeyword: 'Amor Incondicional'
    }
  },
  {
    id: 'jofiel',
    name: 'Arcángel Jofiel',
    title: 'Portador de la Sabiduría Divina e Iluminación Mental',
    color: '#eab308', // Amarillo dorado
    accentColor: '#ca8a04',
    energy: 'Sabiduría, Claridad Intelectual, Inspiración Divina, Enfoque',
    aura: 'from-yellow-500 via-amber-950 to-stone-900',
    cardStyle: 'border-yellow-500/40 shadow-[0_0_30px_rgba(234,179,8,0.25)]',
    glowColor: 'rgba(234, 179, 8, 0.6)',
    iconSvg: (
      <svg className="w-12 h-12 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" strokeLinecap="round"/>
      </svg>
    ),
    vocab: {
      openings: [
        'Derramo un torrente de luz dorada sobre tu corona para despertar tu intelecto.',
        'El rayo de la iluminación ilumina los rincones donde antes moraba la duda.',
        'Conecto tus pensamientos con la sabiduría infinita de la mente universal.',
        'Siente la expansión mental que trae la presencia de mi rayo amarillo dorado.',
        'Vengo a embellecer tus conceptos sobre la vida para que encuentres su sublime sentido.'
      ],
      guidances: [
        'La solución que buscas no requiere esfuerzo; requiere un instante de profunda quietud.',
        'Aprende a ver la belleza oculta tras los desafíos cotidianos de tu vida.',
        'Busca el conocimiento espiritual con la curiosidad inocente de un niño.',
        'Mantén una actitud mental positiva; el universo siempre responde a tu vibración.',
        'La inspiración divina llega cuando te permites contemplar el silencio interior.'
      ],
      affirmations: [
        'Mi mente está perfectamente iluminada, enfocada y llena de paz creadora.',
        'Comprendo fácilmente las lecciones de la vida y actúo con absoluta sabiduría.',
        'Mis pensamientos crean una realidad llena de gracia, orden y esplendor.',
        'Sintonizo con la genialidad del universo para materializar mis hermosas metas.',
        'Encuentro sabiduría y belleza divina en cada rincón de mi existencia.'
      ],
      closings: [
        'Conserva tu enfoque brillante y permite que tu luz interior guíe a otros hoy.',
        'Mi rayo dorado permanece encendido en tu frente para inspirar tus mejores ideas.',
        'La sabiduría eterna ya mora en ti; solo debes atreverte a escucharla.',
        'Embellece tu mundo mental y verás cómo tu entorno se transforma mágicamente.',
        'Te bendigo con claridad absoluta, lucidez mental y paz intelectual eterna.'
      ],
      energyKeyword: 'Sabiduría Elevada'
    }
  },
  {
    id: 'zadquiel',
    name: 'Arcángel Zadquiel',
    title: 'Ángel de la Transmutación, el Perdón y la Liberación',
    color: '#a855f7', // Violeta profundo
    accentColor: '#7e22ce',
    energy: 'Transmutación Espiritual, Perdón Profundo, Liberación de Cargas',
    aura: 'from-purple-600 via-violet-950 to-indigo-950',
    cardStyle: 'border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.25)]',
    glowColor: 'rgba(168, 85, 247, 0.6)',
    iconSvg: (
      <svg className="w-12 h-12 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" strokeLinecap="round"/>
        <path d="M8 12a4 4 0 018 0" strokeLinecap="round"/>
        <path d="M12 12v6M10 16h4M12 8V6" strokeLinecap="round"/>
      </svg>
    ),
    vocab: {
      openings: [
        'Enciendo la sagrada Llama Violeta a tu alrededor para purificar tus memorias de dolor.',
        'Vengo a ayudarte a soltar las pesadas cadenas de agravios pasados.',
        'Permite que el fuego sagrado de la transmutación eleve tu frecuencia vibratoria hoy.',
        'Establezco un santuario de perdón y misericordia divina en tu espacio sagrado.',
        'Disuelvo con mi rayo violeta profundo toda energía densa acumulada en tu aura.'
      ],
      guidances: [
        'El perdón no justifica la acción ajena; es la llave de oro para liberar tu propia alma.',
        'Transmuta el rencor en sabiduría evolutiva y avanza con paso liviano y feliz.',
        'Suelta todo juicio severo hacia ti mismo; mereces compasión y segundas oportunidades.',
        'Visualiza tus miedos disolviéndose en una hoguera de hermosa luz amatista.',
        'El pasado ya no existe; eres el co-creador libre del presente glorioso.'
      ],
      affirmations: [
        'Yo perdono de corazón, me libero y transmuto toda carga densa en amor.',
        'Abrazo la maravillosa libertad que me concede el perdón incondicional hoy.',
        'Soy un ser de fuego violeta puro, vibrando en la más alta frecuencia de la gracia.',
        'El pasado queda saldado en amor y abro mis brazos a un bendito futuro.',
        'Disuelvo conscientemente toda creencia limitante que detenga mi ascensión.'
      ],
      closings: [
        'La Llama Violeta permanece activa en tus pies, transmutando cada paso terrenal.',
        'Camina libre de culpas, pues ante los ojos del Creador tu esencia es perfecta.',
        'El perdón es el puente de oro hacia tu verdadera y grandiosa ascensión espiritual.',
        'Siente la ligereza divina de un alma redimida por su propia compasión.',
        'Te bendigo con liberación total, perdón eterno y renacimiento celestial.'
      ],
      energyKeyword: 'Transmutación Divina'
    }
  }
];

// Motor de síntesis celestial nativa
class CelestialSoundSynth {
  constructor() {
    this.ctx = null;
    this.ambientOsc = null;
    this.ambientFilter = null;
    this.ambientGain = null;
    this.isAmbientPlaying = false;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playChime(freq = 440, duration = 2.5) {
    this.init();
    const now = this.ctx.currentTime;
    const ratios = [1, 1.5, 2.05, 2.8, 3.8, 4.2];
    ratios.forEach((ratio, index) => {
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();
      
      osc.type = index === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq * ratio, now);
      
      const volume = (0.2 / (index + 1)) * 0.5;
      gainNode.gain.setValueAtTime(volume, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration * (1 - index * 0.12));
      
      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      
      osc.start(now);
      osc.stop(now + duration + 0.1);
    });
  }

  playWheelTick(pitchMultiplier = 1) {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(250 * pitchMultiplier, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);
    
    gainNode.gain.setValueAtTime(0.08, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    
    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.1);
  }

  playSweep(duration = 4) {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gainNode = this.ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(60, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + duration);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(120, now);
    osc2.frequency.exponentialRampToValueAtTime(640, now + duration);
    
    filter.type = 'lowpass';
    filter.Q.setValueAtTime(8, now);
    filter.frequency.setValueAtTime(100, now);
    filter.frequency.exponentialRampToValueAtTime(2500, now + duration);
    
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.linearRampToValueAtTime(0.12, now + duration * 0.8);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    
    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.ctx.destination);
    
    osc.start(now);
    osc2.start(now);
    osc.stop(now + duration);
    osc2.stop(now + duration);
  }

  playRevealArcana() {
    this.init();
    const now = this.ctx.currentTime;
    const chord = [130.81, 164.81, 196.00, 246.94, 293.66, 392.00, 523.25]; 
    
    chord.forEach((freq, i) => {
      setTimeout(() => {
        this.playChime(freq * 1.5, 4.0 - (i * 0.2));
      }, i * 90);
    });
  }

  startAmbientAtmosphere() {
    try {
      this.init();
      if (this.isAmbientPlaying) return;
      
      const now = this.ctx.currentTime;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.01, now);
      this.ambientGain.gain.linearRampToValueAtTime(0.3, now + 3);

      this.ambientFilter = this.ctx.createBiquadFilter();
      this.ambientFilter.type = 'lowpass';
      this.ambientFilter.frequency.setValueAtTime(250, now);

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(110, now);
      osc1.detune.setValueAtTime(-15, now);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(110.5, now);
      osc2.detune.setValueAtTime(15, now);

      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(0.12, now);
      lfoGain.gain.setValueAtTime(120, now);

      lfo.connect(lfoGain);
      lfoGain.connect(this.ambientFilter.frequency);
      
      osc1.connect(this.ambientFilter);
      osc2.connect(this.ambientFilter);
      this.ambientFilter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      lfo.start(now);
      osc1.start(now);
      osc2.start(now);

      this.ambientOsc = [osc1, osc2, lfo];
      this.isAmbientPlaying = true;
    } catch(e) {
      console.log("AudioContext blocked: ", e);
    }
  }

  stopAmbientAtmosphere() {
    if (!this.isAmbientPlaying) return;
    const now = this.ctx.currentTime;
    
    if (this.ambientGain) {
      this.ambientGain.gain.setValueAtTime(this.ambientGain.gain.value, now);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
    }
    
    setTimeout(() => {
      if (this.ambientOsc) {
        this.ambientOsc.forEach(osc => { try { osc.stop(); } catch(e){} });
      }
      this.isAmbientPlaying = false;
    }, 1600);
  }
}

const synth = new CelestialSoundSynth();

const CelestialBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const density = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < density; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          color: `rgba(${200 + Math.random() * 55}, ${220 + Math.random() * 35}, 255, ${Math.random() * 0.6 + 0.2})`,
          speedX: (Math.random() - 0.5) * 0.08,
          speedY: (Math.random() - 0.5) * 0.08,
          blinkSpeed: Math.random() * 0.02 + 0.005,
          opacity: Math.random(),
          direction: Math.random() > 0.5 ? 1 : -1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 50,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.7
      );
      grad.addColorStop(0, 'rgba(30, 27, 75, 0.45)');
      grad.addColorStop(0.5, 'rgba(15, 23, 42, 0.2)');
      grad.addColorStop(1, 'rgba(3, 7, 18, 1)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        star.opacity += star.blinkSpeed * star.direction;
        if (star.opacity >= 0.95 || star.opacity <= 0.15) {
          star.direction *= -1;
        }
        
        ctx.fillStyle = star.color.replace(/[\d.]+\)$/, `${Math.max(0, Math.min(1, star.opacity))})`);
        ctx.shadowBlur = star.size * 2;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;

        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
        if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

const generateProceduralMessage = (arcangel) => {
  const v = arcangel.vocab;
  const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const opening = rand(v.openings);
  const guidance = rand(v.guidances);
  const affirmation = rand(v.affirmations);
  const closing = rand(v.closings);

  return {
    arcangelId: arcangel.id,
    arcangelName: arcangel.name,
    title: arcangel.title,
    text: `${opening}\n\n${guidance}\n\nConfía plenamente en esta afirmación: "${affirmation}"\n\n${closing}`,
    affirmationShort: affirmation,
    energy: arcangel.energyKeyword,
    timestamp: new Date().toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };
};

const CelestialWheel = ({ onSelectArcangel, isSpinning, setIsSpinning }) => {
  const [rotation, setRotation] = useState(0);
  const tickAudioInterval = useRef(null);
  
  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    synth.init();
    synth.playSweep(4.5);
    
    const arcangelsCount = ARCHANGELS_DATA.length;
    const segmentAngle = 360 / arcangelsCount;
    
    const selectedIdx = Math.floor(Math.random() * arcangelsCount);
    const extraSpins = 5 + Math.floor(Math.random() * 4);
    const targetAngle = (extraSpins * 360) + (360 - (selectedIdx * segmentAngle)) - (segmentAngle / 2);
    
    setRotation(targetAngle);

    let currentRotation = rotation % 360;
    const duration = 4500;
    const start = performance.now();
    let lastTickAngle = 0;

    const playTicks = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const tempRotation = currentRotation + (targetAngle - currentRotation) * easeProgress;
      
      const currentTickDiff = Math.abs(tempRotation - lastTickAngle);
      if (currentTickDiff >= segmentAngle) {
        synth.playWheelTick(1.2 - (progress * 0.7));
        lastTickAngle = tempRotation;
      }
      
      if (progress < 1) {
        tickAudioInterval.current = requestAnimationFrame(playTicks);
      }
    };
    
    tickAudioInterval.current = requestAnimationFrame(playTicks);

    setTimeout(() => {
      cancelAnimationFrame(tickAudioInterval.current);
      setIsSpinning(false);
      synth.playRevealArcana();
      onSelectArcangel(ARCHANGELS_DATA[selectedIdx]);
    }, duration);
  };

  const segmentAngle = 360 / ARCHANGELS_DATA.length;

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="relative mb-3 z-10 flex flex-col items-center">
        <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[20px] border-t-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-bounce" />
        <span className="text-[10px] tracking-widest text-amber-300 font-semibold uppercase bg-slate-950/80 px-2 py-0.5 rounded border border-amber-500/30 backdrop-blur-sm shadow-[0_0_10px_rgba(251,191,36,0.1)]">
          Punto de Guía
        </span>
      </div>

      <div className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 rounded-full p-2 border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-[0_0_60px_rgba(99,102,241,0.15)] flex items-center justify-center select-none">
        <div className="absolute inset-2 rounded-full border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.15)] pointer-events-none" />
        
        <div 
          className="w-full h-full rounded-full relative overflow-hidden transition-transform duration-[4500ms] cubic-bezier(0.15, 0.85, 0.35, 1)"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <defs>
              {ARCHANGELS_DATA.map((arc, i) => {
                return (
                  <radialGradient id={`grad-${arc.id}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%" key={arc.id}>
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="75%" stopColor="#1e1b4b" />
                    <stop offset="100%" stopColor={arc.color} stopOpacity="0.45" />
                  </radialGradient>
                );
              })}
              <filter id="glow-light" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Segmentos */}
            {ARCHANGELS_DATA.map((arc, i) => {
              const startAngle = (i * segmentAngle) - 90;
              const endAngle = ((i + 1) * segmentAngle) - 90;
              
              const radStart = (startAngle * Math.PI) / 180;
              const radEnd = (endAngle * Math.PI) / 180;
              
              const x1 = 200 + 195 * Math.cos(radStart);
              const y1 = 200 + 195 * Math.sin(radStart);
              const x2 = 200 + 195 * Math.cos(radEnd);
              const y2 = 200 + 195 * Math.sin(radEnd);
              
              const largeArcFlag = segmentAngle > 180 ? 1 : 0;
              const pathData = `M 200 200 L ${x1} ${y1} A 195 195 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

              const textAngle = startAngle + (segmentAngle / 2);
              const radText = (textAngle * Math.PI) / 180;
              const textX = 200 + 130 * Math.cos(radText);
              const textY = 200 + 130 * Math.sin(radText);

              return (
                <g key={arc.id} className="cursor-pointer group">
                  <path 
                    d={pathData} 
                    fill={`url(#grad-${arc.id})`}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1.5"
                    className="transition-all duration-300 group-hover:opacity-90"
                  />
                  <g transform={`translate(${textX}, ${textY}) rotate(${textAngle + 90})`}>
                    <text 
                      textAnchor="middle" 
                      fill="#f8fafc" 
                      fontSize="10" 
                      fontWeight="600"
                      letterSpacing="0.1em"
                      className="fill-slate-100 uppercase"
                    >
                      {arc.name.split(' ')[1]}
                    </text>
                    <circle cx="0" cy="12" r="3.5" fill={arc.color} className="shadow" />
                  </g>
                </g>
              );
            })}

            <circle cx="200" cy="200" r="85" fill="none" stroke="rgba(251, 191, 36, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
          </svg>

          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {ARCHANGELS_DATA.map((arc, i) => {
              const angle = (i * segmentAngle) + (segmentAngle / 2);
              const radius = 70;
              const rad = ((angle - 90) * Math.PI) / 180;
              const x = 150 + radius * Math.cos(rad);
              const y = 150 + radius * Math.sin(rad);

              return (
                <div 
                  key={arc.id}
                  className="absolute w-12 h-12 flex items-center justify-center"
                  style={{ 
                    left: `${x + 5}%`, 
                    top: `${y + 5}%`,
                    transform: `rotate(${angle}deg)`
                  }}
                >
                  <div className="opacity-70 scale-75 transform transition-transform">
                    {arc.iconSvg}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Control del Botón Central */}
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className="absolute w-20 h-20 rounded-full bg-slate-950 border-2 border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.5)] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 z-20 focus:outline-none disabled:opacity-90 group"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="absolute inset-0.5 rounded-full border border-amber-500/20 bg-gradient-to-b from-indigo-900/40 to-slate-950" />
          
          {isSpinning ? (
            <RotateCw className="w-6 h-6 text-amber-300 animate-spin z-10" />
          ) : (
            <Sparkles className="w-7 h-7 text-amber-300 group-hover:animate-pulse z-10" />
          )}
          <span className="text-[9px] font-bold tracking-widest text-white mt-0.5 z-10 uppercase">
            {isSpinning ? 'GIRO...' : 'GIRAR'}
          </span>
        </button>
      </div>

      <div className="mt-8 text-center px-4 max-w-sm">
        <p className="text-slate-400 text-xs italic">
          "Las coincidencias son el lenguaje silencioso del cosmos. Respira hondo, gira la rueda celeste y recibe la guía del día."
        </p>
      </div>
    </div>
  );
};

const ArchangelCardModal = ({ message, onClose, onSaveFavorite, isSaved }) => {
  const [toastText, setToastText] = useState("");
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const arcangel = ARCHANGELS_DATA.find(a => a.id === message.arcangelId);

  // Sistema de partículas sutil exclusivo para el aura de la tarjeta del arcángel
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frameId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < 35; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedY: -(Math.random() * 0.4 + 0.1),
          speedX: (Math.random() - 0.5) * 0.2,
          alpha: Math.random() * 0.5 + 0.3,
          growth: Math.random() * 0.01 - 0.005
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${arcangel.color}${Math.floor(p.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = arcangel.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        p.y += p.speedY;
        p.x += p.speedX;
        
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
          p.alpha = Math.random() * 0.5 + 0.3;
        }
      });
      frameId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, [message, arcangel]);

  // Manejador seguro para copiar usando document.execCommand para prevenir errores de Sandbox/iFrames
  const handleCopySecure = () => {
    const shareText = `👼 Mensaje Celestial - ${message.arcangelName}\n\n"${message.affirmationShort}"\n\nRecibido en la app Mensajes de Luz.`;
    
    // Método clásico fallback de copia compatible con iframes estrictos
    const textArea = document.createElement("textarea");
    textArea.value = shareText;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        triggerToast("¡Mensaje celestial copiado!");
      } else {
        triggerToast("Dispositivo no compatible.");
      }
    } catch (err) {
      triggerToast("Error al copiar mensaje.");
    }
    
    document.body.removeChild(textArea);
  };

  const triggerToast = (text) => {
    setToastText(text);
    setTimeout(() => {
      setToastText("");
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
      
      {/* Toast Notificación para evitar usar alert() */}
      {toastText && (
        <div className="absolute top-8 z-50 flex items-center gap-2 bg-slate-900 border border-emerald-500/40 text-emerald-300 px-4 py-2.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-md text-xs font-semibold tracking-wide animate-scale-up">
          <Check className="w-4 h-4 text-emerald-400" />
          {toastText}
        </div>
      )}

      {/* Aura Difusa Celestial */}
      <div 
        className={`absolute w-96 h-96 rounded-full blur-[120px] opacity-40 transition-all duration-1000 bg-gradient-to-r ${arcangel.aura}`} 
      />

      <div 
        ref={cardRef}
        className={`relative w-full max-w-md rounded-3xl overflow-hidden border bg-slate-900/60 backdrop-blur-md transition-all duration-500 transform ${arcangel.cardStyle} animate-scale-up`}
      >
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

        {/* Encabezado */}
        <div className="relative z-10 px-6 pt-6 flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Revelación Sagrada
          </span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => {
                onSaveFavorite(message);
                triggerToast(isSaved ? "Removido de favoritos" : "Guardado en favoritos");
              }}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
              title="Guardar en Favoritos"
            >
              {isSaved ? <BookmarkCheck className="w-5 h-5 text-amber-400" /> : <Bookmark className="w-5 h-5" />}
            </button>
            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="relative z-10 p-6 md:p-8 flex flex-col items-center text-center">
          
          <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-4">
            <div 
              className="absolute inset-0 rounded-full opacity-30 animate-ping"
              style={{ backgroundColor: arcangel.color }}
            />
            <div 
              className="absolute inset-1 rounded-full border border-white/20 flex items-center justify-center bg-slate-950/90 shadow-inner"
              style={{ boxShadow: `0 0 20px ${arcangel.glowColor}` }}
            >
              {arcangel.iconSvg}
            </div>
          </div>

          <h2 className="text-2xl font-light tracking-wide text-white mb-1">
            {message.arcangelName}
          </h2>
          <p className="text-xs text-amber-300 tracking-wider font-medium uppercase mb-5">
            {message.title}
          </p>

          <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 mb-5 text-left max-h-60 overflow-y-auto backdrop-blur-sm custom-scrollbar">
            <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-line font-light">
              {message.text}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full mb-6">
            <div className="bg-white/5 rounded-xl px-4 py-2.5 border border-white/5 text-center">
              <span className="text-[9px] text-slate-400 block uppercase tracking-wider">Energía Principal</span>
              <span className="text-xs font-semibold text-slate-200 mt-0.5 block">{message.energy}</span>
            </div>
            <div className="bg-white/5 rounded-xl px-4 py-2.5 border border-white/5 text-center">
              <span className="text-[9px] text-slate-400 block uppercase tracking-wider">Fecha del Vínculo</span>
              <span className="text-[10px] font-semibold text-slate-200 mt-0.5 block">{message.timestamp.split(',')[0]}</span>
            </div>
          </div>

          <button 
            onClick={handleCopySecure}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 text-white font-medium text-sm tracking-wide shadow-lg shadow-indigo-950/50 flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95"
          >
            <Share2 className="w-4 h-4" /> Copiar y Compartir Mensaje
          </button>
        </div>
        
        <div className="relative z-10 px-6 py-4 bg-slate-950/50 border-t border-white/5 flex justify-center text-[10px] text-slate-400 tracking-widest uppercase">
          ✦ Gira y escucha tu corazón ✦
        </div>
      </div>
    </div>
  );
};

const MorningRitual = () => {
  const [phase, setPhase] = useState('idle');
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [completedCycles, setCompletedCycles] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!timerActive) return;

    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [timerActive]);

  useEffect(() => {
    if (!timerActive) return;

    if (phase === 'idle') {
      setPhase('inhale');
      setSeconds(0);
    } else if (phase === 'inhale' && seconds >= 4) {
      setPhase('hold');
      setSeconds(0);
      synth.playChime(329.63, 1.5);
    } else if (phase === 'hold' && seconds >= 7) {
      setPhase('exhale');
      setSeconds(0);
    } else if (phase === 'exhale' && seconds >= 8) {
      setPhase('inhale');
      setSeconds(0);
      setCompletedCycles(c => c + 1);
      synth.playChime(261.63, 2);
    }
  }, [seconds, phase, timerActive]);

  const handleStart = () => {
    setTimerActive(true);
    setPhase('inhale');
    setSeconds(0);
    setCompletedCycles(0);
    synth.init();
    synth.playChime(261.63, 2.5);
  };

  const handleStop = () => {
    setTimerActive(false);
    setPhase('idle');
    setSeconds(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Inhala la Luz Divina';
      case 'hold': return 'Sostén la Energía en tu Centro';
      case 'exhale': return 'Exhala el cansancio y el miedo';
      default: return 'Ritual de Respiración Sagrada';
    }
  };

  const getPhaseDesc = () => {
    switch (phase) {
      case 'inhale': return 'Inhala lenta y profundamente sintiendo la vibración del azul de Miguel (4 seg)';
      case 'hold': return 'Permite que la salud verde de Rafael inunde tus células (7 seg)';
      case 'exhale': return 'Suelta toda angustia por la boca con el rayo violeta de Zadquiel (8 seg)';
      default: return 'Alinea tu espíritu y tu mente mediante este ejercicio consciente antes de consultar tu oráculo diario.';
    }
  };

  return (
    <div className="max-w-md mx-auto bg-slate-900/40 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.08)]">
      <div className="flex flex-col items-center text-center">
        
        <div className="mb-4">
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] uppercase font-bold text-amber-300 tracking-wider">
            Ritual Diario Activo
          </span>
        </div>

        <h3 className="text-xl font-light text-white mb-2">Alineación del Alma</h3>
        
        <div className="relative w-48 h-48 md:w-56 md:h-56 my-6 flex items-center justify-center">
          <div 
            className={`absolute inset-0 rounded-full border border-white/10 transition-all duration-1000 ${
              phase === 'inhale' ? 'scale-105 bg-indigo-500/5 shadow-[0_0_30px_rgba(99,102,241,0.25)]' :
              phase === 'hold' ? 'scale-110 bg-emerald-500/5 shadow-[0_0_45px_rgba(16,185,129,0.35)]' :
              phase === 'exhale' ? 'scale-95 bg-purple-500/5 shadow-[0_0_30px_rgba(168,85,247,0.25)]' :
              'scale-100 bg-transparent'
            }`}
          />
          
          <div className="w-36 h-36 rounded-full bg-slate-950/80 border-2 border-slate-700/50 flex flex-col items-center justify-center z-10">
            {timerActive ? (
              <>
                <span className="text-4xl font-extralight text-white font-mono">{seconds}s</span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 mt-1">{phase}</span>
              </>
            ) : (
              <Compass className="w-12 h-12 text-slate-500 animate-pulse" />
            )}
          </div>
        </div>

        <p className="text-sm text-slate-200 font-light mb-2 transition-all min-h-6">
          {getPhaseText()}
        </p>
        <p className="text-xs text-slate-400 max-w-sm mb-6 leading-relaxed min-h-12">
          {getPhaseDesc()}
        </p>

        {completedCycles > 0 && (
          <div className="mb-6 px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-semibold">
            Ciclos Completados: {completedCycles}
          </div>
        )}

        <div className="flex gap-4 w-full">
          {!timerActive ? (
            <button 
              onClick={handleStart}
              className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-amber-950/30"
            >
              Comenzar Práctica
            </button>
          ) : (
            <button 
              onClick={handleStop}
              className="flex-1 py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 font-bold text-sm tracking-wider uppercase transition-all duration-300"
            >
              Detener
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

const HistoryPanel = ({ history, favorites, onSelectSaved, onToggleFavorite, onClose }) => {
  const [tab, setTab] = useState('history');

  return (
    <div className="fixed inset-y-0 right-0 w-full max-w-md bg-slate-950/95 backdrop-blur-2xl z-40 border-l border-white/10 shadow-[-10px_0_40px_rgba(0,0,0,0.8)] flex flex-col animate-slide-left">
      
      <div className="p-6 border-b border-white/5 flex justify-between items-center mt-12 md:mt-0">
        <div>
          <h3 className="text-xl font-light text-white">Archivo Celestial</h3>
          <p className="text-xs text-slate-400">Tus conexiones sagradas registradas</p>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex border-b border-white/5 bg-slate-900/40">
        <button 
          onClick={() => setTab('history')}
          className={`flex-1 py-4 text-xs font-medium tracking-widest uppercase transition-all ${
            tab === 'history' ? 'text-amber-300 border-b-2 border-amber-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <History className="w-4 h-4" /> Historial ({history.length})
          </div>
        </button>
        <button 
          onClick={() => setTab('favorites')}
          className={`flex-1 py-4 text-xs font-medium tracking-widest uppercase transition-all ${
            tab === 'favorites' ? 'text-amber-300 border-b-2 border-amber-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-4 h-4" /> Favoritos ({favorites.length})
          </div>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {tab === 'history' ? (
          history.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center px-6">
              <Compass className="w-12 h-12 text-slate-600 mb-4 animate-spin-slow" />
              <p className="text-sm text-slate-400 font-light">
                Aún no has girado la rueda cósmica hoy. ¡Realiza tu primer giro para registrar un mensaje!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {history.map((msg, idx) => {
                const arc = ARCHANGELS_DATA.find(a => a.id === msg.arcangelId);
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-900" style={{ boxShadow: `0 0 10px ${arc.color}30` }}>
                        <div className="scale-75">{arc.iconSvg}</div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-100">{msg.arcangelName}</h4>
                        <span className="text-[10px] text-slate-400 block">{msg.timestamp}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => onToggleFavorite(msg)}
                        className="p-1.5 rounded-full hover:bg-white/5 text-slate-400 hover:text-amber-400 transition-colors"
                      >
                        {favorites.some(fav => fav.text === msg.text) ? <Heart className="w-4 h-4 fill-amber-400 text-amber-400" /> : <Heart className="w-4 h-4" />}
                      </button>
                      <button 
                        onClick={() => onSelectSaved(msg)}
                        className="p-1.5 rounded-full hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-300 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        ) : (
          favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center px-6">
              <Heart className="w-12 h-12 text-slate-600 mb-4" />
              <p className="text-sm text-slate-400 font-light">
                No tienes mensajes guardados como favoritos. Pulsa el marcador al abrir un mensaje para atesorarlo aquí.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {favorites.map((msg, idx) => {
                const arc = ARCHANGELS_DATA.find(a => a.id === msg.arcangelId);
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-900" style={{ boxShadow: `0 0 10px ${arc.color}30` }}>
                        <div className="scale-75">{arc.iconSvg}</div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-100">{msg.arcangelName}</h4>
                        <span className="text-[10px] text-slate-400 block">{msg.timestamp}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => onToggleFavorite(msg)}
                        className="p-1.5 rounded-full hover:bg-white/5 text-amber-400 transition-colors"
                      >
                        <Heart className="w-4 h-4 fill-amber-400" />
                      </button>
                      <button 
                        onClick={() => onSelectSaved(msg)}
                        className="p-1.5 rounded-full hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-300 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}
      </div>

    </div>
  );
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState('wheel');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isAmbientOn, setIsAmbientOn] = useState(false);
  
  const [history, setHistory] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showHistoryPanel, setShowHistoryPanel] = useState(false);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('celestial_history')) || [];
    const savedFavorites = JSON.parse(localStorage.getItem('celestial_favorites')) || [];
    setHistory(savedHistory);
    setFavorites(savedFavorites);
  }, []);

  const handleToggleAmbient = () => {
    if (isAmbientOn) {
      synth.stopAmbientAtmosphere();
      setIsAmbientOn(false);
    } else {
      synth.startAmbientAtmosphere();
      setIsAmbientOn(true);
    }
  };

  const handleSelectArcangel = (arcangel) => {
    const newMessage = generateProceduralMessage(arcangel);
    const updatedHistory = [newMessage, ...history].slice(0, 50);
    setHistory(updatedHistory);
    localStorage.setItem('celestial_history', JSON.stringify(updatedHistory));
    setSelectedMessage(newMessage);
  };

  const handleToggleFavorite = (msg) => {
    const exists = favorites.some(fav => fav.text === msg.text);
    let updatedFavorites;
    if (exists) {
      updatedFavorites = favorites.filter(fav => fav.text !== msg.text);
    } else {
      updatedFavorites = [msg, ...favorites];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('celestial_favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between overflow-x-hidden font-sans bg-slate-950 select-none pb-10">
      <CelestialBackground />

      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <header className="relative z-30 w-full px-6 py-4 flex justify-between items-center max-w-6xl mx-auto border-b border-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center shadow-md">
            <Sparkles className="w-4 h-4 text-slate-950" />
          </div>
          <div>
            <h1 className="text-sm font-extralight tracking-[0.25em] text-white uppercase">Mensajes de Luz</h1>
            <span className="text-[9px] tracking-widest text-slate-400 block -mt-0.5">EL ORÁCULO DE LOS ARCÁNGELES</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleToggleAmbient}
            className={`p-2.5 rounded-full border transition-all ${
              isAmbientOn 
                ? 'bg-amber-500/10 border-amber-400/40 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.25)]' 
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'
            }`}
            title={isAmbientOn ? "Desactivar Ambiente Celestial" : "Activar Ambiente Celestial"}
          >
            {isAmbientOn ? <Volume2 className="w-4.5 h-4.5" /> : <VolumeX className="w-4.5 h-4.5" />}
          </button>

          <button 
            onClick={() => setShowHistoryPanel(true)}
            className="p-2.5 rounded-full border bg-white/5 border-white/10 text-slate-300 hover:text-slate-100 transition-all flex items-center gap-1.5 relative"
          >
            <History className="w-4.5 h-4.5" />
            {history.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-slate-950 text-[9px] font-bold rounded-full flex items-center justify-center">
                {history.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto w-full py-8">
        <div className="flex bg-slate-900/50 p-1.5 rounded-full border border-white/10 mb-8 max-w-xs w-full">
          <button 
            onClick={() => setActiveScreen('wheel')}
            className={`flex-1 py-2 rounded-full text-xs font-medium tracking-widest uppercase transition-all ${
              activeScreen === 'wheel' ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            La Rueda
          </button>
          <button 
            onClick={() => setActiveScreen('ritual')}
            className={`flex-1 py-2 rounded-full text-xs font-medium tracking-widest uppercase transition-all ${
              activeScreen === 'ritual' ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Ritual
          </button>
        </div>

        <div className="w-full animate-fade-in">
          {activeScreen === 'wheel' ? (
            <div className="flex flex-col items-center">
              <div className="text-center mb-6 max-w-lg">
                <span className="text-[10px] tracking-[0.3em] font-medium text-amber-300 uppercase block mb-1">
                  ✦ Conexión Espiritual Celestial ✦
                </span>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white leading-tight">
                  Sintoniza tu Corazón
                </h2>
                <p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto leading-relaxed">
                  Realiza tres respiraciones lentas, formula tu intención profunda y presiona el sol central de la rueda.
                </p>
              </div>

              <CelestialWheel 
                onSelectArcangel={handleSelectArcangel} 
                isSpinning={isSpinning}
                setIsSpinning={setIsSpinning}
              />
            </div>
          ) : (
            <MorningRitual />
          )}
        </div>
      </main>

      <footer className="relative z-20 text-center text-[10px] tracking-widest text-slate-500 max-w-md mx-auto px-6">
        <p className="mb-1">DESARROLLADO BAJO LA GUÍA DE LA LUZ Y EL AMOR UNIVERSAL</p>
        <p className="text-slate-600">© 2026 Mensajes de Luz • Premium Contemplative Experience</p>
      </footer>

      {selectedMessage && (
        <ArchangelCardModal 
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
          onSaveFavorite={handleToggleFavorite}
          isSaved={favorites.some(fav => fav.text === selectedMessage.text)}
        />
      )}

      {showHistoryPanel && (
        <HistoryPanel 
          history={history}
          favorites={favorites}
          onSelectSaved={(msg) => {
            setSelectedMessage(msg);
            setShowHistoryPanel(false);
          }}
          onToggleFavorite={handleToggleFavorite}
          onClose={() => setShowHistoryPanel(false)}
        />
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-left {
          animation: slideLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
}