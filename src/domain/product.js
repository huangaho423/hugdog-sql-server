class User {
  constructor(name, username, password, email) {
    this.id = 0
    this.name = name
    this.username = username
    this.password = password
    this.email = email
    this.login = 0
  }
  //-----資料表-----
  //將此檔案複製成一份存於同資料夾下
  //存檔檔名用自己的資料表名稱
  //以下資料表名稱請替換成自己的資料表(共7處)
  addUserSQL() {
    let sql = `INSERT INTO product(name, username, password, email, login, createdDate) \
                   VALUES('${this.name}', '${this.username}', '${this.password}', '${this.email}', 0, NOW())`
    return sql
  }

  updateUserByIdSQL(id) {
    let sql = `UPDATE product \
               SET name = '${this.name}', username = '${this.username}', password = '${this.password}', email = '${this.email}', login = ${this.login} \
               WHERE id =  ${id}`
    return sql
  }

  // static是與實例化無關
  static getUserByIdSQL(id) {
    let sql = `SELECT * FROM product WHERE id = ${id}`
    return sql
  }

  // static是與實例化無關
  static getUserByQuerySQL(query) {
    const where = []

    if (query.name) where.push(`name = '${query.name}'`)
    if (query.email) where.push(`email = '${query.email}'`)
    if (query.username) where.push(`username = '${query.username}'`)

    let sql = ''

    if (where.length) sql = `SELECT * FROM product WHERE ` + where.join(' AND ')
    else sql = `SELECT * FROM product`

    return sql
  }

  static deleteUserByIdSQL(id) {
    let sql = `DELETE FROM product WHERE ID = ${id}`
    return sql
  }

  static getAllUserSQL() {
    let sql = `SELECT * FROM product`
    return sql
  }
}

export default User
