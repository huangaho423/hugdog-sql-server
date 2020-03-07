## HugDog SQL Server

### 注意:此專案僅模擬資料庫伺服器環境，非正式 react 環境

使用前請開啟 XAMPP mysql 與 apache 服務<br />

### `git clone https://github.com/huangaho423/hugdog-react.git`

下載 HugDog SQL Server 專案.<br />

### `npm install`

安裝相關套件.<br />

### `npm start`

啟動資料庫伺服器.需要啟動伺服器並由[http://localhost:6001/](http://localhost:6001/設定的資料表名稱)進入存取.<br />

###　備註

/src/db/database.js 　已變更資料庫為 pet_db<br />

1.若要進行資料表的設定，請搜尋專案 (ctrl+shift+f)，搜尋「//-----資料表-----」
會有詳細說明

2.自己使用時可先刪除不必要的資料表設定，由最後整合再統一引入<br />
(本專案加入 product,service_user 兩個資料表作為範例說明)
