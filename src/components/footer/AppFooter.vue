<template>
    <footer>
        <SeasonalProducts />

        <div class="end">
            <div>
                <figure>
                    <img src="../../assets/img/avada-bakery-logo-retina.png" alt="">
                </figure>
                <div class="navbar">
                    <ul>
                        <Navbar v-for="(item, index) in store.footerNavbar" :key="index" :text='item' />
                        <li>
                            <a href="#"><i class="fa-solid fa-cart-shopping"></i> <span>0</span></a>
                        </li>
                    </ul>
                </div>
                <p>© Copyright 2012 - 2020 | Avada Theme by ThemeFusion | Al Rights Reserved | Powered by WordPress</p>
            </div>

            <div>

            </div>
        </div>
    </footer>
</template>

<script>
import SeasonalProducts from "./SeasonalProducts.vue"
import Navbar from "../header/Navbar.vue"
import { store } from '../../store'

export default {
    name: "AppFooter",
    components: {
        SeasonalProducts,
        Navbar
    },
    data() {

        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

footer {
    margin-top: 250px;

    .end {
        padding: 100px;
        display: flex;
        justify-content: space-between;

        img {
            width: 300px;
        }

        .navbar {
            margin-block: 80px 200px;

            ul {
                display: flex;
                gap: 60px;
                list-style-type: none;

                li {
                    a {
                        text-decoration: none;

                        span {
                            background-color: $bgButton;
                            border-radius: 50%;
                            padding: 5px 10px;
                            color: $textColorPurple;
                        }
                    }
                }
            }
        }

        p {
            font-size: 16px;
        }
    }
}
</style>