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
                <div>
                    <label for="newsletter">Subscribe to our Newsletter</label>
                    <input type="email" name="newsletter" id="newsletter" placeholder="Enter email address*">
                    <button class="btnPurple">Subscribe</button>
                </div>

                <div class="socials">
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                </div>
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

        >div:nth-child(2) {

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            label {
                display: block;
                font-size: 30px;
                color: $textColorPurple;
                font-weight: 900;
                text-align: end;
                margin-bottom: 80px;
            }

            input {
                width: 600px;
                padding: 15px;
                font-size: 20px;
                outline: none;
                border: 1px solid #f2eef4;
                border-radius: 5px;
                margin-right: 50px;
                height: 62px;
            }

            button {
                font-size: 18px;
                width: 180px;

            }

            .socials {
                display: flex;
                gap: 50px;
                justify-content: end;

                a {
                    font-size: 30px;
                    color: $textColorPurple;
                }
            }
        }
    }
}
</style>