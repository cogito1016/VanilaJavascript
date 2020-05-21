

export class StatusBar {

    $target=null;

    constructor($target) {
        this.$target=$target;
        this.createStatusBar();
    }//cons end

    createStatusBar() {
        const sectionStatusBar = document.createElement("div");
        sectionStatusBar.classList.add("section_status_bar");
        
        const labClock = document.createElement("div");
        const labClockSpan = document.createElement("span");
        labClockSpan.innerText="14:20";
        labClock.appendChild(labClockSpan);
        
        const groupStatus = document.createElement("div");
        groupStatus.classList.add("group_status");
        const clock = document.createElement("i");
        clock.classList.add("far");
        clock.classList.add("fa-clock");
        const wifi = document.createElement("i");
        wifi.classList.add("fas");
        wifi.classList.add("fa-wifi");
        const volume = document.createElement("i");
        volume.classList.add("fas");
        volume.classList.add("fa-volume-down");
        const batterySpan = document.createElement("span");
        batterySpan.classList.add("lab_battery");
        batterySpan.innerText="100%";
        const battery = document.createElement("i");
        battery.classList.add("fas");
        battery.classList.add("fa-battery-full");
        groupStatus.appendChild(clock);
        groupStatus.appendChild(wifi);
        groupStatus.appendChild(volume);
        groupStatus.appendChild(batterySpan);
        groupStatus.appendChild(battery);

        sectionStatusBar.appendChild(labClock);
        sectionStatusBar.appendChild(groupStatus);

        this.$target.appendChild(sectionStatusBar);
    }//createStatusBaar() end

}//class StatusBar end


