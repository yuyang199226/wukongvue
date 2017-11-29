<template>
  <div class="coursedetail">
    <div class="jumbotron">
      <h2>{{course}}</h2>

    </div>
    <div>
      <ul class="hour-level">
        <li><span>时间</span>{{hours}}hours</li>
        <li><span>难度</span>{{hours}}</li>
      </ul>
    </div>
    <div class="four-section">
       <ul>
      <li  v-on:click="show_overview(1)" v-if='pitch == 1' style="background-color: #f5f5f5">课程概述</li>
      <li  v-on:click="show_overview(1)" v-else>课程</li>
      <li v-on:click="show_chapter(2)" v-if='pitch == 2' style="background-color: #f5f5f5">课程章节</li>
      <li v-on:click="show_chapter(2)" v-else >章节</li>
      <li >用户评价(0)</li>
      <li  v-on:click="show_normalquestions(3)" v-if='pitch == 3' style="background-color: #f5f5f5">常见问题</li>
      <li  v-on:click="show_normalquestions(3)" v-else >问题</li>
    </ul>
    </div>
    <overview v-bind:reason="whystudy"
              v-bind:brief="what_to_study_brief"

              v-bind:career="career_improvement"
              v-bind:prerequisite="prerequisite"
              v-bind:teachers="teachers"
              v-bind:recommend="recommend_courses"
              v-bind:price="price"
              id="c1"
              v-bind:class="hide_overview"
    ></overview>

    <chapters
      v-bind:class="hide_chapters"
      v-bind:chapters="chapters"
    ></chapters>
    <normalquestions
        v-bind:class="hide_normalquestions"
        v-bind:normalquestions="normalquestions"
    ></normalquestions>

  </div>
</template>

<script>
import overview from '@/components/overview.vue'
import chapters from '@/components/chapters.vue'
import normalquestions from '@/components/normalquestions.vue'
export default {
  name: 'CourseDetail',
  components:{
    'overview':overview,
    'chapters':chapters,
    'normalquestions':normalquestions
  },
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
      price:''       ,         //价格策略
      // recommend_courses:'',
      hide_overview:'show',
      hide_chapters:'hide',
      hide_normalquestions:'hide',


      pitch:1,         //判断是否选中的全局变量


      chapters:"",
      normalquestions:"",
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
      this.$axios.defaults.withCredentials=true;
      this.$axios.get(url)
      .then(
        function(response){

          self.course = response.data.data.course_name;
          self.hours = response.data.data.hours;
          self.whystudy = response.data.data.why_study;
          self.what_to_study_brief = response.data.data.what_to_study_brief;
          self.career_improvement = response.data.data.career_improvement;
          self.prerequisite = response.data.data.prerequisite;
          self.teachers = response.data.data.teachers;
          self.recommend_courses = response.data.data.recommend_courses;
          self.price = response.data.data.price_policy;            //价格策略

          self.chapters = response.data.data.chapters;
          self.normalquestions = response.data.data.questions;

        }
      )
      .catch(function(error){
        alert('error')
      })
    },

    show_overview:function (c1) {
        console.log(this.normalquestions)
        this.hide_overview = 'show';
        this.hide_chapters = 'hide';
        this.hide_normalquestions = 'hide';
        this.pitch = c1                 //修改标签点击样式
    },
    show_chapter:function (c2) {
        this.hide_overview = 'hide';
        this.hide_chapters = 'show';
        this.hide_normalquestions = 'hide';
        this.pitch = c2
    },
    show_normalquestions:function (c3) {
        this.hide_overview = 'hide';
        this.hide_chapters = 'hide';
        this.hide_normalquestions = 'show';
        this.pitch = c3
    },

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
.four-section li{
  margin-left:5px;
  width: 120px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
.active{
  color:black;
  background-color:red;
}
a {
  color: #42b983;
}
</style>
