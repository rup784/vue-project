<template>
  <div class="hello">
  <div id="mapid"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'PincodeComp',
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
    const res = await axios.get('https://api.jsonbin.io/b/5e96c68a435f5604bb41be7c');
    this.todos = res.data;
     } catch(e){
    console.error(e);
  }
}, 
  mounted:function () {

 const mymap = L.map('mapid').setView([0, 0], 1);
 const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
 
 const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
 const tiles = L.tileLayer(tileUrl,{attribution });
 tiles.addTo(mymap);
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
