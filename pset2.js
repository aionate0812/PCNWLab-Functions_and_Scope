/*
    @function doMath
    @param firstNum {number} 
    @param secondNum {number}
    @param thirdNum {number}
    @returns {number}
    @description takes firstNum, adds it to secondNum
                 then multiplies sum to thirdNum
                 returns that computed value
    @example doMath( 1,2,3 ); // 9
*/

function doMath(firstNum, secondNum, thirdNum){
    return (firstNum+secondNum)*thirdNum
}

console.log(doMath(1,2,3))

/*
    @function addMiddleName
    @param firstName
    @param middleName
    @param lastName
    @returns {string}
    @description takes the first and last name
                 adds middle name in between
                 returns the new string
                 if no middle name exists, just 
                 return firstname and last name
    @example addMiddleNmae('John', 'Mabel', 'Smith'); // John Mabel Smith
*/

function addMiddleName(firstName,middleName,lastName){
if (middleName == undefined || middleName == null || middleName == ' '){
return `${firstName} ${lastName}`
} else {
    return `${firstName} ${middleName} ${lastName}`
}
}

console.log(addMiddleName("alex",' ',"onate"))
/*
    @function defaultPlaceholder
    @param placeholder {string}
    @returns {string}
    @description takes an HTML string and replaces placeholder content with 
                 the placholder argument passed in
    @example defaultPlaceHolder('Hello Wrold!'); 
             // <input type="text" placeholder="Hello Wrold!" />
*/
function defaultPlaceholder(placeholder){
return `<input type="text" placeholder=\"${placeholder}\" />`
}

console.log(defaultPlaceholder("hello!"))
/*
    @function addClasses
    @param {string} class1
    @param {string} class2
    @param {string} content
    @returns {string}
    @description adds classes to html string
    @example addClass('foo', 'bar', 'stuff');
             // <div class="foo bar">stuff</div>
*/

function addClasses(class1,class2,content){
    return `<div class=\"${class1} ${class2}\">${content}</div>`
    }
    
    console.log(addClasses("foo","bar","TEST!"))
/*
    @function duplicate
    @param {string} start
    @returns {string}
    @description takes a string, start, and duplicates it (ie: adds to itselft)
                 returns duplicated string
    @example duplicate('hello!'); // hello!hello!
*/

function duplicate(start){
return start+start
}

console.log(duplicate("hello"))