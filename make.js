function make() {
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    function add () {
        if (typeof arguments[0] === "function") {
            return args.reduce(arguments[0]);
        }
        for (let i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        return add;
    }
    return add;
}