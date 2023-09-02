import data from "../data.js";
import dom from "../dom.js";
import createItem from "../components/createUser.js";

const loadHandler = () => {
    data.items.forEach((item) => {
        const itemDom = createItem (item);
        dom.list.append(itemDom);

    });

};

export default loadHandler;