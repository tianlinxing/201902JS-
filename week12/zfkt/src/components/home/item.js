import React from 'react';
class Item extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        let {data} = this.props;
        return <div className='item_box'>
            <img src={data.poster} alt=""/>
            <p className='desc_box'>{data.title}</p>
            <div className='money_box'>
                {data.price}
            </div>
        </div>;
    }
}

export default Item