<template>
    <main class="container">
        <OurProducts />
        <CorporateWedding />
        <AllProducts />
        <Process />
        <Locations />
    </main>
</template>

<script>
import OurProducts from "./OurProducts.vue"
import CorporateWedding from "./CorporateWedding.vue"
import AllProducts from "./AllProducts.vue"
import Process from "./Process.vue"
import Locations from "./Locations.vue"


export default {
    name: "AppMain",
    components: {
        OurProducts,
        CorporateWedding,
        AllProducts,
        Process,
        Locations
    },
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped></style>