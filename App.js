import React from 'react';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';
import RightPanel from './RightPanel';
import handleClick_k from './handleClick_k';
import handleClick_k_looking from './handleClick_k_looking';
import handleClick_bb from './handleClick_bb';
import handleClick_ibb from './handleClick_ibb';
import handleClick_hbp from './handleClick_hbp';
import handleClick_pop1 from './handleClick_pop1';
import handleClick_pop2 from './handleClick_pop2';
import handleClick_pop3 from './handleClick_pop3';
import handleClick_pop4 from './handleClick_pop4';
import handleClick_pop5 from './handleClick_pop5';
import handleClick_pop6 from './handleClick_pop6';
import handleClick_pop7 from './handleClick_pop7';
import handleClick_pop8 from './handleClick_pop8';
import handleClick_pop9 from './handleClick_pop9';
import handleClick_wp from './handleClick_wp';
import handleClick_pb from './handleClick_pb';
import handleClick_sb1 from './handleClick_sb1';
import handleClick_sb2 from './handleClick_sb2';
import handleClick_sb3 from './handleClick_sb3';
import handleClick_steal from './handleClick_steal';
import handleClick_1b from './handleClick_1b';
import handleClick_2b from './handleClick_2b';
import handleClick_3b from './handleClick_3b';
import handleClick_hr from './handleClick_hr';
import handleClick_2b_cancel_button from './handleClick_2b_cancel_button';
import handleClick_2b_stay_at_third from './handleClick_2b_stay_at_third';
import handleClick_2b_scores from './handleClick_2b_scores';
import handleClick_2b_out_at_home from './handleClick_2b_out_at_home';
import handleClick_1b_stay_at_second from './handleClick_1b_stay_at_second';
import handleClick_1b_advance_to_third from './handleClick_1b_advance_to_third';
import handleClick_1b_out_at_third from './handleClick_1b_out_at_third';
import handleClick_1b_stay_at_third from './handleClick_1b_stay_at_third';
import handleClick_1b_scores from './handleClick_1b_scores';
import handleClick_1b_out_at_home from './handleClick_1b_out_at_home';
import handleClick_1b_ok_button from './handleClick_1b_ok_button';
import handleClick_1b_cancel_button from './handleClick_1b_cancel_button';
import handleClick_2b_ok_button from './handleClick_2b_ok_button';

import ModalK from './ModalK';
import ModalBB from './ModalBB';
import ModalPOP from './ModalPOP';
import ModalSB from './ModalSB';
import Modal2B from './Modal2B';
import Modal1B from './Modal1B';

import handleClick_K_ShowModal from './handleClick_K_ShowModal';
import handleClick_K_CloseModal from './handleClick_K_CloseModal';

import handleClick_BB_ShowModal from './handleClick_BB_ShowModal';
import handleClick_BB_CloseModal from './handleClick_BB_CloseModal';

import handleClick_POP_ShowModal from './handleClick_POP_ShowModal';
import handleClick_POP_CloseModal from './handleClick_POP_CloseModal';

import handleClick_SB_CloseModal from './handleClick_SB_CloseModal';
import handleClick_SB_ShowModal from './handleClick_SB_ShowModal';

