import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'
Vue.use(Vuex)
export default new Vuex.Store({
    // 组件中通过 this.$store.state.username 调用
    state: {
      username: Cookie.get('user'),
      token: Cookie.get('token'),
    //   apiList: {
    //     auth: 'http://api.luffy.com:8000/v1/auth/',
    //     courses: 'http://api.luffy.com:8000/v1/courses/',
    //   }
    },
    mutations: {
      // 组件中通过 this.$store.commit(saveToken,参数)  调用
      saveToken: function (state, data) {
        this.state.username = data.username
        this.state.token = data.token
        this.state.userid = data.userid     //userid
        Cookie.set("user", data.username, "20min")
        Cookie.set("token", data.token, "20min")

      },
      clearToken: function (state) {
        state.username = null
        Cookie.remove('user')
        Cookie.remove('token')

      }
    },

  })
