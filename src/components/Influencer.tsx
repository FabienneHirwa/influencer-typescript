import './body.css';
import Follow from "./follow";


type InfluencerType = {
    profilePicture: string;
    username: string;
    userId: number;
    biography: string;
    
}

export interface InfluencerProps {
    influencer: InfluencerType;
}

const Influencer = ({ influencer, }: InfluencerProps) => {

    const { profilePicture, username, biography } = influencer;

    return (
        <div>
            
      <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" id='container'>
    <div className="flex flex-col items-center pb-10 pt-3" id='user_card'>
        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={`${profilePicture}`} alt="image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">@{username}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{biography}</span>
        
                <Follow/>
       
    </div>
</div>
      

      </div>
       
      
    )
}

export default Influencer;