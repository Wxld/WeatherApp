const weatherReducer =(state={},action) => {
    if(action.type==="UPDATE_DATA")
    {
        return action.payload;
    }
    return state;
}

export default weatherReducer;