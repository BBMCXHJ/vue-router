# vue-router

## The guide of Vue3 router
### 动态路由
    - $route.params
        用途: 用于获取路由路径中的动态片段（路径参数）。
        示例: 如果路由定义为 /product/:id，你可以通过 $route.params.id 获取 id 的值
    - $route.query
        用途: 用于获取查询参数（URL 查询字符串中的参数）。
        示例: 如果路由是 /search 并且 URL 是 /search?keyword=vue&sort=asc，你可以通过 $route.query.keyword 和 $route.query.sort 获取相应的查询参数值。


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
