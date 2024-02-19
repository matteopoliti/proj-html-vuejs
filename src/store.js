import { reactive } from "vue";

export const store = reactive({
    headerNavbar: [
        'HOME', 'SHOP', 'ABOUT', 'GALLERY', 'LOCATIONS', 'JOURNAL', 'CONTACT', 'MY ACCOUNT'
    ],
    products: [
        {
            nomeProdotto: 'Choco Chip Cookies',
            categoria: 'Cookies, Pastries',
            prezzo: '$19.00 - $39.00',
            img: '/src/assets/img/choco-chip-cookies.jpg'
        },
        {
            nomeProdotto: 'strawberry jam cookies',
            categoria: 'Cookies, Pastries',
            prezzo: '$19.00 - $39.00',
            img: '/src/assets/img/strawberry-jam-cookies.jpg'
        },
        {
            nomeProdotto: 'strawberry donut',
            categoria: 'Cookies, Pastries',
            prezzo: '$19.00 - $39.00',
            img: '/src/assets/img/strawberry-donut.jpg'
        },
        {
            nomeProdotto: 'perfec -macarons',
            categoria: 'Cookies, Pastries',
            prezzo: '$19.00 - $39.00',
            img: '/src/assets/img/perfect-macarons.jpg'
        },
        {
            nomeProdotto: 'blackberry stuffed bread',
            categoria: 'Bread',
            prezzo: '$5.00 - $15.00',
            img: '/src/assets/img/blackberry-stuffed-bread.jpg'
        },
        {
            nomeProdotto: 'home bread',
            categoria: 'Bread',
            prezzo: '$2.00 - $10.00',
            img: '/src/assets/img/home-bread.jpg'
        },
        {
            nomeProdotto: 'cookies with ice cream',
            categoria: 'Cookies, Pastries',
            prezzo: '$19.00 - $39.00',
            img: '/src/assets/img/cookies-with-ice-cream.jpg'
        },
        {
            nomeProdotto: 'cherry cake',
            categoria: 'Cakes',
            prezzo: '$50.00 - $200.00',
            img: '/src/assets/img/cherry-cake.jpg'
        },
        {
            nomeProdotto: 'glazed pancake with lemon',
            categoria: 'Cakes',
            prezzo: '$40.00 - $80.00',
            img: '/src/assets/img/glazed-pancake-with-lemon.jpg'
        }
    ]
});