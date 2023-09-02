import dom from "../dom.js";
import data from "../data.js";

const editItemHandler = (id) => {
    const selectedItem = data.items.find(item => item.id === Number(id));
    dom.input.value = selectedItem.text;
};

export default editItemHandler;