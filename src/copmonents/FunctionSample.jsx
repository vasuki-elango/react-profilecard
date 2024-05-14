import PropTypes from 'prop-types';

export const FunctionSample = (props) => {
    const {handleClick} = props;
  return (
    <div>
        <p>Functional Components</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

FunctionSample.protoTypes ={
    handleClick: PropTypes.func.isRequired,
}