import {Routes, Route} from 'react-router-dom'
import { Cluture, Home, Politics } from '../../pages'

const Pathes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/culture' element={<Cluture/>}/>
                <Route path='/politics' element={<Politics/>}/>
                <Route path='*' element={<h2>Not Found!</h2>}/>
                <Route/>
            </Routes>
        </>
    )
}

export default Pathes