
import dom from "../dom.js";
import editItemHandler from "../handlers/editItemHandler.js";
import deleteItemHandler from "../handlers/deleteItemHandler.js";

//component


const createItem = (itemData) => {
    const container = document.createElement('div');
    container.className = 'todo-item';
    container.id = itemData.id;

    const title = document.createElement('p');
    title.className = 'title';
    title.innerHTML = itemData.text;

    //btn container
    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    //edit btn
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';

    // add click event

    editBtn.addEventListener('click',() => {
        dom.btn.innerText = 'Edit';
        container.classList.add('selected');
        editItemHandler(container.id);
    });

     //delete btn
     const deleteBtn = document.createElement('button');
     deleteBtn.className = 'delete-btn';
     deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

     // add click event
     deleteBtn.addEventListener ('click', () => {
        deleteItemHandler(container.id);
     });

     btnContainer.append(editBtn, deleteBtn);
     container.append(title, btnContainer);

     return container;

};

export default createItem;