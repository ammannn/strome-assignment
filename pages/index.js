import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

// images
import logo from '../public/Assests/logo.png';
import skull from '../public/Assests/skull.png';
import loader from '../public/Assests/loader.gif';

//pages
import LandingPage from './LandingPage';
import HomePage from './HomePage';

export default function Home() {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('loading');

  useEffect(() => {
    loginCheck();
  }, []);

  const loginCheck = async () => {
    setLogin('loading');
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
    const isLoggedIn = await magic.user.isLoggedIn();
    setLogin(isLoggedIn);
  };

  const handleSignIn = async (e) => {
    if (!email) {
      return;
    }
    e.preventDefault();
    setLogin('loading');
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
    const didToken = await magic.auth.loginWithMagicLink({
      email: email,
    });

    setLogin(true);
  };

  const handleLogout = async () => {
    setLogin('loading');
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
    await magic.user.logout();
    setLogin(false);
  };

  const googleLogin = async () => {
    setLogin('loading');
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
      extensions: [new OAuthExtension()],
    });

    await magic.oauth.loginWithRedirect({
      provider: 'google',
      redirectURI: `${window && window.location.origin}/`,
    });
    const result = await magic.oauth.getRedirectResult();
    console.log(result, result.oauth.userInfo, 'CECKKKKKKKK');
  };

  return (
    <MainContainer
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={logo && logo.src}
        style={{ position: 'absolute', top: 20, left: 20, height: 60 }}
      />

      {login === 'loading' ? (
        <>
          <img
            src={loader && loader.src}
            style={{ borderRadius: '50%', opacity: '0.5', height: '50px' }}
          />
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
        </>
      ) : login ? (
        <HomePage handleLogout={handleLogout} />
      ) : (
        <LandingPage
          email={email}
          setEmail={setEmail}
          handleSignIn={handleSignIn}
          googleLogin={googleLogin}
        />
      )}
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
