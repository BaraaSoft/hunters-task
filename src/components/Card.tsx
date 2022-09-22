import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './Card.style';
import {Zone} from '../types/models';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../common/colors';

export interface CardProps extends Zone {
  onPress?: ({id, name}: {id: number; name: string}) => void;
}

const Card = ({id, name, icon, suspended, status, onPress}: CardProps) => {
  return (
    <TouchableOpacity key={id} onPress={() => onPress?.call(null, {id, name})}>
      <View style={Styles.containerStyle}>
        <Text style={[Styles.textXLStyle]}> {name}</Text>
        <View style={Styles.statusContainerStyle}>
          <Text style={[Styles.textLGStyle]}>
            {status.running ? 'YES' : 'NO'}
          </Text>
          <Text style={[Styles.textLGStyle]}>
            {suspended ? 'Suspended' : 'Not Suspended '}
          </Text>
        </View>
        {icon.fileName ? (
          <Ionicons name="leaf-outline" size={68} style={Styles.iconStyle} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
