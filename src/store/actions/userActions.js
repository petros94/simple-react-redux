export const types = {
    setUser: 'SET_USER'
};

export const setUser = ({firstName, lastName, email}) => ({
    type: types.setUser,
    user: {
        firstName: firstName,
        lastName: lastName,
        email: email
    }
});
