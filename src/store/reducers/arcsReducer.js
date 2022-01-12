import { arcsService } from "services/arcs"

export function attendeesReducer(state = [], action) {
    console.log('ACTION:', action)
    switch (action.type) {
        case '@attendees/init':
            return action.payload

        default:
            return state
    }
}


export const initArcs = () => {
    return async (dispatch) => {
        const arcs = await arcsService.getAll()

        dispatch({
            type: '@arcs/init',
            payload: arcs
        })
    }
}
