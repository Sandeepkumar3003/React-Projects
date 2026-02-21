

function ProfileCard(props){
    // const name = "Alice";
    const sum = props.num + 1;
    return(
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Num: {sum}</h3>
            <h3>Status: {props.isMember ? "Active Member" : "Guest"}</h3>
        </div>
    );
}

export default ProfileCard;