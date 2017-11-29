<template>
<div>
注册
</div>


</template>

<script>

// export default {
//   name: 'Computers',
//   data () {
//     return {
//       msg: 'Computer welcome',
//       computers:''
//     }
//   },
//   mounted:function(){
//     this.show_phone();
//   },
//   methods:{
//     show_phone:function(){
//       var url = 'http://127.0.0.1:8000/mymall/electronic.json/?k=computer';
//       var self = this;
//       axios.get(url)
//       .then(
//         function(response){
          
//           self.computers = response.data
//           // console.log(typeof(response.data.data))
//         }
//       )
//       .catch(function(error){
//         alert('error')
//       })
//     }
//   }
// }
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
