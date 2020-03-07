import mysql from 'mysql2'

// 資料庫連結資訊
//-----資料庫-----
//資料庫連線設定
const connection = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pet_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}

// 一般使用
const pool = mysql.createPool(connection)

// promise用
const promisePool = pool.promise()

export default {
  pool,
  promisePool,
}
