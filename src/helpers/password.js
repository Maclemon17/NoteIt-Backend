exports.hidePassword = async (data) => {
    const user = await {...data._doc};

    delete user.password;


    return user;
}

