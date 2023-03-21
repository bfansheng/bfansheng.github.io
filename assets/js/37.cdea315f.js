(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{555:function(s,a,t){"use strict";t.r(a);var e=t(6),l=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_1-安装rpm包"}},[s._v("1. 安装rpm包")])]),t("li",[t("a",{attrs:{href:"#_2-初始化数据库"}},[s._v("2. 初始化数据库")])]),t("li",[t("a",{attrs:{href:"#_3-外网访问配置"}},[s._v("3. 外网访问配置")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"_1-安装rpm包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装rpm包"}},[s._v("#")]),s._v(" 1. 安装rpm包")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql-server\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql-contrib\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql-libs\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql-devel\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_2-初始化数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始化数据库"}},[s._v("#")]),s._v(" 2. 初始化数据库")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("新建文件夹")]),s._v(" "),t("p",[t("code",[s._v("mkdir -p /var/lib/pgsql/data")])])]),s._v(" "),t("li",[t("p",[s._v("切换用户")]),s._v(" "),t("p",[t("code",[s._v("su postgres")])])]),s._v(" "),t("li",[t("p",[s._v("执行"),t("strong",[s._v("initdb")])]),s._v(" "),t("p",[t("code",[s._v("initdb -D /var/lib/pgsql/data/")])])])]),s._v(" "),t("h2",{attrs:{id:"_3-外网访问配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-外网访问配置"}},[s._v("#")]),s._v(" 3. 外网访问配置")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("修改postgresql.conf")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /var/lib/pgsql/data/postgresql.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将listen_addresses = 'localhost' 改成listen_addresses = '*'")])]),s._v(" "),t("li",[t("p",[s._v("修改pg_hba.conf")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /var/lib/pgsql/data/pg_hba.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("添加一行：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("host    all             all             0.0.0.0/0           trust\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])])])}),[],!1,null,null,null);a.default=l.exports}}]);