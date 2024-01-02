import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../buttons/CustomButton';

const NewWorkout = () => {
  return (
    <View>
      <View style={WorkoutStyle.Container}>
        <TextInput
          placeholder="Workout title"
          maxLength={40}
          multiline
          style={{left: 10}}
        />
        <TouchableOpacity style={WorkoutStyle.editButton}>
          <Text style={{color: 'blue'}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={WorkoutStyle.Container}>
        <Icon name={'calendar'} size={22} color="#0E0F0F" style={{left: 10}} />
        <Text style={{color: '#0E0F0F', right: 70}}> Date</Text>
        <Icon name={'notifications-outline'} size={22} color="#0E0F0F" />
        <Text style={{color: '#0E0F0F', right: 83}}> Notifications</Text>
      </View>
      <View style={WorkoutStyle.Container}>
        <Icon
          name={'add'}
          size={24}
          color="blue"
          style={{
            left: 10,
            top: 35,
          }}
        />
        <TouchableOpacity>
          <Text style={{color: 'blue', top: 35, right: 298, height: 20}}>
            
            Add Exercise
          </Text>
        </TouchableOpacity>
      </View>
      <CustomButton title={'Create'}></CustomButton>
    </View>
  );
};
const WorkoutStyle = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editButton: {
    height: 32,
    width: 59,
    right: 24,
    borderWidth: 1,
    borderColor: '#1B5DEC',
    borderRadius: 48,
    paddingTop: 5.5,
    paddingLeft: 16.5,
  },
});
export default NewWorkout;
