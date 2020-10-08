import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Box, Container } from '@modulz/design-system';
import { Overview } from '../components/Overview';
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { CopyToast, CopyToastVisibility } from '../components/CopyToast';
import { Cross1Icon, HamburgerMenuIcon } from '@modulz/radix-icons';
import { ChromelessButton } from '../components/ChromelessButton';

export default function Home() {
  const darkMode = useDarkMode();

  const [menuIsVisible, setMenuIsVisible] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState('');
  const [toastIsVisible, setToastIsVisible] = React.useState(false);
  const [toastIcon, setToastIcon] = React.useState('');
  const [toastTimeout, setToastTimeout] = React.useState<ReturnType<typeof setTimeout>>();

  const setToastIsVisibleTimeout = () => {
    setToastIsVisible(true);
    clearTimeout(toastTimeout);
    setToastTimeout(setTimeout(() => setToastIsVisible(false), 3000));
  };

  const escListener = React.useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setMenuIsVisible(false);
    }
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuIsVisible ? 'hidden' : 'visible';

    if (menuIsVisible) {
      document.addEventListener('keydown', escListener);
    } else {
      document.removeEventListener('keydown', escListener);
    }

    return () => {
      document.removeEventListener('keydown', escListener);
    };
  }, [escListener, menuIsVisible]);

  return (
    <CopyToastVisibility.Provider
      value={{
        icon: toastIcon,
        setIcon: setToastIcon,
        isVisible: toastIsVisible,
        setIsVisible: setToastIsVisibleTimeout,
      }}
    >
      <Box>
        <Hero />
        <Menu isVisible={menuIsVisible} />
        <ChromelessButton
          onClick={() => setMenuIsVisible(!menuIsVisible)}
          css={{
            position: 'fixed',
            top: 0,
            left: 0,
            display: 'block',
            cursor: 'pointer',
            padding: '$2',
            margin: '$2',
            borderRadius: '$1',
            zIndex: '$4',
            mixBlendMode: darkMode.value ? 'screen' : 'multiply',
            '&:hover': {
              backgroundColor: darkMode.value ? 'hsl(174, 65%, 14%)' : '$teal300',
            },
            '&:active, &:focus': {
              boxShadow: darkMode.value ? '0 0 0 2px hsl(174, 100%, 28%)' : '0 0 0 2px $teal700',
            },
            bp2: {
              display: 'none',
            },
            svg: {
              width: 25,
              height: 25,
            },
          }}
        >
          {menuIsVisible ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </ChromelessButton>
        <Container size="3" css={{ position: 'relative', marginBottom: 150 }}>
          <Box
            css={{
              background: darkMode.value ? 'hsl(218, 6%, 10%)' : '$loContrast',
              marginBottom: '$5',
              borderRadius: '$2',
              minHeight: 900,
              boxShadow: darkMode.value ? '0 40px 250px -50px black' : '0 40px 250px -50px rgba(0, 0, 0, 0.4)',
              bp2: {
                marginTop: 'calc(30vh + 240px)',
              },
              bp3: {
                marginTop: 'calc(25vh + 260px)',
              },
            }}
          >
            <SearchBar value={searchValue} onValueChange={setSearchValue} />
            <SearchResults value={searchValue} />
            <Box css={{ display: searchValue ? 'none' : 'block' }}>
              <Overview />
            </Box>
          </Box>
        </Container>
        <CopyToast />
      </Box>
    </CopyToastVisibility.Provider>
  );
}