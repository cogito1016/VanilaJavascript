import {myChattings} from './myChatting.js';
import {StatusBar} from './statusBar.js';

class App { 
     
    $chattingTarget=null;

    constructor(){
        this.init();    
        this.loadChattings();
        //채팅을 그려주는 메소드 실행
        console.log("App run");
    }

    init() {
        new StatusBar(document.querySelector("body"));
        this.$chattingTarget = document.querySelector(".list_chat");

        console.log(this.$chattingTarget);
    }//init();

    loadChattings() {
        new myChattings(this.$chattingTarget);
    }//loadChattings() end

}//class App end


new App();

