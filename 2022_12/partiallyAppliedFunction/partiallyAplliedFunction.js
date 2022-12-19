const building = {
    hours: '8 a.m. - 8 p.m.',
    address: 'Jayhawk Blvd',
};

const manager = {
    name: 'augusto',
    phone: '555-555-5555',
};

const program = {
    name: 'Presenting Research',
    room: '415',
    hours: '3-6',
};

const exhibit= {
    name: 'Emerging Scholarship',
    contact: 'Dyan'
}

function mergeProgramInformation(building, manager, event){
    const {hours, address} = building;
    const {name, phone} = manager;
    const defaults = {
        hours,
        address,
        contact:name,
        phone
    };

    return {...defaults, ...event};
}

console.log(mergeProgramInformation(building, manager, program));
console.log(mergeProgramInformation(building,manager,exhibit));
