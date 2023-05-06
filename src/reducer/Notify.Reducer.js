export default function NotifyReducer(state, action){
    switch(action.type){
        case "NOTIFY":
            return{
                notification: action.payload
            }

        default:
            return state;
    }
}