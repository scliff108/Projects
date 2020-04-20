import React, { Component } from 'react';

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const skillsJSON = this.props.skills;
        let skills = skillsJSON.map(skill => {
            return <p>{skill}</p>;
        });

        return (
            <div>{skills}</div>
        );
    }
}

export default Skills;