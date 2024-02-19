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
            <a href="#">Start shopping</a>
        </div>
        <div class="slider">
            <i class="fa-solid fa-angle-left"></i>
            <i class="fa-solid fa-angle-right"></i>
            <img :src="store.products[0].img" :alt="store.products[0].nomeProdotto">
            <img :src="store.products[1].img" :alt="store.products[0].nomeProdotto">
        </div>
    </div>
</template>

<script>
import { store } from '../../store'
export default {
    name: "OurProducts",
    data() {


        return {
            store
        }
    }
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

        a {
            text-decoration: none;
            background-color: $textColorPurple;
            padding: 20px;
            color: $colorWhite;
            border-radius: 10px;
            font-weight: 700;
            width: 230px;
            text-align: center;
            margin-top: 80px;

            &:hover {
                background-color: $bgButton;
                color: $textColorPurple;
            }
        }
    }

    .slider {
        display: flex;
        gap: 20px;
        position: relative;

        img {
            width: 700px;
            height: 850px;
        }

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

        }

        .fa-angle-right {
            right: 0;
        }
    }


}
</style>