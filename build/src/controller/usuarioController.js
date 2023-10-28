"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const usuario_1 = require("../model/usuario");
const usuarioController = express();
const port = 3000;
usuarioController.get('/test', (req, res) => {
    const usuario1 = new usuario_1.Usuario("Cris", "email@com");
    res.send(usuario1);
});
usuarioController.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
