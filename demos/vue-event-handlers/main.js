// Old code that queries the DOM
// document.querySelector('#form').addEventListener('submit', (event) => {
//   event.preventDefault(); // prevent default re-loading on
//   const name = document.querySelector('#input'); // query the DOM for the input
//   app.names.push(name.value); // push the value of the input to the list of names
//   name.value = ''; // clear out the input when submitted
// });

const app = new Vue({
  el: '#root',
  data: {
    names: [],
    newName: '',
  },
  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = '';
    },
  },
});

