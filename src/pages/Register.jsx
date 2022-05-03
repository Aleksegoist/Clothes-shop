import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3)
        ),
        url('https://i.ibb.co/wQwzy6z/1616606651-27-p-fon-odezhda-29.jpg')
            center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 35%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: '75%' })}
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Regiter = () => {
    return (
        <Container>
            <Wrapper>
                <Title>СОЗДАТЬ АККАУНТ</Title>
                <Form>
                    <Input placeholder='Имя' />
                    <Input placeholder='Фамилия' />
                    <Input placeholder='Имя пользователя' />
                    <Input placeholder='Email' />
                    <Input placeholder='Пароль' />
                    <Input placeholder='Подтвердить пароль' />
                    <Agreement>
                        Создавая аккаунт, я подтверждаю свои действия согласно с{' '}
                        <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>СОЗДАТЬ</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Regiter;
