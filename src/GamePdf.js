import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  // StyleSheet,
  Image
} from '@react-pdf/renderer';

import styles from './styles';

const CreateData = () => {
  const game = {
    title: 'Tunnel Tag',
    image: './res/game_snapshot.jpg',
    description:
      ' This game is like tag, but when a child is tagged they freeze still with their legs apart to make a tunnel. To be unfrozen another child has to crawl through their legs',
    level: 2,
    directions: [
      {
        pointNumber: 1,
        pointDescription: 'One child is picked to be the giant'
      },
      {
        pointNumber: 2,
        pointDescription:
          "The giant stands at one end of the room with their back to the other children, and a piece of 'treasure' placed under their legs."
      },
      {
        pointNumber: 3,
        pointDescription:
          'The other children mush creep towards the giant and try to take the treasure.'
      },
      {
        pointNumber: 4,
        pointDescription:
          'If the giant turns around, the other children must freeze.'
      },
      {
        pointNumber: 5,
        pointDescription:
          "If a child is caught moving once the giant turns around they are 'out'(and can either go back to the start line, or wait until the next)"
      },
      {
        pointNumber: 6,
        pointDescription:
          'The child who eventually captures the treasure becomes the giant, and the game starts over again.'
      }
    ],
    requirements: ["A 'treasure' item for the giant", 'A large play area'],
    teacherInstruction: [
      'You need to try hard to stay still, even when you really want to move',
      'This helps us practice waiting for things we really want',
      'Our arms and legs might want to move, but our bodies have to stay still until its time to go'
    ],
    variations: {
      cognitive: [
        'Have there be two giants',
        'Give the giants cues. So if they turn around with their hands on their head, everyone has to drop to the ground'
      ],
      behavioural: [
        'Change the way children have to move. For example, they can only move by hopping.'
      ]
    }
  };

  return game;
};

export function GamePdf(props) {
  const data = CreateData();
  return (
    <React.Fragment>
      <Document>
        {/* <Page>
          <View style={styles.}>

          </View>
        </Page> */}
        <Page style={styles.page}>
          <View style={styles.gameContainer}>
            <View style={styles.gameDetails}>
              <Text style={styles.gameTitle}>{data.title}</Text>
              <Image source='./game_snapshot.jpg' style={styles.gameImage} />
              <Text style={styles.gameDescription}>{data.description}</Text>
              <View style={styles.footerContainer}>
                <Image source='./game_snapshot.jpg' style={styles.appLogo1} />
                <Text style={styles.gameLevel}>{`LEVEL ${data.level}`}</Text>
                <Image source='./game_snapshot.jpg' style={styles.appLogo2} />
              </View>

              {/* <View style={styles.subtitle}>
                      <View style={styles.vote}>
                        <Image source='star.png' style={styles.rating} />
                        <Text style={styles.vote_text}>{a.vote_count}</Text>
                      </View>
                      <View style={styles.vote}>
                        <Text style={styles.vote_pop}>{a.popularity}</Text>
                        <Text style={styles.vote_pop_text}>Popularity</Text>
                      </View>
                    </View>
                    <View style={styles.overviewContainer}>
                      <Text style={styles.movieOverview}>{a.overview}</Text>
                    </View>
                    <View style={styles.detailsFooter}>
                      <Text style={styles.lang}>
                        Language: {a.original_language.toUpperCase()}
                      </Text>
                      <Text style={styles.vote_average}>
                        Average Votes: {a.vote_average}
                      </Text>
                      <Text style={styles.vote_average}>
                        Release Date:{' '}
                        {moment(a.release_date, 'YYYY-MM-DD').format(
                          ' MMMM D Y'
                        )}
                      </Text>
                    </View> */}
            </View>
          </View>
        </Page>
      </Document>
    </React.Fragment>
  );
}
