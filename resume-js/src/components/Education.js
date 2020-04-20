import React, { Component } from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const education = this.props.education;
        let schools = education.schools.map(school => {
            return <li className="list-group-item">{school}</li>;
        });
        let details = education.details.map(detail => {
            return <li className="list-group-item">{detail}</li>;
        });

        return (
            <>
            <div className="education">
                <h3>{education.institution} <small className="text-muted">{education.endDate}</small></h3>
                <p>{education.degree} in {education.major} (concentration in {education.concentration}) with a minor in {education.minor}.</p>
                <div className="text-center">
                <div className="row justify-content-center">
                <ul className="list-group col-lg-6 col-md-8">{schools}{details}</ul>
                </div>
                </div>
                
            </div>
            </>
        );
    }
}

export default Education;