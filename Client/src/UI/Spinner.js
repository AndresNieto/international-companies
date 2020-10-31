import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import PropTypes from 'prop-types'

const Spinner = () => {
    return ( 
        <BeatLoader
          size={15}
          margin={2}
          color={"#9B9B9B"}
          loading={true}
        />
     );
}

Spinner.propTypes = {} 
export default Spinner;