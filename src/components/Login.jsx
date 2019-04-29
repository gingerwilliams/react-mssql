import React, { Component, Fragment } from "react";
import Link from "./Link";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange = event => {
        console.log("change");
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            // username: event.target.value,
            // password: event.target.value
            [name]: value
        });
    };

    handleSubmit = () => {
        console.log(this.state);
        // event.preventDefault();
        return this.state.username === "test" && this.state.password === "123"
            ? alert("youre logged in")
            : alert("invalid user");
    };

    render() {
        return (
            <Fragment>
                <div className="header-base_wrap">
                    <header className="header-base header-base_box">
                        <a className="logo logo_box logo_newell-brands-base" />
                        <div className="header-base_title" alt="Website Title">
                            Onyx React Boilerplate 
                        </div>
                    </header>
                </div>

                <Link />

                <form
                    onSubmit={this.handleSubmit}
                    action="#"
                    className="tile tile_box tile_border"
                    style={{ width: "400px", margin: "auto" }}>
                    <div className="input-text_box">
                        <label className="label_text label_box">
                            Username<span className="label_required">*</span>
                        </label>
                        <input
                            name="username"
                            type="text"
                            required
                            username={this.state.username}
                            onChange={this.handleChange}
                            className="input-text_border input-text_text input-text_theme"
                        />
                    </div>

                    <div className="input-password input-password_box">
                        <label className="label_text label_box">
                            Password <span className="label_required">*</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            required
                            password={this.state.password}
                            onChange={this.handleChange}
                            className="input-text_border input-text_text input-text_theme"
                        />
                    </div>

                    <button
                        className="button button_box button__center button_theme"
                        type="submit"
                        value="Submit">
                        <span className="button_text button_theme__text">
                            Login
                        </span>
                    </button>
                </form>
            </Fragment>
        );
    }
}

export default Login;
