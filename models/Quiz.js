class Quiz {
    constructor(question,answer){
        this.question = question
        this.answer = answer
        this.correctCount = 0
    }

    correctAnswer(){
        if(userAnswer == answer){
            this.correctCount += 1
        }
    }
    quizDone(){
        
    }
}