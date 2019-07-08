class GeneralActions {
    
    static PendingAction = (data, field) => {
        return {
            type: `${field}_PENDING`,
            payload: data
        }
    }

    static SuccessAction = (data, field) => {
        return {
            type: `${field}_SUCCESS`,
            payload: data
        }
    }

    static ErrorAction = (data, field) => {
        return {
            type: `${field}_ERROR`,
            payload: data
        }
    }
}
export default GeneralActions;
