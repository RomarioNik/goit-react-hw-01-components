import { Tab, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import { user, data, friends, transactions } from "../data";
import { Container } from "./App.styled";
import { TabsStyled, TabPanelStyled } from "./App.styled";

TabPanelStyled.tabsRole = "TabPanel";

function App() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Container>
      <TabsStyled selectedTabClassName="tabHead">
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Statistics</Tab>
          <Tab>FriendList</Tab>
          <Tab>TransactionHistory</Tab>
        </TabList>

        <TabPanelStyled>
          <Profile
            username={username}
            tag={tag}
            location={location}
            avatar={avatar}
            stats={stats}
          />
        </TabPanelStyled>

        <TabPanelStyled>
          <Statistics title="Upload stats" data={data} />
        </TabPanelStyled>

        <TabPanelStyled>
          <FriendList friends={friends} />
        </TabPanelStyled>

        <TabPanelStyled>
          <TransactionHistory items={transactions} />
        </TabPanelStyled>
      </TabsStyled>
    </Container>
  );
}

export default App;
