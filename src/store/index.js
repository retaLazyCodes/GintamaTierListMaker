import { applyMiddleware, createStore } from "redux";
import { arcsReducer } from "./reducers/arcsReducer";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

export const store = createStore(
    arcsReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


