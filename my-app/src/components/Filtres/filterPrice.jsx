import React from 'react';
//LIBRARY
import { Slider } from 'antd';
//STYLES
import styles from "./PriceFilter.module.css";
import { useDispatch } from 'react-redux';
import { filterByPrice } from '../../redux/actions/categoriesActions';

const FilterPrice = () => {
  const [sliderValues, setSliderValues] = React.useState([150, 10000]);

  const dispatch = useDispatch();

  const handleSliderChange = (values) => {
    setSliderValues(values);
    dispatch(filterByPrice(values));
  };

  return (
    <div className={styles.price}>
      <h4>Filtrar por precio: </h4>
      <Slider
  style={{ width: "80%" }}
  range={{ draggableTrack: true }}
  max={10000}
  value={sliderValues}
  onChange={handleSliderChange}
  marks={{ 0: '' }}
  trackStyle={{ backgroundColor: '#ff0000' }}
  
/>
    </div>
  );
};

export default FilterPrice;