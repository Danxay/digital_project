export interface IPhoto {
  id: number;
  url: string;
  caption: string;
}

export const photos: Array<IPhoto> = [
  {
    id: 1,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_1.png`,
    caption:
      'Уютная комната с большой кроватью и мягким диваном, оформленная в светлых тонах. На стене висит картина, а на полу лежит ковер. Комната имеет современный дизайн интерьера и высокий потолок.',
  },
  {
    id: 2,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_2.png`,
    caption:
      'Белый маяк с красной полосой на скалистом берегу океана, освещающий небо и воду в ненастный день. На холме за ним виден фонарь Монток-Пойнт.',
  },
  {
    id: 3,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_3.png`,
    caption:
      'Черно-белая фотография теплицы, расположенной в здании Варшавского университета. Теплица имеет множество окон, через которые проникает дневной свет. В теплице видны разнообразные растения, выращенные для научных целей. Фотография сделана с крупным планом здания, подчеркивающим его архитектуру.',
  },
  {
    id: 4,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_4.png`,
    caption:
      'Солнечная фотография маяка Сент-Матье, расположенного на северо-западе Франции. Маяк высокий и белый, с красными полосами вокруг верхней и нижней части. Он стоит на скале, окруженной водой. На фоне видно голубое небо с облаками.',
  },
  {
    id: 5,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_5.png`,
    caption:
      'Фотография одной из гробниц империи Великих Моголов, построенной в стиле музыкальной архитектуры. Гробница имеет большой купол, окруженный четырьмя башнями. Она стоит на высоком подиуме, украшенном арками и резьбой. Вокруг гробницы растут деревья и трава. На заднем плане видно синее небо.',
  },
  {
    id: 6,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_6.png`,
    caption:
      'Фотография главного входа в церковь, выполненного в стиле средневековой архитектуры. Вход украшен аркой, на которой изображены сцены из Библии. Над аркой стоит статуя Иисуса Христа, окруженная ангелами. По бокам входа расположены две колонны с лепными узорами. Церковь имеет высокий фасад с резными окнами и дверями.',
  },
  {
    id: 7,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_7.png`,
    caption:
      'Фотография улицы старого города, где видны исторические здания и автомобили. На переднем плане стоит высокая башня с часами, которая является символом города. На заднем плане видно голубое небо с облаками. Улица узкая и извилистая, создавая атмосферу уюта и очарования.',
  },
  {
    id: 8,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_8.png`,
    caption:
      'Фотография фасада здания AMC Valley View 16, кинотеатра, расположенного в выставочном центре Valley View Mall. Здание имеет желтый цвет и большие окна, на которых написано название кинотеатра. Перед зданием стоят колонны, которые поддерживают крышу. На фоне видно небо с облаками. Здание выглядит современным и привлекательным.',
  },
  {
    id: 9,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_9.png`,
    caption:
      'Фотография туристической достопримечательности на побережье, Дворца дожей, расположенного на площади Сан-Марко в Венеции. Дворец дожей - это белое здание с арками и колоннами, которое было резиденцией правителей Венеции. Перед дворцом протекает канал, по которому плавают лодки. На заднем плане видна мечеть с куполами и минаретами. Фотография показывает красоту и историю этого места.',
  },
  {
    id: 10,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_10.png`,
    caption:
      'Фотография вида на городской пейзаж, сделанная из окна квартиры. Фотография показывает множество высоких зданий разной формы и цвета, которые тянутся до неба. Некоторые здания имеют башни, другие - стеклянные фасады. Небо голубое с облаками. Фотография создает впечатление динамики и разнообразия города.',
  },
  {
    id: 11,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_11.jpg`,
    caption: 'Современное здание с большими окнами и зелеными растениями на фоне городского пейзажа.',
  },
  {
    id: 12,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_12.jpg`,
    caption: 'Каменное здание с арками и внутренним двориком в средиземноморском стиле.',
  },
  {
    id: 3,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_13.jpg`,
    caption:
      'Это классическое здание с белыми колоннами и куполом перед парком. Оно выглядит очень изящно и величественно. Его высота составляет около 50 метров, а площадь - более 10 тысяч квадратных метров. Оно расположено в историческом центре города и служит музеем или библиотекой.',
  },
  {
    id: 14,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_14.jpg`,
    caption:
      'Это современный дом с деревянным фасадом и большим окном, выходящим на озеро. Он выглядит очень уютно и гармонично. Его высота составляет около 10 метров, а площадь - более 200 квадратных метров. Он расположен в живописном месте на берегу озера и служит дачей или загородным домом.',
  },
  {
    id: 15,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_15.jpg`,
    caption:
      'Это готический собор с витражными окнами и высоким шпилем. Он выглядит очень впечатляюще и таинственно. Его высота составляет около 150 метров, а площадь - более 20 тысяч квадратных метров. Он расположен в старом городе и служит местом поклонения и культурного наследия.',
  },
  {
    id: 16,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_16.jpg`,
    caption:
      'Это минималистичная квартира с бело-серой цветовой гаммой и балконом с видом на город. Она выглядит очень стильно и функционально. Ее высота составляет около 3 метров, а площадь - более 50 квадратных метров. Она расположена в новом жилом комплексе и служит жильем для одного или двух человек.',
  },
  {
    id: 17,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_17.jpg`,
    caption:
      'Это традиционный японский дом с соломенной крышей и садом с прудом и мостиком. Он выглядит очень умиротворяюще и изысканно. Его высота составляет около 5 метров, а площадь - более 100 квадратных метров. Он расположен в сельской местности и служит жильем для семьи или гостиницей.',
  },
  {
    id: 18,
    url: `${process.env.NEXT_PUBLIC_URL}/images/photo_18.jpg`,
    caption:
      'Это футуристический мост с изогнутой формой и разноцветными огнями, соединяющий два острова. Он выглядит очень зрелищно и инновационно. Его длина составляет около 2 километров, а ширина - более 20 метров. Он расположен в тропическом регионе и служит транспортной артерией и туристической достопримечательностью.',
  },
];