import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';


export const CreatePage = () => {
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')
    

    const pressHandler = async event => {
        if(event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {Authorization: `Bearer ${auth.token}`})
                console.log(data)
                window.open(`/detail/${data.link._id}`)
            } catch (e) {
            }
        }
    }

    return (
        <div className="row">
            <div className="col s8  offset-s2" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input placeholder="goni ssulku" id="link" type="text" className="yellow-input" value={link} onChange={e => setLink(e.target.value)} onKeyPress = { pressHandler }/>
                    <label htmlFor="link"></label>
                </div>
            </div>
        </div>
    )
}