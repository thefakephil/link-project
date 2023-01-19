import SocialButtons from '../components/social-buttons'

export default function Avatar() {
    return (
        <> 
        <div className="flex items-center space-x-4">
            <img className="w-20 h-20 rounded-full" src="https://gravatar.com/avatar/850a157929cec594429f1912d9278394?s=400&d=robohash&r=x" alt="" />
            <div className="font-medium dark:text-black">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
            </div>
        </div>
        <SocialButtons /> 
        </> 
    )
}