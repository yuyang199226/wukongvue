<template>
  <div class="chapters">


    <div v-for="chapter in chapters">
      <div>{{chapter.chapter}}.&nbsp{{chapter.name}}</div>
    </div>
      </div>
</template>

<script>

export default {
  name: 'CourseDetail',
  props:['chapters'],
}
</script>

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
