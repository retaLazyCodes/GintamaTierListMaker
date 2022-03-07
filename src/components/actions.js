export const changingTier = (item) => {
    return {
        type: '@arcs/CHANGING_TIER',
        payload: item
    };
}

export const loadState = (state) => {
    return {
        type: '@arcs/LOAD_TIERLIST',
        payload: state
    };
}