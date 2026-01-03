import type ZoomLevel from './ZoomLevel';

const zoomLevels = [
  'extra-small',
  'small',
  'regular',
  'large',
  'extra large',
] as const;

export const defaultZoomLevel = 'regular' as ZoomLevel;

export default zoomLevels;
