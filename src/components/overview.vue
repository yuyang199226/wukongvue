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
        <div class="jumbotron">
          <h3>价格套餐</h3>
          <div class="row">
              <li v-for="item in price" >
                <div v-if="current_cusor == item.price">
                  <p style="list-style: none;
                            width: 220px;
                            height: 112px;
                            border: 1px solid #979797;
                            cursor: pointer;
                            margin-right: 50px;
                            margin-bottom: 60px;
                            display: list-item;
                            text-align: center;
                            line-height: 100px;
                            background-color: greenyellow;
                            "
                      v-on:click="pitch_on(item.price,item.valid_period)"


                            >
                          <span style="color: white;">{{item.valid_period}}</span>
                            <span style="color: white;">{{item.price}}</span>
                  </p>

                </div>
                <div v-else>
                  <p style="list-style: none;
                            width: 220px;
                            height: 112px;
                            border: 1px solid #979797;
                            cursor: pointer;
                            margin-right: 50px;
                            margin-bottom: 60px;
                            display: list-item;
                            text-align: center;
                            line-height: 100px;
                            "
                      v-on:click="pitch_on(item.price,item.valid_period)"


                            >
                          <span >{{item.valid_period}}</span>
                            <span>{{item.price}}</span>
                  </p>

                </div>

              </li>

          </div>
          <div><router-link to=""  class="btn btn-success ">加入购物车</router-link></div>
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
          <p class="row">
            <ul  class="col-md-5 col-md-offset-4">
              <li v-for="teacher in teachers" class="col-md-3">
                <div class="col-md-offset-3">{{teacher.name}}</div>
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
   data () {
     return {
       course:'',
       hours:'',
       what_to_study_brief:'',
       career_improvement:'',
       pitch:'',
       pitch_prices:'',
       pitch_period:'',
       current_cusor:-1

     }
   },
   mounted:function(){
//     this.get_course();
   },
  methods: {
      pitch_on:function(price,period){
          this.current_cusor = price    //改变游标，用来判断是否添加样式
          this.pitch_prices = price   //  把选择的价格保存到全局变量
          this.pitch_period = period    //把选择的周期存到全局变量
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
