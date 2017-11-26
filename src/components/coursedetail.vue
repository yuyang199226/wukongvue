<template>
  <div class="coursedetail">
      <div>
        <h1>{{course}}</h1>
        <div>时间：{{hours}}hours</div>
        <div> 
          <h3>为什么学习这门课</h3>
          <p>{{whystudy}}</p>
        </div>
        <div>
          <h3>课程简介</h3>
          <p>{{what_to_study_brief}}</p>
          </div>
        <div>
          <h3>对你的职业生涯有什么帮助</h3>
          <p>{{career_improvement}}</p>
          </div>
        <div>
          <h3>你需要提前掌握哪些技能</h3>
          <p>{{prerequisite}}
          </p>    
          </div>
           <!-- <div>
          <h3>推荐课程</h3>
          <p>{{recommend_courses}}
          </p>    
          </div> -->
      </div>


  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials=true
export default {
  name: 'CourseDetail',
  data () {
    return {
      course:'',
      hours:'',
      whystudy:'',
      what_to_study_brief:'',
      career_improvement:'',
      prerequisite:'',
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
      axios.get(url)
      .then(
        function(response){
          
          self.courses = response.data
          self.course = response.data.course;
          self.hours = response.data.hours;
          self.whystudy = response.data.why_study;
          self.career_improvement = response.data.career_improvement;
          self.prerequisite = response.data.prerequisite;
          // slef.recommend_courses = response.data.recommend_courses;

          console.log(response.data)
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
