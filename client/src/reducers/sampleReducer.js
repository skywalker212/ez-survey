const defaultState = {
    a: 1
}

const sampleReducer = (state=defaultState, action)=>{
    switch(action.type){
        case 'INC':
            return {
                a: state.a + 1
            }
        case 'DEC':
            return {
                a: state.a - 1
            }
        default:
            return state;
    }
}

export default sampleReducer;