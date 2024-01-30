
import { ColorFactory } from 'antd/es/color-picker/color';
import React from 'react';


const  Footer = () =>{

    return (
        <footer className="footer" style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>

             <h4 style={{color:'black'}}>BioWaste-Tech</h4>
             <h2 style={{color:'black'}}>Thanks for your visit</h2>
             <h4 style={{color:'black'}}> <em>@copyrigth 2024</em> </h4>

            
        </footer>

    );
}

export default Footer ;