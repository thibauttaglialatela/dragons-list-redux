import {KNIGHT_ADD, KNIGHT_DELETE, KNIGHT_SET_ERROR, KNIGHT_SET_VALUE} from "../constant/action-type.js";

const initialState = {
    id: 1,
    name: '',
    age: 15,
    error: '',
    knights: []
};

const knightReducer = (state = initialState, action) => {
    switch(action.type) {
        case KNIGHT_SET_VALUE:
            return {
                ...state,
                name: action.payload,
                age: action.payload,
                error: ''
            }
        case KNIGHT_ADD:
            return {
                ...state,
                knights: [...state.knights, {id: state.id, name: state.name.trim(), age: state.age}],
                name: '',
                age: 15,
                id: state.id++,
                error: ''
            }
        case KNIGHT_SET_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case KNIGHT_DELETE:
            return {
                ...state,
                knights: state.knights.filter(knight => knight.id !== action.payload)
            }
        default:
            return state;
    }
}

export default knightReducer;
