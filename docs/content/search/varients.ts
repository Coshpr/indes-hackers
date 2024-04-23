import { title } from "process"

type KeyItem = {
    key?: string,
    title: string,
    url?: string,
    description?: string
    sources?: Record<string, string | number | null>[]
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
    'life': { title: "生活" },
    'dev': { title: "开发" },

    'reading': { title: "阅读" },
    'movie': { title: "电影" },
    "framework": { title: "框架" },
    'ui': { title: "UI" },
    "build": { title: "Build" },

    'wx-reading': {
        title: "微信阅读",
        url: ""
    },
    'bilibili': { title: "Bilibili", url: "bilibil.com" },
    'bdys': { title: "哔嘀影视", url: "bdys10.com" },
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