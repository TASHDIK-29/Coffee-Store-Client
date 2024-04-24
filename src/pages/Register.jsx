import { useContext } from "react";
import { AuthContext } from "../components/authProvider/AuthProvider";
import { json } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handelRegister = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const createAt = result.user?.metadata?.creationTime;

                const user = { name, email, password, createAt };

                fetch('https://coffee-store-server-kappa-eight.vercel.app/user', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'User added successfully',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })
                        }
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2">
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handelRegister} className="card-body">
                        <h1 className="text-3xl font-bold text-center my-6 border-b-2 py-2 border-dashed">Please Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;