import './index.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      steal_btn_active: false,
      wp_active: false,
      pb_active: false,
      sb_active: false,
      cs_active: false,
      show_k_modal: false,
      show_pop_modal: false,
      show_sb_modal: false,
      show_2b_modal: false,
      show_1b_modal: false,
      vTeamName: "Rangers",
      hTeamName: "Angels",
      vTeamAbbr: "TEX",
      hTeamAbbr: "LAA",
      vBatter: 0,
      hBatter: 0,
      vColumn: 0,
      hColumn: 0,
      highlight_sb1: false,
      highlight_sb2: false,
      highlight_sb3: false,
      highlight_1b_stay_at_second: false,
      highlight_1b_advance_to_third: false,
      highlight_1b_out_at_third: false,
      highlight_1b_stay_at_third: false,
      highlight_1b_scores: false,
      highlight_1b_out_at_home: false,
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

    // handleClick for POPUP
    this.handleClick_POP_ShowModal = handleClick_POP_ShowModal.bind(this);
    this.handleClick_POP_CloseModal = handleClick_POP_CloseModal.bind(this);
    this.handleClick_pop1 = handleClick_pop1.bind(this);
    this.handleClick_pop2 = handleClick_pop2.bind(this);
    this.handleClick_pop3 = handleClick_pop3.bind(this);
    this.handleClick_pop4 = handleClick_pop4.bind(this);
    this.handleClick_pop5 = handleClick_pop5.bind(this);
    this.handleClick_pop6 = handleClick_pop6.bind(this);
    this.handleClick_pop7 = handleClick_pop7.bind(this);
    this.handleClick_pop8 = handleClick_pop8.bind(this);
    this.handleClick_pop9 = handleClick_pop9.bind(this);

    this.handleClick_wp = handleClick_wp.bind(this);
    this.handleClick_pb = handleClick_pb.bind(this);

    // handleClick for SB
    this.handleClick_SB_ShowModal = handleClick_SB_ShowModal.bind(this);
    this.handleClick_SB_CloseModal = handleClick_SB_CloseModal.bind(this);
    this.handleClick_sb1 = handleClick_sb1.bind(this);
    this.handleClick_sb2 = handleClick_sb2.bind(this);
    this.handleClick_sb3 = handleClick_sb3.bind(this);
    this.handleClick_steal = handleClick_steal.bind(this);

    // handleClick for 1B
    this.handleClick_1b = handleClick_1b.bind(this);

    this.handleClick_1b_stay_at_second = handleClick_1b_stay_at_second.bind(this);
    this.handleClick_1b_advance_to_third = handleClick_1b_advance_to_third.bind(this);
    this.handleClick_1b_out_at_third = handleClick_1b_out_at_third.bind(this);
    
    this.handleClick_1b_stay_at_third = handleClick_1b_stay_at_third.bind(this);
    this.handleClick_1b_scores = handleClick_1b_scores.bind(this);
    this.handleClick_1b_out_at_home = handleClick_1b_out_at_home.bind(this);

    this.handleClick_1b_ok_button = handleClick_1b_ok_button.bind(this);
    this.handleClick_1b_cancel_button = handleClick_1b_cancel_button.bind(this);

    // handleClick for 2B
    this.handleClick_2b = handleClick_2b.bind(this);
    this.handleClick_2b_stay_at_third = handleClick_2b_stay_at_third.bind(this);
    this.handleClick_2b_scores = handleClick_2b_scores.bind(this);
    this.handleClick_2b_out_at_home = handleClick_2b_out_at_home.bind(this);
    this.handleClick_2b_cancel_button = handleClick_2b_cancel_button.bind(this);
    this.handleClick_2b_ok_button = handleClick_2b_ok_button.bind(this);
    // handleClick for 3B
    this.handleClick_3b = handleClick_3b.bind(this);
    // handleClick for HR
    this.handleClick_hr = handleClick_hr.bind(this);

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
          wp_active={this.state.wp_active}
          pb_active={this.state.pb_active}
          sb_active={this.state.sb_active}
          cs_active={this.state.cs_active}
          btn_pop={this.handleClick_POP_ShowModal}
          btn_wp={this.handleClick_wp}
          btn_pb={this.handleClick_pb}
          btn_sb={this.handleClick_SB_ShowModal}
          btn_hr={this.handleClick_hr}
          btn_3b={this.handleClick_3b}
          btn_2b={this.handleClick_2b}
          btn_1b={this.handleClick_1b}
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
         <ModalPOP result1={this.handleClick_pop1} result2={this.handleClick_pop2} result3={this.handleClick_pop3} result4={this.handleClick_pop4} result5={this.handleClick_pop5} result6={this.handleClick_pop6} result7={this.handleClick_pop7} result8={this.handleClick_pop8} result9={this.handleClick_pop9} show={this.state.show_pop_modal} close={this.handleClick_POP_CloseModal}/>
         <ModalSB stealactive={this.state.steal_btn_active} highlight1={this.state.highlight_sb1} highlight2={this.state.highlight_sb2} highlight3={this.state.highlight_sb3} baserunner0={this.state.runnersOnBase[0]} baserunner1={this.state.runnersOnBase[1]} baserunner2={this.state.runnersOnBase[2]} result1={this.handleClick_sb1} result2={this.handleClick_sb2} result3={this.handleClick_sb3} show={this.state.show_sb_modal} close={this.handleClick_SB_CloseModal} steal={this.handleClick_steal} />
         <Modal2B ok={this.handleClick_2b_ok_button} cancel={this.handleClick_2b_cancel_button} highlight_2b_stay_at_third={this.state.highlight_2b_stay_at_third} highlight_2b_scores = {this.state.highlight_2b_scores} highlight_2b_out_at_home = {this.state.highlight_2b_out_at_home} show={this.state.show_2b_modal} result1={this.handleClick_2b_stay_at_third} result2={this.handleClick_2b_scores} result3={this.handleClick_2b_out_at_home} runners={this.state.runnersOnBase} />
         <Modal1B ok={this.handleClick_1b_ok_button} cancel={this.handleClick_1b_cancel_button} highlight_1b_stay_at_second={this.state.highlight_1b_stay_at_second} highlight_1b_advance_to_third={this.state.highlight_1b_advance_to_third} highlight_1b_out_at_third={this.state.highlight_1b_out_at_third} highlight_1b_stay_at_third={this.state.highlight_1b_stay_at_third} highlight_1b_scores={this.state.highlight_1b_scores} highlight_1b_out_at_home={this.state.highlight_1b_out_at_home} runners={this.state.runnersOnBase} show={this.state.show_1b_modal} result1={this.handleClick_1b_stay_at_second} result2={this.handleClick_1b_advance_to_third} result3={this.handleClick_1b_out_at_third} result4={this.handleClick_1b_stay_at_third} result5={this.handleClick_1b_scores} result6={this.handleClick_1b_out_at_home}/>
      </div>
    );
  }
}

export default App;