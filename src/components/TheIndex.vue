<template>
    <div class="index">
        <div>
            <div>
                <router-link :to="{ name: 'TheSub'}">Go to sub</router-link><br />
                <router-link to="TheAll/first">Go to all first</router-link> <br>
                <router-link to="TheAll/second">Go to all second</router-link> <br>
                <router-link to="TheAll/third">Go to all third</router-link>

            </div>
            <div class="orange">
                <h1 v-if="good">{{ index }}/{{ gm }}</h1>
                <h2>{{ goodmor('qwert') }}</h2>
                <a v-bind:href="link">Sarthik Kevadiya</a>
                <input type="text" value="sarthik" v-model.lazy="sarthik">
                <h3>{{ sarthik }}</h3>
                <b v-html="Sunny"></b>
                <button @click="good = !good">Click here</button>

                <p>{{ count }}</p>
                <button v-on:click.stop="increment(10)">increase10</button>
                <button @click="Decrement(20)">Decrese20</button>
                <div class="box" @mousemove.stop="mouse"><span>{{ X }}/ </span><span>{{ Y }}</span></div>
            </div>
            <div>
                <form action="">
                    <input type="text" @keyup.left="fun">
                    <button @click.once="fun">submit</button>
                </form>
                <p>hey:{{ troy(10, 33, 33) }}:{{ h }}</p>
                <button @click="troy(10, 23, 33)">click me</button>
            </div>
            <div class="orange">
                <p>a-{{ a }}</p>
                <p>b-{{ b }}</p>
                <p>{{ dun }}</p>
                <button @click="a++">click me for a</button>
                <button @click="b++">click me for b</button>
                <p>{{ dun2 }}</p>
            </div>
            <div>
                <h3 :class="{ red, blue }">class pe class</h3>
                <button @click="red = !red, blue = !blue">click red</button>
            </div>
            <div class="orange">
                <p v-show="hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi praesentium illum
                    dolore
                    iusto recusandae repellat, impedit vero beatae rem saepe et dolores ex! Harum ea omnis esse sequi
                    velit
                    placeat!</p>
                <button @click="hidden = !hidden">click Me</button>
            </div>
            <div>
                <p v-for="items in bio" :key="items">{{ items.name }} - {{ items.cars }}</p>
            </div>
            <div class="orange">
                <input type="text" name="" id="" ref="data" value="sarthik">
                <button type="submit" @click="input()">submit</button>
                <p>data:{{ data }}</p>
                <button>input ref</button>
            </div>
            <div>
                <h1>
                    {{ troy11() }}
                </h1>
            </div>
            <div class="employ-box orange">
                <ul v-for="check in employe" :key="check" class="employ-box__card">
                    <li class="employ-name">{{ check.name }}</li>
                    <li class="employ-name employ-name--color" v-show="check.show">{{ check.department }}</li>
                    <button class="employ-btn" @click="(check.show = !check.show)">Click karne bhai</button>
                </ul>
                <h2>{{ test }}</h2>
            </div>
            <div>
                <h1>{{ title }}</h1>
                <h2>hello here</h2>
            </div>
            <div class="orange">
                <ul v-for="item in fruit" :key="item">
                    <li>{{ item.name }}</li>
                    <li>{{ item.color }}</li>
                </ul>
                <button>chnage it</button>
            </div>
            <div>
                <h2 @click="changeTitle()">{{ head }}</h2>
            </div>
            <div class="orange">
                <h2>input binding</h2>
                <input class="magic" type="text" value="hey" v-model.lazy="swith" placeholder="sarthik kevadiya">
                <p>{{ swith }}</p>
                <form action="">
                    <input type="checkbox" id="fruit" value="Fruit" v-model="checkbox">
                    <label for="fruit">Fruit</label>
                    <input type="checkbox" id="bike" value="bike" v-model="checkbox">
                    <label for="bike">bike</label>
                    <input type="checkbox" id="cars" value="carsaaaa" v-model="checkbox">
                    <label for="cars">carsaaaa</label>
                    <ul>
                        <li v-for="check in checkbox" :key="check">{{ check }}</li>
                    </ul>
                    <select v-model="data2.select">
                        <option v-for="select in option" :key="select">{{ select }}</option>
                    </select><br />
                    <button type="submit" @click.prevent="post">Submit</button>
                </form>
                <p>hey:{{ data2.select }}</p>
            </div>
            <div class="orange" v-width="'wide'">
                <h2 v-rainbow="">hello directive</h2>
            </div>
            <div class="skyblue" v-width="'mid-wide'">
                <h2 v-rainbow="">hello directive</h2>
            </div>
            <div class="orange" v-width="">
                <h2 v-rainbow="">hello directive</h2>
            </div>
            <div>
                <h2>{{ fillter | toUpperCase }}</h2>
                <p>{{ lorem | slice }}</p>
            </div>
            <div class="skyblue">
                <input type="text" placeholder="Enter Name Buddy" v-model="data_in">
                <ul v-for="item in data_filter" :key="item">
                    <li>{{ item.name }}</li>
                    <li>{{ item.cars }}</li>
                </ul>
            </div>
            <div>
                <h3>{{ sunny }}</h3>
                <button @click="change()">click me sunny</button>
            </div>
            <div>
                <h2 :class="click ? bg__green : bg__red">Dynamic classes</h2>
                <h2 :class="{ mercedes }">Dynamic classes 2</h2>
                <h2 :class="['one', 'two', 'three']">Dynamic classes 3</h2>
                <h3 :class="$attrs.class">Dynamic classes 4</h3>
                <p :style="{ fontSize: fontSize }">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                    quisquam dolores deserunt culpa odio quasi odit, recusandae laudantium esse hic!</p>
                <button @click="fontsize()">change font</button>
                <button @click="click = !click">Add Class</button>
            </div>
            <div class="orange">
                <h1 v-if="awesome">The Title tag</h1>
                <p v-else>hewertyu</p>
                <button @click="awesome = !awesome">click me</button>
            </div>
            <div>
                <h3>text::{{ text }}</h3>
                <input type="text" v-model="inputage">
                <p>{{ inputage }}</p>
                <button @click="agecalc(ages.values())">eligible or not</button>
            </div>
            <div :class="{ hello: hello }">
                <h1>{{ text3 }}</h1>
                <button @click="hello = !hello">Click me</button>
                <button @click="text3++">increment</button>
                <button @click="text3--">decrement</button>
                <input type="text" v-model.lazy="store">
                <h3>{{ store }}</h3>
            </div>
            <div>
                <button @click="none = !none">click me none</button>
                <button @click="none2 = !none2">click me none2</button>

                <p v-if="none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quos exercitationem
                    nostrum veniam, adipisci minus provident? Dolor dicta laborum adipisci laboriosam nesciunt. Iusto
                    sunt totam illum debitis tenetur. Possimus iste officia deleniti eos autem inventore quis suscipit,
                    vero ipsa ipsum beatae iure! Praesentium a cum laborum velit placeat nulla neque sapiente libero
                    quae at fuga inventore nihil, est nostrum optio ipsam obcaecati dolores molestiae, quisquam
                    necessitatibus beatae. Rem iste tempore corrupti quod, explicabo consequatur aut consectetur optio
                    pariatur voluptate blanditiis id nesciunt at molestias nobis natus laboriosam, omnis minima.
                    Reprehenderit soluta quam ab, quasi totam amet vitae iste minima in.</p>
                <p v-else-if="none2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quos exercitationem
                    nostrum veniam,
                    adipisci minus provident? Dolor dicta laborum adipisci laboriosam nesciunt. Iusto sunt totam illum
                    debitis tenetur.
                    Possimus iste officia delquis suscipit, vero ipsa ipsum beatae iure! Praesentium a cum
                    laborum velit placeat nulla neque sapiente libero quae at fuga inventore nihil, est nostrum optio
                    ipsam obcaecati
                    dolores molestiae, quisquam necessitatibus beatae. Rem iste tempore corrupti quod, explicabo
                    consequatur aut
                    consectetur optio pariatur voluptate blanditiis id nesciunt at molestias nobis natus laboriosam,
                    omnis minima.
                    Reprehenderit soluta quam ab, quasi totam amet vitae iste minima in.</p>
                <p v-else>ore corrupti quod, explicabo consequatur aut
                    consectetur optio pariatur voluptate blanditiis id nesciunt at molestias nobis natus laboriosam,
                    omnis minima.
                    Reprehenderit soluta quam ab, quasi totam amet vitae iste minima in.</p>
            </div>
            <div v-for="x in patel" :key="x">
                <ul>
                    <li>{{ x.name }}-{{ x.weight }}-{{ x.village }}</li>
                </ul>
            </div>
            <div>
                <input type="text" ref="input2" value="123">
                <button @click="readrefs()">submit</button>
            </div>
        </div>
        <TheSub :text5="text5"/>
        <SecondIndex :text="text2" :text2="text2" :text5="text5" :text6="text6" v-on:textchng11="updatetitle($event)" :detail="detail" />
        <h1>TESTING TEXT here</h1>
    </div>
