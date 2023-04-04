// Write your code here
import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  render() {
    const {appItemDetails} = this.props
    const {appName, imageUrl} = appItemDetails
    return (
      <li className="appItem_cont">
        <img src={imageUrl} alt={appName} className="appImages" />
        <p className="appName">{appName}</p>
      </li>
    )
  }
}
export default AppItem
