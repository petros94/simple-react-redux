import { types } from '../actions/userActions';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case types.setUser:
            const { firstName, lastName, email } = action.user;
            return {
                ...state,
                firstName: firstName,
                lastName: lastName,
                email: email
            };
        default:
            return state;
    }
};

export default userReducer;