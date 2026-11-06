'use client';

import PortfolioFrame from '../../components/PortfolioFrame';
import PortfolioGallery from '../../components/PortfolioGallery';

const IMAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
  src: `/images/education/Endo-map/Endo-map0${n}.png`,
  alt: `Endodontics map ${n}`,
}));

export default function EndodonticsPage() {
  return (
    <PortfolioFrame title="ENDODONTICS">
      <PortfolioGallery images={IMAGES} />
    </PortfolioFrame>
  );
}
