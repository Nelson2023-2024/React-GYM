import './notfound.css'

import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className="section">
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to={'/'} className='btn'>Go To HomePage</Link>
      </div>
    </div>
  )
}

export default Notfound
