import React from 'react';
import { render, fireEvent ,screen} from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen'

describe('HomeScreen', () => {
  it('navigates on button press', () => {
    const navigate = jest.fn();
    render(<HomeScreen navigation={{ navigate }} />);
    fireEvent.press(screen.getByTestId('btnProfile'));
    expect(navigate).toHaveBeenCalledWith('Profile');
  });
});