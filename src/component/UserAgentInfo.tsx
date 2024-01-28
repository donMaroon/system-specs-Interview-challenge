import Laptop from '../assets/undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_(1)_d6br (1).png'

const UserAgentInfo = () => {
  const userAgent = navigator.userAgent;

  return (
    <div>
      <h2 className="useragent-text">User Agent Information:</h2>
      <p className="useragent-text">{userAgent}</p>
      
      <img src={Laptop} alt="" />

    </div>
  );
};

export default UserAgentInfo;