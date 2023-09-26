import PropTypes from 'prop-types';

function Button({text}) {
    return (
        <button>
            {text}
        </button>
    );
  }

  Button.propTypes = {
    text : PropTypes.string
  };
  
  export default Button;
  