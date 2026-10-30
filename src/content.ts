export type Lang = 'en' | 'zh'
export type LStr = { en: string; zh: string }

export interface Artwork {
  src: string
  w: number
  h: number
  title: LStr
  medium: LStr
  size: string
}

export interface Series {
  id: string
  index: string
  title: LStr
  subtitle: LStr
  intro: LStr
  count: LStr
  artworks: Artwork[]
}

const oilCanvas: LStr = { en: 'Oil on canvas', zh: '布面油画' }
const oilCard: LStr = { en: 'Oil on cardboard', zh: '纸板油画' }

const bl = (n: number): LStr => ({
  en: `Blue in Love — No. ${n}`,
  zh: `《蓝之爱》系列 — 第 ${n} 号`,
})
const cr = (n: number): LStr => ({
  en: `Crowned Beneath Time's Roots — No. ${n}`,
  zh: `《加冕于时光之根》系列 — 第 ${n} 号`,
})
const up = (n: number): LStr => ({
  en: `Unseen Presence — No. ${n}`,
  zh: `《未见之在》系列 — 第 ${n} 号`,
})

export const content = {
  artist: { en: 'Paria Karami', zh: '帕里亚·卡拉米' },
  role: { en: 'Painter · Shanghai — Hefei, China', zh: '画家 · 中国 上海 — 合肥' },

  nav: [
    { id: 'home', en: 'Home', zh: '首页' },
    { id: 'barzakh', en: 'Barzakh', zh: '巴尔扎赫' },
    { id: 'adornments', en: 'Infinite Adornments', zh: '无尽饰界' },
    { id: 'unseen', en: 'Unseen Presence', zh: '未见之在' },
    { id: 'about', en: 'About', zh: '关于' },
    { id: 'statement', en: 'Statement', zh: '艺术宣言' },
    { id: 'cv', en: 'CV', zh: '履历' },
    { id: 'contact', en: 'Contact', zh: '联系' },
  ] as { id: string; en: string; zh: string }[],

  hero: {
    tagline: {
      en: 'Entering Three Worlds of Body, Nature and Spirit',
      zh: '走进身体、自然与灵性的三个世界',
    },
    intro: {
      en: 'Iranian painter working between Persian mysticism and Chinese Shanshui philosophy — oil, gold leaf, and the feminine depth of water.',
      zh: '伊朗画家，游走于波斯神秘主义与中国山水哲学之间——以油彩、金箔与水的女性深度为语言。',
    },
    scroll: { en: 'Scroll', zh: '下滑' },
    slides: [
      {
        src: '/works/barzakh-3-threshold.jpg',
        kicker: { en: 'Painter — oil & gold leaf', zh: '画家 · 油彩与金箔' },
        title: { en: 'Paria Karami', zh: '帕里亚 · 卡拉米' },
        tag: { en: 'Shanghai — Hefei, China', zh: '中国 上海 — 合肥' },
      },
      {
        src: '/works/barzakh-1-descent.jpg',
        kicker: { en: 'Series I — The Woman Who Became Water', zh: '系列一 · 化作水的女人' },
        title: { en: 'Barzakh', zh: '巴尔扎赫' },
        tag: { en: 'Seven paintings', zh: '七幅作品' },
        link: '/series/barzakh',
      },
      {
        src: '/works/adorn-01-world-tree.jpg',
        kicker: { en: 'Series II — Where Mountains Wear the Memory of Women', zh: '系列二 · 山峦佩戴女性的记忆' },
        title: { en: 'Infinite Adornments', zh: '无尽饰界' },
        tag: { en: 'Sixteen paintings', zh: '十六幅作品' },
        link: '/series/adornments',
      },
      {
        src: '/works/unseen-08.jpg',
        kicker: { en: 'Series III — Between Absence and Becoming', zh: '系列三 · 在缺席与蜕变之间' },
        title: { en: 'Unseen Presence', zh: '未见之在' },
        tag: { en: 'Nine paintings', zh: '九幅作品' },
        link: '/series/unseen',
      },
    ] as { src: string; kicker: LStr; title: LStr; tag: LStr; link?: string }[],
  },

  series: [
    {
      id: 'barzakh',
      index: 'I',
      title: { en: 'Barzakh', zh: '巴尔扎赫' },
      subtitle: {
        en: 'The Woman Who Became Water',
        zh: '化作水的女人',
      },
      count: { en: 'Seven paintings', zh: '七幅作品' },
      intro: {
        en: '“Barzakh” is a Persian and Arabic word meaning the threshold between two worlds: between life and death, between the conscious and the unconscious, between the self we present to the world and the self we hide even from ourselves. There is a moment in every woman’s life when she must choose: to remain on the surface, or to descend. These paintings are a record of that descent — and of the transformation that waits at the bottom. In the final works she no longer floats in the water; she has become the water, the landscape itself.',
        zh: '「巴尔扎赫」在波斯语与阿拉伯语中意为两个世界之间的阈限：生与死之间、意识与潜意识之间、我们示人的自我与连对自己都隐藏的自我之间。每个女人的生命中都有一个时刻必须选择：留在表面，还是向下沉潜。这组画作记录了那场下沉——以及在深处等待的蜕变。在最后的画面中，她不再漂浮于水中；她已化作水，化作风景本身。',
      },
      artworks: [
        { src: '/works/barzakh-1-descent.jpg', w: 2135, h: 2080, title: bl(1), medium: oilCanvas, size: '100 × 100 cm' },
        { src: '/works/barzakh-2-yearning.jpg', w: 2395, h: 2370, title: bl(2), medium: oilCanvas, size: '100 × 100 cm' },
        { src: '/works/barzakh-3-threshold.jpg', w: 2385, h: 3240, title: bl(3), medium: oilCanvas, size: '120 × 160 cm' },
        { src: '/works/barzakh-4-scholars-rock.jpg', w: 2405, h: 2315, title: bl(4), medium: oilCanvas, size: '100 × 100 cm' },
        { src: '/works/barzakh-5-becoming-landscape.jpg', w: 1910, h: 1211, title: bl(5), medium: oilCanvas, size: '42 × 30 cm' },
        { src: '/works/barzakh-6-vessel.jpg', w: 1830, h: 2595, title: bl(6), medium: oilCanvas, size: '30 × 42 cm' },
        { src: '/works/barzakh-7-mandarin-ducks.jpg', w: 1327, h: 1758, title: bl(7), medium: oilCanvas, size: '30 × 42 cm' },
      ],
    },
    {
      id: 'adornments',
      index: 'II',
      title: { en: 'Infinite Adornments', zh: '无尽饰界' },
      subtitle: {
        en: 'Where Mountains Wear the Memory of Women',
        zh: '山峦佩戴女性的记忆',
      },
      count: { en: 'Sixteen paintings', zh: '十六幅作品' },
      intro: {
        en: 'Landscape has always been a body. In the ancient philosophies of Iran and China, the natural world was never merely a lifeless vista — it was flesh and spirit, capable of witnessing, holding memory, and wearing adornment. Mist-veiled Shanshui peaks carry the golden weight of Iranian jewelry: earrings, necklaces, butterfly brooches. In Persian mysticism this gold is Farr-e Izadi, the divine light of glory; in the Chinese tradition it is the Tao made visible. What happens when the feminine adorns infinity — when the mountain becomes woman, and woman becomes eternal?',
        zh: '风景从来就是一具身体。在伊朗与中国的古老哲学中，自然从不是了无生气的图景——它是血肉与灵性，能够见证、承载记忆、佩戴饰物。雾霭缭绕的山水之巅，承载着伊朗女性金饰的重量：耳环、项链、蝶形胸针。在波斯神秘主义中，这金色是「法尔·伊扎迪」——降临于圣者的神圣荣光；在中国传统中，它是可见的道。当女性为无穷加饰，当山峦成为女人、女人成为永恒，会发生什么？',
      },
      artworks: [
        { src: '/works/adorn-01-world-tree.jpg', w: 990, h: 1146, title: cr(1), medium: oilCard, size: '30 × 43 cm' },
        { src: '/works/adorn-02-golden-hairpin.jpg', w: 1045, h: 1509, title: cr(2), medium: oilCard, size: '30 × 43 cm' },
        { src: '/works/adorn-03-waterfall-necklace.jpg', w: 1421, h: 1416, title: cr(3), medium: oilCard, size: '35 × 35 cm' },
        { src: '/works/adorn-04-bird-comb.jpg', w: 1130, h: 1494, title: cr(4), medium: oilCard, size: '30 × 43 cm' },
        { src: '/works/adorn-05-egg-house.jpg', w: 1056, h: 1517, title: cr(5), medium: oilCard, size: '30 × 43 cm' },
        { src: '/works/adorn-06-forest-earring.jpg', w: 1081, h: 1456, title: cr(6), medium: oilCard, size: '30 × 43 cm' },
        { src: '/works/adorn-07-cliff-castle.jpg', w: 1199, h: 1471, title: cr(7), medium: oilCard, size: '30 × 43 cm' },
        { src: '/works/adorn-08-floating-island.jpg', w: 1110, h: 1514, title: cr(8), medium: oilCard, size: '30 × 43 cm' },
        { src: '/works/adorn-09-ribbon-shrine.jpg', w: 1385, h: 1340, title: cr(9), medium: oilCard, size: '35 × 35 cm' },
        { src: '/works/adorn-10-tower-house.jpg', w: 1347, h: 1347, title: cr(10), medium: oilCard, size: '35 × 35 cm' },
        { src: '/works/adorn-11-autumn-cliff.jpg', w: 1440, h: 1402, title: cr(11), medium: oilCard, size: '35 × 35 cm' },
        { src: '/works/adorn-12-tree-mountain.jpg', w: 1367, h: 1368, title: cr(12), medium: oilCard, size: '35 × 35 cm' },
        { src: '/works/adorn-13-verdant-peak.jpg', w: 1086, h: 1534, title: cr(13), medium: oilCard, size: '30 × 43 cm' },
        { src: '/works/adorn-14-rose-cliffs.jpg', w: 1280, h: 1309, title: cr(14), medium: oilCard, size: '35 × 35 cm' },
        { src: '/works/adorn-15-pine-ornaments.jpg', w: 1351, h: 1471, title: cr(15), medium: oilCard, size: '30 × 43 cm' },
        { src: '/works/adorn-16-tree-house.jpg', w: 1280, h: 1403, title: cr(16), medium: oilCard, size: '30 × 43 cm' },
      ],
    },
    {
      id: 'unseen',
      index: 'III',
      title: { en: 'Unseen Presence', zh: '未见之在' },
      subtitle: {
        en: 'Between Absence and Becoming',
        zh: '在缺席与蜕变之间',
      },
      count: { en: 'Nine paintings', zh: '九幅作品' },
      intro: {
        en: 'In this series, the body is suspended between presence and absence. Garments, veils and covered faces keep traces of the human figure alive in memory, while birds, bees, folded paper and whirling forms become signs of transformation and release. These paintings understand identity not as a fixed image, but as a continuous passage between concealment and revelation, weight and lightness, earth and flight.',
        zh: '在这一系列中，身体悬置于在场与缺席之间。衣物、面纱与被遮蔽的面容，让人的痕迹留存于记忆；飞鸟、蜜蜂、折纸与旋转的形态，则成为蜕变与释放的象征。这些画作并不将身份视为凝固的形象，而是一段持续的旅程：在隐没与显现、沉重与轻盈、大地与飞翔之间穿行。',
      },
      artworks: [
        { src: '/works/unseen-01.jpg', w: 914, h: 913, title: up(1), medium: oilCanvas, size: '50 × 50 cm' },
        { src: '/works/unseen-02.jpg', w: 847, h: 842, title: up(2), medium: oilCanvas, size: '50 × 70 cm' },
        { src: '/works/unseen-03.jpg', w: 551, h: 819, title: up(3), medium: oilCanvas, size: '100 × 120 cm' },
        { src: '/works/unseen-04.jpg', w: 796, h: 1215, title: up(4), medium: oilCanvas, size: '100 × 120 cm' },
        { src: '/works/unseen-05.jpg', w: 1124, h: 1685, title: up(5), medium: oilCanvas, size: '100 × 120 cm' },
        { src: '/works/unseen-06.jpg', w: 811, h: 990, title: up(6), medium: oilCanvas, size: '100 × 120 cm' },
        { src: '/works/unseen-07.jpg', w: 910, h: 909, title: up(7), medium: oilCanvas, size: '100 × 120 cm' },
        { src: '/works/unseen-08.jpg', w: 1539, h: 1543, title: up(8), medium: oilCanvas, size: '100 × 120 cm' },
        { src: '/works/unseen-09.jpg', w: 765, h: 768, title: up(9), medium: oilCanvas, size: '100 × 120 cm' },
      ],
    },
  ] as Series[],

  about: {
    heading: { en: 'About the Artist', zh: '关于艺术家' },
    portrait: '/works/paria-portrait.jpg',
    bio: [
      {
        en: 'Paria Karami is an Iranian painter who has lived and worked between cultures for nearly a decade. Now based between Shanghai and Hefei, China, she is a doctoral researcher in Fine Art at Shanghai University, after earlier studies in painting at Sooreh Art University in Tehran and art administration at the University of Science and Technology of China.',
        zh: '帕里亚·卡拉米是一位伊朗画家，近十年来在不同文化之间生活与创作。现工作、生活于中国上海与合肥两地，是上海大学美术学博士研究生；此前先后就读于伊朗苏雷艺术大学绘画专业与中国科学技术大学艺术管理专业。',
      },
      {
        en: 'Her practice merges Eastern and Western techniques: the atmospheric depth of Chinese Shanshui, Western classical training in the human figure, and the gold leaf of Persian miniature and Byzantine icon traditions. Each painting requires months of work — layering glazes to achieve the luminous depth of water, applying gold leaf with deliberate randomness, to suggest both accident and intention.',
        zh: '她的创作融合了东西方的技法：中国山水的氤氲纵深、西方古典的人体造型训练，以及波斯细密画与拜占庭圣像传统中的金箔工艺。每幅画作都需数月之功——层层罩染以求水的透亮深邃，以刻意的偶然性敷设金箔，让偶发与意图并存。',
      },
      {
        en: 'Her works have been shown at Spectrum Miami, the Affordable Art Fair New York, Artrooms London, Art Nordic Copenhagen, and galleries across Iran, Germany, Kuwait, Turkey and China. Alongside her studio practice she writes on contemporary women artists and teaches masterclasses in oil painting, magical realism and symbolic art.',
        zh: '她的作品曾展出于迈阿密光谱艺术展、纽约平价艺术博览会、伦敦 Artrooms 艺术展、哥本哈根北欧艺术博览会，以及伊朗、德国、科威特、土耳其与中国各地的画廊。在创作之余，她亦撰写关于当代女性艺术家的研究文章，并开设油画、魔幻现实主义与象征艺术的大师课程。',
      },
    ] as LStr[],
    facts: [
      { label: { en: 'Based in', zh: '现居' }, value: { en: 'Shanghai · Hefei, China', zh: '中国 上海 · 合肥' } },
      { label: { en: 'Media', zh: '媒介' }, value: { en: 'Oil, mixed media', zh: '油彩、综合材料' } },
      { label: { en: 'Research', zh: '研究' }, value: { en: 'Contemporary women artists', zh: '当代女性艺术家' } },
    ],
  },

  statement: {
    heading: { en: 'Statement', zh: '艺术宣言' },
    quotes: [
      {
        text: {
          en: 'Die before you die, and find that there is no death.',
          zh: '在你死去之前死去，便会发现根本没有死亡。',
        },
        source: { en: 'Rumi', zh: '鲁米' },
      },
      {
        text: {
          en: 'The supreme good is like water, which nourishes all things without trying to.',
          zh: '上善若水，水善利万物而不争。',
        },
        source: { en: 'Tao Te Ching', zh: '《道德经》' },
      },
      {
        text: {
          en: 'I do not paint to show you something; I paint to help you remember something you have always known but have forgotten how to see.',
          zh: '我画画不是为了向你展示什么，而是为了帮你记起那些你素来知晓、却已忘记如何去看的东西。',
        },
        source: { en: 'Paria Karami', zh: '帕里亚·卡拉米' },
      },
    ],
    closing: {
      en: 'In a world that moves too fast, my work offers a place to stop. To breathe. To wonder. Because wonder is not a childish thing — it is the highest form of wisdom.',
      zh: '在一个步履过快的世界里，我的作品提供一个停下来的地方。去呼吸，去惊叹。因为惊叹并非孩童之物——它是智慧最高的形式。',
    },
  },

  cv: {
    heading: { en: 'Curriculum Vitae', zh: '艺术履历' },
    groups: [
      {
        title: { en: 'Education', zh: '教育' },
        items: [
          { year: '2020 – 2026', en: 'Doctoral of Fine Art, Shanghai University, China', zh: '上海大学美术学博士，中国' },
          { year: '2016 – 2019', en: 'MA Art Administration, University of Science and Technology of China', zh: '中国科学技术大学艺术管理硕士' },
          { year: '2007 – 2012', en: 'BA Painting, Sooreh Art University, Tehran, Iran', zh: '伊朗德黑兰苏雷艺术大学绘画学士' },
        ],
      },
      {
        title: { en: 'Selected Exhibitions', zh: '主要展览' },
        items: [
          { year: '2025', en: 'Beijing Art Expo, Beijing, China', zh: '北京艺术博览会，北京' },
          { year: '2025', en: 'Xiamen Art Fair, Xiamen, China', zh: '厦门艺术博览会，厦门' },
          { year: '2024', en: 'M50 Art Gallery, Shanghai, China', zh: 'M50 创意园画廊，上海' },
          { year: '2024', en: '“Beauty in Harmony”, Shanghai University, Shanghai', zh: '「和谐之美」展览，上海大学，上海' },
          { year: '2023 – 2024', en: 'Art for Heart, Shanghai, China', zh: '「艺术之心」艺术展，上海' },
          { year: '2021', en: 'Solo Exhibition, BADU Gallery, China', zh: 'BADU 画廊个展，中国' },
          { year: '2020', en: 'Spectrum Miami Art Fair, Miami, USA', zh: '迈阿密光谱艺术展，美国' },
          { year: '2019', en: 'Affordable Art Fair, New York, USA', zh: '纽约平价艺术博览会，美国' },
          { year: '2018', en: 'Artrooms Fair, London, UK', zh: 'Artrooms 艺术博览会，伦敦，英国' },
          { year: '2017', en: 'Art Nordic, Copenhagen, Denmark', zh: '北欧艺术博览会，哥本哈根，丹麦' },
          { year: '2015', en: 'Seihoun Gallery, Tehran, Iran', zh: 'Seihoun 画廊，德黑兰，伊朗' },
          { year: '2014', en: 'Aaran Gallery, Tehran, Iran', zh: 'Aaran 画廊，德黑兰，伊朗' },
          { year: '2012', en: 'Niavaran Cultural Center, Tehran, Iran', zh: '尼亚瓦兰文化中心，德黑兰，伊朗' },
          { year: '', en: 'Galerie L’Espace, Paris, France', zh: 'L’Espace 画廊，巴黎，法国' },
          { year: '', en: 'Izmir International Museum, Turkey', zh: '伊兹密尔国际博物馆，土耳其' },
          { year: '', en: 'FA Art Gallery, Kuwait', zh: 'FA 艺术画廊，科威特' },
          { year: '', en: 'Innsbruck Gallery, Germany', zh: '因斯布鲁克画廊，德国' },
          { year: '', en: 'Luxemburg Gallery, Germany', zh: '卢森堡画廊，德国' },
          { year: '', en: 'Peace Museum, Tehran, Iran', zh: '和平博物馆，德黑兰，伊朗' },
          { year: '', en: 'Milad Tower Exhibition, Tehran, Iran', zh: '米德拉塔展览，德黑兰，伊朗' },
          { year: '', en: 'Fajr Art Festival, Saba Art Gallery, Iran', zh: '法杰尔艺术节，萨巴画廊，伊朗' },
          { year: '', en: 'Taksh Gallery, Esfahan, Iran', zh: 'Taksh 画廊，伊斯法罕，伊朗' },
          { year: '', en: 'Hoom Gallery, Iran / USA', zh: 'Hoom 画廊，伊朗 / 美国' },
          { year: '', en: 'Times Art Gallery, Hefei, China', zh: '时代画廊，合肥，中国' },
          { year: '', en: 'Anhui Art Gallery, Hefei, China', zh: '安徽省画廊，合肥，中国' },
        ],
      },
      {
        title: { en: 'Awards & Recognition', zh: '奖项与荣誉' },
        items: [
          { year: '2025', en: 'Most Influential Artist of the Year, recognition & encouragement award', zh: '年度最具影响力艺术家（表彰奖）' },
          { year: '2018', en: 'Award of Excellence, Baran Foundation for Contemporary Art, Tehran', zh: '德黑兰巴兰当代艺术基金会优秀奖' },
          { year: '2017', en: 'Winner, “Symbolic Women in Art” Award, Iranian Women Artists Association', zh: '伊朗女性艺术家协会「艺术中的象征女性」奖' },
          { year: '2016', en: 'Best Conceptual Work, Tehran University Annual Art Awards', zh: '德黑兰大学年度艺术奖最佳观念作品' },
          { year: '2015', en: 'Top 10 Emerging Artists, Iran’s Contemporary Art Forum', zh: '伊朗当代艺术论坛十大新锐艺术家' },
          { year: '2014', en: 'Honorable Mention, Iran International Painting Biennial, Niavaran', zh: '伊朗国际绘画双年展荣誉提名，尼亚瓦兰' },
          { year: '2013', en: 'National Grant for Art & Culture, Ministry of Culture, Iran', zh: '伊朗文化部国家艺术文化基金' },
          { year: '', en: 'Outstanding Artist, Dresden Youth Art Forum, Germany', zh: '德国德累斯顿青年艺术论坛杰出艺术家' },
          { year: '', en: 'Selected, Sixth Fajr Festival · Selected, Young Artist Festival', zh: '入选第六届法杰尔艺术节 · 入选青年艺术家节' },
          { year: '', en: 'Exclusive interview on national television “White Carpet”', zh: '国家电视台「白地毯」栏目专访' },
        ],
      },
      {
        title: { en: 'Publications', zh: '出版物' },
        items: [
          { year: '2026', en: '“Redefining Women’s Body: A Look at Contemporary Chinese Women Artists”, Art and Design', zh: '《重新定义女性身体：中国当代女性艺术家观察》，《艺术与设计》' },
          { year: '2024', en: '“Redefining Women’s Bodies from the Perspective of Iranian Contemporary Female Artists”, Arts 13(6):167', zh: '《从伊朗当代女性艺术家的视角重新定义女性身体》，《Arts》13(6):167' },
          { year: '2019', en: '“The Relationship Between Art Education and Government Policy Toward Sustainable Urban Development in Tehran”, Education Quarterly Reviews', zh: '《艺术教育与政府政策对德黑兰可持续城市发展的关系》，《教育季评》' },
        ],
      },
      {
        title: { en: 'Teaching', zh: '教学' },
        items: [
          { year: '2020 –', en: 'Masterclass Instructor — oil painting, magical realism, symbolic art', zh: '大师课导师——油画、魔幻现实主义与象征艺术' },
          { year: '2022 –', en: 'Hefei Xinhua Academy, Hefei, China', zh: '合肥新华艺术学院，中国' },
          { year: '2019 – 2020', en: 'Run’an International School, Hefei, China', zh: '合肥润安国际学校，中国' },
          { year: '2015 – 2016', en: 'Lecturer, Alzahra University, Tehran, Iran', zh: '伊朗德黑兰阿尔扎赫拉大学讲师' },
          { year: '2014 – 2016', en: 'Lecturer, Dr. Shariati Art University — painting restoration, design workshops', zh: '沙里亚蒂艺术大学讲师——绘画修复、设计工作坊' },
        ],
      },
    ],
  },

  contact: {
    heading: { en: 'Contact', zh: '联系' },
    lead: {
      en: 'For acquisitions, exhibitions, commissions and masterclasses, please write to:',
      zh: '如需收藏、展览、委约创作或大师课程，请来信：',
    },
    emails: ['paria20860118@shu.edu.cn', 'karami@mail.ustc.edu.cn'],
    phone: '+86 151 5609 2612',
    phoneLabel: { en: 'Phone / WhatsApp', zh: '电话 / WhatsApp' },
    location: { en: 'Shanghai · Hefei, China', zh: '中国 上海 · 合肥' },
    locationLabel: { en: 'Studio', zh: '工作室' },
  },

  footer: {
    copyright: { en: '© 2026 Paria Karami. All artworks reproduced with the artist’s permission.', zh: '© 2026 帕里亚·卡拉米。本站作品图像经艺术家授权使用。' },
  },

  ui: {
    menu: { en: 'Menu', zh: '菜单' },
    close: { en: 'Close', zh: '关闭' },
    viewWorks: { en: 'View the Works', zh: '查看作品' },
    series: { en: 'Series', zh: '系列' },
    enlarge: { en: 'Enlarge', zh: '放大' },
    prev: { en: 'Previous', zh: '上一幅' },
    next: { en: 'Next', zh: '下一幅' },
  },
}

export const marqueeItems: LStr[] = [
  { en: 'Beijing Art Expo 2025', zh: '北京艺术博览会 2025' },
  { en: 'Xiamen Art Fair 2025', zh: '厦门艺术博览会 2025' },
  { en: 'M50 Shanghai 2024', zh: '上海 M50 2024' },
  { en: 'Spectrum Miami 2020', zh: '迈阿密光谱艺术展 2020' },
  { en: 'Affordable Art Fair New York 2019', zh: '纽约平价艺术博览会 2019' },
  { en: 'Artrooms London 2018', zh: '伦敦 Artrooms 2018' },
  { en: 'Art Nordic Copenhagen 2017', zh: '哥本哈根北欧艺博会 2017' },
  { en: 'Niavaran Cultural Center Tehran', zh: '德黑兰尼亚瓦兰文化中心' },
]
