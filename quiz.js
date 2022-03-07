const questions = [
    {
        question: "satu bentuk komunikasi visual yang menggunakan gambar untuk menyampaikan informasi atau pesan seefektif mungkin disebutt... ?",
        optionA: "Desain",
        optionB: "Grafis",
        optionC: "Desain Grafis",
        optionD: " grafik",
        correctOption: "optionC"
    },

    {
        question: "Proses untuk membuat dan menciptakan objek baru yang erat kaitanya dengan seni untuk mencapai tujuan disebut...",
        optionA: "Desain",
        optionB: "Grafis",
        optionC: "Desain grafis",
        optionD: "Grafik",
        correctOption: "optionA"
    },

    {
        question: "Kata Grafis dapat juga diartikan sebagai...",
        optionA: "grafik",
        optionB: "Citra visual",
        optionC: "Karya seni",
        optionD: "desain",
        correctOption: "optionB"
    },

    {
        question: "Dengan adanya benda atau unsur garis pada sebuah bidang maka akan terlihat adanya..",
        optionA: "garis",
        optionB: "bidang",
        optionC: "warna",
        optionD: "ilustrasi",
        correctOption: "optionD"
    },

    {
        question: "Asal kata ilustrasi berasal dari bahasa latin yaitu",
        optionA: "ilustration",
        optionB: "ilustrate",
        optionC: "ilustrat",
        optionD: "ilustrate",
        correctOption: "optionB"
    },

    {
        question: "Yang tidak termasuk sifat permukaan tekstur adalah",
        optionA: "licin",
        optionB: "halus",
        optionC: "cepat",
        optionD: "kasar",
        correctOption: "optionB"
    },

    {
        question: "unsur yang digunakan pembatas antaruang dalam seni desain grafis yaitu... ?",
        optionA: "Garis",
        optionB: "warna",
        optionC: "bidang",
        optionD: "gelap terang",
        correctOption: "optionA"
    },

    {
        question: "Gabungan dari titik titik yang memilih arah , panjang , dan ketebalan tertentu serta menjadi batas limit suatu bidang atau warna disebut sebaga...",
        optionA: "Bidang",
        optionB: "Ilustrasi",
        optionC: "Tipografi",
        optionD: "Garis",
        correctOption: "optionD"
    },

    {
        question: "bagian terpenting untuk menarik perhatian dan pertama kali dibaca dalam tipografi disebut  ?",
        optionA: "subheadline",
        optionB: "body copy",
        optionC: "logo type",
        optionD: "headline",
        correctOption: "optionD"
    },
    {
        question: "bagian terpenting untuk menarik perhatian dan pertama kali dibaca dalam tipografi disebut  ?",
        optionA: "subheadline",
        optionB: "body copy",
        optionC: "logo type",
        optionD: "headline",
        correctOption: "optionD"
    },
    {
        question: "bagian terpenting untuk menarik perhatian dan pertama kali dibaca dalam tipografi disebut  ?",
        optionA: "subheadline",
        optionB: "body copy",
        optionC: "logo type",
        optionD: "headline",
        correctOption: "optionD"
    },
    {
        question: "bagian terpenting untuk menarik perhatian dan pertama kali dibaca dalam tipografi disebut  ?",
        optionA: "subheadline",
        optionB: "body copy",
        optionC: "logo type",
        optionD: "headline",
        correctOption: "optionD"
    },
    {
        question: "bagian terpenting untuk menarik perhatian dan pertama kali dibaca dalam tipografi disebut  ?",
        optionA: "subheadline",
        optionB: "body copy",
        optionC: "logo type",
        optionD: "headline",
        correctOption: "optionD"
    },
    {
        question: "bagian terpenting untuk menarik perhatian dan pertama kali dibaca dalam tipografi disebut  ?",
        optionA: "subheadline",
        optionB: "body copy",
        optionC: "logo type",
        optionD: "headline",
        correctOption: "optionD"
    },
    {
        question: "bagian terpenting untuk menarik perhatian dan pertama kali dibaca dalam tipografi disebut  ?",
        optionA: "subheadline",
        optionB: "body copy",
        optionC: "logo type",
        optionD: "headline",
        correctOption: "optionD"
    },
    {
        question: "bagian terpenting untuk menarik perhatian dan pertama kali dibaca dalam tipografi disebut  ?",
        optionA: "subheadline",
        optionB: "body copy",
        optionC: "logo type",
        optionD: "headline",
        correctOption: "optionD"
    },
   {
        question: "bagian terpenting untuk menarik perhatian dan pertama kali dibaca dalam tipografi disebut  ?",
        optionA: "subheadline",
        optionB: "body copy",
        optionC: "logo type",
        optionD: "headline",
        correctOption: "optionD"
    }

   

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Yah Nilaimu Jelek, ayo Belajar lagi"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = " tingkatkan belajarmu lagi, kamu bisa lebih baik"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Gokiillll nilai yang sepurna"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}