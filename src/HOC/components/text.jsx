import React from 'react';

import counterHOC from '../counterHOC/counterHOC';

const Text = () => {
  return (
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
      adipisci pariatur assumenda iste eius ullam molestias ad iusto natus
      obcaecati eaque quae dolor modi tempore sapiente provident, harum maxime.
      Ut!
    </p>
  );
};

export default counterHOC(Text);
