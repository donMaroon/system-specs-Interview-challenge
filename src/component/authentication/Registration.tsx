import { useState, useEffect, useRef } from 'react';
import axios from '../../intecerptors/AxiosInterceptors'
interface signinInfoTyp{
    email: string;
    username:string;
    password: string;
}
interface factsTyp{
  category: string;
  type: string;
  setup: string;
  delivery?: string;
}
const baseURL = 'https://v2.jokeapi.dev/joke/Any?amount=10'

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isregistered, setIsregistered] = useState(false)
  const [users, setUsers] = useState<signinInfoTyp[]>([])
  const [facts, setFacts] = useState<factsTyp[]>([])
  const menuRef = useRef<HTMLDivElement>(null)



  //effect to retrieve user data from storage
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

  }, []);


  //fetch jokes to be displayed on the modal
  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios.get(baseURL);
        setFacts(response.data.jokes);
        console.log(facts)
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchJokes();
  }, [])

  


  //to toggle the modal
  useEffect(() => {
    const handler = ({target}: MouseEvent) => {
      if(!menuRef.current?.contains(target as Node))
      setIsregistered(false)
    }
    document.addEventListener('mousedown', handler)
  }, [])

  

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

        setIsregistered(true)

        setUsername('')
        setEmail('')
        setPassword('')

  };


  return (
    <>
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
    <div>
        {isregistered ?
            <div className="react-modal-overlay">
            <div className="react-modal-wrapper">
              <div className="react-modal-content" ref={menuRef}>
                  <h2 style={{
                    textAlign: "center"
                  }}>
                    Login successful
                  </h2>
                  {facts.length >= 1 && (
                    <p style={{textAlign: "center"}}>{facts[0].category}: {facts[0].setup}, {facts[0].delivery}</p>
                  )}
                  
                  <div className='button' >
                    <button className='a' type="button" onClick={() => setIsregistered(false)}>close</button>                                     
                  </div>
              </div>
            </div>
          </div> 
          : ''}
    </div>
    </>
  );
};

export default Register;