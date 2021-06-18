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

export const addReview = review => (
    {
        type: 'ADD_REVIEW',
        payload: review
    }
)

export const deleteReview = reviewId => (
    {
        type: 'DELETE_REVIEW',
        payload: reviewId
    }
)
