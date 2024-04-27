// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import GetNotification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="main">
    <div className="content">
      <h1 className="h1">Alert Notifications</h1>

      <div className="cardsContainer">
        <GetNotification type="success">
          <div className="content3">
            <div className="part1">
              <AiFillCheckCircle className="success" />
            </div>
            <div className="part2">
              <h1 className="heading success">Success</h1>
              <p className="para">You can access all the files in the folder</p>
            </div>
          </div>
        </GetNotification>
        <GetNotification type="error">
          <div className="content3">
            <div className="part1">
              <RiErrorWarningFill className="error" />
            </div>
            <div className="part2">
              <h1 className="heading error">Error</h1>
              <p className="para">
                Sorry, you are not Authorized to have access to delete the file
              </p>
            </div>
          </div>
        </GetNotification>
        <GetNotification type="warning">
          <div className="content3">
            <div className="part1">
              <MdWarning className="warning" />
            </div>
            <div className="part2">
              <h1 className="heading warning">Warning</h1>
              <p className="para">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </GetNotification>
        <GetNotification type="info">
          <div className="content3">
            <div className="part1">
              <MdInfo className="info" />
            </div>
            <div className="part2">
              <h1 className="heading info">Info</h1>
              <p className="para">
                Anyone on the Internet can view these files
              </p>
            </div>
          </div>
        </GetNotification>
      </div>
    </div>
  </div>
)

export default AlertNotifications
