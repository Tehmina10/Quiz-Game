let quiz = [
        {
                question: "Html stands for?",
                opt1: " HighText Machine Language",
                opt2: "HyperText and links Markup Language",
                opt3: "HyperText Markup Language",
                opt4: "None of these",
                copt: "HyperText Markup Language",
        },
        {
                question: "The correct sequence of HTML tags for starting a webpage is -?",
                opt1: "Head, Title, HTML, body",
                opt2: "HTML, Body, Title, Head",
                opt3: "HTML, Head, Title, Body",
                opt4: "HTML, Head, Title, Body",
                copt: "HTML, Head, Title, Body",
        },
        {
                question: "Which of the following element is responsible for making the text bold in HTML?",
                opt1: "pre",
                opt2: "a",
                opt3: "b",
                opt4: "br",
                copt: "b",
        },
        {
                question: "Which of the following tag is used for inserting the largest heading in HTML??",
                opt1: "h1",
                opt2: "h2",
                opt3: "h3",
                opt4: "h4",
                copt: "h1",
        },
        {
                question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
                opt1: "ul",
                opt2: "i",
                opt3: "ol",
                opt4: "li",
                copt: "ul",
        },
]



let ques = document.querySelector("#ques")
let opt1 = document.querySelector("#opt1")
let opt2 = document.querySelector("#opt2")
let opt3 = document.querySelector("#opt3")
let opt4 = document.querySelector("#opt4")
let btn = document.querySelector("button")
getoptions = document.querySelectorAll("input")
idx = 0;
let score = 0;
next();
function next() {
        for (let i = 0; i < getoptions.length; i++) {
                if (getoptions[i].checked) {
                        let seloptval = getoptions[i].value
                        // console.log(seloptval)
                        let selectedques = quiz[idx - 1]["question"]
                        // console.log(selectedques)
                        let selectedopt = quiz[idx - 1][`opt${seloptval}`]
                        // console.log(selectedopt)
                        let correctopt = quiz[idx - 1][`copt`]
                        // console.log(correctopt)
                        if (selectedopt == correctopt) {
                                score++
                        }



                }
                getoptions[i].checked = false
        }
        if (idx > quiz.length - 1) {
                alert(`Your score is ${score}/${quiz.length}`)
                // next();
                // score=0;
                // idx=0;
        }
        else {
                ques.innerHTML = quiz[idx].question
                opt1.innerHTML = quiz[idx].opt1
                opt2.innerHTML = quiz[idx].opt2
                opt3.innerHTML = quiz[idx].opt3
                opt4.innerHTML = quiz[idx].opt4
                idx++;
        }

}
function cl() {
        btn.disabled = false//button enable

}








