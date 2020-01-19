import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
	font-family: 'Open Sans Codensed';
    padding: 20px 60px;

//if app is below this width, render the instruction below.    
    @medias screen and (max-width 800px) {
        padding: 10px;
    }
}

a {
	text-decoration: none;
	color: black;
}

/*this universal selector below enables us to make every element have a universal box-sizing to be border box*/
* {
	box-sizing: border-box;
}
`;