function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    arr.map(row => {
        let [command, item] = row.split(' ');
        if (command === 'Buy') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (command === 'Trash') {
            if (inventory.includes(item)) {
                inventory.splice(inventory.indexOf(item), 1)
            }
        } else if (command === 'Repair') {
            if (inventory.includes(item)) {
                inventory.splice(inventory.indexOf(item), 1);
                inventory.push(item);
            }
        } else if (command === 'Upgrade') {
            let exist = item.split('-');
            if (inventory.includes(exist[0])) {
                item = exist.join(':')
                inventory.splice(inventory.indexOf(exist[0]) + 1, 0, item);
            }
        }
    })
    console.log(inventory.join(' '));
}
