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
    height: '100%'
  },
  page2Details: {
    display: 'flex',
    marginLeft: 5,
    border: '5pt solid #0070a2',
    borderRadius: 10,
    width: 570
  },

  pg2Headings: {
    margin: '30px 0 10px 20px',
    color: '#0070a2',
    textTransform: 'uppercase',
    fontSize: 14
  },
  directions: {
    margin: '0 20px 20px 20px'
  },
  singleDirection: {
    margin: 4
  },
  blueNumbering: {
    color: '#0070a2'
  }

  //////////////////////////////////////////////////////////////////////////
});

export default styles;
