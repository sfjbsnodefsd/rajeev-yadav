const pool  = require("../../config/database")

module.exports = {
    create : (data, callback) => {
        pool.query(
            `insert into registration(firstname,lastname,gender,email,password,number)
            values(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
            ],
            (error, result, fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null, result);
            }
        )
    },
    getUser : (callback) => {
        pool.query(
            `select * from registration`,
            [],
            (error, results,fields) => {
                console.log(results);
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },
    getUserById : (id,callback) => {
        pool.query(
            `select id, firstname, lastname, gender,email from registration where id = ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results)
            }
        )
    },
    updateUser : (data,callback) => {
        console.log(data)
        pool.query(
            'update registration set firstname = ? , lastname = ?, gender = ?,email = ?,number = ? where id = ?',
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.number,
                data.id,
            ],(error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results[0])
            }
        )
    },
    deleteUser : (id, callback) => {
        pool.query(
            `delete from registration where id = ?`,
            [id],
            (error, result,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null, result[0])
            }
        )
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
          `select * from registration where email = ?`,
          [email],
          (error, results, fileds) => {
            console.log(error)
            if(error) {
             return callBack(error)
            } return callBack(null, results[0]);
          }
        )
      }
}