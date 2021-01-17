import { gql } from '@apollo/client'

import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CompareArrowsSharpIcon from '@material-ui/icons/CompareArrowsSharp';
import EmojiEmotionsSharpIcon from '@material-ui/icons/EmojiEmotionsSharp';
import CallSplitSharpIcon from '@material-ui/icons/CallSplitSharp';
import { AppBar, Tab, Tabs, Box, Typography, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import Contributions from './ContributionGraph';
import CustomBox from '../Cards/Box'


const GET_COMMIT_CONTRIBUTIONS = gql`
query($logins:String!) {
  contributionsByUsers: commitsContributionByUser(logins:$logins) {
    type
    user {
      id
      login
      avatarUrl
    }
    contributions {
      occurredAt
    }
  }
}
`

const GET_ISSUE_CONTRIBUTIONS = gql`
query($logins:String!) {
  contributionsByUsers: issuesContributionByUser(logins:$logins) {
    type
    user {
      id
      login
      avatarUrl
    }
    contributions {
      occurredAt
    }
  }
}
`

const GET_PULL_REQUESTS_CONTRIBUTIONS = gql`
query($logins:String!) {
  contributionsByUsers: pullRequestsContributionByUser(logins:$logins) {
    type
    user {
      id
      login
      avatarUrl
    }
    contributions {
      occurredAt
    }
  }
}
`

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index) => {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ContributionTabs = () => {
  // const { loading, error, data: rawData } = useQuery(GET_ISSUE_CONTRIBUTIONS)
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [logins, setLogins] = React.useState("bwdmonkey,yehee,yuubd")

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className={classes.root}>
        <Typography variant="h6">How do you perform against your GitHub friends?</Typography>
        <TabPanel value={value} index={0}><div><CustomBox h={380} fixed> <TextField required onChange={(e) => setLogins(e.target.value)} defaultValue="bwdmonkey, yehee, yuubd"/> </CustomBox></div></TabPanel>
        <TabPanel value={value} index={1}><div><CustomBox h={380} fixed><Contributions logins={logins} query={GET_COMMIT_CONTRIBUTIONS}/></CustomBox></div></TabPanel>
        <TabPanel value={value} index={2}><div><CustomBox h={380} fixed><Contributions logins={logins} query={GET_ISSUE_CONTRIBUTIONS}/></CustomBox></div></TabPanel>
        <TabPanel value={value} index={3}><div><CustomBox h={380} fixed><Contributions logins={logins} query={GET_PULL_REQUESTS_CONTRIBUTIONS}/></CustomBox></div></TabPanel>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="contribution tabs"
          >
              <Tab aria-label="Users" icon={<PeopleAltOutlinedIcon />} {...a11yProps(0)} />
              {/* <Tab label="GitScore" icon={} /> */}
              <Tab aria-label="Commits" icon={<EmojiEmotionsSharpIcon />} {...a11yProps(1)} />
              <Tab aria-label="Pull Requests" icon={<CompareArrowsSharpIcon />} {...a11yProps(2)} />
              <Tab aria-label="Issues" icon={<CallSplitSharpIcon />} {...a11yProps(3)} />
          </Tabs>
        </AppBar>
      </div>
    )
}

export default ContributionTabs
