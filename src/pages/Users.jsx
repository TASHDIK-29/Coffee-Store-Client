import { Link, useLoaderData } from "react-router-dom";
import User from "../components/User";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUser = useLoaderData();

    const [users, setUsers] = useState(loadedUser)

    const handelDeleteUser = id => {
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
                fetch(`https://coffee-store-server-kappa-eight.vercel.app/user/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = users.filter(user => user._id !== id);
                            setUsers(remaining);

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
        <div>
            <h1 className="text-3xl font-bold text-center my-5">Honorable Users</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={idx}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createAt}</td>
                                <td><button onClick={() => handelDeleteUser(user._id)} className="bg-red-600 p-2 rounded-md text-white font-bold">X</button></td>
                                <td><Link to = {`/updateUser/${user._id}`} className="bg-gray-600 p-2 rounded-md text-white font-bold">Edit</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;