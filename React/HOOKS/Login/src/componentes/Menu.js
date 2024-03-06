import React, { useState } from 'react';
import {
 Navbar,
 NavbarBrand,
 NavLink,
 Button,
} from 'reactstrap';


export default function Menu(props){
 let colorUno = 'secondary'
 let colorDos = 'secondary'
 let colorTres = 'secondary'

 // le paso un menuItem que se pasa al llamar al menu en la App
 // cambia el color dependiendo de lo que le pases
 switch (props.menuItem){
     case 'UNO':
       colorUno = 'primary'
       break;
     case 'DOS':
       colorDos = 'primary'
       break;
     case 'TRES':
       colorTres = 'primary'
       break;
   }
   return (
     <div>
       <Navbar>
         <NavbarBrand href="/">MYFPSCHOOL</NavbarBrand>
         <NavLink>
            {/* en el click le paso el numero para cambiar el color del que se pulsa */}
         <Button color={colorUno} onClick={()=>props.cambiaColor("UNO")} >UNO</Button>{" "}
         <Button color={colorDos} onClick={()=>props.cambiaColor("DOS")}  >DOS</Button>{" "}
         <Button color={colorTres} onClick={()=>props.cambiaColor("TRES")}  >TRES</Button>
         </NavLink>
       </Navbar>
     </div>
   );
}