const app = new Vue({
  el: "#app",
  data:{
    horacio:{
      first:"Horacio",
      last:"Leon",
      age:"28"
    }
  },
  template:
  `<div>
    <h2>
      {{ horacio.first }}
      {{ horacio.last }}
    </h2>
   </div>`

  
})