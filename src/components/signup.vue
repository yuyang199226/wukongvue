<template>
<div>
<div class="row">
  <div class="col-xs-5 col-xs-offset-3">
    <form id="loginForm" class="form-horizontal" method="post" action="">

            <div class="form-group ">
                <label for="" class="col-md-3 control-label">用户名</label>
                <div class="col-md-7" style="color: red">
                    <input class="" type="text">
                </div>
            </div>
                        <div class="form-group ">
                <label for="" class="col-md-3 control-label">密码</label>
                <div class="col-md-7" style="color: red">
                    <input class="" type="password">
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
           <button type="submit" class="btn btn-success btn-block">登录</button>
    </div>

    </form>
  </div>
</div>
</div>


</template>

<script>
import axios from 'axios'
export default {
  name: 'Computers',
  data () {
    return {
      msg: 'Computer welcome',
      computers:''
    }
  },
  mounted:function(){
    this.show_phone();
  },
  methods:{
    show_phone:function(){
      var url = 'http://127.0.0.1:8000/mymall/electronic.json/?k=computer';
      var self = this;
      axios.get(url)
      .then(
        function(response){
          
          self.computers = response.data
          // console.log(typeof(response.data.data))
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
</style>
