import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddPrivateList from "./AddPublicList";
import AddPublicList from "./AddPrivateList";

function ListChoice() {
  return (
    
    <Tabs>
      <Tab eventKey="public" title="Public Lists">
        <AddPublicList/>
      </Tab>
      <Tab eventKey="private" title="Private Lists">
        <AddPrivateList/>
      </Tab>
    </Tabs>
  );
}

export default ListChoice;