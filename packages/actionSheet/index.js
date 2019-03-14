// 导入组件
import actionSheet from './src/actionSheet.vue'

actionSheet.install = function (Vue) {
  Vue.component(actionSheet.name, actionSheet)
}

// 默认导出组件
export default actionSheet
