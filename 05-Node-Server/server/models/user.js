//column for email (store as string) and can't be null (false)
//password (store as string) and can't be null (false)

module.exports = function (seq, DataTypes) {

    const User = seq.define("user", {

        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return User
}
