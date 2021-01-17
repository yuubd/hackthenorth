import { gql } from '@apollo/client'

import { AppBar, Tab, Tabs, Box, Typography, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import Contributions from './ContributionGraph';
import CustomBox from '../Cards/Box'

import './ContributionTabs.css'

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
    const [logins, setLogins] = React.useState("bwdmonkey,yehee,yuubd,hurjun1995")

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className={classes.root}> 
        <div style={{marginBottom: 10}}>How do you perform against your GitHub friends?</div>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="contribution tabs"
          >
              <Tab aria-label="Commits" label="Commits" {...a11yProps(0)} />
              
              <Tab aria-label="Pull Requests" label="PRs" {...a11yProps(1)} />
              <Tab aria-label="Issues" label="Issues" {...a11yProps(2)} />
              <Tab aria-label="Users" label="Users"  {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}><div><CustomBox h={380} fixed><Contributions logins={logins} query={GET_COMMIT_CONTRIBUTIONS}/></CustomBox></div></TabPanel>
        <TabPanel value={value} index={1}><div><CustomBox h={380} fixed><Contributions logins={logins} query={GET_ISSUE_CONTRIBUTIONS}/></CustomBox></div></TabPanel>
        <TabPanel value={value} index={2}><div><CustomBox h={380} fixed><Contributions logins={logins} query={GET_PULL_REQUESTS_CONTRIBUTIONS}/></CustomBox></div></TabPanel>
        <TabPanel value={value} index={3}>
        <TextField
          id="outlined"
          label="Enter users"
          style={{ margin: 8, width:"100%" }}
          placeholder="github username 1, github username 2, github username 3, ..."
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          required onChange={(e) => setLogins(e.target.value)}
        />
        </TabPanel>
        
      </div>
    )
}


export default ContributionTabs
