import React from 'react';

const Button = ({ onClickButton, children, count }) => {
    //console.log('hello-Button')
    return (
        <>
            <button onClick={onClickButton}>{children}--{count}</button>
            <span style={{marginLeft: 10 + 'px'}}>{Math.random()}</span>
        </>
    );
};

export default React.memo(Button)