import GeneralActions from "../Actions/GeneralActions";
import { AsyncStorage } from 'react-native'
import axios from 'axios';

class GeneralMiddleware {
    static fetch(data, path, field) {
        return dispatch => {
            var user = AsyncStorage.getItem('user');
            if (!user || !user.databaseToken) {
                dispatch(GeneralActions.ErrorAction({ errorMessage: "Authentication Expired, Login Again" }, 'AUTHENTICATION'));
            } else {
                dispatch(GeneralActions.PendingAction(data, field));
                axios.post(`${path}`, {
                    data,
                    databaseToken: user.databaseToken
                })
                    .then((response) => {
                        if (!response.data.success) {
                            dispatch(GeneralActions.ErrorAction({ errorMessage: response.data.message }, field));
                        }
                        else {
                            dispatch(GeneralActions.SuccessAction({ data: response.data.data }, field));
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        dispatch(GeneralActions.ErrorAction({ errorMessage: "Something Went Wrong, Please Try Again!" }, field));
                    });
            }

        }
    }
}

export default GeneralMiddleware;