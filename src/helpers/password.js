exports.hidePassword = async (data) => {
    if (data) {
        const user = await { ...data._doc };
        delete user.password;

        return user;
    }

}

