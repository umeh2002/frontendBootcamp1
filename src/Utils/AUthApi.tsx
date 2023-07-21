import axios from "axios"

const URL="http://localhost:4100/api/v1/userAuth/"

export const createUser = async(data:any)=>{
    try {
        return await axios.post(`${URL}/register`, data).then((res)=>{
           return res.data.data
        })
    } catch (error:any) {
        console.log(error)
    }
}

export const signIn = async(data:any)=>{
    try {
        return await axios.post(`${URL}/sign-in`, data).then((res)=>{
           return res.data.data
        })
    } catch (error:any) {
        console.log(error)
    }
}

export const readOne = async(id:string)=>{
    try {
        return await axios.get(`${URL}/${id}/view-one`).then((res)=>{
            return res.data.data
        })
    } catch (error:any) {
        console.log(error)
    }
}

// export const dictionaryPost = async(text:string)=>{
//  await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`).then((res)=>{
//   console.log(res.data.data[0])
//  }).catch((res)=>{
//     return res.data
//  })
// }