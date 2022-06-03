import React, { useState } from "react";
import Main from "../../components/main/Main";
import Contact from "../../components/contact/Contact";

import Blur from "react-css-blur";

const Comingsoon = ({ data }) => {
  const [datas, setDatas] = useState(data);
  if (datas != null) {
    setDatas(null);
    data(null);
  }

  const dd = (d) => {
    if (d == null) {
      setDatas(d);
    }
  };
  return (
    <div>
      {data ? (
        <>
          <Blur radius="10px">
            <Main />
          </Blur>
          <Contact test={dd} />
        </>
      ) : (
        <Main />
      )}
    </div>
  );
};
export default Comingsoon;
