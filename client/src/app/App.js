import { AuthProvider, FirebaseProvider, FirestoreProvider } from './contexts/firebase';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import * as Routes from './routes';
import { HomePage, MoviesPage, SearchPage, AccountPage, NotFoundPage, MovieDetailPage } from './pages';
import './App.module.scss'
import styled, {ThemeProvider} from 'styled-components';
import ThemeToggle from './components/themeToggle/ThemeToggle';

/* styled component for toggle */
const lightTheme = {
  primary: '#F5F5F5',
  secondary: '#FBFBFB',
  textColor: '#080808'
}

const darkTheme = {
  primary: '#080808',
  secondary: '#181818',
  textColor: '#FBFBFB'
}

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
`;

/* Main application */
function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleOnThemeChange = (isSelected) => {
    setIsDarkMode(isSelected);
  }


  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppContainer>

        <FirebaseProvider>
          <AuthProvider>
            <FirestoreProvider>

              <ThemeToggle onThemeChange={handleOnThemeChange} />

              <Router>
                <Switch>
                  <Route exact path={Routes.MOVIES}>
                    <MoviesPage />
                  </Route>
                  <Route path={Routes.MOVIE_DETAILS}>
                    <MovieDetailPage/>
                  </Route>
                  <Route exact path={Routes.SEARCH}>
                    <SearchPage />
                  </Route>
                  <Route exact path={Routes.ACCOUNT}>
                    <AccountPage />
                  </Route>
                  <Redirect from={Routes.HOME} to={Routes.LANDING}></Redirect>
                  <Route exact path={Routes.LANDING}>
                    <HomePage />
                  </Route>
                  <Route>
                    <NotFoundPage />
                  </Route>
                </Switch>      
              </Router>
            </FirestoreProvider>
          </AuthProvider>
        </FirebaseProvider>

      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
