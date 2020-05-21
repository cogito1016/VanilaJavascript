import {StatusBar} from './templates/statusBar.js';
import {Header} from './templates/header.js';
import {Nav} from './templates/nav.js';

import {myChattings} from './chatting.js';

class App { 

    constructor(){
        this.init();    
        
        //채팅을 그려주는 메소드 실행
        console.log("App run");
    }

    init() {
        const body = document.querySelector("body");
        new StatusBar();
        new Header("채팅");
        new myChattings();
        new Nav();

    }//init();

}//class App end


new App();

