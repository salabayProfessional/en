import React from 'react';
import {Field} from 'formik';
import { ViewProps } from './types';
import './Tests.scss';

const View: React.FC<ViewProps> = ({
  test, 
  count = 0, 
  start, 
  children, 
  toggleOptions, 
  options, 
  randomWords,
}) => {
	const word = options.type === "en-ua"? test.words[randomWords[count]].en : test.words[randomWords[count]].ua

	return (
		<div className="test bg-dark">
			<div className="test__content">
				<button type="button" className="btn btn-outline-success btn-lg" onClick={() => toggleOptions()} disabled={start}>OPTIONS</button>     
				<div>
					<div className="form-group">
							{
								start && 
								<div className="pass-panel">
									<div className="top-part">
										<h1 className="title">test name: {test.name}</h1>
										<h4 className="under-title">type: EN _ UA</h4>
										<h5 className="under-title">{count}</h5>
									</div>

									<h2 className="title title_bottom_border">{ word }</h2>

									<Field className="form-control-lg btn-lg"
										name="answer" 
										type="text" 
										placeholder="YOUR ANSWER" 
										id="inputLarge" 
									/>
								</div>
							}
						<div>{ children }</div>
					</div>
				</div>
			</div>
	  </div>
	)
};

export default View;
