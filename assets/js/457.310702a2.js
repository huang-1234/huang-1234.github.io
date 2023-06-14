(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{889:function(t,e,s){"use strict";s.r(e);var a=s(2),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"render阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render阶段"}},[t._v("#")]),t._v(" Render阶段")]),t._v(" "),e("p",[t._v("在本节正式开始前，让我们复习下这一章到目前为止所学的。")]),t._v(" "),e("p",[e("code",[t._v("Renderer")]),t._v("工作的阶段被称为"),e("code",[t._v("commit")]),t._v("阶段。"),e("code",[t._v("commit")]),t._v("阶段可以分为三个子阶段：")]),t._v(" "),e("ul",[e("li",[t._v("before mutation阶段（执行"),e("code",[t._v("DOM")]),t._v("操作前）")]),t._v(" "),e("li",[t._v("mutation阶段（执行"),e("code",[t._v("DOM")]),t._v("操作）")]),t._v(" "),e("li",[t._v("layout阶段（执行"),e("code",[t._v("DOM")]),t._v("操作后）")])]),t._v(" "),e("p",[t._v("本节我们看看"),e("code",[t._v("before mutation阶段")]),t._v("（执行"),e("code",[t._v("DOM")]),t._v("操作前）都做了什么。")]),t._v(" "),e("h2",{attrs:{id:"概览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),e("p",[e("code",[t._v("before mutation阶段")]),t._v("的代码很短，整个过程就是遍历"),e("code",[t._v("effectList")]),t._v("并调用"),e("code",[t._v("commitBeforeMutationEffects")]),t._v("函数处理。")]),t._v(" "),e("blockquote",[e("p",[t._v("这部分"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2104-L2127",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码在这里 (opens new window)"),e("OutboundLink")],1),t._v("。为了增加可读性，示例代码中删除了不相关的逻辑")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存之前的优先级，以同步优先级执行，执行完毕后恢复之前优先级")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" previousLanePriority "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentUpdateLanePriority")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCurrentUpdateLanePriority")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SyncLanePriority"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将当前上下文标记为CommitContext，作为commit阶段的标志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevExecutionContext "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" executionContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexecutionContext "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|=")]),t._v(" CommitContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理focus状态")]),t._v("\nfocusedInstanceHandle "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepareForCommit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("containerInfo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nshouldFireAfterActiveInstanceBlur "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// beforeMutation阶段的主函数")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitBeforeMutationEffects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finishedWork"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfocusedInstanceHandle "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("我们重点关注"),e("code",[t._v("beforeMutation")]),t._v("阶段的主函数"),e("code",[t._v("commitBeforeMutationEffects")]),t._v("做了什么。")]),t._v(" "),e("h2",{attrs:{id:"commitbeforemutationeffects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commitbeforemutationeffects"}},[t._v("#")]),t._v(" commitBeforeMutationEffects")]),t._v(" "),e("p",[t._v("大体代码逻辑：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitBeforeMutationEffects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextEffect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" current "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("shouldFireAfterActiveInstanceBlur "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" focusedInstanceHandle "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...focus blur相关")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" effectTag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effectTag"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用getSnapshotBeforeUpdate")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("effectTag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Snapshot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" NoEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitBeforeMutationEffectOnFiber")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调度useEffect")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("effectTag "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Passive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" NoEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("rootDoesHavePassiveEffects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rootDoesHavePassiveEffects "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleCallback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NormalSchedulerPriority"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushPassiveEffects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    nextEffect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextEffect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("整体可以分为三部分：")]),t._v(" "),e("ol",[e("li",[t._v("处理"),e("code",[t._v("DOM节点")]),t._v("渲染/删除后的 "),e("code",[t._v("autoFocus")]),t._v("、"),e("code",[t._v("blur")]),t._v(" 逻辑。")]),t._v(" "),e("li",[t._v("调用"),e("code",[t._v("getSnapshotBeforeUpdate")]),t._v("生命周期钩子。")]),t._v(" "),e("li",[t._v("调度"),e("code",[t._v("useEffect")]),t._v("。")])]),t._v(" "),e("p",[t._v("我们讲解下2、3两点。")]),t._v(" "),e("h2",{attrs:{id:"调用getsnapshotbeforeupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调用getsnapshotbeforeupdate"}},[t._v("#")]),t._v(" 调用getSnapshotBeforeUpdate")]),t._v(" "),e("p",[e("code",[t._v("commitBeforeMutationEffectOnFiber")]),t._v("是"),e("code",[t._v("commitBeforeMutationLifeCycles")]),t._v("的别名。")]),t._v(" "),e("p",[t._v("在该方法内会调用"),e("code",[t._v("getSnapshotBeforeUpdate")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("你可以在"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L222",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里 (opens new window)"),e("OutboundLink")],1),t._v("看到这段逻辑")])]),t._v(" "),e("p",[t._v("从"),e("code",[t._v("React")]),t._v("v16开始，"),e("code",[t._v("componentWillXXX")]),t._v("钩子前增加了"),e("code",[t._v("UNSAFE_")]),t._v("前缀。")]),t._v(" "),e("p",[t._v("究其原因，是因为"),e("code",[t._v("Stack Reconciler")]),t._v("重构为"),e("code",[t._v("Fiber Reconciler")]),t._v("后，"),e("code",[t._v("render阶段")]),t._v("的任务可能中断/重新开始，对应的组件在"),e("code",[t._v("render阶段")]),t._v("的生命周期钩子（即"),e("code",[t._v("componentWillXXX")]),t._v("）可能触发多次。")]),t._v(" "),e("p",[t._v("这种行为和"),e("code",[t._v("React")]),t._v("v15不一致，所以标记为"),e("code",[t._v("UNSAFE_")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("更详细的解释参照"),e("a",{attrs:{href:"https://juejin.im/post/6847902224287285255#comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里(opens new window)"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("为此，"),e("code",[t._v("React")]),t._v("提供了替代的生命周期钩子"),e("code",[t._v("getSnapshotBeforeUpdate")]),t._v("。")]),t._v(" "),e("p",[t._v("我们可以看见，"),e("code",[t._v("getSnapshotBeforeUpdate")]),t._v("是在"),e("code",[t._v("commit阶段")]),t._v("内的"),e("code",[t._v("before mutation阶段")]),t._v("调用的，由于"),e("code",[t._v("commit阶段")]),t._v("是同步的，所以不会遇到多次调用的问题。")])])}),[],!1,null,null,null);e.default=n.exports}}]);