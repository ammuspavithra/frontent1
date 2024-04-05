import axios from "axios";
import { useEffect,useState} from"react";
import { useNavigate } from  "react-router-dom";
    function Forget(){
        const[email,setEmail]=useState('');
        const[newPassword,setPassword]=useState('');
        const navigator = useNavigate()
        useEffect(() =>{
            console.log('email is:',email);
            console.log('password is:',newPassword);
        },[email,newPassword])   
        
    const handleSubmit=async () =>{
    const response =await axios.post('http://localhost:2000/forget',{ email, newPassword})
    if(response.data){
        navigator('/login')
}
}
    
    return(
            <center> <div style={{gap:"10px"}}>
               <div><h2>Forgot Password</h2></div>
                <div>Please enter your email address and new password</div>
                <br></br><br></br>
                <input type="email" name="email"placeholder="Enter your new email" style={{width:"500px"}} onChange={(e)=> setEmail(e.target.value)}/>
                <br></br><br></br>
                <input type="password" name="new password" placeholder="Enter your new password" style={{width:"500px"}} onChange={(e)=> setPassword(e.target.value)}/>
                <br></br><br></br>
                <div><button style={{width:"300px"}} onClick={handleSubmit}>Continue</button></div>
                </div></center>       
    )
    }
export default Forget;