<template>
    <main class="container">
        <OurProducts />
        <CorporateWedding />
    </main>
</template>

<script>
import OurProducts from "./OurProducts.vue"
import CorporateWedding from "./CorporateWedding.vue"

export default {
    name: "AppMain",
    components: {
        OurProducts,
        CorporateWedding
    },
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped></style>