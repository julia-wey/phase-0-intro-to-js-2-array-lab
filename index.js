let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    return cats.push('Ralph')
}

function destructivelyPrependCat() {
    return cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat() {
    let cats2 = []
    return cats2 = [...cats, "Broom"]
}

function prependCat() {
    let cats3 = []
    return cats3 = ["Arnold", ...cats]
}

function removeLastCat() {
    return cats.slice(0,2)
}

function removeFirstCat() {
    return cats.slice(-2)
}