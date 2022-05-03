import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 8px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex:
    align-items: center;

`;

const Payment = styled.img`
    width: 60%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>AY.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero quam quasi corporis neque qui id tempora! Delectus
                    quidem, rerum optio, harum minus dolores velit, voluptates
                    nisi eveniet debitis omnis expedita.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacts</Title>
                <ContactItem>
                    <MapIcon
                        sx={{
                            marginRight: '10px',
                            marginBottom: '-6px',
                        }}
                    />
                    03524 Kyiv, Bankova str. 1
                </ContactItem>
                <ContactItem>
                    <PhoneIcon
                        sx={{ marginRight: '10px', marginBottom: '-6px' }}
                    />
                    +38 (048) 458-56-55
                </ContactItem>
                <ContactItem>
                    <EmailOutlinedIcon
                        sx={{ marginRight: '10px', marginBottom: '-6px' }}
                    />
                    avtozakaz82@gmail.com
                </ContactItem>
                <Payment src='https://i.ibb.co/zRWZqfg/11597193844xtj2mnv37b.png' />
            </Right>
        </Container>
    );
};

export default Footer;
