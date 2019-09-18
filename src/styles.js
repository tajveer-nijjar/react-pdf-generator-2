import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff'
  },

  gameContainer: {
    // backgroundColor: '#f6f6f5',
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    height: '100%'
  },
  gameDetails: {
    display: 'flex',
    marginLeft: 5,
    border: '5pt solid #0070a2',
    borderRadius: 10
  },
  gameTitle: {
    marginTop: 30,
    fontSize: 30,
    marginBottom: 10,
    color: '#0070a2',
    textAlign: 'center'
  },
  gameImage: {
    height: 400,
    width: 570
  },
  gameDescription: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 30,
    marginLeft: 25,
    width: 520
  },
  //////////////////////////////////////////////////////////////////////////

  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 100
  },
  gameLevel: {
    fontWeight: 800,
    color: '#0070a2',
    textAlign: 'center',
    width: '20%'
    // flex: 1
    // order: 1
  },
  appLogo1: {
    height: 50,
    width: '20%'
    // flex: 1
    // order: 2
  },
  appLogo2: {
    height: 50,
    width: '20%'
    // flex: 1
    // order: 2
  },

  //////////////////////////////////////////////////////////////////////////

  page2Container: {
    // backgroundColor: '#f6f6f5',
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    height: '100%',
    fontSize: 16
  },
  page2Details: {
    display: 'flex',
    marginLeft: 5,
    // border: '5pt solid #0070a2',
    borderRadius: 10,
    width: 570
  },
  section: {
    margin: '20px 20px 20px 20px'
    // margin: '30px 0 10px 20px',
  },
  pg2Headings: {
    color: '#0070a2',
    textTransform: 'uppercase',
    fontSize: 14
  },
  directions: {},
  singleDirection: {
    margin: 4
  },
  blueNumbering: {
    color: '#0070a2'
  },
  orangeNumbering: {
    color: 'orange'
  },
  requirement: {
    // border: '1pt solid gray',
    backgroundColor: 'gray',
    borderRadius: 10,
    paddingLeft: 10
  },
  orangeRoundBox: {
    backgroundColor: 'orange',
    borderRadius: 10,
    paddingLeft: 10
  },
  blueRoundBox: {
    marginTop: 10,
    backgroundColor: '#0070a2',
    borderRadius: 10,
    paddingLeft: 10
  }

  //////////////////////////////////////////////////////////////////////////
});

export default styles;
