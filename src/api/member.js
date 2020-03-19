import express from 'express'

//-----資料表-----
//將此檔案複製成一份存於同資料夾下
//存檔檔名用自己的資料表名稱
//引入的檔名直接替換
//範例:import User from '../domain/檔案名稱.js'
import Member from '../domain/member.js'

// mysql2 async-await用的
import dbMysql2 from '../db/database.js'

const router = express.Router()

// 執行sql用的async-await的函式
// sql 執行用的sql
// res 回應
// method restful的方法，預設為get
// multirow 是否為多資料回傳，預設為是
// instance 物件實體，預設為空物件
async function executeSQL(
  sql,
  res,
  method = 'get',
  multirows = true,
  instance = {}
) {
  try {
    const [rows, fields] = await dbMysql2.promisePool.query(sql)

    switch (method) {
      case 'post': {
        // 仿照json-server的回傳
        const insertId = { id: rows.insertId }
        // 合併id值
        const result = { ...instance, ...insertId }
        //回傳
        res.status(200).json(result)
        break
      }
      case 'put': {
        // 仿照json-server的回傳，有更新到會回傳單一值，沒找到會回到空的物件字串
        // console.log(rows.affectedRows)
        let result = {}
        if (rows.affectedRows) result = { ...instance }
        //回傳
        res.status(200).json(result)
        break
      }
      case 'delete': {
        // 仿照json-server的回傳
        res.status(200).json({})
        break
      }
      case 'get':
      default:
        {
          if (multirows) {
            res.status(200).json({
              member: rows,
            })
          } else {
            // 仿照json-server的回傳，有找到會回傳單一值，沒找到會回到空的物件字串
            let result = {}
            if (rows.length) result = rows[0]
            res.status(200).json(result)
          }
        }
        break
    }
  } catch (error) {
    // 錯誤處理
    console.log(error)

    // 顯示錯誤於json字串
    res.status(200).json({
      message: error,
    })
  }
}

// get 處理獲取全部的資料列表
// AND查詢加入`?name=eddy&email=XXX&username=XXXX
router.get('/', (req, res, next) => {
  //console.log(req.query)

  if (!Object.keys(req.query).length) executeSQL(Member.getAllDataSQL(), res)
  else executeSQL(Member.getDataByQuerySQL(req.query), res)
})

// get 處理獲取單一筆的會員，使用id
router.get('/:mId', (req, res, next) => {
  executeSQL(Member.getDataByIdSQL(req.params.mId), res, 'get', false)
})

// post 新增一筆會員資料
router.post('/', (req, res, next) => {
  // 測試response，會自動解析為物件
  // console.log(typeof req.body)
  // console.log(req.body)

  //從request json 資料建立新的物件
  let data = new Member(
    req.body.name,
    req.body.username,
    req.body.password,
    req.body.email
  )

  executeSQL(data.addDataSQL(), res, 'post', false, user)
})

//delete 刪除一筆資料
router.delete('/:mId', (req, res, next) => {
  executeSQL(Member.deleteDataByIdSQL(req.params.mId), res, 'delete', false)
})

// put 更新一筆資料
router.put('/:mId', (req, res) => {
  let user = new Member(
    req.body.name,
    req.body.username,
    req.body.password,
    req.body.email
  )

  // id值為數字
  user.id = +req.params.mId

  executeSQL(user.updateDataByIdSQL(req.params.mId), res, 'put', false, user)
})

export default router
