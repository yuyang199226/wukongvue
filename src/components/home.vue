<template>
<div>


      <nav class="navbar navbar-default">
      <div class="container-fluid">
          <div class="navbar-header">
              <span class="glyphicon glyphicon-tree-deciduous navbar-brand" aria-hidden="true"></span>
              <a class="navbar-brand" href="#">{{ msg }}</a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                  <li><a href="#">推荐</a></li>
                  <li><router-link to="/courses">课程</router-link></li>
                  <li><a href="#">作者</a></li>
                  <li><a href="#">诗文</a></li>
                  <li><a href="#">名句</a></li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                  <li>
                      <form class="navbar-form navbar-left">
                          <div class="form-group">
                              <input type="text" class="form-control" placeholder="Search">
                          </div>
                          <button type="submit" class="btn btn-default">搜索</button>
                      </form>
                  </li>
                  

                    <ul v-if="$store.state.username">
                      <li> <router-link to="/" >{{ $store.state.username }}</router-link></li>
                      <li> <a v-on:click='logout'>注销</a></li>  
                    </ul>
                    <ul v-else>
                         <li> <router-link :to="{ path: '/login',query:{next:$route.path}}" >登录</router-link></li>
                          <!-- <li> <router-link to="/login" >登录</router-link></li> -->
                        <li> <router-link to='/signup'>注册</router-link></li>
                    </ul>
                 
                  <!-- <li><a href="/user_profile/" class="">Profile</a></li>
                  <li><a href="/logout/">Logout</a></li> -->
              </ul>
          </div>

      </div>
  </nav>

  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Wu kong'
    }
  },
  methods:{
      logout:function(){
          this.$store.commit('clearToken')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.router-link-exact-active{
    background-color: greenyellow;
}

a {
  color: #42b983;
}
ul {
  list-style-type: none;
  display:inline-block;
  padding: 0;
}
li {
  display:inline-block;
  margin: 0 10px;
}
</style>
