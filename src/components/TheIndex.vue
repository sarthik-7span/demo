<template>
    <div>
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
            <p v-show="hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi praesentium illum dolore
                iusto recusandae repellat, impedit vero beatae rem saepe et dolores ex! Harum ea omnis esse sequi velit
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
    </div>
</template>
<script>
export default {
    name: "TheIndex",
    data() {
        return {
            index: "hello sarthik",
            good: true,
            link: 'https://stackoverflow.com/questions/48929139/hide-div-onclick-in-vue-js',
            sarthik: "",
            Sunny: "<h3>sarthik</h3>",
            count: 3,
            X: 0,
            Y: 0,
            h: 0,
            a: 10,
            b: 30,
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
        }
    },
    mounted() {
        console.log(this.$refs)
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
        data_filter() {
            return this.bio.filter((item) => {
                return item.cars.match(this.data_in)
            })
        }
    },
    filters: {
        'toUpperCase':function(value){
            return value.toUpperCase()
        }
    },
    directives: {
        rainbow:{
            bind(el) {
                el.style.color = "#" + Math.random().toString().slice(2, 8)
            }
        }
    }
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

.skyblue {
    background-color: skyblue;
    padding: 50px 0;
}
</style>