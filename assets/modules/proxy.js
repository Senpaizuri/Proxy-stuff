 const proxy = {
    getter:(obj = {},funct)=>{
        return new Proxy(obj,{
            get:funct
        })
    },
    setter:(obj = {},funct)=>{
        return new Proxy(obj,{
            set:funct
        })
    },
    getSet:(obj = {},getFunct,setFunct)=>{
        return new Proxy(obj,{
            get:getFunct,
            set:setFunct
        })
    }
 }

 export {proxy}