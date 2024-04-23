import { useLoaderData } from "react-router-dom";
import Coffees from "./Coffees";

const Home = () => {

    const loadedCoffees = useLoaderData();

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Header Section</h1>
            <Coffees loadedCoffees={loadedCoffees}></Coffees>
        </div>
    );
};

export default Home;