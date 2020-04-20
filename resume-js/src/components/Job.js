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
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h2>{job.position}</h2>
                    <h3>{job.company}</h3>
                </div>
                <div>
                    <p>{job.startDate} - {job.endDate}</p>
                </div>
            </div>
            <ul>{details}</ul>
            </>
        )
    }
}

export default Job;