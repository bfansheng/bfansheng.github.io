(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{554:function(t,a,r){"use strict";r.r(a);var v=r(6),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#options"}},[t._v("[options]")])]),r("li",[r("a",{attrs:{href:"#命令"}},[t._v("命令")]),r("ul",[r("li",[r("a",{attrs:{href:"#cd-目录切换"}},[t._v("cd(目录切换)")])]),r("li",[r("a",{attrs:{href:"#diff-比较文件差异"}},[t._v("diff(比较文件差异)")])]),r("li",[r("a",{attrs:{href:"#touch-创建空白文件"}},[t._v("touch(创建空白文件)")])]),r("li",[r("a",{attrs:{href:"#cp-复制文件、文件夹"}},[t._v("cp(复制文件、文件夹)")])]),r("li",[r("a",{attrs:{href:"#mv-移动或者重命名"}},[t._v("mv(移动或者重命名)")])]),r("li",[r("a",{attrs:{href:"#rm-删除"}},[t._v("rm(删除)")])]),r("li",[r("a",{attrs:{href:"#file-查看文件格式"}},[t._v("file(查看文件格式)")])]),r("li",[r("a",{attrs:{href:"#tar-压缩、解压"}},[t._v("tar(压缩、解压)")])]),r("li",[r("a",{attrs:{href:"#grep-在文本中搜索"}},[t._v("grep(在文本中搜索)")])])])]),r("li",[r("a",{attrs:{href:"#shell脚本"}},[t._v("Shell脚本")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" [options]")]),t._v(" "),r("p",[t._v("options有长短格式之分，只有短格式和短格式之间是可以合并的，合并后仅保留一个-（减号）即可。另外ps命令可允许参数不加减号（-）。")]),t._v(" "),r("h2",{attrs:{id:"命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),r("h3",{attrs:{id:"cd-目录切换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cd-目录切换"}},[t._v("#")]),t._v(" cd(目录切换)")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("cd /etc")]),t._v(" ：切换到etc目录")]),t._v(" "),r("li",[r("code",[t._v("cd -")]),t._v(" ： 切换到上一次目录")]),t._v(" "),r("li",[r("code",[t._v("cd ~")]),t._v(" ：切换到家目录")]),t._v(" "),r("li",[r("code",[t._v("cd ~username")]),t._v(" ：切换到某个用户家目录")]),t._v(" "),r("li",[r("code",[t._v("cd ..")]),t._v(" ：切换到上一级目录")])]),t._v(" "),r("h3",{attrs:{id:"diff-比较文件差异"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#diff-比较文件差异"}},[t._v("#")]),t._v(" diff(比较文件差异)")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("diff --brief a.txt b.txt")]),t._v(" : 比较两个文件是否相同")]),t._v(" "),r("li",[r("code",[t._v("diff -c a.txt b.txt")]),t._v(" : 比较两个文件具体的不同")])]),t._v(" "),r("h3",{attrs:{id:"touch-创建空白文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#touch-创建空白文件"}},[t._v("#")]),t._v(" touch(创建空白文件)")]),t._v(" "),r("h3",{attrs:{id:"cp-复制文件、文件夹"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cp-复制文件、文件夹"}},[t._v("#")]),t._v(" cp(复制文件、文件夹)")]),t._v(" "),r("h3",{attrs:{id:"mv-移动或者重命名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mv-移动或者重命名"}},[t._v("#")]),t._v(" mv(移动或者重命名)")]),t._v(" "),r("h3",{attrs:{id:"rm-删除"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rm-删除"}},[t._v("#")]),t._v(" rm(删除)")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("rm -f")]),t._v(" : 强制删除")]),t._v(" "),r("li",[r("code",[t._v("rm -r")]),t._v(" : 删除一个目录")])]),t._v(" "),r("h3",{attrs:{id:"file-查看文件格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#file-查看文件格式"}},[t._v("#")]),t._v(" file(查看文件格式)")]),t._v(" "),r("h3",{attrs:{id:"tar-压缩、解压"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tar-压缩、解压"}},[t._v("#")]),t._v(" tar(压缩、解压)")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("tar -czvf 压缩包名称.tar.gz 要压缩的目录")]),t._v(" : 压缩")]),t._v(" "),r("li",[r("code",[t._v("tar -xzvf 压缩包名称.tar.gz -C 要解压到的目录")]),t._v(" : 解压，-C指定哪个目录，可以不要")])]),t._v(" "),r("h3",{attrs:{id:"grep-在文本中搜索"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grep-在文本中搜索"}},[t._v("#")]),t._v(" grep(在文本中搜索)")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("grep 关键词 文件")])]),t._v(" "),r("li",[r("code",[t._v("grep -n 关键词 文件")]),t._v(" : 显示行号")]),t._v(" "),r("li",[r("code",[t._v("grep -v 关键词 文件")]),t._v(" : 反选")])]),t._v(" "),r("h2",{attrs:{id:"shell脚本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shell脚本"}},[t._v("#")]),t._v(" Shell脚本")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("内设接收参数的变量")]),t._v(" "),r("th",[t._v("作用")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("$0")]),t._v(" "),r("td",[t._v("当前Shell脚本程序的名称")])]),t._v(" "),r("tr",[r("td",[t._v("$#")]),t._v(" "),r("td",[t._v("总共有几个参数")])]),t._v(" "),r("tr",[r("td",[t._v("$*")]),t._v(" "),r("td",[t._v("所有位置的参数值")])]),t._v(" "),r("tr",[r("td",[t._v("$?")]),t._v(" "),r("td",[t._v("显示上一次命令的执行返回值")])]),t._v(" "),r("tr",[r("td",[t._v("$1、$2、$3……")]),t._v(" "),r("td",[t._v("第N个位置的参数值")])])])])])}),[],!1,null,null,null);a.default=_.exports}}]);