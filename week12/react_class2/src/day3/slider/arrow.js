import React from 'react';
class App extends React.Component {
    
    render() {
        let {onLeft,onRight} = this.props;
        return <div className='arrow_box'>
            <span onClick={onLeft}> {'<'} </span>
            <span onClick={onRight}> {'>'} </span>
        </div>;
    }
}

export default App