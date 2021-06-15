import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    body,
    html,
    a {
        font-family: 'Roboto', sans-serif;
    }

    .blink {
        animation: blink 1s steps(1, end) infinite;
      }
      
    @keyframes blink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
    }
`;

export default Styles;
