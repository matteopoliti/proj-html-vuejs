<template>
    <section>
        <div>
            <h2>Find a freshly baked product perfect for you </h2>
            <p>
                Integer a nibh vitae ex porttitor rutrum et ut velit. Etiam ac felis at leo feugiat placerat. Sed ac nulla
                id
                orci tempor convallis sed.
            </p>
            <a href="#" class="btnPurple">Shop All Products</a>
        </div>
        <div class="slider">
            <i class="fa-solid fa-angle-left" @click="prevButton"></i>
            <i class="fa-solid fa-angle-right" @click="nextButton"></i>
            <div class="singleProduct">
                <figure>
                    <img :src="store.products[immagineCorrente].img" alt="">
                </figure>
                <div>
                    <h3>{{ store.products[immagineCorrente].nomeProdotto }}</h3>
                    <span>{{ store.products[immagineCorrente].prezzo }}</span>
                </div>
                <div class="info">
                    <a href="#">select options / </a><a href="#">quick view</a>
                </div>
            </div>

            <div class="singleProduct">
                <figure>
                    <img :src="store.products[immagineCorrente + 1].img" alt="">
                </figure>
                <div>
                    <h3>{{ store.products[immagineCorrente + 1].nomeProdotto }}</h3>
                    <span>{{ store.products[immagineCorrente + 1].prezzo }}</span>
                </div>
                <div class="info">
                    <a href="#">select options / </a><a href="#">quick view</a>
                </div>
            </div>
            <div class="singleProduct">
                <figure>
                    <img :src="store.products[immagineCorrente + 2].img" alt="">
                </figure>
                <div>
                    <h3>{{ store.products[immagineCorrente + 2].nomeProdotto }}</h3>
                    <span>{{ store.products[immagineCorrente + 2].prezzo }}</span>
                </div>
                <div class="info">
                    <a href="#">select options / </a><a href="#">quick view</a>
                </div>
            </div>
            <div class="singleProduct">
                <figure>
                    <img :src="store.products[immagineCorrente + 3].img" alt="">
                </figure>
                <div>
                    <h3>{{ store.products[immagineCorrente + 3].nomeProdotto }}</h3>
                    <span>{{ store.products[immagineCorrente + 3].prezzo }}</span>
                </div>
                <div class="info">
                    <a href="#">select options / </a><a href="#">quick view</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../../store';

export default {
    name: "AllProducts",
    data() {


        return {
            store,
            immagineCorrente: 0,
        }
    },
    methods: {
        prevButton() {
            this.immagineCorrente--;
            if (this.immagineCorrente < 0) {
                this.immagineCorrente = this.store.products.length - 4;
            }
        },
        nextButton() {
            this.immagineCorrente++;
            if (this.immagineCorrente > this.store.products.length - 4) {
                this.immagineCorrente = 0;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-bottom: 300px;

    >div:first-child {
        text-align: center;

        p {
            margin-block: 20px 60px;
        }
    }

    .slider {
        position: relative;
        display: flex;
        gap: 20px;

        .fa-angle-left,
        .fa-angle-right {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            padding: 40px 20px;
            background-color: $textColorPurple;
            opacity: 0.6;
            color: $colorWhite;
            font-size: 25px;
            cursor: pointer;
            z-index: 1;
        }

        .fa-angle-right {
            right: 0;
        }

        .singleProduct {
            position: relative;

            &:hover .info {
                opacity: 1;
            }

            &:hover img {
                opacity: 0.8;

            }



            figure {
                background-color: black;

                img {
                    width: 400px;
                    height: 500px;

                }

            }

            .info {
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                width: 80%;
            }

            a {
                text-decoration: none;
                color: $colorWhite;
                text-transform: uppercase;
                font-size: 18px;
                font-weight: 600;
            }

            >div {
                text-align: center;
                color: $textColorPurple;

                h3,
                span {
                    margin-block: 20px;
                    font-size: 24px;
                }

                h3 {
                    font-size: 30px;
                    text-transform: capitalize;
                    font-weight: 900;
                }
            }
        }

    }
}

@media screen and (max-width: 2000px) {

    section {
        .slider {
            .singleProduct {
                figure {

                    img {
                        width: 300px;
                        height: 400px;
                    }
                }
            }

        }
    }
}
</style>