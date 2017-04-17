# fez-demo-75team
基于FEZ构建的单页面官方网站示例

> 本示例演示了基于FEZ构建的官方网站，非模块化开发。由于页面逻辑较简单，不再划分模块结构。上线添加MD5版本号可以设置某些文件不生成Md5版本号。本示例使用 fez.config.js 配置项目工程，可以在 fez.config.js 添加JS逻辑代码。

## 使用方法

- 本示例依赖 【[FEZ前端模块化工程开发框架](https://github.com/furic-zhao/fez)】请先`git clone https://github.com/furic-zhao/fez.git` 下载 FEZ工程框架 到本地任意目录

- 进入 FEZ 工程目录，执行 `git clone https://github.com/furic-zhao/fez-demo-75team.git` 将本示例下载到 FEZ 根目录

- 进入 fez-demo-75team 目录 执行 `gulp` 或 `gulp dev`,FEZ 会自动打开系统默认浏览器并进入研发环境。

> 若项目不在FEZ工程根目录，请自行修改项目目录中的`gulpfile.babel.js`文件中的路径。

## 任务命令说明

参考：[FEZ前端模块化工程开发框架](https://github.com/furic-zhao/fez)

## 目录结构

#### 源码 src 目录

````bash
.
├── lib
│   ├── a-jquery.js
│   ├── b-jquery.fancybox-1.3.4.pack.js
│   ├── c-jquery.easing-1.3.pack.js
│   └── d-jquery.mousewheel-3.0.4.pack.js
├── static
│   ├── images
│   │   ├── 360logo.png
│   │   ├── 75team.png
│   │   ├── ajax-loader.gif
│   │   ├── balloon.png
│   │   ├── bg-clouds.png
│   │   ├── bg-sky.png
│   │   ├── face
│   │   │   ├── 001.gif
│   │   │   ├── 002.gif
│   │   │   ├── 003.gif
│   │   │   ├── 004.gif
│   │   │   ├── 005.gif
│   │   │   ├── 006.gif
│   │   │   ├── 007.gif
│   │   │   ├── 008.gif
│   │   │   ├── 009.gif
│   │   │   ├── 010.gif
│   │   │   ├── 011.gif
│   │   │   ├── 012.gif
│   │   │   ├── 013.gif
│   │   │   ├── 014.gif
│   │   │   ├── 015.gif
│   │   │   ├── 016.gif
│   │   │   ├── 017.gif
│   │   │   ├── 018.gif
│   │   │   ├── 019.gif
│   │   │   ├── 020.gif
│   │   │   ├── 021.gif
│   │   │   ├── 022.gif
│   │   │   ├── 023.gif
│   │   │   └── 024.gif
│   │   ├── fancybox
│   │   │   ├── blank.gif
│   │   │   ├── fancy_close.png
│   │   │   ├── fancy_loading.png
│   │   │   ├── fancy_nav_left.png
│   │   │   ├── fancy_nav_right.png
│   │   │   ├── fancy_shadow_e.png
│   │   │   ├── fancy_shadow_n.png
│   │   │   ├── fancy_shadow_ne.png
│   │   │   ├── fancy_shadow_nw.png
│   │   │   ├── fancy_shadow_s.png
│   │   │   ├── fancy_shadow_se.png
│   │   │   ├── fancy_shadow_sw.png
│   │   │   ├── fancy_shadow_w.png
│   │   │   ├── fancy_title_left.png
│   │   │   ├── fancy_title_main.png
│   │   │   ├── fancy_title_over.png
│   │   │   ├── fancy_title_right.png
│   │   │   ├── fancybox-x.png
│   │   │   ├── fancybox-y.png
│   │   │   ├── fancybox.png
│   │   │   ├── jquery.easing-1.3.pack.js
│   │   │   ├── jquery.fancybox-1.3.4.js
│   │   │   ├── jquery.fancybox-1.3.4.pack.js
│   │   │   └── jquery.mousewheel-3.0.4.pack.js
│   │   ├── footer_bg.png
│   │   ├── kite.png
│   │   ├── next.png
│   │   ├── pic
│   │   │   ├── codereview.png
│   │   │   ├── inn.png
│   │   │   ├── lego.png
│   │   │   ├── qiwoo.png
│   │   │   ├── qwrap.png
│   │   │   └── yanweifu.png
│   │   ├── prev.png
│   │   └── thumbs
│   │       ├── codereview.png
│   │       ├── inn.png
│   │       ├── lego.png
│   │       ├── qiwoo.png
│   │       ├── qwrap.png
│   │       └── stc.png
│   └── styles
│       ├── common-jquery.fancybox-1.3.4.css
│       └── index.css
└── views
    └── index
        ├── index.html
        └── index.js
````

#### 研发环境目录

````bash
.
├── index.html
├── lib
│   ├── a-jquery.js
│   ├── b-jquery.fancybox-1.3.4.pack.js
│   ├── c-jquery.easing-1.3.pack.js
│   └── d-jquery.mousewheel-3.0.4.pack.js
├── static
│   ├── css
│   │   ├── common-jquery.fancybox-1.3.4.css
│   │   └── index.css
│   ├── images
│   │   ├── 360logo.png
│   │   ├── 75team.png
│   │   ├── ajax-loader.gif
│   │   ├── balloon.png
│   │   ├── bg-clouds.png
│   │   ├── bg-sky.png
│   │   ├── face
│   │   │   ├── 001.gif
│   │   │   ├── 002.gif
│   │   │   ├── 003.gif
│   │   │   ├── 004.gif
│   │   │   ├── 005.gif
│   │   │   ├── 006.gif
│   │   │   ├── 007.gif
│   │   │   ├── 008.gif
│   │   │   ├── 009.gif
│   │   │   ├── 010.gif
│   │   │   ├── 011.gif
│   │   │   ├── 012.gif
│   │   │   ├── 013.gif
│   │   │   ├── 014.gif
│   │   │   ├── 015.gif
│   │   │   ├── 016.gif
│   │   │   ├── 017.gif
│   │   │   ├── 018.gif
│   │   │   ├── 019.gif
│   │   │   ├── 020.gif
│   │   │   ├── 021.gif
│   │   │   ├── 022.gif
│   │   │   ├── 023.gif
│   │   │   └── 024.gif
│   │   ├── fancybox
│   │   │   ├── blank.gif
│   │   │   ├── fancy_close.png
│   │   │   ├── fancy_loading.png
│   │   │   ├── fancy_nav_left.png
│   │   │   ├── fancy_nav_right.png
│   │   │   ├── fancy_shadow_e.png
│   │   │   ├── fancy_shadow_n.png
│   │   │   ├── fancy_shadow_ne.png
│   │   │   ├── fancy_shadow_nw.png
│   │   │   ├── fancy_shadow_s.png
│   │   │   ├── fancy_shadow_se.png
│   │   │   ├── fancy_shadow_sw.png
│   │   │   ├── fancy_shadow_w.png
│   │   │   ├── fancy_title_left.png
│   │   │   ├── fancy_title_main.png
│   │   │   ├── fancy_title_over.png
│   │   │   ├── fancy_title_right.png
│   │   │   ├── fancybox-x.png
│   │   │   ├── fancybox-y.png
│   │   │   └── fancybox.png
│   │   ├── footer_bg.png
│   │   ├── kite.png
│   │   ├── next.png
│   │   ├── pic
│   │   │   ├── codereview.png
│   │   │   ├── inn.png
│   │   │   ├── lego.png
│   │   │   ├── qiwoo.png
│   │   │   ├── qwrap.png
│   │   │   └── yanweifu.png
│   │   ├── prev.png
│   │   └── thumbs
│   │       ├── codereview.png
│   │       ├── inn.png
│   │       ├── lego.png
│   │       ├── qiwoo.png
│   │       ├── qwrap.png
│   │       └── stc.png
│   └── js
│       └── index.js
├── zindex
│   ├── css
│   │   └── bootstrap.min.css
│   └── js
│       ├── bootstrap.min.js
│       ├── handlebars-v4.0.5.min.js
│       ├── jquery-2.1.3.min.js
│       └── qrcode.min.js
└── zindex.html
````

#### 生产环境目录

````bash
.
├── index.html
├── manifest.json
└── static
    ├── css
    │   ├── common-jquery.fancybox-1.3.4.109a30e3.css
    │   └── index.ae9d05ac.css
    ├── images
    │   ├── 360logo.2ee05514.png
    │   ├── 75team.f481e634.png
    │   ├── ajax-loader.2c8dcba5.gif
    │   ├── balloon.c1dc0cef.png
    │   ├── bg-clouds.81a4d837.png
    │   ├── bg-sky.b60296bc.png
    │   ├── face
    │   │   ├── 001.gif
    │   │   ├── 002.gif
    │   │   ├── 003.gif
    │   │   ├── 004.gif
    │   │   ├── 005.gif
    │   │   ├── 006.gif
    │   │   ├── 007.gif
    │   │   ├── 008.gif
    │   │   ├── 009.gif
    │   │   ├── 010.gif
    │   │   ├── 011.gif
    │   │   ├── 012.gif
    │   │   ├── 013.gif
    │   │   ├── 014.gif
    │   │   ├── 015.gif
    │   │   ├── 016.gif
    │   │   ├── 017.gif
    │   │   ├── 018.gif
    │   │   ├── 019.gif
    │   │   ├── 020.gif
    │   │   ├── 021.gif
    │   │   ├── 022.gif
    │   │   ├── 023.gif
    │   │   └── 024.gif
    │   ├── fancybox
    │   │   ├── blank.e0a7e4ed.gif
    │   │   ├── fancy_close.885f8bde.png
    │   │   ├── fancy_loading.802f3a8e.png
    │   │   ├── fancy_nav_left.e479840d.png
    │   │   ├── fancy_nav_right.e6c8d18c.png
    │   │   ├── fancy_shadow_e.9cd93130.png
    │   │   ├── fancy_shadow_n.40d7cfd8.png
    │   │   ├── fancy_shadow_ne.9c29a74b.png
    │   │   ├── fancy_shadow_nw.8e72340c.png
    │   │   ├── fancy_shadow_s.189f706a.png
    │   │   ├── fancy_shadow_se.f688fcd3.png
    │   │   ├── fancy_shadow_sw.34372d38.png
    │   │   ├── fancy_shadow_w.70501562.png
    │   │   ├── fancy_title_left.0d18dcf7.png
    │   │   ├── fancy_title_main.1cd982e7.png
    │   │   ├── fancy_title_over.10f7262d.png
    │   │   ├── fancy_title_right.0f7720ff.png
    │   │   ├── fancybox-x.a3897ad9.png
    │   │   ├── fancybox-y.ed837d54.png
    │   │   └── fancybox.0bccb93a.png
    │   ├── footer_bg.6cdb5333.png
    │   ├── kite.17a3c93b.png
    │   ├── next.ed0fa74b.png
    │   ├── pic
    │   │   ├── codereview.bfe2f115.png
    │   │   ├── inn.824ddb99.png
    │   │   ├── lego.a750e1ec.png
    │   │   ├── qiwoo.10ac5a27.png
    │   │   ├── qwrap.064a5180.png
    │   │   └── yanweifu.2247de12.png
    │   ├── prev.6c799477.png
    │   └── thumbs
    │       ├── codereview.219b58c8.png
    │       ├── inn.6e6a8819.png
    │       ├── lego.1ac867aa.png
    │       ├── qiwoo.675be167.png
    │       ├── qwrap.72e94864.png
    │       └── stc.b1eb3125.png
    └── js
        ├── a-common-jquery.a03d91de.js
        └── index.48538f4d.js
````

