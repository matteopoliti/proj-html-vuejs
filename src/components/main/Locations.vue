<template>
    <section>
        <h5>locations</h5>
        <h2>Visit our Bakeries</h2>
        <div class="bakeries">
            <div>
                <img src="../../assets/img/new-york-bk.jpg" alt="">
                <div class="bakaries-info">
                    <h3>New York</h3>
                    <div>
                        <p>Call us <br> <span>1.800.458.556</span></p>
                        <p>open all week <br> <span>9.00 am - 6:00 pm</span></p>
                        <a href="#" class="btnWhite">View Map</a>
                    </div>
                </div>
            </div>
            <div>
                <img src="../../assets/img/london-bk.jpg" alt="">
                <div class="bakaries-info">
                    <h3>London</h3>
                    <div>
                        <p>Call us <br> <span>1.800.458.556</span></p>
                        <p>open all week <br> <span>9.00 am - 6:00 pm</span></p>
                        <a href="#" class="btnWhite">View Map</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Locations",
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
    margin-bottom: 200px;

    h5,
    h2 {
        text-align: center;
        margin-block: 30px;
    }

    .bakeries {
        display: flex;
        margin-top: 80px;

        .bakaries-info {
            background-color: #f1f9fb;
            padding: 80px;

            h3 {
                color: $textColorPurple;
                text-align: center;
                font-size: 40px;
                font-weight: 900;
                margin-bottom: 30px;
            }

            >div {
                display: flex;
                justify-content: space-between;
                align-items: center;

                p {
                    text-align: center;
                    text-transform: uppercase;
                    font-size: 16px;

                    span {
                        font-size: 20px;
                        font-weight: 700;
                    }
                }

                a {
                    width: 140px;
                }
            }
        }

        >div:nth-child(2) {
            .bakaries-info {
                background-color: #faf3e3;
            }
        }
    }
}
</style>