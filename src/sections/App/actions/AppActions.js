import { ACTION_APP_TEST } from '../constant';

export const testAction = title => (dispatch) => {
    dispatch({
        type: ACTION_APP_TEST,
        payload: { title }
    });
}