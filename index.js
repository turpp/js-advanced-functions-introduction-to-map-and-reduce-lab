// Your code here
function mapToNegativize(array){
    let a =[]
    for(let i=0; i < array.length; i++){
        a.push(array[i]*-1)
    }
    return a
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    let a =[]
    for(let i = 0; i<array.length; i++){
        a.push(array[i]*2)
    }
    return a
}

function mapToSquare(array){
    let a =[]
    for(let i = 0; i < array.length; i ++){
        a.push(array[i]*array[i])
    }
    return a
}

function reduceToTotal(array, start=0){
    let base = start
    for(let i = 0; i < array.length; i ++){
        base += array[i]
    }
    return base
}

function reduceToAllTrue(array){
    let a = []
    for(let i = 0; i < array.length; i ++){
        if (array[i]){
            a.push(array[i])
        }
    }
    if (a.length == array.length){
        return true
    }else{
        return false
    }
}

function reduceToAnyTrue(array){
    let a = []
    for(let i = 0; i < array.length; i ++){
        if (array[i]){
            a.push(array[i])
        }
    }
    if(a.length > 0){
        return true
    }else{
        return false
    }
}