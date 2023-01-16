<template>
    <div>
        <p :class="style" v-bind="$attrs">{{ empdata.name }}</p>
        <p>{{ empdata.hobbie }}</p>
        <button @click="triger(empdata.name)">Click me</button>
        <br>
        <button @click="bala(admin)">BALA BUTTON</button>
        <h3>{{ name }}</h3>
        <p>{{ count }}</p>
        <button @click="count++">++</button>
        <button @click="count--">--</button>
    </div>
</template>
<script>

export default {
    name: "TheChild",
    inheritAttrs: false,
    data() {
        return {
            admin: "BALA",
            count: 0
        }
    },
    props: {
        empdata: Object,
        triger: Function,
        bala: Function
    },
    computed: {
        style() {
            return {
                font: true,
                color: false,
                bg: true
            }
        }
    },
    watch: {
        count() {
            alert("value change")
        }
    }
}
</script>