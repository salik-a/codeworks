import AsyncStorage from "@react-native-async-storage/async-storage";

export default function (state, action) {
    switch (action.type) {
        case "ADD_FAVORITES":
            return { ...state, favorites: [...state.favorites, action.payload.data] }

        case 'REMOVE_FAVORITES':
            return { favorites: [...state.favorites.filter(job => job !== action.payload.job)] };

        default:
            return state;
    }
}