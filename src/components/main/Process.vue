<template>
    <section>
        <div class="process1">
            <div>
                <div>
                    <h3>Tell us what you have in <br>mind</h3>
                    <span> 01</span>
                </div>

                <div class="description">
                    <h5>MANUAL INGREDIENts selECTION</h5>
                    <p>
                        Cras consequat lectus vestibulum tortor pulvinar, quis
                        euismod nisl varius. Ut eu laoreet ex. Aliquam erat volutpat.
                        Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac
                        congue. Donec lorem erat, finibus in velit placerat, rutrum augue.
                    </p>
                </div>

            </div>
        </div>
        <div class="processCite">
            <div class="process2">
                <div>
                    <div>
                        <h3>We Start Baking</h3>
                        <span> 02</span>
                    </div>

                    <div class="description">
                        <h5>SWEET & DELICIOUS</h5>
                        <p>
                            Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex.
                            Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue.
                            Donec lorem erat, finibus in velit placerat.
                        </p>
                    </div>

                </div>
            </div>
            <div class="cite">
                <h5>
                    DONT JUST TAKE OUR WORD FOR IT
                </h5>
                <p>
                    &#8220;Finally found an alternative to
                    the mass produced products.
                    Something that incorporates
                    real organic ingredients,
                    nutrient dense wellness while
                    sme a oeucove promoting sustainability and activity.&#8221;
                </p>
                <cite>
                    Rachel Cooper, Founder
                </cite>
            </div>
        </div>
        <div class="process3">
            <div>
                <div>
                    <h3>Delivered to your home</h3>
                    <span> 03</span>
                </div>

                <div class="description">
                    <h5>BAKED TO ORDER & GIFT WRAPPED</h5>
                    <p>
                        Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex.
                        Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec
                        lorem erat, finibus in velit placerat, rutrum augue.
                    </p>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Process",
    data() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
    margin-bottom: 200px;

    .process1 {
        background-image: url("../../assets/img/bakery-process-1.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: 1000px;
        margin-bottom: 80px;


        >div {
            background: rgb(0, 0, 0);
            background: linear-gradient(328deg, rgba(0, 0, 0, 0.5018382352941176) 32%, rgba(0, 0, 0, 0.3029586834733894) 69%);
            height: 100%;
            padding: 100px;
            position: relative;

            >div:first-child {
                display: flex;
                justify-content: space-between;

                h3 {
                    font-size: 70px;
                    color: $colorWhite;
                    font-weight: 900;
                }

                span {
                    font-size: 120px;
                    color: $colorWhite;
                    font-weight: 300;
                }
            }

            .description {

                position: absolute;
                bottom: 100px;
                right: 100px;
                width: 35%;

                h5 {
                    color: lightgray;
                }

                p {
                    color: $colorWhite;
                    margin-top: 20px;
                }
            }
        }

    }

    .processCite {
        display: flex;
        gap: 100px;
        margin-bottom: 80px;

        .process2 {
            background-image: url("../../assets/img/bakery-process-2.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            height: 1000px;
            width: calc(100% / 2);

            >div {
                background: rgb(0, 0, 0);
                background: linear-gradient(328deg, rgba(0, 0, 0, 0.5018382352941176) 32%, rgba(0, 0, 0, 0.3029586834733894) 69%);
                height: 100%;
                padding: 100px;
                position: relative;

                >div:first-child {
                    display: flex;
                    justify-content: space-between;

                    h3 {
                        font-size: 70px;
                        color: $colorWhite;
                        font-weight: 900;
                    }

                    span {
                        font-size: 120px;
                        color: $colorWhite;
                        font-weight: 300;
                    }
                }

                .description {

                    position: relative;
                    top: 400px;

                    h5 {
                        color: lightgray;
                    }

                    p {
                        color: $colorWhite;
                        margin-top: 20px;
                        width: 55%;
                    }
                }
            }

        }

        .cite {
            width: calc(100% / 2);
            background: rgb(249, 241, 242);
            background: linear-gradient(328deg, rgba(249, 241, 242, 1) 40%, rgba(240, 237, 245, 1) 60%);
            padding: 150px 100px;
            height: 1000px;

            p {
                color: $textColorPurple;
                font-size: 50px;
                font-weight: 900;
                margin-block: 100px 50px;
            }

            cite {
                font-style: normal;
                color: $textColorGrey;
                letter-spacing: 1px;
                font-size: 20px;
            }
        }
    }

    .process3 {
        background-image: url("../../assets/img/bakery-process-3.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: 1000px;
        margin-bottom: 80px;


        >div {
            background: rgb(0, 0, 0);
            background: linear-gradient(328deg, rgba(0, 0, 0, 0.5018382352941176) 32%, rgba(0, 0, 0, 0.3029586834733894) 69%);
            height: 100%;
            padding: 100px;
            position: relative;

            >div:first-child {
                display: flex;
                justify-content: space-between;

                h3 {
                    font-size: 70px;
                    color: $colorWhite;
                    font-weight: 900;
                }

                span {
                    font-size: 120px;
                    color: $colorWhite;
                    font-weight: 300;
                }
            }

            .description {

                position: absolute;
                bottom: 100px;
                left: 100px;
                width: 35%;

                h5 {
                    color: lightgray;
                }

                p {
                    color: $colorWhite;
                    margin-top: 20px;
                }
            }
        }

    }
}
</style>