import { useState, useEffect } from 'react';
import axios from '../../intecerptors/AxiosInterceptors'

interface signinInfoTyp{
    email: string;
    username:string;
    password: string;
}


const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<signinInfoTyp[]>([])


  //effect to retrieve user data from storage
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

  }, []);

  const handleRegister = async () => {
    
    // Using axios to send info to the server
    // try {
    //   const response = await axios.post('your-api-endpoint/register', {
    //     email,
    //     username,
    //     password,
    //   });

    //   console.log('Registration successful:', response.data);
    // } catch (error) {
    //   console.error('Registration failed:', error);
    // }

    
        //check if name is taken
        if(users.find((user) => user.username === username && user.email === email)) {
            alert('username and password taken');
            return;
        }

        //Add a new user
        const newUser: signinInfoTyp = {
            username,
            email,
            password
        }
        setUsers([...users, newUser])

        //store the object in local storage
        localStorage.setItem('signinInfo', JSON.stringify([...users, newUser]) )

        //Display the info on the console
        console.log('signin information', users)

        setUsername('')
        setEmail('')
        setPassword('')

  };

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className='login-page'>
        <div className='login-pag2'>
      <h2>Register</h2>
      <form>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className='button'>
            <button className='a' type="button" onClick={handleRegister}>
                Register
            </button>
        </div>

        {/* <button onClick={handleLogOut}>
            logout
        </button> */}
      </form>
      </div>
      <div className='register-image'>

      </div>
    </div>
  );
};

export default Register;