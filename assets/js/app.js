import {config} from '../modules/key.js'
import {data} from '../modules/data.js'
import {proxyStore} from '../modules/store.js'

const userUrl = config.baseUrl + config.endpoint.user + config.key

const app = {
    init: async()=>{
 
        proxyStore.currentUser = data.clean.user(await data.req(userUrl + '&u=xenica'))
        
        console.log(proxyStore.currentUser.userName)

        app.controls()
    },
    controls:()=>{
        const userInput = document.querySelector('#username')

        userInput.addEventListener('keydown',async (event)=>{
            if(event.keyCode === 13){
                if(proxyStore.currentUser.userName.toLowerCase() !== userInput.value.toLowerCase()){
                    proxyStore.currentUser = data.clean.user(await data.req(userUrl +'&u=' + userInput.value))
                }else{
                    console.log('--Same user requested--')
                }
            }
        })
    }
}

app.init()