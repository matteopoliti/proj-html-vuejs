<template>
    <main class="container">
        <OurProducts />
        <CorporateWedding />
        <AllProducts />
        <Process />
        <Locations />
        <Social />
    </main>
</template>

<script>
import OurProducts from "./OurProducts.vue"
import CorporateWedding from "./CorporateWedding.vue"
import AllProducts from "./AllProducts.vue"
import Process from "./Process.vue"
import Locations from "./Locations.vue"
import Social from "./Social.vue"


export default {
    name: "AppMain",
    components: {
        OurProducts,
        CorporateWedding,
        AllProducts,
        Process,
        Locations,
        Social
    },
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped></style>