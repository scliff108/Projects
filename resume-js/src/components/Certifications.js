import React, { Component } from 'react';

class Certifications extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const certificationsJSON = this.props.certifications;
        let certifications = certificationsJSON.map(cert => {
            return (
                <>
                <p><a href={cert.link}>{cert.name}</a></p>
                <p>{cert.organization}</p>
                <p>{cert.date}</p>
                <p>{cert.summary}</p>
                </>
            );
        });

        return (
            <div>{certifications}</div>
        );
    }
}

export default Certifications;