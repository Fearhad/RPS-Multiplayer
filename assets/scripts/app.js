 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAnwHwI6x_aKex3Di4fc7YPfJuD8hCN4h0",
    authDomain: "rps-multiplayer-76469.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-76469.firebaseio.com",
    projectId: "rps-multiplayer-76469",
    storageBucket: "",
    messagingSenderId: "1025133566828"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();

  var player1 = {
      name: "",
      wins: 0,
      ties: 0,
      losses: 0,
      isReady: false
  }

  var player2 = {
    name: "",
    wins: 0,
    ties: 0,
    losses: 0,
    isReady: false
  }

  var chatArray = ["<System>Welcome to RPS Chat!"];

  var rock = "<i class='far fa-hand-rock'></i>";
  var paper = "<i class='far fa-hand-paper'></i>";
  var scissors = "<i class='far fa-hand-scissors'></i>";

  var rockButton = "<button class='btn'><i class='far fa-hand-rock'></i></button>";
  var paperButton = "<button class='btn'><i class='far fa-hand-paper'></i></button>";
  var scissorsButton = "<button class='btn'><i class='far fa-hand-scissors'></i></button>";

  $("#player1").append(rockButton);
  $("#player1").append(paperButton);
  $("#player1").append(scissorsButton);

