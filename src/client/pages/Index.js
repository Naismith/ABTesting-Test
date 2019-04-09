import React, {useState, useEffect} from 'react';
import loadable from '@loadable/component';
import axios from 'axios';

const LoadableIndexPage = loadable(({page = ''}) => {
  const color = page.charAt(0).toUpperCase() + page.slice(1);
  return import(`components/${color}`);
});

const DefaultComponent = () => <div>Test</div>;

const getComponentType = (page = '') => {
  if (!page) return DefaultComponent;
  return LoadableIndexPage;
};

const IndexPage = (props) => {
  const [tests, setTests] = useState({top: '', middle: '', bottom: ''});
  const {top, middle, bottom} = tests;
  const Top = getComponentType(top);
  const Middle = getComponentType(middle);
  const Bottom = getComponentType(bottom);

  useEffect(() => {
    axios.get('/api/abtest').then(({data}) => {
      setTests(data);
    });
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <Top page={top} fallback={<div>Loading Lazy Component</div>} />
      <Middle page={middle} fallback={<div>Loading Lazy Component</div>} />
      <Bottom page={bottom} fallback={<div>Loading Lazy Component</div>} />
    </div>
  );
};

export default IndexPage;
