import PropTypes from 'prop-types';

const UserData =[
    {
        name:"Aadhaya",
        city:"New York",
        job :"ui/ux desginer",
        online:false,
        skills : ["html","css","javascript","sql","ui/ux interface","java","Adobe-xd","figma"],
        profile : "images/person1.jpeg",
    },
    {
        name:"Emily Jack",
        city:"India",
        job :"software developer",
        online:true,
        skills : ["java","rupy","javascript","sql","c#","communication","network-security"],
        profile : "images/person2.jpeg",
    },
    {
        name:"Aadarsh",
        city:"china",
        job :"fullstack developer",
        online:false,
        skills : ["html","css","javascript","sql","react js","python","Node js","Git/github"],
        profile : "images/person3.jpeg",
    },
    {
        name:"Inaya",
        city:"South Korea",
        job :"frontend developer",
        online:true,
        skills : ["html","css","javascript","sql","ui/ux inferface","react js","python"],
        profile : "images/person2.jpeg",
    },
]

function User(props) {
    return(
        <div className="card-container">
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} alt="person-1" className="img"/>
            <h3 className="name">{props.name}</h3>
            <p className="city">{props.city}</p>
            <h4 className="job">{props.job}</h4>
            <div className="button-container">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skill-conatiner">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill,key) => ((<li key={key}>{skill}</li>)))}
                </ul>
            </div>
        </div>
    )
}

export const UserCard = () => {
  return (     
    <>
        {UserData.map((user,index)=>(
            <User key={index} name={user.name} city={user.city} job={user.job} online={user.online} profile={user.profile} skills={user.skills}/>
        ))}
    </>
  )
}

User.propTypes ={
    name : PropTypes.string.isRequired,
    city : PropTypes.string.isRequired,
    job  : PropTypes.string.isRequired,
    online : PropTypes.bool.isRequired,
    skills : PropTypes.arrayOf(PropTypes.string).isRequired,
    profile :PropTypes.string.isRequired,
}