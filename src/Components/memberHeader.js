import styled from 'styled-components';
import ForestRoundedIcon from '@mui/icons-material/ForestRounded';
import ParkRoundedIcon from '@mui/icons-material/ParkRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const HeaderContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c7d36f;
  color: #3f3f3f;
  padding: 10px;
`;

const ElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-weight: 800;
  }
`;

const IconWrapper = styled.div`
  margin: 0px 10px 0px 0px;
`;

const OneLineText = styled.div`
  font-size: 13px;
  margin: 15px 0px 0px 0px;
`;

const TwoLineText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px 0px 0px;
  font-size: 15px;
`;

const MemberHeader = () => (
  <>
    <HeaderContainer>
      <ElementWrapper>
        <IconWrapper>
          <ForestRoundedIcon fontSize="large" />
        </IconWrapper>
        <OneLineText>나누고 나눔 받는 무한 지식 품앗이</OneLineText>
      </ElementWrapper>
      <ElementWrapper>
        <TwoLineText>
          <div>나는야 고수 예린 님!</div>
          <div>오늘도 좋은 하루 보내세요!</div>
        </TwoLineText>
        <IconWrapper>
          <ParkRoundedIcon fontSize="medium" />
        </IconWrapper>
        <LogoutRoundedIcon fontSize="medium" />
      </ElementWrapper>
    </HeaderContainer>
  </>
);

export default MemberHeader;