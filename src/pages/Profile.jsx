import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../services/authService";
import { getToken, logout } from "../utils/auth";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = getToken();

        const res = await getProfile(token);

        setUser(res.data);
      } catch {
        alert("Unauthorized");
        navigate("/");
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Profile</h2>

      <p>
        <b>Name:</b> {user.name}
      </p>

      <p>
        <b>Email:</b> {user.email}
      </p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
