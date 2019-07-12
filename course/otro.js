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
    gameIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      this.monsterHealth -= this.calculateDamage(3, 10);
      if(this.checkWin()){
        return;
      }
      
      this.playerHealth -= this.calculateDamage(5, 12);
      this.checkWin();
    
    },
    specialAttack: function() {},
    heal: function() {},
    giveUp: function() {},
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
