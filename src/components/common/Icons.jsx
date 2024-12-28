const Icons = ({ iconName, className }) => {
    const icons = {
        arrow: (
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.80957 11.5L6.80957 6.5L1.80957 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        underline: (
            <svg width="26" height="4" viewBox="0 0 26 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.38989 2L24.2778 2" stroke="black" stroke-width="2.35501" stroke-linecap="round" />
            </svg>
        ),
        leftArrow: (
            <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.07781 11.2613L0.870117 6.05364L6.07781 0.845947" stroke="black" stroke-width="1.62464" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    };
    return iconName && icons[iconName];
};

export default Icons;