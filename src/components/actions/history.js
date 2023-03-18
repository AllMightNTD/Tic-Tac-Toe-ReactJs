import React from 'react';

const History = ({ move }) => {
    return (
        <div>
            {move.map((move, index) => (
                <p className="my-0" key={index}>
                    {move.row} , {move.cell}
                </p>
            ))}
        </div>
    );
};

export default History;
