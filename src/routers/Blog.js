import React, { useEffect, useState } from "react";
import View from "../Components/View";
import Axios from "axios";
import { Image } from "cloudinary-react";
import { FiSend } from "react-icons/fi";
// getting comments from local storage...

function getDataFromLS() {
  const commented = localStorage.getItem("outputs");
  if (commented) {
    return JSON.parse(commented);
  } else {
    return [];
  }
}

function Blog() {
  //profile upload...
  function uploadImage() {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "koaxg0iu");
    Axios.post(
      "https://api.cloudinary.com/v1_1/victor-bernard/image/upload",
      formData
    ).then((response) => {
      console.log(response);
    });
  }

  //Comment output....

  const [outputs, setOutputs] = useState(getDataFromLS());

  //comment field states...

  const [comment, setComment] = useState("");
  const [Username, setUsername] = useState("");
  const [image, setImage] = useState("");

  //submit invoke...

  function handleSubmit(e) {
    e.preventDefault();
    //Creating outputs...
    let output = {
      Username,
      comment,
    };
    setOutputs([...outputs, output]);
    setUsername("");
    setComment("");
  }

  //Delete comment from  Local Storage...

  function deleteOutput(comment) {
    const filteredOutputs = outputs.filter((element, index) => {
      return element.comment !== comment;
    });
    setOutputs(filteredOutputs);
  }
  //saving comments to local storage...

  useEffect(() => {
    localStorage.setItem("outputs", JSON.stringify(outputs));
  }, [outputs]);

  return (
    
    <div className="wrapper">
      <p>Comments & Review</p>
      <div className="main">
        <div className="view-container">
          {outputs.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  {/* <thead>
                    <tr>
                      <th>Username</th>
                      <th>Comment</th>
                      <th>Del</th>
                    </tr>
                  </thead> */}
                  <tbody>
                    <View outputs={outputs} deleteOutput={deleteOutput} />
                  </tbody>
                </table>
              </div>
            </>
          )}
          {outputs.length < 1 && <div>Be The First To Comment😉</div>}
        </div>
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-container"
            onSubmit={handleSubmit}
          >
            <button className="btn btn-success btn-md">
              <FiSend />
            </button>
            {/* <label>Username</label> */}
            <input
              type="text"
              placeholder="Your Name"
              required
              className="form-control1"
              onChange={(e) => setUsername(e.target.value)}
              value={Username}
            ></input>
            
            {/* <label>Comment</label> */}
            <input
              type="text"
              placeholder="Your Comment"
              required
              className="form-control"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            ></input>
          </form>
        </div>

        {/* <input
              type="file"
              onChange={(event) => {setImage(event.target.files[0])}}
            ></input>
            <button onClick={uploadImage}>upload</button>
            <Image className="upload" cloudName="victor-bernard" publicId="https://res.cloudinary.com/victor-bernard/image/upload/v1663345199/iyqejclnwr9ttjuheamc.jpg" /> */}

        {/* <img src={image}></img> */}
      </div>
    </div>
  );
}

export default Blog;
