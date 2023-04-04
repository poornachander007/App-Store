// Write your code here
import {Component} from 'react'

import './index.css'

class TabItem extends Component {
  onClickTabItem = () => {
    const {tabItems, onClickTab} = this.props
    const {tabId} = tabItems
    onClickTab(tabId)
  }

  render() {
    const {tabItems, isActive} = this.props
    const activeTabClassName = isActive ? 'active-tab-item' : ''
    const {displayText} = tabItems

    return (
      <li>
        <button
          type="button"
          className={`tabButton ${activeTabClassName}`}
          onClick={this.onClickTabItem}
        >
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabItem
