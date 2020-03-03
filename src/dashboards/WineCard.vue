<template>
    <div>
        <div>
            <h4>Name</h4>
            <p>{{item.wine}}, {{item.vintage}}</p>
        </div>
        <div>
            <h4>Country</h4>
            <p>{{item.country}}</p>
        </div>
        <div>
            <h4>Appellation</h4>
            <p>{{item.appellation}}</p>
        </div>
        <div>
            <h4>Color</h4>
            <p>{{item.color}}</p>
        </div>

        <div>
            <h4>Global Wine Score</h4>
            <span>
                {{item.score}}/100
            </span>
            <p>Updated: {{item.date}}</p>
        </div>
        <div>
            <div>
                <h2>GWS Calculation based on</h2>
                <p class="score mt10">
                    {{item.journalist_count}} <span class="font-p">Wine Critics</span>
                </p>
            </div>

            <div>
                <h2>Confidence index</h2>
                <p>{{item.confidence_index}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    console.log('here');
    export default {
        name: "WineCard",
        data() {
            return {
                isLoading: false
            };
        },
        computed: {
            item() {
                return this.$store.getters.getWines[0]
            }
        }
    }
</script>

<style scoped>

</style>
