import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddPrivateList from "../Lists/AddPrivateList";
import AddPublicList from "../Lists/AddPublicList";

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