import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
const router = useRouter()

export const useProductStore = defineStore('product', () => {
    const state = reactive({
        products: [
            {
                id: 1,
                title: 'Action figure Mordecai 30x10cm edição de aniversário',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/mordecai-boneco.png',
                quantity: ref(100),
            },
            {
                id: 2,
                title: 'Action figure Mordecai 30x10cm edição de aniversário',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/mordecai-boneco.png',
                quantity: ref(100),
            },
            {
                id: 3,
                title: 'Action figure Mordecai 30x10cm edição de aniversário',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/mordecai-boneco.png',
                quantity: ref(100),
            },
            {
                id: 4,
                title: 'Action figure Mordecai 30x10cm edição de aniversário',
                description: 'Boneco Mordecai 30x10cm edição de aniversário',
                price: 125.90,
                oldPrice: 150.00,
                imageUrl: '/public/mordecai-boneco.png',
                quantity: ref(100),
            }
        ],
        currentProduct: {},
        cart: [],
        cartTotal: 0,
    })
    const loading = ref(false)
    const error = ref(null)
    const addToCart = (product, quantity) => {
        const existingProduct = state.cart.find(item => item.id === product.id)
        if (existingProduct) {
            existingProduct.quantity++
        } else {
            state.cart.push({ ...product, quantity })
        }
    }
    const removeFromCart = (product) => {
        const index = state.cart.findIndex(item => item.id === product.id)
        if (index !== -1) {
            state.cart.splice(index, 1)
        }
    }
    const clearCart = () => {
        state.cart = []
    }
    const calculateTotal = () => {
        state.cartTotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
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
    }
})