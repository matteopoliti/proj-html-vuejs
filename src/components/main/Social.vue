<template>
    <div>
        <div class="row">
            <figure>
                <img src="../../assets/img/social-1.jpg" alt="">
            </figure>
            <div class="social">
                <h5>Made for sharing</h5>
                <h2>Let's stay touch</h2>
                <div>
                    <button @click="toggleSocials" class="btnPurple">Seguici su social</button>
                    <div :class="(showSocials) ? 'active' : 'socials'">
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                    </div>
                </div>
            </div>

            <figure>
                <img src="../../assets/img/social-2.jpg" alt="">
            </figure>
        </div>
        <div class="row">
            <figure>
                <img src="../../assets/img/social-3.jpg" alt="">
            </figure>
            <figure>
                <img src="../../assets/img/social-4.jpg" alt="">
            </figure>
            <figure>
                <img src="../../assets/img/social-5.jpg" alt="">
            </figure>
            <figure>
                <img src="../../assets/img/social-6.jpg" alt="">
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: "Social",
    data() {


        return {
            showSocials: false
        }
    },
    methods: {
        toggleSocials() {
            this.showSocials = !this.showSocials;
        }
    },
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.row {
    display: flex;
    gap: 50px;
    margin-bottom: 50px;

    figure {
        width: calc(100% / 4 - 50px + (50px / 4));
    }

    .social {
        background: rgb(249, 241, 242);
        background: linear-gradient(90deg, rgba(249, 241, 242, 1) 18%, $bgButton 68%);
        flex-grow: 2;
        padding: 25px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        justify-content: center;
        align-items: center;
        width: calc(100% / 2 - 50px + (50px / 2));

        button {
            margin-bottom: 20px;
            font-size: 16px;
        }

        .socials {
            opacity: 0;
        }

        .active {
            opacity: 1;
            display: flex;
            justify-content: center;
            gap: 30px;
            transition: opacity 0.6s ease;

        }

        a {
            font-size: 40px;
            color: $textColorPurple;
        }
    }
}
</style>