import './style.css'

function HobbyList(props) {
    const {hobbyList,activeId} = props;

    const handleHobbyClick = (hobby) => {
        if(props.handleHobbyClick){
            props.handleHobbyClick(hobby);
        }
    }

    return (
        <ul className="hobby-list">
            {hobbyList.map(hobby => (
                <li key={hobby.id} 
                    className= {hobby.id === activeId ? ' active' : ''}
                    onClick={() => handleHobbyClick(hobby)}
                >{hobby.title}</li>
            ))}
        </ul>
    )
}

export default HobbyList