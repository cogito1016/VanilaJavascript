

export class Nav {

    constructor() {
        this.createNav();
    }//cons end

    createNav() {
        const $target = document.querySelector(".section_nav");

        const groupNavs = document.createElement("div");
        groupNavs.classList.add("group_navs");
        
        const friendMenu = document.createElement("a");
        friendMenu.href="./friends.html";
        const freindsEmo = document.createElement("i");
        freindsEmo.classList.add("fas");
        freindsEmo.classList.add("fa-user");
        friendMenu.appendChild(freindsEmo);
        
        const chatMenu = document.createElement("a");
        chatMenu.href="#";
        const chatEmo = document.createElement("i");
        chatEmo.classList.add("fas");
        chatEmo.classList.add("fa-comment");
        chatMenu.appendChild(chatEmo);

        const searchMenu = document.createElement("a");
        searchMenu.href="#";
        const searchEmo = document.createElement("i");
        searchEmo.classList.add("fas");
        searchEmo.classList.add("fa-search");
        searchMenu.appendChild(searchEmo);

        const moreMenu = document.createElement("a");
        moreMenu.href="#";
        const moreEmo = document.createElement("i");
        moreEmo.classList.add("fas");
        moreEmo.classList.add("fa-ellipsis-h");
        moreMenu.appendChild(moreEmo);

        groupNavs.appendChild(friendMenu);
        groupNavs.appendChild(chatMenu);
        groupNavs.appendChild(searchMenu);
        groupNavs.appendChild(moreMenu);

        $target.appendChild(groupNavs);
    }//createNav() end

}//class Nav end