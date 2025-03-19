import axiosConfig from "../axiosConfig";

// eslint-disable-next-line no-async-promise-executor
export const apicreateMedicine = (payloadMedicine) => new Promise(async(relsove,reject)=>{
    try{
        const responsive = await axiosConfig({
            method:'post',
            url:'api/v1/tree/createMedicine',
            data:payloadMedicine
        })
        relsove(responsive);
    }catch(err){
        return reject(err);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiGetAllMedicine = () => new Promise(async(relsove,reject)=>{
    try{
        const responsive = await axiosConfig({
            method:'get',
            url:'api/v1/tree/getAllMedicine',
        })
        relsove(responsive);
    }catch(err){
        return reject(err);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiDeleteMedicine = (id) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'delete',
            url:`api/v1/tree/deleteMedicine/${id}`,
        })
        relsove(responsive)
    } catch (error) {
        return reject(error);
    }
})

// eslint-disable-next-line no-async-promise-executor
export const apiUpdateMedicine = (payload) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'post',
            url:'api/v1/tree/updateMedicine',
            data:payload
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})


// eslint-disable-next-line no-async-promise-executor
export const apiUpdateTree = (payload) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'post',
            url:'api/v1/tree/updateTree',
            data:payload
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})

