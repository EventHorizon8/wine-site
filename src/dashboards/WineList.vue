<template>
    <div>
        <WineForm v-bind:is-loading="isLoading"/>
        <div class="container" v-if="!isLoading">
            <WineRatesTable :items="items"/>
            <nav>
                <paginate v-model="winePage"
                        :page-count="globalItemsCount"
                        class="pagination"
                        :prev-class="'page-item'"
                        :prev-link-class="'page-link'"
                        :next-class="'page-item'"
                        :next-link-class="'page-link'"
                        :prev-text="'Prev'"
                        :next-text="'Next'"
                        :container-class="'pagination'"
                        :page-class="'page-item'"
                        :page-link-class="'page-link'"
                        :click-handler="clickCallback">
                </paginate>
            </nav>
        </div>
        <p v-if="isLoading">Loading...</p>
    </div>
</template>

<script>
    import WineRatesTable from '../components/WineRatesTable.vue'
    import WineForm from "./WineForm";

    export default {
        name: "WineList",
        components: {
            WineRatesTable,
            WineForm
        },
        data() {
            return {
                winePage: 1,
                isLoading: true
            };
        },
        created: async function () {
            const { color } = WineForm.data().form;
            await this.$store.dispatch('getWines', {color}).then(() => {
                this.isLoading = false;
            })
        },
        computed: {
            items() {
                return this.$store.getters.getWines
            },
            globalItemsCount() {
                return this.$store.getters.getPages
            }
        },
        methods: {
            clickCallback(pageNum) {
                this.winePage = pageNum;
                this.submitForm(this.winePage);
            },
            updateLoading(isLoading) {
                this.isLoading = isLoading;
            }
        }
    }
</script>

<style lang="scss">
    nav ul.pagination {
        margin: 20px 0 40px 0;
        li.page-item.active {
            a.page-link {
                background-color: $primaryDarkColor;
                border-color: $primaryDarkColor;

            }
        }

    }
</style>
