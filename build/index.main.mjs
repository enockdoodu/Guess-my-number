// Automatically generated with Reach 0.1.12 (796d7fb3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (796d7fb3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function PlayerOne(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for PlayerOne expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PlayerOne expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v240 = stdlib.protect(ctc0, interact.amount, 'for PlayerOne\'s interact field amount');
  const v241 = stdlib.protect(ctc0, interact.deadline, 'for PlayerOne\'s interact field deadline');
  
  const v244 = stdlib.protect(ctc0, await interact.getRandomNumber(), {
    at: './index.rsh:45:64:application',
    fs: ['at ./index.rsh:43:17:application call to [unknown function] (defined at: ./index.rsh:43:21:function exp)'],
    msg: 'getRandomNumber',
    who: 'PlayerOne'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v240, v244, v241],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v240, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v246, v247, v248], secs: v250, time: v249, didSend: v33, from: v245 } = txn1;
      
      sim_r.txns.push({
        amt: v246,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v259 = stdlib.safeAdd(v249, v248);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v246, v247, v248], secs: v250, time: v249, didSend: v33, from: v245 } = txn1;
  ;
  const v259 = stdlib.safeAdd(v249, v248);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v259],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v245, v246, v247, v248, v259],
      evt_cnt: 0,
      funcNum: 2,
      lct: v249,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v398, time: v397, didSend: v206, from: v396 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v245,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v398, time: v397, didSend: v206, from: v396 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:40:29:application',
      fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:57:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'PlayerOne'
      });
    
    return;
    
    }
  else {
    const {data: [v265], secs: v267, time: v266, didSend: v44, from: v264 } = txn2;
    const v269 = stdlib.add(v246, v246);
    ;
    const v270 = stdlib.safeAdd(v265, v247);
    const v271 = stdlib.safeDiv(v270, stdlib.checkedBigNumberify('./index.rsh:59:55:decimal', stdlib.UInt_max, '2'));
    let v272 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v273 = v266;
    let v280 = v269;
    
    let txn3 = txn2;
    while (await (async () => {
      const v288 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v288;})()) {
      const v291 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:66:48:application',
        fs: ['at ./index.rsh:65:19:application call to [unknown function] (defined at: ./index.rsh:65:23:function exp)'],
        msg: 'getGuess',
        who: 'PlayerOne'
        });
      const v292 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:67:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:65:19:application call to [unknown function] (defined at: ./index.rsh:65:23:function exp)'],
        msg: 'random',
        who: 'PlayerOne'
        });
      const v293 = stdlib.digest([ctc0, ctc0], [v292, v291]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v245, v246, v248, v264, v271, v280, v293],
        evt_cnt: 1,
        funcNum: 4,
        lct: v273,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:73:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v296], secs: v298, time: v297, didSend: v72, from: v295 } = txn4;
          
          ;
          const v306 = stdlib.safeAdd(v297, v248);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v296], secs: v298, time: v297, didSend: v72, from: v295 } = txn4;
      ;
      const v299 = stdlib.addressEq(v245, v295);
      stdlib.assert(v299, {
        at: './index.rsh:73:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'PlayerOne'
        });
      const v306 = stdlib.safeAdd(v297, v248);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: ['time', v306],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v245, v246, v248, v264, v271, v280, v296, v306],
          evt_cnt: 0,
          funcNum: 6,
          lct: v297,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v358, time: v357, didSend: v153, from: v356 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v245,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v358, time: v357, didSend: v153, from: v356 } = txn6;
        ;
        const v359 = stdlib.addressEq(v245, v356);
        const v360 = stdlib.addressEq(v264, v356);
        const v361 = v359 ? true : v360;
        stdlib.assert(v361, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:81:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'PlayerOne'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:40:29:application',
          fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:81:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'PlayerOne'
          });
        
        return;
        
        }
      else {
        const {data: [v312], secs: v314, time: v313, didSend: v82, from: v311 } = txn5;
        ;
        const v315 = stdlib.addressEq(v264, v311);
        stdlib.assert(v315, {
          at: './index.rsh:80:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'PlayerOne'
          });
        const v322 = stdlib.safeAdd(v313, v248);
        const txn6 = await (ctc.sendrecv({
          args: [v245, v246, v248, v264, v271, v280, v296, v312, v322, v292, v291],
          evt_cnt: 2,
          funcNum: 7,
          lct: v313,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:88:15:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v327, v328], secs: v330, time: v329, didSend: v92, from: v326 } = txn6;
            
            ;
            const v335 = stdlib.eq(v312, v328);
            const v336 = stdlib.eq(v312, v271);
            const v337 = stdlib.eq(v328, v271);
            const v411 = v337 ? stdlib.checkedBigNumberify('./index.rsh:10:12:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:12:12:decimal', stdlib.UInt_max, '1');
            const v412 = v336 ? stdlib.checkedBigNumberify('./index.rsh:8:12:decimal', stdlib.UInt_max, '0') : v411;
            const v334 = v335 ? stdlib.checkedBigNumberify('./index.rsh:6:12:decimal', stdlib.UInt_max, '1') : v412;
            const cv272 = v334;
            const cv273 = v329;
            const cv280 = v280;
            
            await (async () => {
              const v272 = cv272;
              const v273 = cv273;
              const v280 = cv280;
              
              if (await (async () => {
                const v288 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                
                return v288;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v374 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:97:16:decimal', stdlib.UInt_max, '2'));
                const v383 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:100:12:decimal', stdlib.UInt_max, '2'), v246);
                const v385 = v374 ? v245 : v264;
                sim_r.txns.push({
                  kind: 'from',
                  to: v385,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v322],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v245, v246, v248, v264, v271, v280, v296, v312, v322],
            evt_cnt: 0,
            funcNum: 8,
            lct: v313,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v340, time: v339, didSend: v119, from: v338 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v264,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v340, time: v339, didSend: v119, from: v338 } = txn7;
          ;
          const v341 = stdlib.addressEq(v245, v338);
          const v342 = stdlib.addressEq(v264, v338);
          const v343 = v341 ? true : v342;
          stdlib.assert(v343, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:90:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'PlayerOne'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:40:29:application',
            fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:90:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'PlayerOne'
            });
          
          return;
          
          }
        else {
          const {data: [v327, v328], secs: v330, time: v329, didSend: v92, from: v326 } = txn6;
          ;
          const v331 = stdlib.addressEq(v245, v326);
          stdlib.assert(v331, {
            at: './index.rsh:88:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'PlayerOne'
            });
          const v332 = stdlib.digest([ctc0, ctc0], [v327, v328]);
          const v333 = stdlib.digestEq(v296, v332);
          stdlib.assert(v333, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:92:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'PlayerOne'
            });
          const v335 = stdlib.eq(v312, v328);
          const v336 = stdlib.eq(v312, v271);
          const v337 = stdlib.eq(v328, v271);
          const v411 = v337 ? stdlib.checkedBigNumberify('./index.rsh:10:12:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:12:12:decimal', stdlib.UInt_max, '1');
          const v412 = v336 ? stdlib.checkedBigNumberify('./index.rsh:8:12:decimal', stdlib.UInt_max, '0') : v411;
          const v334 = v335 ? stdlib.checkedBigNumberify('./index.rsh:6:12:decimal', stdlib.UInt_max, '1') : v412;
          const cv272 = v334;
          const cv273 = v329;
          const cv280 = v280;
          
          v272 = cv272;
          v273 = cv273;
          v280 = cv280;
          
          txn3 = txn6;
          continue;}
        
        }
      
      
      
      }
    const v374 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:97:16:decimal', stdlib.UInt_max, '2'));
    const v383 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:100:12:decimal', stdlib.UInt_max, '2'), v246);
    const v385 = v374 ? v245 : v264;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v272, v271), {
      at: './index.rsh:103:24:application',
      fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:35:function exp)'],
      msg: 'seeOutcome',
      who: 'PlayerOne'
      });
    
    return;
    }
  
  
  
  };
