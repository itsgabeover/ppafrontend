import React, { useState, useEffect } from "react";
import "./getstarted.css";
import { Botpress } from "../../containers";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Footer, Popup } from "../../containers/";
import {
  useClient,
} from "@botpress/webchat";
import { OrbitProgress } from "react-loading-indicators";

const GetStarted = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [response, setResponse] = useState(null);

  const [upload, setUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const clientId = "b0216105-f29e-43aa-a7c0-473aec45cd52";
  const client = useClient({ clientId });
  const apiUrl = process.env.REACT_APP_API_URL;

  client.on("customEvent", (event) => {
    if (event.action === "FileUpload") {
      console.log("File upload event received");
      setUpload(true);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", selectedFile);
    console.log("Uploading file...");
    setIsLoading(true);

    try {
      const res = await axios.post(
        `${apiUrl}/pdf/upload/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response received:", res.data);
      //turn of loading indicator
      setIsLoading(false);
      //close upload popup
      setUpload(false);
      setResponse(res.data);
      setSummary(res.data.summary);
      //send payload to bot
      await client.sendEvent({
        type: 'file uploaded',
      })
      	
    } catch (err) {
      console.error("Error uploading file:", err);
    }


  };

  return (
    <>
      <div className="botpress-container">
        <div className="column">
          <Botpress setUpload={setUpload} client={client} />
        </div>
        <div className="column">
          <Popup trigger={upload} setTrigger={setUpload}>
            <h2>Upload Your Illustration</h2>
            <input
              className="custom-file-upload"
              type="file"
              onChange={handleFileChange}
            />
            {isLoading && (
              <OrbitProgress
                variant="bubble-dotted"
                color="#4965ea"
                size="medium"
                text=""
                textColor=""
              />
            )}
            <button className="upload-btn" type="submit" onClick={handleUpload}>
              Upload
            </button>
          </Popup>

          {response && (
            <div className="summary header-content">
              <h3>Response from ChatGPT:</h3>
              <pre>{summary}</pre>
            </div>
          )}
        </div>
      </div>
      <Footer />

      {/* <div className="header section__padding" id="home">
        <div className="header-content">
          <h1 className="gradient__text getstarted">
            Securely Upload your Illustration
          </h1>
          <p>Questions about your policy? Interact with our AI bot assistant</p>
          <p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://policyprecisionadvisory.sharefile.com/share/upload/rfa2880426e584b4583223e786c604f89"
            >
              Upload securely via{" "}
              <span STYLE="font-weight:bold">ShareFile</span>
            </a>
          </p>
          <p>or,</p>

          <div className="header-content__input">
            <input type="file" title=" " onChange={handleFileChange} />
            <br></br>
            <button type="submit" onClick={handleUpload}>
              Upload
            </button>
            {uploadProgress > 0 && <div>Uploading...%</div>}
          </div>
        </div>
      </div>
      {response && (
        <div className="summary header-content">
          <p>
            <h3>Response from ChatGPT:</h3>
            <pre>{summary}</pre>
          </p>
        </div>
      )}
      {error && (
        <div>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )} */}
    </>
  );
};

export default GetStarted;
