

export class Header {

    $target=null;
    pageName='';
    constructor($target,thisPage) {
        this.$target=$target;
        this.pageName=thisPage;
        this.createHeader();
    }//cons end

    createHeader() {
        const sectionHeader = document.createElement("div");
        sectionHeader.classList.add("section_header");
        
        const labTitle = document.createElement("div");
        const labTitlekSpan = document.createElement("span");
        labTitlekSpan.innerText=this.pageName;
        labTitle.appendChild(labTitlekSpan);
        
        const groupMenus = document.createElement("div");
        groupMenus.classList.add("group_menus");
        const search = document.createElement("i");
        search.classList.add("fas");
        search.classList.add("fa-search");
        const comment = document.createElement("i");
        comment.classList.add("fas");
        comment.classList.add("fa-comment");
        const cog = document.createElement("i");
        cog.classList.add("fas");
        cog.classList.add("fa-cog");
        groupMenus.appendChild(search);
        groupMenus.appendChild(comment);
        groupMenus.appendChild(cog);

        sectionHeader.appendChild(labTitle);
        sectionHeader.appendChild(groupMenus);

        this.$target.appendChild(sectionHeader);
    }//createStatusBaar() end

}//class StatusBar end


