import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'

// 需匯入api
//-----資料表-----
//加入設定的資料表並引入(請接續加在後面)
//import 資料表 from './api/資料表.js'
import product from './api/product.js'
import member from './api/member.js'
import serviceUser from './api/service_user.js'

const app = express()

const whiteList = ['http://localhost:3000', undefined]
const corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(null, false)
    }
  },
}

app.use(cors(corsOptions))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

//app.use('/products', products)
//app.use('/orders', orders)
//-----資料表-----
//這邊設定中介軟體middleware(請接續加在後面)
//app.use('/資料表', 資料表)
app.use('/product', product)
app.use('/member', member)
app.use('/service_user', serviceUser)

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
