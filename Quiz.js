export default class Quiz{
    constructor(question, options, ans){
        this.question = question;
        this.options = options;
        this.answer = ans;
    }
    get getQuestion(){
        return this.question;
    }

    get getOptions(){
        return this.options;
    }

    get getAnswer(){
        return this.answer;
    }

}