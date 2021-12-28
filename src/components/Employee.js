import React,{useState} from 'react'
import './Style.css'

export const Employee = () => {
    const [data,setData] = useState(
        {
            username:"",
            department:"",
            rating:""

        }
    )
    const [record , setRecord] = useState([])
    const HandleInput = (e) =>
    {
        const name = e.target.name
        const value = e.target.value


        setData({ ...data, [name]:value});
    }

    const HandleSubmit = (e) =>
    {
        e.preventDefault()
        const newData = { ...data,id:new Date().getTime().toString()}
        console.log(data)


        setRecord([ ...record,newData])

        setData({
            username:"",
            department:"",
            rating:""

        })
        console.log(record)

    }

    return (
        <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form action='' onSubmit={HandleSubmit}>
                <div>
                    <label htmlFor='username'>Name  </label>
                    <br />
                    <input type='text'  value={data.username} onChange={HandleInput} name='username' id='username' />
                </div>

                <div>
                    <label htmlFor='department'>Department  </label>
                    <br />
                    <input type='text'  value={data.department} onChange={HandleInput} name='department' id='department' />
                </div>

                <div>
                    <label htmlFor='rate'>Rating  </label>
                    <br />
                    <input type='text' value={data.rate} onChange={HandleInput}  name='rating' id='rating' />
                </div>
                <button type="submit">Submit</button>

            </form>
            <div>
                {

                }
            </div>

            


        </>
    )
}
