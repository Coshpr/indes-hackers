import { title } from "process"

type KeyItem = {
    key?: string,
    title: string,
    url?: string,
    description?: string
    sources?: Record<string, string | number | null>[],
    icon?:string
}

// top level
export const show_collections = ['life', 'dev']

// second level
export const collections: Record<string, string[]> = {
    'life': ['reading', 'movie'],
    'dev': ['framework', 'ui', 'build'],
}

// bottom level
export const topics: Record<string, string[]> = {
    'reading': ['wx-reading'],
    'movie': ['bilibili', 'bdys'],
    // 'lang': ["ts"],
    'framework': ['astro', 'vue', 'react', 'nextjs', 'nuxtjs'],
    'build': ['vite', 'webpack'],
    // 'style': ['sass', 'tailwind'],
    // 'color': ['中国色'],
    'ui': ['shadcn-ui', 'ant-design'],
    // 'animation': [
    //     "vallina-css-animation",
    //     "farmer-motion"
    // ],
    // 'orm': ['mongoalts'],
    // 'soul': ['花瓣网']    
}


export const key_items: Record<string, KeyItem> = {
    'life': { title: "LifeKits" },
    'dev': { title: "WebDev" },

    'reading': { title: "阅读" },
    'movie': { title: "电影" },
    "framework": { title: "框架" },
    'ui': { title: "UI" },
    "build": { title: "Build" },

    'wx-reading': {
        title: "微信阅读",
        url: "https://weread.qq.com/",
        description: '微信读书-正版书籍小说免费阅读',
        icon:"https://rescdn.qqmail.com/node/wr/wrpage/style/images/independent/appleTouchIcon/apple-touch-icon-120x120.png",
    },
    'bilibili': { title: "Bilibili", url: "https://www.bilibili.com/", description: "bilibili是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。" },
    'bdys': { title: "哔嘀影视", url: "https://www.yjys.me/" },
    'astro': { title: "astro", url: "#" },
    'vue': { title: "vue", url: "#" },
    'react': { title: "react", url: "#" },
    'nextjs': { title: "nextjs", url: "#" },
    'nuxtjs': { title: "nuxtjs", url: "#" },
    'vite': { title: "vite", url: "#" },
    'webpack': { title: "webpack", url: "#" },
    'shadcn-ui': { title: "shadcn-ui", url: "#" },
    'ant-design': { title: "ant-design", url: "#" },

}