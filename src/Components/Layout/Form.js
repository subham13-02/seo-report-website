import React,{ useState} from 'react'
import axios from 'axios';
import './Form.css'
import Load from './Load';
import Scanning from './Scanning';


const Form = () => {
    const [url,setUrl]=useState('')
    const [isloading,setIsloading]=useState(false);
    const [updatedUrl,setUpdatedUrl]=useState('');
    const [screenshotUrl, setScreenshotUrl] = useState('');
    
    const userName=process.env.REACT_APP_API_USERNAME;
    const pass=process.env.REACT_APP_API_KEY;
    
    const fetchScreenshot = async (completeUrl) => {

      const post_object=[
        {
          url: completeUrl,
        }
      ];
      try {
        const response = await axios({
          method:'post',
          url:'https://api.dataforseo.com/v3/on_page/page_screenshot',
          auth: {
            username: userName,
            password: pass,
          },
          data: post_object,
        })
        console.log("response==>",typeof(response.data.tasks),response.data.tasks[0].result[0].items[0].image)
        // Extract the screenshot URL from the API response
        setScreenshotUrl(response.data.tasks[0].result[0].items[0].image);
        setIsloading(false);
        document.querySelector (".form-container").style.display="none";

      } catch (error) {
        console.error('Error fetching screenshot:', error);
      }
    };
    const handleSubmit= async (e)=>{
      e.preventDefault();
        if(url){
            setIsloading(true);
            let completeUrl = url.trim();
            if (!completeUrl.startsWith('https://')) {
                  completeUrl = 'https://' + completeUrl;
            }
            setUpdatedUrl(completeUrl)
            console.log("normalurl===>",completeUrl);
            fetchScreenshot(completeUrl);
        }  
    }  
  
  
  return (
      <>
        <div className='form-container'>
          <form className="form" onSubmit={handleSubmit}>
              <input placeholder="Enter  Website URL"
                  className="input"
                  value={url}
                  onChange={(e)=>setUrl((e.target.value.trim()!=="")?e.target.value:'')}
              />
              <button className='submit-btn'  disabled={isloading} type="submit">
                {isloading ? 'Loading…' : 'Get a Free SEO Audit Report'}
              </button>
          </form>
        </div>
        <br/>
        <div className='spinner'>{isloading && (<Load website={updatedUrl}/>)}</div>
        
        {(screenshotUrl!=='')&&(<Scanning  updatedUrl={updatedUrl} screenshotUrl={screenshotUrl}/>)}
        
      </>
      
    )
}

export default Form;