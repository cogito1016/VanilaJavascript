import {Chat} from './chat.js';


class loadChattings{
    
    constructor() {
        this.receiver = "총총이";
        console.log("Load Chattings class import successfully"); 
    }

    getMyChattings(){
        const chattings=chattingDatas;
        let myChattings='';

        //여기서 내 채팅들만 가져오는 연산
        console.log("Run loading chattings"); 
        console.log(`receiver is ${this.receiver} and chattings`);
        console.log(chattings); 

        return myChattings;
    }//getMyChattings() end
}//class loadChattings() end

let chat = new loadChattings().getMyChattings();
export {chat};