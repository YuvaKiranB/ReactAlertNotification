// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const GetNotification = props => {
  const {children} = props

  return (
    <div className="card">
      <div className="content2">
        {children}
        <div className="part3">
          <GrFormClose className="close" />
        </div>
      </div>
    </div>
  )
}

export default GetNotification
