console.log("Script started")
//Print username

function start() {
    console.log("click");

    //Create heading h1
    let heading = document.createElement("h1");

    //Set the text of the heading
    heading.innerText = "Attendance";
    //Set some styles
    heading.style.color = "red";
    heading.style.textDecoration = "underline";

    
    //Add heading to the page
    document.body.appendChild(heading);

    //Prompt for name
    let userName = prompt("Enter your name");
    console.log("userName");

}

function addname(addnewname) {
    console.log("userName")

    //Create heading h2
    let heading = document.createElement("h2");

    //Set the text of the heading
    heading.innerText = "New Name"

    //Set some styles
    heading.style.color = "Purple";


    //Add heading to page
    document.body.appendChild(heading);

}