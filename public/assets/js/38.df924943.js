(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{323:function(s,e,a){s.exports=a.p+"assets/img/image-20220710184409818.e3de2283.png"},692:function(s,e,a){"use strict";a.r(e);var l=a(2),t=Object(l.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"订单交易平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#订单交易平台"}},[s._v("#")]),s._v(" 订单交易平台")]),s._v(" "),e("p",[e("img",{attrs:{src:a(323),alt:"image-20220710184409818"}})]),s._v(" "),e("p",[s._v("核心的功能模块：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("认证模块，用户名密码 或 手机短信登录（60s有效）。")])]),s._v(" "),e("li",[e("p",[s._v("角色管理，不同角色具有不同权限 和 展示不同菜单。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("管理员，充值\n  客户，下单\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("客户管理")]),s._v("，除了基本的增删改查以外，支持对客户可以分级，不同级别后续下单折扣不同。")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("交易中心")])]),s._v(" "),e("ul",[e("li",[s._v("管理员可以给客户余额充值/扣费")]),s._v(" "),e("li",[e("strong",[s._v("客户可以下单/撤单")])]),s._v(" "),e("li",[e("strong",[s._v("生成交易记录")])]),s._v(" "),e("li",[s._v("对订单进行多维度搜索，例如：客户姓名、订单号。")])])]),s._v(" "),e("li",[e("p",[s._v("worker，去执行订单并更新订单状态。")])])]),s._v(" "),e("h2",{attrs:{id:"_1-客户管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-客户管理"}},[s._v("#")]),s._v(" 1.客户管理")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("客户列表")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("读取客户列表，页面展示。")])]),s._v(" "),e("li",[e("p",[s._v("问题：如果关联的级别被删除呢？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("- 删除级别时，判断下属如果还有数据，则不允许被删除。\n- 自动将级别设置为某个级别。\n- 将级别设置为空。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("模板的时间格式")])]),s._v(" "),e("li",[e("p",[s._v("主动连表查询")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("queryset = models.Customer.objects.filter(active=1).select_related('level')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])]),s._v(" "),e("li",[e("p",[s._v("新建客户")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("新增重复密码字段")])]),s._v(" "),e("li",[e("p",[s._v("展示管理级别 - 数据源")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("models中的limit_choice_to")])]),s._v(" "),e("li",[e("p",[s._v("自定义choices和queryset")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('queryset = models.Level.objects.filter(active=1).order_by("percent")\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])]),s._v(" "),e("li",[e("p",[s._v("展示管理级别 - 页面插件（select -> radio）")])]),s._v(" "),e("li",[e("p",[s._v("提交保存")]),s._v(" "),e("ul",[e("li",[s._v("models表单验证，正则validators")]),s._v(" "),e("li",[s._v("自定义钩子，确保密码一致")])])]),s._v(" "),e("li",[e("p",[s._v("跳转回页面")])])])]),s._v(" "),e("li",[e("p",[s._v("编辑客户（部分信息）")]),s._v(" "),e("ul",[e("li",[s._v("单独再创建一个ModelForm")])])]),s._v(" "),e("li",[e("p",[s._v("重置密码")])]),s._v(" "),e("li",[e("p",[s._v("删除客户（对话框和Ajax）")])]),s._v(" "),e("li",[e("p",[s._v("分页")])]),s._v(" "),e("li",[e("p",[s._v("新建 & 编辑 跳转回来时的链接问题。")])]),s._v(" "),e("li",[e("p",[s._v("Q对象搜索")])])]),s._v(" "),e("h2",{attrs:{id:"_2-价格策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-价格策略"}},[s._v("#")]),s._v(" 2.价格策略")]),s._v(" "),e("ul",[e("li",[s._v("列表")]),s._v(" "),e("li",[s._v("编辑，对话框")]),s._v(" "),e("li",[s._v("添加，对话框")]),s._v(" "),e("li",[s._v("删除，对话框")])]),s._v(" "),e("h2",{attrs:{id:"_3-客户下单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-客户下单"}},[s._v("#")]),s._v(" 3.客户下单")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("我的订单")])]),s._v(" "),e("li",[e("p",[s._v("下单")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("展示价格策略和选择")])]),s._v(" "),e("li",[e("p",[s._v("事务处理 & 锁")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("创建订单\n扣款\n生成交易记录\n订单放入队列\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])])]),s._v(" "),e("li",[e("p",[s._v("撤单")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("如果是待执行，可以撤单（事务处理 & 锁）\n退款\n生成交易记录\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])])])}),[],!1,null,null,null);e.default=t.exports}}]);