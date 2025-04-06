const campoNome = document.getElementById("campoNome");
const bottoneNome = document.getElementById("bottoneNome");
const campoMessaggio = document.getElementById("campoMessaggio");
const bottoneInvia = document.getElementById("bottoneInvia");
const chat = document.getElementById("chat");
const utenti = document.getElementById("utenti");

const modelloMessaggio = "<li class=\"list-group-item\">%MESSAGGIO</li>";
const modelloUtente = "<li class=\"list-group-item\">%NOME</li>";
const messaggi = [];

const socket = io();

const mostraModale = new bootstrap.Modal(document.getElementById("modaleNome"));
mostraModale.show();