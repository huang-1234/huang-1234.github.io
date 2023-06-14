(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{990:function(t,e,v){"use strict";v.r(e);var _=v(2),a=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"总结-git-的所有套路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结-git-的所有套路"}},[t._v("#")]),t._v(" 总结 Git 的所有套路")]),t._v(" "),e("p",[t._v("以前我用 Git，就知道"),e("code",[t._v("add .")]),t._v("，然后"),e("code",[t._v("commit -m")]),t._v("，最后"),e("code",[t._v("push origin master")]),t._v("一套带走，或者就是把 Git 作为下载器，去"),e("code",[t._v("clone")]),t._v("别人的项目。但是在工作中呢，和别人一起开发代码，就需要处理一些复杂情况，比如解决冲突，比如手残恢复，等等等实用场景，这些我在后文都会列举。")]),t._v(" "),e("p",[t._v("对于工具的学习，我认为应该多做减法，只捡最有用的学，那些奇技淫巧不学也罢，应该把时间投入更有价值的事情中。")]),t._v(" "),e("h3",{attrs:{id:"一、预备知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、预备知识"}},[t._v("#")]),t._v(" 一、预备知识")]),t._v(" "),e("p",[t._v("首先，在进入 Git 的各种神仙操作之前，一定要明白 git 的三个「分区」是什么，否则的话你一定没办法真正理解 Git 的原理。")]),t._v(" "),e("p",[t._v("本地 Git 的三个分区分别是："),e("code",[t._v("working directory")]),t._v("，"),e("code",[t._v("stage/index area")]),t._v("，"),e("code",[t._v("commit history")]),t._v("。")]),t._v(" "),e("p",[e("code",[t._v("working directory")]),t._v("是「工作目录」，也就是我们肉眼能够看到的文件，后文我们称其为"),e("code",[t._v("work dir")]),t._v("区。")]),t._v(" "),e("p",[t._v("当我们在"),e("code",[t._v("work dir")]),t._v("中执行"),e("code",[t._v("git add")]),t._v("相关命令后，就会把"),e("code",[t._v("work dir")]),t._v("中的修改添加到「暂存区」"),e("code",[t._v("stage area")]),t._v("（或者叫"),e("code",[t._v("index area")]),t._v("）中去，后文我们称暂存区为"),e("code",[t._v("stage")]),t._v("\n区。")]),t._v(" "),e("p",[t._v("当"),e("code",[t._v("stage")]),t._v("中存在修改时，我们使用"),e("code",[t._v("git commit")]),t._v("相关命令之后，就会把"),e("code",[t._v("stage")]),t._v("中的修改保存到「提交历史」"),e("code",[t._v("commit history")]),t._v("中，也就是"),e("code",[t._v("HEAD")]),t._v("指针指向的位置。后文我们称「提交历史」为"),e("code",[t._v("history")]),t._v("区。")]),t._v(" "),e("p",[t._v("关于"),e("code",[t._v("commit history")]),t._v("我们多说几句，任何修改只要进入"),e("code",[t._v("commit history")]),t._v("，基本可以认为永远不会丢失了。每个"),e("code",[t._v("commit")]),t._v("都有一个唯一的 Hash 值，我们经常说的"),e("code",[t._v("HEAD")]),t._v("或者"),e("code",[t._v("master")]),t._v("分支，都可以理解为一个指向某个"),e("code",[t._v("commit")]),t._v("的指针。")]),t._v(" "),e("p",[e("code",[t._v("work dir")]),t._v("和"),e("code",[t._v("stage")]),t._v("区域的状态，可以通过命令"),e("code",[t._v("git status")]),t._v("来查看，"),e("code",[t._v("history")]),t._v("区域的提交历史可以通过"),e("code",[t._v("git log")]),t._v("命令来查看。")]),t._v(" "),e("p",[t._v("好的，如果上面的内容你都能够理解，那么本文就完全围绕这三个概念展开，下面就是一个「状态转移图」：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/Tools/Git/summarize.assets/four_git_command.png",alt:"image-20210725162226305"}}),t._v(" "),e("img",{attrs:{src:"summarize.assets/four_git_command.png",alt:"image-20210725162226305"}})]),t._v(" "),e("h3",{attrs:{id:"二、本地-git-极简教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、本地-git-极简教程"}},[t._v("#")]),t._v(" 二、本地 Git 极简教程")]),t._v(" "),e("h4",{attrs:{id:"需求一-如何把work-dir中的修改加入stage。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求一-如何把work-dir中的修改加入stage。"}},[t._v("#")]),t._v(" 需求一，如何把"),e("code",[t._v("work dir")]),t._v("中的修改加入"),e("code",[t._v("stage")]),t._v("。")]),t._v(" "),e("p",[t._v("这个是最简单，使用 "),e("code",[t._v("git add")]),t._v(" 相关的命令就行了。顺便一提，"),e("code",[t._v("add")]),t._v("有个别名叫做"),e("code",[t._v("stage")]),t._v("，也就是说你可能见到"),e("code",[t._v("git stage")]),t._v("相关的命令，这个命令和"),e("code",[t._v("git add")]),t._v("命令是完全一样的。")]),t._v(" "),e("p",[t._v("风险等级：无风险。")]),t._v(" "),e("p",[t._v("理由：不会改变任或撤销任何已作出的修改，而且还会将"),e("code",[t._v("work dir")]),t._v("中未追踪的修改（Untracked file）添加到暂存区"),e("code",[t._v("stage")]),t._v("中进行追踪。")]),t._v(" "),e("h4",{attrs:{id:"需求二-如何把stage中的修改还原到work-dir中。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求二-如何把stage中的修改还原到work-dir中。"}},[t._v("#")]),t._v(" 需求二，如何把"),e("code",[t._v("stage")]),t._v("中的修改还原到"),e("code",[t._v("work dir")]),t._v("中。")]),t._v(" "),e("p",[t._v("这个需求很常见，也很重要，比如我先将当前"),e("code",[t._v("work dir")]),t._v("中的修改添加到"),e("code",[t._v("stage")]),t._v("中，然后又对"),e("code",[t._v("work dir")]),t._v("中的文件进行了修改，但是又后悔了，如何把"),e("code",[t._v("work dir")]),t._v("中的全部或部分文件还原成"),e("code",[t._v("stage")]),t._v("中的样子呢？")]),t._v(" "),e("p",[t._v("来个实际场景，我先新建两个文件，然后把他们都加到"),e("code",[t._v("stage")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" a.txt b.txt\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\nOn branch master\nChanges to be committed:\n    new file:   a.txt\n    new file:   b.txt\n")])])]),e("p",[t._v("然后我又修改了"),e("code",[t._v("a.txt")]),t._v("文件：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" hello world "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" a.txt\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\nOn branch master\nChanges to be committed:\n    new file:   a.txt\n    new file:   b.txt\n\nChanges not staged "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" commit:\n    modified:   a.txt\n")])])]),e("p",[t._v("现在，我后悔了，我认为不应该修改"),e("code",[t._v("a.txt")]),t._v("，我想把它还原成"),e("code",[t._v("stage")]),t._v("中的空文件，怎么办？")]),t._v(" "),e("p",[t._v("答案是，使用 "),e("code",[t._v("checkout")]),t._v(" 命令：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout a.txt\nUpdated "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" path from the index\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\nOn branch master\nChanges to be committed:\n    new file:   a.txt\n    new file:   b.txt\n")])])]),e("p",[t._v("看到了么，输出显示从"),e("code",[t._v("index")]),t._v("区（也就是"),e("code",[t._v("stage")]),t._v("区）更新了一个文件，也就是把"),e("code",[t._v("work dir")]),t._v("中"),e("code",[t._v("a.txt")]),t._v("文件还原成了"),e("code",[t._v("stage")]),t._v("中的状态（一个空文件）。")]),t._v(" "),e("p",[t._v("当然，如果"),e("code",[t._v("work dir")]),t._v("中被修改的文件很多，可以使用通配符全部恢复成"),e("code",[t._v("stage")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),e("p",[t._v("有一点需要指出的是，"),e("code",[t._v("checkout")]),t._v("命令只会把被「修改」的文件恢复成"),e("code",[t._v("stage")]),t._v("的状态，如果"),e("code",[t._v("work dir")]),t._v("中新增了新文件，你使用"),e("code",[t._v("git checkout .")]),t._v("是不会删除新文件的。")]),t._v(" "),e("p",[t._v("风险等级：中风险。")]),t._v(" "),e("p",[t._v("理由：在"),e("code",[t._v("work dir")]),t._v("做出的「修改」会被"),e("code",[t._v("stage")]),t._v("覆盖，无法恢复。所以使用该命令你应该确定"),e("code",[t._v("work dir")]),t._v("中的修改可以抛弃。")]),t._v(" "),e("h4",{attrs:{id:"需求三-将stage区的文件添加到history区。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求三-将stage区的文件添加到history区。"}},[t._v("#")]),t._v(" 需求三，将"),e("code",[t._v("stage")]),t._v("区的文件添加到"),e("code",[t._v("history")]),t._v("区。")]),t._v(" "),e("p",[t._v("很简单，就是 "),e("code",[t._v("git commit")]),t._v(" 相关的命令，一般我们就是这样用的：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'一些描述'")]),t._v("\n")])])]),e("p",[t._v("再简单提一些常见场景， 比如说"),e("code",[t._v("commit")]),t._v("完之后，突然发现一些错别字需要修改，又不想为改几个错别字而新开一个"),e("code",[t._v("commit")]),t._v("到"),e("code",[t._v("history")]),t._v("区，那么就可以使用下面这个命令：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--amend")]),t._v("\n")])])]),e("p",[t._v("这样就是把错别字的修改和之前的那个"),e("code",[t._v("commit")]),t._v("中的修改合并，作为一个"),e("code",[t._v("commit")]),t._v("提交到"),e("code",[t._v("history")]),t._v("区。")]),t._v(" "),e("p",[t._v("风险等级：无风险。")]),t._v(" "),e("p",[t._v("理由：不会改变任或撤销任何已作出的修改，而且还会将"),e("code",[t._v("stage")]),t._v("区的修改加入"),e("code",[t._v("history")]),t._v("区并分配一个 Hash 值。只要不乱动本地的"),e("code",[t._v(".git")]),t._v("文件夹，进入"),e("code",[t._v("history")]),t._v("的修改就永远不会丢失。")]),t._v(" "),e("h4",{attrs:{id:"需求四-将history区的文件还原到stage区。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求四-将history区的文件还原到stage区。"}},[t._v("#")]),t._v(" 需求四，将"),e("code",[t._v("history")]),t._v("区的文件还原到"),e("code",[t._v("stage")]),t._v("区。")]),t._v(" "),e("p",[t._v("这个需求很常见，比如说我用了一个"),e("code",[t._v("git add .")]),t._v("一股脑把所有修改加入"),e("code",[t._v("stage")]),t._v("，但是突然想起来文件"),e("code",[t._v("a.txt")]),t._v("中的代码我还没写完，不应该把它"),e("code",[t._v("commit")]),t._v("到"),e("code",[t._v("history")]),t._v("区，所以我得把它从"),e("code",[t._v("stage")]),t._v("中撤销，等后面我写完了再提交。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" aaa "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" a.txt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" bbb "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" b.txt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\nOn branch master\nChanges to be committed:\n    modified:   a.txt\n    modified:   b.txt\n")])])]),e("p",[t._v("如何把"),e("code",[t._v("a.txt")]),t._v("从"),e("code",[t._v("stage")]),t._v("区还原出来呢？可以使用 "),e("code",[t._v("git reset")]),t._v(" 命令：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset a.txt\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\nOn branch master\nChanges to be committed:\n    modified:   b.txt\n\nChanges not staged "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" commit:\n    modified:   a.txt\n")])])]),e("p",[t._v("你看，这样就可以把"),e("code",[t._v("a.txt")]),t._v("文件从"),e("code",[t._v("stage")]),t._v("区移出，这时候进行"),e("code",[t._v("git commit")]),t._v("相关的操作就不会把这个文件一起提交到"),e("code",[t._v("history")]),t._v("区了。")]),t._v(" "),e("p",[t._v("上面的这个命令是一个简写，实际上"),e("code",[t._v("reset")]),t._v("命令的完整写法如下：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--mixed")]),t._v(" HEAD a.txt\n")])])]),e("p",[t._v("其中，"),e("code",[t._v("mixed")]),t._v("是一个模式（mode）参数，如果"),e("code",[t._v("reset")]),t._v("省略这个选项的话默认是"),e("code",[t._v("mixed")]),t._v("模式；"),e("code",[t._v("HEAD")]),t._v("指定了一个历史提交的 hash 值；"),e("code",[t._v("a.txt")]),t._v("指定了一个或者多个文件。")]),t._v(" "),e("p",[t._v("该命令的自然语言描述是：不改变"),e("code",[t._v("work dir")]),t._v("中的任何数据，将"),e("code",[t._v("stage")]),t._v("区域中的"),e("code",[t._v("a.txt")]),t._v("文件还原成"),e("code",[t._v("HEAD")]),t._v("指向的"),e("code",[t._v("commit history")]),t._v("中的样子。就相当于把对"),e("code",[t._v("a.txt")]),t._v("的修改从"),e("code",[t._v("stage")]),t._v("区撤销，但依然保存在"),e("code",[t._v("work dir")]),t._v("中，变为"),e("code",[t._v("unstage")]),t._v("的状态。")]),t._v(" "),e("p",[t._v("风险等级：低风险。")]),t._v(" "),e("p",[t._v("理由：不会改变"),e("code",[t._v("work dir")]),t._v("中的数据，会改变"),e("code",[t._v("stage")]),t._v("区的数据，所以应确保"),e("code",[t._v("stage")]),t._v("中被改动数据是可以抛弃的。")]),t._v(" "),e("h4",{attrs:{id:"需求五-将work-dir的修改提交到history区。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求五-将work-dir的修改提交到history区。"}},[t._v("#")]),t._v(" 需求五，将"),e("code",[t._v("work dir")]),t._v("的修改提交到"),e("code",[t._v("history")]),t._v("区。")]),t._v(" "),e("p",[t._v("这个需求很简单啦，先"),e("code",[t._v("git add")]),t._v("然后"),e("code",[t._v("git commit")]),t._v("就行了，或者一个快捷方法是使用命令"),e("code",[t._v("git commit -a")]),t._v("。")]),t._v(" "),e("p",[t._v("风险等级：无风险。")]),t._v(" "),e("p",[t._v("理由：显而易见。")]),t._v(" "),e("h4",{attrs:{id:"需求六-将history区的历史提交还原到work-dir中。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求六-将history区的历史提交还原到work-dir中。"}},[t._v("#")]),t._v(" 需求六，将"),e("code",[t._v("history")]),t._v("区的历史提交还原到"),e("code",[t._v("work dir")]),t._v("中。")]),t._v(" "),e("p",[t._v("这个场景，我说一个极端一点的例子：比如我从 GitHub 上"),e("code",[t._v("clone")]),t._v("了一个项目，然后乱改了一通代码，结果发现我写的代码根本跑不通，于是后悔了，干脆不改了，我想恢复成最初的模样，怎么办？")]),t._v(" "),e("p",[t._v("依然是使用"),e("code",[t._v("checkout")]),t._v("命令，但是和之前的使用方式有一些不同：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout HEAD "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nUpdated "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" paths from d480c4f\n")])])]),e("p",[t._v("这样，"),e("code",[t._v("work dir")]),t._v("和"),e("code",[t._v("stage")]),t._v("中所有的「修改」都会被撤销，恢复成"),e("code",[t._v("HEAD")]),t._v("指向的那个"),e("code",[t._v("history commit")]),t._v("。")]),t._v(" "),e("p",[t._v("注意，类似之前通过"),e("code",[t._v("stage")]),t._v("恢复"),e("code",[t._v("work dir")]),t._v("的"),e("code",[t._v("checkout")]),t._v("命令，这里撤销的也只是修改，新增的文件不会被撤销。")]),t._v(" "),e("p",[t._v("当然，只要找到任意一个"),e("code",[t._v("commit")]),t._v("的 HASH 值，"),e("code",[t._v("checkout")]),t._v("命令可就以将文件恢复成任一个"),e("code",[t._v("history commit")]),t._v("中的样子：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 2bdf04a some_test.go\nUpdated "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" path from 2bdf04a\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 前文的用法显示 update from index")]),t._v("\n")])])]),e("p",[t._v("比如，我改了某个测试文件，结果发现测试跑不过了，所以就把该文件恢复到了它能跑过的那个历史版本……")]),t._v(" "),e("p",[t._v("风险等级：高风险。")]),t._v(" "),e("p",[t._v("理由：这个操作会将指定文件在"),e("code",[t._v("work dir")]),t._v("的数据恢复成指定"),e("code",[t._v("commit")]),t._v("的样子，且会删除该文件在"),e("code",[t._v("stage")]),t._v("中的数据，都无法恢复，所以应该慎重使用。")]),t._v(" "),e("h3",{attrs:{id:"三、其他技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、其他技巧"}},[t._v("#")]),t._v(" 三、其他技巧")]),t._v(" "),e("h4",{attrs:{id:"需求一-合并多个commit。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求一-合并多个commit。"}},[t._v("#")]),t._v(" 需求一，合并多个"),e("code",[t._v("commit")]),t._v("。")]),t._v(" "),e("p",[t._v("比如说我本地从"),e("code",[t._v("17bd20c")]),t._v("到"),e("code",[t._v("HEAD")]),t._v("有多个"),e("code",[t._v("commit")]),t._v("，但我希望把他们合并成一个"),e("code",[t._v("commit")]),t._v("推到远程仓库，这时候就可以使用"),e("code",[t._v("reset")]),t._v("命令：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset 17bd20c\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'balabala'")]),t._v("\n")])])]),e("p",[t._v("回顾一下刚才说的"),e("code",[t._v("reset")]),t._v("命令的作用，相当于把 HEAD 移到了"),e("code",[t._v("17bd20c")]),t._v("这个"),e("code",[t._v("commit")]),t._v("，而且不会修改"),e("code",[t._v("work dir")]),t._v("中的数据，所以只要"),e("code",[t._v("add")]),t._v("再"),e("code",[t._v("commit")]),t._v("，就相当于把中间的多个"),e("code",[t._v("commit")]),t._v("合并到一个了。")]),t._v(" "),e("h4",{attrs:{id:"需求二-由于head指针的回退-导致有的commit在git-log命令中无法看到-怎么得到它们的-hash-值呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求二-由于head指针的回退-导致有的commit在git-log命令中无法看到-怎么得到它们的-hash-值呢"}},[t._v("#")]),t._v(" 需求二，由于"),e("code",[t._v("HEAD")]),t._v("指针的回退，导致有的"),e("code",[t._v("commit")]),t._v("在"),e("code",[t._v("git log")]),t._v("命令中无法看到，怎么得到它们的 Hash 值呢？")]),t._v(" "),e("p",[t._v("再重复一遍，只要你不乱动本地的"),e("code",[t._v(".git")]),t._v("文件夹，任何修改只要提交到"),e("code",[t._v("commit history")]),t._v("中，都永远不会丢失，看不到某些"),e("code",[t._v("commit")]),t._v("只是因为它们不是我们当前"),e("code",[t._v("HEAD")]),t._v("位置的「历史」提交，我们可以使用如下命令查看操作记录：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n")])])]),e("p",[t._v("比如"),e("code",[t._v("reset")]),t._v("，"),e("code",[t._v("checkout")]),t._v("等等关键操作都会在这里留下记录，所有"),e("code",[t._v("commit")]),t._v("的 Hash 值都能在这里找到，所以如果你发现有哪个"),e("code",[t._v("commit")]),t._v("突然找不到了，一定都可以在这里找到。")]),t._v(" "),e("h4",{attrs:{id:"需求三-怎么解决冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求三-怎么解决冲突"}},[t._v("#")]),t._v(" 需求三，怎么解决冲突？")]),t._v(" "),e("p",[t._v("记住，Git 虽然高大上，但也不要迷恋，一定要懂得借助先进的工具。")]),t._v(" "),e("p",[t._v("比较流行的代码编辑器或者 IDE 都会集成方便的可视化 Git 工具，至于解决冲突，可视化的表现方式不是比你在命令行里"),e("code",[t._v("git diff")]),t._v("看半天要清晰明了得多？只需要点点点就行了。")]),t._v(" "),e("p",[t._v("所以说，只要明白本文讲的这些基本操作，够你用的了，平时能用图形化工具就多用图形化工具，毕竟工具都是为人服务的。")])])}),[],!1,null,null,null);e.default=a.exports}}]);