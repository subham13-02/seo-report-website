import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Scanning.css';
import Display from "./Display"; 
import Window from  "../DisplayContainers/Window"


const Scanning=(props)=>{
    // const [isloading, setIsloading] = useState(false);
  const {updatedUrl,screenshotUrl}=props;
    const [items,setItems]=useState([]);
    //const [url,setUrl]=useState(null);

   // setUrl(updatedUrl);
    const userName=process.env.REACT_APP_API_USERNAME;
    const pass=process.env.REACT_APP_API_KEY;
    const fetchData=async () => {
      const post_array = [{
        url: updatedUrl,
        enable_javascript: true,
        custom_js: "meta = {}; meta.url = document.URL; meta;",
      }];
      try {
        const response = await axios({
          method: "post",
          url: "https://api.dataforseo.com/v3/on_page/instant_pages",
          auth: {
            username: userName,
            password: pass,
          },
          data: post_array,
          headers: {
            "content-type": "application/json",
          },
          timeout: 20000,
        });
        if (response.status === 200) {
            const resultArray = response.data.tasks[0].result;
            let data = resultArray[0].items;
            
            setItems(data);
            console.log(items);
            document.querySelector(".scanning-container").style.display="none";

        } else {
          throw new Error("API request failed with status code: " + response.status);
        }
      
      } catch (error) {
        if (error.response) {
          console.log("API Error Response Data:", error.response.data);
          console.log("API Error Response Status:", error.response.status);
        } else if (error.request) {
          console.log("No response received. Request made but no response.");
        } else {
          console.error("Error:", error.message);
        }
      }
    }

    useEffect(()=>{
        setTimeout(() => {
        fetchData();
      }, 5000 )
    });
    
      
  

  return (
    <div className="seoData">
      <div className="scanning-container">
        <Window screenshotUrl={screenshotUrl } scan={true}/>
        <div className='waiting-msg'>
            <h1>Hang on, we are analyzing your page...</h1>
            <p>This may take a few minutes. Please do not close this window.</p>
        </div>
      </div>
      <div>
          <Display items={items} screenshotUrl={screenshotUrl}/>
      </div>
    </div>
  );
}

export default Scanning;

