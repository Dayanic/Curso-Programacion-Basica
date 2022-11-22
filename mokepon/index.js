//De esta forma se importa librería de express JS
const express = require("express");
//Se importa librería para permitir el acceso de cualquier origen
const cors = require("cors");

//Se crea app con express JS
const app = express();

//Mediante esta ip puedo entrar desde celular apple
http://MacBook-Air-de-Dayane.local:8080

//Permite que en una url podamos servir archivos estáticos
app.use(express.static('public'));
//Se finaliza configuración de cors
app.use(cors());
//Se habilita capacidad para recibir peticiones POST que tengan contenido json
app.use(express.json())

//Se crean variables de jugadores
const players = [];

class Player {
    constructor(id) {
        this.id = id;
    }

    assignMokepon(mokepon) {
        this.mokepon = mokepon;
    }

    updatePosition(x, y) {
        this.x = x;
        this.y = y;
    }

    assignAttacks(attacks) {
        this.attacks = attacks;
    }
}

class Mokepon {
    constructor(name) {
        this.name = name;
    }
}

//Se le indica a express JS que cuando reciba una petición devuelva un HOLA
app.get("/join", (req, res) => {
    const id = `${Math.random()}`;
    const player = new Player(id);
    players.push(player);

    //Se agrega cabecera para habilitar todos los origene
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(id);
})

//Método para generar arreglo de jugador con su respectivo id y mokepon seleccionado.
app.post("/mokepon/:playerId", (req, res) => {
    const playerId = req.params.playerId || "";
    const name = req.body.mokepon || "";
    const mokepon = new Mokepon(name);
    const indexPlayer = players.findIndex((player) => playerId === player.id)

    if (indexPlayer >= 0) {
        players[indexPlayer].assignMokepon(mokepon);
    }

    res.end();
})

//Método para generar arreglo de enemigos con su respectivo id y mokepon.
app.post("/mokepon/:playerId/position", (req, res) => {
    const playerId = req.params.playerId || "";
    const x = req.body.x || 0;
    const y = req.body.y || 0;
    const indexPlayer = players.findIndex((player) => playerId === player.id)

    if (indexPlayer >= 0) {
        players[indexPlayer].updatePosition(x, y);
    }

    const enemys = players.filter((player) => playerId !== player.id);

    res.send({
        enemys
    });
})

//Método para obtener todos los ataques seleccionados por el jugador
app.post("/mokepon/:playerId/attacks", (req, res) => {
    const playerId = req.params.playerId || "";
    const attacks = req.body.attacks || []
    const indexPlayer = players.findIndex((player) => playerId === player.id)

    if (indexPlayer >= 0) {
        players[indexPlayer].assignAttacks(attacks);
    }

    res.end();
})

//Se obtiene los ataques del jugador indicado
app.get("/mokepon/:playerId/attacks", (req, res) => {
    const playerId = req.params.playerId || "";
    const player = players.find((player) => player.id === playerId);
    res.send({
        attacks: player.attacks || []
    })
})

//Le decimos que escuche continuamente en el puerto 8080 las peticiones
app.listen(8080, () => {
    console.log("Servidor funcionando");
})