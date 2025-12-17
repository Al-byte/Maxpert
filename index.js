    function puzzleZero(form) {
      const v = document.querySelector('[name="opt"]:checked')?.value;

      if (!v) {
        alert("Please make a selection.");
        return false;
      }

      if (v === "true") {
        alert("Let's get started.");
        window.location.href = './the_whispering_gate.html';
      } else {
        alert("Please return when you are ready for your quest.");
      }

      return false; // prevent form submission
    }


function puzzleOne(form) {
  const value = form.pswrd.value.trim().toLowerCase();

  if (value === "integrity") {
    alert("Challenge 1/7 Successfully Completed!");
    window.location.href = './the_bridge_of_echoes.html';
  } else {
    alert("The solution you entered is incorrect. Please try again.");
  }

  return false; // prevents form submission reload
}


function puzzleTwo(form) {
  const value = form.pswrd.value.trim().toLowerCase();

  if (value === "aptitude") {
    alert("Challenge 2/7 Successfully Completed!");
    window.location.href = './the_beast_of_roots.html';
  } else {
    alert("The solution you entered is incorrect. Please try again.");
  }

  return false; // ⬅️ prevents form submission reload
}


function puzzleThree(form)
{
    const value = form.pswrd.value.trim().toLowerCase();

    if (value === "valor") {
    alert("Challenge 3/7 Successfully Completed!");
    window.location.href = './the_wall_of_memories.html';
    }
    else 
    {
        alert("The solution you entered is incorrect. Please try again.")
    }
    return false; // prevents form submission reload
}

function puzzleFour(form)
{
    const value = form.pswrd.value.trim().toLowerCase();

    if(value === "resilience")
    {
        alert("Challenge 4/7 Successfully Completed!");
        window.location.href = './the_turning_maze.html';
    }
    else 
    {
        alert("The solution you entered is incorrect. Please try again.")
    }
    return false; // prevents form submission reload
}

function puzzleFive(form)
{
    const value = form.pswrd.value.trim().toLowerCase();

    if(value === "patience")
    {
        alert("Challenge 5/7 Successfully Completed!");
        window.location.href = './the_turning_maze.html';
    }
    else 
    {
        alert("The solution you entered is incorrect. Please try again.")
    }
    return false; // prevents form submission reload
}

function puzzleSix(form)
{
    const value = form.pswrd.value.trim().toLowerCase();

    if(value === "discipline")
    {
        alert("Challenge 5/7 Successfully Completed!");
        window.location.href = './the_staircase_of_light.html';
    }
    else 
    {
        alert("The solution you entered is incorrect. Please try again.")
    }
    return false; // prevents form submission reload
}

function puzzleSeven(form)
{
    const value = form.pswrd.value.trim().toLowerCase();

    if(value === "faith")
    {
        alert("Challenge 6/7 Successfully Completed!");
        window.location.href = './the_final_chamber.html';
    }
    else 
    {
        alert("The solution you entered is incorrect. Please try again.")
    }
    return false; // prevents form submission reload
}

function puzzleEight(form)
{
    const value = form.pswrd.value.trim().toLowerCase();

    if(value === "discernment")
    {
        alert("Challenge 7/7 Successfully Completed!");
        window.location.href = './the_culmination.html';
    }
    else 
    {
        alert("The solution you entered is incorrect. Please try again.")
    }
    return false; // prevents form submission reload
}



