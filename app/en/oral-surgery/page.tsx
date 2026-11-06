'use client';

import PortfolioFrame from '../../components/PortfolioFrame';
import PortfolioGallery from '../../components/PortfolioGallery';

const IMAGES = [1, 2, 3, 4, 5].map((n) => ({
  src: `/images/education/OS-map/OS-map0${n}.png`,
  alt: `Oral surgery map ${n}`,
}));

export default function OralSurgeryPage() {
  return (
    <PortfolioFrame title="ORAL SURGERY">
      <PortfolioGallery images={IMAGES} />
    </PortfolioFrame>
  );
}
