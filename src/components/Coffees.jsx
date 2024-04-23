import { useState } from "react";
import Coffee from "./Coffee";

const Coffees = ({loadedCoffees}) => {

    const [coffees, setCoffees] = useState(loadedCoffees)

    
    return (
        <div className="md:grid grid-cols-2 gap-6">
            {
                coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></Coffee>)
            }
        </div>
    );
};

export default Coffees;