//Variables globales
const btnSelectPet = document.querySelector('#btnSelectPet');
const sectionSelectAttack = document.querySelector('#selectAttack');
const sectionReset = document.querySelector('#reset');
const btnReset = document.querySelector('#btnReset');

const spanPlayerPet = document.getElementById('playerPet');
const sectionSelectPet = document.querySelector('#selectPet');

const spanEnemyPet = document.getElementById('enemyPet');

const spanPlayerLives = document.querySelector('#playerLives');
const spanEnemyLives = document.querySelector('#enemyLives');

const messageSection = document.getElementById('result');
const divPlayerAttack = document.getElementById('playerAttack');
const divEnemyAttack = document.getElementById('enemyAttack');
const cardsContainer = document.querySelector('#cardsContainer');
const attacksContainer = document.querySelector('#attacksContainer');

const sectionViewMap = document.querySelector('#viewMap');
const mapCanvas = document.querySelector('#mapCanvas');

let playerId = null;
let enemyId = null;
let mokepons = [];
let mokeponsEnemys = []
let playerAttack = [];
let enemyAttack = [];
let mokeponOption;
let inputHipodoge;
let inputCapipepo;
let inputRatiqueya;
let playerPet;
let playerPetObject;
let enemyAttacks;
let btnFire;
let btnWater;
let btnEarth;
let buttons = [];
let indexPlayerAttack;
let indexEnemyAttack;
let playerVictory = 0;
let enemyVictory = 0;
let canvas = mapCanvas.getContext("2d");
let interval;
let mapBackground = new Image()
mapBackground.src = 'assents/Pueblo_Paleta.png';
let heightMap;
let widthMap = window.innerWidth - 20;//Se deja de esta forma para tomar el ancho de nuestra ventana menos 20 para tener un margen a los costados.
const maxMapWidth = 350;

if (widthMap > maxMapWidth) {
    widthMap = maxMapWidth - 20;
}

heightMap = (widthMap * 600)/800;
mapCanvas.width = widthMap;
mapCanvas.height = heightMap;

