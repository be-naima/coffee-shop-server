
import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const catagory = form.catagory.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,quantity,supplier,taste,catagory,details,photo}
        //send ser side
        fetch('http://localhost:8000/coffee',{
            method:'POST',
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{ console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'user added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
           
        })
        form.reset();
        

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className='text-3xl font-bold text-purple-600 mb-10'>Add Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/*row*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Coffee Name" className="input input-bordered w-full" name="name"/>
                        </label>
                    </div>
                
                
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Available Quantity" className="input input-bordered w-full" name="quantity"/>
                        </label>
                    </div>
                </div>
                {/*row*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Supplier Name" className="input input-bordered w-full" name="supplier"/>
                        </label>
                    </div>
                
                
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Taste" className="input input-bordered w-full" name="taste"/>
                        </label>
                    </div>
                </div>
                {/*row*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Catagory</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Catagory" className="input input-bordered w-full" name="catagory"/>
                        </label>
                    </div>
                
                
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Details" className="input input-bordered w-full" name="details"/>
                        </label>
                    </div>
                </div>
                {/*row*/}
                <div className=" mb-8">
                    <div className="form-control md:full mr-4">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" placeholder="Photo Url" className="input input-bordered w-full" name="photo"/>
                        </label>
                    </div>
                
                    
                   
                </div>
                
                <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddCoffee;