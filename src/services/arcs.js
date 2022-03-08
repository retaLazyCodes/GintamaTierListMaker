import db from './db.json'

const getAll = () => {
    return db.arcs
}

export const arcsService = {
    getAll,
}

