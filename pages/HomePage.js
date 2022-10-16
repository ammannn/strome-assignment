import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import styled from 'styled-components';
import { ethers } from 'ethers';
import { Magic } from 'magic-sdk';

//images
import skull from '../public/Assests/skull.png';
import gunCharIn from '../public/Assests/gunCharIn.png';
import logo from '../public/Assests/logo.png';

//icons
import { FaCopy, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function HomePage({ handleLogout }) {
  //states
  const [userInfo, setUserInfo] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [etherBalance, setEtherBalance] = useState(null);

  useEffect(() => {
    getWalletAdrress();
  }, []);

  const getWalletAdrress = async () => {
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
      network: 'goerli',
    });
    const provider = new ethers.providers.Web3Provider(magic.rpcProvider);
    console.log(provider, '########');
    const signer = provider.getSigner();
    const userInfo_ = await magic.user.getMetadata();
    setUserInfo(userInfo_);
    const address = await signer.getAddress();

    // Get user's balance in ether
    const balance = ethers.utils.formatEther(
      await provider.getBalance(address), // Balance is in wei
    );
    setWalletAddress(address);
    setEtherBalance(balance);
    console.log(address, balance);
  };

  return (
    <MainContainer>
      <img
        src={logo && logo.src}
        style={{ position: 'absolute', top: 20, left: 20, height: 60 }}
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
      <CardContainer>
        <CardImage>
          <img
            src={gunCharIn && gunCharIn.src}
            style={{
              height: '100%',
            }}
          />
        </CardImage>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <text>Welcome to Royal Gaming</text>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            marginTop: 20,
            letterSpacing: '2px',
            wordBreak: 'break-all',
            zIndex: 9999999,
          }}
        >
          <text style={{ fontWeight: 'bold' }}>
            {' '}
            Wallet Address:
            <span style={{ color: '#707070', fontWeight: '500' }}>
              {' '}
              {walletAddress}{' '}
              {walletAddress && (
                <FaCopy
                  onClick={() => {
                    navigator.clipboard.writeText(walletAddress);
                  }}
                  style={{ filter: 'invert,(100%)', cursor: 'pointer' }}
                />
              )}
            </span>
          </text>
        </div>
        {userInfo && userInfo.email && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              marginTop: 20,
              letterSpacing: '2px',
              wordBreak: 'break-all',
              zIndex: 9999999,
            }}
          >
            <text style={{ fontWeight: 'bold' }}>
              {' '}
              Email:
              <span style={{ color: '#707070', fontWeight: '500' }}>
                {' '}
                {userInfo && userInfo.email
                  ? userInfo.email
                  : 'example@example.com'}{' '}
              </span>
            </text>
          </div>
        )}

        <div
          style={{
            width: '100%',
            display: 'flex',
            marginTop: 20,
            letterSpacing: '2px',
            wordBreak: 'break-all',
            zIndex: 9999999,
          }}
        >
          <text style={{ fontWeight: 'bold' }}>
            {' '}
            Eth:
            <span style={{ color: '#707070', fontWeight: '500' }}>
              {' '}
              {etherBalance}{' '}
            </span>
          </text>
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 20,
          }}
        >
          {' '}
          <Button content="Logout" onClickFunction={handleLogout} />
        </div>
      </CardContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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

const CardContainer = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  @media only screen and (max-width: 320px) {
    width: 100%;
  }
  @media only screen and (min-width: 360px) {
    width: 95%;
  }
  @media only screen and (min-width: 411px) {
    width: 90%;
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
  @media only screen and (min-width: 1024px) {
    width: 40%;
  }
  @media only screen and (min-width: 1280px) {
    width: 30%;
  }
`;

const CardImage = styled.div`
  position: absolute;
  height: 100%;
  right: -370px;
  @media only screen and (max-width: 320px) {
    visibility: hidden;
  }
  @media only screen and (min-width: 360px) {
    visibility: hidden;
  }
  @media only screen and (min-width: 411px) {
    visibility: hidden;
  }

  @media only screen and (min-width: 768px) {
    visibility: visible;
  }
  @media only screen and (min-width: 1024px) {
    visibility: visible;
  }
  @media only screen and (min-width: 1280px) {
    visibility: visible;
  }
`;