export async function PlayerTwo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for PlayerTwo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PlayerTwo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v246, v247, v248], secs: v250, time: v249, didSend: v33, from: v245 } = txn1;
  ;
  const v259 = stdlib.safeAdd(v249, v248);
  stdlib.protect(ctc1, await interact.acceptWager(v246), {
    at: './index.rsh:52:25:application',
    fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:21:function exp)'],
    msg: 'acceptWager',
    who: 'PlayerTwo'
    });
  const v263 = stdlib.protect(ctc0, await interact.getRandomNumber(), {
    at: './index.rsh:53:64:application',
    fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:21:function exp)'],
    msg: 'getRandomNumber',
    who: 'PlayerTwo'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v245, v246, v247, v248, v259, v263],
    evt_cnt: 1,
    funcNum: 1,
    lct: v249,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v246, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v265], secs: v267, time: v266, didSend: v44, from: v264 } = txn2;
      
      const v269 = stdlib.add(v246, v246);
      sim_r.txns.push({
        amt: v246,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v270 = stdlib.safeAdd(v265, v247);
      const v271 = stdlib.safeDiv(v270, stdlib.checkedBigNumberify('./index.rsh:59:55:decimal', stdlib.UInt_max, '2'));
      const v272 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v273 = v266;
      const v280 = v269;
      
      if (await (async () => {
        const v288 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v288;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v374 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:97:16:decimal', stdlib.UInt_max, '2'));
        const v383 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:100:12:decimal', stdlib.UInt_max, '2'), v246);
        const v385 = v374 ? v245 : v264;
        sim_r.txns.push({
          kind: 'from',
          to: v385,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v259],
    tys: [ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v245, v246, v247, v248, v259],
      evt_cnt: 0,
      funcNum: 2,
      lct: v249,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v398, time: v397, didSend: v206, from: v396 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v245,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v398, time: v397, didSend: v206, from: v396 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:40:29:application',
      fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:57:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'PlayerTwo'
      });
    
    return;
    
    }
  else {
    const {data: [v265], secs: v267, time: v266, didSend: v44, from: v264 } = txn2;
    const v269 = stdlib.add(v246, v246);
    ;
    const v270 = stdlib.safeAdd(v265, v247);
    const v271 = stdlib.safeDiv(v270, stdlib.checkedBigNumberify('./index.rsh:59:55:decimal', stdlib.UInt_max, '2'));
    let v272 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v273 = v266;
    let v280 = v269;
    
    let txn3 = txn2;
    while (await (async () => {
      const v288 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v288;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v296], secs: v298, time: v297, didSend: v72, from: v295 } = txn4;
      ;
      const v299 = stdlib.addressEq(v245, v295);
      stdlib.assert(v299, {
        at: './index.rsh:73:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'PlayerTwo'
        });
      const v306 = stdlib.safeAdd(v297, v248);
      const v310 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:78:58:application',
        fs: ['at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'getGuess',
        who: 'PlayerTwo'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v245, v246, v248, v264, v271, v280, v296, v306, v310],
        evt_cnt: 1,
        funcNum: 5,
        lct: v297,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:80:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v312], secs: v314, time: v313, didSend: v82, from: v311 } = txn5;
          
          ;
          const v322 = stdlib.safeAdd(v313, v248);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v306],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v245, v246, v248, v264, v271, v280, v296, v306],
          evt_cnt: 0,
          funcNum: 6,
          lct: v297,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v358, time: v357, didSend: v153, from: v356 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v245,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v358, time: v357, didSend: v153, from: v356 } = txn6;
        ;
        const v359 = stdlib.addressEq(v245, v356);
        const v360 = stdlib.addressEq(v264, v356);
        const v361 = v359 ? true : v360;
        stdlib.assert(v361, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:81:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'PlayerTwo'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:40:29:application',
          fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:81:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'PlayerTwo'
          });
        
        return;
        
        }
      else {
        const {data: [v312], secs: v314, time: v313, didSend: v82, from: v311 } = txn5;
        ;
        const v315 = stdlib.addressEq(v264, v311);
        stdlib.assert(v315, {
          at: './index.rsh:80:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'PlayerTwo'
          });
        const v322 = stdlib.safeAdd(v313, v248);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v322],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v245, v246, v248, v264, v271, v280, v296, v312, v322],
            evt_cnt: 0,
            funcNum: 8,
            lct: v313,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v340, time: v339, didSend: v119, from: v338 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v264,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v340, time: v339, didSend: v119, from: v338 } = txn7;
          ;
          const v341 = stdlib.addressEq(v245, v338);
          const v342 = stdlib.addressEq(v264, v338);
          const v343 = v341 ? true : v342;
          stdlib.assert(v343, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:90:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'PlayerTwo'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:40:29:application',
            fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:90:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'PlayerTwo'
            });
          
          return;
          
          }
        else {
          const {data: [v327, v328], secs: v330, time: v329, didSend: v92, from: v326 } = txn6;
          ;
          const v331 = stdlib.addressEq(v245, v326);
          stdlib.assert(v331, {
            at: './index.rsh:88:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'PlayerTwo'
            });
          const v332 = stdlib.digest([ctc0, ctc0], [v327, v328]);
          const v333 = stdlib.digestEq(v296, v332);
          stdlib.assert(v333, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:92:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'PlayerTwo'
            });
          const v335 = stdlib.eq(v312, v328);
          const v336 = stdlib.eq(v312, v271);
          const v337 = stdlib.eq(v328, v271);
          const v411 = v337 ? stdlib.checkedBigNumberify('./index.rsh:10:12:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:12:12:decimal', stdlib.UInt_max, '1');
          const v412 = v336 ? stdlib.checkedBigNumberify('./index.rsh:8:12:decimal', stdlib.UInt_max, '0') : v411;
          const v334 = v335 ? stdlib.checkedBigNumberify('./index.rsh:6:12:decimal', stdlib.UInt_max, '1') : v412;
          const cv272 = v334;
          const cv273 = v329;
          const cv280 = v280;
          
          v272 = cv272;
          v273 = cv273;
          v280 = cv280;
          
          txn3 = txn6;
          continue;}
        
        }
      
      
      
      }
    const v374 = stdlib.eq(v272, stdlib.checkedBigNumberify('./index.rsh:97:16:decimal', stdlib.UInt_max, '2'));
    const v383 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:100:12:decimal', stdlib.UInt_max, '2'), v246);
    const v385 = v374 ? v245 : v264;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v272, v271), {
      at: './index.rsh:103:24:application',
      fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:35:function exp)'],
      msg: 'seeOutcome',
      who: 'PlayerTwo'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByANAAEIAlggBSgGUIABiAE4JgMBAAEBACI1ADEYQQRzKmRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEGDEAB9EmBBwxAAPFJJAxAAFUkEkQkNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEF/zbLrAyBjQDIQtbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBFuyCCOyEDT/sgezQgOTSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lJVwAgNf8hCVs1/iEKWzX9STUFSSJbNfwkWzX7gASCa3t2NPwWUDT7FlCwMgY0AyELWwxENP8xABJENANXYCA0/BY0+xZQARJENP80AyEFWzQDIQdbNANXMCA0/iMlNPs0/hJNIjT9NP4STSM0/TT7Ek0yBjQDIQRbQgKiSSEIDEAAVEghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABGG0rAywMgY0AyEKWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQRbsggjshA0/7IHs0ICokghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQVbNf4hB1s1/VcwIDX8IQlbNfshBFs1+ldgIDX5STUFFzX4gASBqprPNPgWULAyBjQDIQpbDEQ0/DEAEkQyBjT9CDX3NP80/hZQNP0WUDT8UDT7FlA0+hZQNPlQNPgWUDT3FlAoSwFXAH9nKUsBV38RZ0gkNQEyBjUCQgIdSSUMQADRSYEEDEAAikghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8hBVs1/iEHWzX9VzAgNfwhCVs1+yEEWzX6STUFNfmABDiwIy00+VCwNP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5UDT4FlAoSwFXAH9nKUsBV38JZ0ghCDUBMgY1AkIBhiUSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDFsPRLEisgE0AyEFW7III7IQNANXACCyB7NCASpJIwxAAFxIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQVbNf9JNQUXNf6ABNUVGRQ0/hZQsDIGNAMhDFsMRDT/iAFYNANXACA0/zQDgTBbMQA0/jQDIQdbCCUKIzIGNP9JCEIAbUiBoI0GiAEuIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yRbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULA0/4gA9DIGNP0INfwxADT/FlA0/hZQNP0WUDT8FlAoSwFXAEBnSCM1ATIGNQJCAHc1/zX+Nf01/DX7Nfo1+TX4NP0jEkEAKDT4NPkWUDT6FlA0+1A0/BZQNP8WUChLAVcAYGdIIQY1ATIGNQJCADixIrIBJTT5C7III7IQNPs0+DT9JRJNsgezQgAAMRkhBhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 144,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v246",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v247",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v248",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v246",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v247",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v248",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v265",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v296",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v312",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v327",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v328",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v265",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v296",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v312",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v327",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v328",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001c2f38038062001c2f8339810160408190526200002691620002c9565b600080805543600355604080516020808201835292815281513381528451818501528484015180518285015293840151606082015292909101516080830152907fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69060a00160405180910390a1602082015151620000a890341460076200016a565b620000c2438360200151604001516200019560201b60201c565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d8801805151885280518901518752518c015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c090910190935280519192620001609260029290910190620001ec565b50505050620003c4565b81620001915760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600082620001a4838262000360565b9150811015620001e65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000188565b92915050565b828054620001fa9062000387565b90600052602060002090601f0160209004810192826200021e576000855562000269565b82601f106200023957805160ff191683800117855562000269565b8280016001018555821562000269579182015b82811115620002695782518255916020019190600101906200024c565b50620002779291506200027b565b5090565b5b808211156200027757600081556001016200027c565b604051606081016001600160401b0381118282101715620002c357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036080811215620002dd57600080fd5b604080519081016001600160401b03811182821017156200030e57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200032857600080fd5b6200033262000292565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156200038257634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200039c57607f821691505b60208210811415620003be57634e487b7160e01b600052602260045260246000fd5b50919050565b61185b80620003d46000396000f3fe60806040526004361061008f5760003560e01c8063873779a111610056578063873779a11461010a578063a209ad4e1461011d578063ab53f2c614610130578063c798003714610153578063e533a29d1461016657005b80631e93b0f114610098578063422eb85c146100bc578063552d7b8e146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca3660046113da565b610179565b6100966100dd366004611404565b6103d3565b6100966100f0366004611404565b61068e565b34801561010157600080fd5b506001546100a9565b610096610118366004611404565b61080c565b61009661012b366004611404565b6109be565b34801561013c57600080fd5b50610145610c1f565b6040516100b3929190611420565b610096610161366004611404565b610cbc565b610096610174366004611404565b610e53565b6101896008600054146021610fef565b6101a38135158061019c57506001548235145b6022610fef565b6000808055600280546101b59061147d565b80601f01602080910402602001604051908101604052809291908181526020018280546101e19061147d565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b50505050508060200190518101906102469190611506565b905061025a81610100015143106023610fef565b604080513381528335602080830191909152840135818301529083013560608201527f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa9060800160405180910390a16102b53415601e610fef565b80516102cd906001600160a01b03163314601f610fef565b60408051610319916102f391602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260c00151146020610fef565b6103216112ab565b815181516001600160a01b03918216905260208084015183519091015260408084015183518201526060808501518451931692019190915260808084015183519091015260e083015190840135146103a65781608001518260e001511461039f5760808201516040840135146103985760016103a9565b60026103a9565b60006103a9565b60015b602080830180519290925281514391015260a08301519051604001526103ce81611015565b505050565b6103e36006600054146016610fef565b6103fd813515806103f657506001548235145b6017610fef565b60008080556002805461040f9061147d565b80601f016020809104026020016040519081016040528092919081815260200182805461043b9061147d565b80156104885780601f1061045d57610100808354040283529160200191610488565b820191906000526020600020905b81548152906001019060200180831161046b57829003601f168201915b50505050508060200190518101906104a0919061158f565b90506104b86040518060200160405280600081525090565b6104c98260e0015143106018610fef565b7f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333846040516104fa92919061163b565b60405180910390a161050e34156014610fef565b6060820151610529906001600160a01b031633146015610fef565b6105374383604001516111ab565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e0840152835161010084015260086000554360015590516106639183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b6040516020818303038152906040526002908051906020019061068792919061130b565b5050505050565b61069e600160005414600d610fef565b6106b8813515806106b157506001548235145b600e610fef565b6000808055600280546106ca9061147d565b80601f01602080910402602001604051908101604052809291908181526020018280546106f69061147d565b80156107435780601f1061071857610100808354040283529160200191610743565b820191906000526020600020905b81548152906001019060200180831161072657829003601f168201915b505050505080602001905181019061075b9190611662565b905061076f8160800151431015600f610fef565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516107a09291906116e5565b60405180910390a16107b43415600c610fef565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156107f1573d6000803e3d6000fd5b50600080805560018190556108089060029061138f565b5050565b61081c6001600054146009610fef565b6108368135158061082f57506001548235145b600a610fef565b6000808055600280546108489061147d565b80601f01602080910402602001604051908101604052809291908181526020018280546108749061147d565b80156108c15780601f10610896576101008083540402835291602001916108c1565b820191906000526020600020905b8154815290600101906020018083116108a457829003601f168201915b50505050508060200190518101906108d99190611662565b90506108ec81608001514310600b610fef565b7f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225338360405161091d92919061163b565b60405180910390a1610936816020015134146008610fef565b61093e6112ab565b815181516001600160a01b03909116905260208083015182518201526060808401518351604090810191909152835133920191909152830151610990916109899190860135906111ab565b60026111fe565b815160800152602080820180516001905251439082015282015180016020820151604001526103ce81611015565b6109ce6005600054146012610fef565b6109e8813515806109e157506001548235145b6013610fef565b6000808055600280546109fa9061147d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a269061147d565b8015610a735780601f10610a4857610100808354040283529160200191610a73565b820191906000526020600020905b815481529060010190602001808311610a5657829003601f168201915b5050505050806020019051810190610a8b9190611722565b9050610aa36040518060200160405280600081525090565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610ad492919061163b565b60405180910390a1610ae834156010610fef565b8151610b00906001600160a01b031633146011610fef565b610b0e4383604001516111ab565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e084015260066000554360015590516106639183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b600060606000546002808054610c349061147d565b80601f0160208091040260200160405190810160405280929190818152602001828054610c609061147d565b8015610cad5780601f10610c8257610100808354040283529160200191610cad565b820191906000526020600020905b815481529060010190602001808311610c9057829003601f168201915b50505050509050915091509091565b610ccc600660005414601b610fef565b610ce681351580610cdf57506001548235145b601c610fef565b600080805560028054610cf89061147d565b80601f0160208091040260200160405190810160405280929190818152602001828054610d249061147d565b8015610d715780601f10610d4657610100808354040283529160200191610d71565b820191906000526020600020905b815481529060010190602001808311610d5457829003601f168201915b5050505050806020019051810190610d89919061158f565b9050610d9d8160e00151431015601d610fef565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610dce9291906116e5565b60405180910390a1610de234156019610fef565b8051610e16906001600160a01b03163314610e0c5760608201516001600160a01b03163314610e0f565b60015b601a610fef565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156107f1573d6000803e3d6000fd5b610e636008600054146026610fef565b610e7d81351580610e7657506001548235145b6027610fef565b600080805560028054610e8f9061147d565b80601f0160208091040260200160405190810160405280929190818152602001828054610ebb9061147d565b8015610f085780601f10610edd57610100808354040283529160200191610f08565b820191906000526020600020905b815481529060010190602001808311610eeb57829003601f168201915b5050505050806020019051810190610f209190611506565b9050610f358161010001514310156028610fef565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763383604051610f669291906116e5565b60405180910390a1610f7a34156024610fef565b8051610fae906001600160a01b03163314610fa45760608201516001600160a01b03163314610fa7565b60015b6025610fef565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f193505050501580156107f1573d6000803e3d6000fd5b816108085760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6020810151516001141561112e5761106e6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0390811680835283516020908101518185019081528551604090810151818701908152875160609081015187168189019081528951608090810151818b01908152878c015186015160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906103ce92919061130b565b6020810151516002146111465780516060015161114a565b8051515b6001600160a01b03166108fc611169600284600001516020015161124c565b6040518115909202916000818181858888f19350505050158015611191573d6000803e3d6000fd5b50600080805560018190556111a89060029061138f565b50565b6000826111b883826117cc565b91508110156111f85760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161100c565b92915050565b60008161123b5760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b604482015260640161100c565b61124582846117e4565b9392505050565b6000811580611270575082826112628183611806565b925061126e90836117e4565b145b6111f85760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161100c565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908190815260200161130660405180606001604052806000815260200160008152602001600081525090565b905290565b8280546113179061147d565b90600052602060002090601f016020900481019282611339576000855561137f565b82601f1061135257805160ff191683800117855561137f565b8280016001018555821561137f579182015b8281111561137f578251825591602001919060010190611364565b5061138b9291506113c5565b5090565b50805461139b9061147d565b6000825580601f106113ab575050565b601f0160209004906000526020600020908101906111a891905b5b8082111561138b57600081556001016113c6565b6000606082840312156113ec57600080fd5b50919050565b6000604082840312156113ec57600080fd5b60006040828403121561141657600080fd5b61124583836113f2565b82815260006020604081840152835180604085015260005b8181101561145457858101830151858201606001528201611438565b81811115611466576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061149157607f821691505b602082108114156113ec57634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff811182821017156114e457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461150157600080fd5b919050565b6000610120828403121561151957600080fd5b6115216114b2565b61152a836114ea565b8152602083015160208201526040830151604082015261154c606084016114ea565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b60006101008083850312156115a357600080fd5b6040519081019067ffffffffffffffff821181831017156115d457634e487b7160e01b600052604160045260246000fd5b816040526115e1846114ea565b81526020840151602082015260408401516040820152611603606085016114ea565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b038316815260608101611245602083018480358252602090810135910152565b600060a0828403121561167457600080fd5b60405160a0810181811067ffffffffffffffff821117156116a557634e487b7160e01b600052604160045260246000fd5b6040526116b1836114ea565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461171357600080fd5b80604085015250509392505050565b600060c0828403121561173457600080fd5b60405160c0810181811067ffffffffffffffff8211171561176557634e487b7160e01b600052604160045260246000fd5b604052611771836114ea565b81526020830151602082015260408301516040820152611793606084016114ea565b60608201526080830151608082015260a083015160a08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156117df576117df6117b6565b500190565b60008261180157634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615611820576118206117b6565b50029056fea2646970667358221220ea76e261abddc195995441d6a8d16c4227d2bddd514b8c635e166d7a1687096764736f6c634300080c0033`,
  BytecodeLen: 7215,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:57:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:101:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:64:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:74:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:81:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:90:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "PlayerOne": PlayerOne,
  "PlayerTwo": PlayerTwo
  };
export const _APIs = {
  };
