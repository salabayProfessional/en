import React, { useState } from "react";
import { Table } from "reactstrap";
import Row from "../../../../component/Row/Row";
import SearchWord from "../../../../component/SearchWord/SearchWord";
import { useOwnDictionary } from "../../../../hooks/useOwnDictionary";
import { generateString } from "../../../../specialFunction/specialFunction";
import DataWords from "./DataWords";
import "./OwnDictionary.scss";

const OwnDictionary: React.FC = () => {
  const ownDictionary: any = useOwnDictionary();
  const [active, setActive] = useState("");
  const [activePart, setActivePart] = useState("");

  const newActive = (word: string) => {
    if(active === word) {
      setActive("");
    }else {
      setActive(word);
    };
  };

  const idx = ownDictionary.findIndex((item: any) => item.part === activePart);

  const listWords = ownDictionary[idx]?.words?.map((word: any) => {
    return (
      <DataWords data={word} active={active} newActive={newActive} key={generateString()}/>
    )
  });

  const dictionaryTabs = ownDictionary.map((part: any) => {
    return (
      <button 
        key={generateString()} 
        className="btn btn-outline-info"
        onClick={() => setActivePart(part.part)}
      >
        {part.part}
      </button>
    )
  });

  return (
    <div className="own-dictionary">
      <Row
        Left={<div>
          <div className="dictionary-tabs">
            {dictionaryTabs}
          </div>
          <Table className="bg-light" style={{height: "100%"}}>{listWords}</Table>
        </div>}
        Right={<SearchWord />}
        fixed="right"
      />
    </div>
  )
};

export default OwnDictionary;
