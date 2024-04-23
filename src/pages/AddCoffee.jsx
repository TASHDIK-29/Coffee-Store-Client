import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handelAddCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const photo = form.photo.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const category = form.category.value;

        const newCoffee = { name, details, supplier, photo, taste, chef, category }

        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
            })
    }

    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form onSubmit={handelAddCoffee} className="container flex flex-col mx-auto space-y-12">
                <div className="space-y-2 text-center">
                    <p className="font-medium text-3xl">Add New Coffee</p>
                    <p className="text-xs md:w-1/2 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                    <div className="grid grid-cols-6 gap-8 col-span-full lg:col-span-4 md:px-12">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Name</label>
                            <input type="text" name="name" placeholder="Enter coffee name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Chef</label>
                            <input type="text" name="chef" placeholder="Enter coffee chef" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Supplier</label>
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Taste</label>
                            <input type="text" name="taste" placeholder="Enter coffee taste" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Category</label>
                            <input type="text" name="category" placeholder="Enter coffee category" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Details</label>
                            <input type="text" name="details" placeholder="Enter coffee details" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full">
                            <label className="text-sm">PhotoURL</label>
                            <input type="text" name="photo" placeholder="Enter photo URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <input type="submit" value="Add Coffee" className="col-span-full bg-[#D2B48C] border-2 border-[#331A15] rounded-md py-2  font-bold text-[#331A15] cursor-pointer" />
                    </div>

                </fieldset>
                {/* <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        <p className="text-xs">Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-sm">Username</label>
                            <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="text-sm">Website</label>
                            <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Bio</label>
                            <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Photo</label>
                            <div className="flex items-center space-x-2">
                                <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300" />
                                <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-800">Change</button>
                            </div>
                        </div>
                    </div>
                </fieldset> */}
            </form>
        </section>
    );
};

export default AddCoffee;