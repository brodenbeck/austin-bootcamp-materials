new Vue({
  el: '#root',
  data: {
    message: 'Hello, world',
  },
  // computed: {
  //   reversedMessage() {
  //     return this.message.split('').reverse().join('');
  //   },
  // },
});

// new Vue({
//   el: '#root2',
//   data: {
//     viewingAll: true,
//     tasks: [
//       {
//         description: 'Go to the store',
//         completed: true,
//       },
//       {
//         description: 'Finish lesson',
//         completed: false,
//       },
//       {
//         description: 'Clear inbox',
//         completed: true,
//       },
//       {
//         description: 'Make dinner',
//         completed: false,
//       },
//       {
//         description: 'Clean room',
//         completed: false,
//       },
//     ],
//   },
//   computed: {
//     tasksForDisplay() {
//       if (this.viewingAll) {
//         return this.tasks;
//       } else {
//         return this.tasks.filter(task => !task.completed);
//       }
//     },
//   },
// });
