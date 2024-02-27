import { GitUsers } from "./git_users.js"

// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root);
        this.load();
    }

    entities = [];

    load() {
        this.entities = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entities));
    }

    async add(username){
        try{
            let isUserAlreadyExists = this.entities.find(user => user.login === username);
            

            if(isUserAlreadyExists){
                throw new Error ('Usuário já Cadastrado!'); 
            }

            
            const newUser = await GitUsers.search(username);
            
            if(newUser.login == undefined){
                throw new Error ('Usuário não existe!')
            }

            this.entities = [...this.entities, newUser];
            this.updateTableRows();
            this.save();

        }catch(e){
            alert(e.message);
        }   
    }
    
    delete(user){
        const filteredEntities = this.entities
        .filter(entity => entity.login != user.login)

        this.entities = filteredEntities;

        if(this.entities.length == 0){
            const divEmpty = document.querySelector(".row-empty");
            divEmpty.style.display = "flex";
        }

        this.save(); //Save on Local Storage
        this.updateTableRows();
    }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites{
    constructor(root) {
        super(root)
    
        this.tbody = this.root.querySelector('table tbody');

        this.updateTableRows();
        this.onAdd();
    }

    onAdd(){
        const addButton = document.querySelector('#search button');
        addButton.onclick = () => {
        const  {value}  = document.querySelector('#search input');

        this.add(value)
        }
    }

    updateTableRows(){
        this.removeAllRows();
        
        this.entities.forEach( user => {
            
            const row = this.createRow()

            row.querySelector('img').src = `https://github.com/${user.login}.png`;
            row.querySelector(".info h1").textContent = `${user.name}`;
            row.querySelector(".info a").textContent = `/${user.login}`;
            row.querySelector(".info a").href = `https://github.com/${user.login}`;
            row.querySelector('.repositories').textContent = user.public_repos;
            row.querySelector('.followers').textContent = user.followers;

            row.querySelector(".remove").addEventListener('click',()=>{
                const isOk = confirm('Tem certeza que deseja deletar essa linha?')
                if(isOk) this.delete(user);
            })

            this.tbody.append(row);

            if(this.entities.length > 0){
                const divEmpty = document.querySelector(".row-empty");
                divEmpty.style.display = "none";
            }
        })
    }

    createRow(){
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>
        <img src="./assets/Thiago.jpg" alt="Foto de Mayk Brito">
        <div class="info">
            <h1>Mayk Brito</h1>
            <a class="link" target="_blank">/maykbrito</a>
        </div>
        </td>
        <td class="repositories">
            <h1>123</h1>
        </td>
        <td class="followers">
            <h1>1234</h1>
        </td>
        <td>
            <a class="remove">Remover</a>
        </td>`

        return row
    }

    removeAllRows(){
        this.tbody.querySelectorAll('tr')
        .forEach((tr)=>{
            tr.remove();
        });
    }
}