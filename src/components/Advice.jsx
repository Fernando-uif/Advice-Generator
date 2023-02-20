import React, { useEffect, useState } from "react";
import background from "../sass/layout/background.module.scss";
import content from "../sass/layout/content.module.scss";
import text from "../sass/base/text.module.scss";
import base from "../assets/images/pattern-divider-desktop.svg";
import button from "../assets/images/icon-dice.svg";
import { getInfo } from "../helpers/Fetch";

export const Advice = () => {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    (async () => {
      const response = await getInfo();
      const { advice, id } = response.slip;
      setAdvice({ id, advice });
    })(); 
  }, []);

  const handleGetAdvice = async () => {
    const response = await getInfo();
    const { id, advice } = response.slip;
    setAdvice({ id, advice });
  };
  return (
    <section className={background.contain}>
      <article className={content.container}>
        <p className={text.title}>advice #{advice.id}</p>
        <p className={text.detail}>"{advice.advice}"</p>
        <img src={base} className={content.imgBase} />
        <div className={content.containerButton} onClick={handleGetAdvice}>
          <span className={content.circle}>
            <img src={button} />
          </span>
        </div>
      </article>
    </section>
  );
};
