<template>
    <footer>
        <SeasonalProducts />
    </footer>
</template>

<script>
import SeasonalProducts from "./SeasonalProducts.vue"

export default {
    name: "AppFooter",
    components: {
        SeasonalProducts
    },
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

footer {
    margin-top: 250px;
}
</style>