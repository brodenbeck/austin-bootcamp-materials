const app = new Vue({
  el: '#root',
  data: {
    names: [],
  },
});

// We will be able to replace this with Vue code soon
// Whenever you are querying the DOM when utilizing Vue, know there is probably a better way
document.querySelector('#form').addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default re-loading on
  const name = document.querySelector('#input'); // query the DOM for the input
  app.names.push(name.value); // push the value of the input to the list of names
  name.value = ''; // clear out the input when submitted
});
