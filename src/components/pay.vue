<template>
  <div>
    <div class="jumbotron">
      <h1>{{msg}}</h1>
      <p>有优惠券要记得使用~</p>
    </div>
    <div class="table_area" >
      <table class="table table-bordered">
        <thead class="table_head">
        <tr>
          <th>课程名称</th>
          <th>优惠券</th>
          <th>价格</th>
        </tr>
        </thead>
        <tbody class="table_box">
        <tr class="table_body">
          <td>Python</td>
          <td>
            <select name="Python" class="select-option">
              <option value="400" :id="400" selected>优惠券1</option>
              <option value="400" :id="400">优惠券2</option>
              <option value="400" :id="400">优惠券3</option>
            </select>
          </td>
          <td>13555</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
      <span>通用优惠券:
        <select name="tongy" id="asdasd">
          <option value="11">通用1</option>
          <option value="11">通用2</option>
          <option value="11">通用3</option>
          <option value="11">通用4</option>
        </select>
      </span>
      <span class="integral">贝里: 313213213</span>
      <span>
        <button type="button" class="btn btn-primary go_bill">去支付</button>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Courses',
    data() {
      return {
        msg: '支付订单'
      }
    },
    mounted: function () {
      this.$axios.request
    }
  }
</script>

<style scoped>
  .integral{
    margin-left: 20px;
  }
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
