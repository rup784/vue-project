<template>
  <div class="hello">
    <ul>
<li>{{todos}}</li>
</ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'LocalityComp',
  props: {
    msg: String
  }, 
  data(){
    return{
      todos:[]
    };
},
async created(){
  try{
    const res = await axios.get('https://api.jsonbin.io/b/5e96c65c2940c704e1d86721');
    this.todos = res.data;
  } catch(e){
    console.error(e);
  }
}

}
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
</style>
