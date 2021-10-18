import React from 'react';
import { BTN_BG } from '../../classes';
import { motion } from 'framer-motion';
import './Proposition.scss';

const Proposition: React.FC = () => {

  return (
    <motion.div
      animate={{y: 0, opacity: 1}}
      initial={{y: "-120%"}}
      transition={{duration: 1.5, opacity: 0}}
      className="Proposition"
    >
      <ul className="Proposition__item col-12 col-lg-4">
        <h2>FREE</h2>
        <li className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</li>
        <li className="text-muted">Nullam id dolor id nibh ultricies vehicula ut id elit.</li>
        <li className="text-muted">Pellentesque ornare sem lacinia quam venenatis vestibulum.</li>
        <li className="text-muted">Etiam porta sem malesuada magna mollis euismod.</li>
        <li className="text-muted">Donec ullamcorper nulla non metus auctor fringilla.</li>
        <li className="text-muted">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</li>
        <li className="text-muted">Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
        <button className={BTN_BG}>BUY</button>
      </ul>
      <ul className="Proposition__item col-12 col-lg-4">
        <h2 className="text-info">SUPER</h2>
        <li className="text-info">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</li>
        <li className="text-info">Nullam id dolor id nibh ultricies vehicula ut id elit.</li>
        <li className="text-info">Pellentesque ornare sem lacinia quam venenatis vestibulum.</li>
        <li className="text-info">Etiam porta sem malesuada magna mollis euismod.</li>
        <li className="text-info">Donec ullamcorper nulla non metus auctor fringilla.</li>
        <li className="text-info">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</li>
        <li className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
        <button className={BTN_BG}>BUY</button>
      </ul>
      <ul className="Proposition__item col-12 col-lg-4">
        <h2 className="text-primary">EXPERT</h2>
        <li className="text-primary">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</li>
        <li className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</li>
        <li className="text-primary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</li>
        <li className="text-primary">Etiam porta sem malesuada magna mollis euismod.</li>
        <li className="text-primary">Donec ullamcorper nulla non metus auctor fringilla.</li>
        <li className="text-primary">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</li>
        <li className="text-primary">Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
        <button className={BTN_BG}>BUY</button>
      </ul>
    </motion.div>
  )
};

export default Proposition;
