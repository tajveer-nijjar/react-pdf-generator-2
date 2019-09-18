import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
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
  gameLevel: {
    fontWeight: 800,
    color: '#0070a2',
    textAlign: 'center',
    marginTop: 100
  },
  appLogo: {
    height: 100,
    width: 100,
    border: '1pt solid red'
  },
  //////////////////////////////////////////////////////////////////////////
  movieOverview: {
    fontSize: 10
  },

  image: {
    height: 200,
    width: 150
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    marginBottom: 12
  },
  vote: {
    display: 'flex',
    flexDirection: 'row'
  },
  rating: {
    height: 10,
    width: 10
  },
  vote_text: {
    fontSize: 10
  },
  vote_pop: {
    fontSize: 10,
    padding: 2,
    backgroundColor: '#61C74F',
    color: '#fff'
  },
  vote_pop_text: {
    fontSize: 10,
    marginLeft: 4
  },
  overviewContainer: {
    minHeight: 110
  },
  detailsFooter: {
    display: 'flex',
    flexDirection: 'row'
  },
  lang: {
    fontSize: 8,
    fontWeight: 700
  },
  vote_average: {
    fontSize: 8,
    marginLeft: 4,
    fontWeight: 'bold'
  }
});

export default styles;
