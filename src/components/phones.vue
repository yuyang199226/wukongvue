<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <div>
     <ul>
       <!-- {{ phones }} -->
       <li v-for="phone in phones">
         名称:<router-link :to="{ path: 'perphone', query: { id: phone.id }}">{{phone.title }}</router-link>   
         价格:{{ phone.price }}
       </li>
       
     </ul>
     <!-- <router-view/> -->
   </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Phones',
  data () {
    return {
      msg: 'phone welcome',
      phones:''
    }
  },
  mounted:function(){
    this.show_phone();
  },
  methods:{
    show_phone:function(){
      var url = 'http://127.0.0.1:8000/mymall/electronic.json/?k=phone';
      var self = this;
      axios.get(url)
      .then(
        function(response){
          self.phones = response.data
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
