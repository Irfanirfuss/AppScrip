import { Component } from "react";
import SideBar from "../SideBar";
import Content from "../Content";

import "./index.css";
const sideBtn = [
    {
        text: "All",
        id: "all",
    },
    {
        text: "Men",
        id: "men's clothing",
    },
    {
        text: "Women",
        id: "women's clothing",
    },
    {
        text: "Electronics",
        id: "electronics",
    },
    {
        text: "Jewelery",
        id: "jewelery",
    },
];
const initial = { loading: "loading", success: "success", failure: "failure" };

class Home extends Component {
    state = { loading: initial.loading, data: [], category: "all" };

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const api = "https://fakestoreapi.com/products/";
        const response = await fetch(api);
        const data = await response.json();

        this.setState({ data });
    };

    selectCategory = (e) => {
        console.log(e);
        this.setState({ category: e });
    };

    render() {
        const { category, data } = this.state;
        console.log(data);

        const filtered =
            category === "all"
                ? data
                : data.filter((each) => each.category === category);
        console.log(filtered);

        return (
            <div className="main-container">
                <div className="sideBar">
                    <h2>Categories</h2>
                    <ul className="side-btn">
                        {sideBtn.map((each) => (
                            <SideBar
                                key={each.id}
                                data={each}
                                selectCategory={this.selectCategory}
                            />
                        ))}
                    </ul>
                </div>
                <div className="app">
                    <ul className="app-con">
                        {filtered.map((each) => (
                            <Content key={each.id} data={each} />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;
