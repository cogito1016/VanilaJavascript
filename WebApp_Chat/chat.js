export class Chat{

    constructor(sender,receiver,content,date){
        this.sender = sender;
        this.receiver = receiver;
        this.content = content;
        this.date = date;
        console.log("Chat Class import successfully");
    }//cons end
    
    get getSender(){
        return this.sender;
    }//getSender() end

    get getReceiver(){
        return this.receiver;
    }//getReceiver() end

    get getContent(){
        return this.content;
    }//getContent() ennd

    get getDate(){
        return this.date;
    }//getDate() end
    
    static readChat(sender,receiver,content,date){
        return new Chat(sender,receiver,content,date);
    }//static method readChat() end

}//class chat end