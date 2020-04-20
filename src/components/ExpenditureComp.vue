<template>
    <div class="hello">
        <input id="titlePin" :value="pincodeAppComp" placeholder="Enter pincode number for Seeing Graph view" v-on:keyup.enter="updatePin">
        <button v-on:click="updatePin">
                                      Show Graph view
                                    </button>
        <div class="chart-container">
            <div class="left-copy">
                <p>Total expenditure in Lakhs</p>
            </div>
            <column-chart :data="[['other', otherD], ['house', houseD], ['food', foodD],['apparel', apparelD], ['house', teansportD],['health', healthD],['finance', financeD], ['education', educationD], ['entertainment', entertainmentD]]"></column-chart>
        </div>
        <p>Expenditure for Pincode {{pincodeD}}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ExpenditureComp",
    props: {
        pincodeAppComp: Number
    },
    data() {
        return {
            targetExpen: [],
            otherD: [],
            houseD: [],
            foodD: [],
            apparelD: [],
            teansportD: [],
            healthD: [],
            financeD: [],
            educationD: [],
            entertainmentD: [],
            pincodeD: [],
            todos: []
        };
    },
    async created() {
        try {
            const res = await axios.get(
                'https://api.jsonbin.io/b/5e96c5f2435f5604bb41be46'
            );
            this.todos = res.data;
            this.updateValue();
        } catch (e) {
            console.error(e);
        }
    },
    methods: {
        updateValue: function() {
            // var pincodeD = 560040;
            for (var i = 0; i < this.todos.length; i++) {
                // if (this.todos[i].pincode == this.pincodeAppComp) {
                //     this.targetExpen = this.todos[i];
                // }
                if (this.todos[i].pincode == this.pincodeAppComp) {
                    this.otherD = this.todos[i].other;
                    this.houseD = this.todos[i].house;
                    this.foodD = this.todos[i].food;
                    this.apparelD = this.todos[i].apparel;
                    this.teansportD = this.todos[i].teansport;
                    this.healthD = this.todos[i].health;
                    this.financeD = this.todos[i].finance;
                    this.educationD = this.todos[i].education;
                    this.entertainmentD = this.todos[i].entertainment;
                    this.pincodeD = this.todos[i].pincode;
                }
            }
        },
        updatePin: function() {
            this.pincodeAppComp = document.getElementById('titlePin').value;
            console.log(this.pincodeAppComp);
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

.chart-container {
    display: flex;
}

.chart-container .left-copy p {
    transform: rotate(-90deg);
    background: #369;
    color: #fff;
    padding: 5px;
}

.left-copy {
    width: auto;
    margin: auto 0px;
}
</style>

