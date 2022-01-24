export const adding = (item) => {
    return {
        type: 'ADD',
        payload: item
    };
}

export const changingTier = (item) => {
    return {
        type: '@arcs/CHANGING_TIER',
        payload: item
    };
}