<template>

<div class="row">

  <div class="col-xs-5 col-xs-offset-3 login">
   <h3>登录</h3>
    <div id="loginForm" class="form-horizontal">

            <div class="form-group ">
                <label for="" class="col-md-3 control-label">用户名</label>
                <div class="col-md-7">
                    <input class="form-control" type="text" v-model="username" placeholder="用户名/邮箱">
                </div>
            </div>
                        <div class="form-group ">
                <label for="" class="col-md-3 control-label">密码</label>
                <div class="col-md-7">
                    <input class="form-control" type="password" v-model="password" placeholder="密码">
                </div>
            </div>

      <div class="form-group">
        <div class="col-xs-offset-2 col-xs-4">
          <div class="checkbox">
            <label>
              <input type="checkbox" checked="checked" name="remember">下次自动登录
            </label>
          </div>
        </div>
        <div class="col-xs-4">
          <span class="help-block"><a href="#">忘记密码</a></span>
        </div>
      </div>
        <div class="col-md-6 col-md-offset-4" style="color:red;padding:0 2px 10px 2px; ">
        </div>

    <div class="col-xs-offset-2 col-xs-8">
          <!-- {{$store.state.username}} -->
           <button type="button" class="btn btn-success btn-block" v-on:click="login">登录</button>

    </div>

    </div>
  </div>
</div>



</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username:'',
      password:''
    }
  },
  // mounted:function(){
  //   this.show_phone();
  // },
  methods:{
    login:function(){
      var url = 'http://127.0.0.1:8000/login/';
      var self = this;
      this.$axios.defaults.withCredentials = true;
      this.$axios.post(url,{
        username:self.username,
        password:self.password
      },{
              'headers':{'Content-Type':'application/json'}
          }
      )
      .then(
        function(response){
          self.$store.commit('saveToken',response.data.data)
          // console.log(self.$store.state.username)
          console.log(self.$route.query.next)

          self.$router.push(self.$route.query.next)
        }
      )
      .catch(function(error){
        alert('error')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login{
  height: 400px;
  width:40%;
  background-color: rosybrown;
}
</style>
