import type ZoomLevel from '~/pages/home/ZoomLevel';
import { defaultZoomLevel } from '~/pages/home/zoomLevels';
import useStoredState from '~/utils/useStoredState';

const getDefaultZoomLevel = () => {
  return defaultZoomLevel;
};

const useZoomLevel = () => {
  const result = useStoredState<ZoomLevel>({
    getDefaultValue: getDefaultZoomLevel,
    key: 'zoom-level',
  });

  return result;
};

export default useZoomLevel;
