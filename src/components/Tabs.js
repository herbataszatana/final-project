import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddPrivateList from "../components/AddPublicList";
import AddPublicList from "../components/AddPrivateList";


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