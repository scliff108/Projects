import React, { Component } from 'react';
import Job from './Job';

class Work extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const workJSON = this.props.work;
        let work = workJSON.map(job => {
            return (
                <Job job={job} />
            );
        });

        return (
            <div>{work}</div>
        );
    }
}

export default Work;