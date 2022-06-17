export class TodoApp {
    #title = 'my todo app';
    #items = ['Nir', 'You', 'JS'];

    constructor() {
        this.loadItems();
    }

    async loadItems() {
        const items = await  fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json());
        this.#items = items.map(item => item.title);
        this.render();
    }

    render() {
        document.body.innerHTML = `
            <section class="todoapp">
    
              <header class="header">
                <h1>${this.#title}</h1>
                <input class="new-todo"
                       placeholder="What needs to be done?"
                       autofocus />
              </header>
            
              <section class="main">
                <input class="toggle-all"
                       type="checkbox" />
                <ul class="todo-list">
                  <li>
                    <div class="view">
                      <input class="toggle"
                             type="checkbox" />
                      <label>Todo Title</label>
                      <button class="destroy" />
                    </div>
                    <input class="edit" />
                  </li>
                </ul>
              </section>
        `;
    }


}