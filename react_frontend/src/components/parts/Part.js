import React from 'react';
import { Card } from 'semantic-ui-react';


const Part = ({ part }) => {
  return(
    <div>
         <li>Part Number: {part.part_number} | Qty: {part.qty} | Picke: {part.picked}</li>

    </div>
  )
}
export default Part;
