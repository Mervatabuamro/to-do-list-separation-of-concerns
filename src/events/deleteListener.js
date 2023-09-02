import deleteItemHandler from "../handlers/deleteItemHandler.js";
import dom from "../dom.js";

const deleteListener = () => {
    dom.clearBtn.addEventListener('click', deleteItemHandler)
};

export default deleteListener;