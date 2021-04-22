const app = new Vue({
    el: "#app",
    data: {
        todos: [
            {
                text: "Make a to do list",
                completed: true,
            },
            {
                text: "Check off first item",
                completed: false,
            },
            {
                text: "Realize you already did 2 things on the list",
                completed: false,
            },
            {
                text: "Reward yourself with a nice, long nap",
                completed: false,
            },
        ],
        newTodo: '',
        editTodo: {
            visibility: false,
            text: '',
            index: null,
        }
    },
    methods: {

        // Insert a new todo on the list
        addTodo() {
            if (this.newTodo !== '') {
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });

                this.newTodo = '';
                this.$refs.todoInput.focus();
            }
        },

        // Remove todo from list 
        removeTodo(index) {
            const deleted = this.todos.splice(index, 1)[0];
        },

        // Update todo completed status
        updateStatus(index) {
            this.todos[index].completed = !this.todos[index].completed;
        },

        // Update text
        showEdit(index) {
            this.editTodo.text = this.todos[index].text;
            this.editTodo.index = index;
            this.editTodo.visibility = true;
        },

        updateTodo() {
            this.todos[this.editTodo.index].text = this.editTodo.text;

            this.editTodo.visibility = false;
            this.editTodo.text = '';
            this.editTodo.index = null;

            this.closeEdit();
        },

        closeEdit() {
            this.editTodo.visibility = false;
            this.editTodo.text = '';
            this.editTodo.index = null;
        },
    }
});