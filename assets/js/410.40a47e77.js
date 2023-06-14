(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{843:function(t,a,s){"use strict";s.r(a);var r=s(2),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"登录问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录问题"}},[t._v("#")]),t._v(" 登录问题")]),t._v(" "),a("ol",[a("li",[t._v("如何设计数据库以及相应的接口")]),t._v(" "),a("li",[t._v("如何保证在匿名用户未登录的情况下仅仅只是可以看相关的文章，而不可以管理自己的文章。")]),t._v(" "),a("li",[t._v("如何保证用户登录进去以后再次刷新不会退出登录")])]),t._v(" "),a("h2",{attrs:{id:"adminindex出现的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adminindex出现的问题"}},[t._v("#")]),t._v(" AdminIndex出现的问题")]),t._v(" "),a("p",[t._v("就是因为在app.js里面渲染AdminIndex路由组件的里面加了个exact。如下所示 admin/app.js")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fragment")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BrowserRouter")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n          ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Route")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/login/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Route")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/index/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("exact")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("AdminIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BrowserRouter")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fragment")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("而又因为需要路由跳转 在文件admin/pages/AdminIndex/index,jsx里面")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/index/"')]),t._v(" exact component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("AddArticle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/index/add/"')]),t._v(" exact  component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("AddArticle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/index/add/:id"')]),t._v(" exact  component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("AddArticle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/index/list/"')]),t._v(" exact component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ArticleList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("结果当我路由跳转到的时候"),a("code",[t._v("/index/list/")]),t._v(" 就再也渲染不了`AdminIndex' component了")]),t._v(" "),a("h2",{attrs:{id:"官方解释如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方解释如下"}},[t._v("#")]),t._v(" 官方解释如下")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n所以可以被path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("regexp@"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.7")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v(" 识别的 url 都能使用。\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/:id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("User "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/:id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/profile/:id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("User "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exact")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bool\n当值为 "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" 时，仅当 location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname 和路由路径完全匹配时候渲染。\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route exact path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/one"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("About "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("strict")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bool\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route strict path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/one/"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("About "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n路由路径\tlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname\t匹配与否\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one\t否\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t是\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("two\t是\n当值为 "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" 时，带有 path 斜杠的只会与 location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname 带有斜杠的匹配。当 location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname 中有其他网址段时，此选项无效。\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route exact strict path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/one"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("About "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n路由路径\tlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname\t匹配与否\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one\t是\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t否\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("two\t否\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("location")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" object\n一个"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("元素尝试其匹配 path 到当前的历史位置（通常是当前浏览器 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v("）。但是，也可以传递与 location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname 不同的值进行匹配。如需要将"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("与当前历史记录位置以外的其他位置进行匹配时，这很有用，如Animated Transitions示例所示。如果"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("元素包装在中，"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Switch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("并且与传递给的位置"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Switch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("（或当前历史记录位置）匹配，则 location 传递给"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("的属性将被"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Switch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("上的属性 代码覆盖。\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sensitive")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bool\n当值为 "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" 时，匹配时将区分大小写\n\n路由路径\tlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname\tsensitive 的值\t匹配与否\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one\t"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\t是\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\t否\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("two\t"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\t否\n最后修改时间： "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" days ago\n")])])]),a("h2",{attrs:{id:"要实现的功能4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要实现的功能4"}},[t._v("#")]),t._v(" 要实现的功能4")]),t._v(" "),a("p",[t._v("编辑器的md语法转html语言，并且转换后的代码有高亮效果")]),t._v(" "),a("p",[t._v("选择marked库和highlight.js库")]),t._v(" "),a("p",[t._v("问题： react 使用marked+highlight.js样式不生效")]),t._v(" "),a("p",[t._v("原因： 需要手动引入highlight.js的样式文件")]),t._v(" "),a("h2",{attrs:{id:"三、markedjs官网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、markedjs官网"}},[t._v("#")]),t._v(" 三、"),a("a",{attrs:{href:"https://marked.js.org/#/USING_ADVANCED.md#highlight",target:"_blank",rel:"noopener noreferrer"}},[t._v("markedjs官网"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"官网demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官网demo"}},[t._v("#")]),t._v(" 官网demo")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create reference instance")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myMarked "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'marked'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set options")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `highlight` example uses `highlight.js`")]),t._v("\nmyMarked"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("renderer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("myMarked"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Renderer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("highlight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'highlight.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("highlightAuto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pedantic")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("gfm")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tables")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("breaks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sanitize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("smartLists")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("smartypants")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("xhtml")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Compile")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myMarked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I am using __markdown__.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("highlight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'highlight.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("highlightAuto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("code 参数是"),a("code",[t._v("<code>")]),t._v("中的初始内容， 该函数返回的是经highlight "),a("code",[t._v("处理")]),t._v(" （给特定内容添加上class）后的内容。")])])}),[],!1,null,null,null);a.default=n.exports}}]);