<template>
    <div>
        <h2>The Sub</h2>
        <p><b>{{fname}}</b></p>
        <button @click="hello()">$emit button</button>
    </div>
    
</template>
<script>
export default {
    name: "TheSub",
    props: {
        fname: String
    },
    methods: {
        hello() {
            console.log(this.$emit('fname', "Raja Tamil"))
        }
    },
}
</script>
<style>

</style>