## HugDog SQL Server

### 注意:此專案僅模擬資料庫伺服器環境，非正式 react 環境

使用前請開啟 XAMPP mysql 與 apache 服務<br />

### `git clone https://github.com/huangaho423/hugdog-sql-server.git`

下載 HugDog SQL Server 專案.<br />

### `npm install`

安裝相關套件.<br />

### `npm start`

啟動資料庫伺服器.啟動伺服器後由[http://localhost:6001/設定的資料表名稱](http://localhost:6001/)進入存取.<br />

### 備註

1.資料庫設定請至/src/db/database.js 調整(已變更為 pet_db)<br />

2.若要進行資料表的設定，請用編輯器搜尋整個專案 (ctrl+shift+f)，搜尋「//-----資料表-----」
會有詳細說明

3.自己使用時可先刪除不必要的資料表設定，由最後整合再統一引入<br />
(本專案加入 product 資料表作為範例說明)