//Se crea clase con constructor
class Mokepon {
    constructor (name, photo, life, mapPhoto, id = null) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.life = life;
        this.attacks = [];
        this.width = 40;
        this.height = 40;
        this.x = random(0,mapCanvas.width - this.width);
        this.y = random(0, mapCanvas.height - this.height);
        this.mapCanvas = new Image()
        this.mapCanvas.src = mapPhoto;
        this.speedX = 0;
        this.speedY = 0;
    }

    paintMokepon() {
        canvas.drawImage(
            this.mapCanvas,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}

//Se crean objetos de los personajes
let hipodoge = new Mokepon('Hipodoge', 'assents/Charmander.png', 5, 'assents/CharmanderAvatar.png');
let capipepo = new Mokepon('Capipepo', 'assents/Squirtle.png', 5, 'assents/SquirtleAvatar.png');
let ratigueya = new Mokepon('Ratigueya', 'assents/Bulbasaur.png', 5, 'assents/BulbasaurAvatar.png');

const hipodogeAttacks = [
    {name: '💧', id: 'btnWater'},
    {name: '💧', id: 'btnWater'},
    {name: '💧', id: 'btnWater'},
    {name: '🔥', id: 'btnFire'},
    {name: '🌱', id: 'btnEarth'},
]

const capipepoAttacks = [
    {name: '🌱', id: 'btnEarth'},
    {name: '🌱', id: 'btnEarth'},
    {name: '🌱', id: 'btnEarth'},
    {name: '💧', id: 'btnWater'},
    {name: '🔥', id: 'btnFire'},
]

const ratigueyaAttacks = [
    {name: '🔥', id: 'btnFire'},
    {name: '🔥', id: 'btnFire'},
    {name: '🔥', id: 'btnFire'},
    {name: '💧', id: 'btnWater'},
    {name: '🌱', id: 'btnEarth'},
]

//Se crea objeto literario por cada mokepon
hipodoge.attacks.push(...hipodogeAttacks);
capipepo.attacks.push(...capipepoAttacks);
ratigueya.attacks.push(...ratigueyaAttacks);

//Arreglo para almacenar nuestros personajes
mokepons.push(hipodoge, capipepo, ratigueya);

function startGame() {
    //Se oculta sección de seleccionar ataques
    sectionSelectAttack.style.display = 'none';
    sectionReset.style.display = 'none';
    sectionViewMap.style.display = 'none';

    //Se recorre arreglo para insertar de forma dinámica nuestros personajes en la página
    mokepons.forEach((mokepon) => {
        mokeponOption = `
        <input type="radio" name="pet" id=${mokepon.name} />
        <label class="mokepon-card" for=${mokepon.name}>
            <p>${mokepon.name}</p>
            <img src=${mokepon.photo} alt=${mokepon.name}>
        </label>
        `;
        cardsContainer.innerHTML += mokeponOption;

        inputHipodoge = document.getElementById('Hipodoge');
        inputCapipepo = document.getElementById('Capipepo');
        inputRatiqueya = document.getElementById('Ratigueya');
    })

    btnSelectPet.addEventListener('click', selectPlayerPet);
    btnReset.addEventListener('click', resetGame);

    joinTheGame();
}

function joinTheGame() {
    fetch("http://MacBook-Air-de-Dayane.local:8080/join")
        .then(function (res) {
            if (res.ok) {
                res.text()
                .then(function (response) {
                    playerId = response;
                })
            }
        })
}

function selectPlayerPet() {
    if (inputHipodoge.checked){
        spanPlayerPet.innerHTML = inputHipodoge.id;
        playerPet = inputHipodoge.id;
    } else if (inputCapipepo.checked) {
        spanPlayerPet.innerHTML = inputCapipepo.id;
        playerPet = inputCapipepo.id;
    } else if (inputRatiqueya.checked) { 
        spanPlayerPet.innerHTML = inputRatiqueya.id;
        playerPet = inputRatiqueya.id;
    } else {
        alert("You must select pet");
        return;
    }

    sectionSelectPet.style.display = 'none';
    selectMokepon(playerPet);
    extractAttack(playerPet);
    sectionViewMap.style.display = 'flex';
    startMap();
}

function selectMokepon(playerPet) {
    fetch(`http://MacBook-Air-de-Dayane.local:8080/mokepon/${playerId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mokepon:playerPet
        })
    })
}

function extractAttack(playerPet) {
    let attacks;
    for (let i = 0; i < mokepons.length; i++) {
        if (mokepons[i].name === playerPet) {
            attacks = mokepons[i].attacks;
        }
    }
    viewAttacks(attacks);
}

function viewAttacks(attacks) {
    attacks.forEach((attack) => {
        let btnAttack = `
        <button id=${attack.id} class="btnAttack btnAttacks">${attack.name}</button>
        `;
        attacksContainer.innerHTML += btnAttack;
    })

    btnFire = document.querySelector('#btnFire');
    btnWater = document.querySelector('#btnWater');
    btnEarth = document.querySelector('#btnEarth');
    buttons = document.querySelectorAll('.btnAttacks');
}

function attackSequence() {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                playerAttack.push('Fire');
                button.style.background = '#112F58';
                button.disabled = true;
            } else if (e.target.textContent === '💧') {
                playerAttack.push('Water');
                button.style.background = '#112F58';
                button.disabled = true;
            } else {
                playerAttack.push('Earth');
                button.style.background = '#112F58';
                button.disabled = true;
            }
            // enemyRandomAttack();
            if (playerAttack.length === 5) {
                sendAttack();
            }
        });
    })
}

function sendAttack() {
    fetch(`http://MacBook-Air-de-Dayane.local:8080/mokepon/${playerId}/attacks`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            attacks: playerAttack
        })
    })

    interval = setInterval(getAttacks, 50);
}

function getAttacks() {
    fetch(`http://MacBook-Air-de-Dayane.local:8080/mokepon/${enemyId}/attacks`)
        .then(function(res) {
            if (res.ok) {
                res.json()
                    .then(function({ attacks }) {
                        if (attacks.length === 5) {
                            enemyAttack = attacks
                            combat();
                        }
                    })
            }
        })
}

function selectEnemyPet(enemyPet) {
    spanEnemyPet.innerHTML = enemyPet.name;
    enemyAttacks = enemyPet.attacks;
    attackSequence();
}

function enemyRandomAttack() {
    const randomAttack = random(0,enemyAttacks.length -1);

    if (enemyAttacks[randomAttack].name === '🔥') {
        enemyAttack.push("Fire");
    } else if (enemyAttacks[randomAttack].name === '💧' ) {
        enemyAttack.push("Water");
    } else {
        enemyAttack.push("Earth");
    }

    startFight();
}

function startFight() {
    if (playerAttack.length === 5) {
        combat();
    }
}

