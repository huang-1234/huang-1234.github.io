(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{580:function(s,t,a){"use strict";a.r(t);var e=a(2),o=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"node-如何处理-es6-模块-full"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-如何处理-es6-模块-full"}},[s._v("#")]),s._v(" Node 如何处理 ES6 模块 Full")]),s._v(" "),t("p",[s._v("作者： "),t("a",{attrs:{href:"http://www.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("阮一峰"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("日期： "),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2020/08/",target:"_blank",rel:"noopener noreferrer"}},[s._v("2020年8月20日"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("学习 JavaScript 语言，你会发现它有两种格式的模块。")]),s._v(" "),t("p",[s._v("一种是 ES6 模块，简称 ESM；另一种是 Node.js 专用的 CommonJS 模块，简称 CJS。这两种模块不兼容。")]),s._v(" "),t("p",[s._v("很多人使用 Node.js，只会用"),t("code",[s._v("require()")]),s._v("加载模块，遇到 ES6 模块就不知道该怎么办。本文就来谈谈，ES6 模块在 Node.js 里面怎么使用。")]),s._v(" "),t("h2",{attrs:{id:"一、两种模块的差异"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、两种模块的差异"}},[s._v("#")]),s._v(" 一、两种模块的差异")]),s._v(" "),t("p",[s._v("ES6 模块和 CommonJS 模块有很大的差异。")]),s._v(" "),t("p",[s._v("语法上面，CommonJS 模块使用"),t("code",[s._v("require()")]),s._v("加载和"),t("code",[s._v("module.exports")]),s._v("输出，ES6 模块使用"),t("code",[s._v("import")]),s._v("和"),t("code",[s._v("export")]),s._v("。")]),s._v(" "),t("p",[s._v("用法上面，"),t("code",[s._v("require()")]),s._v("是同步加载，后面的代码必须等待这个命令执行完，才会执行。"),t("code",[s._v("import")]),s._v("命令则是异步加载，或者更准确地说，ES6 模块有一个独立的静态解析阶段，依赖关系的分析是在那个阶段完成的，最底层的模块第一个执行。")]),s._v(" "),t("h2",{attrs:{id:"二、node-js-的区分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、node-js-的区分"}},[s._v("#")]),s._v(" 二、Node.js 的区分")]),s._v(" "),t("p",[s._v("Node.js 要求 ES6 模块采用"),t("code",[s._v(".mjs")]),s._v("后缀文件名。也就是说，只要脚本文件里面使用"),t("code",[s._v("import")]),s._v("或者"),t("code",[s._v("export")]),s._v("命令，那么就必须采用"),t("code",[s._v(".mjs")]),s._v("后缀名。Node.js 遇到"),t("code",[s._v(".mjs")]),s._v("文件，就认为它是 ES6 模块，默认启用严格模式，不必在每个模块文件顶部指定"),t("code",[s._v('"use strict"')]),s._v("。")]),s._v(" "),t("p",[s._v("如果不希望将后缀名改成"),t("code",[s._v(".mjs")]),s._v("，可以在项目的"),t("code",[s._v("package.json")]),s._v("文件中，指定"),t("code",[s._v("type")]),s._v("字段为"),t("code",[s._v("module")]),s._v("。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),t("p",[s._v("一旦设置了以后，该目录里面的 JS 脚本，就被解释用 ES6 模块。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解释成 ES6 模块")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" my-app.js\n")])])])]),s._v(" "),t("p",[s._v("如果这时还要使用 CommonJS 模块，那么需要将 CommonJS 脚本的后缀名都改成"),t("code",[s._v(".cjs")]),s._v("。如果没有"),t("code",[s._v("type")]),s._v("字段，或者"),t("code",[s._v("type")]),s._v("字段为"),t("code",[s._v("commonjs")]),s._v("，则"),t("code",[s._v(".js")]),s._v("脚本会被解释成 CommonJS 模块。")]),s._v(" "),t("p",[s._v("总结为一句话："),t("code",[s._v(".mjs")]),s._v("文件总是以 ES6 模块加载，"),t("code",[s._v(".cjs")]),s._v("文件总是以 CommonJS 模块加载，"),t("code",[s._v(".js")]),s._v("文件的加载取决于"),t("code",[s._v("package.json")]),s._v("里面"),t("code",[s._v("type")]),s._v("字段的设置。")]),s._v(" "),t("p",[s._v("注意，ES6 模块与 CommonJS 模块尽量不要混用。"),t("code",[s._v("require")]),s._v("命令不能加载"),t("code",[s._v(".mjs")]),s._v("文件，会报错，只有"),t("code",[s._v("import")]),s._v("命令才可以加载"),t("code",[s._v(".mjs")]),s._v("文件。反过来，"),t("code",[s._v(".mjs")]),s._v("文件里面也不能使用"),t("code",[s._v("require")]),s._v("命令，必须使用"),t("code",[s._v("import")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"三、commonjs-模块加载-es6-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、commonjs-模块加载-es6-模块"}},[s._v("#")]),s._v(" 三、CommonJS 模块加载 ES6 模块")]),s._v(" "),t("p",[s._v("CommonJS 的"),t("code",[s._v("require()")]),s._v("命令不能加载 ES6 模块，会报错，只能使用"),t("code",[s._v("import()")]),s._v("这个方法加载。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./my-app.mjs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),t("p",[s._v("上面代码可以在 CommonJS 模块中运行。")]),s._v(" "),t("p",[t("code",[s._v("require()")]),s._v("不支持 ES6 模块的一个原因是，它是同步加载，而 ES6 模块内部可以使用顶层"),t("code",[s._v("await")]),s._v("命令，导致无法被同步加载。")]),s._v(" "),t("h2",{attrs:{id:"四、es6-模块加载-commonjs-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、es6-模块加载-commonjs-模块"}},[s._v("#")]),s._v(" 四、ES6 模块加载 CommonJS 模块")]),s._v(" "),t("p",[s._v("ES6 模块的"),t("code",[s._v("import")]),s._v("命令可以加载 CommonJS 模块，但是只能整体加载，不能只加载单一的输出项。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" packageMain "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'commonjs-package'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 报错")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" method "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'commonjs-package'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),t("p",[s._v("这是因为 ES6 模块需要支持静态代码分析，而 CommonJS 模块的输出接口是"),t("code",[s._v("module.exports")]),s._v("，是一个对象，无法被静态分析，所以只能整体加载。")]),s._v(" "),t("p",[s._v("加载单一的输出项，可以写成下面这样。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" packageMain "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'commonjs-package'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" method "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" packageMain"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),t("h2",{attrs:{id:"五、同时支持两种格式的模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、同时支持两种格式的模块"}},[s._v("#")]),s._v(" 五、同时支持两种格式的模块")]),s._v(" "),t("p",[s._v("一个模块同时要支持 CommonJS 和 ES6 两种格式，也很容易。")]),s._v(" "),t("p",[s._v("如果原始模块是 ES6 格式，那么需要给出一个整体输出接口，比如"),t("code",[s._v("export default obj")]),s._v("，使得 CommonJS 可以用"),t("code",[s._v("import()")]),s._v("进行加载。")]),s._v(" "),t("p",[s._v("如果原始模块是 CommonJS 格式，那么可以加一个包装层。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" cjsModule "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../index.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cjsModule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])])])]),s._v(" "),t("p",[s._v("上面代码先整体输入 CommonJS 模块，然后再根据需要输出具名接口。")]),s._v(" "),t("p",[s._v("你可以把这个文件的后缀名改为"),t("code",[s._v(".mjs")]),s._v("，或者将它放在一个子目录，再在这个子目录里面放一个单独的"),t("code",[s._v("package.json")]),s._v("文件，指明"),t("code",[s._v('{ type: "module" }')]),s._v("。")]),s._v(" "),t("p",[s._v("另一种做法是在"),t("code",[s._v("package.json")]),s._v("文件的"),t("code",[s._v("exports")]),s._v("字段，指明两种格式模块各自的加载入口。")]),s._v(" "),t("blockquote",[t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exports"')]),s._v("："),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"require"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.js"')]),s._v("，\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"import"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./esm/wrapper.js"')]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),t("p",[s._v("上面代码指定"),t("code",[s._v("require()")]),s._v("和"),t("code",[s._v("import")]),s._v("，加载该模块会自动切换到不一样的入口文件。")])])}),[],!1,null,null,null);t.default=o.exports}}]);