import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './Card.style';
import {Zone} from '../types/models';

export interface CardProps extends Zone {
  onPress?: ({id, name}: {id: number; name: string}) => void;
}

const Card = ({id, name, icon, suspended, status, onPress}: CardProps) => {
  return (
    <TouchableOpacity key={id} onPress={() => onPress?.call(null, {id, name})}>
      <View style={Styles.containerStyle}>
        <Text style={[Styles.textXLStyle]}> {name}</Text>
        <View style={Styles.dateContainerStyle}>
          <Text style={[Styles.textLGStyle]}>
            {' '}
            {status.running ? 'YES' : 'NO'}
          </Text>
          <Text style={[Styles.textLGStyle]}> {suspended}</Text>
        </View>
        <Text style={[Styles.textSMStyle]}>{icon.fileName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
