import {chat} from './loadChatting.js';

class App { 
     
    constructor(){
        this.chat = chat; //내 채팅들을 가져온다.
        //채팅을 그려주는 메소드 실행
        console.log("App run");
    }
}//class App end


new App();