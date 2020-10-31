import React from 'react';
import PropTypes from 'prop-types';

const InfoProducts = ({totalShowing, totalHidden}) => {
    return ( 
        <div>
          <p>Showing <b>{totalShowing}</b> products - Hiden <b>{totalHidden}</b></p>
        </div>
     );
}

InfoProducts.protoTypes = {
  totalShowing : PropTypes.number.isRequired,
  totalHidden : PropTypes.number.isRequired
}
export default InfoProducts;