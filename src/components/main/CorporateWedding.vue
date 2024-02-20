<template>
    <section>
        <div>
            <h5>corporate & wedding</h5>
            <h2>Baking Special Moments</h2>
        </div>
        <div>
            <div class="corporate">
                <figure>
                    <img src="../../assets/img/corporate-bg.jpg" alt="Corporate">
                </figure>

                <div class="info">
                    <h5>international bakery</h5>
                    <h3>Corporate Events</h3>
                    <a href="#" class="btnPurple">Explore more</a>
                </div>

            </div>
            <div class="wedding">
                <figure>
                    <img src="../../assets/img/wedding-bg.jpg" alt="Wedding">
                </figure>
                <div class="info">
                    <h5>private dining hall</h5>
                    <h3>Weddings & parties</h3>
                    <a href="#" class="btnPurple">Explore more</a>

                </div>
            </div>


        </div>
    </section>
</template>

<script>
export default {
    name: "CorporateWedding",
    data() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
    >div:first-child {
        text-align: center;
        margin-block: 50px;

        h2 {
            margin-block: 20px;
        }
    }

    >div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        gap: 100px;
        margin-bottom: 300px;

        .corporate {
            position: relative;

            &:hover .info {
                opacity: 1;
                background-image: url("../../assets/img/corporate-hover-bg.jpg");
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }


        .wedding {
            position: relative;

            &:hover .info {
                opacity: 1;
                background-image: url("../../assets/img/wedding-hover-bg.jpg");
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }

        .info {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            opacity: 0;
        }

        figure {

            img {
                width: 1100px;
                height: 1100px;
                border-radius: 5px;
            }
        }

        div {
            h3 {
                color: $colorWhite;
                font-size: 40px;
                margin-block: 20px 30px;
            }

            h5 {
                color: $colorWhite;
            }
        }
    }
}
</style>