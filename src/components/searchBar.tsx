import * as React from 'react';
import { getInfluencers } from "../services/influencers";
import Follow from "./follow";
import './body.css';

const SearchBar: React.FC = () => {
    const [userList, setUserList]= React.useState<
    {profilePicture: string, username: string, biography: string;}[] | undefined>(getInfluencers);
    const [text, setText]= React.useState('');
    const handleOnClick = () =>{
        const findUsers = 
        userList && userList?.length > 0 
        ? userList?.filter((u) => u?.username === text )
        : undefined;
        setUserList(findUsers);
    };
    
    return(
        <>
        <div id="searchBox">
            <input  type="text" placeholder="Search an influencer..." value={text} onChange={(e) => setText(e.target.value)}/>
            <button className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' disabled={!text} onClick={handleOnClick}>Search</button>
        </div>
        <div>
            {userList &&
            userList?.length > 0 &&
            userList?.map((getInfluencers) => {
                return(
                    <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" id='container'>
                    <div className="flex flex-col items-center pb-10 pt-3" id='user_card'>
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={getInfluencers?.profilePicture} alt="image"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">@{getInfluencers?.username}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{getInfluencers?.biography}</span>
                        <div className="flex mt-4 space-x-3 lg:mt-6" id='count_p'>
                            <button   className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <Follow/>
                            </button>
                        </div>
                    </div>
                    </div>
                    )
            })

            }
      

        </div>
        </>
    )
}
export default SearchBar;
