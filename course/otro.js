// new Vue ({
//   el: '#app',
//   data:{
//     email: '',
//     count:1,
//     greeting:"hola",
//     dogs: ["labrador",
//             "boxer",
//             "San bernardo",
//             "Chihuahua"],
//     cats: [
//           { name: "bolita"},
//           { name: "kitty"},
//           { name: "dolly"}
//           ],
//     newCat:""
//   },
//   methods: {
//     addKitty: function(){
//       return this.cats.push({name: this.newCat}),
//       this.newCat = ""
//     }
//   },
//   filters:{
//     capitaliz: function(value){
//       return value.toUpperCase();
//     }
//   }

// });

// new Vue ({
//   el: '#app',
//   data:{
//     title : "Hello World 2",
//     link: 'http://google.com',
//     count: 0,
//     x: 0,
//     y: 0,
//     name: "hola",
//     atRed:false

// },
// methods: {
//   sayHello: function(){
//     this.title = 'Hello!'
//     return this.title;
//   },
//   increase: function(step,event){
//      this.count += step;
//   },
//   updateCoordinates: function(event){
//      this.x = event.clientX;
//      this.y = event.clientY;
//   },
//   // dummy: function(){
//   //   event.stopPropagation();
//   // }
//   alertMe: function(){
//    alert('Alert!');
//   }
// }
// });

// new Vue({

//   el:"#app",
//   data:{
//     show:true,
//     ingredients:['meat','fruit','cookies'],
//     persons:[
//       {name:'Max', age: '27',color:'red'},
//       {name: 'Anna',age: '33', color: 'blue'}
//     ],

//   }
// })

new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns:[]
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer:true,
        text: 'Player hist Monster for ' + damage
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    specialAttack: function() {
      this.monsterHealth -= this.calculateDamage(10, 20);
      if (this.checkWin()) {
        return;
      }
    },
    monsterAttacks: function() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer:false,
        text: 'Monster hist Player for ' + damage
      });
      this.checkWin();
    },
    heal: function() {
      if (this.playerHealth <= 90) this.playerHealth += 10;
      else this.playerHealth = 100;

      this.monsterAttacks();
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! new game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
