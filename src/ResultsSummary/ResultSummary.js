import React, { useEffect, useState } from 'react';
import './ResultSummary.scss';

const ResultSummary = () => {
    const userObtainedScore = 76;
    const [obtainedScoreVar, setObtainedScoreVar] = useState(0);

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    useEffect(() => {
        (async()=> {
            for(let i =1; i <= userObtainedScore; i++){
                setObtainedScoreVar(i);
                await timeout(7);
            }
        })();
    }, []);

  return (
    <div className='result-summary-wrapper'>
        <div className='overall-result'> 
            <div className='header'>Your Result </div>
            <div className='overall-score'>
                <div className='obtained-score'>{obtainedScoreVar}</div>
                <div className='total-score'>of 100</div>
            </div>
            <div className='comments-header'> Great </div>
            <div className='comments-description'> You scored higher than 65% of the people who have taken these tests. </div>
        </div>
        <div className='result-summary'> 
            <div className='header'>Summary</div>
            <div className='summary-item reaction'>
                <div className='item-title'>
                    <img 
                        src={require('../assets/images/icon-reaction.svg').default}
                        alt={'Reaction'}
                    />
                    Reaction
                </div>
                <div className='score'>80 / 100</div>
            </div>
            <div className='summary-item memory'>
                <div className='item-title'>
                    <img 
                        src={require('../assets/images/icon-memory.svg').default}
                        alt={'Memory'}
                    />
                    Memory
                </div>
                <div className='score'>92 / 100</div>
            </div>
            <div className='summary-item verbal'>
                <div className='item-title'>
                    <img 
                        src={require('../assets/images/icon-verbal.svg').default}
                        alt={'Verbal'}
                    />
                    Verbal
                </div>
                <div className='score'>61 / 100</div>
            </div>
            <div className='summary-item visual'>
                <div className='item-title'>
                    <img 
                        src={require('../assets/images/icon-visual.svg').default}
                        alt={'Visual'}
                    />
                    Visual
                </div>
                <div className='score'>72 / 100</div>
            </div>
            <button
                className='continue-cta'
            > 
                Continue
                </button>
        </div>
    </div>
  )
}

export default ResultSummary;