<template>
  <div class="hello">
  <div class="chart-container">
  <div class="left-copy">
  <p>Total expenditure in Lakhs</p>
  </div>
    <column-chart :data="[['other', targetExpen.other], ['house', targetExpen.house], ['food', targetExpen.food],['apparel', targetExpen.apparel], ['house', targetExpen.house], ['teansport', targetExpen.teansport],['health', targetExpen.health], ['education', targetExpen.education], ['entertainment', targetExpen.entertainment]]"></column-chart>
  </div>

    <p>Expenditure for Pincode {{targetExpen.pincode}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ExpenditureComp",
  props: {
    msg: String
  },
  data() {
    return {
      targetExpen: [],
      todos: []
    };
  },
  async created() {
    try {
      const res = await axios.get(
        "https://api.jsonbin.io/b/5e96c5f2435f5604bb41be46"
      );
      this.todos = res.data;

      var pincodeD = 560040;
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].pincode == pincodeD) {
          this.targetExpen = this.todos[i];
        }
      }
      
          
    } catch (e) {
      console.error(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.chart-container{
  display: flex;
}
.chart-container .left-copy p{
       transform: rotate(-90deg);
    background: #369;
    color: #fff;
    padding: 5px;
}
.left-copy{
  width: auto;
    margin: auto 0px;
}
</style>

