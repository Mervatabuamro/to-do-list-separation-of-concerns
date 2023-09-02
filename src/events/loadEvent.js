import loadHandler from "../handlers/loadHandler.js";

const firstListener = () => {
    window.addEventListener('load', loadHandler);
};

export default firstListener;