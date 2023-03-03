
const loader = {
    load : false
}

function reducerLoader(state = loader , action) {
    switch (action.type) {
        case "Loader":
            return {
                ...state , load : action.payload
            }
    
        default:
            return state;
    }

}

export default reducerLoader;