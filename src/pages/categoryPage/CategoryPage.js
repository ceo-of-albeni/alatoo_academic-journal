import React from 'react';
import classes from './CategoryPage.module.css';
import arrow from './img/arrow.svg';
import { useNavigate } from 'react-router';



export default function CategoryPage() {

    const navigate = useNavigate();

    return (
        <div className={classes.container}>
            <div className={classes.category}>
                <div className={classes.category__inner}>
                    <div className={classes.back}>
                        <img src={arrow} alt="arrow"/>
                        <a onClick={() => navigate("/category")}>Back</a>
                    </div>
                    <div className={classes.text}>
                        <h4>Category: Informatics Science</h4>
                    </div>
                    <div className={classes.buttons}>
                        <button>All editions</button>
                        <button>Edition 1</button>
                        <button>Edition 2</button>
                        <button>Edition 3</button>
                    </div>
                    <div className={classes.year}>
                        <p>2023</p>
                    </div>
                    <hr/>
                    <div className={classes.info}>
                        <div className={classes.groups}>
                            <h4>Behbudova E.Sh.</h4>
                            <div className={classes.group}>
                                <a href='https://drive.google.com/file/d/1_o80T8EUsqcMhj6dvCxsDCRmaKllOtA3/view?usp=sharing'>
                                    АНГЛИС ТИЛИНДЕГИ ФРАЗЕОЛОГИЯЛЫК ТҮЗҮЛҮШТӨРДҮН СЕМАНТИКАЛЫК КАСИЕТТЕРИ
                                </a>
                                <p>
                                    Бул илимий эмгектерде фразеологиялык айкалыштарга байланыштуу бир катар изилдөө иштери жүргүзүлүп, илимий эмгектер жазылып, алардын түзүлүшү, семантикасы ж.б.у.с. маанилуу пункттар айтылды.
                                </p>
                            </div>
                            <div className={classes.group}>
                                <a href='https://drive.google.com/file/d/1_o80T8EUsqcMhj6dvCxsDCRmaKllOtA3/view?usp=sharing'>
                                    СЕМАНТИЧЕСКИЕ СВОЙСТВА ФРАЗЕОЛОГИЧЕСКИХ СТРУКТУР В АНГЛИЙСКОМ ЯЗЫКЕ
                                </a>
                                <p>
                                    Проведен ряд исследовательских работ, связанных с фразеологическими сочетаниями, написаны научные работы, в этих научных работах написана их структура, семантика и т.д. были высказаны важные мысли.
                                </p>
                            </div>
                            <div className={classes.group}>
                                <a href='https://drive.google.com/file/d/1_o80T8EUsqcMhj6dvCxsDCRmaKllOtA3/view?usp=sharing'>
                                    SEMANTIC PROPERTIES OF PHRASEOLOGICAL COMPOUNDS IN ENGLISH
                                </a>
                                <p>
                                A number of research works related to phraseological combinations have been carried out, scientific works have been written, and their structure, semantics, etc. have been written in these scientific works. important ideas have been expressed.
                                </p>
                            </div>
                        </div>
                        <hr/>
                        <div className={classes.groups}>
                            <h4>Андашова Р.М.</h4>
                            <div className={classes.group}>
                                <a href='https://drive.google.com/file/d/1s0OAzJWqzi4KfW8eA9GqKlvFYt78-cTr/view?usp=sharing'>
                                    МААЛЫМАТТЫК ТЕХНОЛОГИЯЛАРДЫН ДИСКУРСТУК ТЕКСТТЕРИНДЕГИ СТРУКТУРАЛЫК БАЙЛАНЫШТАРДЫ КОТОРУУ КӨЙГӨЙЛӨРҮ
                                </a>
                                <p>
                                    Макалада ар биринин автору, реципиенти, максаттары бар жана атайын дискурстун ар кандай жанрларында ишке ашырылган маалыматтык технологиялар чөйрөсүндөгү дискурстук тексттериндеги структуралык байланыштарды жана атайын дискурстун түрчөлөрүн которуу маселесин изилдөөнүн негизги жолдору каралат.
                                </p>
                            </div>
                            <div className={classes.group}>
                                <a href='https://drive.google.com/file/d/1s0OAzJWqzi4KfW8eA9GqKlvFYt78-cTr/view?usp=sharing'>
                                    ВОПРОСЫ ПЕРЕВОДА СТРУКТУРНЫХ ВЗАИМОСВЯЗЕЙ В ДИСКУРСИВНЫХ ТЕКСТАХ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ
                                </a>
                                <p>
                                    В статье рассматриваются основные пути изучения проблемы перевода структурных взаимосвязей дискурсивных текстов и подвиды специального дискурса в области информационных технологий, каждый из которых имеет автора, получателя, цели и реализуется в различных жанрах специального дискурса.
                                </p>
                            </div>
                            <div className={classes.group}>
                                <a href='https://drive.google.com/file/d/1s0OAzJWqzi4KfW8eA9GqKlvFYt78-cTr/view?usp=sharing'>
                                    ISSUES OF TRANSLATION OF STRUCTURAL RELATIONSHIPS IN INFORMATION TECHNOLOGY DISCURSIVE TEXTS
                                </a>
                                <p>
                                    The article deals with the main ways of studying the problem of translation of structural relationships of discursive texts and subspecies of special discourse in the field of information technology, each of which has an author, recipient, purpose and is implemented in different genres of special discourse.
                                </p>
                            </div>
                        </div>
                        <hr/>
                        <div className={classes.groups}>
                            <h4>Андашова Р.М.</h4>
                            <div className={classes.group}>
                                <a href='https://drive.google.com/file/d/1s0OAzJWqzi4KfW8eA9GqKlvFYt78-cTr/view?usp=sharing'>
                                    МААЛЫМАТТЫК ТЕХНОЛОГИЯЛАРДЫН ДИСКУРСТУК ТЕКСТТЕРИНДЕГИ СТРУКТУРАЛЫК БАЙЛАНЫШТАРДЫ КОТОРУУ КӨЙГӨЙЛӨРҮ
                                </a>
                                <p>
                                    Макалада ар биринин автору, реципиенти, максаттары бар жана атайын дискурстун ар кандай жанрларында ишке ашырылган маалыматтык технологиялар чөйрөсүндөгү дискурстук тексттериндеги структуралык байланыштарды жана атайын дискурстун түрчөлөрүн которуу маселесин изилдөөнүн негизги жолдору каралат.
                                </p>
                            </div>
                            <div className={classes.group}>
                                <a href='https://drive.google.com/file/d/1s0OAzJWqzi4KfW8eA9GqKlvFYt78-cTr/view?usp=sharing'>
                                    ВОПРОСЫ ПЕРЕВОДА СТРУКТУРНЫХ ВЗАИМОСВЯЗЕЙ В ДИСКУРСИВНЫХ ТЕКСТАХ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ
                                </a>
                                <p>
                                    В статье рассматриваются основные пути изучения проблемы перевода структурных взаимосвязей дискурсивных текстов и подвиды специального дискурса в области информационных технологий, каждый из которых имеет автора, получателя, цели и реализуется в различных жанрах специального дискурса.
                                </p>
                            </div>
                            <div className={classes.group}>
                                <a href='https://drive.google.com/file/d/1s0OAzJWqzi4KfW8eA9GqKlvFYt78-cTr/view?usp=sharing'>
                                    ISSUES OF TRANSLATION OF STRUCTURAL RELATIONSHIPS IN INFORMATION TECHNOLOGY DISCURSIVE TEXTS
                                </a>
                                <p>
                                    The article deals with the main ways of studying the problem of translation of structural relationships of discursive texts and subspecies of special discourse in the field of information technology, each of which has an author, recipient, purpose and is implemented in different genres of special discourse.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}