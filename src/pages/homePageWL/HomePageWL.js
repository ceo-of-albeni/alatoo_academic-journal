import React from "react";
import classes from "./HomePageWL.module.css";
import circle from "./img/circle.png";
import content from "./img/content.png";
import article from "./img/article.png";
import horizontal from "./img/horizontal.png";
import horizontal2 from "./img/horizontal2.png";
import horizontal3 from "./img/horizontal3.png";
import ruslanagay from "./img/ruslanagay.jpg";
import { useNavigate } from "react-router-dom";

export default function HomePageWL() {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.title__area}>
        <div className={classes.title__area__inner}>
          <div className={classes.title__area__text}>
            <h1>Ala-Too Academic Journal</h1>
            <p>We eagerly await your fascinating research!</p>
            {localStorage.getItem("email") === null ? (
              <button onClick={() => navigate("/")}>Join us</button> // сделай чтоб открывался Логин
            ) : (
              <button onClick={() => navigate("/profile")}>Join us</button>
            )}
          </div>
          <div className={classes.title__area__img}>
            <div className={classes.circle}></div>
            <div className={classes.circle2}></div>
            <img src={circle} alt="circle"></img>
          </div>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.content__inner}>
          <div className={classes.content__frame}>
            <div className={classes.content__frame__text}>
              <h2>
                "Ala-Too Academic Studies" - the way to scientific leadership in
                the Kyrgyz Republic
              </h2>
              <p>
                It is noteworthy that in 2020, the impact factor of the
                scientific journal was 0.171, and by 2021, it increased to
                0.210. By the end of 2022, it further rose to 0.421, and the
                journal continues to maintain its high rating.
              </p>
              <button onClick={() => navigate("/archive")}>Read Now</button>
            </div>
            <div className={classes.content__frame__img}>
              <img src={content} alt="content"></img>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.horizontal__cards}>
        <div className={classes.horizontal__cards__inner}>
          <h2>About us</h2>
          <div className={classes.horizontal__cards__card}>
            <div className={classes.horizontal__card__text}>
              <h3>The way to scientific leadership in the Kyrgyz Republic</h3>
              <p>
                Ala-Too International University provides young generations not
                only with high-quality education in English, but also attaches
                particular importance to scientific activities{" "}
              </p>
            </div>
            <div className={classes.horizontal__card__img}>
              <img src={horizontal} alt="horizontal" />
            </div>
          </div>
          <div className={classes.horizontal__cards__card}>
            <div className={classes.horizontal__card__img__2}>
              <img src={horizontal2} alt="horizontal2" />
            </div>
            <div className={classes.horizontal__card__text__2}>
              <h3>
                Status as a leader among scientific publications in the republic
              </h3>
              <p>
                At the end of 2022, according to the calculation of the
                scientific metric base of the RSCI, the impact factor of a
                scientific journal "Ala-Too Academic Studies" has increased to
                0.421, making them one of the most significant academic journals
                in the Kyrgyz Republic.{" "}
              </p>
              <p>
                This indicator testifies to the high level of quality of
                scientific research presented in the journal "Alatoo Academic
                Studies".
              </p>
            </div>
          </div>
          <div className={classes.horizontal__cards__card}>
            <div className={classes.horizontal__card__text__3}>
              <h3>About the processes of receiving scientific articles:</h3>
              <p>
                Horizontal card description - this is where we describe maybe
                Our process of receiving scientific articles involves strict
                control and cooperation with the authors. Each scientific
                article is subject to a mandatory check for uniqueness through
                an anti-plagiarism system and is published only if it meets our
                requirements.
              </p>
              <p>
                Therefore, we strongly recommend that authors strictly follow
                our requirements before submitting an article for publication in
                a scientific journal
              </p>
            </div>
            <div className={classes.horizontal__card__img__3}>
              <img src={horizontal3} alt="horizontal3" />
            </div>
          </div>
        </div>
      </div>

      {/* <footer>
        <p>© 2023, Name</p>
      </footer> */}

      {/* <div></div> */}
    </div>
  );
}
