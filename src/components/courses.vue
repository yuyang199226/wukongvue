<template>
  <div>

    <div>
       <div v-for="item in courses" class="panel panel-default">
           <div class="panel-heading"><router-link :to="{ name: 'coursedetail', params: { id: item.id }}"> {{item.name }}</router-link>  </div>
        <div class="panel-body">
        <span>简介</span>{{ item.brief }}
        <hr>
         等级：{{ item.level_name }}
  </div>


       </div>

   </div>
  </div>
</template>

<script>
// import axios from 'axios'
// console.log($axios)
// this.$axios.defaults.withCredentials=true
export default {
  name: 'Courses',
  data () {
    return {
      courses:''
    }
  },
  mounted:function(){
    this.show_courses();
  },
  methods:{
    show_courses:function(){
      var url = 'http://127.0.0.1:8000/courses.json';
      var self = this;
      this.$axios.defaults.withCredentials=true
      this.$axios.get(url
      // ,{
      // withCredentials: true
      // }
      )
      .then(
        function(response){
          self.courses = response.data.data
          console.log(response.data.data[0])
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
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
