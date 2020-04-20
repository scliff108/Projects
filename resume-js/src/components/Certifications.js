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
                <h3><a href={cert.certificationLink}>{cert.name}</a> <small className="text-muted">{cert.date}</small></h3>
                <p></p>
                <blockquote className="blockquote">
                    <p className="mb-0">{cert.summary}</p>
                    <footer className="blockquote-footer text-center"><a href={cert.organizationLink}>{cert.organization}</a></footer>
                </blockquote>
                </>
            );
        });

        return <>{certifications}</>;
    }
}

export default Certifications;