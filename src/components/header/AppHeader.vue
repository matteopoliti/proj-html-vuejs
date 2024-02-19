<template>
    <header>
        <div>
            <figure>
                <img src="../../assets/img/avada-bakery-logo.png" alt="Logo Avada bakery">
            </figure>
            <div class="navbar">
                <ul>
                    <Navbar v-for="(item, index) in store.headerNavbar" :key="index" :text='item' />
                    <li>
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import Navbar from "./Navbar.vue"
import { store } from '../../store'

export default {
    name: "AppHeader",
    components: {
        Navbar
    },
    data() {

        return { store }
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

header {
    background-image: url("../../assets/img/hero-header-bakery.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 1000px;

    >div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 40px;
    }

    .navbar {
        ul {
            display: flex;
            gap: 60px;
            list-style-type: none;

            li:first-child {
                padding-bottom: 8px;
                border-bottom: 3px solid $textColor;
            }
        }
    }
}
</style>