# realwds-api

## ✅ 必应壁纸 api

接口：`https://realwds-api.vercel.app/bing`

| 参数 | 说明 | 选择 |
|----|-----|------|
|start| 从几开始，默认 0 | 可选 |
|count| 截取数量，默认 1 | 可选 |

## ✅ 360 壁纸 api

获取360壁纸所有类目：`https://realwds-api.vercel.app/360/getAllCategories`

获取某类别下的壁纸：`https://realwds-api.vercel.app/360/getAppsByCategory`

| 参数 | 说明 | 选择 |
|----|-----|------|
| cid | 类别 ID，初始 new | 必填 |
|start| 从几开始，默认 0 | 可选 |
|count| 截取数量，默认 10 | 可选 |

按关键字搜索壁纸：`https://realwds-api.vercel.app/360/search`

| 参数 | 说明 | 选择 |
|----|-----|------|
| kw | 搜索关键词 | 必填 |
|start| 从几开始，默认 0 | 可选 |
|count| 截取数量，默认 10 | 可选 |

获取今日热门搜索：`https://realwds-api.vercel.app/360/hotSearch`
