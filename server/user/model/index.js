const UserModel = require('./User');

const create = async (params) => {
    try {
        await UserModel.sync();
        await UserModel.create(params);
    } catch (error) {
        console.log(error);
    }
};

module.exports = create;