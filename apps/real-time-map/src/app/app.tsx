import React, { useState, Suspense } from 'react';
import { createGlobalStyle } from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const EpidemicMapTab = React.lazy(() => import('../components/EpidemicMapTab'));
const NewsGalleryTab = React.lazy(() => import('../components/NewsGalleryTab'));
const RawDataTab = React.lazy(() => import('../components/RawDataTab'));

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const TabContent = ({ value }) => {
  switch(value) {
    case 0:
      return <EpidemicMapTab />;
    case 1:
      return <NewsGalleryTab />;
    case 2:
      return <RawDataTab />;
    default:
      return null;
  }
};

export const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <GlobalStyle />
      <AppBar position="fixed">
        <Tabs value={value} onChange={handleChange}
          variant="fullWidth">
          <Tab label="疫情地图" />
          <Tab label="新闻汇总" />
          <Tab label="原始数据" />
        </Tabs>
      </AppBar>
      <Suspense fallback={<div>Loading...</div>}>
        <TabContent value={value} />
      </Suspense>
    </>
  );
};

export default App;
