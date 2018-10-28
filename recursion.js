let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

let array = recursion(tree);

function recursion () {
    if (!arguments[0]) return;

    if (!arguments[1]) {
        arguments[1] = [[arguments[0]["value"]]];
        arguments[2] = 0;
    } else {
        if (arguments[1][arguments[2]]) {
            arguments[1][arguments[2]].push(arguments[0]["value"]);
        } else {
            arguments[1][arguments[2]] = [(arguments[0]["value"])];
        }
    }
    recursion(arguments[0]["left"], arguments[1], arguments[2] + 1);
    recursion(arguments[0]["right"], arguments[1], arguments[2] + 1);
    return arguments[1];
}

console.log(array);