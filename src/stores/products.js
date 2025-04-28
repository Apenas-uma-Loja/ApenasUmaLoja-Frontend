import { ref, computed, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
const router = useRouter()

export const useProductStore = defineStore('product', () => {
    const state = reactive({
        products: [
            {
                id: 1,
                title: 'Bermuda Mordecai',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/bermuda-mordecai.png',
                quantity: ref(100),
            },
            {
                id: 2,
                title: 'Camisa Musculoso "Wooooo"',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/camisa-musculoso.png',
                quantity: ref(100),
            },
            {
                id: 3,
                title: 'Camisa com Rigby nas costas',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/camisa-rigby.png',
                quantity: ref(100),
            },
            {
                id: 4,
                title: 'Moletom canguru Regular Show',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/moletom-regularshow.png',
                quantity: ref(100),
            },
            {
                id: 5,
                title: 'Action figure Benson Funko Pop!',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/figure-benson.png',
                quantity: ref(100),
            },
            {
                id: 6,
                title: 'Action figure Mordecai Funko Pop!',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/figure-mordecai.png',
                quantity: ref(100),
            },
            {
                id: 7,
                title: 'Action figure Rigby Funko Pop!',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/figure-rigby.png',
                quantity: ref(100),
            },
            {
                id: 8,
                title: 'Pelucia Saltitão',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/pelucia-saltitao.png',
                quantity: ref(100),
            },
            {
                id: 9,
                title: 'Boné Azul e Branco “I’m Eggscellent”',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/bone-azul.png',
                quantity: ref(100),
            },
            {
                id: 10,
                title: 'Bolso Pirulito do Pairulito',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/bolsa-pairulito.png',
                quantity: ref(100),
            },
            {
                id:11,
                title: 'Caneca Café-café',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/caneca-cafe.png',
                quantity: ref(100),
            },
            {
                id: 12,
                title: 'Mochila Morrom Rigby',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/mochila-rigby.png',
                quantity: ref(100),
            },
            {
                id: 13,
                title: 'Capinha Iphone artezanal feita a mão',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/capinha-celular.png',
                quantity: ref(100),
            },
            {
                id: 14,
                title: 'Carteira Mordecai e Rigby “Haters gonna hate” feita a mão',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/carteira-rigby.png',
                quantity: ref(100),
            },
            {
                id: 15,
                title: 'Poster Laranja Mordecai e Rigby Irado!',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/poster-mordecai.png',
                quantity: ref(100),
            },
            {
                id: 16,
                title: 'Quadro colorido Mordecai e Rigby',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/products-images/quadro-colorido.png',
                quantity: ref(100),
            }

        ],
        currentProduct: {},
        cart: [],
        cartTotal: 0,
    })
    const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])
    const cartTotal = ref(0)

    watch(cart, (newCart) => {
        localStorage.setItem('cart', JSON.stringify(newCart))
    }, { deep: true })
    const loading = ref(false)
    const error = ref(null)
    const addToCart = (product) => {
        const existingProduct = state.cart.find(item => item.id === product.id)
        if (existingProduct) {
            existingProduct.quantity++
        } else {
            cart.value.push({ ...product})
        }
    }
    const removeFromCart = (product) => {
        const index = state.cart.findIndex(item => item.id === product.id) -1
        if (index !== -1) {
            cart.value.splice(index, 1)
        }
    }
    const clearCart = () => {
        cart.value = []
    }
    const calculateTotal = () => {
       cartTotal.value = cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
    const productDetail = (id) =>{
        router.push({ name: 'ProductDetail', params: { productId: id } })
    }
    return {
        state,
        loading,
        error,
        addToCart,
        removeFromCart,
        clearCart,
        calculateTotal,
        productDetail,
        cart,
        cartTotal,
    }
})