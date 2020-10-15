import React, { useState } from "react";
import "./ProcessFour.sass";
import passport from "../../assets/passport.svg";
import license from "../../assets/license.svg";
import id from "../../assets/id.svg";
import upload from "../../assets/upload.svg";

const ProcessFour = () => {
    const [typeChosen, setTypeChosen] = useState(false);
    const [image, setImage] = useState("");

    const submit = (e) => {
        e.preventDefault();

        alert("Submit.");
    };

    const imageOnChange = (e) => {
        e.preventDefault();

        const image = e.target.files[0];
        console.log(image);

        setImage(URL.createObjectURL(image));
    };

    const verify = (e) => {
        e.preventDefault();

        alert("Verified.");
    };

    const disabled = image.length > 0;

    return (
        <div className="process-four-container">
            <div className="process-four-pagination">
                <p className="process-four-page-selected">1</p>
                <hr className="process-four-hr" />
                <p className="process-four-page-selected">2</p>
                <hr className="process-four-hr" />
                <p className="process-four-page-selected">3</p>
                <hr className="process-four-hr" />
                <p className="process-four-page-selected">4</p>
            </div>
            <h1 className="process-four-title">SELECT ID TYPE</h1>
            {typeChosen ? (
                <div className="process-four-type-chosen">
                    <h2 className="process-four-type-chosen-title">
                        UPLOAD IMAGES
                    </h2>
                    <p className="process-four-instruction">
                        Please do not redact, watermark or otherwise obscure any
                        part of your ID. This will help ensure we can verify
                        your identity document as quickly and accurately as
                        possible. Upload pictures of your photo id (JPEG or
                        PNG).
                    </p>
                    <input
                        style={{ display: "none" }}
                        name="image"
                        id="image"
                        type="file"
                        accept=".jpg, .png, .jpeg"
                        value={""}
                        onChange={imageOnChange}
                    />
                    <label className="process-four-upload" htmlFor="image">
                        {image ? (
                            <img
                                src={image}
                                className="process-four-upload-image"
                                alt="upload"
                            />
                        ) : (
                            <img
                                src={upload}
                                className="process-four-upload-image"
                                alt="upload"
                            />
                        )}
                    </label>
                    <button
                        onClick={verify}
                        disabled={!disabled}
                        className="process-four-button"
                    >
                        CONTINUE
                    </button>
                </div>
            ) : (
                <div className="process-four-types">
                    <div
                        className="process-four-type"
                        onClick={() => setTypeChosen(true)}
                    >
                        <img
                            src={passport}
                            className="process-four-type-image"
                            alt="passport"
                        />
                        <p className="process-four-type-p">Passport</p>
                    </div>
                    <div
                        className="process-four-type"
                        onClick={() => setTypeChosen(true)}
                    >
                        <img
                            src={license}
                            className="process-four-type-image"
                            alt="license"
                        />
                        <p className="process-four-type-p">License</p>
                    </div>
                    <div
                        className="process-four-type"
                        onClick={() => setTypeChosen(true)}
                    >
                        <img
                            src={id}
                            className="process-four-type-image"
                            alt="id"
                        />
                        <p className="process-four-type-p">National ID</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProcessFour;
