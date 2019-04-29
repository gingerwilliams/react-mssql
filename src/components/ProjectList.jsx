import React, { Component } from "react";

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = { projectlist: [] };
    }

    async componentDidMount() {
        try {
            const response = await fetch("http://localhost:5000/projectlist");
            const data = await response.json();

            console.log(data);
            // this.setState({ projectlist: projectlist.recordset });
            // console.log(this.state.projectlist);

            // const response = await fetch(`http://localhost:5000/projectlist"`);
            // const text = await response.text();
            // console.log(text);

            this.setState({ projectlist: data.recordset });
            console.log(this.state.projectlist);
        } catch (err) {
            console.log(err); // TypeError: failed to fetch
        }
    }
    render() {
        return (
            <div>
                {this.state.projectlist.map(x => (
                    <li>{x.Name}</li>
                ))}
            </div>
        );
    }
}

export default ProjectList;
