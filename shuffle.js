import ancientsData from './data/ancients.js';
import difficulties from './data/difficulties.js';
import { blueCards, brownCards, greenCards } from './data/mythicCards/index.js';

console.log("HI, module works!");

let cardsObj = { 
    stage1 : {
        green : {},
        brown : {},
        blue : {}
    },
    stage2 : {
        green : {},
        brown : {},
        blue : {}
    },
    stage3 : {
        green : {},
        brown : {},
        blue : {}
    }
};

document.getElementById('shuffle-button').addEventListener('click', function() {
    shuffle(cardsObj);
}, false);

document.getElementById('next-card').addEventListener('click', function() {
    showNextCard(cardsObj);
}, false)

function showNextCard(cardsObj) {
    
    debugger;

    let img = document.getElementById('card-img');
    let name = document.getElementById('card-name');
    let color = document.getElementById('card-color');
    let difficulty = document.getElementById('card-difficulty');

    if (Object.keys(cardsObj.stage1.green).length > 0) {
        for (const x in cardsObj) {
            if (x === 'stage1') {
                for (const y in cardsObj[x]) {
                    if (y === 'green') {
                        for (const z in cardsObj[x][y]) {
                            img.src = cardsObj[x][y][z].cardFace;
                            name.innerText = cardsObj[x][y][z].id;
                            color.innerText = cardsObj[x][y][z].color;
                            difficulty.innerText = cardsObj[x][y][z].difficulty;
                            delete cardsObj[x][y][z];
                            break;
                        }
                    }
                    continue;
                }
            }
            continue;
        }
    }
    else if (Object.keys(cardsObj.stage1.brown).length > 0) {
        for (const x in cardsObj) {
            if (x === 'stage1') {
                for (const y in cardsObj[x]) {
                    if (y === 'brown') {
                        for (const z in cardsObj[x][y]) {
                            img.src = cardsObj[x][y][z].cardFace;
                            name.innerText = cardsObj[x][y][z].id;
                            color.innerText = cardsObj[x][y][z].color;
                            difficulty.innerText = cardsObj[x][y][z].difficulty;
                            delete cardsObj[x][y][z];
                            break;
                        }
                    }
                    continue;
                }
            }
            continue;
        }
    }
    else if (Object.keys(cardsObj.stage1.blue).length > 0) {
        for (const x in cardsObj) {
            if (x === 'stage1') {
                for (const y in cardsObj[x]) {
                    if (y === 'blue') {
                        for (const z in cardsObj[x][y]) {
                            img.src = cardsObj[x][y][z].cardFace;
                            name.innerText = cardsObj[x][y][z].id;
                            color.innerText = cardsObj[x][y][z].color;
                            difficulty.innerText = cardsObj[x][y][z].difficulty;
                            delete cardsObj[x][y][z];
                            break;
                        }
                    }
                    continue;
                }
            }
            continue;
        }
    }
    else if (Object.keys(cardsObj.stage2.green).length > 0) {
        for (const x in cardsObj) {
            if (x === 'stage2') {
                for (const y in cardsObj[x]) {
                    if (y === 'green') {
                        for (const z in cardsObj[x][y]) {
                            img.src = cardsObj[x][y][z].cardFace;
                            name.innerText = cardsObj[x][y][z].id;
                            color.innerText = cardsObj[x][y][z].color;
                            difficulty.innerText = cardsObj[x][y][z].difficulty;
                            delete cardsObj[x][y][z];
                            break;
                        }
                    }
                    continue;
                }
            }
            continue;
        }
    }
    else if (Object.keys(cardsObj.stage2.brown).length > 0) {
        for (const x in cardsObj) {
            if (x === 'stage2') {
                for (const y in cardsObj[x]) {
                    if (y === 'brown') {
                        for (const z in cardsObj[x][y]) {
                            img.src = cardsObj[x][y][z].cardFace;
                            name.innerText = cardsObj[x][y][z].id;
                            color.innerText = cardsObj[x][y][z].color;
                            difficulty.innerText = cardsObj[x][y][z].difficulty;
                            delete cardsObj[x][y][z];
                            break;
                        }
                    }
                    continue;
                }
            }
            continue;
        }
    }
    else if (Object.keys(cardsObj.stage2.blue).length > 0) {
        for (const x in cardsObj) {
            if (x === 'stage2') {
                for (const y in cardsObj[x]) {
                    if (y === 'blue') {
                        for (const z in cardsObj[x][y]) {
                            img.src = cardsObj[x][y][z].cardFace;
                            name.innerText = cardsObj[x][y][z].id;
                            color.innerText = cardsObj[x][y][z].color;
                            difficulty.innerText = cardsObj[x][y][z].difficulty;
                            delete cardsObj[x][y][z];
                            break;
                        }
                    }
                    continue;
                }
            }
            continue;
        }
    }
    else if (Object.keys(cardsObj.stage3.green).length > 0) {
        for (const x in cardsObj) {
            if (x === 'stage3') {
                for (const y in cardsObj[x]) {
                    if (y === 'green') {
                        for (const z in cardsObj[x][y]) {
                            img.src = cardsObj[x][y][z].cardFace;
                            name.innerText = cardsObj[x][y][z].id;
                            color.innerText = cardsObj[x][y][z].color;
                            difficulty.innerText = cardsObj[x][y][z].difficulty;
                            delete cardsObj[x][y][z];
                            break;
                        }
                    }
                    continue;
                }
            }
            continue;
        }
    }
    else if (Object.keys(cardsObj.stage3.brown).length > 0) {
        for (const x in cardsObj) {
            if (x === 'stage3') {
                for (const y in cardsObj[x]) {
                    if (y === 'brown') {
                        for (const z in cardsObj[x][y]) {
                            img.src = cardsObj[x][y][z].cardFace;
                            name.innerText = cardsObj[x][y][z].id;
                            color.innerText = cardsObj[x][y][z].color;
                            difficulty.innerText = cardsObj[x][y][z].difficulty;
                            delete cardsObj[x][y][z];
                            break;
                        }
                    }
                    continue;
                }
            }
            continue;
        }
    }
    else if (Object.keys(cardsObj.stage3.blue).length > 0) {
        for (const x in cardsObj) {
            if (x === 'stage3') {
                for (const y in cardsObj[x]) {
                    if (y === 'blue') {
                        for (const z in cardsObj[x][y]) {
                            img.src = cardsObj[x][y][z].cardFace;
                            name.innerText = cardsObj[x][y][z].id;
                            color.innerText = cardsObj[x][y][z].color;
                            difficulty.innerText = cardsObj[x][y][z].difficulty;
                            delete cardsObj[x][y][z];
                            break;
                        }
                    }
                    continue;
                }
            }
            continue;
        }
    }
    showCardNumber(cardsObj);
}

