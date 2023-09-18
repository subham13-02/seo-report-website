import "./Display.css";
import React, { useEffect, useState } from "react";
import Bar from "../DisplayContainers/Bar";
import Window from "../DisplayContainers/Window"
import SimpleCard from "../cards/SimpleCard";
import CheckCard from "../cards/CheckCard";


const Display = (props) => {
  const { items,screenshotUrl }=props;
 const finalItem = items[0];
 //console.log("items-display==>",items);
  //const dataArray = [];
  <section className='display-section'>
    ({items!==[]}?<Display  items={items}/>)
    </section>
  const [websiteUrl,setWebsiteUrl]=useState("");
  useEffect(() => {
    (items.length!==0)?setWebsiteUrl(items[0].custom_js_response.url):setWebsiteUrl("");
  }, [items]); 
 
  if (!items || items.length === 0) {
      return (<p>''</p>) 
  }
 
  const onPageScore = finalItem.onpage_score ? finalItem.onpage_score : '';
  const fetchedTime=finalItem.fetch_time?finalItem.fetch_time : '';
  const checks = finalItem.checks ? finalItem.checks : {};
  const content = finalItem.meta ? finalItem.meta.content : {};
  const htags = finalItem.meta ? finalItem.meta.htags : {};
  const errors = finalItem.resource_errors ? finalItem.resource_errors : {};
  const onPageTiming = finalItem.page_timing ? finalItem.page_timing : {};

  let htagarray = [];
  let contentDetails = [];
  let errorData = [];
  let duplicates = [];
  let totalTagCount = 0;
  let timings = [];
  let checkArray=[];


  duplicates = [
    {
      key: "Duplicate Content",
      value:finalItem.duplicate_content === true? true: false,
      description:"Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords."
    },
    {
      key: "Duplicate Description",
      value:finalItem.duplicate_description === true? true: false,
      description:"Duplicate meta descriptions are bad for SEO. They confuse search engines and make it harder to rank for specific keywords."
    },
    {
      key: "Duplicate Title",
      value: finalItem.duplicate_title === true? true: false,
      description:"Duplicate content is bad for SEO. It confuses search engines and makes it harder to rank for specific keywords."
    },
  ];

  if(checks){
    checkArray=[
      {key:"Canonical",value:checks.canonical ===true? true:false,description:"Your page does not have a canonical tag. This can negatively impact your page load speed and user experience."},
      {key:"no_title",value: checks.no_title ===true? true:false,description:"The title tag is an HTML tag that is used to define the title of a webpage. This tag is displayed in the search results and is used by search engines to determine the topic of a page."},  
      {key:"no_favicon",value:checks.no_favicon ===true? true:false,description:"Your page does not have a favicon. This can negatively impact your page load speed and user experienc"},
      {key:"has_html_doctype",value:checks.has_html_doctype ===true? true:false,description:"Your page has a low readability rate. This can negatively impact your page load speed and user experience."}, 
      {key:"high_loading_time",value:checks.high_loading_time ===true? true:false,description:"Your page has render blocking resources. This can negatively impact your page load speed and user experience."},
      {key:"is_http",value:checks.is_http ===true? true:false,description:"Your page has links to HTTP pages. This can negatively impact your page load speed and user experience."},
      {key:"is_4xx_code",value:checks.is_4xx_code ===true? true:false,description:"Your page has a 4xx status code. This can negatively impact your page load speed and user experience."},
      {key:"is_5xx_code",value:checks.is_5xx_code ===true? true:false,description:"Your page has a 5xx status code. This can negatively impact your page load speed and user experience."},
      {key:"no_h1_tag",value:checks.no_h1_tag ===true? true:false,description:"No H1 TagYour page does not have an H1 tag. This can negatively impact your page load speed and user experience."},
      {key:"is_https",value:checks.is_https ===true? true:false,description:"Low Readability RateYour page has a low readability rate. This can negatively impact your page load speed and user experience"},
      {key:"seo_friendly_url",value:checks.seo_friendly_url ===true? true:false,description:"Your page has links to HTTP pages. This can negatively impact your page load speed and user experience."},
      {key:"no_description",value:checks.no_description ===true? true:false,description:"The description tag is an HTML tag that is used to define the description of a webpage. This tag is displayed in the search results and is used by search engines to determine the topic of a page."},
      {key:"No Image Alt",value:checks.no_image_alt ===true? true:false,description:"Your page has images without alt tags. This can negatively impact your page load speed and user experience."},
      {key:"size_greater_than_3mb",value:checks.size_greater_than_3mb ===true? true:false,description:"Low Readability RateYour page has a low readability rate. This can negatively impact your page load speed and user experience."},
      {key:"title_too_long",value:checks.title_too_long ===true? true:false,description:"Your page has a title that is too long. This can negatively impact your page load speed and user experience."},
      {key:"cache_control",value:finalItem.cache_control.cachable ===true? true:false,description:"Your page does not have a cache control header. This can negatively impact your page load speed and user experience."},
    ]
  }

  if (htags){
    for (const tag in htags) {
      if (htags.hasOwnProperty(tag)) {
        if (htags[tag]) {
          totalTagCount += Array.isArray(htags[tag]) ? htags[tag].length : 1;
        }
      }
    }
}
  htagarray = [{ key: "htag count", value: totalTagCount }];
  if (errors) {
    errorData = [
      {
        key: "Errors",
        value:
          errors.errors === null ? "No errors found" : errors.errors.length,
      },
      {
        key: "Warnings",
        value:
          errors.warnings === null
            ? "No warnings found"
            : errors.warnings.length,
      },
    ];
  }
  if (onPageTiming) {
    timings = [
      {
        key: "Connection Time",
        value: onPageTiming.connection_time
          ? onPageTiming.connection_time
          : "No data given",
      },
      {
        key: "DOM complete Time",
        value: onPageTiming?.dom_complete
          ? onPageTiming.dom_complete
          : "No data given",
      },
      {
        key: "Download Time",
        value: onPageTiming?.download_time
          ? onPageTiming.download_time
          : "No data given",
      },
      {
        key: " Duration Time",
        value: onPageTiming?.duration_time
          ? onPageTiming.duration_time
          : "No data given",
      },
      {
        key: " Fetch End Time",
        value: onPageTiming?.fetch_end ? onPageTiming.fetch_end : "No data given",
      },
      {
        key: " Time to interactive",
        value: onPageTiming?.time_to_interactive
          ? onPageTiming.time_to_interactive
          : "No data given",
      },
      {
        key: " Time to Secure Connection",
        value: onPageTiming?.time_to_secure_connection
          ? onPageTiming.time_to_secure_connection
          : "No data given",
      },
      {
        key: " Waiting Time",
        value: onPageTiming?.waiting_time
          ? onPageTiming.waiting_time
          : "No data given",
      },
    ];
  }

  if (content) {
    contentDetails = [
      {
        key: "Automated Readability index",
        value: content.automated_readability_index
          ? content.automated_readability_index
          : "Data not Given",
      },
      {
        key: "Dale Chall Readability Index",
        value: content.dale_chall_readability_index
          ? content.dale_chall_readability_index
          : "Data not Given",
      },
      {
        key: "Description To Content Consistency",
        value: content.description_to_content_consistency
          ? content.description_to_content_consistency
          : "Data not Given",
      },
      {
        key: "Coleman Liau Readability Index",
        value: content.coleman_liau_readability_index
          ? content.coleman_liau_readability_index
          : "Data not Given",
      },
      {
        key: "Meta Keywords To Content Consistency",
        value: content.meta_keywords_to_content_consistency
          ? content.meta_keywords_to_content_consistency
          : "Data not Given",
      },
      {
        key: "Plain Text Rate ",
        value: content.plain_text_rate
          ? content.plain_text_rate
          : "Data not Given",
      },
      {
        key: "Plain Text Size",
        value: content.plain_text_size
          ? content.plain_text_size
          : "Data not Given",
      },
      {
        key: "Plain Text word Count",
        value: content.plain_text_word_count
          ? content.plain_text_word_count
          : "No data given",
      },
      {
        key: "Smog Readability Index",
        value: content.smog_readability_index
          ? content.smog_readability_index
          : "No data given",
      },
      {
        key: "Title to Content Consistency",
        value: content.title_to_content_consistency
          ? content.title_to_content_consistency
          : "No data given",
      },
    ];
  }
  return (
    <div className="display-container">
      <div>
        <p style={{color:'grey',marginTop:"10px",textAlign:'center'}}>EVERYTHING YOU NEED TO KNOW</p>
        <h1 style={{color:'grey',textAlign:'center'}}>  Results for " {websiteUrl}" </h1>
      </div>
      
      <div className="window">
              <Window screenshotUrl={screenshotUrl} scan={false}/>
              <p className="grey">Report Generated : {fetchedTime}</p>
      </div>
      
      <div className="bar-container">
        {onPageScore && (
          <Bar label={"On Page Score"} value={onPageScore} />
        )}
      </div>

     <h2 className="white">Onpage Result</h2>

      <div className="card-container">
        {content&&contentDetails.map(({ key, value },index) => (
          <SimpleCard key={index} heading={key} value={value} />
        ))}
      </div>

      <div className="card-container">
          {duplicates.map(({ key, value ,description }, index) => (
            <CheckCard description={description} heading={key} value={value}  key={index}/>
          ))}
          {checkArray.map(({ key, value ,description},index) => (
              <CheckCard description={description} heading={key} value={value}  key={index} />
            ))}
      </div>

      <div className="card-container">
        
      </div>
        <h4 className="grey">H Tags</h4>
      <div className="card-container">
        {htagarray.map(({ key, value }, index) => (
          <SimpleCard heading={key} value={value}  key={index}/>
        ))}
      </div>
      <h4 className="grey">Speed Insights</h4>

      <div className="card-container">
        {timings.map(({ key, value }, index) => (
          <SimpleCard key={index} heading={key} value={value+"ms"} />
        ))}
      </div>
      <h4 className="grey">Error and warnings</h4>
      <div className="card-container">
        {errorData.map(({ key, value }, index) => (
          <SimpleCard key={index} heading={key} value={value} />
        ))}
      </div>
      
    </div>
  );
};

export default Display;