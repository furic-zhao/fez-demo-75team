/* ==================================
 * @ 2017 FEZ 前端模块工程自动化构建工具
 * https://github.com/furic-zhao/fez
 * ================================== */

export default {

    cssCompiler: "css",

    useMd5: {
        options: {
            dontRenameFile: [".html", /face\/(.*?).gif$/g],
            dontUpdateReference: [".html", /face\/(.*?).gif$/g]
        }
    },

    useInject: {
        lib: {
            available: true,

            js: [{
                target: "a-common-jquery.js",
                contain: ["**/*jquery.js", "**/*jquery.fancybox-1.3.4.pack.js", "**/*jquery.easing-1.3.pack.js", "**/*jquery.mousewheel-3.0.4.pack.js"]
            }]
        },

        views: true
    }
}
