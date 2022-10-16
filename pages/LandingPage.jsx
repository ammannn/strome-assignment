import styled from 'styled-components';
import Button from './components/Button';
import Icon from './components/Icon';
import Input from './components/Input';

//icons
import { FaGoogle, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

// images
import GunChar from '../public/Assests/mainChar.png';
import GunCharBackground from '../public/Assests/background2.png';
import logo from '../public/Assests/logo.png';
import skull from '../public/Assests/skull.png';

function LandingPage({ email, setEmail, handleSignIn, googleLogin }) {
  const GoogleBackground =
    'linear-gradient(to right, #fff 0%, #fff 40%, #fff 100%)';
  const FacebookBackground =
    'linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)';
  const InstagramBackground =
    'linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)';
  const TwitterBackground =
    'linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)';

  return (
    <MainContainer>
      <img
        src={logo && logo.src}
        style={{ position: 'absolute', top: 20, left: 20, height: 60 }}
      />

      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
          justifyContent: 'center',
        }}
      >
        <LeftContrainer>
          <img
            src={skull && skull.src}
            style={{
              position: 'absolute',
              zIndex: -1,
              height: '100%',
              bottom: -300,
              left: -130,
              opacity: '0.1',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              minWidth: '50%',
            }}
          >
            <text style={{ fontWeight: 'bold', fontSize: '30px' }}>Rador</text>
            <text
              style={{
                fontWeight: 'bold',
                fontSize: '30px',
                letterSpacing: '0.1rem',
                marginTop: 20,
              }}
            >
              Welcome BacK!
            </text>
            <text
              style={{
                fontSize: '17px',
                letterSpacing: '0.1rem',
                color: '#707070',
                marginTop: 5,
              }}
            >
              Sign in to{' '}
              <span style={{ fontWeight: 'bold', color: '#fff' }}>
                Royal Gaming Store
              </span>
            </text>
            <Input
              type="text"
              placeholder="Email"
              email={email}
              setEmail={setEmail}
            />
            <text
              style={{
                fontSize: '14px',
                letterSpacing: '0.1rem',
                color: '#707070',
                marginTop: 10,
              }}
            >
              You will get access to the
            </text>
            <text
              style={{
                fontSize: '14px',
                letterSpacing: '0.1rem',
                color: '#707070',
              }}
            >
              public information and account options.
            </text>
            <Button content="Continue" onClickFunction={handleSignIn} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 30,
              }}
            >
              <div
                style={{
                  width: '100%',

                  borderTop: '1px solid #707070',
                }}
              ></div>
            </div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <IconsContainer>
                <Icon onClickFuntion={googleLogin} color={GoogleBackground}>
                  <FaGoogle style={{ filter: 'invert(100%)' }} />
                </Icon>
                <Icon color={FacebookBackground}>
                  <FaFacebookF />
                </Icon>
                <Icon color={InstagramBackground}>
                  <FaInstagram />
                </Icon>
                <Icon color={TwitterBackground}>
                  <FaTwitter />
                </Icon>
              </IconsContainer>
            </div>
          </div>
        </LeftContrainer>
        <RightContainer>
          <div
            style={{
              width: '35%',
              height: '80%',
              position: 'absolute',
              // zIndex: -1,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                transform: 'skew(-15deg)',
                objectFit: 'cover',
                top: 50,
                right: 100,
                backgroundColor: 'red',
                opacity: 0.5,
                filter: 'blur(5.5px)',
              }}
            ></div>
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                transform: 'skew(-15deg)',
                objectFit: 'cover',
              }}
            >
              <img
                src={GunCharBackground && GunCharBackground.src}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'red',
                  objectFit: 'cover',
                  opacity: 0.5,
                  filter: 'blur(0.5px)',
                }}
              />
            </div>
          </div>
          <img
            style={{ height: '80%', position: 'absolute' }}
            src={GunChar && GunChar.src}
          />
          <div
            style={{
              width: '32%',
              height: '6%',
              background: 'rgba(240, 240, 240, 0.2)',
              position: 'absolute',
              bottom: '20%',
              right: '30%',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              padding: 5,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <text
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  fontSize: '10px',
                }}
              >
                5:19pm
              </text>
              <img
                style={{
                  borderRadius: '50%',
                  width: '14%',
                  height: '80%',
                  marginLeft: 5,
                  objectFit: 'cover',
                }}
                src="https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbWVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              />
              <div
                style={{
                  dispay: 'flex',
                  flexDirection: 'column',
                  marginLeft: 10,
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}
                >
                  Michael
                </div>
                <div style={{ fontSize: '10px' }}>Loved to play!</div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '32%',
              height: '6%',
              background: 'rgba(240, 240, 240, 0.2)',

              position: 'absolute',
              bottom: '12%',
              right: '20%',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              padding: 5,
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <text
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  fontSize: '10px',
                }}
              >
                7:30AM
              </text>
              <img
                style={{
                  borderRadius: '50%',
                  width: '14%',
                  height: '80%',
                  marginLeft: 5,
                  objectFit: 'cover',
                }}
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDhcs5krV82Pci-szxsZFyFdnE-XUrdtiiwyvxT0tuMxhUgYJhPXyN34T_ELFGRaMpyQ&usqp=CAU'
                }
              />
              <div
                style={{
                  dispay: 'flex',
                  flexDirection: 'column',
                  marginLeft: 10,
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}
                >
                  Shino
                </div>
                <div style={{ fontSize: '10px' }}>Amazingggg!</div>
              </div>
            </div>
          </div>
        </RightContainer>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: rgba(37, 35, 36, 0.15);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(8.5px);
  color: #ffffff;
  // text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 100vw;
    height: 100vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 100vw;
    height: 100vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 100vw;
    height: 100vh;
  }

  @media only screen and (min-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    height: 100vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 100vw;
    height: 100vh;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  width: 80%;
  margin-top: 20px;
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-item: cebter;
  position: relative;

  @media only screen and (max-width: 320px) {
    display: none;
  }
  @media only screen and (min-width: 360px) {
    display: none;
  }
  @media only screen and (min-width: 411px) {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
  }
  @media only screen and (min-width: 1280px) {
    display: flex;
  }
`;

const LeftContrainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-item: cebter;
  position: relative;

  @media only screen and (max-width: 320px) {
    width: 80%;
  }
  @media only screen and (min-width: 360px) {
    width: 80%;
  }
  @media only screen and (min-width: 411px) {
    width: 95%;
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
  @media only screen and (min-width: 1280px) {
    width: 50%;
  }
`;

export default LandingPage;
