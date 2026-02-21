import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Swords, 
  Wind, 
  HeartPulse, 
  Users, 
  Footprints, 
  Zap, 
  RefreshCcw,
  ArrowDownCircle,
  Brain
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('guide');
  
  // Resource Tracking State
  const [focusPoints, setFocusPoints] = useState(7);
  const [wholeness, setWholeness] = useState(3);
  const [luck, setLuck] = useState(3);
  const [guardedMind, setGuardedMind] = useState(1);

  // Guide Me State
  const [guideGoal, setGuideGoal] = useState(null);

  // Resets
  const handleShortRest = () => {
    setFocusPoints(7);
    setGuardedMind(1);
  };
  
  const handleLongRest = () => {
    setFocusPoints(7);
    setWholeness(3);
    setLuck(3);
    setGuardedMind(1);
  };

  const ResourceCounter = ({ label, value, max, setter }) => (
    <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm border border-emerald-100">
      <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">{label}</span>
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => setter(Math.max(0, value - 1))}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200 font-bold"
        >-</button>
        <span className="text-xl font-bold text-gray-800 w-6 text-center">{value}</span>
        <button 
          onClick={() => setter(Math.min(max, value + 1))}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200 font-bold"
        >+</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-gray-800 pb-20">
      {/* Header & Resources */}
      <div className="bg-emerald-800 text-white p-4 shadow-md sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Winnie Skylark</h1>
              <p className="text-emerald-200 text-sm">Level 7 Graceful Vine Monk • Speed: 45ft</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={handleShortRest} className="px-3 py-1 bg-emerald-700 hover:bg-emerald-600 rounded text-xs font-medium transition-colors">Short Rest</button>
              <button onClick={handleLongRest} className="px-3 py-1 bg-emerald-900 hover:bg-emerald-950 rounded text-xs font-medium transition-colors">Long Rest</button>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            <ResourceCounter label="Focus" value={focusPoints} max={7} setter={setFocusPoints} />
            <ResourceCounter label="Heals" value={wholeness} max={3} setter={setWholeness} />
            <ResourceCounter label="Luck" value={luck} max={3} setter={setLuck} />
            <ResourceCounter label="Mind" value={guardedMind} max={1} setter={setGuardedMind} />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-2xl mx-auto p-4 mt-2">
        
        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-6 bg-gray-200 p-1 rounded-xl">
          <button 
            onClick={() => { setActiveTab('guide'); setGuideGoal(null); }}
            className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-all flex justify-center items-center space-x-1 ${activeTab === 'guide' ? 'bg-white shadow-sm text-emerald-800' : 'text-gray-600 hover:bg-gray-300'}`}
          >
            <Footprints size={18} /> <span>My Turn</span>
          </button>
          <button 
            onClick={() => setActiveTab('playbook')}
            className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-all flex justify-center items-center space-x-1 ${activeTab === 'playbook' ? 'bg-white shadow-sm text-emerald-800' : 'text-gray-600 hover:bg-gray-300'}`}
          >
            <Swords size={18} /> <span>Plays</span>
          </button>
          <button 
            onClick={() => setActiveTab('reaction')}
            className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-all flex justify-center items-center space-x-1 ${activeTab === 'reaction' ? 'bg-white shadow-sm text-emerald-800' : 'text-gray-600 hover:bg-gray-300'}`}
          >
            <ShieldAlert size={18} /> <span>Reactions</span>
          </button>
        </div>

        {/* TAB 1: GUIDE ME (Blended Turn Logic) */}
        {activeTab === 'guide' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {!guideGoal ? (
              <>
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">What is your main goal right now?</h2>
                <div className="grid grid-cols-1 gap-3">
                  <button onClick={() => setGuideGoal('attack')} className="p-4 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl text-left flex items-center space-x-4 transition-colors">
                    <div className="bg-red-500 p-3 rounded-full text-white"><Swords size={24} /></div>
                    <div>
                      <h3 className="font-bold text-red-900 text-lg">Attack & Deal Damage</h3>
                      <p className="text-red-700 text-sm">Hit hard and try to stun the enemy.</p>
                    </div>
                  </button>
                  <button onClick={() => setGuideGoal('control')} className="p-4 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl text-left flex items-center space-x-4 transition-colors">
                    <div className="bg-orange-500 p-3 rounded-full text-white"><ArrowDownCircle size={24} /></div>
                    <div>
                      <h3 className="font-bold text-orange-900 text-lg">Control & Trip Enemies</h3>
                      <p className="text-orange-700 text-sm">Knock enemies down or push them around.</p>
                    </div>
                  </button>
                  <button onClick={() => setGuideGoal('protect')} className="p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl text-left flex items-center space-x-4 transition-colors">
                    <div className="bg-blue-500 p-3 rounded-full text-white"><Users size={24} /></div>
                    <div>
                      <h3 className="font-bold text-blue-900 text-lg">Protect a Teammate</h3>
                      <p className="text-blue-700 text-sm">Rescue a friend who is in danger.</p>
                    </div>
                  </button>
                  <button onClick={() => setGuideGoal('escape')} className="p-4 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-xl text-left flex items-center space-x-4 transition-colors">
                    <div className="bg-gray-600 p-3 rounded-full text-white"><Wind size={24} /></div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Defend or Escape</h3>
                      <p className="text-gray-700 text-sm">Get out of danger and protect yourself.</p>
                    </div>
                  </button>
                  <button onClick={() => setGuideGoal('heal')} className="p-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl text-left flex items-center space-x-4 transition-colors">
                    <div className="bg-emerald-500 p-3 rounded-full text-white"><HeartPulse size={24} /></div>
                    <div>
                      <h3 className="font-bold text-emerald-900 text-lg">Heal Myself</h3>
                      <p className="text-emerald-700 text-sm">Recover some hit points quickly.</p>
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative">
                <button 
                  onClick={() => setGuideGoal(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 flex items-center text-sm font-medium"
                >
                  <RefreshCcw size={14} className="mr-1" /> Start Over
                </button>
                
                {guideGoal === 'attack' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-red-800 flex items-center"><Swords className="mr-2" /> Attack Workflow</h3>
                    
                    <div className="pl-4 border-l-4 border-red-400">
                      <h4 className="font-bold text-gray-800 text-lg">1. Take the Attack Action</h4>
                      <p className="text-gray-600 mb-2">You get <strong>2 regular attacks</strong>. Roll 1d20+6 to hit. Damage is 1d6+4 (magical/force).</p>
                      <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-sm text-yellow-800">
                        <strong>Hit something?</strong> You can spend <strong>1 Focus Point</strong> right now for a <strong>Stunning Strike</strong>! (CON Save DC 13. If they fail, they lose their turn!).
                      </div>
                    </div>

                    <div className="pl-4 border-l-4 border-orange-400">
                      <h4 className="font-bold text-gray-800 text-lg">2. Bonus Action Follow-up</h4>
                      <p className="text-gray-600 mb-2">How do you want to finish your turn?</p>
                      <div className="grid gap-2">
                        <div className="bg-gray-50 p-3 rounded border">
                          <strong>Option A (Free):</strong> Make 1 more Unarmed Strike.
                        </div>
                        <div className="bg-orange-50 p-3 rounded border border-orange-200">
                          <strong>Option B (1 Focus Point):</strong> Use <strong>Flurry of Blows</strong> to make 2 more strikes. For these specific strikes, you can apply: <strong>Topple</strong> (knock prone), <strong>Push</strong> (shove 15ft), or <strong>Addle</strong> (stop their reactions).
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {guideGoal === 'control' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-orange-800 flex items-center"><ArrowDownCircle className="mr-2" /> Control Workflow</h3>
                    <p className="text-gray-700">Use this to knock down or push away multiple targets!</p>

                    <div className="pl-4 border-l-4 border-orange-400">
                      <h4 className="font-bold text-gray-800 text-lg">1. Flurry of Blows (Bonus Action)</h4>
                      <p className="text-gray-600">Spend <strong>1 Focus Point</strong>. You make 2 Unarmed Strikes. Every time you hit, pick an effect:</p>
                      <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
                        <li><strong>Topple:</strong> They must make a DEX save or fall Prone. (Great for giving melee allies advantage!)</li>
                        <li><strong>Push:</strong> They must make a STR save or be shoved 15 feet.</li>
                        <li><strong>Addle:</strong> They cannot use Reactions (Opportunity Attacks) this turn.</li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-4 border-red-400">
                      <h4 className="font-bold text-gray-800 text-lg">2. Attack Action</h4>
                      <p className="text-gray-600">You still have <strong>2 regular attacks</strong> to use on anyone nearby. If you knocked someone Prone earlier, attack them with Advantage!</p>
                    </div>
                  </div>
                )}

                {guideGoal === 'protect' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-blue-800 flex items-center"><Users className="mr-2" /> Protection Workflow</h3>
                    
                    <div className="pl-4 border-l-4 border-blue-400">
                      <h4 className="font-bold text-gray-800 text-lg">1. Flowing Reposition (Bonus Action)</h4>
                      <p className="text-gray-600 mb-2">Walk up to your ally. Spend <strong>1 Focus Point</strong> to swap places with them! This does not trigger opportunity attacks.</p>
                      <div className="bg-blue-50 p-3 rounded border border-blue-200 text-sm text-blue-800">
                        Roll <strong>1d6</strong>. Add that number to either your AC or your ally's AC until your next turn.
                      </div>
                    </div>

                    <div className="pl-4 border-l-4 border-red-400">
                      <h4 className="font-bold text-gray-800 text-lg">2. Punish the Attacker (Action)</h4>
                      <p className="text-gray-600">Now that you swapped places, you still have <strong>2 attacks</strong>. Punch the enemy that was bothering your friend, or Grapple them so they can't follow your ally!</p>
                    </div>
                  </div>
                )}

                {guideGoal === 'escape' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-gray-800 flex items-center"><Wind className="mr-2" /> Escape & Defense</h3>
                    
                    <div className="pl-4 border-l-4 border-gray-400">
                      <h4 className="font-bold text-gray-800 text-lg">1. Choose your Defense (Bonus Action)</h4>
                      <div className="grid gap-3 mt-2">
                        <div className="bg-gray-50 p-3 rounded border">
                          <strong className="text-emerald-700">Spend 1 Focus Point on...</strong>
                          <ul className="list-disc ml-5 mt-1 text-sm text-gray-700">
                            <li><strong>Patient Defense:</strong> You Dodge (enemies have disadvantage hitting you) AND Disengage (walk away safely).</li>
                            <li><strong>Step of the Wind:</strong> You Dash (double speed, 90ft total!) AND Disengage. Your jump distance doubles.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="pl-4 border-l-4 border-blue-400">
                      <h4 className="font-bold text-gray-800 text-lg">2. Still Have Your Action!</h4>
                      <p className="text-gray-600">You can still Attack normally, Dash again (to run 135ft total), or use a Potion!</p>
                    </div>
                  </div>
                )}

                {guideGoal === 'heal' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-black text-emerald-800 flex items-center"><HeartPulse className="mr-2" /> Healing Workflow</h3>
                    
                    <div className="pl-4 border-l-4 border-emerald-400">
                      <h4 className="font-bold text-gray-800 text-lg">1. Wholeness of Body (Bonus Action)</h4>
                      <p className="text-gray-600">Cross off 1 'Heal' from your tracker above. Roll <strong>1d8 + 2</strong> and heal yourself that amount!</p>
                    </div>

                    <div className="pl-4 border-l-4 border-red-400">
                      <h4 className="font-bold text-gray-800 text-lg">2. Still Have Your Action!</h4>
                      <p className="text-gray-600">You can still Attack enemies twice, or use Dodge/Disengage to play it safe.</p>
                    </div>
                  </div>
                )}

                <button onClick={() => setGuideGoal(null)} className="mt-8 w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-lg transition-colors">
                  Finish Turn
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PLAYBOOK (Pre-set Combos) */}
        {activeTab === 'playbook' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Favorite Combos</h2>
            
            <div className="bg-white border-l-4 border-red-500 rounded-r-xl shadow-sm p-4">
              <h3 className="font-bold text-lg text-red-900 flex justify-between">
                <span>The Knockdown & Beatdown</span>
                <span className="text-xs font-bold bg-red-100 text-red-800 px-2 py-1 rounded">Cost: 1-2 Focus</span>
              </h3>
              <p className="text-sm text-gray-600 mb-3 italic">Knock them down, beat them up, steal their turn.</p>
              <ol className="list-decimal ml-4 text-sm space-y-1 text-gray-800">
                <li><strong>Bonus Action:</strong> Flurry of Blows (1 Focus). Choose <strong>Topple</strong> for the hits.</li>
                <li><strong>Action:</strong> If they fell prone, take your 2 Attacks with <strong>Advantage</strong>.</li>
                <li><strong>Finisher:</strong> If you hit, spend 1 Focus for <strong>Stunning Strike</strong>.</li>
              </ol>
            </div>

            <div className="bg-white border-l-4 border-orange-500 rounded-r-xl shadow-sm p-4">
              <h3 className="font-bold text-lg text-orange-900 flex justify-between">
                <span>The Bowling Ball</span>
                <span className="text-xs font-bold bg-orange-100 text-orange-800 px-2 py-1 rounded">Cost: 1 Focus</span>
              </h3>
              <p className="text-sm text-gray-600 mb-3 italic">Run around the battlefield tripping multiple enemies.</p>
              <ol className="list-decimal ml-4 text-sm space-y-1 text-gray-800">
                <li><strong>Move:</strong> Run up to Enemy A.</li>
                <li><strong>Action:</strong> Attack them. (Optional: Replace an attack to Grapple them!). Move to Enemy B.</li>
                <li><strong>Bonus Action:</strong> Flurry of Blows (1 Focus). Hit Enemy B and Enemy C. Apply <strong>Topple</strong> to knock them both Prone!</li>
              </ol>
            </div>

            <div className="bg-white border-l-4 border-purple-500 rounded-r-xl shadow-sm p-4">
              <h3 className="font-bold text-lg text-purple-900 flex justify-between">
                <span>The Mage Hunter</span>
                <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2 py-1 rounded">Cost: 1 Focus</span>
              </h3>
              <p className="text-sm text-gray-600 mb-3 italic">Dive the enemy spellcaster safely.</p>
              <ol className="list-decimal ml-4 text-sm space-y-1 text-gray-800">
                <li><strong>Move:</strong> Run straight to the spellcaster using your 45ft speed.</li>
                <li><strong>Action:</strong> Attack them. Because of your <em>Mage Slayer</em> feat, if they are concentrating, they roll their save with Disadvantage! Spend 1 Focus to Stun them.</li>
                <li><strong>Safety Net:</strong> Keep your <em>Guarded Mind</em> ready. If they cast a spell at you and you fail the INT/WIS/CHA save, you can choose to auto-succeed!</li>
              </ol>
            </div>

            <div className="bg-white border-l-4 border-gray-500 rounded-r-xl shadow-sm p-4">
              <h3 className="font-bold text-lg text-gray-900 flex justify-between">
                <span>Hit & Run Skirmisher</span>
                <span className="text-xs font-bold bg-gray-100 text-gray-800 px-2 py-1 rounded">Cost: FREE</span>
              </h3>
              <p className="text-sm text-gray-600 mb-3 italic">Conserve your energy while dealing steady damage.</p>
              <ol className="list-decimal ml-4 text-sm space-y-1 text-gray-800">
                <li><strong>Action:</strong> Attack twice.</li>
                <li><strong>Bonus Action:</strong> Make 1 free Unarmed Strike.</li>
                <li><strong>Move:</strong> Walk away. (If they try to hit you as you leave, you can use your Reaction to Deflect/React!).</li>
              </ol>
            </div>
          </div>
        )}

        {/* TAB 3: REACTIONS (Off-Turn Logic) */}
        {activeTab === 'reaction' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">It's not your turn. What just happened?</h2>
            
            <div className="space-y-4">
              <div className="bg-red-50 p-5 rounded-xl border border-red-200 shadow-sm">
                <h3 className="font-bold text-red-900 text-lg flex items-center mb-2"><ShieldAlert className="mr-2" size={20} /> "An enemy HIT me!"</h3>
                <p className="text-gray-700 text-sm mb-3">Does the attack deal Bludgeoning, Piercing, or Slashing damage?</p>
                <div className="bg-white p-3 rounded shadow-sm border border-red-100 text-sm">
                  <p><strong>Use Deflect Attacks! (Free)</strong></p>
                  <p className="mb-2">Reduce the damage by: <strong>1d10 + 9</strong> <span className="text-xs text-gray-500">(DEX + Monk Lvl)</span></p>
                  <hr className="my-2" />
                  <p className="text-red-800">Did the damage drop to 0? Spend <strong>1 Focus</strong> to Redirect it! Pick a target within 60ft. They make a DEX save or take 2d8 damage.</p>
                </div>
              </div>

              <div className="bg-orange-50 p-5 rounded-xl border border-orange-200 shadow-sm">
                <h3 className="font-bold text-orange-900 text-lg flex items-center mb-2"><Zap className="mr-2" size={20} /> "An enemy swung at me and MISSED!"</h3>
                <div className="bg-white p-3 rounded shadow-sm border border-orange-100 text-sm">
                  <p><strong>Use Reactive Strike! (Cost: 1 Focus)</strong></p>
                  <p className="mb-2">Make an immediate Unarmed Strike back at them!</p>
                  <p className="text-orange-800">If you hit them, they must make a STR save or drop their weapon OR have their speed halved (your choice).</p>
                </div>
              </div>

              <div className="bg-purple-50 p-5 rounded-xl border border-purple-200 shadow-sm">
                <h3 className="font-bold text-purple-900 text-lg flex items-center mb-2"><Brain className="mr-2" size={20} /> "I failed a mental saving throw!"</h3>
                <div className="bg-white p-3 rounded shadow-sm border border-purple-100 text-sm">
                  <p><strong>Use Guarded Mind! (Cost: 1 Daily Use)</strong></p>
                  <p className="mb-2">If you fail an Intelligence, Wisdom, or Charisma save against a nasty spell, just say <strong>NOPE</strong>.</p>
                  <p className="text-purple-800">You automatically succeed instead. Remember to cross off your "Mind" tracker at the top!</p>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 shadow-sm">
                <h3 className="font-bold text-blue-900 text-lg flex items-center mb-2"><ArrowDownCircle className="mr-2" size={20} /> "I am falling!"</h3>
                <div className="bg-white p-3 rounded shadow-sm border border-blue-100 text-sm">
                  <p><strong>Use Slow Fall! (Free)</strong></p>
                  <p>Reduce the falling damage you take by <strong>35</strong> (5 x Monk Level). Land gracefully.</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
