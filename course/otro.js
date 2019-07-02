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

new Vue ({
  el: '#app',
  data:{
    title : "Hello World 2",
    link: 'http://google.com',
    count: 0,
    x: 0,
    y: 0
    
},
methods: {
  sayHello: function(){
    this.title = 'Hello!'
    return this.title;
  },
  increase: function(step,event){
     this.count += step;
  },
  updateCoordinates: function(event){
     this.x = event.clientX;
     this.y = event.clientY;
  },
  // dummy: function(){
  //   event.stopPropagation();
  // }
  alertMe: function(){
   alert('Alert!');
  }
} 
});



