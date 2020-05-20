import {loadChattings} from './myChatting.js';

class App { 
     
    $chattingTarget=null;

    constructor(){
        this.init();    

        new loadChattings(this.$chattingTarget);
        //채팅을 그려주는 메소드 실행
        console.log("App run");
    }

    init() {
        this.$chattingTarget = document.querySelector(".list_chat");
        console.log(this.$chattingTarget);
    }//init();

}//class App end


new App();