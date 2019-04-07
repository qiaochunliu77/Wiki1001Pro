module.exports = {
    title: 'Wiki 1001',
    description: '金志相的 Wiki 1001 维基博客',
    //  指定 vuepress build 的输出目录
    dest:'./dist',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/Wiki1001Pro/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            popupComponent: 'MySWUpdatePopup',
            updatePopup: {
                message: "新的风暴已经出现",
                buttonText: "盘他"
            }
        }],
        ['@vuepress/google-analytics', {
            ga: 'UA-132556470-1'
        }],
        ['@vuepress/medium-zoom', true]
    ],
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/Mulander-J/Wiki1001Pro.git',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://github.com/Mulander-J/Wiki1001Pro',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: 'Git EditLink',
        // 文档更新时间：每个文件git最后提交的时间,
        lastUpdated: 'Last Updated' ,
        // 侧边栏搜索深度
        sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        nav:[
            { text: 'Wiki', link: '/FAQ/Wiki' },
            { text: 'FAQ', link: '/FAQ/Console/A000' },
            { text: 'Store', link: '/Store/' },
            { text: 'Thought', link: '/Thought/' },
            {
                text: 'Another',
                items: [
                    { text: 'MySelf', link: '/Another/MySelf' },
                    { text: 'Project', link: '/Another/Project' },
                    { text: 'Fillory', link: '/Another/Fillory' },
                    { text: 'Review', link: '/Another/Review' }
                ]
            }
        ],
        sidebar:{
            '/FAQ/':[
                ['/FAQ/Wiki','Wiki'],
                {
                    title: 'Console',
                    children: [
                        ['/FAQ/Console/A000','#FAQ1000'],
                        ['/FAQ/Console/A001','#A001_VuePress_1'],
                        ['/FAQ/Console/A002','#A002_VuePress_2'],
                        ['/FAQ/Console/A003','#A003_图标库选择界面'],
                        ['/FAQ/Console/A004','#A004_初识Electron'],
                        ['/FAQ/Console/A005','#A005_简单上手CSS-Shadow'],
                        ['/FAQ/Console/A006','#A006_大屏数据可视化实现记录'],
                    ]
                },
                {
                    title: 'Digest',
                    children: [
                        ['/FAQ/DigestionHeap/Digested','#Digested'],
                        ['/FAQ/DigestionHeap/Digesting','#Digesting'],
                        ['/FAQ/DigestionHeap/DigestWill','#DigestWill']
                    ]
                }
            ],
            '/Thought/':[
                ['','Thought'],
                {
                    title: '断章取义',
                    children: [
                        ['/Thought/TheWord/OneWord','#一文字'],
                        ['/Thought/TheWord/Les_Confessions','#《忏悔录》'],
                        ['/Thought/TheWord/AmericanGods.md','#《美国众神》'],
                    ]
                },
                {
                    title: '回响',
                    children: [
                        [ '/Thought/Words/W001','#过年回家咯'],

                    ]
                },
                {
                    title: '游记',
                    children: [
                        ['/Thought/Travels/beiPing','#北平游记']
                    ]
                },
                {
                    title: '名世',
                    children: [
                        ['/Thought/Novels/Named/','#扉页'],
                        ['/Thought/Novels/Named/named_s1_001','#第一章-日出而战'],
                        ['/Thought/Novels/Named/named_s1_002','#第二章-器魂九氿'],
                        ['/Thought/Novels/Named/named_s1_003','#第三章-王的抉择'],
                        ['/Thought/Novels/Named/named_s1_004','#第四章-雪过初晴'],
                        ['/Thought/Novels/Named/named_s1_005','#第五章-花灵一现'],
                        ['/Thought/Novels/Named/named_s1_006','#第六章-虎子当口'],
                        ['/Thought/Novels/Named/named_s1_007','#第七章-峄王回归'],
                        ['/Thought/Novels/Named/named_s1_008','#第八章-北门陷阱'],
                        ['/Thought/Novels/Named/named_s1_009','#第九章-过客无情'],
                        ['/Thought/Novels/Named/named_s1_010','#第十章-百乐夜行'],
                        ['/Thought/Novels/Named/named_s1_011','#第十一章-双龙重飞'],
                        ['/Thought/Novels/Named/named_s1_012','#第十二章-君子有约'],
                        ['/Thought/Novels/Named/named_s1_013','#第十三章-寻寻觅觅'],
                        ['/Thought/Novels/Named/named_s1_014','#第十四章-不速之鱼'],
                        ['/Thought/Novels/Named/named_s1_015','#第十五章-出水芙蓉'],
                        ['/Thought/Novels/Named/named_s1_016','#第十六章-白首十心'],
                        ['/Thought/Novels/Named/named_s1_017','#第十七章-人间花火'],
                        ['/Thought/Novels/Named/named_s1_018','#第十八章-兵分三路'],
                        ['/Thought/Novels/Named/named_s1_019','#第十九章-标题'],
                        ['/Thought/Novels/Named/named_s1_020','#第二十章-标题'],
                    ]
                },
                {
                    title: '年终回顾',
                    children: [
                       ['/Thought/YearReview/2018','#2018年'],
                       ['/Thought/YearReview/2019','#2019年']
                    ]
                },
            ],
            '/Store/': [
                ['','Store'],
                {
                    title: 'WebDev',
                    children: [
                        ['/Store/Dev/Links', '#Links'],
                        ['/Store/Dev/Issue', '#Issue']
                    ]
                },
                {
                    title: 'APP',
                    children: [
                        ['/Store/Apps/DownDoors', '#Where'],
                        ['/Store/Apps/OwnTest', '#How']
                    ]
                },
                {
                    title: 'Books',
                    children: [
                        ['/Store/Media/Books/BooksHome','#品读'],
                        ['/Store/Media/Books/BookSec','#Book Sec'],
                        ['/Store/Media/Books/Booked','#Booked'],
                        ['/Store/Media/Books/Booking','#Booking'],
                        ['/Store/Media/Books/BookLay','#Book Lay'],
                        ['/Store/Media/Books/BookWill','#Book Will']
                    ]
                },
                {
                    title: 'Film',
                    children: [
                        ['/Store/Media/Films/FilmsHome','#Bravo'],
                        ['/Store/Media/Films/FilmSec','#Film Sec'],
                        ['/Store/Media/Films/Filmed','#Filmed'],
                        ['/Store/Media/Films/Filming','#Filming'],
                        ['/Store/Media/Films/FilmLay','#Film Lay'],
                        ['/Store/Media/Films/FilmWill','#Film Will']
                    ]
                },
                {
                    title: 'Anime',
                    children: [
                        ['/Store/Media/Anime/AnimeHome','#さいこう'],
                        ['/Store/Media/Anime/AnimeSec','#Anime Sec'],
                        ['/Store/Media/Anime/Animed','#Animed'],
                        ['/Store/Media/Anime/Animing','#Animing'],
                        ['/Store/Media/Anime/AnimeLay','#Anime Lay'],
                        ['/Store/Media/Anime/AnimeWill','#Anime Will']
                    ]
                },
            ],
            '/Another/':[
                ['/Another/MySelf','#MySelf'],
                ['/Another/Project','#Project'],
                ['/Another/Fillory','#Fillory'],
                ['/Another/Review','#Review']
            ]
        }
    }
};

