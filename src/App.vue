<template>
    <div id="app">
        <div class="container">
            <div class="report_container">
                <h1>Report</h1>
            </div>
            <div class="pincode_container">
                <h1>PincodeComp</h1>
                <PincodeComp msg="Welcome to PincodeComp" />
            </div>
        </div>
    
        <div class="container">
            <div class="income_container">
                <h1>IncomeComp</h1>
                <IncomeComp msg="Welcome to IncomeComp" />
            </div>
            <div class="expenditure_container">
                <h1>ExpenditureComp</h1>
                <ExpenditureComp msg="Welcome to ExpenditureComp" />
            </div>
        </div>
    
    </div>
</template>

<script>
import PincodeComp from './components/PincodeComp.vue'
import ExpenditureComp from './components/ExpenditureComp.vue'
import IncomeComp from './components/IncomeComp.vue'

export default {
    name: 'App',
    components: {
        PincodeComp,
        ExpenditureComp,
        IncomeComp
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
</style>
