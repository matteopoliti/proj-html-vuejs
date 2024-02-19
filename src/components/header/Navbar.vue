<template>
    <li>
        <a href="#">{{ text }}</a>
    </li>
</template>

<script>


export default {
    name: 'Navbar',
    props: {
        text: String
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;



li {
    a {
        text-decoration: none;
        color: $textColorPurple;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        font-size: clamp(0.5rem, 0.6vw, 2rem);
    }
}
</style>