import { arcsService } from "../../services/arcs"

export function arcsReducer(state = [], action) {
    console.log('ACTION:', action)
    switch (action.type) {
        case '@arcs/INIT':
            return action.payload.map(card => ({ ...card, tier: 'benchTier', index: 0 }))

        case "@arcs/CHANGING_TIER":
            return {
                ...state, tierlist: state.filter(item => item.tier !== action.payload,
                    item => item.index !== action.payload)
            };

        default:
            return state
    }
}


export const initArcs = () => {
    return async (dispatch) => {
        const arcs = await arcsService.getAll()

        dispatch({
            type: '@arcs/INIT',
            payload: arcs
        })
    }
}
