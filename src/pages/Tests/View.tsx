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
  
	return (
		<div className="test-view">
			<button type="button" className="btn btn-success btn-lg" onClick={() => toggleOptions()} disabled={start}>OPTIONS</button>     
				<div className="form-group">
					{start && 
						<div>

							<h1 className="title">{test.name}</h1>

							<p className="text__under-title">en - ua</p>

							<h2 className="title">
								{
									options.type === "en-ua" && start? 
									test.words[count].en : 
									test.words[count].ua 
								}
							</h2>

							<h3 className="title">Answer</h3>

							<p className="text__under-title">this test bla bla lba for you and this very cool</p>

							<Field className="form-control-lg btn-lg"
                name="answer" 
                type="text" 
                placeholder="GO WRITE" 
                id="inputLarge" 
              />
						</div>
					}
          <div>{ children }</div>
		  </div>
	  </div>
	)
};

export default View;
