import "./index.css";

const SideBar = (props) => {
    const { data, selectCategory } = props;
    const { text, id } = data;

    const selectBtn = () => {
        selectCategory(id);
    };
    return (
        <li className="btn">
            <button type="button" onClick={selectBtn}>
                {text}
            </button>
        </li>
    );
};

export default SideBar;
