(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{636:function(v,_,t){"use strict";t.r(_);var d=t(2),n=Object(d.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"c语言中的转义字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#c语言中的转义字符"}},[v._v("#")]),v._v(" C语言中的转义字符")]),v._v(" "),_("p",[_("strong",[v._v("简介")]),v._v("\n在字符集中，有一类字符具有这样的特性：当从键盘上输入这个字符时，显示器上就可以显示这个字符，即输入什么就显示什么。这类字符称为"),_("strong",[v._v("可显示字符")]),v._v("，如a、b、c、$、+和空格符等都是可显示字符。\n另一类字符却没有这种特性。它们或者在键盘上找不到对应的一个键(当然可以用特殊方式输入)，或者当按键以后不能显示键面上的字符。其实，这类字符是为控制作用而设计的，故称为"),_("strong",[v._v("控制字符")]),v._v("。\n在C语言中，"),_("strong",[v._v("构成字符常量的控制字符必须用转义字符表示")]),v._v("。转义字符是一种以''开头的字符。例如退格符用'\\b'表示，换行符用'\\n'表示。"),_("strong",[v._v("转义字符中的''表示它后面的字符已失去它原来的含义，转变成另外的特定含义")]),v._v("。反斜杠与其后面的字符一起构成一个特定的字符。\n转义字符是C语言中表示字符的一种特殊形式。转义字符以反斜杠''开头，后面跟"),_("strong",[v._v("一个字符或一个八进制或十六进制数")]),v._v("表示。转义字符具有特定的含义，不同于字符原有的意义，故称转义字符。\n通常使用转义字符表示ASCII码字符集中不可打印的控制字符和特定功能的字符，如用于表示字符常量的单撇号（'），用于表示字符串常量的双撇号（\"）和反斜杠（\\）等。例如，printf函数的格式串中用到的'\\n'就是一个转义字符，其意义是“回车换行”。转义字符主要用来表示那些用一般字符不便于表示的控制代码。下表是常用的转义字符及其含义：")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("转义字符")]),v._v(" "),_("th",[v._v("意义")]),v._v(" "),_("th",[v._v("ASCII码值（十进制）")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("\\a")]),v._v(" "),_("td",[v._v("响铃(BEL)")]),v._v(" "),_("td",[v._v("007")])]),v._v(" "),_("tr",[_("td",[v._v("\\b")]),v._v(" "),_("td",[v._v("退格(BS) ，将当前位置移到前一列")]),v._v(" "),_("td",[v._v("008")])]),v._v(" "),_("tr",[_("td",[v._v("\\f")]),v._v(" "),_("td",[v._v("换页(FF)，将当前位置移到下页开头")]),v._v(" "),_("td",[v._v("012")])]),v._v(" "),_("tr",[_("td",[v._v("\\n")]),v._v(" "),_("td",[v._v("换行(LF) ，将当前位置移到下一行开头")]),v._v(" "),_("td",[v._v("010")])]),v._v(" "),_("tr",[_("td",[v._v("\\r")]),v._v(" "),_("td",[v._v("回车(CR) ，将当前位置移到本行开头")]),v._v(" "),_("td",[v._v("013")])]),v._v(" "),_("tr",[_("td",[v._v("\\t")]),v._v(" "),_("td",[v._v("水平制表(HT) （跳到下一个TAB位置）")]),v._v(" "),_("td",[v._v("009")])]),v._v(" "),_("tr",[_("td",[v._v("\\v")]),v._v(" "),_("td",[v._v("垂直制表(VT)")]),v._v(" "),_("td",[v._v("011")])]),v._v(" "),_("tr",[_("td",[v._v("\\")]),v._v(" "),_("td",[v._v("代表一个反斜线字符''")]),v._v(" "),_("td",[v._v("092")])]),v._v(" "),_("tr",[_("td"),v._v(" "),_("td"),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("'")]),v._v(" "),_("td",[v._v("代表一个单引号（撇号）字符")]),v._v(" "),_("td",[v._v("039")])]),v._v(" "),_("tr",[_("td",[v._v('"')]),v._v(" "),_("td",[v._v("代表一个双引号字符")]),v._v(" "),_("td",[v._v("034")])]),v._v(" "),_("tr",[_("td",[v._v("\\0")]),v._v(" "),_("td",[v._v("空字符(NULL)")]),v._v(" "),_("td",[v._v("000")])]),v._v(" "),_("tr",[_("td",[v._v("\\ddd")]),v._v(" "),_("td",[v._v("1到3位八进制数所代表的任意字符")]),v._v(" "),_("td",[v._v("三位八进制")])]),v._v(" "),_("tr",[_("td",[v._v("\\xhh")]),v._v(" "),_("td",[v._v("1到2位十六进制所代表的任意字符")]),v._v(" "),_("td",[v._v("二位十六进制")])])])]),v._v(" "),_("p",[v._v("从表中可以看出，在C语言中有三种转义字符，它们是：一般转义字符、八进制转义字符和十六进制转义字符。\n"),_("strong",[v._v("一般转义字符")]),v._v("\n这种转义字符，虽然在形式上由两个字符组成，但只代表一个字符。常用的一般转义字符为：\n"),_("strong",[v._v("\\a  \\n  \\t  \\v  \\b  \\r  \\f  \\ ' \"")]),v._v("\n细心的读者可能已经发现，转义字符'\\'代表的反斜杠''、转义字符’\\’’代表的字符'''和转义字符'\"'代表的字符'\"'，其本身就是可显示字符，为什么还要对它转义呢？这是因为它们的原有的字符形式已作它用，其中单引号用作区分字符常量的括号，双引号用作区分字符串(下面将要介绍字符串)的括号，而反斜杠本身已用来表示转义字符的开头，因此必须对它们用转义字符重新声明。")]),v._v(" "),_("p",[_("strong",[v._v("八进制转义字符")]),v._v("\n它是由反斜杠''和随后的1～3个八进制数字构成的字符序列。例如，'\\60'、'\\101'、'\\141'分别表示字符'0'、'A'和'a'。因为字符'0'、'A'和'a'的ASCII码的八进制值分别为60、101和141。"),_("strong",[v._v("字符集中的所有字符都可以用八进制转义字符表示。如果你愿意，可以在八进制数字前面加上一个0来表示八进制转移字符。")])]),v._v(" "),_("p",[_("strong",[v._v("十六进制转义字符")]),v._v("\n它是由反斜杠''和字母x(或X)及随后的1～2个十六进制数字构成的字符序列。例如，'\\x30'、'\\x41'、'\\X61'分别表示字符'0'、'A'和'a'。因为字符'0'、'A'和'a'的ASCII码的十六进制值分别为0x30、0x41和0x61。可见，"),_("strong",[v._v("字符集中的所有字符都可以用十六进制转义字符表示。")])]),v._v(" "),_("p",[_("strong",[v._v("由上可知，使用八进制转义字符和十六进制转义字符，不仅可以表示控制字符，而且也可以表示可显示字符。但由于不同的计算机系统上采用的字符集可能不同，因此，为了能使所编写的程序可以方便地移植到其他的计算机系统上运行，程序中应少用这种形式的转义字符。")])]),v._v(" "),_("p",[_("strong",[v._v("使用转义字符时需要注意以下问题：")]),v._v("\n1)转义字符中只能使用小写字母，每个转义字符只能看作一个字符。\n2)\\v垂直制表和\\f换页符对屏幕没有任何影响，但会影响打印机执行响应操作。\n3)在C程序中，使用不可打印字符时，通常用转义字符表示。\n4)转义字符’\\0’表示空字符NULL，它的值是0。而字符'0'的ASCII码值是48。因此，空字符’\\0’不是字符0。另外，空字符不等于空格字符，空格字符的ASCII码值为32而不是0。编程序时，读者应当区别清楚。\n5) 如果反斜线之后的字符和它不构成转义字符，则’\\’不起转义作用将被忽略。")])])}),[],!1,null,null,null);_.default=n.exports}}]);