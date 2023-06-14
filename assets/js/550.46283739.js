(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{982:function(t,e,a){"use strict";a.r(e);var s=a(2),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_2-3-git-基础-查看提交历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-git-基础-查看提交历史"}},[t._v("#")]),t._v(" 2.3 Git 基础 - 查看提交历史")]),t._v(" "),e("h2",{attrs:{id:"查看提交历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看提交历史"}},[t._v("#")]),t._v(" 查看提交历史")]),t._v(" "),e("p",[t._v("在提交了若干更新，又或者克隆了某个项目之后，你也许想回顾下提交历史。 完成这个任务最简单而又有效的工具是 "),e("code",[t._v("git log")]),t._v(" 命令。")]),t._v(" "),e("p",[t._v("我们使用一个非常简单的 “simplegit” 项目作为示例。 运行下面的命令获取该项目：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/schacon/simplegit-progit\n")])])]),e("p",[t._v("当你在此项目中运行 "),e("code",[t._v("git log")]),t._v(" 命令时，可以看到下面的输出：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\ncommit ca82a6dff817ec66f44342007202690a93763949\nAuthor: Scott Chacon "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gee-mail.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Mon Mar "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":52:11 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0700")]),t._v("\n\n    changed the version number\n\ncommit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7\nAuthor: Scott Chacon "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gee-mail.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat Mar "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":40:33 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0700")]),t._v("\n\n    removed unnecessary "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n\ncommit a11bef06a3f659402fe7563abf99ad00de2209e6\nAuthor: Scott Chacon "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gee-mail.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat Mar "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(":31:28 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0700")]),t._v("\n\n    first commit\n")])])]),e("p",[t._v("不传入任何参数的默认情况下，"),e("code",[t._v("git log")]),t._v(" 会按时间先后顺序列出所有的提交，最近的更新排在最上面。 正如你所看到的，这个命令会列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明。")]),t._v(" "),e("p",[e("code",[t._v("git log")]),t._v(" 有许多选项可以帮助你搜寻你所要找的提交， 下面我们会介绍几个最常用的选项。")]),t._v(" "),e("p",[t._v("其中一个比较有用的选项是 "),e("code",[t._v("-p")]),t._v(" 或 "),e("code",[t._v("--patch")]),t._v(" ，它会显示每次提交所引入的差异（按 "),e("strong",[t._v("补丁")]),t._v(" 的格式输出）。 你也可以限制显示的日志条目数量，例如使用 "),e("code",[t._v("-2")]),t._v(" 选项来只显示最近的两次提交：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-2")]),t._v("\ncommit ca82a6dff817ec66f44342007202690a93763949\nAuthor: Scott Chacon "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gee-mail.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Mon Mar "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":52:11 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0700")]),t._v("\n\n    changed the version number\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--git")]),t._v(" a/Rakefile b/Rakefile\nindex a874b73"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("8f94139 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v("\n--- a/Rakefile\n+++ b/Rakefile\n@@ -5,7 +5,7 @@ require "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rake/gempackagetask'")]),t._v("\n spec "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Gem::Specification.new "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n     s.platform  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("   Gem::Platform::RUBY\n     s.name      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"simplegit"')]),t._v("\n-    s.version   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1.0"')]),t._v("\n+    s.version   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1.1"')]),t._v("\n     s.author    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Scott Chacon"')]),t._v("\n     s.email     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schacon@gee-mail.com"')]),t._v("\n     s.summary   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A simple gem for using Git in Ruby code."')]),t._v("\n\ncommit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7\nAuthor: Scott Chacon "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gee-mail.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat Mar "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":40:33 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0700")]),t._v("\n\n    removed unnecessary "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--git")]),t._v(" a/lib/simplegit.rb b/lib/simplegit.rb\nindex a0a60ae"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("47c6340 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v("\n--- a/lib/simplegit.rb\n+++ b/lib/simplegit.rb\n@@ -18,8 +18,3 @@ class SimpleGit\n     end\n\n end\n-\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" __FILE__\n-  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SimpleGit.new\n-  puts git.show\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-end")]),t._v("\n")])])]),e("p",[t._v("该选项除了显示基本信息之外，还附带了每次提交的变化。 当进行代码审查，或者快速浏览某个搭档的提交所带来的变化的时候，这个参数就非常有用了。 你也可以为 "),e("code",[t._v("git log")]),t._v(" 附带一系列的总结性选项。 比如你想看到每次提交的简略统计信息，可以使用 "),e("code",[t._v("--stat")]),t._v(" 选项：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--stat")]),t._v("\ncommit ca82a6dff817ec66f44342007202690a93763949\nAuthor: Scott Chacon "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gee-mail.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Mon Mar "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":52:11 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0700")]),t._v("\n\n    changed the version number\n\n Rakefile "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" +-\n "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" changed, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" insertion"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("+"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" deletion"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncommit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7\nAuthor: Scott Chacon "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gee-mail.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat Mar "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":40:33 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0700")]),t._v("\n\n    removed unnecessary "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n\n lib/simplegit.rb "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" -----\n "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" changed, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" deletions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncommit a11bef06a3f659402fe7563abf99ad00de2209e6\nAuthor: Scott Chacon "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gee-mail.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Sat Mar "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(":31:28 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0700")]),t._v("\n\n    first commit\n\n README           "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" ++++++\n Rakefile         "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(" +++++++++++++++++++++++\n lib/simplegit.rb "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" +++++++++++++++++++++++++\n "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" files changed, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("54")]),t._v(" insertions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("+"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("正如你所看到的，"),e("code",[t._v("--stat")]),t._v(" 选项在每次提交的下面列出所有被修改过的文件、有多少文件被修改了以及被修改过的文件的哪些行被移除或是添加了。 在每次提交的最后还有一个总结。")]),t._v(" "),e("p",[t._v("另一个非常有用的选项是 "),e("code",[t._v("--pretty")]),t._v("。 这个选项可以使用不同于默认格式的方式展示提交历史。 这个选项有一些内建的子选项供你使用。 比如 "),e("code",[t._v("oneline")]),t._v(" 会将每个提交放在一行显示，在浏览大量的提交时非常有用。 另外还有 "),e("code",[t._v("short")]),t._v("，"),e("code",[t._v("full")]),t._v(" 和 "),e("code",[t._v("fuller")]),t._v(" 选项，它们展示信息的格式基本一致，但是详尽程度不一：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--pretty")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\nca82a6dff817ec66f44342007202690a93763949 changed the version number\n085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 removed unnecessary "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\na11bef06a3f659402fe7563abf99ad00de2209e6 first commit\n")])])]),e("p",[t._v("最有意思的是 "),e("code",[t._v("format")]),t._v(" ，可以定制记录的显示格式。 这样的输出对后期提取分析格外有用——因为你知道输出的格式不会随着 Git 的更新而发生改变：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--pretty")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("format:"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%h - %an, %ar : %s"')]),t._v("\nca82a6d - Scott Chacon, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" years ago "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" changed the version number\n085bb3b - Scott Chacon, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" years ago "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" removed unnecessary "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\na11bef0 - Scott Chacon, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" years ago "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" first commit\n")])])]),e("p",[e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/pretty_format",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("git log --pretty=format")]),t._v(" 常用的选项"),e("OutboundLink")],1),t._v(" 列出了 "),e("code",[t._v("format")]),t._v(" 接受的常用格式占位符的写法及其代表的意义。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("选项")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%H")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("提交的完整哈希值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%h")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("提交的简写哈希值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%T")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("树的完整哈希值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%t")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("树的简写哈希值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%P")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("父提交的完整哈希值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%p")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("父提交的简写哈希值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%an")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("作者名字")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%ae")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("作者的电子邮件地址")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%ad")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("作者修订日期（可以用 --date=选项 来定制格式）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%ar")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("作者修订日期，按多久以前的方式显示")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%cn")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("提交者的名字")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%ce")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("提交者的电子邮件地址")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%cd")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("提交日期")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%cr")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("提交日期（距今多长时间）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("%s")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("提交说明")])])])]),t._v(" "),e("p",[t._v("你一定奇怪 "),e("em",[t._v("作者")]),t._v(" 和 "),e("em",[t._v("提交者")]),t._v(" 之间究竟有何差别， 其实作者指的是实际作出修改的人，提交者指的是最后将此工作成果提交到仓库的人。 所以，当你为某个项目发布补丁，然后某个核心成员将你的补丁并入项目时，你就是作者，而那个核心成员就是提交者。 我们会在 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/ch05-distributed-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式 Git"),e("OutboundLink")],1),t._v(" 再详细介绍两者之间的细微差别。")]),t._v(" "),e("p",[t._v("当 "),e("code",[t._v("oneline")]),t._v(" 或 "),e("code",[t._v("format")]),t._v(" 与另一个 "),e("code",[t._v("log")]),t._v(" 选项 "),e("code",[t._v("--graph")]),t._v(" 结合使用时尤其有用。 这个选项添加了一些 ASCII 字符串来形象地展示你的分支、合并历史：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--pretty")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("format:"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%h %s"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--graph")]),t._v("\n* 2d3acf9 ignore errors from SIGCHLD on "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("trap")]),t._v("\n*  5e3ee11 Merge branch "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master'")]),t._v(" of git://github.com/dustin/grit\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * 420eac9 Added a method "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" getting the current branch.\n* "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 30e367c "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" code and tests\n* "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 5a09431 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" protection to grit\n* "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" e1193f8 support "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" heads with slashes "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" them\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("/\n* d6016bc require "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" xmlschema\n*  11d191e Merge branch "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'defunkt'")]),t._v(" into "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v("\n")])])]),e("p",[t._v("这种输出类型会在我们下一章学完分支与合并以后变得更加有趣。")]),t._v(" "),e("p",[t._v("以上只是简单介绍了一些 "),e("code",[t._v("git log")]),t._v(" 命令支持的选项。 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/log_options",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("git log")]),t._v(" 的常用选项"),e("OutboundLink")],1),t._v(" 列出了我们目前涉及到的和没涉及到的选项，以及它们是如何影响 log 命令的输出的：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("选项")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("-p")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("按补丁格式显示每个提交引入的差异。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--stat")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示每次提交的文件修改统计信息。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--shortstat")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("只显示 --stat 中最后的行数修改添加移除统计。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--name-only")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅在提交信息后显示已修改的文件清单。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--name-status")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示新增、修改、删除的文件清单。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--abbrev-commit")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅显示 SHA-1 校验和所有 40 个字符中的前几个字符。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--relative-date")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("使用较短的相对时间而不是完整格式显示日期（比如“2 weeks ago”）。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--graph")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在日志旁以 ASCII 图形显示分支与合并历史。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--pretty")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("使用其他格式显示历史提交信息。可用的选项包括 oneline、short、full、fuller 和 format（用来定义自己的格式）。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--oneline")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--pretty=oneline --abbrev-commit")]),t._v(" 合用的简写。")])])])]),t._v(" "),e("h3",{attrs:{id:"限制输出长度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#限制输出长度"}},[t._v("#")]),t._v(" 限制输出长度")]),t._v(" "),e("p",[t._v("除了定制输出格式的选项之外，"),e("code",[t._v("git log")]),t._v(" 还有许多非常实用的限制输出长度的选项，也就是只输出一部分的提交。 之前你已经看到过 "),e("code",[t._v("-2")]),t._v(" 选项了，它只会显示最近的两条提交， 实际上，你可以使用类似 "),e("code",[t._v("-<n>")]),t._v(" 的选项，其中的 "),e("code",[t._v("n")]),t._v(" 可以是任何整数，表示仅显示最近的 "),e("code",[t._v("n")]),t._v(" 条提交。 不过实践中这个选项不是很常用，因为 Git 默认会将所有的输出传送到分页程序中，所以你一次只会看到一页的内容。")]),t._v(" "),e("p",[t._v("但是，类似 "),e("code",[t._v("--since")]),t._v(" 和 "),e("code",[t._v("--until")]),t._v(" 这种按照时间作限制的选项很有用。 例如，下面的命令会列出最近两周的所有提交：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--since")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".weeks\n")])])]),e("p",[t._v("该命令可用的格式十分丰富——可以是类似 "),e("code",[t._v('"2008-01-15"')]),t._v(" 的具体的某一天，也可以是类似 "),e("code",[t._v('"2 years 1 day 3 minutes ago"')]),t._v(" 的相对日期。")]),t._v(" "),e("p",[t._v("还可以过滤出匹配指定条件的提交。 用 "),e("code",[t._v("--author")]),t._v(" 选项显示指定作者的提交，用 "),e("code",[t._v("--grep")]),t._v(" 选项搜索提交说明中的关键字。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Note")]),t._v(" "),e("th",[t._v("你可以指定多个 "),e("code",[t._v("--author")]),t._v(" 和 "),e("code",[t._v("--grep")]),t._v(" 搜索条件，这样会只输出 "),e("strong",[t._v("任意")]),t._v(" 匹配 "),e("code",[t._v("--author")]),t._v(" 模式和 "),e("code",[t._v("--grep")]),t._v(" 模式的提交。然而，如果你添加了 "),e("code",[t._v("--all-match")]),t._v(" 选项， 则只会输出 "),e("strong",[t._v("所有")]),t._v(" 匹配 "),e("code",[t._v("--grep")]),t._v(" 模式的提交。")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td")])])]),t._v(" "),e("p",[t._v("另一个非常有用的过滤器是 "),e("code",[t._v("-S")]),t._v("（俗称“pickaxe”选项，取“用鹤嘴锄在土里捡石头”之意）， 它接受一个字符串参数，并且只会显示那些添加或删除了该字符串的提交。 假设你想找出添加或删除了对某一个特定函数的引用的提交，可以调用：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-S")]),t._v(" function_name\n")])])]),e("p",[t._v("最后一个很实用的 "),e("code",[t._v("git log")]),t._v(" 选项是路径（path）， 如果只关心某些文件或者目录的历史提交，可以在 git log 选项的最后指定它们的路径。 因为是放在最后位置上的选项，所以用两个短划线（--）隔开之前的选项和后面限定的路径名。")]),t._v(" "),e("p",[t._v("在 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/limit_options",target:"_blank",rel:"noopener noreferrer"}},[t._v("限制 "),e("code",[t._v("git log")]),t._v(" 输出的选项"),e("OutboundLink")],1),t._v(" 中列出了常用的选项")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("选项")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("-<n>")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅显示最近的 n 条提交。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--since")]),t._v(", "),e("code",[t._v("--after")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅显示指定时间之后的提交。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--until")]),t._v(", "),e("code",[t._v("--before")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅显示指定时间之前的提交。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--author")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅显示作者匹配指定字符串的提交。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--committer")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅显示提交者匹配指定字符串的提交。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("--grep")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅显示提交说明中包含指定字符串的提交。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("-S")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅显示添加或删除内容匹配指定字符串的提交。")])])])]),t._v(" "),e("p",[t._v("来看一个实际的例子，如果要在 Git 源码库中查看 Junio Hamano 在 2008 年 10 月其间， 除了合并提交之外的哪一个提交修改了测试文件，可以使用下面的命令：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--pretty")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%h - %s"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--author")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Junio C Hamano'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--since")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2008-10-01"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--before")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2008-11-01"')]),t._v(" --no-merges -- t/\n5610e3b - Fix testcase failure when extended attributes are "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" use\nacd3b9e - Enhance hold_lock_file_for_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("update,append"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" API\nf563754 - demonstrate breakage of detached checkout with symbolic "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" HEAD\nd1a43f2 - reset --hard/read-tree "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--reset")]),t._v(" -u: remove unmerged new paths\n51a94af - Fix "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"checkout --track -b newbranch"')]),t._v(" on detached HEAD\nb0ad11e - pull: allow "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git pull origin '),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$something")]),t._v(":"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$current_branch")]),t._v('"')]),t._v(" into an unborn branch\n")])])]),e("p",[t._v("在近 40000 条提交中，上面的输出仅列出了符合条件的 6 条记录。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Tip")]),t._v(" "),e("th",[t._v("隐藏合并提交按照你代码仓库的工作流程，记录中可能有为数不少的合并提交，它们所包含的信息通常并不多。 为了避免显示的合并提交弄乱历史记录，可以为 "),e("code",[t._v("log")]),t._v(" 加上 "),e("code",[t._v("--no-merges")]),t._v(" 选项。")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E8%AE%B0%E5%BD%95%E6%AF%8F%E6%AC%A1%E6%9B%B4%E6%96%B0%E5%88%B0%E4%BB%93%E5%BA%93",target:"_blank",rel:"noopener noreferrer"}},[t._v("prev"),e("OutboundLink")],1),t._v(" | "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%92%A4%E6%B6%88%E6%93%8D%E4%BD%9C",target:"_blank",rel:"noopener noreferrer"}},[t._v("next"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);