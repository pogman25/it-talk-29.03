import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import counterHOC from '../counterHOC/counterHOC';

const Image = () => {
  return (
    <StaticImage
      src="../../images/cats.jpg"
      width={300}
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  );
};

export default counterHOC(Image);
