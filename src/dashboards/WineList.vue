<template>
    <div>
        <form @submit.prevent="submitForm">
            <label for="color">Color</label>
            <select name="color" id="color" v-model="form.color" :disabled="sending">
                <option value="red">red</option>
                <option value="white">white</option>
                <option value="pink">pink</option>
            </select>
            <label for="wine-type">Type</label>
            <select name="wine-type" id="wine-type" v-model="form.wineType" :disabled="sending">
                <option value="dry">dry</option>
                <option value="sweet">sweet</option>
            </select>
            <label for="country">Country</label>
            <input name="country" id="country" v-model="form.country" :disabled="sending"/>
            <label for="vintage">Vintage</label>
            <input name="vintage" id="vintage" v-model="form.vintage" :disabled="vintage"/>
            <button type="submit" :disabled="isLoading">Show</button>
        </form>
        <WineRatesTable :items="items"/>
    </div>
</template>

<script>
    import WineRatesTable from '../components/WineRatesTable.vue'

    export default {
        name: "WineList",
        components: {
            WineRatesTable
        },
        data() {
            return {
                form: {
                    color: 'red',
                    wineType: '',
                    country: '',
                    vintage: ''
                },
                isLoading: false
            };
        },
        computed: {
            items() {
                return this.$store.getters.getWines
            }
        },
        created: async function () {
            const { color } = this.form;
            await this.$store.dispatch('getWines', {color})
        },
        methods: {
            submitForm() {
                const queryParams = {
                    color: this.form.color,
                };
                if (this.form.wineType) {
                    queryParams["wine-type"] = this.form.wineType;
                }
                if (this.form.country) {
                    queryParams.country = this.form.country;
                }
                if (this.form.vintage) {
                    queryParams.vintage = this.form.vintage;
                }

                this.isLoading = true;
                this.$store.dispatch('getWines', queryParams).then(() => {
                    this.isLoading = false;
                })
            }
        }
    }
</script>

<style scoped>

</style>
