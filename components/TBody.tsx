import React from 'react';

const TBody = () => {
    return (
        <div className="grid w-full grid-cols-8 gap-x-0.5 justify-items-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-8 "
             style={{borderBottom: '2px solid teal'}}>
            <div>Company</div>
            <div>Salary</div>
            <div>City</div>
            <div>Date</div>
            <div>Status</div>
            <div>TestTask</div>
            <div>TestTaskNotes</div>
            <div>Interview</div>
        </div>
    );
};

export default TBody;
