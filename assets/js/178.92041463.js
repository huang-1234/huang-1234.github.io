(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{615:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linux内核学习笔记-十一-内核同步方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux内核学习笔记-十一-内核同步方法"}},[t._v("#")]),t._v(" Linux内核学习笔记(十一)内核同步方法")]),t._v(" "),a("p",[t._v("(自旋锁, 信号量, 互斥锁, 完成变量, 顺序锁, 禁止抢占)")]),t._v(" "),a("h2",{attrs:{id:"原子操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原子操作"}},[t._v("#")]),t._v(" 原子操作")]),t._v(" "),a("p",[t._v("Linux内核提供了多种同步机制, 这些机制本质上都是通过原子操作来实现的. 原子操作可以保证指令以原子方式执行, 不会被中途打断(中断也不会打断一个指令, 处理器只有在当前指令完成后才会去处理中断). 内核提供了两套原子操作的接口, 一套用于整数原子操作, 一套用于进行位原子操作. 这些接口的实现是和架构相关的, Linux系统支持的所有架构都实现了这些接口. 大部分架构为简单的算术运算提供了原子版本的指令. 有些架构缺乏直接的原子操作指令, 但是提供了锁内存总线的命令来锁定内存总线, 确保其他可能修改内存的操作无法同时执行. 有些操作天生就是原子指令, 比如读取一个word大小的变量, 有些操作不是原子指正, 比如对整数加1, x86架构中提供了lock指令前缀, 用于锁定特定内存地址, 确保在多处理器系统中能够互斥地使用这个内存地址, 阻止其他处理器在当前处理器的lock前缀的指令执行期间访问锁定的内存地址, 从而保证原子性.")]),t._v(" "),a("h3",{attrs:{id:"整数的原子操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整数的原子操作"}},[t._v("#")]),t._v(" 整数的原子操作")]),t._v(" "),a("p",[t._v("linux使用atomic_t类型来表示用于原子操作的整数, 这样可以确保原子操作函数只接受原子整数变量, 同时确保原子整数变量不会被传给其他函数, 此外atomic_t类型可以屏蔽不同架构的差异.32bit机器和64bit机器中的atomic_t类型都是32bit, 64bit机器还提供了64bit的版本atomic64_t. 下面只讨论32bit的atomic_t, 其定义如下:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("atomic_t")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("volatile声明告诉编译器不要对这个值的访问进行优化, 从而确保每次原子操作获得的都是正确的内存地址, 而不是一个别名.")]),t._v(" "),a("p",[t._v("下表列举了部分整数的原子操作方法, 定义在<asm/atomic.h>中")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("原子操作函数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("功能")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ATOMIC_INIT(int i)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("At declaration, initialize to i.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("int atomic_read(atomic_t *v)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically read the integer value of v.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("void atomic_set(atomic_t *v, int i)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically set v equal to i.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("void atomic_add(int i, atomic_t *v)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically add i to v.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("void atomic_sub(int i, atomic_t *v)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically subtract i from v.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("void atomic_inc(atomic_t *v)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically add one to v.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("void atomic_dec(atomic_t *v)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically subtract one from v.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("int atomic_sub_and_test(int i, atomic_t *v)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically subtract i from v and return true if the result is zero; otherwise false")])])])]),t._v(" "),a("p",[t._v("下面是几个use case:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("atomic_t")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义一个原子整数变量v")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("atomic_t")]),t._v(" u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ATOMIC_INIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义一个原子整数变量u，并将其初始化为0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("atomic_set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将v设置为4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("atomic_add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给v加2，v变为6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("atomic_inc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给v加1，v变为7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("d\\n”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("atomic_read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将原子整数转化成普通整型，并打印，将打印7")]),t._v("\n")])])]),a("h3",{attrs:{id:"位的原子操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位的原子操作"}},[t._v("#")]),t._v(" 位的原子操作")]),t._v(" "),a("p",[t._v("和普通的位操作类似, 只是需要使用原子操作函数, 不能用位操作符, 下表列出了位原子操作的函数:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("原子操作函数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("功能")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("void set_bit(int nr, void *addr)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically set the nr-th bit starting from addr.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("void clear_bit(int nr, void *addr)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically clear the nr-th bit starting from addr.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("void change_bit(int nr, void *addr)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically flip the value of the nr-th bit starting from addr.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("int test_and_set_bit(int nr, void *addr)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically set the nr-th bit starting from addr and return the previous value.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("int test_and_clear_bit(int nr, void *addr)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically clear the nr-th bit starting from addr and return the previous value.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("int test_and_change_bit(int nr, void *addr)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically flip the nr-th bit starting from addr and return the previous value.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("int test_bit(int nr, void *addr)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Atomically return the value of the nrth bit starting from addr.")])])])]),t._v(" "),a("p",[t._v("下面是几个use case:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//位原子操作没有自定义类型，也不限制使用类型，不限制变量长度，因为就是多个bit而已。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" word "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_bit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将word的bit 0置为1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_bit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将word的bit 1置为1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("ul\\n”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印结果是3，bit为从最低有效位开始计算位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear_bit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将word的bit 1置为0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("change_bit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//反转word的bit 0，因为前面将bit 0置为了1，所以这里反转编程了0")]),t._v("\nword "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这个也是合法的，但是不是原子操作，就是普通的C语言赋值。")]),t._v("\n")])])]),a("h2",{attrs:{id:"自旋锁-spin-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自旋锁-spin-lock"}},[t._v("#")]),t._v(" 自旋锁(Spin Lock)")]),t._v(" "),a("p",[t._v("自旋锁是一种只能同时被一个线程持有的锁. 如果一个线程试图获得一个已经被持有的自旋锁, 这个线程就会忙循环(busy loops, 即自旋)等待, 直到该锁可用. 如果自旋锁没有被持有, 线程就可以立刻获得这个锁并继续执行. 自旋锁可以防止多个线程同时进入临界区(critical region).")]),t._v(" "),a("p",[t._v("因为已经被持有的自旋锁会使得请求它的线程一直忙循环等待, 所以自旋锁不应该被长时间持有. 一个替代方法是让无法获得请求的自旋锁的线程进入睡眠, 当自旋锁可用时再唤醒线程. 这个方法虽然避免了忙等待, 但是也带来了额外的开销: 换入和换出时的上下文切换开销. 自旋锁的优势在于如果等待时间短, 开销就比两次上下文开销更小了.")]),t._v(" "),a("p",[t._v("持有自旋锁的线程不会被抢占(注意这里是说抢占preemption, 不是中断, 中断还是可以正常中断的), 内核提供了可以禁用中断的自旋锁操作函数.")]),t._v(" "),a("p",[t._v("因为自旋锁是忙等待, 不会进入睡眠, 所以自旋锁可以在中断上下文中使用.")]),t._v(" "),a("p",[t._v("Linux提供了多种对自旋锁的操作函数, 见下表:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("操作函数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("功能描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("spin_lock()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Acquires given lock")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("spin_lock_irq()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Disables local interrupts and acquires given lock")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("spin_lock_irqsave()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Saves current state of local interrupts, disables local interrupts, and acquires given lock")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("spin_unlock()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Releases given lock")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("spin_unlock_irq()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Releases given lock and enables local interrupts")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("spin_unlock_irqrestore()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Releases given lock and restores local interrupts to given previous state")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("spin_lock_init()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Dynamically initializes given spinlock_t")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("spin_trylock()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tries to acquire given lock; if unavailable, returns nonzero")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("spin_is_locked()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Returns nonzero if the given lock is currently acquired, otherwise it returns zero")])])])]),t._v(" "),a("h3",{attrs:{id:"自旋锁和下半部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自旋锁和下半部"}},[t._v("#")]),t._v(" 自旋锁和下半部")]),t._v(" "),a("p",[t._v("因为下半部可能抢占进程上下文的代码, 所以如果进程上下文和下半部有共享数据, 那么必须要禁用下半部和使用锁来保护进程上下文的数据. 类似的, 因为一个中断处理程序有可能抢占下半部, 所以如果下半部和中断处理程序有共享数据, 那么必须要禁用中断和使用锁来保护下半部的数据. 软中断中的数据如果是共享的(哪怕是同类型的软中断之间的共享), 那么就需要使用锁来保护数据. 因为软中断不会抢占软中断, 所以在软中断中没有必要禁用下半部.")]),t._v(" "),a("h2",{attrs:{id:"信号量-semaphore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信号量-semaphore"}},[t._v("#")]),t._v(" 信号量(Semaphore)")]),t._v(" "),a("p",[t._v("信号量是一种睡眠锁, 当任务请求的信号量无法获得时, 就会让任务进入等待队列并且让任务睡眠. 当信号量可以获得时, 等待队列中的一个任务就会被唤醒并获得信号量. 信号量因为不需要像自旋锁那样忙等待, 所以提高了处理器的利用率, 但是信号量带来了额外的上下文切换开销, 如果任务只持有锁很短的时间, 那么将进程换入和换出的两次上下文切换开销可能就超过忙等待的开销了, 这种情况下更适合使用自旋锁. 此外, 信号量不会和自旋锁一样禁用抢占, 所以持有信号量的代码是可以被抢占的.")]),t._v(" "),a("p",[t._v("信号量另一个重要特性是可以规定任意数量的锁持有者. 允许的持有者数量可以在声明信号量时指定. 这个值被叫做usage count或者count. 最常见的count值是1, 只允许有一个锁持有者, 这种信号量也被成为二元信号量(因为只有两种状态: 被持有和没有被持有)或者互斥信号量(因为强制互斥访问).count值也可以被设定为一个比1大的值, 这种情况下被称为计数信号量, 计数信号量用于对特定代码进行限制, 同一时刻最多只能有规定数量的任务进入临界区, 计数信号量很少使用, 互斥信号量用得最多.")]),t._v(" "),a("p",[t._v("信号量最早由Dijkstra(没错, 和提出Dijkstra算法的是同一个人)提出, 支持两个原子操作: P操作和V操作. P操作用于获得信号量, V操作用于释放信号量. P操作请求信号量时, 将count减1进行判断, 如果count大于等于0, 那么就可以获得锁, 可以进入临界区. 如果count小于0, 就将任务放到等待队列中, 并让任务睡眠. V操作释放信号量时, 会将count值加1, 如果等待队列不为空, 其中一个任务就会获得信号量, 可以进入临界区执行.")]),t._v(" "),a("p",[t._v("内核提供了多个信号量操作函数, 请见下表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("操作函数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("功能描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sema_init(struct semaphore *, int)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Initializes the dynamically created semaphore to the given count")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("init_MUTEX(struct semaphore *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Initializes the dynamically created semaphore with a count of one")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("init_MUTEX_LOCKED(struct semaphore *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Initializes the dynamically created semaphore with a count of zero (so it is initially locked)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("down_interruptible (struct semaphore *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tries to acquire the given semaphore and enter interruptible sleep if it is contended")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("down(struct semaphore *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tries to acquire the given semaphore and enter uninterruptible sleep if it is contended")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("down_trylock(struct semaphore *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tries to acquire the given semaphore and immediately return nonzero if it is contended")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("up(struct semaphore *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Releases the given semaphore and wakes a waiting task, if any")])])])]),t._v(" "),a("p",[t._v("下面是一个use case:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个信号量，并将其允许的持有者数量初始化为count")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("semaphore")]),t._v(" mr_sem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sema_init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mr_sem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//请求信号量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("down_interruptible")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mr_sem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* signal received, semaphore not acquired ... */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 临界区 critical region ... */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//释放获得的信号量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("up")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mr_sem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"互斥锁-mutex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#互斥锁-mutex"}},[t._v("#")]),t._v(" 互斥锁(Mutex)")]),t._v(" "),a("p",[t._v("互斥锁的出现时间晚于信号量, 互斥锁可以看作是对互斥信号量(count为1)的改进, 互斥锁的接口更简单、性能更好. 并且互斥锁有着更严格的约束和使用场景:")]),t._v(" "),a("ul",[a("li",[t._v("任意时刻, 互斥锁最多只能有一个持有者")]),t._v(" "),a("li",[t._v("谁上的锁, 谁就负责解锁. 不能在一个上下文中加锁, 在另一个上下文中解锁.")]),t._v(" "),a("li",[t._v("一个进程持有互斥锁时不能退出")]),t._v(" "),a("li",[t._v("mutext会是任务进入睡眠, 所以不能在中断上下文或者下半部(这里的下半部应该是不包括工作队列的)中调用")])]),t._v(" "),a("p",[t._v("互斥锁和信号量之间选择时, 能用互斥锁尽量用互斥锁, 用不了互斥锁再考虑信号量.")]),t._v(" "),a("p",[t._v("互斥锁使用struct mutext类型来表示, 下面是内核提供的互斥锁操作函数:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("操作函数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("功能描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mutex_lock(struct mutex *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Locks the given mutex; sleeps if the lock is unavailable")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mutex_unlock(struct mutex *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Unlocks the given mutex")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mutex_trylock(struct mutex *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tries to acquire the given mutex; returns one if successful and the lock is acquired and zero otherwise")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mutex_is_locked (struct mutex *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Returns one if the lock is locked and zero otherwise")])])])]),t._v(" "),a("p",[t._v("下面是一个use case")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建互斥锁，并初始化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mutex")]),t._v(" mx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mutex_init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//上锁")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mutext_lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 临界区 Critical Region */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解锁")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mutext_unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"完成变量-completion-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完成变量-completion-variable"}},[t._v("#")]),t._v(" 完成变量(Completion Variable)")]),t._v(" "),a("p",[t._v("当一个任务需要在某个时间发生时给另一个任务发送信号来进行同步时, 使用完全变量是一个比较轻松的方式. 一个任务执行某些工作时, 另一个任务就在完全变量上等待, 当前者完成工作, 就会利用完全变量来唤醒所有在这个完全变量上等待的任务. 比如vfork()系统调用在子进程exec或者exit时, 使用完全变量唤醒父进程.")]),t._v(" "),a("p",[t._v("Linux为完全变量提供了三个操作函数, 见下表:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("操作函数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("功能描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("init_completion(struct completion *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Initializes the given dynamically created completion variable")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("wait_for_completion(struct completion *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Waits for the given completion variable to be signaled")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("complete(struct completion *)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Signals any waiting tasks to wake up")])])])]),t._v(" "),a("h2",{attrs:{id:"顺序锁-sequential-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顺序锁-sequential-block"}},[t._v("#")]),t._v(" 顺序锁(Sequential Block)")]),t._v(" "),a("p",[t._v("顺序锁为读写共享数据提供了一个简单的机制, 每次要对共享数据进行写时, 都会先获得顺序锁, 并使顺序锁的序列值(sequence number)加1, 写操作完成后, 释放顺序锁, 顺序锁的序列值再加1. 每次读操作之前和之后都会读取顺序锁的序列值, 如果前后的序列值相同, 说明没有写操作在读操作执行的过程中发起, 那么数据可用. 如果前后的序列值不相同, 说明在读期间发生了写操作. 那么重新读取数据, 并再次比较这次读操作前后的顺序锁序列值, 如果相同, 完成读操作, 如果没有继续重复上述过程.")]),t._v(" "),a("p",[t._v("下面是一个use case:")]),t._v(" "),a("p",[t._v("首先是定义一个顺序锁:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("seqlock_t")]),t._v(" mr_seq_lock "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DEFINE_SEQLOCK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mr_seq_lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("写操作的加锁解锁方式:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write_seqlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mr_seq_lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//进行写操作")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write_sequnlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mr_seq_lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("读操作的加锁解锁方式(读和写是并发执行的, 可以认为是分别在两个线程中)")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" seq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    seq "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read_seqbegin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mr_seq_lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里进行读数据操作")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果序列值发生变化（true），重新读取")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read_seqretry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mr_seq_lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" seq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("顺序锁适用于以下场景:")]),t._v(" "),a("ul",[a("li",[t._v("数据有很多读者")]),t._v(" "),a("li",[t._v("很少对数据进行写操作")]),t._v(" "),a("li",[t._v("虽然写操作数量很少, 但是你希望写操作优先满足, 不允许读者让写者饥饿")]),t._v(" "),a("li",[t._v("数据不能使用原子操作完成读和写")])]),t._v(" "),a("p",[t._v("顺序锁最有影响力的使用者是jiffies, 这是一个存储Linux机器开机时间的变量(下一篇博文会写这个), jiffies使用64bit的变量存储了系统启动到现在的clock ticks的数量. 某些机器读写64-bit的jiffies_64变量时不是原子操作, 需要使用get_jiffies_64(), 这个函数就通过顺序锁来实现的:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("u64 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_jiffies_64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" seq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    u64 ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        seq "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read_seqbegin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("xtime_lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jiffies_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read_seqretry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("xtime_lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" seq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在timer中断处理程序中借助顺序锁来完成对jiffies的更新操作:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write_seqlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("xtime_lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\njiffies_64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write_sequnlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("xtime_lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"禁止抢占"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止抢占"}},[t._v("#")]),t._v(" 禁止抢占")]),t._v(" "),a("p",[t._v("因为内核中存在抢占, 所以可能出现一个任务可能和被抢占的任务在同一个临界区执行, 为了避免这种情况, 内核抢占代码使用自旋锁作为不可抢占区域的标志, 如果一个自旋锁被持有, 那么内核就不能进行抢占. 有些场合可能并不需要一个自旋锁, 而只需要禁止抢占, 比如per-process的数据, 因为是每个处理器独有的, 所以其他处理器不会访问, 不需要自旋锁来保护. 但是没有自旋锁时, 内核是可以抢占的, 那么就有可能新调度的任务和被抢占的任务访问相同的per-process变量. 为了在不使用自旋锁(减少开销)的情况下避免这种情况, 内核提供了专门禁止抢占的函数preempt_disable(), 这个函数是可以嵌套的, 即可以调用任意多次, 对每次调用, 都需要一个对应的preempt_enable(), 最后一次调用(计数值变为0)preempt_enable()才会重新启用抢占.")]),t._v(" "),a("p",[t._v("下面是一个use case")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//禁用抢占")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preempt_disable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时抢占已经被禁止,做一些事情吧")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//启用抢占")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preempt_enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[t._v("《Linux Kernel Development 3rd Edition》")]),t._v(" "),a("p",[t._v("《Understanding The Linux Kernel 3rd Edition》")])])}),[],!1,null,null,null);a.default=n.exports}}]);