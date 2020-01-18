import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';

import Signin from '~/pages/SignIn';
import { signInRequest } from '~/store/modules/auth/actions';

jest.mock('react-redux');

describe('Signin Page', () => {
  it('should be able to sign in', () => {
    useSelector.mockImplementation(cb => cb({ auth: { loading: false } }));

    const dispatch = jest.fn();
    const handleSubmit = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(<Signin />);

    fireEvent.changeText(getByTestId('id-input'), '14');
    fireEvent.press(getByTestId('button'));

    expect(handleSubmit).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(signInRequest(14));
  });
});
