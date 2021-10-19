import React from "react";
import { useOwnDictionary } from "../../../../hooks/useOwnDictionary";
import "./OwnDictionary.scss";

const OwnDictionary: React.FC = () => {
  const ownDictionary = useOwnDictionary();

  const listOwnWords = ownDictionary.map((word) => {
    return (
      <div>
        {word.en} : {word.ua}
      </div>
    )
  });

  return (
    <div className="page">
      <div>
        { listOwnWords }
      </div>
    </div>
  )
};

export default OwnDictionary;
