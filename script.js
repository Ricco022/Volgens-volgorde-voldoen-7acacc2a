function hoofdstad() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");
    var input4 = document.getElementById("input4");
    var input5 = document.getElementById("input5");
    var antw = [
        "Parijs",
        "8",
        "Ijsselmeer",
        ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
        ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
    ];
    var score = 0;
    let allGood = true;

    if (input1.value === antw[0]) {
        input1.classList.add('good');
        score++
    } else {
        allGood = false;
        input1.classList.add('false');
    }

    if (input2.value === antw[1]) {
        input2.classList.add('good');
        score++
    } else {
        allGood = false;
        input2.classList.add('false');
    }

    if (input3.value === antw[2]) {
        input3.classList.add('good');
        score++
    } else {
        allGood = false;
        input3.classList.add('false');
    }

    if (antw[3].includes(input4.value)) {
        input4.classList.add('good');
        score++
    } else {
        allGood = false;
        input4.classList.add('false');
    }

    if (antw[4].includes(input5.value)) {
        input5.classList.add('good');
        score++
    } else {
        allGood = false;
        input5.classList.add('false');
    }

        document.getElementById("good").innerText = 'Je hebt ' + score + ' punt(en) gescoord';
}