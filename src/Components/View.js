import React from "react";
import { FiTrash2 } from "react-icons/fi";
  

function View({outputs,deleteOutput}) {
    return outputs.map(output=>(
        <tr key={output.comment}>
            <td>"{output.comment}" - <span><em>{output.Username}</em></span></td>
            <td className="delete-btn" onClick={()=>deleteOutput(output.comment)}>
                <FiTrash2 />
            </td>
        </tr>
    ))
}

export default View