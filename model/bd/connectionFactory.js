var mysql = require("mysql")

module.exports = function getConnection() {

	var config = require("../../config/config")

	return mysql.createPool({
		connectionLimit: 10,
		host: config.MYSQL_DB_ADDRESS,
		user: config.MYSQL_DB_USER,
		password: config.MYSQL_DB_PASSWORD,
		database: config.MYSQL_DB_NAME
	})
} 