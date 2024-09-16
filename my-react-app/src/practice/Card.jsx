import profilePic from './assets/profile.jpg'
function Card(){
    return(
        <div className="card">
            <img className= "card-image" src={profilePic}alt="profile picture"></img>
            <h2 className= "card-title">Zain</h2>
            <p className='card-text'>I am a computer science student and I like to workout</p>
        </div>
    );
}
export default Card