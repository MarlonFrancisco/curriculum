import theme from "./theme";

export const mediaSM = (strings: any) => `
        @media (max-width: ${theme.default.breakpoints.sm}px) {
            ${strings.raw[0]}
        }
    `;

export const mediaMD = (strings: any) => `
        @media (max-width: ${theme.default.breakpoints.md}px) {
            ${strings.raw[0]}
        }
`;

export const mediaLG = (strings: any) => `
        @media (max-width: ${theme.default.breakpoints.lg}px) {
            ${strings.raw[0]}
        }
`;

export const mediaXL = (strings: any) => `
        @media (max-width: ${theme.default.breakpoints.xl}px) {
            ${strings.raw[0]}
        }
`;
