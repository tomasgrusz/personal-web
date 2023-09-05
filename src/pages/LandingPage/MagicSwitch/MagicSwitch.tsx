import ToggleSwitch from 'components/common/ToggleSwitch/ToggleSwitch';
import { useEffect, useState } from 'react';

import './MagicSwitch.scss';

const MagicSwitch = ({
  setToggle,
}: {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [magic, setMagic] = useState(false);

  useEffect(() => {
    setToggle(magic);
  }, [magic]);

  return (
    <>
      <div className="MagicSwitch">
        <div className="MagicOption">
          <label className="MagicDisclaimer">(mobile-support)</label>
          <label className="MagicLabel">Minimal</label>
          <label className="MagicDescription">Accessible experience</label>
        </div>
        <ToggleSwitch toggle={magic} setToggle={setMagic} size={96} />
        <div className="MagicOption magic">
          <label className="MagicDisclaimer">(browser-only)</label>
          <label className="MagicLabel">M a g i c a l</label>
          <label className="MagicDescription">Interactive experience</label>
        </div>
      </div>
    </>
  );
};

export default MagicSwitch;
