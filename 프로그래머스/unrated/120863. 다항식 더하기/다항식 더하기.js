function solution(polynomial) {
    const polynomials = polynomial.split(' + ') 
    let coefficientX=0,constValue=0 
    polynomials.forEach((value)=>{
        if(value.indexOf('x') > -1){
            const addCoefficientX = Number(value.slice(0,value.length-1))
            coefficientX += (addCoefficientX ? addCoefficientX : 1)
        }
        else{
            constValue += Number(value)
        }
    })
    let answer = ''
    if(coefficientX){
        answer = answer.concat(coefficientX===1 ? 'x' : `${coefficientX}x`)
    }
    if(constValue){
        answer = answer.concat(answer ? ` + ${constValue}` : `${constValue}`)
    }
    return answer
}