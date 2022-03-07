import { arcsService } from "../../services/arcs"

const initialState = {
    tierlist: []
};

export function arcsReducer(state = initialState, action) {
    console.log('ACTION:', action)
    switch (action.type) {
        case '@arcs/INIT':
            return {
                ...state,
                tierlist: action.payload.map(item => ({ tier: 'benchTier', index: 0, ...item }))
            }

        case '@arcs/LOAD_TIERLIST':
            console.log(action.payload)
            return {
                ...state,
                tierlist: action.payload.tierlist.tierlist
            }

        case "@arcs/CHANGING_TIER":
            return {
                ...state,
                tierlist: state.tierlist.filter(item => item.tier !== action.payload, item => item.index !== action.payload)
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