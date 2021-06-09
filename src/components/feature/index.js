import React from 'react';
import { Container, Title, SubTitle } from './styles/feature';

export default function feature ({ children, ...restProps}) {
    return <Container { ...restProps}>{children}</Container>
}

feature.Title = function FeatureTitle ({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
};

feature.SubTitle = function FeatureSubTitle ({ children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
};
