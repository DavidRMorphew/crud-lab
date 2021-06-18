import cuid from 'cuid';

let restaurant
let review
let index

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type){
        case 'ADD_RESTAURANT':
            restaurant = {...action.payload, id: cuid()}
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case 'DELETE_RESTAURANT':
            return {...state, restaurants: [...state.restaurants.filter(restaurant=> restaurant.id !== action.payload)]}
        case 'ADD_REVIEW':
            review = {...action.payload, id: cuid()}
            return {...state, reviews: [...state.reviews, review]}
        case 'DELETE_REVIEW':
            return {...state, reviews: [...state.reviews.filter(review => review.id !== action.payload)]}
        default:
            return state
    }
}
