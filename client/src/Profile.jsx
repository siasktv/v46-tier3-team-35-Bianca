import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const Profile = ({ auth }) => {
  const [profile, setProfile] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await auth.getProfile();
        setProfile(profile);
        setFullName(profile?.fullName || "");
        setEmail(profile?.email || "");
        setImage(profile?.image || "");
      } catch (error) {
        console.error("Error loading profile:", error);
        setError(error);
      }
    };
  
    loadProfile();
  }, []);

  console.log(profile)

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // const handleImageChange = (event) => {
  //   console.log(event.target.files[0])
  //   setImage(event.target.files[0]);
  // };

  const updateUser = async () => {
    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      if (image) {
        formData.append('image', image);
      }
  
      const response = await axios.put(`${BACKEND_URL}/users/${profile?._id}/edit`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 200) {
        setProfile(response.data);
      } else {
        console.error('Error updating user:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteUser = async () => {
    try {
      const response = await axios.delete(`${BACKEND_URL}/users/${profile?._id}/delete`);
      if (response.status === 200) {
        auth.logout();
      } else {
        console.error('Error deleting user:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    profile && (
      <div>
        <div className="bg-white flex flex-col p-8 border m-8 border-[#EAEAEA] rounded-2xl">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Profile</h2>
              <p className="text-[#808080]">
                Settings for your personal profile
              </p>
            </div>
            <div className="flex gap-8">
              <div className="flex justify-center gap-8 items-center">
                <div>
                  <button className="text-[#808080] hover:text-black">
                    Cancel
                  </button>
                </div>
                <div>
                  <button 
                  className="bg-[#0FAE96] text-white font-bold py-2 rounded-lg px-6 hover:bg-[#0F8E86] transform hover:scale-105 transition-all duration-200"
                  onClick={updateUser}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="border border-[#EAEAEA] mt-6 mb-6"></div>
          <h2 className="font-bold">Profile Picture</h2>
          <div className="flex mt-6 justify-between">
            <img
              className="rounded-full w-18 h-18"
              src={profile.image || "https://i.pravatar.cc/300"}
            />
            <div>
              <input type="file" onChange={handleImageChange}/>
              <button className="border-[#EAEAEA] border text-[#808080] hover:transform hover:scale-105 transition-all duration-200 rounded-lg py-2 px-6">
                Upload photo
              </button>
            </div>
          </div> */}
          <div className="flex mt-6 flex-col gap-2">
            <h2 className="font-bold">Full name</h2>
            <input
              className="border-[#EAEAEA] border rounded-lg py-2 px-6"
              value={fullName} 
              onChange={handleFullNameChange}
            />
          </div>

          <div className="flex mt-6 flex-col gap-2">
            <h2 className="font-bold">Email</h2>
            <input
              className="border-[#EAEAEA] border rounded-lg py-2 px-6"
              value={email} 
              onChange={handleEmailChange}
            />
          </div>
        </div>

        <div className="bg-white flex flex-col p-8 border m-8 border-[#EAEAEA] rounded-2xl">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-red-600">Danger Zone</h2>
            <p className="text-[#808080]">Delete user account</p>
          </div>
          <div className="border border-[#EAEAEA] mt-6 mb-6"></div>
          <div className="flex flex-col gap-2">
            <p className="text-[#808080] italic">
              By deleting your account you will loose all your data
            </p>
            <div>
              <button 
              className="border-[#EAEAEA] border text-[#808080] hover:bg-red-600 hover:text-white hover:transform hover:scale-105 transition-all duration-200 rounded-lg py-2 px-6"
              onClick={deleteUser}
              >
                Delete account
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
