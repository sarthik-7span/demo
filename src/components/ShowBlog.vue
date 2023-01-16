<template>
    <div v-width="'mid-wide'">
        <h1>ShowBlog</h1>
        <ul>
            <div>
                <input type="text" v-model="filter" placeholder="Serch here...">
            </div>
            <li v-for="get in filterblog" :key="get" v-rainbow style="background-color:aquamarine;">
                {{ get.userId }} / {{ get.body | bold | filter}}
                <p style="color:red">{{ get.title }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import searchmixin from "../mixins/searchmixin";

export default {
    name: "SecondIndex",
    data() {
        return {
            data: [],
            filter: ''
        }
    },
    mounted() {
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then((value) => this.data = value.body.slice(0, 10));
    },
    directives: {
        'rainbow': {
            bind(el) {
                el.style.color = "#" + Math.random().toString().slice(2, 8)
            }
        },
        'width': {
            bind(el, binding) {
                if (binding.value == 'wide') {
                    el.style.maxWidth = "1200px";
                }
                else if (binding.value == 'mid-wide') {
                    el.style.maxWidth = "1400px";
                }
                else {
                    el.style.maxWidth = "1600px";
                }
            }
        }
    },
    mixins: [searchmixin]
}
</script>
<style scoped>

</style>