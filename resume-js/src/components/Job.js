import React, { Component } from 'react';

class Job extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const job = this.props.job;
        let details = job.details.map(detail => {
            return <li>{detail}</li>;
        });

        return (
            <>
            <p>{job.position} - {job.company}</p>
            <p>{job.startDate} - {job.endDate}</p>
            <ul>{details}</ul>
            </>
        )
    }
}

export default Job;