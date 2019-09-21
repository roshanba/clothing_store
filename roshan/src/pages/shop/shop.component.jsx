import React from 'react';
import  SHOP_DATA from './shopdata.js';
import PreviewCollection from '../../components/preview-collection/preview-collection.component.jsx';
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        const {collections}=this.state;
        return (
            <div className="shop-page">
                {
                    collections.map( ({id,...otherCollectionProps})=>(
                        <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;


