import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Link from "./Link";
import ProjectList from "./ProjectList";

import "../styles/App.less";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {};

    render() {
        return (
            <Fragment>
                <Header />
                <div className="flex-fill">
                    <ProjectList />
                </div>

                <Footer />
            </Fragment>
        );
    }
}

export default App;
