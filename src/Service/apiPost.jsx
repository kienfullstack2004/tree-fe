import axiosConfig from "../axiosConfig";

// eslint-disable-next-line no-async-promise-executor
export const apiGetAllPost = () => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'get',
            url:'api/v1/post/getAllPost'
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }

})

// eslint-disable-next-line no-async-promise-executor
export const apiImageCloundinary = (image) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'post',
            url:'https://api.cloundinary.com/v1_1/dp6cr7ea5/image/upload',
            data:image
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiCreateTreeMedia = (payloadTree) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:"post",
            url:'api/v1/tree/createTree',
            data:payloadTree
        })
        relsove(responsive);
    } catch (error) {
        reject(error);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiGetAllTree = () => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'get',
            url:'api/v1/tree/getAllTree'
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiGetOneNewDetail = (id) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'get',
            url:`api/v1/news/${id}`
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiGetAllNews = () => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'get',
            url:'api/v1/post/allnews',
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiDeleteTree = (id) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'delete',
            url:`api/v1/tree/deleteTree/${id}`
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
}) 

// eslint-disable-next-line no-async-promise-executor
export const apiGetAllCountComment = (id) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'get',
            url:`api/v1/auth/getCountComent/${id}`,

        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiDeleteNewsPost = (id) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'delete',
            url:`api/v1/post/deleteNews/${id}`
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiCreateNews = (payloadnew) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'post',
            url:'api/v1/post/create',
            data:payloadnew
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiUpdatePost = (payload) => new Promise(async(relsove,reject)=>{
    try {
        const res = await axiosConfig({
            method:'post',
            url:'api/v1/post/updateNews',
            data:payload 
        })
        relsove(res);
    } catch (error) {
        return reject(error); 
    }
})


// eslint-disable-next-line no-async-promise-executor
export const apiGetAllCommentMedicine = () => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'get',
            url:'api/v1/post/getAllCountComment',
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})