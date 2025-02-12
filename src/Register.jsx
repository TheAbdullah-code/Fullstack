import React, {useState} from 'react'; 
import axios from 'axios';

function Register(){
    const  [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://fullstackserver-3.onrender.com/api/users/register", 
                formData, 
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            alert(response.data.message); 
            setFormData({ name: "", email: "", password: "" });
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "An error occurred");
        }
    };
    return(
        <div>
            <h1>Eventa.com</h1>
            <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto space-y-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold">Register</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Register
      </button>
    </form>
        </div>
    )

}
export default Register;