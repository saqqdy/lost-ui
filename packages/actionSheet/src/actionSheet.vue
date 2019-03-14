<template lang="html">
  <div class="m-actionSheet" ref="actionSheet" v-on:click="event => { event.stopPropagation() }">

  </div>
</template>

<script>
// value	boolean	false	是否显示, 使用 v-model 绑定变量	--
// show-cancel	boolean	false	是否显示取消菜单，对安卓风格无效	--
// cancel-text	string	cancel(取消)	取消菜单的显示文字	--
// theme	string	ios	菜单风格，可选值为['ios','android']	--
// menus	object
// array	{}	菜单项列表，举例：{menu1: '删除'}，如果名字上带有.noop表明这是纯文本(HTML)展示，不会触发事件，用于展示描述或者提醒。
// 从v2.1.0开始支持数组类型的菜单，可自定义键值，见下面说明。	--
// close-on-clicking-mask	boolean	true	点击遮罩时是否关闭菜单，适用于一些进入页面时需要强制选择的场景。	v2.0.0
// close-on-clicking-menu

// @on-click-menu	(menuKey, menuItem)	点击菜单时触发	--
// @on-click-menu-{menuKey}	(menuKey)点击事件的快捷方式, menuKey与label的值有关。举例：如果你有一个菜单名字为delete, 那么你可以监听 on-click-menu-delete	--
// @on-click-menu-cancel	--	点击取消菜单时触发	--
// @on-click-mask	--	点击遮罩时触发	v2.3.4
// @on-after-show	--	显示动画结束时触发	v2.9.0
// @on-after-hide
export default {
  name: "actionSheet",
  props: {
    // 当前颜色值
    value: {
      type: Object,
      required: true
    },
    // 显示取消按钮
    "show-cancel": {
      type: Object,
      required: true
    },
    // 默认颜色
    defaultColor: {
      type: String,
      default: "#000000"
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    // 点击页面上其他地方，关闭弹窗
    document.onclick = () => {
      this.openStatus = false;
    };
  }
};
</script>

<style lang="scss" scoped>
.m-actionSheet {
}
</style>

