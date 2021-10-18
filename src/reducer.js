import * as actions from './actionTypes'

let lastId = 0;

// this is pure function, the same arguments will give the same output
export default function reducer(state = [], action) {

    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        // return the array with all the bugs except given id
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)

        case actions.BUG_RESOLVED:
            return state.map(bug =>
                bug.id !== action.payload.id ? bug : { ...bug, resolved: true })

        default:
            return state
    }
}