const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");


// Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "./images/rock.png";
        result.textContent = "wait...";


        // Loop through each option image again
        optionImages.forEach((image2, index2) => {
            // If the current index doesn't match the clicked index
            // Remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active"); 
        });

        gameContainer.classList.add("start");

        // Set a timeout to delay the result calculations
        let time = setTimeout(() => {

            gameContainer.classList.remove("start");
            // Get the source of the clicked option image
            let imageSrc = e.target.querySelector("img").src;
            
            // Set the user image to the clicked option image
            userResult.src = imageSrc;

            // Generate a random number between 0 and 2 
            let randomNumber = Math.floor(Math.random() * 3);

            // Create an array of CPU image options
            let cpuImages = ["./images/rock.png", "./images/paper.png", "./images/scissors.png"];

            // Set the CPU image to the random CPU image option from the array
            cpuResult.src = cpuImages[randomNumber];

            // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
            let cpuValue = ["R", "P", "S"][randomNumber];

            // Assign a letter value to the clicked option (based on index)
            let userValue = ["R", "P", "S"][index];

            // Create an object with all possible outcomes
            let outcomes = {
                RR : "Draw",
                RP : "CPU",
                RS : "YOU",
                PP : "Draw",
                PR : "YOU",
                PS : "CPU",
                SS : "Draw",
                SR : "CPU",
                SP : "YOU",
            };

            // Look up the outcome value based on the user and CPU options
            let outcomeValue = outcomes[userValue + cpuValue];

            // Display the result
            result.textContent = userValue === cpuValue ? "MATCH DRAW" : `${outcomeValue} Won !!`;
        },1600);


    });
});