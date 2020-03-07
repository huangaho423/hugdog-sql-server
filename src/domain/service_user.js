class User {
  constructor(name, username, password, email) {
    this.id = 0
    this.name = name
    this.username = username
    this.password = password
    this.email = email
    this.login = 0
  }

  addUserSQL() {
    let sql = `INSERT INTO service_user(name, username, password, email, login, createdDate) \
                   VALUES('${this.name}', '${this.username}', '${this.password}', '${this.email}', 0, NOW())`
    return sql
  }

  updateUserByIdSQL(id) {
    let sql = `UPDATE service_user \
               SET name = '${this.name}', username = '${this.username}', password = '${this.password}', email = '${this.email}', login = ${this.login} \
               WHERE id =  ${id}`
    return sql
  }

  // static是與實例化無關
  static getUserByIdSQL(id) {
    let sql = `SELECT * FROM service_user WHERE id = ${id}`
    return sql
  }

  // static是與實例化無關
  static getUserByQuerySQL(query) {
    const where = []

    if (query.name) where.push(`name = '${query.name}'`)
    if (query.email) where.push(`email = '${query.email}'`)
    if (query.username) where.push(`username = '${query.username}'`)

    let sql = ''

    if (where.length)
      sql = `SELECT * FROM service_user WHERE ` + where.join(' AND ')
    else sql = `SELECT * FROM service_user`

    return sql
  }

  static deleteUserByIdSQL(id) {
    let sql = `DELETE FROM service_user WHERE ID = ${id}`
    return sql
  }

  static getAllUserSQL() {
    let sql = `SELECT * FROM service_user`
    return sql
  }
}

export default User
