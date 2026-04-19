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
    window.location.href = "./1_in_the_beginning.html";
  }, 1500);
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

  
  if (value === "creator") {
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol1_creation.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
  }

  return false; // prevents form submission reload
}


function puzzleTwo(form) {
  const value = form.pswrd.value.trim().toLowerCase();
  const alertBox = document.getElementById("puzzleAlert");

   // Reset alert
  alertBox.className = "alert d-none";
  alertBox.textContent = "";


  if (value === "promise") {
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol2_the_fall.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
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



    if (value === "grace") {
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol3_judgement_and_mercy.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
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



    if(value === "faith")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol4_the_abrahamic_covenant.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
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



    if(value === "jireh")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol5_the_near_sacrifice_of_isaac.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
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



    if(value === "delivered")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol6_the_passover_lamb.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
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



    if(value === "obedience")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol7_the_law_priesthood_tabernacle_and_sacrifices.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
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



    if(value === "shepherd")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol8_the_davidic_covenant.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
  }
    return false; // prevents form submission reload
}

function puzzleNine(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "messiah")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol9_savior_prophecies.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
  }
    return false; // prevents form submission reload
}

function puzzleTen(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "immanuel")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol10_birth_of_jesus.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
  }
    return false; // prevents form submission reload
}

function puzzleEleven(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "rabbi")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol11_ministry_of_jesus.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
  }
    return false; // prevents form submission reload
}

function puzzleTwelve(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "love")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol12_last_supper_and_new_covenant.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
  }
    return false; // prevents form submission reload
}

function puzzleThirteen(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "YHVH")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol13_crucifixion_and_ultimate_blood_covenant.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
  }
    return false; // prevents form submission reload
}

function puzzleFourteen(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "victory")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol14_the_resurrection.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
  }
    return false; // prevents form submission reload
}

function puzzleFifteen(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "disciple")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol15_the_mission.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
  }
    return false; // prevents form submission reload
}

function puzzleSixten(form)
{
    const value = form.pswrd.value.trim().toLowerCase();
    const alertBox = document.getElementById("puzzleAlert");

    // Reset alert
    alertBox.className = "alert d-none";
    alertBox.textContent = "";



    if(value === "redemption")
    {    
    alertBox.className = "alert alert-success text-center";
    alertBox.textContent = "Challenge Completed!";

    setTimeout(function () {
      window.location.href = "./sol16_final_restoration.html";
    }, 1500);
  } else {
    alertBox.className = "alert alert-danger text-center";
    alertBox.textContent = "That is incorrect. Please try again.";
  }
    return false; // prevents form submission reload
}


