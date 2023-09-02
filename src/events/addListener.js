import addItemHandler from "../handlers/addItemHandler.js";
import dom from "../dom.js";

const addListener = () => {
    dom.btn.addEventListener('click', (e) => {

        e.preventDefault();
        const value = dom.input.value;
        addItemHandler(value);
    });
};

export default addListener;