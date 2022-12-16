function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question prototype
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

// Quiz Constructor
function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

// Quiz prototype
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

// Quiz isFinish
Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}

// Quiz guess
Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }

    this.questionIndex++;
}


// Questions
var q1 = new Question("Aşağıdakilerden hangisi bir programlama dili değildir?",
["Java", "JavaScript", "Python", "HTML"], "HTML");

var q2 = new Question("Aşağıdakilerden hangisi veritabanı sorgu dilidir?",
["Java", "asp.net", "SQL", "CSS"], "SQL");

var q3 = new Question("Aşağıdakilerden hangisi bir editör değildir.",
["İntellij İdea", "Photoshop", "VSCode", "Eclips"], "Photoshop");

var q4 = new Question("Aşağıdaki değişken isimlerinden hangisi hatalıdır?",
["ogrenciNo", "OgrenciAd", "ogrenci_soyad", "ogrenci sinif"], "ogrenci sinif");

var q5 = new Question("Mod alma işlemini aşağıdaki karakterlerden hangisi gerçekleştirir?",
[">", "!", "%", "&"], "%");

var q6 = new Question("Aşağıdakilerden hangisi veri tiplerinden değildir",
["String", "slong", "int", "byte"], "slong");

var q7 = new Question("Aşağıdakilerden hangisi ilişkisel operatörler arasında yer almaz",
["||", "<=", "!=", ">"], "||");

var q8 = new Question("'Ve' mantıksal operatörü aşağıdakilerden hangisidir?",
["!=", "==", "&", "&&"], "&&");

var q9 = new Question("8 bit işaretsiz tam sayı tipi aşağıdakilerden hangisidir?",
["byte", "int", "long", "short"], "byte");

var q10 = new Question("Progrma boyunca sabit kalacak veriyi hangi kelime ile tanımlarız?", 
["float", "double", "bool", "const"], "const");



var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// Start Quiz
var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion(){
    
    if(quiz.isFinish()){
        showScore();
    }else {

        var question = quiz.getQuestion();
        var choices = question.choices;

        document.querySelector('#question').textContent = question.text;

        for(var i=0; i<choices.length; i++){
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];

            guess('btn'+i, choices[i]);
        }

        showProgress();
    }

}

function guess(id, guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion();
    }
}

function showScore(){
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector('.card-body').innerHTML = html;
}

function showProgress(){
    var totalQuestion = quiz.questions.length;
    var questionNumber = quiz.questionIndex + 1;
    document.querySelector('#progress').innerHTML 
    = 'Question ' + questionNumber + ' of ' + totalQuestion;
}

