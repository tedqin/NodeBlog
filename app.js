const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return 
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve ( 
                JSON.parse(postData )
            )
        })
    })
    return promise
}

const serverHandle = (req, res) => {
    //设置返回格式json
    res.setHeader('Content-type', 'application/json')

    //获取路径
    const url = req.url
    req.path = url.split('?')[0]

    //解析query
    req.query = querystring.parse(url.split('?')[1])

    //处理postdata
    getPostData(req).then(postData => {
        req.body = postData

        //处理blog路由
        const blogResult = handleBlogRouter(req, res)
        if (blogResult) {
            blogResult.then(blogData => {
                res.end (
                    JSON.stringify(blogData)
                )
            })
            return 
        }
        
        // if (blogData) {
        //     res.end (
        //         JSON.stringify(blogData)
        //     )
        //     return
        // }

        //处理user路由
        const userdata = handleUserRouter (req, res)
        if (userdata) {
            res.end(
                JSON.stringify(userdata)
            )
            return 
        }

        //404
        res.writeHead('404', {'Content-type': 'text/plain'})
        res.write("404 Not Found\n")
        res.end()
        })
}

module.exports = serverHandle