<template>
  <div class="overview">
        <div class="jumbotron">
          <h3>为什么学习这门课</h3>
          <p>{{reason}}</p>
        </div >
        <div class="jumbotron">
          <h3>课程简介</h3>
          <p>{{brief}}</p>
          </div>
        <div>
          <h4>价格套餐</h4>
          <div class="row">
              <div v-for="item in price">
                <router-link to="">
                  {{item.valid_period}}
                  {{item.price}}
                </router-link>

              </div>

          </div>
        </div>
        <div class="jumbotron">
          <h3>对你的职业生涯有什么帮助</h3>
          <p>{{career}}</p>
          </div>
        <div class="jumbotron">
          <h3>你需要提前掌握哪些技能</h3>
          <p>{{prerequisite}}
          </p>
          </div>
           <div class="jumbotron">
          <h3>老师列表</h3>
          <p>
            <ul>
              <li v-for="teacher in teachers">
                <div>{{teacher.name}}</div>
                <div><img v-bind:src="teacher.image"></div>
                <div>{{teacher.brief}}</div>
              </li>
            </ul>
             </p>
          </div>
        <div class="jumbotron">
          <h3> 推荐课程</h3>
          <p>
            <ul>
               <li v-for="item in recommend">
                 <span></span>{{item.name}}
              </li>
            </ul>
          </p>
        </div>
      </div>
</template>

<script>

export default {
  name: 'CourseDetail',
  props:['reason','brief','career','prerequisite','teachers','recommend','price'],
  // data () {
  //   return {
  //     course:'',
  //     hours:'',
  //     // whystudy:'',
  //     what_to_study_brief:'',
  //     career_improvement:'',
  //     prerequisite:'',
  //     teachers:'',
  //     recommend_courses:'',
  //     // recommend_courses:'',

  //   }
  // },
  // mounted:function(){
  //   this.get_course();
  // },
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
