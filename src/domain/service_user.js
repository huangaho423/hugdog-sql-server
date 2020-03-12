//-----資料表-----
//修改類別名稱
class ServiceUser {
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
  //以下資料表名稱請替換成自己的資料表(共7處),並請適當檢查欄位名稱
  addDataSQL() {
    let sql = `INSERT INTO service_user(name, username, password, email, login, createdDate) \
                   VALUES('${this.name}', '${this.username}', '${this.password}', '${this.email}', 0, NOW())`
    return sql
  }

  updateDataByIdSQL(id) {
    let sql = `UPDATE service_user \
               SET name = '${this.name}', username = '${this.username}', password = '${this.password}', email = '${this.email}', login = ${this.login} \
               WHERE id =  ${id}`
    return sql
  }

  // static是與實例化無關
  static getDataByIdSQL(id) {
    let sql = `SELECT * FROM service_user WHERE id = ${id}`
    return sql
  }

  // static是與實例化無關
  static getDataByQuerySQL(query) {
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

  static deleteDataByIdSQL(id) {
    let sql = `DELETE FROM service_user WHERE ID = ${id}`
    return sql
  }

  static getAllDataSQL() {
    let sql = `SELECT * FROM service_user`
    return sql
  }
}
//-----資料表-----
//修改類別名稱
export default ServiceUser
