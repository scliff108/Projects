import React, { Component } from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <>
            <div className="book-container">
                <img src={this.props.thumbnail} alt={this.props.title} className="book-thumbnail" />
                <div className="book-text">
                    <h2 className="book-title">{this.props.title}</h2>
                    <p><strong>By {this.props.authors}</strong></p>
                    <p>Description: {this.props.description}</p>
                    <p>Pages: {this.props.pageCount}</p>
                    <button><a href={this.props.infoLink} target="_blank">See More</a></button>
                </div>
            </div>
        </>
        );
    }
}

export default Book