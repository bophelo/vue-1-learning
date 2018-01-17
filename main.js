Vue.component('tasks-app',{
    props: ['list'],
    template: '#tasks-template',
    computed: {
        remaining: function () {
            return this.list.filter(this.inProgress).length;
        }//is this task completed?
    },
    methods: {
        isCompleted: function (task) {
            return task.completed;
        },
        inProgress: function (task) {
            return ! this.isCompleted(task);
        },
        deleteTask: function (task) {
            this.list.$remove(task);
        },
        clearCompleted: function (task) {//filter down list of tasks and only get the one inProgress
            //this subset are the tasks
            this.list = this.list.filter(this.inProgress);
        }
    }
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