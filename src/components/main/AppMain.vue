<template>
    <main class="container">
        <OurProducts />
        <CorporateWedding />
        <AllProducts />
        <Process />

    </main>
</template>

<script>
import OurProducts from "./OurProducts.vue"
import CorporateWedding from "./CorporateWedding.vue"
import AllProducts from "./AllProducts.vue"
import Process from "./Process.vue"


export default {
    name: "AppMain",
    components: {
        OurProducts,
        CorporateWedding,
        AllProducts,
        Process
    },
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped></style>