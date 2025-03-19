import axiosConfig from "../axiosConfig";

// eslint-disable-next-line no-async-promise-executor
export const apiSearch = (search) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'get',
            url:`api/v1/post/${search}`
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
});

// eslint-disable-next-line no-async-promise-executor
export const apiCreateComment = (payload) =>new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'post',
            url:'api/v1/auth/createcomment',
            data:payload
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})  

// eslint-disable-next-line no-async-promise-executor
export const apiGetCommentOnePost = (id) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'get',
            url:`api/v1/auth/getcomment/${id}`,
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiGetCurrentUser = () => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'get',
            url:'api/v1/auth/getOneUserCurrent',
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiGetAllUser = () => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'get',
            url:'api/v1/auth/getAllUser',
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiDeleteAccount = (id) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'delete',
            url:`api/v1/auth/deleteAccount/${id}`
        })
        relsove(responsive);
    } catch (error) {
        return reject(error)
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiUpdateAccount = (payload) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'post',
            url:'api/v1/auth/updateAccount',
            data:payload
        })
        relsove(responsive)
    } catch (error) {
        return reject(error);
    }
})