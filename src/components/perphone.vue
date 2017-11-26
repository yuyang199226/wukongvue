<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <div>
    <ul>
      <li>名称{{ phone_desc.name }}</li>
      <li>价格{{ phone_desc.price }}</li>
      <li>屏幕{{ phone_desc.pingmu }}</li>
    </ul>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Phones',
  data () {
    return {
      msg: '一个手机',
      phone_desc:''
    }
  },
  mounted:function(){
    this.show_phone();
    console.log(this.$route.query)
  },
  methods:{
    show_phone:function(){
      var url = 'http://127.0.0.1:8000/mymall/phone.json/?id='+this.$route.query.id;
      var self = this;
      axios.get(url)
      .then(
        function(response){    
          self.phone_desc = response.data
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
  display:block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
