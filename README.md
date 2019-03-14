# 資料來源
## 安裝 JSON Server 工具

```
npm install -g json-server
```

## 啟動 JSON Server 建立模擬 API 伺服器

```
json-server https://gist.githubusercontent.com/doggy8088/705839b27459fcbeefb54df40ad570f7/raw/8468ebcaa6cbbf3e86ec5500b1808159808eecdf/db.json
```

## 呼叫範例

在 `json-server` 啟動之後，可以參考以下網址進行API呼叫：

* 取得所有文章

    http://localhost:3000/articles

* 用 `KEYWORD` 關鍵字搜尋所有文章

    http://localhost:3000/articles?q=KEYWORD

* 取得所有標籤

    http://localhost:3000/tags
# 如果今天新增了一個資料夾...
## 到angular.json修改參數
```
"architect": {
        "build": { //不要加到test去唷
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/demo2",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets",
              "src/api" //加入新增的資料夾
            ],
```
## 存檔後重新npm start，讓程式重新編譯
