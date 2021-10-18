import React, { useEffect, useState } from 'react';
import './Timer.scss';

const Timer: React.FC<{timer: number | string}> = ({timer}) => {

	const [nowTime, setNowTime] = useState(0);

	if(nowTime === timer) {
		alert("Unsuccess");
	}

  useEffect(() => {
    const timeout = setTimeout(() => {
			setNowTime(nowTime + 1);
	  }, 1000);

	if(nowTime === 70) {
		clearTimeout(timeout);
	};
  }, [nowTime, timer]);

	return (
		<div className={`alert-${nowTime < timer ? "success" : "danger"} timer`}>
			<h3>Time is up</h3>
			<h1>{nowTime}/{timer}</h1>
		</div>
	)
};

export default Timer;