function createMessage(result, noption) {
    const newPlayerAttack = document.createElement('p');
    const newEnemyAttack = document.createElement('p');

    if (noption == 1) { 
        messageSection.innerHTML = result;
        newPlayerAttack.innerHTML = indexPlayerAttack;
        newEnemyAttack.innerHTML = indexEnemyAttack;

        divPlayerAttack.appendChild(newPlayerAttack);
        divEnemyAttack.appendChild(newEnemyAttack);
    } else if (noption == 2) {
        messageSection.innerHTML = result;
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function indexPlayers(player, enemy) {
    indexPlayerAttack = playerAttack[player];
    indexEnemyAttack = enemyAttack[enemy];
}

function combat() {
    clearInterval(interval);

    for (let i = 0; i < playerAttack.length; i++) {
        if (playerAttack[i] === enemyAttack[i]) {
            indexPlayers(i, i);
            createMessage("Draw", 1);
            spanEnemyLives.innerHTML = enemyVictory;
            spanPlayerLives.innerHTML = playerVictory
        } else if ((playerAttack[i] === "Fire") && (enemyAttack[i] === "Earth") || (playerAttack[i] === "Water") && (enemyAttack[i] === "Fire") || (playerAttack[i] === "Earth") && (enemyAttack[i] === "Water")) {
            indexPlayers(i, i);
            createMessage("Yoy win 🎉", 1);
            playerVictory++;
            spanPlayerLives.innerHTML = playerVictory;
        } else {
            indexPlayers(i, i);
            createMessage("You lost 👎🏻", 1);
            enemyVictory++;
            spanEnemyLives.innerHTML = enemyVictory;
        }
    }

    gameOver();
}

function gameOver() {
    if (playerVictory > enemyVictory) {
        createMessage("Game Over - Congratulations you Win!! 🎉", 2);
        sectionReset.style.display = 'block';
    } else if (playerVictory < enemyVictory) {
        createMessage("Game Over - Sorry you Lost!! 😭", 2);
        sectionReset.style.display = 'block';
    } else {
        createMessage("Game Over - This is a draw!!", 2);
        sectionReset.style.display = 'block';
    }
}

function resetGame() {
    location.reload();
}

function paintCanvas() {
    playerPetObject.x = playerPetObject.x + playerPetObject.speedX;
    playerPetObject.y = playerPetObject.y + playerPetObject.speedY;
    canvas.clearRect(0,0,mapCanvas.width, mapCanvas.height);
    canvas.drawImage(
        mapBackground,
        0,
        0,
        mapCanvas.width,
        mapCanvas.height
    )
    playerPetObject.paintMokepon();
    sendPosition(playerPetObject.x, playerPetObject.y);
    mokeponsEnemys.forEach(function(mokepon) {
        mokepon.paintMokepon();
        checkCollision(mokepon);
    })
}

function sendPosition(x, y) {
    fetch(`http://MacBook-Air-de-Dayane.local:8080/mokepon/${playerId}/position`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res) {
        if (res.ok) {
            res.json()
                .then(function ({ enemys }) {
                    mokeponsEnemys=  enemys.map(function(enemy) {
                        let enemyMokepon = null;
                        const nameMokepon = enemy.mokepon.name || "";
                        
                        if (nameMokepon === "Hipodoge") {
                            enemyMokepon = new Mokepon('Hipodoge', 'assents/Charmander.png', 5, 'assents/CharmanderAvatar.png', enemy.id);
                        } else if (nameMokepon === "Capipepo") {
                            enemyMokepon = new Mokepon('Capipepo', 'assents/Squirtle.png', 5, 'assents/SquirtleAvatar.png', enemy.id);
                        } else if (nameMokepon === "Ratigueya") {
                            enemyMokepon = new Mokepon('Ratigueya', 'assents/Bulbasaur.png', 5, 'assents/BulbasaurAvatar.png', enemy.id);
                        }

                        enemyMokepon.x = enemy.x;
                        enemyMokepon.y = enemy.y;
                        
                        return enemyMokepon;
                    })
                })
        }
    })
}

function moveUp() {
    playerPetObject.speedY = -5;
}

function moveLeft() {
    playerPetObject.speedX = -5;
}

function moveDown() {
    playerPetObject.speedY = 5;
}

function moveRight() {
    playerPetObject.speedX = 5;
}

function stopMove() {
    playerPetObject.speedX = 0;
    playerPetObject.speedY = 0;
}

function keyDown(event) {
    switch (event.key) {
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        default:
            break;
    }
}

function startMap() {
    playerPetObject = getObjectMokepon();
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', stopMove);
    interval = setInterval(paintCanvas, 50);
}

function getObjectMokepon() {
    for (let i = 0; i < mokepons.length; i++) {
        if (mokepons[i].name === playerPet) {
            return mokepons[i];
        }
    }
}

function checkCollision(enemy) {
    const upEnemy = enemy.y;
    const downEnemy = enemy.y + enemy.height;
    const rightEnemy = enemy.x + enemy.width;
    const leftEnemy = enemy.x;
    const upPlayer = playerPetObject.y;
    const downPlayer = playerPetObject.y + playerPetObject.height;
    const rightPlayer = playerPetObject.x + playerPetObject.width;
    const leftPlayer = playerPetObject.x;
    if (downPlayer < upEnemy || upPlayer > downEnemy || rightPlayer < leftEnemy || leftPlayer > rightEnemy) {
        return;
    }

    stopMove();
    clearInterval(interval);
    enemyId = enemy.id;
    sectionSelectAttack.style.display = 'flex';
    sectionViewMap.style.display = 'none';
    selectEnemyPet(enemy);
}

window.addEventListener('load', startGame);