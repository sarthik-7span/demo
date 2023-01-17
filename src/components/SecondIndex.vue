<template>
    <div style="background:pink">
        <div>
            <h1>Second Index</h1>
            <div>
                <div>
                    <input type="text" ref="input" value="12345">
                    <button @click="submit" type="submit">submit</button>
                    <h3 class="secind" ref="secind">second index ref</h3>
                    <button @click="htmlsub">submit</button>
                    <h3>{{ input_data }}</h3>
                </div>
                <div>
                    <ul v-for="x in data" :key="x" ref="vloop">
                        <li>{{ x.name }} -- {{ x.lname }}</li>
                    </ul>
                </div>
                <ul v-for="x in text2" :key="x">
                    <li>{{ x.name }}/{{ x.sname }}</li>
                </ul>
                <p>/////</p>
                <ul v-for="x in text" :key="x">
                    <li>{{ x.name }}/{{ x.sname }}</li>
                </ul>
                <button @click="pop">click me </button>
                <h1 @click="textchng">{{ text5 }}</h1>
                <h3 @click="cngtxt">{{ text6 }}</h3>

                <FancyButton></FancyButton>

                <div>
                    <button @click="form1">Form One</button>
                    <button @click="form2">Form Two</button>
                </div>

                <component :is="component"></component>
            </div>
            <div>
                <form action="" v-if="!success">
                    <input type="text" v-model="input">
                    <p>input value is:{{ input }}</p>
                    <div>
                        <label for="bmw">BMW</label>
                        <input type="checkbox" id="bmw" value="BMW" v-model="checkbox">
                        <label for="audi">AUDI</label>
                        <input type="checkbox" id="audi" value="AUDI" v-model="checkbox">
                        <label for="jaguar">JAGUAR</label>
                        <input type="checkbox" id="jaguar" value="JAGUAR" v-model="checkbox">
                        <ul>
                            <li v-for="cb in checkbox" :key="cb">{{ cb }}</li>
                        </ul>
                    </div>
                    <div>
                        <select name="select" id="select" v-model="selectop">
                            <option value="bmw">bmw</option>
                            <option value="audi">audi</option>
                            <option value="ferrari">ferrari</option>
                            <option value="mercides">mercides</option>
                        </select>
                        <p>{{ selectop }}</p>
                    </div>

                    <button @click.prevent="submitForm">submit</button>
                </form>
                <div v-if="success">
                    <h3>thank you for your time</h3>
                    <p style="color:green">Form will be successfully Submited</p>
                </div>
            </div>
            <p>{{ getname("sarthik") }}</p>
            <button @click="show = !show">HIDE SHOE BTNM</button>
            <ShowBlog v-if="show" />
            <ListBlog />
            <div>
                <input type="text" v-model="txt">
                <h3>{{ txt }}</h3>
                <button @click="type()">click me</button>
            </div>
            <ul style="background:orange">
                <li v-for="x in empdata" :key="x.name">
                    <TheChild :empdata="x" :triger="triger" :bala="bala" name="sarthik" />
                </li>
            </ul>
            <ul>
                <li v-for="y in detail" :key="y">{{ y }}</li>
            </ul>
            <h1>"balatxt is here: "{{ balatxt }}</h1>
            <div>
                <input type="number" v-model.number="trim">
                <h2>input value:{{ trim }}</h2>
            </div>
            <div>
                <h2 ref="count">{{ count }}</h2>
                <button @click="count++">++</button>
                <button @click="count--">--</button>
            </div>
        </div>
        <div>
            <table class="table">
                <tr>
                    <th>id</th>
                    <th>First name</th>
                    <th>Avatar</th>
                </tr>
                <tr v-for="item in apiData" :key="item" >
                    <td>{{ item.id }}</td>
                    <td>{{ item.first_name }}</td>
                    <td><img :src="item.avatar" alt=""></td>
                </tr>
            </table>
        </div>
        <div>
            <form action="">
                <input type="text" placeholder="Add email" v-model="email"><br>
                <input type="password" placeholder="Enter password" v-model="password"><br>
                <button @click.prevent="adduser()">ADD USER</button>
            </form>
        </div>
        <div>
            second index added
        </div>
    </div>
</template>
<script>
import FancyButton from "./FancyButton.vue";
import FormOne from "./FormOne.vue";
import FormTwo from "./FormTwo.vue";
import ShowBlog from "./ShowBlog.vue";
import ListBlog from "./ListBlog.vue";
import TheChild from "./TheChild.vue";
import NewChild from "./NewChild.vue";

export default {
    name: "SecondIndex",
    components: {
        FancyButton,
        FormOne,
        FormTwo,
        ShowBlog,
        ListBlog,
        TheChild,
        NewChild
    },
    data() {
        return {
            email: "",
            password: "",
            apiData:[],
            show: true,
            count: 0,
            name: "Sunny",
            trim: "",
            empdata: [{
                name: "suresh",
                hobbie: "chess"
            },
            {
                name: "kamlesh",
                hobbie: "swimimg"
            },
            {
                name: "lokesh",
                hobbie: "gamimg"
            },
            {
                name: "chukesh",
                hobbie: "bike riding"
            }
            ],
            value: "life cycle",
            balatxt: null,
            txt: null,
            success: false,
            selectop: "",
            input: "",
            input_data: "",
            data: [
                { name: "sarthik", lname: "kevadiya" },
                { name: "sunny", lname: "kevadiya" }
            ],
            ok: true,
            component: "FormOne",
            checkbox: [],
        }
    },
    props: {
        text2: Array,
        text: Array,
        text5: String,
        text6: String,
        detail: Array
    },
    methods: {
        data3() {
            console.warn("created");
        },
        bala(name) {
            this.balatxt = name
        },
        triger(x) {
            alert(x)
        },
        getname(val) {
            return val + " " + "kevadiya"
        },
        pop() {
            this.text5.slice(3)
        },
        cngtxt() {
            this.text6.slice(2, 6)
        },
        submit() {
            this.input_data = this.$refs.input.value
        },
        htmlsub() {
            console.log(this.$refs.secind.innerHTML)
        },
        textchng() {
            this.$emit("textchng11", "emit chnge txt success")
        },
        form1() {
            this.component = "FormOne"
        },
        form2() {
            this.component = "FormTwo"
        },
        submitForm() {
            this.$http.post("https://jsonplaceholder.typicode.com/posts",
                {
                    userId: 1,
                    input: this.input,
                    checkbox: this.checkbox,
                    selectop: this.selectop
                }
            ).then((value) => { console.log(value) })

            this.success = true
        },
        adduser() {
            console.warn(this.email,this.password)
        }
    },
    async mounted() {
        let data = await this.$http.get("https://reqres.in/api/users?page=1");
        this.apiData = data.body.data,
        console.warn("the data is:" + this.apiData)
    },
    beforeUnmount() {
        console.warn("beforeUnmount")
    },
    Unmounted() {
        console.warn("Unmounted")
    },
    // beforeUpdate() {
    //     console.warn("beforeUpdate " + this.$refs.count.innerHTML)
    // },
    // updated() {
    //     console.warn("updated " + this.$refs.count.innerHTML)
    // },
}
</script>
<style scoped>
h1 {
    color: red;
}
.table,tr,td,th {
    border:  1px solid black;
    border-collapse: collapse;
    padding: 10px 20px;
}
</style>