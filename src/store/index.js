import { applyMiddleware, createStore } from "redux";
import { attendeesReducer } from "./reducers/arcsReducer";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

export const store = createStore(
    attendeesReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


