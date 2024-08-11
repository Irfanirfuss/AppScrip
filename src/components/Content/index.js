import "./index.css";

const Content = (props) => {
    const { data } = props;
    const { id, title, image, price, rating } = data;
    console.log(id);
    return (
        <li className="content">
            <div>
                <img src={image} alt={title} />
                <p className="title">{title}</p>
                <p className="price">{price}</p>
                <p className="rating">{rating.rate}</p>
            </div>{" "}
        </li>
    );
};

export default Content;
