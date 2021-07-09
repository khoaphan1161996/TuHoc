import {useSelector, useDispatch} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

import {addNewHobby} from '../../actions/hobby'
import {setActiveHobby} from '../../actions/hobby'

import HobbyList from '../../components/HobbyList'

function HomePage() {
    // Cách kết nối react store
    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.activeId)

    // Cách dispatch
    const dispatch = useDispatch()

    // Khi click tạo hobby mới
    const handleAddHobbyClick = () => {
        // Random Hobby Object : id+title
        const newId = uuidv4()
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }

        // Dispatch action
        const action = addNewHobby(newHobby)
        dispatch(action)
    }

    // Khi click active hobby
    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby)
        dispatch(action)
    }

    return (
        <div className="homepage">
            <h1>Home Page</h1>

            <button onClick={handleAddHobbyClick}>Random Hobby</button>
            <HobbyList hobbyList={hobbyList}
            activeId={activeId}
            handleHobbyClick={handleHobbyClick}/>
        </div>
    )
}

export default HomePage