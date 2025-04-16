import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel, Slider, Divider, Box, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {getOptions} from "src/services/option.jsx";

const OfferPayment = ({optionsBlocks} ) => {
    const [basePrice, setBasePrice] = useState(200);
    const [baseTime, setBaseTime] = useState(8);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalTime, setTotalTime] = useState(0);


  useEffect(() => {
    calculateTotals();

  }, [selectedOptions]);

  const handleChange = (blockId, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [blockId]: value,
    }));
  };

  const calculateTotals = () => {
    let price = basePrice;
    let time = baseTime;

    let totalPercentChange = 0;


    const processOptions = (blocks) => {
      blocks.forEach((block) => {
        if (block.items) {
          block.items.forEach((item) => {
            const isSelected =
              block.type === "CHECKBOX"
                ? selectedOptions[block.id]?.includes(item.value) // для checkbox
                : selectedOptions[block.id] === item.value; // для select сюда еще надо будет бахнуть выбор ранга

            if (isSelected) {
              price += item.priceChange || 0;
              time += item.timeChange || 0;

              if (item.percentChange) {
                totalPercentChange += item.percentChange;
              }

              if (item.subOptions) {
                processOptions(item.subOptions);
              }
            }
          });
        }

        if (block.type === "SLIDER" && selectedOptions[block.id]) {
          price += (selectedOptions[block.id] - block.min) * block.sliderPriceChange;
        }
      });
    };
    processOptions(optionsBlocks);

    if (totalPercentChange !== 0) {
      price += (price * totalPercentChange) / 100;
    }

    setTotalPrice(price);
    setTotalTime(time);
  };

  const renderOption = (option) => {
      return (
          <div key={option.id} className="mb-5">
              <h3 className="mb-2 font-semibold">{option.title}</h3>

              {option.type === "SELECT" && (
                  <FormControl fullWidth>
                      <InputLabel color="secondary">{option.title}</InputLabel>
                      <Select
                          value={selectedOptions[option.id] || ""}
                          onChange={(e) => handleChange(option.id, e.target.value)}
                          color="secondary"
                      >
                          {option.items.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                  {item.label}
                              </MenuItem>
                          ))}
                      </Select>
                  </FormControl>
              )}

              {option.type === "CHECKBOX" && (
                  <div>
                      {option.items.map((item) => (
                          <FormControlLabel
                              key={item.value}
                              control={
                                  <Checkbox
                                      checked={selectedOptions[option.id]?.includes(item.value) || false}
                                      color="secondary"
                                      onChange={(e) => {
                                          const currentValues = selectedOptions[option.id] || [];
                                          const newValues = e.target.checked
                                              ? [...currentValues, item.value]
                                              : currentValues.filter((v) => v !== item.value);
                                          handleChange(option.id, newValues);
                                      }}
                                  />
                              }
                              label={item.label}
                          />
                      ))}
                  </div>
              )}

              {option.type === "BUTTONS" && (
                  <Box>
                      {option.items.map((item) => (
                          <Button sx={{m: 1}} key={item.value} value={item.value}
                                  variant={selectedOptions[option.id]?.includes(item.value)? "contained": "outlined"}
                                  onClick={() => handleChange(option.id, item.value)}
                          >
                              {item.label}
                          </Button>
                      ))}
                  </Box>
              )}

              {option.type === "SLIDER" && (
                  <Slider
                      marks
                      valueLabelDisplay="auto"
                      value={selectedOptions[option.id] || option.min}
                      min={option.min}
                      max={option.max}
                      getAriaValueText={(value) => value}
                      step={option.step}
                      onChange={(_, value) => handleChange(option.id, value)}
                      aria-labelledby="slider"
                      color="secondary"
                  />
              )}
          </div>
      );
  }



  const renderOptions = (optionsBlocks) => {
      console.log(optionsBlocks);

    const run = (acc, aa) => {
        if (aa.length === 0) {
            return acc;
        }

        const block = aa[0];
        console.log(block);
        acc.push(renderOption(block));


        if (block.items) {
            block.items.forEach((item) => {
                const isSelected = block.type === "CHECKBOX"
                    ? selectedOptions[block.id]?.includes(item.value)
                    : selectedOptions[block.id] === item.value;
                if (item.subOptions && item.subOptions.length !== 0 && isSelected) {
                    run(acc, item.subOptions);
                }
            });
        }


        return run(acc, aa.slice(1));
    };

    return run([], optionsBlocks);
};

  return (
    <div className= "m-2 mt-7 min-w-[300px] max-w-[400px] rounded-xl bg-surface" >
      <div className="relative z-0">
        <img
          src="https://overgear.com/cdn-cgi/image/width=360,quality=85,format=auto/cdn/uploads/2de1aabf7251e876e2b4f9583fcfcac8.jpeg"
          alt="background"
          className="w-full h-full object-cover opacity-100 rounded-xl"
        />
        <div className="absolute inset-0 h-[calc(100%)] bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none" />
      </div>
      <div className=" relative -mt-40 z-20 p-5 text-white rounded-xl">
        {renderOptions(optionsBlocks)}
        <Divider />
        <div className="flex flex-col">
          <div className="my-5">
            <h3 className="font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
            <h3 className="font-bold">Estimated Time: {totalTime} hours</h3>
          </div>
          <Button variant="contained"
            startIcon={<ShoppingCartOutlinedIcon/>}
          >
            Add to cart
          </Button>
        </div>
      </div>

    </div>
  );
};

export default OfferPayment;
