import React from 'react';

const productdetails = ({parentToChild}) => {
    console.log(parentToChild);
    return (
        <div>
            <h1>child component</h1>
            <h1>{parentToChild.title}</h1>
            
        </div>
    );
};

export default productdetails;