import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'

// 需匯入api
//----- 連結資料表引入位置 -----
import users from './api/users.js'
import service_user from './api/service_user.js'

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

//app.use('/products', products)
//app.use('/orders', orders)
app.use('/users', users)
app.use('/service_user', service_user)

// 未找到的錯誤 - 404
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// 處理其它還未實作的要求 - 501
app.use((err, req, res, next) => {
  res.status(err.status || 501)
  res.json({
    error: {
      code: err.status || 501,
      message: err.message,
    },
  })
})

// 以下為測試restful用的
// app.get('/', (req, res) => {
//   return res.send('Received a GET HTTP method')
// })

// app.post('/', (req, res) => {
//   return res.send('Received a POST HTTP method')
// })

// app.put('/', (req, res) => {
//   return res.send('Received a PUT HTTP method')
// })

// app.delete('/', (req, res) => {
//   return res.send('Received a DELETE HTTP method')
// })

export default app
