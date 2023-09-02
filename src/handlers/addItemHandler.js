import dom from "../dom.js";
import data from "../data.js";
import createItem from "../components/createUser.js";

const addItemHandler = (value) => {
    if(dom.btn.innerText === 'Edit'){
       const selectedItem = document.querySelector('.selected');
       const id = Number(selectedItem.id);
       const item = data.items.find((item) => item.id === id);
       item.text = value;

       // update dom

       selectedItem.querySelector('.title').innerText = value;
       dom.input.value = '';
       selectedItem.classList.remove('selected');
       dom.btn.innerText = 'Submit';


    }else{
        const newItem = {
            id : data.id++,
            text: value,
        };
    
        // add to items
    
        data.items.push(newItem);
         // add to the dom
          
         const newItemDom = createItem(newItem);
         dom.list.prepend(newItemDom);
         dom.input.value = '';
    

    };

};

export default addItemHandler;