function shuffle(cardsObj) {

    // debugger;
    
    // get ancient
    let selectAncients = document.getElementById('ancients');
    let selectAncientsIndex = selectAncients.selectedIndex;
    console.log( ancientsData[selectAncientsIndex-1]);

    // get level
    let selectLevels = document.getElementById('levels');
    let selectLevelsIndex = selectLevels.selectedIndex;
    console.log( difficulties[selectLevelsIndex]);

    // document.getElementById('test-img').src = blueCards[0].cardFace;

    switch (difficulties[selectLevelsIndex].id) {
        case "super-easy" : cardsObj = superEasy(cardsObj); break;
        case "easy" : cardsObj = easy(cardsObj); break;
        case "medium" : cardsObj = medium(cardsObj); break;
        case "hard" : cardsObj = hard(cardsObj); break;
        case "super-hard" : cardsObj = superHard(cardsObj); break;
        default : cardsObj;
    }

    showCardNumber(cardsObj);
    console.log(cardsObj);
}

function showCardNumber(cardsObj) {
    document.getElementById('stage1-green').innerText = Object.keys(cardsObj.stage1.green).length;
    document.getElementById('stage1-brown').innerText = Object.keys(cardsObj.stage1.brown).length;
    document.getElementById('stage1-blue').innerText = Object.keys(cardsObj.stage1.blue).length;

    document.getElementById('stage2-green').innerText = Object.keys(cardsObj.stage2.green).length;
    document.getElementById('stage2-brown').innerText = Object.keys(cardsObj.stage2.brown).length;
    document.getElementById('stage2-blue').innerText = Object.keys(cardsObj.stage2.blue).length;

    document.getElementById('stage3-green').innerText = Object.keys(cardsObj.stage3.green).length;
    document.getElementById('stage3-brown').innerText = Object.keys(cardsObj.stage3.brown).length;
    document.getElementById('stage3-blue').innerText = Object.keys(cardsObj.stage3.blue).length;
}

