(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{546:function(t,a,e){"use strict";e.r(a);var s=e(6),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1-服务安装"}},[t._v("1. 服务安装")])]),e("li",[e("a",{attrs:{href:"#_2-编码设置"}},[t._v("2. 编码设置")])]),e("li",[e("a",{attrs:{href:"#_3-增加内存。"}},[t._v("3 增加内存。")])]),e("li",[e("a",{attrs:{href:"#_4-增加线程数"}},[t._v("4 增加线程数")])]),e("li",[e("a",{attrs:{href:"#_5-修改用户"}},[t._v("5 修改用户")])])])]),e("p"),t._v(" "),e("p",[e("strong",[t._v("官网下载window zip版本")]),t._v("，以下以tomcat7为例")]),t._v(" "),e("h2",{attrs:{id:"_1-服务安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务安装"}},[t._v("#")]),t._v(" 1. 服务安装")]),t._v(" "),e("ol",[e("li",[t._v('"${tomcat}\\bin"文件夹下，编辑service.bat,替换'),e("strong",[t._v("所有tomcat7文本")]),t._v("为所需要服务名serviceName"),e("img",{attrs:{src:"http://i.imgur.com/Yr4RYOS.png",alt:""}})]),t._v(" "),e("li",[t._v("修改tomcat7.exe和tomcat7w.exe的文件名称，将tomcat7替换为"),e("strong",[t._v("服务名")])]),t._v(" "),e("li",[t._v("空白处Alt+鼠标右键打开命令窗口，输入service.bat install ${serviceName}")])]),t._v(" "),e("h2",{attrs:{id:"_2-编码设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-编码设置"}},[t._v("#")]),t._v(" 2. 编码设置")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://i.imgur.com/YTVm12G.png",alt:""}})]),t._v(" "),e("ul",[e("li",[t._v('URIEncoding="utf-8"')]),t._v(" "),e("li",[t._v("AJP在负载均衡时会用到")])]),t._v(" "),e("h2",{attrs:{id:"_3-增加内存。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-增加内存。"}},[t._v("#")]),t._v(" 3 增加内存。")]),t._v(" "),e("p",[t._v("在tomcat7w.exe（${serviceName}w.exe）中设置")]),t._v(" "),e("h2",{attrs:{id:"_4-增加线程数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-增加线程数"}},[t._v("#")]),t._v(" 4 增加线程数")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("maxThreads")]),t._v("：tomcat起动的最大线程数，即同时处理的任务个数")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("acceptCount")]),t._v("：当tomcat起动的线程数达到最大时，接受排队的请求个数")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("这两个值如何起作用，请看下面三种情况")])]),t._v(" "),e("ul",[e("li",[t._v("情况1：接受一个请求，此时tomcat起动的线程数没有到达maxThreads，tomcat会起动一个线程来处理此请求。")]),t._v(" "),e("li",[t._v("情况2：接受一个请求，此时tomcat起动的线程数已经到达maxThreads，tomcat会把此请求放入等待队列，等待空闲线程。")]),t._v(" "),e("li",[t._v("情况3：接受一个请求，此时tomcat起动的线程数已经到达maxThreads，等待队列中的请求个数也达到了acceptCount，此时tomcat会直接拒绝此次请求，返回connection refused")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("maxThreads如何配置")]),t._v("\n一般的服务器操作都包括量方面：1计算（主要消耗cpu），2等待（io、数据库等）\n"),e("strong",[t._v("第一种极端情况")]),t._v("，如果我们的操作是纯粹的计算，那么系统响应时间的主要限制就是cpu的运算能力，此时maxThreads应该尽量设的小，降低同一时间内争抢cpu的线程个数，可以提高计算效率，提高系统的整体处理能力。\n"),e("strong",[t._v("第二种极端情况")]),t._v("，如果我们的操作纯粹是IO或者数据库，那么响应时间的主要限制就变为等待外部资源，此时maxThreads应该尽量设的大，这样 才能提高同时处理请求的个数，从而提高系统整体的处理能力。此情况下因为tomcat同时处理的请求量会比较大，所以需要关注一下tomcat的虚拟机内 存设置和Linux的open file限制。\n我在测试时遇到一个问题，maxThreads我设置的比较大比如3000，当服务的线程数大到一定程度时，一般是2000出头，单次请求的响应时间就会急剧的增加，\n百思不得其解这是为什么，四处寻求答案无果，最后我总结的原因可能是cpu在线程切换时消耗的时间随着线程数量的增加越来越大，\ncpu把大多数时间都用来在这2000多个线程直接切换上了，当然cpu就没有时间来处理我们的程序了。\n以前一直简单的认为多线程=高效率。。其实多线程本身并不能提高cpu效率，线程过多反而会降低cpu效率。\n当cpu核心数<线程数时，cpu就需要在多个线程直接来回切换，以保证每个线程都会获得cpu时间，即通常我们说的并发执行。\n所以maxThreads的配置绝对不是越大越好。\n现实应用中，我们的操作都会包含以上两种类型（计算、等待），所以maxThreads的配置并没有一个最优值，一定要根据具体情况来配置。\n最好的做法是：在不断测试的基础上，不断调整、优化，才能得到最合理的配置。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("acceptCount的配置")]),t._v("，我一般是设置的跟maxThreads一样大，这个值应该是主要根据应用的访问峰值与平均值来权衡配置的。\n"),e("strong",[t._v("如果设的较小，可以保证接受的请求较快相应，但是超出的请求可能就直接被拒绝")]),t._v(" "),e("strong",[t._v("如果设的较大，可能就会出现大量的请求超时的情况，因为我们系统的处理能力是一定的。")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("来源： http://blog.csdn.net/jackpk/article/details/32137483")])]),t._v(" "),e("h2",{attrs:{id:"_5-修改用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-修改用户"}},[t._v("#")]),t._v(" 5 修改用户")]),t._v(" "),e("p",[t._v("路径${tomcat}/conf/tomcat-users.xml的"),e("code",[t._v("<tomcat-users>")]),t._v("标签中添加")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<role rolename="manager-gui"/>\n<role rolename="manager-script"/>\n<role rolename="manager-jmx"/>\n<role rolename="manager-status"/>\n<user username="tomcat" password="tomcat" roles="manager-gui,manager-script,manager-jmx,manager-status"/>\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);