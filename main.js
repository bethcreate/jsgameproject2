let Button = document.getElementById('Button');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 50)]

Button.addEventListener('click', function(){
    let input = document.getElementById("userInput").value;
    if (input == number){
        output.innerHTML = `Right, your number was ${number}`

    }
    else if(input < number){
        output.innerHTML = "Too low!"
    };
    if( input > number){
        output.innerHTML = "Too high"
    }
}
);

