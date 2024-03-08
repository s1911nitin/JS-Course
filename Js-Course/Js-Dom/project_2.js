
const fm = document.querySelector("form");

fm.addEventListener("submit", function (e) {
    e.preventDefault();

    let results = document.getElementById("results");

    let h = Number(e.target.height.value);
    let w = Number(e.target.weight.value);

    

    if (h <=0 || isNaN(h)) {
        results.innerHTML = "Please enter a valid height !!"
        results.style.color = "black";
    } else if (w <=0 || isNaN(w)) {
        results.innerHTML = "Please enter a valid weight !!"
        results.style.color = "black";   
    } else {
        results.innerHTML = (w / ((h*h)/10000)).toFixed(2);
    }

    
})