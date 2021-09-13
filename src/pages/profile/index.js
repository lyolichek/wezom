import React, { useEffect } from 'react';
import { api } from '../../api';
import { useUser } from '../../hooks/useUser';
import { Title } from '../../components/title'
import {
    StyledProfile,
    StyledContainer,
    StyledHeader,
    StyledMain,
    StyledContent,
    StyledImageContainer,
    StyledName,
    StyledAge,
    StyledList,
    StyledItem,
    StyledLink,
    StyledCountry,
    StyledState
} from './styled';

export const Profile = () => {
    const { userData, addProfile } = useUser();

    useEffect(() => {
        const fetchData = async () => {
            const profile = await api.profile.get();
            addProfile(profile.results[0]);
        };
        fetchData();
    }, []);

    if (!userData.profile) return null;

    const data = userData.profile;

    return (
        <StyledProfile>
            <StyledContainer>
                <StyledHeader>
                    <Title title={'Profile'}/>
                </StyledHeader>

                <StyledMain>
                    <StyledImageContainer>
                        <img src={data.picture.large} alt={`${data.name.first} ${data.name.last}`} />
                    </StyledImageContainer>
                    <StyledContent>
                        <StyledName>{`${data.name.title}. ${data.name.first} ${data.name.last}`}
                            <StyledAge>{` (${data.dob.age} years)`}</StyledAge>
                        </StyledName>
                        <StyledList>
                            <StyledItem>
                                <StyledLink href={`mailto:${data.email}`}>{data.email}</StyledLink>
                            </StyledItem>
                            <StyledItem>
                                <StyledLink href={`tell:+${data.phone}`}>{data.phone}</StyledLink>
                            </StyledItem>
                            <StyledItem>
                                <StyledCountry>{`/${data.location.country}/`}</StyledCountry>
                                {`${data.location.city} ${data.location.street.name} ${data.location.street.number}`}
                            </StyledItem>
                        </StyledList>
                        <StyledState>{data.location.state}</StyledState>
                    </StyledContent>
                </StyledMain>
            </StyledContainer>
        </StyledProfile>
    )
};
