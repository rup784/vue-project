<template>
    <div id="app">
        <div class="container">
            <div class="report_container">
                <h1>Report</h1>
                <div id="details"></div>
    
                <div>
                    <p>Enter pincode number for Seeing Graph view</p>
    
                </div>
            </div>
            <div>
                <button @click="toggle = !toggle" class="btn btn-success">
                    <span :class="{active: !toggle}">PincodeComp</span> /
                    <span :class="{active: toggle}">LocalityComp</span> 
                  </button>
                <div :class="{active: !toggle}" class="pincode_container">
                    <PincodeComp msg="Welcome to PincodeComp" />
                    <h3>Click on region to check related Pincode details</h3>
                </div>
    
                <div :class="{active: toggle}" class="Locality_container">
                    <LocalityComp msg="Welcome to LocalityComp" />
                    <h3>Click on region to check related Locality details</h3>
                </div>
            </div>
        </div>
    
        <div class="container">
            <div class="income_container">
                <h1>IncomeComp</h1>
                <IncomeComp :localityAppComp="localityAppComp" />
            </div>
            <div class="expenditure_container">
                <h1>ExpenditureComp</h1>
                <ExpenditureComp :pincodeAppComp="pincodeAppComp" />
            </div>
        </div>
    
    </div>
</template>

<script>
import PincodeComp from './components/PincodeComp.vue'
import LocalityComp from './components/LocalityComp.vue'
import ExpenditureComp from './components/ExpenditureComp.vue'
import IncomeComp from './components/IncomeComp.vue'

export default {
    name: 'App',
    props: {
        msg: String
    },
    components: {
        PincodeComp,
        LocalityComp,
        ExpenditureComp,
        IncomeComp
    },
    data() {
        return {
            toggle: true,
            pincodeAppComp: 560110,
            localityAppComp: "Attiguppe"
        };
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.pincode_container.active,
.Locality_container.active {
    opacity: 0;
    height: 0px;
    transform: scale(0);
}

.pincode_container,
.Locality_container {
    height: auto;
    opacity: 1;
}

.btn {
    margin: 10px;
}
</style>