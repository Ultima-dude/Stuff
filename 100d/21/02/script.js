function camelize(str) {
    return str.split('-').map((item, index) => {
        if(index)
            return item[0].toUpperCase() + item.slice(1);
        return item;
        }).join('');
}

console.log(camelize('background-color'));