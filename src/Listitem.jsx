import React from 'react';
import './Listitem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function Listitem(props){
    const items = props.items;
    const Listitems = items.map(item => {
        return(
            <div className="List" key={item.key}>
                <p>
                    <input type="text" 
                    id={item.key} 
                    value = {item.text} 
                    onChange={(e) =>{props.setUpdate(e.target.value, item.key)}}
                    />
                    <span>
                        <FontAwesomeIcon className="faicons" 
                        icon="trash" 
                        onClick={() => props.deleteItem(item.key)}/> 
                    </span>
                </p>
            </div>
        );
    })
    return(
        <div>
            <FlipMove duration={250} easing="ease-in-out">
                {Listitems}
            </FlipMove>
        </div>
    );
}

export default Listitem;
