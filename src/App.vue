<template>
  <div id="app">
    <!-- <TheSub v-bind:fname="fname" @fname="getName" @Mname="getmname" />
    <TheAll />
    <TheIndex v-bind:head="head" gm="Good Morning" v-on:changeTitle="updateTitle($event)" test="successfully done" /> -->
    <router-view>

    </router-view>
  </div>
</template>

<script>
// import TheIndex from './components/TheIndex.vue'
// import TheSub from './components/TheSub.vue'
// import TheAll from "./components/TheAll.vue"

export default {
  name: 'App',
  components: {
    // TheIndex,
    // TheSub,
    // TheAll,
  },
  data() {
    return {
      title: "Ckekc ckeck",
      fruit: [
        { name: "Mango", color: "yellow" },
        { name: "applr", color: "red" },
        { name: "kiwi", color: "green" },
        { name: "orange", color: "orange" }
      ],
      head: "Heading Calling",
      fname: "HEY HEY SAY HEY HEY",
      Mname: "Abhi",    }
  },
  methods: {
    updateTitle(updatedTitle) {
      this.head = updatedTitle
    },
    getName(value) {
      this.block = value // SUNNY Tamil
    },
    getmname(value) {
      this.Mname = value
    }
  },

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
