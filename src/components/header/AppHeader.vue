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
        <div class="jumbotron">
            <h5>fresh & tasty bakery every day</h5>
            <h2>the perfect fresh bread</h2>
            <p>Cras consequat lectus vestibulum tortor pulvinar, quis
                euismod nisl varius. Aliquam erat volutpat. Nullam quis sagittis nibh ac nulla id orci tempor.
            </p>
            <a href="#ourProducts">Explore our products</a>
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
                border-bottom: 3px solid $textColorPurple;
            }
        }
    }

    .jumbotron {
        padding-block: 200px;
        width: 30%;
        margin-left: 5%;
        display: flex;
        gap: 20px;
        flex-direction: column;
        justify-content: center;

        h5 {
            text-transform: uppercase;
            color: $textColorGrey;
            letter-spacing: 1px;
            font-size: 16px;
        }

        h2 {
            text-transform: capitalize;
            font-size: 80px;
            color: $textColorPurple;
            font-weight: 900;
        }

        p {
            font-size: 24px;
            letter-spacing: 1px;
            color: $textColorGrey;
            line-height: 160%;
        }

        a {
            text-decoration: none;
            background-color: $colorWhite;
            padding: 20px;
            color: $textColorPurple;
            border-radius: 10px;
            font-weight: 700;
            width: 230px;
            text-align: center;

            &:hover {
                background-color: $textColorPurple;
                color: $colorWhite;
            }
        }

    }
}
</style>