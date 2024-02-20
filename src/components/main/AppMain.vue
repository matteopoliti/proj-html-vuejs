<template>
    <main class="container">
        <OurProducts />
        <CorporateWedding />
        <AllProducts />
    </main>
</template>

<script>
import OurProducts from "./OurProducts.vue"
import CorporateWedding from "./CorporateWedding.vue"
import AllProducts from "./AllProducts.vue"

export default {
    name: "AppMain",
    components: {
        OurProducts,
        CorporateWedding,
        AllProducts
    },
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped></style>