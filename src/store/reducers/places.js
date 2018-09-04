import { DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionsTypes';
​
const initialState = {
    places: [], 
    selectedPlace: null
}
​
function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_PLACE:
      return {
          ...state, 
          places: state.places.concat({
              key:Math.random(),
              name: action.placeName, 
              image: {
                uri: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
              }

          })
      }
      case DELETE_PLACE:
      return {
          ...state,
          places: state.places.filter(place => {
            return place.key !== state.selectedPlace.key;
          }), 
          selectedPlace: null
      }
      case SELECT_PLACE:
      return {
          ...state,
        selectedPlace: state.places.find(place => {
            return place.key === action.placeKey
          })
      }
      case DESELECT_PLACE:
      return {
          ...state,
          selectedPlace: null
      }
      default:
        return state;
    }
  }
  export default reducer;