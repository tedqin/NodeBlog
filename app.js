const serverHandle = (req, res) => {
    //设置返回格式json
    res.setHeader('Content-type', 'application/json')

    const resData = {
        name: 'Ted',
        site: 'Blog1'
    }

    res.end(
        JSON.stringify(resData)
    )
}

module.exports = serverHandle