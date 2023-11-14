import { useEffect, useState } from "react";

export const Profile = ({ auth }) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const loadUserProfile = () => {
      auth.getProfile((profile, error) => {
      if (error) {
        console.error('Error loading profile:', error);
        setError(error);
      } else {
        setProfile({ profile, error });
      }
    });
  };

  useEffect(() => {
    loadUserProfile();
  }, []);
 

  return (
    profile && (
      <div>
       <div className="bg-white flex flex-col p-8 border m-8 border-[#EAEAEA] rounded-2xl">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Profile</h2>
            <p className="text-[#808080]">Settings for your personal profile</p>
          </div>
          <div className="flex gap-8">
            <div className="flex justify-center gap-8 items-center">
            <div>
            <button className="text-[#808080] hover:text-black">Cancel</button>
            </div>
            <div>
            <button className="bg-[#0FAE96] text-white font-bold py-2 rounded-lg px-6 hover:bg-[#0F8E86] transform hover:scale-105 transition-all duration-200">Save</button>
            </div>
            </div>
          </div>
        </div>
        <div className="border border-[#EAEAEA] mt-6 mb-6"></div>
        <h2 className="font-bold">Profile Picture</h2>
        <div className="flex mt-6 justify-between">
          <img className="rounded-full w-18 h-18" src={profile.profile.picture}/>
          <div>
          <button className="border-[#EAEAEA] border text-[#808080] hover:transform hover:scale-105 transition-all duration-200 rounded-lg py-2 px-6">Upload photo</button>
          </div>
        </div>
        <div className="flex mt-6 flex-col gap-2">
          <h2 className="font-bold">Full name</h2>
          <input
          className="border-[#EAEAEA] border rounded-lg py-2 px-6"
          value={profile?.profile?.name || ''}
          />
        </div>

        <div className="flex mt-6 flex-col gap-2">
          <h2 className="font-bold">Email</h2>
          <input
          className="border-[#EAEAEA] border rounded-lg py-2 px-6"
          value={profile?.profile?.email || ''}
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
          <p className="text-[#808080] italic">By deleting your account you will loose all your data</p>
          <div>
          <button className="border-[#EAEAEA] border text-[#808080] hover:bg-red-600 hover:text-white hover:transform hover:scale-105 transition-all duration-200 rounded-lg py-2 px-6">Delete account</button>
          </div>
        </div>
      </div>
      </div>
     
    )
  );
};
