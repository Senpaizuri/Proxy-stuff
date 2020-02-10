const appCont = document.querySelector("#app")
const render = {
    init:function(key,data){
        switch(key){
            case 'userData':
                if(document.querySelector('#user')){
                    this.updateUser(data)
                }else{
                    this.userFrame()
                    this.updateUser(data)
                }
                break
            default:
                return
                break
        }
    },
    userFrame:()=>{
        let userDiv = document.createElement('section')
        userDiv.id = 'user'
        appCont.appendChild(userDiv)
    },
    updateUser:()=>{

    }
}

export {render}