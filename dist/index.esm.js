import React from 'react';
import { Button } from 'antd';

const AfButton = (props) => {
    return React.createElement(Button, Object.assign({}, props), props.children);
};

export { AfButton };
