<script>
import AppHeader from "./components/header/AppHeader.vue"
import AppMain from "./components/main/AppMain.vue"
import AppFooter from "./components/footer/AppFooter.vue"

import { store } from "./store";

export default {
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    data() {
        return {
            store,
        };
    },
    created() {
    },
}
</script>

<template>
    <AppHeader />
    <AppMain />
    <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>