const computerchoicedisplay = document.getElementById('computer-choice')
const userchoicedisplay  = document.getElementById('user-choice')
const resultdisplay = document.getElementById('result')
const possiblechoices = document.querySelectorAll('button')
let userchoice
let computerchoice
let result


possiblechoices.forEach(possiblechoices => possiblechoices.addEventListener('click', (e) =>{
    userchoice = e.target.id 
    userchoicedisplay.innerHTML = userchoice
    generatecomchoice ()
    getresults()

}))

function generatecomchoice()
{
    const randomnumber = Math.floor(Math.random()* 3)// you can use possiblechoices.lengh
    if (randomnumber === 1){
    computerchoice ='rock'
    }
    if(randomnumber ===2){
        computerchoice ='paper'
    }
    if(randomnumber ===3)
    {
        computerchoice ='scissor'
    }
computerchoicedisplay.innerHTML=computerchoice

}

function getresults()
{
    if(computerchoice == userchoice)
    {result = "Its a draw!"    }
    if (computerchoice === 'rock' &&  userchoice === "paper")
    {
        result = "you lose!"   }
    if(computerchoice === 'rock' && userchoice ==='scissors')
    { result = 'you lost!'}
    if (computerchoice === 'rock' && userchoice==='scissos '){
        result ='you lost' }

    if(computerchoice === 'paper' && userchoice==="rock")
    {
        result ='you lose!'
    }
    if(computerchoice ==='scissor' && userchoice ==='rock'){
        result ='you Win!'
    }
    if(computerchoice  === 'scissor' && userchoice ==='paper'){
        result ='you lose !'
    }
     resultdisplay.innerHTML = result

    
}