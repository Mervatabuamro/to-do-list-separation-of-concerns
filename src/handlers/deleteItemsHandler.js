import dom from "../dom.js";
import data from "../data.js";

const deleteItemsHandler = () => {
    dom.list.innerHTML= '';
    data.items = [];
};

export default deleteItemsHandler;