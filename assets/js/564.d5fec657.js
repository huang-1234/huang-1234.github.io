(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{995:function(s,i,e){"use strict";e.r(i);var r=e(2),l=Object(r.a)({},(function(){var s=this,i=s._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[i("h2",{attrs:{id:"win内存管理方面"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#win内存管理方面"}},[s._v("#")]),s._v(" win内存管理方面")]),s._v(" "),i("h1",{attrs:{id:"hiberfil-sys和pagefile-sys"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hiberfil-sys和pagefile-sys"}},[s._v("#")]),s._v(" hiberfil.sys和pagefile.sys")]),s._v(" "),i("p",[s._v("Windows系统，在C盘发现两个很大的文件：hiberfil.sys和 pagefile.sys ，这两个文件是干什么用的，能否删除？")]),s._v(" "),i("p",[s._v("A：“hiberfil.sys”是系统休眠文件，其大小和电脑的物理内存一样大，它可以删除（但不能手动删除），只要在“控制面板”中打开“电源选项”，之后在电源管理对话框的“休眠”标签下，去掉“启用休眠”前的勾，休眠文件就会自动删除。")]),s._v(" "),i("p",[s._v("“pagefile.sys”是页面交换文件，这个文件不能删除，不过我们可以改变其大小和存放位置：右击“我的电脑/属性”，然后在对话框的“高级” 标签下单击“性能”下的“设置”按钮，在”性能选项”对话框中切换到“高级”标签下，再单击“虚拟内存”下的“更改”按钮，即可根据需要更改页面文件的大小——先选中C盘，然后选“无分页文件”，再点“设置”按钮；之后选中要生成该文件的盘符，在下面点选“自定义大小”并输入合适的数值，此数值通常为物理内存的1.5倍，再单击“设置”，最后确定，重新启动电脑，该文件就在其他分区上了。")]),s._v(" "),i("h1",{attrs:{id:"win10优化-系统文件hiberfil-sys介绍"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#win10优化-系统文件hiberfil-sys介绍"}},[s._v("#")]),s._v(" Win10优化：系统文件Hiberfil.sys介绍")]),s._v(" "),i("p",[s._v("一、Hiberfil.sys介绍")]),s._v(" "),i("p",[s._v("Hiberfil.sys文件位于系统盘的根目录下，它是 win10 休眠功能（Hibernation）中将内存数据与会话数据保存到电脑硬盘、以便于win10计算机断电重新启动后可以快速恢复会话所需的内存镜像文件。在离开计算机一段时间后，计算机将会进入休眠状态。计算机休眠文件就是hiberfil.sys，一般情况它会占用很大存储空间，有些用户不知道win10 中的Hiberfil.sys文件可不可以删除，应该怎么删除Hiberfil.sys文件？今天下面小编给大家提供删除Hiberfil.sys文件的方法。")]),s._v(" "),i("p",[s._v("二、删除Hiberfil.sys文件的步骤")]),s._v(" "),i("p",[s._v("1、如何找到Hiberfil.sys")]),s._v(" "),i("p",[s._v("打开我的电脑C盘→点击查看文件夹选项→弹窗切换查看标签页→点击应用")]),s._v(" "),i("p",[s._v("如下图：")]),s._v(" "),i("p",[s._v("2、通过管理员权限的cmd命令（注意要以管理员的身份运行）")]),s._v(" "),i("p",[s._v("3、管理员cmd命令窗口中输入：powercfg -h off，就可关闭休眠功能，同时hiberfil.sys 休眠文件也会自动删除。")]),s._v(" "),i("p",[s._v("开启休眠的命令：powercfg -h on")]),s._v(" "),i("p",[s._v("个人建议：建议如果你的电脑系统盘空间足够，建议还是保留hiberfil.sys 休眠文件。这样也便于每次电脑重启可以快速恢复到会话状态。如果你的系统盘的确没有磁盘空间了，可以临时采用这个方式来处理。当然磁盘空间不足还有很多方式 比如：删掉不必要的软件、Windows.old等备份文件的清理也是很有效的，这个就不详细介绍了，大家可以自行在网上查一下。")])])}),[],!1,null,null,null);i.default=l.exports}}]);