import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-route-dom";
import { registerschema } from ".../components//FormSchema/registerschema";
function Register() {
    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit(data){
        console.log(data)
        alert("register success")
        navigate("/")
    }
return (
    <> 
    <form onSubmit={handleSubmit}>
        <input type="text"  placeholder="Enter your name" {...register("name")} />
        <p>{errors.name?.message}</p>
        <br />
        <input type="email"  placeholder="Enter your email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <br />
        <input type="password"  placeholder="Enter your Password" {...register("password")} />
        <p>{errors.password?.message}</p>
        <br />
        <input type="age"  placeholder="Enter your Age" {...register("age")} />
        <p>{errors.age?.message}</p>
        <button type="submit">Login</button>
      </form>
      </>
)}