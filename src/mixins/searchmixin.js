export default {
    computed: {
        data_filter() {
            return this.bio.filter((item) => {
                return item.cars.match(this.data_in)
            })
        }
    }
}