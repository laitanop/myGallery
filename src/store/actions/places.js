import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionsTypes';


export function addPlace(placeName) {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
}

export function deletePlace() {
    return {
        type: DELETE_PLACE,
    }
}

export function selectPlace(key) {
    return {
        type: SELECT_PLACE,
        placeKey: key
    }
}

export function deselectPlace() {
    return {
        type: DESELECT_PLACE,
    }
}