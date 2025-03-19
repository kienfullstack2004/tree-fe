import axiosConfig from "../axiosConfig";

// eslint-disable-next-line no-async-promise-executor
export const apiLoginService = (payload) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'post',
            url:'api/v1/auth/login',
            data:payload
        })
        relsove(responsive);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return reject();
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiRegietrService = (payload) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'post',
            url:'api/v1/auth/register',
            data:payload
        })
        relsove(responsive);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        return reject();
    }
})


// eslint-disable-next-line no-async-promise-executor
export const apiUpdateService = (payload) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'post',
            url:'api/v1/auth/update',
            data:payload
        });
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})