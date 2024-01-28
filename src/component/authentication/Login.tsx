import { useState } from 'react';
import axios from '../../intecerptors/AxiosInterceptors'



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.PreventDefault
    // try {
    //   const response = await axios.post('your-api-endpoint/login', {
    //     email,
    //     password,
    //   });

    //   console.log('Login successful:', response.data);
    // } catch (error) {
    //   console.error('Login failed:', error);
    // }

    const users = JSON.parse(localStorage.getItem('signinInfo'));
    console.log(users)
    console.log(email)
    console.log(password)
    const existingUSer = users.find(
        (user: { email: string; password: string }) =>
          user.email == email && user.password == password
      );

      
      if (existingUSer) {
        alert('sign In successful')
      } else {
        alert('invalid email and password')
      }

      setEmail('')
      setPassword('')
    
  };



  return (
    <div className='login-page'>
      <div className='login-pag2'>
      <h2>Login</h2>
      <form>
        <label className='label-tag'>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className='button'>
            <button onClick={handleLogin} style={{
                padding: "15px 130px"
            }} className='a' >
                Login
            </button>
        </div>
      </form>
      </div>
        <div className='login-image'>

        </div>
    </div>
  );
};

export default Login;