import { useState } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import ThemeContext, { Theme } from './contexts/theme';

import SwitchTheme from '@/presentation/components/Layout/SwitchTheme';

import Router from '@/presentation/router';

import theme from '@/presentation/shared/style/theme';
import GlobalStyle from '@/presentation/shared/style/global';

const Main = () => {
	const [currentTheme, setCurrentTheme] = useState(Theme.DARK);

	const toggleThemeHandler = () => {
		setCurrentTheme(currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
	};

	return (
		<ThemeContext.Provider value={{ toggleThemeHandler }}>
			<ThemeProvider theme={theme[currentTheme]}>
				<GlobalStyle />
				<Router />
				<SwitchTheme />
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

render(<Main />, document.getElementById('app'));
