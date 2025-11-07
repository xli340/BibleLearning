export const SUPPORTED_LANGUAGES = [
  { key: "en", label: "English" },
  { key: "zh", label: "简体中文" }
] as const;

export type LanguageKey = (typeof SUPPORTED_LANGUAGES)[number]["key"];

type NavTranslations = {
  timeline: string;
  people: string;
  map: string;
  about: string;
};

type ThemeTranslations = {
  label: string;
  light: string;
  dark: string;
  system: string;
};

type LanguageTranslations = {
  label: string;
  system: string;
};

type TimelineTranslations = {
  pageTitle: string;
  pageDescription: string;
  cta: string;
  empty: string;
  keyThemes: string;
  scripture: string;
  backToList: string;
  overviewTitle: string;
  detailHeading: string;
  reflectPrompt: string;
};

type AboutTranslations = {
  heading: string;
  description: string;
  contact: string;
  tagline: string;
};

type PlaceholderTranslations = {
  comingSoon: string;
  description: string;
  progressLabel: string;
  progressDetail: string;
  prompt: string;
  notifyCta: string;
  exploreCta: string;
};

type UiTranslations = {
  backToTop: string;
  close: string;
};

export type Translations = {
  nav: NavTranslations;
  theme: ThemeTranslations;
  language: LanguageTranslations;
  timeline: TimelineTranslations;
  about: AboutTranslations;
  placeholder: PlaceholderTranslations;
  ui: UiTranslations;
};

const dictionaries: Record<LanguageKey, Translations> = {
  en: {
    nav: {
      timeline: "Timeline",
      people: "People",
      map: "Map",
      about: "About"
    },
    theme: {
      label: "Theme",
      light: "Light",
      dark: "Dark",
      system: "System"
    },
    language: {
      label: "Language",
      system: "System Default"
    },
    timeline: {
      pageTitle: "Explore the Events of Scripture",
      pageDescription:
        "Trace the key events of the Bible in chronological order and uncover the narrative thread of redemption.",
      cta: "View Details",
      empty: "No events available yet.",
      keyThemes: "Key Themes",
      scripture: "Scripture",
      backToList: "Back to timeline",
      overviewTitle: "Event Overview",
      detailHeading: "Event Narrative",
      reflectPrompt:
        "Continue exploring this event by reflecting on how God's story invites you into faithful response today."
    },
    about: {
      heading: "About the Developer",
      description:
        "While reading Scripture I often forgot or mixed up names, places, and events. I built this site to trace the Bible through time, place, and people so fellow learners can keep the story clear.",
      contact: "Feel free to reach out for collaboration or feedback.",
      tagline: "Crafted with prayerful attention to detail and love for Scripture."
    },
    placeholder: {
      comingSoon: "Coming Soon",
      description:
        "We are curating rich content for this section. Stay tuned!",
      progressLabel: "Current status",
      progressDetail:
        "We are refining layouts, mapping data, and layering interactive details. Early prototypes are under review.",
      prompt:
        "Want early access updates? Let us know and we will keep you in the loop.",
      notifyCta: "Request updates",
      exploreCta: "Explore the timeline"
    },
    ui: {
      backToTop: "Back to top",
      close: "Close"
    }
  },
  zh: {
    nav: {
      timeline: "时间线",
      people: "人物",
      map: "地图",
      about: "关于"
    },
    theme: {
      label: "主题",
      light: "日间",
      dark: "夜间",
      system: "跟随系统"
    },
    language: {
      label: "语言",
      system: "跟随系统语言"
    },
    timeline: {
      pageTitle: "探索圣经的宏大叙事",
      pageDescription:
        "按时间顺序梳理圣经中的关键事件，洞察上帝救赎故事的主线。",
      cta: "查看详情",
      empty: "时间线内容正在整理。",
      keyThemes: "重点主题",
      scripture: "经文",
      backToList: "返回时间线",
      overviewTitle: "事件概览",
      detailHeading: "事件详述",
      reflectPrompt: "继续默想这一事件，思想神的故事如何邀请我们今天做出忠心的回应。"
    },
    about: {
      heading: "关于开发者",
      description:
        "在阅读圣经时，我常常忘记或混淆人名、地名与事件。于是开发了这个网站，从时间、地点、人物三条线索梳理圣经内容，希望帮助和我一样的读者。",
      contact: "欢迎联系我交流合作或提出建议。",
      tagline: "愿这份工作带着祷告与对圣经的热爱，细致服侍每位读者。"
    },
    placeholder: {
      comingSoon: "敬请期待",
      description: "这一部分正在准备更多精彩内容，敬请期待！",
      progressLabel: "当前进度",
      progressDetail: "我们正在完善版式、整理资料并制作互动草图，目前仍在内部打磨阶段。",
      prompt: "想提前了解上线时间？告诉我们，我们会第一时间通知你。",
      notifyCta: "获取更新",
      exploreCta: "返回时间线"
    },
    ui: {
      backToTop: "回到顶部",
      close: "关闭"
    }
  }
};

export function getDictionary(lang: LanguageKey): Translations {
  return dictionaries[lang] ?? dictionaries.en;
}
