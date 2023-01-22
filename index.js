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

    text = document.getElementById(round + "text");

    text.innerHTML = "You have selected " + userChoice.toUpperCase();

    text.innerHTML += "<br>The computer selected " + computerChoice;

    text.innerHTML += "<br>" + game(userChoice, computerChoice)

    // adjust header
    round_header = document.getElementById(round + 'h');
    round_header.innerHTML += ": " + player_score + " - " + computer_score;

    round_tracker += 1;

    // display next round
    

    if (round_tracker > 5)
    {
        game_end();
    }
    else
    {
        display_next_round();
    }
}

function display_next_round()
{
    document.getElementById(round_tracker).classList.remove('collapse');
    document.getElementById(round_tracker).scrollIntoView();
}

function game_end()
{
    for (let i = 1; i <= 5; i++)
    {
        elim_item = document.getElementById(i);
        elim_item.remove();
    }

    document.getElementById('end').classList.remove('collapse');
    styled_text = document.getElementById('gameendtext');

    if (player_score > computer_score)
    {
        styled_text.innerHTML = "You won! Congratulations!";
        styled_text.classList.add('text-success');
    }
    else if (player_score < computer_score)
    {
        styled_text.innerHTML = "You lost! You suck...";
        styled_text.classList.add('text-danger');
    }
    else
    {
        styled_text.innerHTML = "Tie game.";
    }
}