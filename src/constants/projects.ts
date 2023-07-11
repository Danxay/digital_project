export interface IProject {
  id: number;
  previewUrl: string;
  name: string;
  title: string;
  description: string;
}

export interface IContentItem {
  content: string;
  type: 'image' | 'text';
}

export interface IProjectDetails {
  id: number;
  titleFirst: string;
  titleSecond: string | null;
  contentItems: Array<IContentItem>;
}

export const projects: Array<IProject> = [
  {
    id: 1,
    previewUrl: `${process.env.NEXT_PUBLIC_URL}/images/project_skyline_1.jpg`,
    name: 'Skyline',
    title: 'Жилой комплекс высотных зданий',
    description:
      'Современный жилой комплекс из четырех высотных зданий в центре города с продуманным дизайном, функциональностью и комфортом.',
  },
  {
    id: 2,
    previewUrl: `${process.env.NEXT_PUBLIC_URL}/images/project_greenhouse_1.jpg`,
    name: 'Greenhouse',
    title: 'Проект экологического офиса',
    description:
      'Экологический офис в виде стеклянного куба, окруженного зеленым парком, с оптимальной микроклиматической средой и умным управлением энергопотреблением.',
  },
  {
    id: 3,
    previewUrl: `${process.env.NEXT_PUBLIC_URL}/images/project_crystal_1.jpg`,
    name: 'Crystal',
    title: 'Реставрации исторического здания',
    description:
      'Реставрация исторического здания XIX века в стиле неоклассицизма с добавлением стеклянной крыши над центральным двором, в котором размещается музей, галерея, библиотека и кафе.',
  },
  {
    id: 4,
    previewUrl: `${process.env.NEXT_PUBLIC_URL}/images/project_wave_1.jpg`,
    name: 'Wave',
    title: 'Проект дизайна гостиницы на берегу моря',
    description:
      'Дизайн гостиницы на берегу моря с волновой формой, современным и светлым интерьером, а также рестораном, баром, спа-центром и бассейном.',
  },
  {
    id: 5,
    previewUrl: `${process.env.NEXT_PUBLIC_URL}/images/project_bloom_1.jpg`,
    name: 'Bloom',
    title: 'Проект ландшафтного дизайна частного дома',
    description:
      'Ландшафтный дизайн частного дома с ухоженным садом, состоящим из разных зон и элементов декора, которые гармонично сочетаются с архитектурой дома.',
  },
];

export const projectsDetails: Array<IProjectDetails> = [
  {
    id: 1,
    titleFirst: 'Жилой комплекс',
    titleSecond: 'высотных зданий',
    contentItems: [
      { content: `${process.env.NEXT_PUBLIC_URL}/images/project_skyline_1.jpg`, type: 'image' },
      {
        content:
          'Skyline представляет собой современный жилой комплекс, состоящий из четырех высотных зданий разной высоты и формы. Комплекс расположен в центре города и имеет развитую инфраструктуру, включая паркинг, торговый центр, спортивный клуб, детский сад и школу. Квартиры в комплексе отличаются продуманным дизайном, функциональностью и комфортом. Каждая квартира имеет панорамное остекление, балкон или террасу с видом на город. Skyline - это идеальное место для современных людей, ценящих качество жизни и стиль.',
        type: 'text',
      },
      { content: `${process.env.NEXT_PUBLIC_URL}/images/project_skyline_2.jpg`, type: 'image' },
      { content: `${process.env.NEXT_PUBLIC_URL}/images/project_skyline_3.jpg`, type: 'image' },
    ],
  },
  {
    id: 2,
    titleFirst: 'Проект экологического офиса',
    titleSecond: null,
    contentItems: [
      { content: `${process.env.NEXT_PUBLIC_URL}/images/project_greenhouse_1.jpg`, type: 'image' },
      { content: `${process.env.NEXT_PUBLIC_URL}/images/project_greenhouse_2.jpg`, type: 'image' },
      {
        content:
          'Проект Greenhouse - это офис будущего, который сочетает в себе технологии и природу. Офис представляет собой стеклянный куб, окруженный зеленым парком. Внутри офиса создана оптимальная микроклиматическая среда для работы и отдыха сотрудников. Офис оснащен солнечными панелями, системой вентиляции и очистки воздуха, а также системой умного управления энергопотреблением. В офисе также есть зоны для кофе-брейков, обедов, переговоров и презентаций. Проект Greenhouse - это пример того, как можно работать в гармонии с природой и заботиться об экологии.',
        type: 'text',
      },
      { content: `${process.env.NEXT_PUBLIC_URL}/images/project_greenhouse_3.jpg`, type: 'image' },
    ],
  },
  {
    id: 3,
    titleFirst: 'Реставрации',
    titleSecond: 'исторического здания',
    contentItems: [
      { content: `${process.env.NEXT_PUBLIC_URL}/images/project_crystal_1.jpg`, type: 'image' },
      {
        content:
          'Проект Crystal - это реставрация исторического здания XIX века, которое было построено в стиле неоклассицизма. Здание является памятником архитектуры и культуры, поэтому проект направлен на сохранение его оригинального облика и духа. Однако здание также адаптируется под современные потребности и функции. В здании размещается музей, галерея, библиотека и кафе. Особенностью проекта является добавление стеклянной крыши над центральным двором здания, которая создает эффект кристалла и пропускает естественный свет. Проект Crystal - это сочетание традиций и инноваций в архитектуре.',
        type: 'text',
      },
      { content: `${process.env.NEXT_PUBLIC_URL}/images/project_crystal_2.jpg`, type: 'image' },
    ],
  },
  {
    id: 4,
    titleFirst: 'Проект дизайна',
    titleSecond: 'гостиницы на берегу моря',
    contentItems: [
      { content: `${process.env.NEXT_PUBLIC_URL}/images/project_wave_1.jpg`, type: 'image' },
      {
        content:
          'Проект Wave - это дизайн гостиницы, которая расположена на берегу моря и имеет вид на пляж. Гостиница представляет собой несколько зданий, соединенных между собой деревянными настилами и мостиками. Здания имеют волновую форму, которая отражает движение моря и создает динамичный образ. Гостиница имеет разные типы номеров, включая стандартные, люксы и бунгало. Все номера имеют современный и светлый интерьер, а также балкон или террасу с видом на море. Гостиница также имеет ресторан, бар, спа-центр и бассейн. Проект Wave - это место для релакса и наслаждения красотой природы.',
        type: 'text',
      },
      { content: `${process.env.NEXT_PUBLIC_URL}/images/project_wave_2.jpg`, type: 'image' },
    ],
  },
  {
    id: 5,
    titleFirst: 'Проект ландшафтного дизайна',
    titleSecond: 'частного дома',
    contentItems: [
      { content: `${process.env.NEXT_PUBLIC_URL}/images/project_bloom_1.jpg`, type: 'image' },
      {
        content:
          'Проект Bloom - это ландшафтный дизайн частного дома, который расположен в пригороде. Дом окружен ухоженным садом, который состоит из разных зон. В саду есть газон, цветник, огород, теплица, пруд, альпийская горка и зона для барбекю. Сад также украшен различными элементами декора, такими как фонтаны, скульптуры, подсветка и мебель. Сад гармонично сочетается с архитектурой дома и подчеркивает его индивидуальность. Проект Bloom - это пример того, как можно создать свой собственный рай на земле.',
        type: 'text',
      },
      { content: `${process.env.NEXT_PUBLIC_URL}/images/project_bloom_2.jpg`, type: 'image' },
    ],
  },
];
