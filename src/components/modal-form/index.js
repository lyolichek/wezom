import React, { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import { useUser } from '../../hooks/useUser';
import { useRoute } from '../../hooks/useRoute';
import { TextField } from '../text-field';
import {
    StyledWrap,
    StyledContainer,
    StyledHeader,
    StyledContent,
    StyledFieldSet,
    StyledButtonContainer,
    StyledButton
} from './styled';

export const ModalForm = (props) => {
    const { userLogin, updateIsLogged } = useUser();
    const routeTo = useRoute('/profile');
    const ref = useRef();

    useEffect(() => {
        document.addEventListener('mousedown', checkIfClickedOutside);
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside)
        }
    }, []);

    const checkIfClickedOutside = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            props.onPopupClose();
        }
    };

    const onPopupClose = () => {
        props.onPopupClose();
    };

    const onSubmit = (values) => {
        props.onPopupClose();
        updateIsLogged(true);
        userLogin(values);
        routeTo();
    };

    return (
        <StyledWrap>
            <StyledContainer ref={ref}>
                <StyledHeader>
                    <h3>Sign In</h3>
                </StyledHeader>
                <StyledContent>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        onSubmit={onSubmit}
                    >
                        {props => {
                            return (
                                <form onSubmit={props.handleSubmit}>
                                    <StyledFieldSet>
                                        <TextField
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={props.handleChange}
                                            value={props.values.email}
                                        />
                                        <small>Type any valid email</small>
                                    </StyledFieldSet>

                                    <StyledFieldSet>
                                        <TextField
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            onChange={props.handleChange}
                                            value={props.values.password}
                                        />
                                    </StyledFieldSet>

                                    <StyledButtonContainer>
                                        <StyledButton
                                            type="submit"
                                            className="primary"
                                        >
                                            Sign In
                                        </StyledButton>
                                        <StyledButton
                                            className="cancel"
                                            type="reset"
                                            onClick={onPopupClose}
                                        >
                                            Cancel
                                        </StyledButton>
                                    </StyledButtonContainer>
                                </form>
                            )
                        }}
                    </Formik>
                </StyledContent>
            </StyledContainer>
        </StyledWrap>
    )
};
