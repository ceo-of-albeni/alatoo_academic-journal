import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import classes from './Edit.module.scss';
import { articlesContext } from '../../../../contexts/articleContext';

export function Edit({closeModal}) {
    
    const { getArchive, archive, loading, setLoading, editArchive } = useContext(articlesContext)

  const [description, setDescription] = useState(archive.description)
  const [rulesUrl, setRulesUrl] = useState(archive.rulesUrl)
  const [reviewerRulesUrl, setReviewerRulesUrl] = useState(archive.reviewerRulesUrl)
  const [publicationEthicsRu, setPublicationEthicsRu] = useState(archive.publicationEthicsRu)
  const [publicationEthicEn, setPublicationEthicEn] = useState(archive.publicationEthicEn)
  const [editorialCouncil, setEditorialCouncil] = useState(archive.editorialCouncil)
  const [adress, setAdress] = useState(archive.adress)
  const [phoneNumber, setPhoneNumber] = useState(archive.phoneNumber)
  const [faxNumber, setFaxNumber] = useState(archive.faxNumber)
  const [email, setEmail] = useState(archive.email)
  const [activeEdit, setActiveEdit] = useState("edit");

  useEffect(() => {
    getArchive();
  }, []);

  console.log(archive);

    useEffect(() => {
        document.body.style.overflow = "hidden";  
        return () => {
          document.body.style.overflow = "auto";
        };
    }, []);

    const handleClick = e => {
        e.stopPropagation();
    };

    const handleOutsideClick = () => {
        closeModal();
        console.log("Closing modal");
    };

    const clearAllInputs = () => {
        setDescription('');
        setRulesUrl('');
        setReviewerRulesUrl('');
        setPublicationEthicsRu('');
        setPublicationEthicEn('');
        setEditorialCouncil('');
        setAdress('');
        setPhoneNumber('');
        setFaxNumber('');
        setEmail('');
    };

    function saveChanges() {
        if (!email.trim() || !description.trim() || !rulesUrl.trim() || !reviewerRulesUrl.trim() || !publicationEthicEn.trim() || !publicationEthicsRu.trim() || !editorialCouncil.trim() || !adress.trim() || !phoneNumber.trim() || !faxNumber.trim()) {
            alert("Some inputs are empty!");
            return;
          }
        const editedInfo = {
          rulesUrl,
          adress,
          description,
          reviewerRulesUrl,
          publicationEthicEn,
          publicationEthicsRu,
          editorialCouncil,
          phoneNumber,
          faxNumber,
          email
        };
        console.log("Edited Info:", editedInfo);
        alert("Обновлено!")
        editArchive(editedInfo);
        window.location.reload();
      }
    

    return (
        <>
            {activeEdit === "edit" && (
                <div className={classes.edit} onClick={handleOutsideClick}>
                    <div className={classes.edit__inner} onClick={handleClick}>
                        <form>
                            <div>Edit Information</div>
                            <label>Description</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                name="email"
                            />
                            <label>Editorial Council</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={editorialCouncil}
                                onChange={(e) => setEditorialCouncil(e.target.value)}
                                name="email"
                            />
                            <label>Address</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={adress}
                                onChange={(e) => setAdress(e.target.value)}
                                name="email"
                            />
                            <label>Phone number</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                name="email"
                            />
                            <label>Fax number</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={faxNumber}
                                onChange={(e) => setFaxNumber(e.target.value)}
                                name="email"
                            />
                            <label>E-mail</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                            />
                           
                            <label>Link to ethics in Russian</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={publicationEthicsRu}
                                onChange={(e) => setPublicationEthicsRu(e.target.value)}
                                name="email"
                            />
                            <label>Link to ethics in English</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={publicationEthicEn}
                                onChange={(e) => setPublicationEthicEn(e.target.value)}
                                name="email"
                            />
                            <label>Rules for authors</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={rulesUrl}
                                onChange={(e) => setRulesUrl(e.target.value)}
                                name="email"
                            />
                            <label>Rules for reviewers</label>
                            <input
                                type="text"
                                placeholder="Click and type"
                                value={reviewerRulesUrl}
                                onChange={(e) => setReviewerRulesUrl(e.target.value)}
                                name="email"
                            />
                            <button onClick={saveChanges}>Add</button>
                            <div className={classes.clear} onClick={clearAllInputs}>
                                <a href="javascript:void(0);" className={classes.sign}>
                                    Clear All
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}