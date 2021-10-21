const NOTES = [
    {
        id: 1,
        title: "Recipe",
        description: "Ingredients include 2 eggs...",
        pagesCount: 2,
        isMarked: false,
        access: []
    },
    {
        id: 2,
        title: "Workouts",
        description: "3 sets of squats...",
        pagesCount: 1,
        isMarked: true,
        access: []
    },
    {
        id: 3,
        title: "Passwords",
        description: "VISA ...",
        pagesCount: 6,
        isMarked: true,
        access: []
    },
    {
        id: 4,
        title: "To Do 2021",
        description: "1. Learn JS...",
        pagesCount: 3,
        isMarked: false,
        access: []
    }
]

// MAP POLYFIL
Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}


// MAP
Array.prototype.myMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
    }
    return result;
}

const updatedNotes  = NOTES.myMap((note) => `id: ${note.id}, title: ${note.title}`);
console.log(updatedNotes);


// FILTER POLYFIL
Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
       if(callback(this[i], i, this)) {
            result.push(this[i]);
       }
    }
    return result;
}


// FILTER
Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
       if(callback(this[i], i, this)) {
            result.push(this[i]);
       }
    }
    return result;
}

const filteredNotes = NOTES.myFilter((note) => note.isMarked);
console.log(filteredNotes);


// REDUCE POLYFIL
Array.prototype.myReduce = function (callback, initialValue) {
    let accum = initialValue;
    for (let i = 0; i < this.length; i++) {
        accum = callback(accum, this[i], i, this)
    } 
    return accum;


// REDUCE
Array.prototype.myReduce = function (callback, initialValue) {
    let accum = initialValue;
    for (let i = 0; i < this.length; i++) {
        accum = callback(accum, this[i], i, this)
    } 
    return accum;
}

console.log(NOTES.myReduce((accum, value ) => accum + value.pagesCount ,0));


// GET UNIQUE ELEMENT
const testArray = [1,1,1,2,2,3,4,4,5,5,5,5];

function getUniqueElement(value, index, self) {
    return self.filter(item => item === value).length === 1;
}
console.log(testArray.filter(getUniqueElement));