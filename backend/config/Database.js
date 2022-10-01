import {Sequelize} from "sequelize";

const db=new Sequelize('auth_db','root','pass@123',
{
    host:"localhost",
    dialect:"mysql"
});

export default db;