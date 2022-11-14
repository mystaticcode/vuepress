(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{409:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"一、安装mkdocs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、安装mkdocs"}},[s._v("#")]),s._v(" 一、安装mkdocs")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("pip install mkdocs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"二、创建项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、创建项目"}},[s._v("#")]),s._v(" 二、创建项目")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdocs new mkdocs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"三、文档预览"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、文档预览"}},[s._v("#")]),s._v(" 三、文档预览")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdocs serve\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"四、更换主题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、更换主题"}},[s._v("#")]),s._v(" 四、更换主题")]),s._v(" "),n("ol",[n("li",[s._v("下载主题")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("pip install mkdocs-material mkdocs-windmill\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("mkdocs.yml里添加:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("theme:\n  name: 'material'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"五、进行mkdocs-yml配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、进行mkdocs-yml配置"}},[s._v("#")]),s._v(" 五、进行mkdocs.yml配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("site_name: My Docs\nsite_description: 在线云文档\nsite_author: 小康\ncopyright: Copyright &copy; 2022 - 2099 小康\nsite_url: https://mkdocs.codeslive.top/\nrepo_url: https://github.com/codeslive/mkdocs\nrepo_name: mkdocs\nedit_uri: \"\"\n# 主题配置\ntheme: \n    name: material\n    language: en\n    search_index_only: true\n    palette:\n    - media: \"(prefers-color-scheme: light)\"\n      scheme: default\n      toggle:\n        icon: material//weather-sunny\n        name: Switch to dark mode\n    - media: \"(prefers-color-scheme: dark)\"\n      primary: teal\n      scheme: slate\n      toggle:\n        icon: material/weather-night\n        name: Switch to light mode\n    features:\n    #- navigation.instant # 点击内部链接时，不用全部刷新页面\n    - navigation.tracking # 在url中使用标题定位锚点\n    - navigation.tabs # 顶部显示导航顶层nav（也就是第一个节点）\n    - navigation.tabs.sticky # 滚动是隐藏顶部nav，需要配合navigation.tabs使用\n    - navigation.sections # nav节点缩进\n    - navigation.expand # 不折叠左侧nav节点\n    - navigation.indexes # 指定节点index pages ，跟instant不兼容\n    - toc.integrate # 右侧生产目录\n    - toc.integrate #导航集成\n    - navigation.top # 一键回顶部\n    - header.autohide\n    - search.share # 搜索分享\n    - search.suggest # 搜索建议\n    - search.highlight #搜索高亮\n\n\n\n\nplugins:\n  - search:\n      jieba_dict: user_dict.txt\n\n\n\n\n# 图标\nicon:\n    admonition:\n      note: octicons/tag-16\n      abstract: octicons/checklist-16\n      info: octicons/info-16\n      tip: octicons/squirrel-16\n      success: octicons/check-16\n      question: octicons/question-16\n      warning: octicons/alert-16\n      failure: octicons/x-circle-16\n      danger: octicons/zap-16\n      bug: octicons/bug-16\n      example: octicons/beaker-16\n      quote: octicons/quote-16\n\n# 扩展\nmarkdown_extensions:\n  - admonition\n  - pymdownx.details\n  - pymdownx.superfences\n  - abbr\n  - pymdownx.snippets\n  - def_list\n  - tables\n  - pymdownx.tasklist:\n      custom_checkbox: true\n  - attr_list\n  - md_in_html\n  - meta\n  - pymdownx.highlight:\n      anchor_linenums: true\n  - pymdownx.inlinehilite\n  - pymdownx.caret #下划线\n  - pymdownx.mark #文本高亮\n  - pymdownx.tilde #删除线\n\n\n\n# 自定义css\nextra_css: \n   - '//cdn.staticaly.com/gh/codeslive/cdn@main/css/imageszoom.css' #图片放大css\n  #- '//cdn.staticaly.com/gh/codeslive/images-pages@main/cdn/css/custom.css'\n  #- '//cdn.staticaly.com/gh/codeslive/images-pages@main/cdn/css/simplelightbox.min.css' #图片放大css\n\n# 自定义js\nextra_javascript: \n  - '//cdn.staticaly.com/gh/codeslive/cdn@main/js/busuanzi.pure.mini.js' # 网站访问统计\n  - '//cdn.staticaly.com/gh/codeslive/cdn@main/js/imageszoom.js' # 图片放大js\n  #- '//cdn.staticaly.com/gh/codeslive/cdn@main/js/jquery-3.2.1.min.js' \n  #- '//cdn.staticaly.com/gh/codeslive/cdn@main/js/simplelightbox.min.js'  #图片放大js\n  #- '//cdn.staticaly.com/gh/codeslive/cdn@main/js/custom.js'\n\n\n# 设置\nextra:\n    social:\n        -   icon: fontawesome/brands/github\n            link: https://github.com/codeslive\n            name: github\n        -   icon: fontawesome/brands/slack\n            link: https://codeslive.github.io\n            name: myblog\n        -   icon: fontawesome/solid/paper-plane\n            link: 2783779285@qq.com\n            name: 邮箱地址\n\n# 文档区\nnav:\n    - 文档介绍: 'index.md'\n    - '在线云文档':\n        - '静态云文档':\n            - mkdoc : 'mkdocs.md'\n            - docsify : 'docsify.md'\n        - '动态云文档':\n            - leanote : 'leanote.md'\n            - mrdoc : 'mrdoc.md'\n            - showdoc: 'showdoc.md'\n    - 个人博客搭建:\n        - '静态博客':\n            - hexo : 'hexo.md'\n            - vuepress : 'vuepress.md'\n        - '动态博客':\n            - halo : 'halo.md'\n            - worldpress : 'worldpress.md'\n    - 开发记录: 'record.md'\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br")])]),n("h3",{attrs:{id:"部署站点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署站点"}},[s._v("#")]),s._v(" 部署站点")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n 1. 打包命令\n mkdocs build\n 2. 添加仓库\n git init\n git remote add origin gh repo clone codeslive/mkdocs\n 3. 上传\n mkdocs gh-deploy\n or\n mkdocs build --clean && mkdocs gh-deploy\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"六、相关教程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、相关教程"}},[s._v("#")]),s._v(" 六、相关教程")]),s._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://juejin.cn/post/7066641709198737416#heading-5",target:"_blank",rel:"noopener noreferrer"}},[s._v("快来美化你的MKDocs吧"),n("OutboundLink")],1)])]),s._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/",target:"_blank",rel:"noopener noreferrer"}},[s._v("mkdocs-material"),n("OutboundLink")],1)])])]),s._v(" "),n("h3",{attrs:{id:"七、效果演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七、效果演示"}},[s._v("#")]),s._v(" 七、效果演示")]),s._v(" "),n("h6",{attrs:{id:"白天模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#白天模式"}},[s._v("#")]),s._v(" 白天模式")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.staticaly.com/gh/codeslive/images-pages@main/2022/202211072046868.webp",alt:""}})]),s._v(" "),n("h6",{attrs:{id:"夜间模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#夜间模式"}},[s._v("#")]),s._v(" 夜间模式")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.staticaly.com/gh/codeslive/images-pages@main/2022/202211072045847.webp",alt:""}})])])}),[],!1,null,null,null);n.default=t.exports}}]);