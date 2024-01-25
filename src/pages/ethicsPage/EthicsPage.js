import React from 'react';
import classes from './EthicsPage.module.css';
import { useNavigate } from 'react-router-dom';
import arrow from './img/arrow.svg';

export default function EthicsPage() {
    
    const navigate = useNavigate();

    return (
        <div className={classes.ethics}>
            <div className={classes.container}>
                <div className={classes.back}>
                    <img src={arrow} alt="arrow" />
                    <a onClick={() => navigate("/archive")}>Back</a>
                </div>
                <div className={classes.ethics_inner}>
                    <div className={classes.title}>
                        <h3>ALATOO ACADEMIC STUDIES</h3>
                        <p>ISSN: 1694-5263</p>
                    </div>
                    <div className={classes.text}>
                        <p>The editorial board of the scientific journal Alatoo Academic Studies
                            is guided in its work by the international ethical rules of scientific
                            publications, including the rules of decency, confidentiality, 
                            supervision of publications, consideration of possible conflicts of 
                            interest, etc. Alatoo Academic Studies is committed to objective and 
                            fair double-blind peer-review of the submitted works. In its activities,
                            the editors follow the recommendations of the Committee on Publication 
                            Ethics and, in particular, the Ethical Resource Kit 
                            (Publishing Ethics Resource Kit) of Elsevier.
                        </p>
                        <ol>
                            <li>When deciding on publication, the editor of a scientific journal is
                                guided by the reliability of the presented data and the scientific
                                significance of the manuscripts.</li>
                            <li>Editor should evaluate the intellectual content of manuscripts regardless
                                of race, gender, religious beliefs, origin, citizenship, social status or
                                political preferences of authors.</li>
                            <li>Unpublished data obtained from submitted manuscripts should not be used 
                                for personal purposes or transferred to third parties without the written
                                consent of the author. Information or ideas obtained during editing and
                                related to possible benefits should be kept confidential. </li>
                            <li>The editor should not allow the publication of information, if there is
                                sufficient reason to believe that it is plagiarism. </li>
                            <li>
                                The editor, together with the publisher, should not leave unanswered claims
                                concerning the manuscripts or published materials, and in the case of a conflict 
                                situation, take all necessary measures to restore the violated rights. The 
                                reviewer carries out a scientific examination of the author's materials; 
                                assessment should not be prejudiced and should apply the following principles:
                                <ul>
                                    <li>The manuscript received for review should be considered as a confidential
                                        document that cannot be passed on for review or discussion to third parties 
                                        without authorization from the editorial office. </li>
                                    <li>The reviewer is obliged to give an objective and reasoned assessment of the
                                        results of the research. Personal criticism of the author is unacceptable. </li>
                                    <li>The reviewer should not use unpublished data obtained from submitted manuscripts for personal purposes.</li>
                                </ul>
                            </li>
                            <li>A reviewer who does not possess, in his opinion, sufficient qualification for the evaluation of 
                                the manuscript, or cannot be objective, for example, in case of a conflict of 
                                interests with the author or organization, should inform the editor about this request, 
                                excluding him from the process of reviewing this manuscript. The author (or a team of authors) 
                                realizes that he bears the original responsibility for the scientific novelty and reliability 
                                of the results of the research, which implies observance of the following principles:
                                <ul>
                                    <li>The authors of the article should provide reliable results of the conducted studies. 
                                        Knowingly erroneous or falsified statements are unacceptable.</li>
                                    <li>- The authors must ensure that the results of the study, as 
                                        described in the manuscript provided, are completely original. Borrowed 
                                        fragments or statements must be made with a mandatory indication of the 
                                        author and the source. Excessive borrowing, as well as plagiarism in any form, 
                                        including unformulated quotes, paraphrasing or assigning rights to the results 
                                        of other people's research, are unethical and unacceptable</li>
                                    <li>It is necessary to recognize the contribution of all persons who somehow influenced
                                        the course of the study; in particular, the article should contain references 
                                        to the work that was important in the study.</li>
                                    <li>- Authors should not submit to the journal a manuscript that was sent to another
                                        journal and is pending, as well as an article already published in another journal. </li>
                                    <li>The co-authors of the article should indicate all persons who have made a significant 
                                        contribution to the study. Among co-authors, it is inadmissible to identify persons who did not participate in the study</li>
                                    <li>If the author finds significant errors or inaccuracies in the article at the stage
                                        of its consideration or after its publication, s/he should notify the editorial office of this as soon as possible.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}