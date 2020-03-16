//-----資料表-----
//修改類別名稱
class Product {
  constructor(
    pName,
    pCategoryId,
    pPrice,
    pDiscount,
    pQuantity,
    pImg,
    pInfo,
    vId
  ) {
    this.pId = 0
    this.pName = pName
    this.pCategoryId = pCategoryId
    this.pPrice = pPrice
    this.pDiscount = pDiscount
    this.pQuantity = pQuantity
    this.pImg = pImg
    this.pInfo = pInfo
    this.vId = vId
  }
  //-----資料表-----
  //將此檔案複製成一份存於同資料夾下
  //存檔檔名用自己的資料表名稱
  //以下資料表名稱請替換成自己的資料表(共7處),並請適當檢查欄位名稱
  addDataSQL() {
    let sql = `INSERT INTO product(pName, pCategoryId, pPrice, pDiscount, pQuantity, pImg, vId, created_at) \
                   VALUES('${this.pName}', '${this.pCategoryId}', '${this.pPrice}', '${this.pDiscount}', '${this.pQuantity}', '${this.pImg}', '${this.vId}', NOW())`
    return sql
  }

  updateDataByIdSQL(pId) {
    let sql = `UPDATE product \
               SET pName = '${this.pName}', pCategoryId = '${this.pCategoryId}', pPrice = '${this.pPrice}', pDiscount = '${this.pDiscount}', pQuantity = ${this.pQuantity}, pImg = ${this.pImg}, vId = ${this.vId} \
               WHERE pId =  ${pId}`
    return sql
  }

  // static是與實例化無關
  static getDataByIdSQL(pId) {
    let sql = `SELECT * FROM product WHERE pId = ${pId}`
    return sql
  }

  // static是與實例化無關
  static getDataByQuerySQL(query) {
    const where = []

    if (query.pName) where.push(`pName = '${query.pName}'`)
    if (query.pDiscount) where.push(`pDiscount = '${query.pDiscount}'`)
    if (query.pCategoryId) where.push(`pCategoryId = '${query.pCategoryId}'`)

    let sql = ''

    if (where.length) sql = `SELECT * FROM product WHERE ` + where.join(' AND ')
    else sql = `SELECT * FROM product`

    return sql
  }

  static deleteDataByIdSQL(pId) {
    let sql = `DELETE FROM product WHERE pId = ${pId}`
    return sql
  }

  static getAllDataSQL() {
    let sql = `SELECT * FROM product`
    return sql
  }
}
//-----資料表-----
//修改類別名稱
export default Product
