import React, { useState } from 'react'


const TodoList = () => {
    const [data, setData] = useState('')
    const [todo, setTodo] = useState([])

    const addTodo = () => {
        if (data.length === 0) {
            alert('Entr data')
        } else {
            setTodo([...todo, data])
            setData('')
        }
    }

    const removeTodo = (id) => {
        console.log(id);
        const newData = todo.filter((ele, ind) => {
            return ind !== id
        })
        setTodo(newData)
    }

    const allRemove = () => {
        // console.log('first')
        setTodo([])
    }

    return (
        <>
            <div className='text-center mt-16 mx-auto w-[33%] '>
                <input id='userData' type="text" placeholder='✍️ entr routine' className='py-2 px-4 rounded-lg'
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <button className='bg-white ml-5 rounded-md p-1' onClick={addTodo}>ADD</button>

                {
                    todo.map((valu, ind) => {

                        return (
                            <>

                                <div className='flex justify-center my-3' key={ind}>

                                    <h3 className='bg-slate-100 rounded-md text-left px-4 py-2 w-[40%] '
                                    >{valu}</h3>


                                    <button className='bg-[red]  text-white rounded-md ml-3 p-1' onClick={() => removeTodo(ind)}>remove</button>

                                </div>


                            </>
                        )
                    })
                }



            </div>
            <div className='flex justify-center'>

                <button className='text-white bg-red-600 mt-3 rounded-md p-1' onClick={allRemove}>RemoveAll</button>
            </div>
        </>
    )
}

export default TodoList