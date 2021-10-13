import React from 'react';
import {Field} from 'formik';
import { ViewProps } from './types';
import './Tests.scss';
const successBTN = "btn btn-outline-success btn-lg";

const View: React.FC<ViewProps> = ({
  test, 
  count = 0, 
  start, 
  toggleOptions, 
  options, 
  randomWords,
	startTest,
	sendAnswer,
	setFieldValue,
	values,
}) => {

	const word = start? options.type === "en-ua"? test.words[randomWords[count]].en : test.words[randomWords[count]].ua : "";

	return (
		<>   

		<div className="test__content-header">
			<button 
				type="button" 
				className="btn btn-outline-success btn-lg" 
				onClick={toggleOptions} 
				disabled={start}
			>
				OPTIONS
			</button> 
		</div>

			<div className="test__content-main">
				{
					start && (
						<div className="info-pass-panel">
							<div className="top-part">
								<h1 className="title">test name: {test?.name}</h1>
								<h4 className="under-title">type: EN _ UA</h4>
								<h5 className="under-title">{count}</h5>
							</div>

							<h2 className="title title_bottom_border">{ word }</h2>
						</div>
					)
				}

				<div className="btn-group">
					{
						start && (
							<Field className="form-control-lg btn-lg"
								name="answer" 
								type="text" 
								placeholder="YOUR ANSWER" 
								id="inputLarge" 
							/>
						)
					}
					{
						count === options.words - 1 && (
							<button 
								type="submit" 
								className={successBTN}
							>
								END the test
							</button>
						)
					} 
					{ 
						count !== options.words && (
						<button 
							type="button" 
							className={successBTN}
							onClick={() => sendAnswer(setFieldValue, values)}
						>
							Send answer
						</button>
						)
					}
					{
						!start && (
							<button 
								type="button"
								className={successBTN}
								onClick={() => startTest()}>
								START
							</button>
						)
					}
				</div>
			</div>
		</>
	)
};

export default View;
