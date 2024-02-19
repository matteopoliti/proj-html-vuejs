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
        color: $textColor;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
    }
}
</style>