<template>
    <div>
        <component v-bind:is="components" />
        <h1>hello:{{ slug }}</h1>
        <router-link to="/">Go to home</router-link>
        <button @click="components = 'TheOne'">TheOne</button>
        <button @click="components = 'TheTwo'">TheTwo</button>
        
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
    props: ['slug'],
    data() {
        return {
            components: "TheOne"
        }
    }
}
</script>