import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Clear All</button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
            <ul>
                {
                    props.options.map((option) => (
                        <Option 
                            key={option} 
                            optionText={option} 
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default Options;