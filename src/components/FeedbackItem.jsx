import PropTypes from 'prop-types'
import { useState } from "react"
import Card from "./shared/Card"

function FeedbackItem({item}) {
  console.log(item)
  return (
    // <Card reverse={true}>
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
