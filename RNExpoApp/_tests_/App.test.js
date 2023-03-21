import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';


import ProfileScreen from '../src/screens/ProfileScreen'
import HomeScreen from '../src/screens/HomeScreen'

describe('HomeScreen', () => {
  it('navigates on button press', () => {
    const push = jest.fn();
    const navigate = jest.fn();
    const { getByText } = render(<HomeScreen navigation={{ navigate }} />);
    fireEvent.press(getByText('Go to Profile'));
    expect(navigate).toHaveBeenCalledWith('Profile');
  });
});