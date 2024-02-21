<template>
    <div class="ourProducts">
        <div>
            <h5>our products</h5>
            <h2>
                All our delectable pastries are
                backed fresh in our Kitchen very
                morning, and are made with all-
                natural, all organic ingredients.
            </h2>
            <a href="#" class="btnPurple">Start shopping</a>
        </div>
        <div class="slider">
            <i class="fa-solid fa-angle-left" @click="prevButton"></i>
            <i class="fa-solid fa-angle-right" @click="nextButton"></i>
            <div class="singleProduct">
                <figure>
                    <img :src="store.products[immagineCorrente].img" :alt="store.products[immagineCorrente].nomeProdotto">

                </figure>
                <div class="info">
                    <h3>{{ store.products[immagineCorrente].nomeProdotto }}</h3>
                    <span class="categories"> {{ store.products[immagineCorrente].categoria }}</span>
                    <span class="price">{{ store.products[immagineCorrente].prezzo }}</span>
                </div>

            </div>
            <div class="singleProduct">
                <figure>
                    <img :src="store.products[immagineCorrente + 1].img"
                        :alt="store.products[immagineCorrente].nomeProdotto">
                </figure>
                <div class="info">
                    <h3>{{ store.products[immagineCorrente + 1].nomeProdotto }}</h3>
                    <span class="categories">{{ store.products[immagineCorrente + 1].categoria }}</span>
                    <span class="price">{{ store.products[immagineCorrente + 1].prezzo }}</span>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import { store } from '../../store'
export default {
    name: "OurProducts",
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
                this.immagineCorrente = this.store.products.length - 2;
            }
        },
        nextButton() {
            this.immagineCorrente++;
            if (this.immagineCorrente > this.store.products.length - 2) {
                this.immagineCorrente = 0;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.ourProducts {
    padding-block: 200px;
    display: flex;
    gap: 150px;

    >div:first-child {
        display: flex;
        flex-direction: column;
        gap: 30px;

        h2 {
            font-size: 46px;
        }

        .btnPurple {
            margin-top: 80px;
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
                background: rgb(0, 0, 0, 0.3);
                background-size: 100%;
            }

            figure {

                img {
                    width: 700px;
                    height: 850px;
                }
            }

            .info {
                display: flex;
                flex-direction: column;
                gap: 10px;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: $colorWhite;
                opacity: 0;
                width: 100%;
                height: 100%;

                h3 {
                    font-size: 26px;
                    text-transform: capitalize;
                }

                .categories {
                    font-size: 14px;
                }

                .price {
                    font-size: 26px;
                }
            }


        }

    }

}

@media screen and (max-width: 2000px) {
    .ourProducts {
        .slider {
            .singleProduct {
                figure {

                    img {
                        width: 500px;
                        height: 650px;
                    }
                }
            }

        }
    }
}
</style>