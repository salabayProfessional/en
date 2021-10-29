import { Button } from "evergreen-ui";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Table } from "reactstrap";
import Row from "../../../../component/Row/Row";
import SearchWord from "../../../../component/SearchWord/SearchWord";
import { useOwnDictionary } from "../../../../hooks/useOwnDictionary";
import { generateString, shuffle } from "../../../../specialFunction/specialFunction";
import DataWords from "./DataWords";
import "./OwnDictionary.scss";

const OwnDictionary: React.FC = () => {
  const ownDictionary: any = useOwnDictionary();
  const [active, setActive] = useState("");
  const [activePart, setActivePart] = useState("1 part");
  const [activePartOptions, setActivePartOptions] = useState("");
  const [shufflePart, toggleShufflePart] = useState("");
  const [isModal, setIsModal] = useState<boolean>(false);

  const toggleModal = () => setIsModal(!isModal);

  const newActive = (word: string) => active === word? setActive("") : setActive(word);
  const newActivePartOptions = (part: string) => activePartOptions === part? setActivePartOptions("") : setActivePartOptions(part);

  const listWords = () => {
    const idx = ownDictionary.findIndex((item: any) => item.part === activePart);

    return ownDictionary[idx]?.words?.map((word: any) => (
      <DataWords data={word} active={active} newActive={newActive} key={generateString()} activePart={activePart}/>
    ));
  };

  if(isModal) {
    prompt();
  };

  const dictionaryTabs = ownDictionary.map((part: any) => {
    return (
      <div className="flex-btn-group">
        <Button 
          marginY={8} 
          marginRight={12}
          key={generateString()} 
          onClick={() => setActivePart(part.part)}
          onDoubleClick={() => newActivePartOptions(part.part)}
        >
          {part.part}
        </Button>
        <div className={`${activePartOptions === part.part? "open-part" : "close-part"} part-option`}>
          <Button 
            marginY={8} 
            marginRight={12}
            key={generateString()} 
            onClick={() => toggleModal}
          >
            add word
          </Button>
          <Button 
            marginY={8} 
            marginRight={12}
            key={generateString()} 
            onClick={() => toggleShufflePart(part.part)}
          >
            shuffle
          </Button>
        </div>
      </div>
    )
  });

  return (
    <div>
      <Row
        Left={<div>
          <div className="dictionary-tabs">
            {dictionaryTabs}
          </div>
          <Table className="bg-light" style={{height: "100%"}}>{shufflePart === ""? listWords() : shuffle(listWords())}</Table>
        </div>}
        Right={<SearchWord />}
      />
    </div>
  )
};

export default OwnDictionary;
