const getList = (author, keyword) => {
    //返回假数据
    return [
        {
            id: 1,
            title: 'title1',
            content: 'content1',
            createTime: 1567070954666,
            author: 'ted'
        },
        {
            id: 1,
            title: 'title1',
            content: 'content1',
            createTime: 1567070956894,
            author: 'ted'
        }
    ]
}

const getDetail = (id) => {
    return {
        id: 1,
        title: 'title1',
        content: 'content1',
        createTime: 1567070954666,
        author: 'ted'
    }
}

const newBlog = (blogData = {}) => {
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    return true
}

const delBlog = (id) => {
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}