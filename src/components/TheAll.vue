<template>
    <div>
        <component v-bind:is="components" />
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
    data() {
        return {
            components: "TheOne"
        }
    }
}
</script>