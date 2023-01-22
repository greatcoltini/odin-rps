const choices = ["ROCK", "PAPER", "SCISSORS"];
var player_score = 0;
var computer_score = 0;
var round_tracker = 1;

function getComputerChoice()
{
    choice = Math.floor(Math.random() * 3);
    console.log(choices[choice]);
    return choices[choice];
}

function playRound(playerSelection, computerSelection)
{
    normalized_ps = playerSelection.toUpperCase();
    var playerWin = 0;

    // if we have same word, tie no matter what
    if (normalized_ps == computerSelection)
    {
        return 2;
    }
    // otherwise, check to see if player won
    else 
    {
        if (normalized_ps == "ROCK")
        {
            if (computerSelection == "SCISSORS")
            {
                playerWin = 1;
            }
        }
        else if (normalized_ps == "PAPER")
        {
            if (computerSelection == "ROCK")
            {
                playerWin = 1;
            }
        }
        else
        {
            if (computerSelection == "PAPER")
            {
                playerWin = 1;
            }
        }
    }

    return playerWin;

}

function game(user, comp)
{
    result = playRound(user, comp);

    if (result == 1)
    {
        player_score += 1;
        return "Player win!";
    }
    else if (result == 0)
    {
        computer_score += 1;
        return "Computer win!";
    }
    else
    {
        return "Tie!";
    }

}

function trigger_buttons_display(element)
{
    round = 'r' + round_tracker.toString();
    round_toggles = document.getElementsByClassName(round);

    userChoice = element.innerHTML;
    computerChoice = getComputerChoice();

    while (round_toggles.length > 0)
    {
        round_toggles[0].remove();
    }

    text = document.getElementById("text");

    text.innerHTML = "You have selected " + userChoice.toUpperCase();

    text.innerHTML += "<br>The computer selected " + computerChoice;

    text.innerHTML += "<br>" + game(userChoice, computerChoice)

    // adjust header
    round_header = document.getElementById(round + 'h');
    round_header.innerHTML += ": " + player_score + " - " + computer_score;

    round_tracker += 1;

    // display next round
    display_next_round()
}

function display_next_round()
{
    round_unhides_a = document.getElementsByClassName('r' + round_tracker);
    round_unhides_b = document.getElementsByClassName('r' + round_tracker + 'h');
    round_unhides_c = document.getElementsByClassName('r' + round_tracker + 'c');

    for (let i = 0; i < round_unhides_a.length; i++)
    {
        round_unhides_a[i].classList.remove("collapse");
    }
    for (let j = 0; i < round_unhides_b.length; i++)
    {
        round_unhides_b[i].classList.remove("collapse");
    }
    for (let k = 0; i < round_unhides_c.length; i++)
    {
        round_unhides_c[i].classList.remove("collapse");
    }
}

// const playerSelection = "Rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// console.log(game());

