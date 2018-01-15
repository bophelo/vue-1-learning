Vue.component('tasks', {
    template: '#tasks-template',
    //props: ['list'], adding ajax
    data: function() {
        return {
            list: []
        };
    },

    created: function() {
        this.fetchTaskList();
    },

    methods: {
        fetchTaskList: function() {
            //function accepts all the returned data
            //following this we can now assign all the data to the list
            $.getJSON('api/tasks', function(tasks) {
                this.list = tasks;//this will refer to something different with anon function, bind to vm
            }.bind(this));
            //when component is setup, we start by fetching tasks from the serve
            //and when we have them, we assign them to the lists data property
        },
        delete: function(task) {
            this.list.$remove(task)
        }
    }
});

new Vue({
    el: 'body'
});
