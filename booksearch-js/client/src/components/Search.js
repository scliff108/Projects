import React, { Component } from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchTerms: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchTerms: event.target.value})
    }

    handleSubmit(event) {
        // Clear Search
        // Send request URL to App.js
        this.props.callbackFromParent(this.state.searchTerms);
        this.setState({searchTerms: ''});
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <h1>Google Books Search</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter title and/or author" value={this.state.searchTerms} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Search