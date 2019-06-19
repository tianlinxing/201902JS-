import React from 'react';
import Header from './header'
class Main extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <Header></Header>
            <div className='main'>
                {/* Main 组件包含的这部分内容 */}
                {this.props.children}
            </div>
        </div>;
    }
}

export default Main