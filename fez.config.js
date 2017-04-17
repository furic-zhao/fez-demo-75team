/* ==================================
 * @ 2017 FEZ 前端模块工程自动化构建工具
 * https://github.com/furic-zhao/fez
 * ================================== */

export default {
    /**
     * 选择css编译器【取值:less/sass/css】
     */
    "cssCompiler": "css",

    /**
     * 生产环境 启用自动化添加文件版本号(md5)
     * 配置参考：https://github.com/smysnk/gulp-rev-all
     */
    "useMd5": {
        "options": {
            "dontRenameFile": [".html", /face\/(.*?).gif$/g],
            "dontUpdateReference": [".html", /face\/(.*?).gif$/g]
        }
    },

    /**html自动化注入文件*
     * 【支持自定义打包多个文件到一个文件】
     * 【支持自定义打包单个文件】
     * 【未配置的文件自动打包成一个文件】
     * 【插入页面顺序以字母或数字降序排列-解决插入页面的脚本文件依赖关系】
     * 【打包顺序以文件配置先后降序排列-解决打包文件间的依赖关系】
     */
    "useInject": {
        /**
         * ---------- bower打包格式 仅对 生产环境------------
         * 打包文件支持 gulp格式的正则文件名
         * {
         *     "target": "{排序序号}-vendor-{打包名称}.js",
         *     "contain": ["{文件1}", "{文件2}", "{文件3}"]
         * }
         */
        "bower": {
            "available": false, //启用 bower 文件自动化注入
            "js": [],
            "css": []
        },
        /**
         * 【支持单个文件指定注入到某些页面】
         * （命名规则：assign-{页面名}-{页面名}-{other}
         */
        "lib": {
            "available": true, //启用 公共 文件自动化注入
            "css": "*common*", //以common命名的样式文件会注入到所有的页面
            /*
             * ---------- 公共脚本打包格式 仅对 生产环境------------
             * 打包文件支持 gulp格式的正则文件名
             * {
             *     "target": "{排序序号}-common-{打包名称}.js",
             *     "contain": ["{文件1}", "{文件2}", "{文件3}"]
             * }
             */
            "js": [{
                "target": "a-common-jquery.js",
                "contain": ["**/*jquery.js", "**/*jquery.fancybox-1.3.4.pack.js", "**/*jquery.easing-1.3.pack.js", "**/*jquery.mousewheel-3.0.4.pack.js"]
            }]
        },
        /**
         * 【支持src目录中的样式及编译后的逻辑脚本自动化注入到对应的页面】
         */
        "views": true //启用 业务目录 文件自动化注入
    }
}
