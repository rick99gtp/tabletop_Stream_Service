import React from 'react';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';
import RightPanel from './RightPanel';
import handleClick_k from './handleClick_k';
import handleClick_k_looking from './handleClick_k_looking';
import handleClick_bb from './handleClick_bb';
import handleClick_ibb from './handleClick_ibb';
import handleClick_hbp from './handleClick_hbp';
import ModalK from './ModalK';
import ModalBB from './ModalBB';
import handleClick_K_ShowModal from './handleClick_K_ShowModal';
import handleClick_K_CloseModal from './handleClick_K_CloseModal';
import handleClick_BB_ShowModal from './handleClick_BB_ShowModal';
import handleClick_BB_CloseModal from './handleClick_BB_CloseModal';
import './index.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      show_k_modal: false,
      vTeamName: "Rangers",
      hTeamName: "Angels",
      vTeamAbbr: "TEX",
      hTeamAbbr: "LAA",
      vBatter: 0,
      hBatter: 0,
      vColumn: 0,
      hColumn: 0,
      vPitcherName: "Minor",
      hPitcherName: "Heaney",
      vPitcherThrows: "L",
      hPitcherThrows: "L",
      vPitcherPitches: 0,
      hPitcherPitches: 0,
      inning: 1,
      teamBatting: 0,
      outs: 0,
      pitchCount: "0-0",
      vRuns: 0,
      hRuns: 0,
      runnersOnBase: [
        99,
        99,
        99
      ],
      runnersOnBaseColumn: [
        0,
        0,
        0
      ],
      vLineup: [
        {
          name: "S. Choo",
          pos: "LF"
        },
        {
          name: "E. Andrus",
          pos: "SS"
        },
        {
          name: "N. Mazara",
          pos: "RF"
        },
        {
          name: "H. Pence",
          pos: "DH"
        },
        {
          name: "J. Gallo",
          pos: "CF"
        },
        {
          name: "A. Cabrera",
          pos: "3B"
        },
        {
          name: "D. Santana",
          pos: "2B"
        },
        {
          name: "L. Forsythe",
          pos: "1B"
        },
        {
          name: "J. Mathis",
          pos: "C"
        }
      ],
      hLineup: [
        {
          name: "D. Fletcher",
          pos: "LF"
        },
        {
          name: "M. Trout",
          pos: "DH"
        },
        {
          name: "A. Simmons",
          pos: "SS"
        },
        {
          name: "A. Pujols",
          pos: "1B"
        },
        {
          name: "J. Lucroy",
          pos: "C"
        },
        {
          name: "K. Calhoun",
          pos: "RF"
        },
        {
          name: "Z. Cozart",
          pos: "3B"
        },
        {
          name: "T. La Stella",
          pos: "2B"
        },
        {
          name: "P. Bourjos",
          pos: "CF"
        }
      ],
      vPlayerScoreSheetCell: [
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: '#fdf1d4',
              firstbasetext: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        }
      ],
      hPlayerScoreSheetCell: [
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        },
        {
          cell: [
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            },
            {
              centertext: '',
              basesbgcolor: 'white',
              firstBaseText: '',
              secondBaseText: '',
              thirdBaseText: '',
              homeBaseText: '',
              bgImage: 'result-empty.png'
            }
          ]
        }
      ],
    };

        // handleClick for Strikeouts
    this.handleClick_k = handleClick_k.bind(this);
    this.handleClick_k_looking = handleClick_k_looking.bind(this);
    this.handleClick_K_ShowModal = handleClick_K_ShowModal.bind(this);
    this.handleClick_K_CloseModal = handleClick_K_CloseModal.bind(this);

    // handleClick for Walks
    this.handleClick_bb = handleClick_bb.bind(this);
    this.handleClick_ibb = handleClick_ibb.bind(this);
    this.handleClick_BB_ShowModal = handleClick_BB_ShowModal.bind(this);
    this.handleClick_BB_CloseModal = handleClick_BB_CloseModal.bind(this);

    // handleClick for HBP
    this.handleClick_hbp = handleClick_hbp.bind(this);

  }

  render() {
    var appMain = {
      display: "grid",
      gridTemplateColumns: "1fr 4fr 1fr",
      gridTemplateRows: "1fr",
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      height: "100vh",
      width: "100vw",
      position: "relative"
    };

    return (
      <div style={appMain}>
        <LeftPanel
          vBatter1Name={this.state.vLineup[0].name}
          vBatter2Name={this.state.vLineup[1].name}
          vBatter3Name={this.state.vLineup[2].name}
          vBatter4Name={this.state.vLineup[3].name}
          vBatter5Name={this.state.vLineup[4].name}
          vBatter6Name={this.state.vLineup[5].name}
          vBatter7Name={this.state.vLineup[6].name}
          vBatter8Name={this.state.vLineup[7].name}
          vBatter9Name={this.state.vLineup[8].name}
          vBatter1Pos={this.state.vLineup[0].pos}
          vBatter2Pos={this.state.vLineup[1].pos}
          vBatter3Pos={this.state.vLineup[2].pos}
          vBatter4Pos={this.state.vLineup[3].pos}
          vBatter5Pos={this.state.vLineup[4].pos}
          vBatter6Pos={this.state.vLineup[5].pos}
          vBatter7Pos={this.state.vLineup[6].pos}
          vBatter8Pos={this.state.vLineup[7].pos}
          vBatter9Pos={this.state.vLineup[8].pos}
          vPitcherName={this.state.vPitcherName}
          vPitcherThrows={this.state.vPitcherThrows}
          vTeamName={this.state.vTeamName}
          hTeamName={this.state.hTeamName}
        />
        <CenterPanel
          teamBatting={this.state.teamBatting}
          vPlayerCell={this.state.vPlayerScoreSheetCell}
          hPlayerCell={this.state.hPlayerScoreSheetCell}
          btn_k={this.handleClick_K_ShowModal}
          btn_bb={this.handleClick_BB_ShowModal}
          btn_hbp={this.handleClick_hbp}
        />
        <RightPanel
          hBatter1Name={this.state.hLineup[0].name}
          hBatter2Name={this.state.hLineup[1].name}
          hBatter3Name={this.state.hLineup[2].name}
          hBatter4Name={this.state.hLineup[3].name}
          hBatter5Name={this.state.hLineup[4].name}
          hBatter6Name={this.state.hLineup[5].name}
          hBatter7Name={this.state.hLineup[6].name}
          hBatter8Name={this.state.hLineup[7].name}
          hBatter9Name={this.state.hLineup[8].name}
          hBatter1Pos={this.state.hLineup[0].pos}
          hBatter2Pos={this.state.hLineup[1].pos}
          hBatter3Pos={this.state.hLineup[2].pos}
          hBatter4Pos={this.state.hLineup[3].pos}
          hBatter5Pos={this.state.hLineup[4].pos}
          hBatter6Pos={this.state.hLineup[5].pos}
          hBatter7Pos={this.state.hLineup[6].pos}
          hBatter8Pos={this.state.hLineup[7].pos}
          hBatter9Pos={this.state.hLineup[8].pos}
          hPitcherName={this.state.hPitcherName}
          hPitcherThrows={this.state.hPitcherThrows}
         />
         <ModalK result1={this.handleClick_k} result2={this.handleClick_k_looking} show={this.state.show_k_modal} close={this.handleClick_K_CloseModal} />
         <ModalBB result1={this.handleClick_bb} result2={this.handleClick_ibb} show={this.state.show_bb_modal} close={this.handleClick_BB_CloseModal} />
      </div>
    );
  }
  
}

export default App;