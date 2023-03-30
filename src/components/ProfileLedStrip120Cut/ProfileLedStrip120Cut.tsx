import LedStrip120Cut from "./LedStrip120Cut";
import Profile from "./Profile";
import Scene from "./Scene";


const ProfileLedStrip120Cut = () => {
  return (
    <Scene>
      <Profile />
      <LedStrip120Cut position={[0,0,1.2]} />
    </Scene>
  );
};

export default ProfileLedStrip120Cut;
