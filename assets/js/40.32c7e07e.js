(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{453:function(t,e,s){"use strict";s.r(e);var r=s(29),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"从box-sizing属性入手，了解盒子模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从box-sizing属性入手，了解盒子模型"}},[t._v("#")]),t._v(" 从box-sizing属性入手，了解盒子模型")]),t._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("先声明一下运用的场景，假如项目布局使用的是"),s("strong",[t._v("自适应")]),t._v("的布局方式，div给出的宽度是"),s("strong",[t._v("百分比")]),t._v("的形式，即占窗口宽度的100%，但边框"),s("code",[t._v("border")]),t._v("和内边距"),s("code",[t._v("padding")]),t._v("是用像素来表示的，此时就会造成一个问题是div总宽度超过窗口宽度。为了避免这种问题，可以使用属性"),s("code",[t._v("box-sizing:border-box")]),t._v("来把 "),s("strong",[t._v("标准盒模型")]),t._v(" 变成 "),s("strong",[t._v("代替(IE)盒模型")]),t._v(" ，从而使div的总宽度依然是100%\n")]),t._v(" "),s("h2",{attrs:{id:"什么是css-盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是css-盒模型"}},[t._v("#")]),t._v(" 什么是CSS 盒模型?")]),t._v(" "),s("p",[t._v("页面布局中，一个元素的外边距（margin）、 边框（border）、内边距（padding）、内容（content）组成一个盒模型。盒模型可分为"),s("strong",[t._v("标准盒模型")]),t._v(" 和 "),s("strong",[t._v("代替（IE）盒模型")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"标准盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准盒模型"}},[t._v("#")]),t._v(" 标准盒模型")]),t._v(" "),s("p",[t._v("在标准模型中，如果你给盒设置 "),s("code",[t._v("width")]),t._v(" 和 "),s("code",[t._v("height")]),t._v("，实际设置的是内容区域( "),s("em",[t._v("content box")]),t._v(")的宽高。 "),s("code",[t._v("padding")]),t._v(" 和 "),s("code",[t._v("border")]),t._v(" 再加上设置的宽高一起决定整个盒子的大小。")]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid black"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("如果使用标准模型，元素总宽度 = 160px （100+25+25+5+5），总高度 = 110px (50 + 25 + 25 + 5 + 5)，即内容区域"),s("code",[t._v("content box")]),t._v("加 "),s("code",[t._v("padding")]),t._v(" 和 "),s("code",[t._v("border")]),t._v(" 。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("注")]),t._v(": margin 不计入实际大小 —— 当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。")])]),t._v(" "),s("h2",{attrs:{id:"代替（ie）盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代替（ie）盒模型"}},[t._v("#")]),t._v(" 代替（IE）盒模型")]),t._v(" "),s("p",[t._v("你可能会认为盒子的大小还要加上边框和内边距，这样很麻烦。 因为这个原因，css还有一个替代盒模型。使用这个模型，所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。使用上面相同的样式得到总宽高是 width = 100px, height = 50px。")]),t._v(" "),s("p",[t._v("默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 "),s("code",[t._v("box-sizing: border-box")]),t._v(" 来实现。 这样就可以告诉浏览器使用 "),s("code",[t._v("border-box")]),t._v(" 来定义区域，从而设定您想要的大小。")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"box-sizing属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing属性"}},[t._v("#")]),t._v(" box-sizing属性")]),t._v(" "),s("p",[t._v("CSS中的 "),s("strong",[s("code",[t._v("box-sizing")])]),t._v(" 属性用于告诉浏览器如何计算一个元素是总宽度和总高度")]),t._v(" "),s("iframe",{staticClass:"interactive",attrs:{frameborder:"0",height:"390",src:"https://interactive-examples.mdn.mozilla.net/pages/css/box-sizing.html",title:"MDN Web Docs Interactive Example",width:"100%"}}),t._v(" "),s("p",[t._v("在 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/CSS/Box_model",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS盒子模型"),s("OutboundLink")],1),t._v(" 的默认定义里，你对一个元素所设置的 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/width",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("width")]),s("OutboundLink")],1),t._v(" 与 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/height",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("height")]),s("OutboundLink")],1),t._v(" 只会应用到这个元素的内容区。如果这个元素有任何的 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/border",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("border")]),s("OutboundLink")],1),t._v(" 或 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("padding")]),s("OutboundLink")],1),t._v(" ，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。这意味着当你调整一个元素的宽度和高度时需要时刻注意到这个元素的边框和内边距。当我们实现响应式布局时，这个特点尤其烦人。")]),t._v(" "),s("p",[t._v("box-sizing 属性可以被用来调整这些表现:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("content-box")]),t._v(" 是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("尺寸计算公式：")]),t._v(" "),s("p",[s("code",[t._v("width")]),t._v(" = 内容的宽度")]),t._v(" "),s("p",[s("code",[t._v("height")]),t._v(" = 内容的高度")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("border-box")]),t._v(" 告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去(border + padding)的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("尺寸计算公式：")]),t._v(" "),s("p",[s("em",[s("code",[t._v("width")]),t._v(" = border + padding + 内容的宽度")])]),t._v(" "),s("p",[s("em",[s("code",[t._v("height")]),t._v(" = border + padding + 内容的高度")])])])])])]),t._v(" "),s("p",[t._v("来源："),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);