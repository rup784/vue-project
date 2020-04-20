<template>
    <div class="hello">
        <input id="title" :value="localityAppComp" placeholder="Enter pincode number for Seeing Graph view" v-on:keyup.enter="updatePin">
        <button v-on:click="updatePin">
                              Show Graph view
                            </button>
        <div>
            <pie-chart :data="[[localityD, incomeD]]"></pie-chart>
            <p>Monthly income Distribution</p>
            <p>{{localityD}} = {{incomeD}}</p>
    
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'IncomeComp',
    props: {
        localityAppComp: String
    },
    data() {
        return {
            localityD: [],
            incomeD: [],
            todos: []
        };
    },
    async created() {
        try {
            const res = await axios.get('https://api.jsonbin.io/b/5e96c62f435f5604bb41be5a');
            this.todos = res.data;
            this.updateValue();
        } catch (e) {
            console.error(e);
        }
    },
    methods: {
        updateValue: function() {
            // var localityCurrent = "Attiguppe";
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].locality == this.localityAppComp) {
                    this.incomeD = this.todos[i].income;
                    this.localityD = this.todos[i].locality;
                }
            }
        },
        updatePin: function() {
            this.localityAppComp = document.getElementById('title').value;
            console.log(this.localityAppComp);
            this.updateValue();
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
