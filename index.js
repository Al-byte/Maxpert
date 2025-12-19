function puzzleZero(form) {
  const v = document.querySelector('[name="opt"]:checked')?.value;
  const alertBox = document.getElementById("puzzleAlert");

  // Reset alert
  alertBox.className = "alert d-none";
  alertBox.textContent = "";




  if (!v) {
    alertBox.className = "alert alert-warning text-center";
    alertBox.textContent = "Please make a selection.";
    return false;
  }

  if (v === "true") {
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Let's get started.";

    setTimeout(function () {
      window.location.href = "./the_whispering_gate.html";
    }, 4000);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "Please return when you are ready for your quest.";
  }

  return false;
}


function puzzleOne(form) {
  const value = form.pswrd.value.trim().toLowerCase();
  const alertBox = document.getElementById("puzzleAlert");

   // Reset alert
  alertBox.className = "alert d-none";
  alertBox.textContent = "";

  
  if (value === "integrity") {
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge 1/7 Completed!";

    setTimeout(function () {
      window.location.href = "./the_bridge_of_echoes.html";
    }, 4000);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Try again.";
  }

  return false; // prevents form submission reload
}


function puzzleTwo(form) {
  const value = form.pswrd.value.trim().toLowerCase();
  const alertBox = document.getElementById("puzzleAlert");

   // Reset alert
  alertBox.className = "alert d-none";
  alertBox.textContent = "";


  if (value === "aptitude") {
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge 2/7 Completed!";

    setTimeout(function () {
      window.location.href = "./the_beast_of_roots.html";
    }, 4000);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Try again.";
  }

  return false; // ⬅️ prevents form submission reload
}


function puzzleThree(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if (value === "valor") {
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge 3/7 Completed!";

    setTimeout(function () {
      window.location.href = "./the_wall_of_memories.html";
    }, 4000);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Try again.";
  }
    return false; // prevents form submission reload
}

function puzzleFour(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "resilience")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge 4/7 Completed!";

    setTimeout(function () {
      window.location.href = "./the_turning_maze.html";
    }, 4000);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Try again.";
  }
    return false; // prevents form submission reload
}

function puzzleFive(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "patience")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge 5/7 Completed!";

    setTimeout(function () {
      window.location.href = "./the_staircase_of_light.html";
    }, 4000);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Try again.";
  }
    return false; // prevents form submission reload
}

function puzzleSix(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "discipline")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge 5/7 Completed!";

    setTimeout(function () {
      window.location.href = "./the_staircase_of_light.html";
    }, 4000);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Try again.";
  }
    return false; // prevents form submission reload
}

function puzzleSeven(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "faith")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge 6/7 Completed!";

    setTimeout(function () {
      window.location.href = "./the_final_chamber.html";
    }, 4000);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Try again.";
  }
    return false; // prevents form submission reload
}

function puzzleEight(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "discernment")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "All Challenges Completed!";

    setTimeout(function () {
      window.location.href = "./the_culmination.html";
    }, 4000);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Try again.";
  }
    return false; // prevents form submission reload
}



