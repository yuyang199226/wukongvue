<template>
  <div class="normal-q"> 
        问题一：aaaaaa;
        Answer:asdasfdsafdsasda;
        问题二：水电费都是放到沙发上的
        Answer:asdasdasdassasd 
      </div>
</template>

<script>

export default {
  name: 'normalquestions',
  data () {
    return {
      course:'',
      hours:'',
      whystudy:'',
      what_to_study_brief:'',
      career_improvement:'',
      prerequisite:'',
      teachers:'',
      recommend_courses:'',
      // recommend_courses:'',

    }
  },
  mounted:function(){
    this.get_course();
  },
  methods:{
    get_course:function(){
      var url = 'http://127.0.0.1:8000/courses/'+this.$route.params.id+'.json';
      console.log(url)
      var self = this;
      this.$axios.defaults.withCredentials=true
      this.$axios.get(url)
      .then(
        function(response){
          
          self.courses = response.data
          self.course = response.data.course;
          self.hours = response.data.hours;
          self.whystudy = response.data.why_study;
          self.career_improvement = response.data.career_improvement;
          self.prerequisite = response.data.prerequisite;
          self.teachers = response.data.teachers
          self.recommend_courses = response.data.recommend_courses
          // slef.recommend_courses = response.data.recommend_courses;
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
h1, h3 {
  font-weight: bold;
}
.coursedetail{
  margin: 30px 40px 20px 40px;
}
.hour-level li{
 display: inline-block;
 margin-left:20px;
 padding:5px;

}
span{
  width: 120px;
  height: 80px;
  line-height: 80px;
  margin-left:15px;
  padding:5px;
  background-color: bisque;
  color:brown
}
p{
  padding: 10px;
  /* width: 80%; */
  font-size:16px;
  text-align: left;
}
a {
  color: #42b983;
}
</style>
