function len() {
    var input = document.getElementById("input").value
    var result = document.getElementById("result")
    result.value = input.length
}
function replace() {
    var input = document.getElementById("input").value
    var result = document.getElementById("result")
    pattern = prompt("Select the sentence to change ")
    replacement = prompt("Write the word to replace")
    result.value = input.replace(pattern, replacement)
}
function indexOf() {
    var input = document.getElementById("input").value
    var result = document.getElementById("result")
     var store = input
    index = prompt("Enter the word to search")
    result.value = store.indexOf(index)
}

function lastindex() {
    var input = document.getElementById("input").value
    var result = document.getElementById("result")
    store = input
    search = prompt("Enter the last word to search")
    result.value = store.lastIndexOf(search)
}
function up() {
    var input = document.getElementById("input").value
    var result = document.getElementById("result")
    result.value = input.toUpperCase()
}
function low() {
    var input = document.getElementById("input").value
    var result = document.getElementById("result")
    result.value = input.toLowerCase()
}
function repeat() {
    var input = document.getElementById("input").value
    var result = document.getElementById("result")
    word = input
    times = prompt("How many times do you want")
    result.value = word.repeat(times)
}
function concat() {
    var input = document.getElementById("input").value
    var result = document.getElementById("result")
    var second = prompt('Enter the second Word')
    var total = input.concat(' ', second)
    result.value = (`"${total}"`)
}
function split() {
    var input = document.getElementById("input").value
    var result = document.getElementById("result")
    store = input.split(' ')
    result.value = store
}
function trim() {
    var input = document.getElementById("input").value
    var result = document.getElementById("result")
    total = input.trim()
    result.value = total
}
function slice() {
    var input = document.getElementById("input").value
    var result = document.getElementById("result")
    var item = prompt("Enter the index value")
    var total = input
    newtotal = total.slice(item)
    result.value = (`"${newtotal}"`)
}
function includesz() {
    var input = document.getElementById("input").value
    var result = document.getElementById("result")
    var newword = input
    var findword = prompt("Enter the word to search in the sentence")
    result.value = `The word "${findword}" ${newword.includes(findword) ? 'is' : 'is not'} in the sentence`

}
function dele() {
    var input = document.getElementById("input").value = ""
    var result = document.getElementById("result").value = ""
}