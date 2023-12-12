import { createGlobalStyle } from 'styled-components'

export const cores = {
  blue: '#00A8FF',
  white: '#fff'
}
export const EstiloGlobal = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-family: 'Roboto Mono', monospace;
  list-style: none;
}

body{
  background-image: radial-gradient(circle at 60.46% 62.47%, #4d666c 0, #31555f 25%, #074250 50%, #003042 75%, #002136 100%);
}
.container{

    width: 1283px;
    margin: 0 auto;
    h1{
      color: #fff;
      padding-top: 5px;

    }


}
`
