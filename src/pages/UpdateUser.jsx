import { json, useLoaderData, useParams } from "react-router-dom";
import { useForm } from "react-hook-form"

const UpdateUser = () => {

    const { id } = useParams();
    // console.log(id);

    const user = useLoaderData();
    // console.log(user);

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (updateData) => {
        console.log(updateData);

        fetch(`https://coffee-store-server-kappa-eight.vercel.app/user/${id}`, {
            method: "PUT",
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2 flex-col">
                <h1 className="text-4xl font-bold text-center my-6">Please Update</h1>
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user.name} className="input input-bordered"
                                {...register("name")}
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user.email} className="input input-bordered"
                                {...register("email")}
                                required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;