import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component {
    constructor() {
        super();
        this.Reload = this.Reload.bind(this);
    }
    Reload() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        books: []
    }

    render() {
        return (
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books} Reload={this.Reload}></Books>
            </div>
        );
    }
}