<template>
    <div>
        <div>
            <button @click="btn1">TheOne</button>
            <button @click="btn2">TheTwo</button>
        </div>
        <component :is="component"></component>
        <h1>hello:{{ prams }}</h1>
        <h2>{{ prams }}</h2>
        <router-link to="/">Go to home</router-link>

        <h1 @click="textchng">{{ text5 }}</h1>
    </div>
</template>
<script>
import TheOne from "./TheOne.vue";
import TheTwo from "./TheTwo.vue";
export default {
    name: "TheAll",
    components: {
        TheOne,
        TheTwo,
    },
    data() {
        return {
            component: "TheTwo",
            prams: null
        }
    },
    methods: {
        btn1() {
            return this.component = "TheOne"
        },
        btn2() {
            return this.component = "TheTwo"
        }
    },
    created() {
        this.prams = this.$route.params.slug0
    }
}
</script>