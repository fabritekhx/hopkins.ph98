export interface PhotoItem {
  id: string;
  title: string;
  category: 'Retratos' | 'Fotografía urbana' | 'Moda' | 'Sesiones creativas' | 'Eventos';
  imageUrl: string;
  aspectRatio: 'aspect-[3/4]' | 'aspect-[4/5]' | 'aspect-[16/9]' | 'aspect-[1/1]' | 'aspect-[2/3]';
  heightClass: string;
  location: string;
  year: string;
  exif: {
    camera: string;
    lens: string;
    aperture: string;
    shutter: string;
    iso: string;
  };
  description: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  duration: string;
  locationsCount: string;
  photosCount: string;
  popular?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  caption: string;
  aspect: string;
}

export const PORTFOLIO_CATEGORIES = [
  'Todos',
  'Retratos',
  'Fotografía urbana',
  'Moda',
  'Sesiones creativas',
  'Eventos'
] as const;

export type CategoryType = typeof PORTFOLIO_CATEGORIES[number];

// Authentic portfolio items matching Anthony Hopkins (hopkins.ph98) in Quito, Ecuador
export const PORTFOLIO_PHOTOS: PhotoItem[] = [
  {
    id: 'ret-quito-metro',
    title: 'Metro de Quito • Estación Subterránea',
    category: 'Moda',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=1200',
    aspectRatio: 'aspect-[3/4]',
    heightClass: 'row-span-2',
    location: 'Metro de Quito — Estación San Francisco',
    year: '2026',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 85mm f/1.4 GM',
      aperture: 'f/1.8',
      shutter: '1/250s',
      iso: 'ISO 100'
    },
    description: 'Sesión editorial urbana en las modernas instalaciones del Metro de Quito, aprovechando la iluminación de escaleras mecánicas y estética contemporánea.',
    featured: true
  },
  {
    id: 'urb-gotico-adoquines',
    title: 'Gothic Streetwear • Adoquines de Quito',
    category: 'Fotografía urbana',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=85&w=1200',
    aspectRatio: 'aspect-[4/5]',
    heightClass: 'row-span-2',
    location: 'Centro Histórico — Quito, Ecuador',
    year: '2026',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 50mm f/1.2 GM',
      aperture: 'f/2.0',
      shutter: '1/400s',
      iso: 'ISO 160'
    },
    description: 'Contraste entre la textura de los adoquines coloniales andinos y la estética gótica moderna con corset de estoperoles y chaqueta de cuero.',
    featured: true
  },
  {
    id: 'ret-claustro-colonial',
    title: 'Claustro & Columnas Coloniales',
    category: 'Retratos',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=85&w=1200',
    aspectRatio: 'aspect-[3/4]',
    heightClass: 'row-span-2',
    location: 'Patio Colonial — Quito Antiguo',
    year: '2026',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 35mm f/1.4 GM',
      aperture: 'f/2.2',
      shutter: '1/320s',
      iso: 'ISO 200'
    },
    description: 'Retrato con luz cenital natural en un patio patrimonial de Quito, destacando las vigas talladas y la arquitectura clásica de la capital.',
    featured: true
  },
  {
    id: 'crea-nocturna-neon',
    title: 'Luces Magenta & Nocturna Quiteña',
    category: 'Sesiones creativas',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=85&w=1200',
    aspectRatio: 'aspect-[3/4]',
    heightClass: 'row-span-2',
    location: 'La Mariscal / Plaza Foch — Quito',
    year: '2026',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 50mm f/1.2 GM',
      aperture: 'f/1.4',
      shutter: '1/160s',
      iso: 'ISO 640'
    },
    description: 'Exploración lumínica nocturna con geles de color magenta y luz de tungsteno, creando un ambiente cinematográfico y misterioso.',
    featured: true
  },
  {
    id: 'ret-mirador-andino',
    title: 'Mirador Andino & Silueta Urbana',
    category: 'Retratos',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=85&w=1200',
    aspectRatio: 'aspect-[4/5]',
    heightClass: 'row-span-2',
    location: 'Mirador de Guápulo / Itchimbía — Quito',
    year: '2026',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 85mm f/1.4 GM',
      aperture: 'f/1.6',
      shutter: '1/800s',
      iso: 'ISO 100'
    },
    description: 'Retrato al aire libre capturando la inmensidad del valle y las colinas de Quito durante la luz suave de media tarde.',
    featured: true
  },
  {
    id: 'urb-avenida-volcanes',
    title: 'Avenida & Perspectiva de los Andes',
    category: 'Fotografía urbana',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=85&w=1200',
    aspectRatio: 'aspect-[16/9]',
    heightClass: 'row-span-1',
    location: 'Avenida Amazonas & Parque La Carolina',
    year: '2025',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 35mm f/1.4 GM',
      aperture: 'f/2.8',
      shutter: '1/500s',
      iso: 'ISO 200'
    },
    description: 'Estética urbana con fuga de calle y las laderas del volcán Pichincha en el horizonte de Quito.',
    featured: false
  },
  {
    id: 'ret-monocromo-basilica',
    title: 'Monocromo Patrimonial & Bandera Ecuador',
    category: 'Retratos',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=85&w=1200',
    aspectRatio: 'aspect-[4/5]',
    heightClass: 'row-span-2',
    location: 'Basílica del Voto Nacional — Quito',
    year: '2025',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 50mm f/1.2 GM',
      aperture: 'f/2.0',
      shutter: '1/250s',
      iso: 'ISO 100'
    },
    description: 'Retrato en blanco y negro con la arquitectura gótica colonial de fondo y el distintivo del escudo ecuatoriano.',
    featured: false
  },
  {
    id: 'moda-lookbook-cumbaya',
    title: 'Editorial & Lookbook Urbano',
    category: 'Moda',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=85&w=1200',
    aspectRatio: 'aspect-[3/4]',
    heightClass: 'row-span-2',
    location: 'Cumbayá & La Floresta — Quito',
    year: '2026',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 85mm f/1.4 GM',
      aperture: 'f/2.0',
      shutter: '1/400s',
      iso: 'ISO 125'
    },
    description: 'Campaña visual de moda con estilo contemporáneo, juego de texturas y bufandas gráficas en portales modernos.',
    featured: true
  },
  {
    id: 'ret-parque-carolina',
    title: 'Contraluz en Parque La Carolina',
    category: 'Retratos',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=85&w=1200',
    aspectRatio: 'aspect-[16/9]',
    heightClass: 'row-span-1',
    location: 'Jardín Botánico & La Carolina — Quito',
    year: '2026',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 85mm f/1.4 GM',
      aperture: 'f/1.8',
      shutter: '1/1000s',
      iso: 'ISO 100'
    },
    description: 'Sesión al atardecer entre senderos arbolados andinos, capturando destellos naturales y tonalidades cálidas.',
    featured: false
  },
  {
    id: 'eve-cobertura-quito',
    title: 'Backstage & Eventos Exclusivos en Quito',
    category: 'Eventos',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=85&w=1200',
    aspectRatio: 'aspect-[4/5]',
    heightClass: 'row-span-2',
    location: 'Teatro Nacional Sucre / Galería UCE',
    year: '2026',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 35mm f/1.4 GM',
      aperture: 'f/1.6',
      shutter: '1/200s',
      iso: 'ISO 1250'
    },
    description: 'Cobertura documental de pasarelas, presentaciones artísticas y encuentros creativos en la escena cultural de Quito.',
    featured: true
  },
  {
    id: 'crea-ladrillo-streetwear',
    title: 'Streetwear & Texturas de Ladrillo',
    category: 'Sesiones creativas',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=85&w=1200',
    aspectRatio: 'aspect-[16/9]',
    heightClass: 'row-span-1',
    location: 'Calles de San Marcos & La Ronda',
    year: '2025',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 50mm f/1.2 GM',
      aperture: 'f/1.8',
      shutter: '1/320s',
      iso: 'ISO 200'
    },
    description: 'Líneas arquitectónicas, muros rústicos y poses auténticas fusionando la esencia de la capital.',
    featured: false
  },
  {
    id: 'ret-monocromo-expresion',
    title: 'Monocromo de Autor • Manos & Mirada',
    category: 'Retratos',
    imageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=85&w=1200',
    aspectRatio: 'aspect-[3/4]',
    heightClass: 'row-span-2',
    location: 'Estudio de Luz — Quito Norte',
    year: '2026',
    exif: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 85mm f/1.4 GM',
      aperture: 'f/2.0',
      shutter: '1/250s',
      iso: 'ISO 100'
    },
    description: 'Retrato intimista en clave baja donde la mirada y la gestualidad transmiten una emoción pura sin artificios.',
    featured: false
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'retratos',
    icon: 'camera',
    title: 'Retratos',
    tagline: 'Identidad, presencia y autenticidad en Quito',
    description: 'Sesiones personales para crear fotografías con carácter y personalidad. Realizadas en locaciones icónicas de Quito (Centro Histórico, La Carolina, Guápulo) o en estudio privado.',
    idealFor: 'Modelos, profesionales, artistas, marcas personales y personas que buscan un registro auténtico.',
    deliverables: [
      '15 a 25 fotografías en alta resolución editadas al detalle',
      'Asesoría de estilismo, locaciones en Quito y paleta de color',
      'Galería digital privada protegida con contraseña',
      'Entrega en formatos optimizados para impresión y redes'
    ],
    duration: '1.5 - 2 horas',
    locationsCount: '1 - 2 locaciones en Quito (Estudio o Exterior)',
    photosCount: '20+ fotos retocadas'
  },
  {
    id: 'moda',
    icon: 'sparkles',
    title: 'Fotografía de Moda & Streetwear',
    tagline: 'Lookbooks, editoriales y campañas en la capital',
    description: 'Contenido visual de alto impacto para marcas de ropa, diseñadores ecuatorianos y modelos. Estética contemporánea, encuadres dinámicos y colorimetría de autor.',
    idealFor: 'Marcas de ropa, diseñadores independientes, agencias de modelaje y lookbooks de temporada.',
    deliverables: [
      '30 a 50 imágenes procesadas con colorimetría cinematográfica',
      'Moodboard previo y dirección activa de poses en todo momento',
      'Licencia de uso comercial y para plataformas digitales',
      'Entrega express de preview en 48 horas'
    ],
    duration: '3 - 4 horas',
    locationsCount: 'Múltiples sets urbanos en Quito / Estudio',
    photosCount: '35+ fotos de autor',
    popular: true
  },
  {
    id: 'creativas',
    icon: 'palette',
    title: 'Sesiones Creativas & Conceptuales',
    tagline: 'Conceptos lumínicos disruptivos y estética nocturna',
    description: 'Exploración artística personalizada con iluminación de contraste, geles magenta/tungsteno, prismas ópticos y locaciones nocturnas o subterráneas en Quito.',
    idealFor: 'Artistas musicales, portadas de sencillos/álbumes, proyectos visuales y pósters de autor.',
    deliverables: [
      'Desarrollo conjunto de concepto y guion visual',
      '20 fotografías con tratamiento artístico y retoque avanzado',
      'Efectos lumínicos prácticos en cámara sin artificios digitales',
      'Archivos TIFF master para impresión de gran formato'
    ],
    duration: '2.5 - 3 horas',
    locationsCount: 'Locación especial nocturna / Estudio oscuro',
    photosCount: '20 fotos conceptuales'
  },
  {
    id: 'eventos',
    icon: 'party-popper',
    title: 'Eventos & Cobertura Documental',
    tagline: 'Momentos espontáneos capturados con clase',
    description: 'Cobertura fotográfica elegante y discreta para desfiles de moda, exposiciones culturales, conciertos íntimos y eventos corporativos en Quito y valles.',
    idealFor: 'Desfiles en Quito, inauguraciones de arte, eventos de marca y celebraciones exclusivas.',
    deliverables: [
      'Cobertura documental completa sin interrumpir los momentos',
      'Selección curada completa (150-300 fotos) corregidas de color',
      'Highlights entregados en 24h para redes sociales y prensa',
      'Galería web para compartir con asistentes y colaboradores'
    ],
    duration: 'Según requerimiento (Medio día / Jornada completa)',
    locationsCount: 'En tu evento (Quito, Cumbayá o a nivel nacional)',
    photosCount: '150+ fotos seleccionadas'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Contacto',
    subtitle: 'Cuéntame tu idea o proyecto',
    description: 'Escríbeme por WhatsApp (+593), formulario o Instagram (@hopkins.ph98). Me cuentas qué tipo de fotos buscas y qué quieres transmitir.',
    details: ['Respuesta rápida en menos de 24 horas', 'Escucha activa de tus ideas y referencias', 'Presupuesto transparente sin compromiso']
  },
  {
    number: '02',
    title: 'Planificación',
    subtitle: 'Definimos el estilo y locación en Quito',
    description: 'Diseñamos un moodboard compartido, seleccionamos la paleta de colores y elegimos la mejor locación en Quito (Centro Histórico, parques andinos, Metro, etc.).',
    details: ['Moodboard visual personalizado', 'Elección de locación en Quito / estudio', 'Guía de preparación previa y outfits']
  },
  {
    number: '03',
    title: 'Sesión',
    subtitle: 'Creamos y capturamos con total naturalidad',
    description: 'El día de la sesión disfrutamos en un ambiente relajado y con buena música. Te guiaré con naturalidad en cada toma para lograr resultados espontáneos.',
    details: ['Ambiente distendido y sin poses rígidas', 'Dirección de poses orgánica paso a paso', 'Revisión en vivo de las mejores tomas']
  },
  {
    number: '04',
    title: 'Entrega',
    subtitle: 'Recibes tus fotos con edición cinematográfica',
    description: 'Selecciono las mejores imágenes y aplico mi colorimetría característica de autor, corrección tonal fina y retoque de pieles natural.',
    details: ['Galería online privada en alta resolución', 'Descarga directa para web e impresión', 'Tiempos de entrega ágiles y cumplidos']
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    likes: 342,
    comments: 28,
    caption: 'Metro de Quito vibes. Luces subterráneas y moda urbana | Sony A7IV + 85mm f/1.4 #hopkinsph #quito #portraitquito #ecuadorfotografia',
    aspect: 'aspect-square'
  },
  {
    id: 'ig-2',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600',
    likes: 512,
    comments: 44,
    caption: 'Adoquines y estética gótica en el Centro Histórico de Quito. #quitoecuador #gothvibes #streetwearquito #sonyalpha',
    aspect: 'aspect-square'
  },
  {
    id: 'ig-3',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600',
    likes: 429,
    comments: 31,
    caption: 'Columnas coloniales y luz natural cenital. La magia de la arquitectura quiteña. #portraitmood #quitoarte #editorial',
    aspect: 'aspect-square'
  },
  {
    id: 'ig-4',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=600',
    likes: 671,
    comments: 59,
    caption: 'Magenta y neón en las noches de Quito. Color grading cinematográfico de autor. #nightportrait #creativephoto #uio',
    aspect: 'aspect-square'
  },
  {
    id: 'ig-5',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600',
    likes: 388,
    comments: 19,
    caption: 'Mirador de Guápulo. La luz de la tarde en la cordillera andina es inigualable. #quito #ecuador #portrait',
    aspect: 'aspect-square'
  },
  {
    id: 'ig-6',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600',
    likes: 495,
    comments: 36,
    caption: 'Blanco y negro patrimonial. Detalles que perduran. #monochrome #ecuador #quitoantiguo #hopkinsph',
    aspect: 'aspect-square'
  }
];

