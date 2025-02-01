// product galary

function changeImage(imageSrc) {
    document.getElementById('productImage').src = imageSrc;

}

// =============================================================================

// stars
let stars =
    document.getElementsByClassName("star");
let output =
    document.getElementById("ratig");

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    rating.innerText = n;
}

function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}

// ===============================================================================


function updateClock() {
    const targetDate = new Date(new Date().getTime() + 1 * 10 * 1000).getTime(); // Countdown from 5 minutes
    console.log(targetDate);
    setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (seconds >= 0) {
            // console.log(now);
            // console.log(difference);
            function updateFlip(id, value) {
                const element = document.getElementById(id);
                if (element.innerText !== value.toString().padStart(2, '0')) {
                    setTimeout(() => {
                        element.innerText = value.toString().padStart(2, '0');
                    }, 500);

                }
            }
            updateFlip("days", days);
            updateFlip("hours", hours);
            updateFlip("minutes", minutes);
            updateFlip("seconds", seconds);
        }
    }, 1000);
}
updateClock();

// =================================================================================
// Qty of product
    let productQty = 0;



let increamentQty = () => {
    document.getElementById('itemQty').innerText = productQty++;

}

let decreamentQty = () => {
    if (productQty >= 1) {
        productQty--;
        document.getElementById('itemQty').innerText = productQty;

    }
    else{
        productQty = 0;
    }
}

// =================================================================================

// add review
let starsAddRewiew =
    document.getElementsByClassName("starRev");
// let output =
//     document.getElementById("ratig");

function addReview(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        starsAddRewiew[i].className = "starRev " + cls;
    }
}

function remove() {
    let i = 0;
    while (i < 5) {
        starsAddRewiew[i].className = "starRev";
        i++;
    }
}

// ===============================================================================