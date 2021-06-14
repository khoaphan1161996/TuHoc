import React,{useState,useEffect} from 'react';
import ColorBox from '../../components/ColorBox'
import TodoList from '../../components/TodoList'
import TodoForm from '../../components/TodoForm'
import PostList from '../../components/PostList'

const HomePage = () => {
    const [todoList,setTodoList] = useState([
        {
            id:1,
            title:'reacthook'
        },
        {
            id:2,
            title:'scss'
        },
        {
            id:3,
            title:'redux'
        }
    ])

    const [postList,setPostList] = useState([])

    useEffect(() => {
        async function fetchPostList() {
            try {
                const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
                const response = await fetch(requestUrl)
                const responseJSON = await response.json()
    
                const {data} = responseJSON
                setPostList(data)
            } catch (error) {
                console.error('Failed to fetch post list: ', error.message)
            }
        }

        fetchPostList()
    },[])


    const handleAddTodoList = (formValues) => {
        const newTodoList = [...todoList]
        const newTodo = {
            id:todoList.length + 1 ,
            ...formValues
        }

        newTodoList.push(newTodo)
        setTodoList(newTodoList)
    }

    const handleDelTodoList = (todo) => {
        const index = todoList.findIndex(todos => todos.id === todo.id)
        if(index < 0) return; // không tìm thấy

        else {
            const newTodoList = [...todoList]
            newTodoList.splice(index,1)
            setTodoList(newTodoList)
        }
    }

    return (
        <div className="home-page">
            {/* <ColorBox /> */}

            <TodoForm handleAddTodoList={handleAddTodoList} />
            <ul className="todo-list">
                {todoList.map(todo => <TodoList todo = {todo} 
                    key = {todo.id}
                    handleDelTodoList = {handleDelTodoList} />)}
            </ul>

            <ul>
               {postList.map(post => <PostList
                    post = {post}
                    key = {post.id}
                />)} 
            </ul>
        </div>
    )
}

export default HomePage