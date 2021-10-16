import React from 'react';
import { BTN_BG } from '../../classes';
import './Proposition.scss';

const Proposition: React.FC = () => {

  return (
    <div className="Proposition">
      <div className="Proposition__item col-12 col-lg-4">
        <h2>FREE</h2>
        <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        <p className="text-muted">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <p className="text-muted">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        <p className="text-muted">Etiam porta sem malesuada magna mollis euismod.</p>
        <p className="text-muted">Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p className="text-muted">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        <p className="text-muted">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        <button className={BTN_BG}>BUY</button>
      </div>
      <div className="Proposition__item col-12 col-lg-4">
        <h2 className="text-info">SUPER</h2>
        <p className="text-info">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        <p className="text-info">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <p className="text-info">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        <p className="text-info">Etiam porta sem malesuada magna mollis euismod.</p>
        <p className="text-info">Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p className="text-info">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        <button className={BTN_BG}>BUY</button>
      </div>
      <div className="Proposition__item col-12 col-lg-4">
        <h2 className="text-primary">EXPERT</h2>
        <p className="text-primary">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <p className="text-primary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        <p className="text-primary">Etiam porta sem malesuada magna mollis euismod.</p>
        <p className="text-primary">Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p className="text-primary">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        <p className="text-primary">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        <button className={BTN_BG}>BUY</button>
      </div>
    </div>
  )
};

export default Proposition;
