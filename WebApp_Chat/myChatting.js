import {Chat} from './chat.js';


export class loadChattings{
    
    $target = null;
    myChattings=[];
    myName;

    constructor($target) {
        this.$target = $target;
        this.myName = "총총이";
        console.log("Load Chattings class import successfully"); 
        this.getMyChattings();
        this.paintMyChattings();
    }

    getMyChattings(){//전체 채팅데이터에서 '나'의 채팅데이터를 가져오자
        const chattings = chattingDatas;
        const myName = this.myName;

        //여기서 내 채팅들만 가져오는 연산
        this.myChattings = chattings.filter(function(chat){
            if(chat.receiver==myName || chat.sender==myName)
                return chat;
        });
        console.log(this.myChattings);
    }//getMyChattings() end

    paintMyChattings() {
        const $target = this.$target;
        this.myChattings.forEach(function(chat){
            const a = document.createElement("a");
            const li = document.createElement("li");
            const userDisplay = document.createElement("div");
            const img = document.createElement("img");
            const userInfo = document.createElement("div");
            const sender = document.createElement("span");
            sender.innerText= chat.sender;
            const content = document.createElement("span");
            content.innerText= chat.content;
            userInfo.appendChild(sender);
            userInfo.appendChild(content);
            userInfo.classList.add("group_text");
            userDisplay.appendChild(img);
            userDisplay.appendChild(userInfo);
            userDisplay.classList.add("group_man");
            const timeDiv = document.createElement("div");
            const timeSpan = document.createElement("span");

            timeSpan.innerText= new moment(chat.date).format("MM월DD일");

            timeDiv.appendChild(timeSpan);
            timeDiv.classList.add("lab_time");
            li.appendChild(userDisplay);
            li.appendChild(timeDiv);
            li.classList.add("group_chat");
            $target.appendChild(li);
        });
    
    }//paintMyChattings() end

}//class loadChattings() end