
//export다음에 default 키워드를 붙여줍니다.
/**이런식으로 내보내면 중괄호 없이 모듈을 가져올 수 있습니다.
 * 즉, named export한 모듈을 가져오려면 중괄호가 필요하고, 
 * default export한 모듈을 가져오려면 중괄호는 필요 없습니다.
 */
export default class user{
    constructor(name){
        this.name = name;
    }
}//class user end

/*
그리고 디폴트는 하나기때문에 클래스명이 없어도됩니다.
이럴때 import는 어떻게해야하냐?
자신이 편한대로의 name을 지정해주어 사용하면됩니다.
import User `user.js'
import Person 'user.js'
어차피 디폴트는 하나이기때문이죠.
*/

// export {user as default}; 이렇게 해주는 방법도 있습니다.