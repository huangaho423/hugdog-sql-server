//-----資料表-----
//修改類別名稱
class Member {
  constructor(
    mId,
    mName,
    mAccount,
    mPassword,
    mImg,
    mGender,
    mBday,
    mPhone,
    mEmail,
    mAddress
  ) {
    this.mId = mId
    this.mName = mName
    this.mAccount = mAccount
    this.mPassword = mPassword
    this.mImg = mImg
    this.mGender = mGender
    this.mBday = mBday
    this.mPhone = mPhone
    this.mEmail = mEmail
    this.mAddress = mAddress
  }
  //-----資料表-----
  //將此檔案複製成一份存於同資料夾下
  //存檔檔名用自己的資料表名稱
  //以下資料表名稱請替換成自己的資料表(共7處),並請適當檢查欄位名稱
  addDataSQL() {
    let sql = `INSERT INTO member( 
      mId,
      mName,
      mAccount,
      mPassword,
      mImg,
      mGender,
      mBday,
      mPhone,
      mEmail,
      mAddress, 
      created_at) \
                   VALUES('${this.mId}', '${this.mName}', '${this.mAccount}', '${this.mPassword}','${this.mImg}','${this.mGender}','${this.mBday}','${this.mPhone}','${this.mEmail}','${this.mAddress}', NOW())`
    return sql
  }

  updateDataByIdSQL(mId) {
    let sql = `UPDATE member \
               SET mId = '${this.mId}', mName = '${this.mName}', mAccount = '${this.mAccount}', mPassword = '${this.mPassword}', mImg = ${this.mImg}, mGender = ${this.mGender}, mBday = ${this.mBday}, mPhone = ${this.mPhone}, mEmail = ${this.mEmail}, mAddress = ${this.mAddress} \
               WHERE mId =  ${mId}`
    return sql
  }

  // static是與實例化無關
  static getDataByIdSQL(mId) {
    let sql = `SELECT * FROM member WHERE mId = ${mId}`
    return sql
  }

  // static是與實例化無關
  static getDataByQuerySQL(query) {
    const where = []

    if (query.mId) where.push(`name = '${query.mId}'`)
    if (query.mName) where.push(`email = '${query.mName}'`)
    if (query.mAccount) where.push(`username = '${query.mAccount}'`)
    if (query.mPassword) where.push(`username = '${query.mPassword}'`)
    if (query.mImg) where.push(`username = '${query.mImg}'`)
    if (query.mGender) where.push(`username = '${query.mGender}'`)
    if (query.mBday) where.push(`username = '${query.mBday}'`)
    if (query.mPhone) where.push(`username = '${query.mPhone}'`)
    if (query.mEmail) where.push(`username = '${query.mEmail}'`)
    if (query.mAddress) where.push(`username = '${query.mAddress}'`)

    let sql = ''

    if (where.length) sql = `SELECT * FROM member WHERE ` + where.join(' AND ')
    else sql = `SELECT * FROM member`

    return sql
  }

  static deleteDataByIdSQL(mId) {
    let sql = `DELETE FROM member WHERE mId = ${mId}`
    return sql
  }

  static getAllDataSQL() {
    let sql = `SELECT * FROM member`
    return sql
  }
}
//-----資料表-----
//修改類別名稱
export default Member
