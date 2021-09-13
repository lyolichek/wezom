import React from 'react';
import { useUser } from '../../hooks/useUser';
import {
    StyledStatistics,
    StyledTitle,
    StyledList,
    StyledItem,
    StyledPoint,
    StyledCount
} from './styled';

export const Statistics = () => {
    const { userData } = useUser();
    const data = userData.contacts;

    const male = data.filter(item => item.gender === 'male');
    const female = data.filter(item => item.gender === 'female');

    return (
        <StyledStatistics>
            <StyledTitle>Statistics</StyledTitle>
            <StyledList>
                <StyledItem>
                    <StyledPoint>Collection size</StyledPoint>
                    <StyledCount>{data.length}</StyledCount>
                </StyledItem>
                <StyledItem>
                    <StyledPoint>Males</StyledPoint>
                    <StyledCount>{male.length}</StyledCount>
                </StyledItem>
                <StyledItem>
                    <StyledPoint>Females</StyledPoint>
                    <StyledCount>{female.length}</StyledCount>
                </StyledItem>
            </StyledList>
        </StyledStatistics>
    )
};
