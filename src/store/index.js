import { applyMiddleware, createStore, combineReducers } from "redux";
import { arcsReducer } from "./reducers/arcsReducer";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

const allReducers = combineReducers({
    tierlist: arcsReducer
})


export const store = createStore(
    allReducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


