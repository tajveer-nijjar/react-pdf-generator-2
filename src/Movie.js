import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from "@react-pdf/renderer";
import moment from "moment";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  movieContainer: {
    backgroundColor: "#f6f6f5",
    display: "flex",
    flexDirection: "row",
    padding: 5
  },
  movieDetails: {
    display: "flex",
    marginLeft: 5
  },
  movieTitle: {
    fontSize: 15,
    marginBottom: 10
  },
  movieOverview: {
    fontSize: 10
  },

  image: {
    height: 200,
    width: 150
  },
  subtitle: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 150,
    alignItems: "center",
    marginBottom: 12
  },
  vote: {
    display: "flex",
    flexDirection: "row"
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
    backgroundColor: "#61C74F",
    color: "#fff"
  },
  vote_pop_text: {
    fontSize: 10,
    marginLeft: 4
  },
  overviewContainer: {
    minHeight: 110
  },
  detailsFooter: {
    display: "flex",
    flexDirection: "row"
  },
  lang: {
    fontSize: 8,
    fontWeight: 700
  },
  vote_average: {
    fontSize: 8,
    marginLeft: 4,
    fontWeight: "bold"
  }
});

const CreateData = () => {
  const data = [
    {
      popularity: 1.734,
      vote_count: 7,
      video: false,
      poster_path: "/t4pkUIbqs53M0UVMQZUIS3SMTlJ.jpg",
      id: 572716,
      adult: false,
      backdrop_path: "/9NPQQwC64auzp6rjUSNnUnxBzhb.jpg",
      original_language: "en",
      original_title: "Hamilton",
      genre_ids: [18, 36, 10402],
      title: "Hamilton",
      vote_average: 10,
      overview:
        "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton.",
      release_date: "2015-01-20"
    },
    {
      popularity: 0.74,
      id: 462383,
      video: false,
      vote_count: 5,
      vote_average: 10,
      title: "Cheers",
      release_date: "",
      original_language: "en",
      original_title: "Cheers",
      genre_ids: [],
      backdrop_path: null,
      adult: false,
      overview:
        "10 years ago, a boy abandoned his alcoholic mother. Now a man, he returns to meet her.",
      poster_path: null
    },
    {
      popularity: 0.603,
      id: 411990,
      video: false,
      vote_count: 5,
      vote_average: 10,
      title: "Endless",
      release_date: "2016-08-19",
      original_language: "en",
      original_title: "Endless",
      genre_ids: [10402],
      backdrop_path: "/5E1CqtM4kkVDLmRS9FC4rxVcHIl.jpg",
      adult: false,
      overview:
        "A visual album by American singer Frank Ocean. It follows Frank as he completes a set of spiraling stairs.",
      poster_path: "/6EOV65KBIpn7SNUZouLlGZmPXCo.jpg"
    },
    {
      popularity: 25.545,
      vote_count: 4,
      video: false,
      poster_path: "/2oQTIkEeVhER9kkNPCpBDvPXNoF.jpg",
      id: 565341,
      adult: false,
      backdrop_path: "/9PQO5Z8NvjBbX07HZCuwPUjBlV9.jpg",
      original_language: "en",
      original_title: "The Sound of Silence",
      genre_ids: [18],
      title: "The Sound of Silence",
      vote_average: 10,
      overview:
        "A successful \"house tuner\" in New York City, who calibrates the sound in people's homes in order to adjust their moods, meets a client with a problem he can't solve.",
      release_date: "2019-09-13"
    },
    {
      popularity: 2.159,
      id: 539820,
      video: false,
      vote_count: 4,
      vote_average: 10,
      title: "Beyoncé: Live At Global Citizen Festival 2015",
      release_date: "2015-09-26",
      original_language: "en",
      original_title: "Beyoncé: Live At Global Citizen Festival 2015",
      genre_ids: [10402],
      backdrop_path: "/poDwB1lLl1y88mVOygRATQUnYju.jpg",
      adult: false,
      overview:
        "The superstar takes us in an amazing performance at Global Citizen Festival in 2015. The global campaign aims to reduce extreme poverty by 23% and also involves projects that seek to change the lives of girls and women around the world.",
      poster_path: "/zfOkY4RajPImhnI2GEwWiu9QcAw.jpg"
    },
    {
      popularity: 1.758,
      vote_count: 4,
      video: false,
      poster_path: "/so2QCAjQWkrA336kI18UiuWuXpL.jpg",
      id: 423778,
      adult: false,
      backdrop_path: "/enQxT0ZABPj5Vdiev8Of1JUQtTY.jpg",
      original_language: "es",
      original_title: "La flor",
      genre_ids: [18, 14],
      title: "La flor",
      vote_average: 10,
      overview:
        "Almost 10 years in production, 14 hours of film. In six stories, Llinas uses the same four actresses in various ways.",
      release_date: "2019-03-06"
    },
    {
      popularity: 1.404,
      id: 333673,
      video: false,
      vote_count: 4,
      vote_average: 10,
      title: "Brooklyn Bridge",
      release_date: "",
      original_language: "en",
      original_title: "Brooklyn Bridge",
      genre_ids: [18],
      backdrop_path: "/krEdmLUj8HFEYzgmBlYhRHI3BCb.jpg",
      adult: false,
      overview:
        "Washington Roebling, a civil engineer and son of architect, John A. Roebling, is entrusted with completing his father's famous Brooklyn Bridge.",
      poster_path: null
    },
    {
      popularity: 0.6,
      id: 278229,
      video: false,
      vote_count: 4,
      vote_average: 10,
      title: "Only Fools and Horses - To Hull and Back",
      release_date: "1985-12-25",
      original_language: "en",
      original_title: "Only Fools and Horses - To Hull and Back",
      genre_ids: [35],
      backdrop_path: null,
      adult: false,
      overview:
        "Boycie and Abdul pitch a diamond scam to Del Boy, who immediately turns them down. That is until they offer him a £15,000 cut of the estimated £150,000 sale of the stone on the UK market. Del finds himself designated as the courier between Holland and Britain. No sooner has Del enlisted a reluctant Rodders, he hears his old foil Chief Inspector Slater is eyeing Boycie and Abdul as drug dealers. Del decides to hide undetected in the back of Denzil's van. Denzil then getting in and driving them to Hull (pursued by Rodney) was not part of the plan. Thinking quickly, they hire a boat, and let Uncle Albert guide them to Amsterdam. Overcoming counterfeit cash, Albert's amnesia, it's only the arrival of Slater that scuppers them. Despite this, it's Del who has the last laugh.",
      poster_path: "/oRpY2ZD7xnKYQqNjYBOwuhhVPo1.jpg"
    },
    {
      popularity: 0.968,
      id: 276913,
      video: false,
      vote_count: 4,
      vote_average: 10,
      title: "Hidden Colors 3: The Rules of Racism",
      release_date: "2014-06-26",
      original_language: "en",
      original_title: "Hidden Colors 3: The Rules of Racism",
      genre_ids: [99],
      backdrop_path: "/zXHaYaTH8n2fCUZ61itXu1PpBKN.jpg",
      adult: false,
      overview:
        "Filmmaker Tariq Nasheed explores the topics of race, racism, and history within the United States.",
      poster_path: "/5dUET3bhOvDJ9Pyfgp4t0yKSSPq.jpg"
    },
    {
      popularity: 0.6,
      id: 224260,
      video: false,
      vote_count: 4,
      vote_average: 10,
      title: "Vadh",
      release_date: "",
      original_language: "hi",
      original_title: "Vadh",
      genre_ids: [],
      backdrop_path: null,
      adult: false,
      overview:
        "Dr. Arjun Singh (Nana Patekar) is a leading doctor specializing in psycology. His wife Jyoti (Anupama Verma) is much younger in age than him. Not completely fulfilled, this leads her to have an extra-marital affair with Dr. Singh's close friend. Dr. Singh inadvertently finds out about this affair, and decides to plot vengeance, so venomous that it will place his close friend, his wife, his brother, and he himself in mortal danger.",
      poster_path: "/ml0F96YdphzPuQZrqxjaZceDwzJ.jpg"
    },
    {
      popularity: 3.037,
      id: 196942,
      video: false,
      vote_count: 4,
      vote_average: 10,
      title: "Destiny",
      release_date: "1997-05-27",
      original_language: "fr",
      original_title: "Dakan",
      genre_ids: [18, 10749],
      backdrop_path: "/qFPBFMTWvE9DabkX8E1wuSp9hkB.jpg",
      adult: false,
      overview:
        "Though gay-themed stories about \"coming out\" and accepting one's sexuality are not uncommon in Western countries, such tales are still rare in many conservative African nations. Considered a ground-breaking film in its native Guinea, and filmed amidst a storm of controversy, Mohamed Camara's Dakan is the first of its nations films to directly address issues surrounding homosexuality. The story centers on the romance between two 20-year-old men, Manga and Sory who are first seen making out in a car. The trouble begins when Manga tells his widowed mother about his love for Sory, who is busy contending with his outraged father. The parents insist that the two never see each other again. Manga's mother then uses witchcraft to cleanse her son and change him into a heterosexual. Time passes and eventually Manga begins to date a girl. But it soon becomes apparent that try as he might, Manga's heart belongs to Sory.",
      poster_path: "/pLrGZ3HeH8Bzv6aJobusMaDdNlO.jpg"
    },
    {
      popularity: 1.612,
      id: 146329,
      video: false,
      vote_count: 4,
      vote_average: 10,
      title: "Ammaa Ki Boli",
      release_date: "",
      original_language: "en",
      original_title: "Ammaa Ki Boli",
      genre_ids: [],
      backdrop_path: "/9sQrDtKD8plFMYY3frX0NtabHuh.jpg",
      adult: false,
      overview:
        "Ammaa Ki Boli is a comical genre movie directed by Narayan Chauhan and produced by Mukesh Chaudhary under the banner of Street Act Production. The story revolves around an old-aged husbandless mother, her 5 grown-up children’s and a second-rate two-seater scooter. The movie features Faruk Zafar as Ammaa in lead role, following with Priyal Patil, Govind Namdev, Sitaram Panchal, Sanjay Mishra, Hrishita Bhatt, Zakir Hussain Actor, Ishtiaq Khan, Shekhar Singh and others in their respective important roles",
      poster_path: "/320nrO3zOIn4s9qgrr7G1NoEhbB.jpg"
    },
    {
      popularity: 1.085,
      id: 116369,
      video: false,
      vote_count: 4,
      vote_average: 10,
      title: "The Tragedy of Man",
      release_date: "2011-11-27",
      original_language: "en",
      original_title: "Az ember tragédiája",
      genre_ids: [16, 18],
      backdrop_path: "/ytgkL1HQrVad3ChcYnyCARpHO7a.jpg",
      adult: false,
      overview:
        "Jankovic’s adaptation of the eponymous play, is divided into multiple parts and depicts the creation and fall of Man throughout history.",
      poster_path: "/eajizCvTaeyAf2kkUfMdEgIQ5fQ.jpg"
    },
    {
      popularity: 1.27,
      id: 93162,
      video: false,
      vote_count: 4,
      vote_average: 10,
      title: "Jibon Thekey Neya",
      release_date: "1970-03-09",
      original_language: "bn",
      original_title: "জীবন থেকে নেয়া",
      genre_ids: [18, 36],
      backdrop_path: null,
      adult: false,
      overview:
        "A political satire of Bangladesh under the rule of Pakistan metaphorically, where an autocratic woman in one family symbolizes the political dictatorship of Ayub Khan in East Pakistan.",
      poster_path: "/pES4eUEWPjySmp6f59I3RzpEP1I.jpg"
    },
    {
      popularity: 0.734,
      id: 89585,
      video: false,
      vote_count: 4,
      vote_average: 10,
      title: "Chisholm '72: Unbought & Unbossed",
      release_date: "2004-01-14",
      original_language: "en",
      original_title: "Chisholm '72: Unbought & Unbossed",
      genre_ids: [99],
      backdrop_path: null,
      adult: false,
      overview:
        "In 1968, Shirley Chisholm becomes the first black woman elected to Congress. In 1972, she becomes the first black woman to run for president. Shunned by the political establishment, she's supported by a motley crew of blacks, feminists, and young voters. Their campaign-trail adventures are frenzied, fierce and fundamentally right on!",
      poster_path: "/8VYINIhNFyBdsfHtKdAFS9Auijo.jpg"
    },
    {
      popularity: 0.6,
      id: 624708,
      video: false,
      vote_count: 3,
      vote_average: 10,
      title: "A Case of Conscience",
      release_date: "",
      original_language: "it",
      original_title: "Un caso di coscienza",
      genre_ids: [35],
      backdrop_path: "/bunYXvGU0BdWW4i4v9N7XbW7Ka6.jpg",
      adult: false,
      overview:
        "A man in crisis just doesn’t know how to fix things with his conscience.",
      poster_path: "/rqZxYh5gx4E5oZ6hWqxqFz0piRn.jpg"
    },
    {
      popularity: 2.384,
      vote_count: 3,
      video: false,
      poster_path: "/wG5WYLx8Oc53i9UZ2ZsKUiG74db.jpg",
      id: 616062,
      adult: false,
      backdrop_path: "/zMBBOEEiG1nKvB0iGUwB3OjSvLx.jpg",
      original_language: "en",
      original_title: "Fallen Hearts",
      genre_ids: [18],
      title: "Fallen Hearts",
      vote_average: 10,
      overview:
        "Heaven is now happily married and ready to settle back in her hometown. But after a trip to Farthinggale Manor, Heaven is persuaded to stay. Lured by her grandfather to live amidst the wealthy and privileged Heaven seems to have it all until the ghosts of her past rise up once more, threatening her precious new life.",
      release_date: "2019-08-10"
    },
    {
      popularity: 2.713,
      vote_count: 3,
      video: false,
      poster_path: "/pCKXBsPWnZEidNAWtoBTp6NWVYv.jpg",
      id: 616061,
      adult: false,
      backdrop_path: "/xr7W91F2IDNx3C7wA5lzyPt1qhT.jpg",
      original_language: "en",
      original_title: "Dark Angel",
      genre_ids: [10770],
      title: "Dark Angel",
      vote_average: 10,
      overview:
        "Based on the second book in the Casteel Series, Heaven has finally found the new life she always dreamed of with her newly discovered grandparents. Upon closer inspection, beauty and riches hide sinister secrets Heaven has tried desperately to rid herself of.",
      release_date: "2019-08-03"
    },
    {
      popularity: 0.998,
      id: 571679,
      video: false,
      vote_count: 3,
      vote_average: 10,
      title: "Now United: Dreams Come True",
      release_date: "2018-12-29",
      original_language: "en",
      original_title: "Now United: Dreams Come True",
      genre_ids: [10402, 99],
      backdrop_path: null,
      adult: false,
      overview:
        "See how the group came to be and what it took for each member to be selected into the final group of Now United.",
      poster_path: "/hINGeQe5psODwFzkHIOg0HqmYZa.jpg"
    },
    {
      popularity: 0.6,
      vote_count: 3,
      video: false,
      poster_path: "/pnDaSaa0udSuz9dh8etWdbMRA02.jpg",
      id: 564672,
      adult: false,
      backdrop_path: "/p8qMDCHDpJXXSSLJWgc4SSzZOzF.jpg",
      original_language: "it",
      original_title: "Get Big",
      genre_ids: [99],
      title: "Get Big",
      vote_average: 10,
      overview:
        "An Ultimate Frisbee team competes in a beach tournament on the shores of Sardinia.",
      release_date: "2018-11-16"
    }
  ];

  return data;
};

export function PdfDocument(props) {
  console.log("pdf props", props.data);
  const data = CreateData();
  return (
    <Document>
      <Page style={styles.page}>
        {data
          ? data.map((a, index) => {
              return (
                <View key={index} style={styles.movieContainer}>
                  <View style={styles.movieDetails}>
                    <Text style={styles.movieTitle}>{a.title}</Text>
                    <View style={styles.subtitle}>
                      <View style={styles.vote}>
                        <Image source="star.png" style={styles.rating} />
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
                        Release Date:{" "}
                        {moment(a.release_date, "YYYY-MM-DD").format(
                          " MMMM D Y"
                        )}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })
          : ""}
      </Page>
    </Document>
  );
}
