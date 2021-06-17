export const addRestaurant = (restaurant) => (
    {
        type: 'ADD_RESTAURANT',
        payload: restaurant
    }
)

export const deleteRestaurant = restaurantId => {
    return {
        type: 'DELETE_RESTAURANT',
        payload: restaurantId
    }
}
