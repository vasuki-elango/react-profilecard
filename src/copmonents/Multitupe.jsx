import PropTypes from 'prop-types';

export const Multitupe = (props) => {
  return (
    <div>{props.value}</div>
  )
}

Multitupe.propTypes ={
    value: PropTypes.oneOfType([PropTypes.string,PropTypes.number,PropTypes.bool]).isRequired,
}