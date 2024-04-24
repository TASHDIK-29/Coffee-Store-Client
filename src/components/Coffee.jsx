import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, details, supplier, photo, taste, chef, category } = coffee;

    const handelDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-kappa-eight.vercel.app/coffee/${_id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        const remaining = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remaining);

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
                
            }
        });
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-4">

            <div className="md:w-1/3 h-56 border">
                <img className="w-full h-56" src={photo} alt="Album" />
            </div>

            <div className="card-body md:w-1/3">
                <h2 className="card-title">{name}</h2>
                <p>{chef}</p>
            </div>
            <div className="flex md:flex-col justify-around">
                <button className="p-2 border rounded-lg bg-orange-600 text-white font-bold">View</button>
                <Link to = {`/updateCoffee/${_id}`} className="p-2 border rounded-lg bg-blue-600 text-white font-bold">Edit</Link>
                <button onClick={() => handelDelete(_id)} className="p-2 border rounded-lg bg-red-600 text-white font-bold">X</button>
            </div>
        </div>
    );
};

export default Coffee;