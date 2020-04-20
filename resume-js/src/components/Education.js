import React, { Component } from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const education = this.props.education;
        let schools = education.schools.map(school => {
            return <p>{school}</p>;
        });
        let details = education.details.map(detail => {
            return <li>{detail}</li>;
        });

        return (
            <>
            <p>{education.institution} - {education.endDate}</p>
            {schools}
            <p>{education.degree} - {education.major} ({education.concentration})</p>
            <p>{education.minor}</p>
            <ul>{details}</ul>
            </>
        );
    }
}

export default Education;