import PropTypes from 'prop-types'

function Card({children, reverse}) {
  const cardClass = reverse ? 'card reverse' : 'card';
  return (
    <div className={cardClass} >{children}</div>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  revers: PropTypes.bool
}

export default Card