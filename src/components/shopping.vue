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
        <tr class="table_body" v-for="(item, key) in carData">
          <td :id="elname+key"><input type="checkbox" name="course_choice" :value="key"></td>
          <td>{{item.name}}</td>
          <td>
            <select :name="item.name" class="select-option" v-model="item.default">
              <option v-for="(value, key) in item.policy" :value="value.price" :id="value.id">{{value.valid_period}}
              </option>
            </select>
          </td>
          <td>{{item.default}}</td>
          <td><a v-on:click="del_goods(key)">删除</a></td>
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
      <button type="button" class="btn btn-primary go_bill" v-on:click="payment">去结账</button>
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
        carData: '',
        price: '',
        elname: 'td_'
      }
    },
    mounted: function () {
      let that = this

      this.$axios.request({
        url: 'http://192.168.16.114:8000/shopping.json',
        method: 'GET'
      }).then(function (response) {
        that.carData = response.data.content.course
      })
    },
    methods: {
      select_all: function () {
        let table_body = document.getElementsByClassName('table_box')[0];
        let input_el = table_body.getElementsByTagName('input');
        for (var i = 0; i < input_el.length; i++) {
          if (!input_el[i].checked) {
            input_el[i].checked = true
          }
        }
      },
      cancel_all: function () {
        let table_body = document.getElementsByClassName('table_box')[0];
        let input_el = table_body.getElementsByTagName('input');
        for (var i = 0; i < input_el.length; i++) {
          if (input_el[i].checked) {
            input_el[i].checked = false
          }
        }
      },
      Inverse: function () {
        let table_body = document.getElementsByClassName('table_box')[0];
        let input_el = table_body.getElementsByTagName('input');
        for (var i = 0; i < input_el.length; i++) {
          if (input_el[i].checked) {
            input_el[i].checked = false
          } else {
            input_el[i].checked = true
          }
        }
      },
      del_goods: function (courseID) {
        let course_id = courseID
        let that = this
        this.$axios.request({
          method: 'DELETE',
          url: 'http://192.168.16.114:8000/shopping.json',
          data: {
            course_id: course_id
          }
        }).then(function (response) {
          if (response.data.code === 200) {
//              alert(response.data.content)
            let tr_el = document.getElementById(that.elname + course_id).parentElement
            let tbody_el = document.getElementById(that.elname + course_id).parentElement.parentElement
            tbody_el.removeChild(tr_el)
          } else {
            alert(response.data.msg)
          }

        })
      },
      payment: function () {
        let course_choice = document.getElementsByName('course_choice')
        let check_val = [];
        for (let k in course_choice) {
          let a = {};
          if (course_choice[k].checked) {
            let course_id = course_choice[k].value
            let current_price = course_choice[k].parentElement.nextElementSibling.nextElementSibling.firstElementChild
            let index = current_price.selectedIndex
            let price_id = current_price.options[index].id;
            a['course_id'] = course_id;
            a['price_policy_id'] = price_id;
            check_val.push(a)
          }
        }
        if (check_val.length) {
          this.$axios.request({
            method: 'POST',
            url: 'http://192.168.16.4:8080/payment_handle.json',
            data: JSON.stringify(check_val)
          }).then(function (response) {
            console.log(response.data)
          }).catch(function (response) {
            console.log(response.data)
          })
        }else {
          alert('未选择任何支付课程')
        }

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .go_bill {
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
