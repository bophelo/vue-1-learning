Vue.component('tasks-app',{
    props: ['list'],
    template: '#tasks-template'
});
new Vue({
    el: '#app',
    data: {
        tasks: [
            { body: 'Go to the bank', completed: true },
            { body: 'Go to the chemist', completed: false },
            { body: 'Go to the gym', completed: false }
        ]
    }
    /*methods: {
        toggleCompletedFor: function (task) {
            task.completed  = !task.completed;//opposite state...can also be inline
        }
    }*/
});