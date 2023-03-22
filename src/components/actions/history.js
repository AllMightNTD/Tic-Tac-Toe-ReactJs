import React, { useState } from 'react';

const History = ({ move, step }) => {
    console.log(step);
    return (
        <div>
            {move.map((move, index) => (
                <p className={index + 1 === step ? 'my-bold' : null} key={index}>
                    Lượt 1 : ({move.row} , {move.cell})
                </p>
            ))}
        </div>
    );
};

export default History;
