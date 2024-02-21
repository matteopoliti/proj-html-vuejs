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
            <a href="../main/OurProducts.vue" class="btnWhite">Explore our products</a>
        </div>

        <div class="stickyButton">
            <div class="demos">
                <i class="fa-solid fa-cookie-bite"></i>
                <span>Demos</span>
            </div>
            <div class="demos">
                <span class="price">$39</span>
                <span>On Sale</span>
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

        h2 {
            text-transform: capitalize;
            font-size: 80px;
        }

    }

    .stickyButton {
        position: fixed;
        top: 100px;
        right: 20px;

        .demos {
            background-color: $colorWhite;
            border-radius: 5px;
            color: #33475b;
            aspect-ratio: 1;
            width: 80px;
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            font-weight: bold;
            box-shadow: 0px 0px 30px -10px #000000;
            cursor: pointer;

            i {
                font-size: 30px;
            }

            .price {
                color: #65bc7b;
                font-size: 30px;

            }
        }
    }
}
</style>