import React, { useState, useContext, useEffect } from "react";
import classes from "./ArchivePage.module.css";
import search from "./img/search.svg";
import arrow from "./img/arrow.svg";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import { useNavigate } from "react-router-dom";
import { articlesContext } from "../../contexts/articleContext";
import Slider from "../../components/Slider/Slider";
import { useTranslation } from 'react-i18next';

export default function ArchivePage() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const { categories, getCategories } = useContext(articlesContext);

  useEffect(() => {
    getCategories();
  }, []);

  const [openSubs, setOpenSubs] = useState(false);

  const toggleOpenSub = () => {
    setOpenSubs(!openSubs);
  };

  return (
    <div className={classes.container}>
      <div className={classes.archive}>
        <div className={classes.archive__inner}>
          <div className={classes.archive__inner__1}>
            <div className={classes.back}>
              <a onClick={() => navigate("/")}>
                <img src={arrow} alt="arrow" />
                <p>{t('archivepage.back')}</p>
              </a>
            </div>
            <div className={classes.search}>
              <div className={classes.filtration}>
                <BasicDatePicker />
              </div>
              <form action="" className={classes.search__bar}>
                <input type="text" placeholder={t('archivepage.search')} name="search" />
                <button>
                  <img src={search} alt="search" />
                </button>
              </form>
            </div>
            <div className={classes.table}>
              <table>
                <tr>
                  <th>№</th>
                  <th>{t('archivepage.category')}</th>
                </tr>

                {categories ? (
                  categories.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        <a onClick={() => navigate("/category")}>{item.nameRu}</a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <h3>{t('tableadmin.loading')}</h3>
                )}
              </table>
            </div>
            <div className={classes.ethics}>
              <div className={classes.ethics__inner}>
                <div className={classes.ethic1}>
                  <a onClick={() => navigate("/ethics")}>{t('archivepage.ethics')}</a>
                </div>
                <div className={classes.ethic2}>
                  <a onClick={() => navigate("/rules1")}>
                    {t('archivepage.rules')}
                  </a>
                </div>
              </div>
            </div>
            <div className={`${openSubs ? "" : classes.sub__menu__end}`}>
              <div
                className={`${classes.council} ${
                  openSubs ? classes.rotate : classes.rotate__end
                }`}
                onClick={toggleOpenSub}>
                <p>{t('archivepage.council')}</p>
                <i className="bx bx-chevron-right"></i>
              </div>
              <div
                className={
                  openSubs ? classes.sub__menu : classes.sub__menu__hide
                }>
                <div className={classes.members}>
                  <p>
                    1. Эдилова Мариям Миталиповна, д. филос. наук, профессор МУА
                    (философия);
                  </p>
                  <p>
                    2. Тогусаков Осмон Асанкулович, д. филос. наук, профессор,
                    член-корреспондент НАН КР (философия);
                  </p>
                  <p>
                    3. Дыйканбаева Гульнура Каныбековна, канд. филос. наук,
                    доцент МУА (философия);
                  </p>
                  <p>
                    4. Гусейнова Мавлюда Джабировна, канд. куль. наук, доцент
                    МУА (культурология);
                  </p>
                  <p>5. Кенан Гумуштекин, PhD, доцент МУА (медицина);</p>
                  <p>
                    6. Кыдыралиева Рыскуль Бекбоевна, д. мед. наук, профессор,
                    МУА (медицина);
                  </p>
                  <p>
                    7. Мусуралиева Гульнара Турсунбековна, канд. мед. наук,
                    доцент, МУА (микробиология);
                  </p>
                  <p>
                    8. Малтабаров Бакытбек Амирович, канд. социол. наук, доцент
                    БГУ им. К. Карасаева (социология);
                  </p>
                  <p>9. Халил Коч, канд. экон. наук, доцент МУА (экономика);</p>
                  <p>
                    10. Эсеналиева Назира Солтонбекона, канд. экон. наук, доцент
                    МУА (экономика);
                  </p>
                  <p>
                    11. Акмолдоев Кыялбек Маматалиевич, PhD, доцент МУА
                    (экономика);
                  </p>
                  <p>
                    12. Жоробеков Жолборс Жоробекович, д. полит. наук, профессор
                    КНУ им. Ж. Баласагына (политология);
                  </p>
                  <p>
                    13. Халим Незихоглу, канд. полит. наук, доцент МУА
                    (политология);
                  </p>
                  <p>
                    14. Ибрахим Конжак, канд. полит. наук, доцент МУА
                    (политология);
                  </p>
                  <p>
                    15. Усубалиев Бейшенбай Шеңкеевич, д. филол. наук, профессор
                    Восточного Университета им. М. Кашгари-Барскани (кыргызское
                    языкознание);
                  </p>
                  <p>
                    16. Жузупекова Кундуз Нуркалыковна, канд. филол. наук,
                    доцент МУА (филология);
                  </p>
                  <p>
                    17. Садыков Ташполот Садыкович д. филол. наук, профессор МУА
                    (тюркология);
                  </p>
                  <p>
                    18. Казакова Нурзат Аскаровна, канд. филол. наук, доцент МУА
                    (филология);
                  </p>
                  <p>
                    19. Жаманбаев Мурат Адырович д.физ.-мат. наук, профессор КТУ
                    им. И. Раззакова (математика);
                  </p>
                  <p>20. Иса Муслу, PhD, доцент МУА (математика);</p>
                  <p>
                    21. Исаев Руслан Рамилевич, к. физ.-мат. наук., доцент МУА
                    (информатика);
                  </p>
                  <p>
                    22. Жакшылыков Жылдызбек Жакшылыкович, канд. пед. наук,
                    доцент МУА (педагогика);
                  </p>
                  <p>
                    23. Жолчиева Айнуру Алибековна, канд. пед. наук, доцент МУА
                    (педагогика);
                  </p>
                  <p>
                    24. Исмаилов Нурлан Асанович, канд. юрид. наук, доцент МУА
                    (юриспруденция);
                  </p>
                  <p>
                    25. Тегизбекова Жылдыз Чынарбековна, канд. юрид. наук,
                    доцент МУА (юриспруденция).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.archive__inner__2}>
            <div className={classes.slider}>
              <Slider />
            </div>
            <div className={classes.text}>
              <h3>{t('archivepage.title')}</h3>
              <div className={classes.text1}>
                <p>{t('archivepage.title2')}</p>
                <p>{t('archivepage.title3')}</p>
              </div>
              <div className={classes.text2}>
                <p>
                  <b>{t('archivepage.title4')}</b> {t('archivepage.4.content')}
                </p>
              </div>
              <div className={classes.text3}>
                <p>
                  ISSN: 1694-5263 <span>{t('archivepage.version1')}</span>
                </p>
                <p>
                  ISSN: 1694-7916 <span>{t('archivepage.version2')}</span>
                </p>
              </div>
              <div className={classes.text4}>
                <p>
                  <b>{t('archivepage.title5')}</b>
                </p>
                <p>
                  {t('archivepage.address')}
                </p>
                <p>
                  <b>{t('archivepage.tel')}</b>+996 (312) 63 14 25
                </p>
                <p>
                  <b>{t('archivepage.fax')}</b>+996(312) 630409
                </p>
                <p>
                  <b>Е-mail: </b>aas@iaau.edu.kg
                </p>
              </div>
              <div className={classes.text5}>
                <p>
                  <b>{t('archivepage.board')}</b>
                </p>
                <p>
                  <b>Санжарбек Эрдолатов – </b>главный редактор, ректор
                  Международного университета «Ала-Тоо», канд.пед.наук;
                </p>
                <p>
                  <b>Салидин Калдыбаев – </b>зам. гл. редактора, д-р пед.наук,
                  профессор МУА (педагогика);
                </p>
                <p>
                  <b>Зеки Пекташ – </b>aas@iaau.edu.kg
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
