"use client";
import { useRouter } from "next/navigation"; // Import from next/navigation instead of next/router
import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

const Noble = () => {
    const progress = 90; // Set the progress value dynamically
    const router = useRouter();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ marginTop: '0px', fontSize: '40px' }}>You scored: {progress / 10} / 10</span>

            <ProgressBar
                progress={progress}
                radius={100}
            />
            <span style={{ marginTop: '0px', fontSize: '40px' }}>{progress}%</span>

            <button className="bg-blue-200 p-3"
                onClick={() => { router.push("/"); }}
            >
                Try again?
            </button>

        </div>
    );
};

export default Noble;
