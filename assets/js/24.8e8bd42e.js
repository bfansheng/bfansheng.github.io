(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{539:function(s,e,t){"use strict";t.r(e);var a=t(6),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#openssl生成公私钥"}},[s._v("openssl生成公私钥")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"openssl生成公私钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openssl生成公私钥"}},[s._v("#")]),s._v(" openssl生成公私钥")]),s._v(" "),t("p",[s._v("生成私钥：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("openssl genrsa -out rsa_private_key.pem 1024\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("根据私钥生成对应的公钥")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("openssl rsa -in rsa_private_key.pem -pubout -out rsa_public_key_2048.pub\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("公私钥有pkcs1转为pkcs8")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("openssl rsa -RSAPublicKey_in -in pubkey.pem -pubout > pubkey_pkcs8.pem\nopenssl pkcs8 -topk8 -inform PEM -in prikey.pem -outform PEM -nocrypt > prikey_pkcs8.pem\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);