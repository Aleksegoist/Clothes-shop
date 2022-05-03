import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    ${mobile({ fontSize: '14px' })}
`;

const Announcement = () => {
    return <Container>Super Deal! Free Shopping on Orders Over $50</Container>;
};

export default Announcement;