function filterCards(arr, value) {
    return arr.filter(e => e.difficulty === value);
}

function filterCardsExceptValue(arr, value) {
    return arr.filter(e => e.difficulty !== value);
}

function superHard(cardsObj) {
    let selectAncientsIndex = document.getElementById('ancients').selectedIndex;

    let firstStage = ancientsData[selectAncientsIndex-1].firstStage;
    let secondStage = ancientsData[selectAncientsIndex-1].secondStage;
    let thirdStage = ancientsData[selectAncientsIndex-1].thirdStage;    

    let BlueCards = Object.assign(blueCards);
    let BrownCards = Object.assign(brownCards);
    let GreenCards = Object.assign(greenCards);

    let blueNormal = filterCards(BlueCards, 'normal');
    let blueHard = filterCards(BlueCards, 'hard');

    let brownNormal = filterCards(BrownCards, 'normal');
    let brownHard = filterCards(BrownCards, 'hard');

    let greenNormal = filterCards(GreenCards, 'normal');
    let greenHard = filterCards(GreenCards, 'hard');

    // super-hard - green
    for (let i = 0; i < firstStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.green).length;
        if (firstStage.greenCards > objLength) {

            if (greenHard.length > 0) {
                let index = Math.floor((Math.random() * greenHard.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage1.green[`${key}`] = greenHard[index];
                greenHard.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * greenNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage1.green[`${key}`] = greenNormal[index];
                greenNormal.splice(index, 1);                
            }

        }
    }
    for (let i = 0; i < secondStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.green).length;
        if (secondStage.greenCards > objLength) {

            if (greenHard.length > 0) {
                let index = Math.floor((Math.random() * greenHard.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage2.green[`${key}`] = greenHard[index];
                greenHard.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * greenNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage2.green[`${key}`] = greenNormal[index];
                greenNormal.splice(index, 1);                
            }

        }
    }
    for (let i = 0; i < thirdStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.green).length;
        if (thirdStage.greenCards > objLength) {

            if (greenHard.length > 0) {
                let index = Math.floor((Math.random() * greenHard.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage3.green[`${key}`] = greenHard[index];
                greenHard.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * greenNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage3.green[`${key}`] = greenNormal[index];
                greenNormal.splice(index, 1);                
            }

        }
    }
    
    // super-hard - brown
    for (let i = 0; i < firstStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.brown).length;
        if (firstStage.brownCards > objLength) {

            if (brownHard.length > 0) {
                let index = Math.floor((Math.random() * brownHard.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage1.brown[`${key}`] = brownHard[index];
                brownHard.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * brownNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage1.brown[`${key}`] = brownNormal[index];
                brownNormal.splice(index, 1);                
            }

        }
    }
    for (let i = 0; i < secondStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.brown).length;
        if (secondStage.brownCards > objLength) {

            if (brownHard.length > 0) {
                let index = Math.floor((Math.random() * brownHard.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage2.brown[`${key}`] = brownHard[index];
                brownHard.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * brownNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage2.brown[`${key}`] = brownNormal[index];
                brownNormal.splice(index, 1);                
            }

        }
    }
    for (let i = 0; i < thirdStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.brown).length;
        if (thirdStage.brownCards > objLength) {

            if (brownHard.length > 0) {
                let index = Math.floor((Math.random() * brownHard.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage3.brown[`${key}`] = brownHard[index];
                brownHard.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * brownNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage3.brown[`${key}`] = brownNormal[index];
                brownNormal.splice(index, 1);                
            }

        }
    }

    // super-hard - blue
    for (let i = 0; i < firstStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.blue).length;
        if (firstStage.blueCards > objLength) {

            if (blueHard.length > 0) {
                let index = Math.floor((Math.random() * blueHard.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage1.blue[`${key}`] = blueHard[index];
                blueHard.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * blueNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage1.blue[`${key}`] = blueNormal[index];
                blueNormal.splice(index, 1);                
            }

        }
    }
    for (let i = 0; i < secondStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.blue).length;
        if (secondStage.blueCards > objLength) {

            if (blueHard.length > 0) {
                let index = Math.floor((Math.random() * blueHard.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage2.blue[`${key}`] = blueHard[index];
                blueHard.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * blueNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage2.blue[`${key}`] = blueNormal[index];
                blueNormal.splice(index, 1);                
            }

        }
    }
    for (let i = 0; i < thirdStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.blue).length;
        if (thirdStage.blueCards > objLength) {

            if (blueHard.length > 0) {
                let index = Math.floor((Math.random() * blueHard.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage3.blue[`${key}`] = blueHard[index];
                blueHard.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * blueNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage3.blue[`${key}`] = blueNormal[index];
                blueNormal.splice(index, 1);                
            }

        }
    }

    return cardsObj;
}

function hard(cardsObj) {
    let selectAncientsIndex = document.getElementById('ancients').selectedIndex;

    let firstStage = ancientsData[selectAncientsIndex-1].firstStage;
    let secondStage = ancientsData[selectAncientsIndex-1].secondStage;
    let thirdStage = ancientsData[selectAncientsIndex-1].thirdStage;    

    let BlueCards = Object.assign(blueCards);
    let BrownCards = Object.assign(brownCards);
    let GreenCards = Object.assign(greenCards);

    let blueWithoutEasy = filterCardsExceptValue(BlueCards, 'easy');
    let brownWithoutEasy = filterCardsExceptValue(BrownCards, 'easy');
    let greenWithoutEasy = filterCardsExceptValue(GreenCards, 'easy');

    // hard - green
    for (let i = 0; i < firstStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.green).length;
        if (firstStage.greenCards > objLength) {
            let index = Math.floor((Math.random() * greenWithoutEasy.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage1.green[`${key}`] = greenWithoutEasy[index];
            greenWithoutEasy.splice(index, 1);
        }
    }
    for (let i = 0; i < secondStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.green).length;
        if (secondStage.greenCards > objLength) {
            let index = Math.floor((Math.random() * greenWithoutEasy.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage2.green[`${key}`] = greenWithoutEasy[index];
            greenWithoutEasy.splice(index, 1);
        }
    }
    for (let i = 0; i < thirdStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.green).length;
        if (thirdStage.greenCards > objLength) {
            let index = Math.floor((Math.random() * greenWithoutEasy.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage3.green[`${key}`] = greenWithoutEasy[index];
            greenWithoutEasy.splice(index, 1);
        }
    }
    
    // hard - brown
    for (let i = 0; i < firstStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.brown).length;
        if (firstStage.brownCards > objLength) {
            let index = Math.floor((Math.random() * brownWithoutEasy.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage1.brown[`${key}`] = brownWithoutEasy[index];
            brownWithoutEasy.splice(index, 1);
        }
    }
    for (let i = 0; i < secondStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.brown).length;
        if (secondStage.brownCards > objLength) {
            let index = Math.floor((Math.random() * brownWithoutEasy.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage2.brown[`${key}`] = brownWithoutEasy[index];
            brownWithoutEasy.splice(index, 1);
        }
    }
    for (let i = 0; i < thirdStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.brown).length;
        if (thirdStage.brownCards > objLength) {
            let index = Math.floor((Math.random() * brownWithoutEasy.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage3.brown[`${key}`] = brownWithoutEasy[index];
            brownWithoutEasy.splice(index, 1);
        }
    }

    // hard - blue
    for (let i = 0; i < firstStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.blue).length;
        if (firstStage.blueCards > objLength) {
            let index = Math.floor((Math.random() * blueWithoutEasy.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage1.blue[`${key}`] = blueWithoutEasy[index];
            blueWithoutEasy.splice(index, 1);
        }
    }
    for (let i = 0; i < secondStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.blue).length;
        if (secondStage.blueCards > objLength) {
            let index = Math.floor((Math.random() * blueWithoutEasy.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage2.blue[`${key}`] = blueWithoutEasy[index];
            blueWithoutEasy.splice(index, 1);
        }
    }
    for (let i = 0; i < thirdStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.blue).length;
        if (thirdStage.blueCards > objLength) {
            let index = Math.floor((Math.random() * blueWithoutEasy.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage2.blue[`${key}`] = blueWithoutEasy[index];
            blueWithoutEasy.splice(index, 1);
        }
    }

    return cardsObj;
}

function medium(cardsObj) {
    debugger;
    let selectAncientsIndex = document.getElementById('ancients').selectedIndex;

    let firstStage = ancientsData[selectAncientsIndex-1].firstStage;
    let secondStage = ancientsData[selectAncientsIndex-1].secondStage;
    let thirdStage = ancientsData[selectAncientsIndex-1].thirdStage;    

    let BlueCards = Object.assign(blueCards);
    let BrownCards = Object.assign(brownCards);
    let GreenCards = Object.assign(greenCards);

    // medium - green
    for (let i = 0; i < firstStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.green).length;
        if (firstStage.greenCards > objLength) {
            let index = Math.floor((Math.random() * GreenCards.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage1.green[`${key}`] = GreenCards[index];
            GreenCards.splice(index, 1);
        }
    }
    for (let i = 0; i < secondStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.green).length;
        if (secondStage.greenCards > objLength) {
            let index = Math.floor((Math.random() * GreenCards.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage2.green[`${key}`] = GreenCards[index];
            GreenCards.splice(index, 1);
        }
    }
    for (let i = 0; i < thirdStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.green).length;
        if (thirdStage.greenCards > objLength) {
            let index = Math.floor((Math.random() * GreenCards.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage3.green[`${key}`] = GreenCards[index];
            GreenCards.splice(index, 1);
        }
    }
    
    // medium - brown
    for (let i = 0; i < firstStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.brown).length;
        if (firstStage.brownCards > objLength) {
            let index = Math.floor((Math.random() * BrownCards.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage1.brown[`${key}`] = BrownCards[index];
            BrownCards.splice(index, 1);
        }
    }
    for (let i = 0; i < secondStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.brown).length;
        if (secondStage.brownCards > objLength) {
            let index = Math.floor((Math.random() * BrownCards.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage2.brown[`${key}`] = BrownCards[index];
            BrownCards.splice(index, 1);
        }
    }
    for (let i = 0; i < thirdStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.brown).length;
        if (thirdStage.brownCards > objLength) {
            let index = Math.floor((Math.random() * BrownCards.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage3.brown[`${key}`] = BrownCards[index];
            BrownCards.splice(index, 1);
        }
    }

    // medium - blue
    for (let i = 0; i < firstStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.blue).length;
        if (firstStage.blueCards > objLength) {
            let index = Math.floor((Math.random() * BlueCards.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage1.blue[`${key}`] = BlueCards[index];
            BlueCards.splice(index, 1);
        }
    }
    for (let i = 0; i < secondStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.blue).length;
        if (secondStage.blueCards > objLength) {
            let index = Math.floor((Math.random() * BlueCards.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage2.blue[`${key}`] = BlueCards[index];
            BlueCards.splice(index, 1);
        }
    }
    for (let i = 0; i < thirdStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.blue).length;
        if (thirdStage.blueCards > objLength) {
            let index = Math.floor((Math.random() * BlueCards.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage2.blue[`${key}`] = BlueCards[index];
            BlueCards.splice(index, 1);
        }
    }

    return cardsObj;
}

function easy(cardsObj) {
    let selectAncientsIndex = document.getElementById('ancients').selectedIndex;

    let firstStage = ancientsData[selectAncientsIndex-1].firstStage;
    let secondStage = ancientsData[selectAncientsIndex-1].secondStage;
    let thirdStage = ancientsData[selectAncientsIndex-1].thirdStage;    

    let BlueCards = Object.assign(blueCards);
    let BrownCards = Object.assign(brownCards);
    let GreenCards = Object.assign(greenCards);

    let blueWithoutHard = filterCardsExceptValue(BlueCards, 'hard');
    let brownWithoutHard = filterCardsExceptValue(BrownCards, 'hard');
    let greenWithoutHard = filterCardsExceptValue(GreenCards, 'hard');

    // easy - green
    for (let i = 0; i < firstStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.green).length;
        if (firstStage.greenCards > objLength) {
            let index = Math.floor((Math.random() * greenWithoutHard.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage1.green[`${key}`] = greenWithoutHard[index];
            greenWithoutHard.splice(index, 1);
        }
    }
    for (let i = 0; i < secondStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.green).length;
        if (secondStage.greenCards > objLength) {
            let index = Math.floor((Math.random() * greenWithoutHard.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage2.green[`${key}`] = greenWithoutHard[index];
            greenWithoutHard.splice(index, 1);
        }
    }
    for (let i = 0; i < thirdStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.green).length;
        if (thirdStage.greenCards > objLength) {
            let index = Math.floor((Math.random() * greenWithoutHard.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage3.green[`${key}`] = greenWithoutHard[index];
            greenWithoutHard.splice(index, 1);
        }
    }
    
    // easy - brown
    for (let i = 0; i < firstStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.brown).length;
        if (firstStage.brownCards > objLength) {
            let index = Math.floor((Math.random() * brownWithoutHard.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage1.brown[`${key}`] = brownWithoutHard[index];
            brownWithoutHard.splice(index, 1);
        }
    }
    for (let i = 0; i < secondStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.brown).length;
        if (secondStage.brownCards > objLength) {
            let index = Math.floor((Math.random() * brownWithoutHard.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage2.brown[`${key}`] = brownWithoutHard[index];
            brownWithoutHard.splice(index, 1);
        }
    }
    for (let i = 0; i < thirdStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.brown).length;
        if (thirdStage.brownCards > objLength) {
            let index = Math.floor((Math.random() * brownWithoutHard.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage3.brown[`${key}`] = brownWithoutHard[index];
            brownWithoutHard.splice(index, 1);
        }
    }

    // easy - blue
    for (let i = 0; i < firstStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.blue).length;
        if (firstStage.blueCards > objLength) {
            let index = Math.floor((Math.random() * blueWithoutHard.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage1.blue[`${key}`] = blueWithoutHard[index];
            blueWithoutHard.splice(index, 1);
        }
    }
    for (let i = 0; i < secondStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.blue).length;
        if (secondStage.blueCards > objLength) {
            let index = Math.floor((Math.random() * blueWithoutHard.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage2.blue[`${key}`] = blueWithoutHard[index];
            blueWithoutHard.splice(index, 1);
        }
    }
    for (let i = 0; i < thirdStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.blue).length;
        if (thirdStage.blueCards > objLength) {
            let index = Math.floor((Math.random() * blueWithoutHard.length) + 1)-1;
            let key = (i + 1).toString();
            cardsObj.stage2.blue[`${key}`] = blueWithoutHard[index];
            blueWithoutHard.splice(index, 1);
        }
    }

    return cardsObj;
}

function superEasy(cardsObj) {
    let selectAncientsIndex = document.getElementById('ancients').selectedIndex;

    let firstStage = ancientsData[selectAncientsIndex-1].firstStage;
    let secondStage = ancientsData[selectAncientsIndex-1].secondStage;
    let thirdStage = ancientsData[selectAncientsIndex-1].thirdStage;    

    let BlueCards = Object.assign(blueCards);
    let BrownCards = Object.assign(brownCards);
    let GreenCards = Object.assign(greenCards);

    let blueEasy = filterCards(BlueCards, 'easy');
    let blueNormal = filterCards(BlueCards, 'normal');

    let brownEasy = filterCards(BrownCards, 'easy');
    let brownNormal = filterCards(BrownCards, 'normal');

    let greenEasy = filterCards(GreenCards, 'easy');
    let greenNormal = filterCards(GreenCards, 'normal');

    // super-easy - green
    for (let i = 0; i < firstStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.green).length;
        if (firstStage.greenCards > objLength) {

            if (greenEasy.length > 0) {
                let index = Math.floor((Math.random() * greenEasy.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage1.green[`${key}`] = greenEasy[index];
                greenEasy.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * greenNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage1.green[`${key}`] = greenNormal[index];
                greenNormal.splice(index, 1);                
            }

        }
    }
    for (let i = 0; i < secondStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.green).length;
        if (secondStage.greenCards > objLength) {

            if (greenEasy.length > 0) {
                let index = Math.floor((Math.random() * greenEasy.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage2.green[`${key}`] = greenEasy[index];
                greenEasy.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * greenNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage2.green[`${key}`] = greenNormal[index];
                greenNormal.splice(index, 1);                
            }

        }
    }
    for (let i = 0; i < thirdStage.greenCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.green).length;
        if (thirdStage.greenCards > objLength) {

            if (greenEasy.length > 0) {
                let index = Math.floor((Math.random() * greenEasy.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage3.green[`${key}`] = greenEasy[index];
                greenEasy.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * greenNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage3.green[`${key}`] = greenNormal[index];
                greenNormal.splice(index, 1);                
            }

        }
    }
    
    // super-easy - brown
    for (let i = 0; i < firstStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.brown).length;
        if (firstStage.brownCards > objLength) {

            if (brownEasy.length > 0) {
                let index = Math.floor((Math.random() * brownEasy.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage1.brown[`${key}`] = brownEasy[index];
                brownEasy.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * brownNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage1.brown[`${key}`] = brownNormal[index];
                brownNormal.splice(index, 1);                
            }

        }
    }
    for (let i = 0; i < secondStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.brown).length;
        if (secondStage.brownCards > objLength) {

            if (brownEasy.length > 0) {
                let index = Math.floor((Math.random() * brownEasy.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage2.brown[`${key}`] = brownEasy[index];
                brownEasy.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * brownNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage2.brown[`${key}`] = brownNormal[index];
                brownNormal.splice(index, 1);                
            }

        }
    }
    for (let i = 0; i < thirdStage.brownCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.brown).length;
        if (thirdStage.brownCards > objLength) {

            if (brownEasy.length > 0) {
                let index = Math.floor((Math.random() * brownEasy.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage3.brown[`${key}`] = brownEasy[index];
                brownEasy.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * brownNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage3.brown[`${key}`] = brownNormal[index];
                brownNormal.splice(index, 1);                
            }

        }
    }

    // super-easy - blue
    for (let i = 0; i < firstStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage1.blue).length;
        if (firstStage.blueCards > objLength) {

            if (blueEasy.length > 0) {
                let index = Math.floor((Math.random() * blueEasy.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage1.blue[`${key}`] = blueEasy[index];
                blueEasy.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * blueNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage1.blue[`${key}`] = blueNormal[index];
                blueNormal.splice(index, 1);                
            }

        }
    }
    for (let i = 0; i < secondStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage2.blue).length;
        if (secondStage.blueCards > objLength) {

            if (blueEasy.length > 0) {
                let index = Math.floor((Math.random() * blueEasy.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage2.blue[`${key}`] = blueEasy[index];
                blueEasy.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * blueNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage2.blue[`${key}`] = blueNormal[index];
                blueNormal.splice(index, 1);                
            }

        }
    }
    for (let i = 0; i < thirdStage.blueCards; i++) {
        let objLength = Object.keys(cardsObj.stage3.blue).length;
        if (thirdStage.blueCards > objLength) {

            if (blueEasy.length > 0) {
                let index = Math.floor((Math.random() * blueEasy.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage3.blue[`${key}`] = blueEasy[index];
                blueEasy.splice(index, 1);
            }
            else {
                let index = Math.floor((Math.random() * blueNormal.length) + 1)-1;
                let key = (i + 1).toString();
                cardsObj.stage3.blue[`${key}`] = blueNormal[index];
                blueNormal.splice(index, 1);                
            }

        }
    }

    return cardsObj;
}