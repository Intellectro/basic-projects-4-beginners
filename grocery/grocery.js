const form = document.querySelector('form');
const input = document.querySelector('[type="text"]');
const button = document.querySelector('.submit-btn');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
const alert = document.querySelector('.alert');
const container = document.querySelector('.grocery-container');


let editElement;
let editFlag = false,
editId = "";


form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    const id = String(new Date().getTime());
    const value = input.value;

    if (value && !editFlag){
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>`;
        list.appendChild(element);
        if (value.toString().split(' ').length === 0){
            displayAlert('item added successfully', 'success');
        }else{
            displayAlert('items added successfully', 'success');
        }
        container.classList.add('show-container');
    }else if (value && editFlag){

    }else{
        displayAlert('Empty value', 'danger');
    }
}

function displayAlert(text, action){
    alert.innerHTML = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(()=>{
        alert.innerHTML = "";
        alert.classList.remove(`alert-${action}`);
    },1200)
}

function deleteItem(){}
function editItem(){}