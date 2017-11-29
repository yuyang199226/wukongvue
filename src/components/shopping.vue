<template>
  <div>
    <div class="jumbotron">
      <h1>{{msg}}</h1>
      <p>请仔细核对您选择的课程套餐</p>
    </div>
    <div class="table_area">
      <table class="table">
        <thead class="table_head">
        <tr>
          <th>选择</th>
          <th>课程名称</th>
          <th>有效期</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody class="table_box">
        <tr class="table_body">
          <td><input type="checkbox" name="course_choice" value="course_id"></td>
          <td>Python</td>
          <td>
            <select name="course_validity" class="select-option">
              <option value="111">111</option>
              <option value="222">222</option>
              <option value="333">333</option>
            </select>
          </td>
          <td>5000</td>
          <td><a href="">删除</a></td>
        </tr>
        <tr class="table_body">
          <td><input type="checkbox" name="course_choice" value="course_id"></td>
          <td>Python</td>
          <td>
            <select name="course_validity" class="select-option">
              <option value="111">111</option>
              <option value="222">222</option>
              <option value="333">333</option>
            </select>
          </td>
          <td>5000</td>
          <td><a href="">删除</a></td>
        </tr>
        <tr class="table_body">
          <td><input type="checkbox" name="course_choice" value="course_id"></td>
          <td>Python</td>
          <td>
            <select name="course_validity" class="select-option">
              <option value="111">111</option>
              <option value="222">222</option>
              <option value="333">333</option>
            </select>
          </td>
          <td>5000</td>
          <td><a href="">删除</a></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
      <span>
      <button type="button" class="btn btn-default" v-on:click="select_all">全选</button>
      <button type="button" class="btn btn-default" v-on:click="Inverse">反选</button>
      <button type="button" class="btn btn-default" v-on:click="cancel_all">取消</button>
    </span>
    <span>
      <button type="button" class="btn btn-primary go_bill">去结账</button>
      <button type="button" class="btn btn-info">返回</button>
    </span>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Courses',
    data() {
      return {
        msg: '购物车',
      }
    },
    mounted: function () {
      let that = this
      this.$axios.request({
        url: 'http://192.168.16.114:8000/shopping.json',
        method: 'GET'
      }).then(function (response) {
        console.log(response.data)
      })
    },
    methods: {
      select_all: function () {
        let table_body = document.getElementsByClassName('table_box')[0];
        let input_el = table_body.getElementsByTagName('input');
        for (var i=0;i<input_el.length;i++){
          if (!input_el[i].checked){
            input_el[i].checked = true
          }
        }
      },
      cancel_all: function () {
        let table_body = document.getElementsByClassName('table_box')[0];
        let input_el = table_body.getElementsByTagName('input');
        for (var i=0;i<input_el.length;i++){
          if (input_el[i].checked){
            input_el[i].checked = false
          }
        }
      },
      Inverse: function () {
        let table_body = document.getElementsByClassName('table_box')[0];
        let input_el = table_body.getElementsByTagName('input');
        for (var i=0;i<input_el.length;i++){
          if (input_el[i].checked){
            input_el[i].checked = false
          }else{
            input_el[i].checked = true
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .go_bill{
    position: relative;
    margin-left: 70%;
  }

  .table_body td {
    text-align: center;
  }

  .table_head th {
    text-align: center;
  }
</style>
