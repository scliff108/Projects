import React, { Component } from 'react';

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const skillsJSON = this.props.skills;
        let skills = skillsJSON.map(skill => {
            return <button className="btn btn-primary btn-lg disabled">{skill}</button>;
        });

        return (
        <div className="d-flex justify-content-center">
        {skills}
        </div>
        );
    }
}

export default Skills;