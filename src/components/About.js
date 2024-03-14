import React  from "react";

export default function About(props) {
//   const [myStyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });

    let myStyle={
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor: props.mode==='dark'?'#042743':'white'
    }

  return (
    <div className="container" >
      <h1 className="my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyse your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text utils gives you way to analyse your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is free character counter tool that provides instant
              character count & word count statistic for goiven text. TextUtils
              reports the number of words and characters. Thus it is suitable
              for writing text with word / character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
               <strong>Browser compatable</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any browser such as Chrome,
              Firefox, Internet Explorer, Safari, Opera. It suits to count
              character in facebook, blog, books, excel document, pdf document,
              essay, ect.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
