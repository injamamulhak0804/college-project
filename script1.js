const nameEl = document.getElementById("name")

window.addEventListener("load", (event) => {
    const userData = JSON.parse(localStorage.getItem('user'));
    name = prompt("Enter your name: ")
    s_name = prompt("Enter your School Name: ")
    nameEl.innerHTML = `name: ${name} <br/>
    School name: ${s_name} <br/>
    <h2 class="name">Number of moves: ${userData}</h2>
    `   
});
