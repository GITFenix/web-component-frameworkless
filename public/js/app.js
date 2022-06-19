import './component/header.js'

export class TodoApp {
    #title = 'my todo app';
    #items = [];

    constructor() {
        this.loadItems();
    }

    async loadItems() {
        this.#items = await fetch('http://localhost').then(response => response.json());
        this.render();
    }

    render() {
        let content = `
            <section class="todoapp">
              <todo-header title="${this.#title}"></todo-header>
              <section class="main">
                <input class="toggle-all"
                       type="checkbox" />
        `;

        this.#items.forEach(function(item) {
            content += `
                <ul class="todo-list">
                  <li>
                    <div class="view">
                      <input class="toggle"
                             type="checkbox" />
                      <label>${item.name}</label>
                      <button class="destroy" />
                    </div>
                    <input class="edit" />
                  </li> 
                </ul>
            `;
        })

        content += `</section>
            </section>
        ;`

        document.body.innerHTML = content;
    }
}