import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const MCOptions = ({ options, getSelectedValue, next }) => {
  var radio_props = options.map((option) => {
    return { label: option, value: option };
  });
  // var radio_props = [{ label: text, value: text }];
  const [selectedValue, setselectedValue] = useState(null);
  useEffect(() => {
    getSelectedValue(selectedValue);
  }, [selectedValue]);
  return (
    <View>
      <RadioForm
        radio_props={radio_props}
        onPress={(value) => {
          setselectedValue(value);
          next();
        }}
      />
    </View>
  );
};

export default MCOptions;
