import {proxy} from './proxy.js'
import { render } from './render.js'
const store = {}
const proxyStore =  proxy.getSet(store,
    (getData,key,x)=>{
        console.log(`--Getting ${key}--`,getData[key],x)
        return getData[key]
    },
    (setData,key,payload)=>{
        console.log(`--Setting ${key} to--`,payload)
        setData[key] = payload
        render.init(key,payload)
        return setData
    }
)

export {store,proxyStore}