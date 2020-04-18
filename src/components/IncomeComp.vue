<template>
    <div class="hello">
        <pie-chart :data="[[localityD, incomeD]]"></pie-chart>
        <p>Monthly income Distribution</p>
        <p>{{localityD}} = {{incomeD}}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'IncomeComp',
    props: {
        msg: String
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

            var localityCurrent = "Attiguppe";
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].locality == localityCurrent) {
                    this.incomeD = this.todos[i].income;
                    this.localityD = this.todos[i].locality;
                }
            }
        } catch (e) {
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
