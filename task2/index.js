// A. Bind function / find and fix the error
window.x = 1;
const context = { x: 2 };
const testThis = function(y) {
console.log(`x=${this.x}, y=${y}`);
}
testThis(100);

function bind(fn, context, ...rest) {
    return function(...args) {
        const uniqId = Date.now().toString();
        
        context[uniqId] = fn;

        const result = context[uniqId](...rest.concat(args));
        delete context[uniqId];
        return result;
    }   
}

const boundFunction = bind(testThis, context);
console.log(boundFunction(100));

// B. Bind, call, apply function / find and fix the error
const Robot = function(name) {
    this.name = name;
    }
    function add (op1, op2) {
    this.name = this.name || 'Human';
    return this.name + ' can count to ' + (op1 + op2);
    }
    const voltron = new Robot('Voltron');

    //0 + 1
    console.log(add.bind(name)(0,1));
    console.log(add.call(name, 0,1));
    console.log(add.apply(name, [0,1]));

    //1 + 2
    console.log(add.bind(voltron)(1,2));
    console.log(add.call(voltron, 1,2));
    console.log(add.apply(voltron, [1,2]));

    //20+30
    console.log(add.bind(voltron)(20,30));
    console.log(add.call(voltron, 20,30));
    console.log(add.apply(voltron, [20,30]));