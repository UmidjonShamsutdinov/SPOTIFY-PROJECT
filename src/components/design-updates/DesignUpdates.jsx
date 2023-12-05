import React, { useState } from 'react'
import "./DesignUpdates.scss"
import { Container } from '../../utils/Utils'
import { toast } from 'react-toastify'

const DesignUpdates = () => {
    const [inp, setInp] = useState("")
    const [loading, setLoading] = useState(false) 

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inp.trim().length > 0 ){
            toast.success("Wow so easy!", {
                autoClose: 4000
            })        
            setLoading(true)
        }
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }
  return (
    <div className='design-updates'>
        <Container>
            <div className='design-updates-div'>
                <div className="design__updates-content">
                    <h2>Want Spotify Design updates sent straight to your inbox</h2>
                    <p>{loading && inp}</p>
                </div>
                <div className="design__updates-input">
                    <form className="input" onSubmit={handleSubmit}>
                        <input value={inp} onChange={(e)=>setInp(e.target.value)} type="text" placeholder='We saved a spot for your email'/>
                        <button type='submit'>SEND</button>
                    </form>
                    <p>By clicking send you'll receive occasional emails from Spotify Design. You always have the choice to unsubscribe within every email you receive.</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default DesignUpdates