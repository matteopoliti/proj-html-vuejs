<template>
    <div class="cta">
        <h5>try our seasonal products</h5>
        <h2> Order for pick-up or delivery to <br>your home</h2>

        <a href="#" class="btnWhite">Shop Now</a>
    </div>
</template>

<script>
export default {
    name: "SeasonalProducts",
    data() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

.cta {
    background-image: url("../../assets/img/call-to-action-bg.jpg");
    background-position: center;
    background-size: cover;
    padding: 200px 500px;

    h2 {
        color: $colorWhite;
        margin-block: 40px 80px;
        font-size: 60px;
    }

    .btnWhite {
        padding-inline: 60px;
        font-size: 20px;
    }
}
</style>