/**
 Template Format:

 (1) id: number,

 (2) header: {
    title: string,
    subtitle: string || null
  },

 (3) author: string,

 (4) date: Date || null,

 (5) publisher: string || null,

 (6) cover: url,

 (7) description: string[] || null,

 (8) chapters: { Object[ { title: string, subtitle: string, description?: string[] || null } ] }


 */


export const CurrentReadings = [
  {
    id         : 0,
    header     : {
      title   : 'Kill Anything That Moves',
      subtitle: 'The Real American War in Vietnam'
    },
    author     : 'Nick Turse',
    date       : Date.parse('2013-01-15'),
    publisher  : 'Picador',
    cover      : './images/KillAnythingThatMoves.jpg',
    description: [
      'Based on classified documents and first-person interviews, a startling history of the American war on Vietnamese civilians. \n\n',
      'The American Empire Project \n\n',
      'Winner of the Ridenhour Prize for Reportorial Distinction \n\n\n',
      'Americans have long been taught that events such as the notorious My Lai massacre were isolated incidents in the Vietnam War, carried out by \"a few bad apples.\" But as award-winning journalist and historian Nick Turse demonstrates in this groundbreaking investigation, violence against Vietnamese noncombatants was not at all exceptional during the conflict. Rather, it was pervasive and systematic, the predictable consequence of official orders to \"kill anything that moves.\" \n\n',
      'Drawing on more than a decade of research in secret Pentagon files and extensive interviews with American veterans and Vietnamese survivors, Turse reveals for the first time how official policies resulted in millions of innocent civilians killed and wounded. In shocking detail, he lays out the workings of a military machine that made crimes in almost every major American combat unit all but inevitable. Kill Anything That Moves takes us from archives filled with Washington\'s long-suppressed war crime investigations to the rural Vietnamese hamlets that bore the brunt of the war; from boot camps where young American soldiers learned to hate all Vietnamese to bloodthirsty campaigns like Operation Speedy Express, in which a general obsessed with body counts led soldiers to commit what one participant called \"a My Lai a month.\" \n\n',
      'Thousands of Vietnam books later, Kill Anything That Moves, devastating and definitive, finally brings us face-to-face with the truth of a war that haunts Americans to this day. \n\n'
    ],
    link       : 'http://www.amazon.com/Kill-Anything-That-Moves-American/dp/1250045061/ref=sr_1_1?ie=UTF8&qid=1452120004&sr=8-1&keywords=kill+anything+that+moves',
    chapters   : [
      {
        chapter     : 1,
        chapterTitle: 'The Massacre at Trieu Ai',
        pages       : '1-17'
      },
      {
        chapter     : 2,
        chapterTitle: 'A System of Suffering',
        pages       : '18-46'
      },
      {
        chapter     : 3,
        chapterTitle: 'Overkill',
        pages       : '47-72'
      },
      {
        chapter     : 4,
        chapterTitle: 'A litany of atrocities',
        pages       : '73-108'
      },
      {
        chapter     : 5,
        chapterTitle: 'The bummer, the \'Gook-Hunting\' General, and the Butcher of the Delta',
        pages       : '109-135'
      },
      {
        chapter     : 6,
        chapterTitle: 'Where Have All the War Crimes Gone?',
        pages       : '136-168'
      }
    ]
  }
]

