<template>
    <div>
        <h2 >The Sub</h2>
        <p><b>{{fname}}</b></p>
        <router-link to="/">Go to home</router-link>

        <button @click="$emit('fname', true)">$emit button</button>
        <button @click="$emit('Mname', 'Gordhanbhai')">child to parent</button>
        <button>Hide It</button>
        <h1>{{ text5 }}</h1>

    </div>
    
</template>
<script>
export default {
    name: "TheSub",
    data() {
        return {
           
        }
    },
    props: {
        fname: String,
        text5: String,
    },
    // methods: {
    //     hello() {
    //         this.$emit('fname', "Raja Tamil")
    //     }
    // },
}
</script>
<style>

</style>