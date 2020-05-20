export class Chat{

    constructor(sender,content,date){
        this.sender = sender;
        this.content = content;
        this.date = date;
    }//cons end
    
    get getSender(){
        return this.sender;
    }//getSender() end

    get getContent(){
        return this.content;
    }//getContent() ennd

    get getDate(){
        return this.date;
    }//getDate() end
    
    static readChat(sender,content,date){
        return new Chat(sender,content,date);
    }//static method readChat() end

}//class chat end