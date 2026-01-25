import { useContext } from 'react';
import developmentToolsContext from './developmentToolsContext';

const useDevelopmentTools = () => {
  const developmentTools = useContext(developmentToolsContext);

  return developmentTools;
};

export default useDevelopmentTools;
