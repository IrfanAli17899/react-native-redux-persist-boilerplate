import GeneralProperties from "./GeneralProperties";

export default function authReducer(state = {
    ...GeneralProperties.defaultProperties(),

}, action) {

    const AUTHENTICATION = 'AUTHENTICATION'

    switch (action.type) {
        case `${AUTHENTICATION}_PENDING`:
            return {
                ...state,
                ...GeneralProperties.defaultProperties(),
                isLoading: true,

            }
        case `${AUTHENTICATION}_SUCCESS`:
            return {
                ...state,
                ...GeneralProperties.generalRsponseProperties(false, '')
            }

        case `${AUTHENTICATION}_ERROR`:
            return {
                ...state,
                ...GeneralProperties.generalRsponseProperties(true, '')
            }
        default:
            return state;

    }

} 