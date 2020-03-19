//-----資料表-----
//修改類別名稱
class Dog {
  constructor(dId, dName, mId, dImg, dGender, dYear, dMonth, dWeight, dInfo) {
    this.dId = dId
    this.dName = dName
    this.mId = mId
    this.dImg = dImg
    this.dGender = dGender
    this.dYear = dYear
    this.dMonth = dMonth
    this.dWeight = dWeight
    this.dInfo = dInfo
  }
  //-----資料表-----
  //將此檔案複製成一份存於同資料夾下
  //存檔檔名用自己的資料表名稱
  //以下資料表名稱請替換成自己的資料表(共7處),並請適當檢查欄位名稱
  addDataSQL() {
    let sql = `INSERT INTO dog( 
      dId,
      dName,
      dImg,
      dGender,
      dYear,
      dMonth,
      dWeight,
      dInfo, 
      created_at) \
                   VALUES('${this.dId}', '${this.dName}','${this.dImg}','${this.dGender}','${this.dYear}','${this.dMonth}','${this.dWeight}','${this.dInfo}', NOW())`
    return sql
  }

  updateDataByIdSQL(dId) {
    let sql = `UPDATE dog \
               SET dId = '${this.dId}', dName = '${this.dName}', dImg = ${this.dImg}, dGender = ${this.dGender}, dYear = ${this.dYear}, dMonth = ${this.dMonth}, dWeight = ${this.dWeight}, dInfo = ${this.dInfo} \
               WHERE dId =  ${dId}`
    return sql
  }

  // static是與實例化無關
  static getDataByIdSQL(dId) {
    let sql = `SELECT * FROM dog WHERE dId = ${dId}`
    return sql
  }

  // static是與實例化無關
  static getDataByQuerySQL(query) {
    const where = []

    if (query.dId) where.push(`name = '${query.dId}'`)
    if (query.dName) where.push(`email = '${query.dName}'`)
    if (query.mAccount) where.push(`username = '${query.mAccount}'`)
    if (query.mPassword) where.push(`username = '${query.mPassword}'`)
    if (query.dImg) where.push(`username = '${query.dImg}'`)
    if (query.dGender) where.push(`username = '${query.dGender}'`)
    if (query.dYear) where.push(`username = '${query.dYear}'`)
    if (query.dMonth) where.push(`username = '${query.dMonth}'`)
    if (query.dWeight) where.push(`username = '${query.dWeight}'`)
    if (query.dInfo) where.push(`username = '${query.dInfo}'`)

    let sql = ''

    if (where.length) sql = `SELECT * FROM dog WHERE ` + where.join(' AND ')
    else sql = `SELECT * FROM dog`

    return sql
  }

  static deleteDataByIdSQL(dId) {
    let sql = `DELETE FROM dog WHERE dId = ${dId}`
    return sql
  }

  static getAllDataSQL() {
    let sql = `SELECT * FROM dog`
    return sql
  }
}
//-----資料表-----
//修改類別名稱
export default Dog