</template>
<script>
import searchmixin from '@/mixins/searchmixin';
import SecondIndex from "./SecondIndex.vue";
import TheSub from "./TheSub.vue";

export default {
    name: "TheIndex",
    components: {
        SecondIndex,
        TheSub
    },
    data() {
        return {
            detail: ["java", "pythan", "php"],
            text6: "checking text6",
            text5: "emit text",
            text2: [
                { name: "hello", sname: "fello" },
                { name: "hello2", sname: "fello2" }
            ],
            none: true,
            none2: true,
            hello: true,
            html: "<h1>eak do tin char pach</h1>",
            link3: "https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5",
            store: "",
            text3: 123,
            inputage: "",
            text: "",
            ages: [20, 34, 44, 56, 23, 18, 27],
            fontSize: "40px",
            mercedes: true,
            sunny: "sunny",
            index: "hello sarthik",
            good: true,
            link: 'https://stackoverflow.com/questions/48929139/hide-div-onclick-in-vue-js',
            sarthik: "",
            Sunny: "<h3>sarthik</h3>",
            count: 3,
            click: true,
            awesome: true,
            X: 0,
            Y: 0,
            h: 0,
            a: 10,
            b: 30,
            bg__oo: "hey",
            bg__green: 'bg__green',
            bg__red: "bg__red",
            blog: {},
            red: true,
            blue: false,
            age: 20,
            hidden: true,
            data: "",
            swith: "",
            data_in: "",
            checkbox: [],
            fillter: 'Hello Filter Here',
            lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloribus et expedita dignissimos soluta! Odit est reprehenderit asperiores excepturi repellendus dicta qui eveniet cupiditate, quod libero. Ipsum dolores accusantium quibusdam facere repudiandae quo eaque saepe voluptas rerum id odit, impedit sunt corrupti a eveniet aspernatur ad aut nihil iste temporibus natus voluptatum tenetur deserunt veritatis. Deserunt dolorem, dolores libero quas delectus fugiat error doloremque architecto dolor facilis. Vero quod nihil minima necessitatibus blanditiis ullam quo accusantium eaque cum nostrum? Officia qui ipsa quis cumque voluptates? Doloremque eveniet, suscipit nobis consequuntur, ipsa facere, non explicabo vero voluptate eius excepturi aperiam nostrum.",
            option: ["AUDI", "BMW", "SKODA"],
            data2: {
                select: ""
            },
            bio: [
                {
                    name: "bunty",
                    cars: "luna"
                },
                {
                    name: "funty",
                    cars: "Tata"
                },
                {
                    name: "sunny",
                    cars: "Mustang"
                },
                {
                    name: "sarthik",
                    cars: "Audi"
                },
                {
                    name: "vikram",
                    cars: "Volvo"
                }
            ],
            employe: [
                { name: "Sarthik", department: "Frontend", show: false },
                { name: "Sunny", department: "Backend", show: false },
                { name: "Bunty", department: "Html", show: false },
                { name: "sahil", department: "Frontend", show: false },
                { name: "Bubly", department: "java", show: false }
            ],
            patel: [
                { name: "sarthik", weight: 62, village: "rohishala" },
                { name: "sunny", weight: 70, village: "botad" },
                { name: "sky", weight: 90, village: "bhavnagar" }
            ]
        }
    },
    watch: {
        count(value) {
            if (value > 50) {
                alert("count up")
            }
        }
    },
    props: {
        gm: String,
        test: String,
        title: String,
        fruit: Array,
        head: String
    },
    methods: {
        updatetitle(x) {
            this.text5 = x
        },
        readrefs() {
            console.log(this.$refs.input2)
        },
        keyup() {
            alert("you click right")
        }
        ,
        chnagetxt() {
            this.text3 = "title chnage"
        },
        goodm() {
            return "good morning"
        },
        change() {
            this.sunny = "sarthik"
        },
        goodmor(hello) {
            return "Good vali morning" + " " + hello + this.index;
        },
        increment(A) {
            this.count += A;
        },
        Decrement(B) {
            this.count -= B;
        },
        mouse() {
            this.X = event.offsetX;
            this.Y = event.offsetY
        },
        fun() {
            return console.log("entered")
        },
        troy(a, b, c) {
            return a + b + c;
        },
        input() {
            return this.data = this.$refs.data.value
        },
        troy11() {
            return "I'm Back"
        },
        changeTitle() {
            this.$emit('changeTitle', "title pe title")
        },
        post() {
            this.$http.post("https://jsonplaceholder.typicode.com/posts", {
                title: this.index,
                userId: 111
            })
            console.log("hey hey")
        },
        fontsize() {
            this.fontSize = '30px'
        },
        agecalc(age) {
            if (age >= 18) {
                return this.text = "Eligdble"
            }
            else {
                return this.text = "Not Eligdble"
            }
        },
        textflip() {
            this.text3 = " chal nikal"
        }
    },
    // beforeMount() {
    //     console.warn("hello from heaven: " + this.$el)
    //     alert("beformount")
    // },
    // mounted() {
    //     console.warn("this.value", this.$el)
    //     alert("mount")
    // },
    created() {
        this.$http.get("https://jsonplaceholder.typicode.com/posts" + this.id).then(function (data) {
            console.log(data);
            this.blog = data.body;
        })
    },
    
    computed: {
        dun() {
            console.log("hello")
            return this.a + this.age
        },
        dun2() {
            console.log("fello")
            return this.b + this.age
        },

    },
    filters: {
        'toUpperCase': function (value) {
            return value.toUpperCase()
        }
    },
    directives: {
        rainbow: {
            bind(el) {
                el.style.color = "#" + Math.random().toString().slice(2, 8)
            }
        }
    },
    mixins: [searchmixin]
}

</script>
<style>
.box {
    width: 100%;
    height: 600px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
}

span {
    color: white;
    font-size: 50px;
}

.red {
    font-size: 50px;
    color: red;
}

.blue {
    font-size: 50px;
    color: blue;
}

.employ-box {
    display: flex;
    justify-content: center;
    gap: 50px;
}

.employ-box__card {
    background-color: #5db3ca;
    padding: 50px;
    list-style: none;
}

.employ-name {
    font-size: 30px;
    color: white;
    font-weight: 900;
    margin-bottom: 30px;
}

.font__sm {
    font-size: 30px;
}

.font__big {
    font-size: 50px;
}

.employ-btn {
    padding: 10px;
    background-color: #ffbbff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #636363;
    border: none;
}

.employ-name--color {
    color: purple;
}

.orange {
    background-color: orange;
    padding: 50px 0;
}

.index {
    padding-bottom: 500px;
}

.skyblue {
    background-color: skyblue;
    padding: 50px 0;
}

.bg__green {
    background-color: green;
}

.bg__red {
    background-color: red;
}

.container {
    width: 100%;
    height: 500px;
    background-color: red;
}
</style>