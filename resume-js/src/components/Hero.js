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
        <div className="row">
            <div className="col-lg">
                <p>
                    <strong>From: </strong>
                    {personal.location.city}, {personal.location.state}
                </p>
            </div>
            <div className="col-lg">
                <p>
                    <strong>Email: </strong>
                    <a href={'mailto:' + personal.email}>
                        {personal.email}
                    </a>
                </p>
            </div>
            <div className="col-lg">
                <p>
                    <strong>Phone: </strong>
                    {personal.phone}
                </p>
            </div>
        </div>
        </>
        );
    }
}

export default Hero;