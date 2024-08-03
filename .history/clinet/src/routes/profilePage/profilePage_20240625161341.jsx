import { useNavigate } from 'react-router-dom';
import Chat from '../../components/chat/Chat';
import List from '../../components/list/List';
import apiRequest from '../../lib/apiRequest';
import './profilePage.scss';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/Authcontext';

function ProfilePage() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate('/login');
  //   }
  // }, [currentUser, navigate]);
  const { updateUser, currentUser } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      const res = await apiRequest.post('/auth/logout');
      updateUser(null);
      // localStorage.removeItem('user');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={
                  currentUser
                    ? currentUser.avatar
                    : 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button onClick={handleLogout}>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
