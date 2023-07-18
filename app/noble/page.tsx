import * as React from 'react';
import { Component } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Noble = () => {
    const score = 66;

    return (
        <div>
            <h1>Welcome to My Page</h1>
            <CircularProgressbar
                value={score} maxValue={10}
                text={`${score}%`}
            />
        </div>
    );
};

export default Noble;
