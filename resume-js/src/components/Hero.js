import React, { Component } from 'react';

class Hero extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        const personal = this.props.personal;
        
        return (
        <>
            <h1>{personal.firstName} {personal.lastName}</h1>
            <p>{personal.summary}</p>
            <p>{personal.location.city}, {personal.location.state}</p>
            <p>Email: <a href={'mailto:' + personal.email}>{personal.email}</a></p>
            <p>Phone: {personal.phone}</p>
        </>
        );
    }
}

export default Hero;