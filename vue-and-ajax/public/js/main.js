Vue.config.devtools = true;
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
            //$.getJSON('api/tasks', function(tasks) {
            //    this.list = tasks;//this will refer to something different with anon function, bind to vm
            //}.bind(this)); no longer using jquery
            //when component is setup, we start by fetching tasks from the serve
            //and when we have them, we assign them to the lists data property
            // GET /someUrl
            var resource = this.$resource('api/tasks/{id}');
            resource.update().then(tasks => {
            //updating a particular task = resource.update({id: 5}, {body: 'Updated Task Body'}).then(tasks => {
            //this.$http.get('api/tasks').then(tasks => {

            // get body data
            //this.someData = response.body;
            this.list = tasks.data;

            }, tasks => {
                console.log("Error fetching tasks");
            });
        },
        deleteTask: function(task) {
            this.list.$remove(task)
        }
    }
});

new Vue({
    el: 'body'
});
