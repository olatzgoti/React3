import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {

const [data, setData] = useState({name: "", email: "", age:""})
const [btnDisabled, setBtnDisabled] = useState(true)
const [message, setMessage] = useState("")
const navigate = useNavigate()
const initialState = { name: '', email: '', age: '' }
const clearForm =()=>{ setData({...initialState})}

const handleInputChange = (event)=>{
  if(data.name.length<4)
  {setMessage("There are missing characters")
  setBtnDisabled(true)
  }
  else
  {
    setMessage(null)
    setBtnDisabled(false)
  }
  setData({...data, [event.target.name]: event.target.name})
}

const handleSubmit = (e)=>
{
  e.preventDefault()
  console.log(`sending data : ${data.name}, ${data.email}, ${data.age}`)
  clearForm()
  setTimeout(()=>{ navigate('/')}, 1000)
}

return ( 
  <>
  <form onSubmit={handleSubmit}>

    <input type="text"  value={data.name} onChange={handleInputChange} />

    <input type="email" placeholder="email" value={data.email} onChange={handleInputChange} />
    <input type="text" placeholder='age' value={data.age} onChange={handleInputChange}/>

    <button type="submit" disabled={btnDisabled}>enviar</button>
    <p>{message}</p>

  </form>
</>
  )
};

export default Contact
/*


	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(`sending data… ${data.name} ${data.email}`)
		clearForm()

		setTimeout(() => {
			navigate('/')
		}, 1000)
	}

	const handleInputChange = (event) => {
		if (data.name.length + 1 < 3) {
			setMessage('Name must be at least 3 characters')
			setBtnDisabled(true)
		} else {
			setMessage(null)
			setBtnDisabled(false)
		}

		setData({
			...data,
			[event.target.name]: event.target.value,
		})
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="name"
					value={data.name}
					onChange={handleInputChange}
					name="name"
				/>
				<input
					type="email"
					placeholder="email"
					value={data.email}
					onChange={handleInputChange}
					name="email"
				/>
				<button type="submit" disabled={btnDisabled}>
					Enviar
				</button>
				<p>{message}</p>
			</form>
		</>
	)
}

export default UserForm*/