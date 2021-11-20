import React from 'react';
import raspberry from './assets/raspberry.svg';

export default function Productos(props) {
    return <div>
        <div>
            <img className="imagen" src={raspberry} />
        </div>
        <div>
            {props.nombre}
        </div>
        <div>
            {props.desc}
        </div>
        <div>
            {props.precio}
        </div>
    </div>
}