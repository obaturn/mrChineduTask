const studentScore = [95 , 78 , 85 , 60 , 45 , 92]
let scores = studentScore .map((score)=>{
    if(score >= 90){
        return "A"
    }
    if(score >= 80 && score <= 89){
        return "B"
    }
    if(score >= 70 && score <= 79){
        return "C"
    }
    if(score >= 60 && score <= 69){
        return"D"
    }
    if(score >= 1 && score <= 59){
        return"F"
    }
})
console.log(scores) t w

