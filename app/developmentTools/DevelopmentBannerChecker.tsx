import StickyFrameContent from '~/utils/stickyFrames/StickyFrameContent';
import DevelopmentBanner from './DevelopmentBanner';
import useDevelopmentTools from './useDevelopmentTools';

const DevelopmentBannerChecker = () => {
  const developmentTools = useDevelopmentTools();

  if (!developmentTools.banner.isOpen) {
    return null;
  };

  return (
    <StickyFrameContent target="content-top">
      <DevelopmentBanner />
    </StickyFrameContent>
  );
};

export default DevelopmentBannerChecker;
