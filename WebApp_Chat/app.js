import {StatusBar} from './statusBar.js';
import {Header} from './header.js';
import {myChattings} from './myChatting.js';

class App { 
     
    $chattingTarget=null;

    constructor(){
        this.init();    
        this.loadChattings();
        //채팅을 그려주는 메소드 실행
        console.log("App run");
    }

    init() {
        const body = document.querySelector("body");
        new StatusBar(body);
        new Header(body,"채팅");

        this.$chattingTarget = document.querySelector(".list_chat");
        console.log(this.$chattingTarget);
    }//init();

    loadChattings() {
        new myChattings(this.$chattingTarget);
    }//loadChattings() end

}//class App end


new App();

