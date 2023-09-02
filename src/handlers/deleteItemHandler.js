import data from "../data.js";


const deleteItemHandler = (id) => {
    // remove from data
    data.items = data.items.filter((item) => item.id != Number(id));

    // remove from the dom
    document.getElementById(id).remove();
};

export default deleteItemHandler;