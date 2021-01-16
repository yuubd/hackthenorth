import styled from 'styled-components'

const Box = styled.div`
    width: ${({w}) => w}px;
    height: ${({h}) => h}px;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    @media (max-width: 768px) {
        width: 100%;
        height: ${({fixed, h}) => fixed ? `${h}px` : 'auto'};
        margin-bottom: 5px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`

export default Box
