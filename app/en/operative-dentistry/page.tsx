'use client';

import PortfolioFrame from '../../components/PortfolioFrame';
import PortfolioGallery from '../../components/PortfolioGallery';

const IMAGES = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  src: `/images/education/OD-map/OD-map0${n}.png`,
  alt: `Operative dentistry map ${n}`,
}));

export default function OperativeDentistryPage() {
  return (
    <PortfolioFrame title="OPERATIVE DENTISTRY">
      <PortfolioGallery images={IMAGES} />
    </PortfolioFrame>
  );
}
