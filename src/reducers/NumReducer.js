const numInitialState = ["man hinh", 'chuot', "ban phims"];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            return [...state, action.newItem]
        case "DEL":
            return [state.filter((value, index) => index !== action.index)]
        // loc nhung phan tu ko trung voi tham so dc truyen vao            
        default:
            return state
    }
}
export default numReducer;