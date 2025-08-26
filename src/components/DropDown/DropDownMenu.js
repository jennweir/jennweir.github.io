import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const Bars = styled(FaBars)`
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 2.2rem;
  cursor: pointer;
  text-align: center;
  hover: 
}
`;

export default Bars;