export const GEAR_ITEMS = [
  { category: 'Cuerpo Principal', name: 'Sony Alpha 7 IV Full-Frame (33MP)', spec: 'Sensor de alto rango dinámico y colorimetría cinematográfica' },
  { category: 'Óptica Retrato', name: 'Sony FE 85mm f/1.4 GM', spec: 'Bokeh cremoso y nitidez óptica de referencia para primeros planos' },
  { category: 'Óptica Nocturna / Editorial', name: 'Sony FE 50mm f/1.2 GM', spec: 'Apertura ultra luminosa para tomas con poca luz y separación de planos' },
  { category: 'Óptica Urbana / Documental', name: 'Sony FE 35mm f/1.4 GM', spec: 'Perspectiva natural cinematográfica en calles de Quito' },
  { category: 'Iluminación Portátil', name: 'Godox AD200 Pro + Modificadores Softbox', spec: 'Luz controlada en estudio o exteriores sin cables' },
  { category: 'Filtros Especiales', name: 'Black Pro-Mist 1/4 & Prismas Ópticos', spec: 'Halación suave de altas luces y destellos orgánicos' }
];

export const FAQS = [
  {
    question: '¿Dónde se realizan las sesiones en Quito?',
    answer: 'Trabajamos en las mejores locaciones de Quito: Centro Histórico (calles patrimoniales y claustros), Metro de Quito, Parque La Carolina, Guápulo, Cumbayá o en estudio fotográfico privado con iluminación profesional. También podemos coordinar sesiones a domicilio o en tus lugares favoritos.'
  },
  {
    question: '¿Qué experiencia previa necesito tener para una sesión de retratos?',
    answer: 'Ninguna en absoluto. La gran mayoría de personas que fotografío no son modelos profesionales. Mi trabajo consiste en guiarte paso a paso con naturalidad, crear un ambiente cómodo y con buena música para que disfrutes la sesión y tus fotos se vean 100% auténticas.'
  },
  {
    question: '¿En cuánto tiempo recibiré mis fotografías finales?',
    answer: 'La galería de preselección se envía en un plazo de 48 a 72 horas tras la sesión. Las fotografías seleccionadas y editadas profesionalmente con colorimetría de autor se entregan en un plazo de 5 a 8 días laborables.'
  },
  {
    question: '¿Realizas sesiones fuera de Quito o en otras provincias del Ecuador?',
    answer: 'Sí, realizo coberturas y sesiones fotográficas en todo el Ecuador (Cumbayá, Valle de los Chillos, Guayaquil, Cuenca, Baños, Otavalo, Galápagos). Solo coordinamos los viáticos y traslados correspondientes.'
  },
  {
    question: '¿Cómo se formaliza la reserva de una fecha?',
    answer: 'Una vez definida la fecha, tipo de sesión y locación, se realiza un anticipo para reservar tu día en la agenda mediante transferencia bancaria (Ecuador) o depósito, asegurando exclusividad para tu proyecto.'
  }
];
