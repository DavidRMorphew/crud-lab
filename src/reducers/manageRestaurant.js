import cuid from 'cuid';

let restaurant
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
        default:
            return state
    }
}
