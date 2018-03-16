
import Vuex from 'vuex'


// 创建一个对象来保存应用启动时的初始状态
const state = {
  // TODO 放置初始状态
  count: 10
};

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // TODO 放置我们的状态变更函数
  increment (state, amount) {
    state.count = state.count + amount
  }
};


// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以链接到我们的应用中
export default new Vuex.Store({
  state, mutations
})
