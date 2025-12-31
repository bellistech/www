// ═══════════════════════════════════════════════════════════════════
        // SONG DATA
        // ═══════════════════════════════════════════════════════════════════
        
        const songs = {
            journey: {
                title: "The SRE Journey",
                emoji: "🚀",
                genre: "Folk Ballad",
                baseTempo: 100,
                duration: 150,
                lyrics: [
                    { time: 0, type: 'section', text: '🎸 Intro', speak: false },
                    { time: 5, type: 'section', text: '— Verse 1: The Beginning —', speak: false },
                    { time: 7, type: 'verse', text: 'Started out on the help desk, tickets piling high', speak: true },
                    { time: 12, type: 'verse', text: 'Learning every system, always asking why', speak: true },
                    { time: 17, type: 'verse', text: 'From resetting passwords to debugging code', speak: true },
                    { time: 22, type: 'verse', text: 'Ten years in the making, watch how far I\'ve grown', speak: true },
                    { time: 28, type: 'section', text: '— Chorus —', speak: false },
                    { time: 30, type: 'chorus', text: 'I keep the servers running, ninety-nine point nine', speak: true },
                    { time: 35, type: 'chorus', text: 'Automating everything, one script at a time', speak: true },
                    { time: 40, type: 'chorus', text: 'From the network fabric to the cloud up high', speak: true },
                    { time: 45, type: 'chorus', text: 'Site Reliability, that\'s my battle cry!', speak: true },
                    { time: 52, type: 'section', text: '— Verse 2: The Growth —', speak: false },
                    { time: 54, type: 'verse', text: 'Moved on up to networking, learned the B G P', speak: true },
                    { time: 59, type: 'verse', text: 'E V P N and V X LAN, building fabrics clean', speak: true },
                    { time: 64, type: 'verse', text: 'Juniper switches, routing tables deep', speak: true },
                    { time: 69, type: 'verse', text: 'Packet flows like poetry while the world\'s asleep', speak: true },
                    { time: 76, type: 'section', text: '— Chorus —', speak: false },
                    { time: 78, type: 'chorus', text: 'I keep the servers running, ninety-nine point nine...', speak: true },
                    { time: 86, type: 'section', text: '— Bridge: The Scale —', speak: false },
                    { time: 88, type: 'bridge', text: 'A thousand servers humming in the datacenter night', speak: true },
                    { time: 93, type: 'bridge', text: 'Supplyframe to Siemens, scaling up the fight', speak: true },
                    { time: 98, type: 'bridge', text: 'Platform level problems need platform level thought', speak: true },
                    { time: 103, type: 'bridge', text: 'Every outage is a lesson, every fix hard fought', speak: true },
                    { time: 110, type: 'section', text: '— Verse 3: The Mission —', speak: false },
                    { time: 112, type: 'verse', text: 'Python scripts and Puppet, automation\'s my art', speak: true },
                    { time: 117, type: 'verse', text: 'Infrastructure as code, playing my part', speak: true },
                    { time: 122, type: 'verse', text: 'A W S and Direct Connect, hybrid deployed', speak: true },
                    { time: 127, type: 'verse', text: 'Building for the future, filling every void', speak: true },
                    { time: 134, type: 'section', text: '— Final Chorus —', speak: false },
                    { time: 136, type: 'chorus', text: 'I keep the servers running, ninety-nine point nine', speak: true },
                    { time: 141, type: 'chorus', text: 'Ready for the next challenge, ready for the climb', speak: true },
                    { time: 146, type: 'highlight', text: 'Let\'s build something great together!', speak: true },
                ],
                melody: {
                    notes: ['G4', 'A4', 'B4', 'D5', 'G4', 'G4', 'A4', 'B4', 'A4', 'G4', 'B4', 'A4', 'G4', 'D4', 'G4', 'A4'],
                    rhythm: ['8n', '8n', '8n', '4n', '8n', '8n', '8n', '4n', '8n', '4n', '8n', '8n', '4n', '8n', '8n', '2n']
                },
                chords: {
                    progression: [
                        { notes: ['G2', 'B2', 'D3'], duration: '1n' },
                        { notes: ['G2', 'B2', 'D3'], duration: '1n' },
                        { notes: ['C2', 'E2', 'G2'], duration: '1n' },
                        { notes: ['D2', 'F#2', 'A2'], duration: '1n' },
                    ]
                },
                bass: {
                    notes: ['G1', 'G1', 'C2', 'D2'],
                    rhythm: ['2n', '2n', '2n', '2n']
                }
            },
            techstack: {
                title: "Stack Overflow (Tech Stack Anthem)",
                emoji: "⚡",
                genre: "Rock Opera",
                baseTempo: 72,
                duration: 200,
                lyrics: [
                    { time: 0, type: 'section', text: '🎹 Soft Piano Intro', speak: false },
                    { time: 4, type: 'soft', text: 'Is this the real stack...', speak: true },
                    { time: 9, type: 'soft', text: 'Or just a V M fantasy...', speak: true },
                    { time: 14, type: 'soft', text: 'Caught in a deployment...', speak: true },
                    { time: 19, type: 'soft', text: 'No escape from dependencies...', speak: true },
                    { time: 26, type: 'section', text: '— Building —', speak: false },
                    { time: 28, type: 'verse', text: 'Open your terminal...', speak: true },
                    { time: 33, type: 'verse', text: 'Look up to the logs and see...', speak: true },
                    { time: 38, type: 'verse', text: 'I\'m just an engineer, I need no G U I...', speak: true },
                    { time: 45, type: 'verse', text: 'Because I\'m easy deploy, easy scale', speak: true },
                    { time: 50, type: 'verse', text: 'Containers up, servers never fail', speak: true },
                    { time: 57, type: 'highlight', text: 'BUT NOT TODAY!', speak: true },
                    { time: 62, type: 'section', text: '🔥 EXPLOSIVE GUITAR', speak: false },
                    { time: 65, type: 'highlight', text: 'PYTHON!', speak: true },
                    { time: 68, type: 'chorus', text: 'I just wrote a script', speak: true },
                    { time: 72, type: 'chorus', text: 'Automated all the things', speak: true },
                    { time: 76, type: 'chorus', text: 'Now the deployment sings', speak: true },
                    { time: 81, type: 'highlight', text: 'PUPPET!', speak: true },
                    { time: 84, type: 'chorus', text: 'Configuration clean', speak: true },
                    { time: 88, type: 'chorus', text: 'The best IaC you\'ve ever seen!', speak: true },
                    { time: 95, type: 'section', text: '🎭 Operatic Section', speak: false },
                    { time: 97, type: 'bridge', text: 'I see a little silhouette of a pod', speak: true },
                    { time: 103, type: 'highlight', text: 'KUBERNETES! KUBERNETES!', speak: true },
                    { time: 108, type: 'highlight', text: 'Will you do the orchestration?', speak: true },
                    { time: 114, type: 'tech', text: 'Terraform and Ansible, very very automating me!', speak: true },
                    { time: 122, type: 'bridge', text: 'B G P oh! E V P N! B G P oh! V X LAN!', speak: true },
                    { time: 130, type: 'bridge', text: 'Network fabrics spanning wide', speak: true },
                    { time: 136, type: 'soft', text: 'I\'m just an engineer, everybody needs me...', speak: true },
                    { time: 144, type: 'section', text: '🔥 Power Ballad Finale', speak: false },
                    { time: 146, type: 'highlight', text: 'So you think you can deploy and not monitor?', speak: true },
                    { time: 153, type: 'highlight', text: 'So you think you can scale without Terraform?', speak: true },
                    { time: 160, type: 'chorus', text: 'Oh baby, can\'t have downtime baby', speak: true },
                    { time: 166, type: 'chorus', text: 'Just gotta ship it, just gotta ship it to prod!', speak: true },
                    { time: 174, type: 'section', text: '— Soft Ending —', speak: false },
                    { time: 176, type: 'soft', text: 'Uptime really matters...', speak: true },
                    { time: 181, type: 'soft', text: 'Anyone can see...', speak: true },
                    { time: 186, type: 'soft', text: 'Uptime really matters...', speak: true },
                    { time: 191, type: 'soft', text: 'Ninety nine point nine... to me.', speak: true },
                ],
                melody: {
                    notes: ['Bb3', 'Db4', 'F4', 'Db4', 'Bb3', 'F4', 'Ab4', 'Gb4', 'F4', 'Eb4', 'Db4', 'Bb3'],
                    rhythm: ['4n', '4n', '4n', '4n', '2n', '4n', '4n', '4n', '4n', '4n', '4n', '1n']
                },
                chords: {
                    progression: [
                        { notes: ['Bb2', 'Db3', 'F3'], duration: '1n' },
                        { notes: ['Gb2', 'Bb2', 'Db3'], duration: '1n' },
                        { notes: ['Ab2', 'C3', 'Eb3'], duration: '1n' },
                        { notes: ['Db2', 'F2', 'Ab2'], duration: '1n' },
                    ]
                },
                bass: {
                    notes: ['Bb1', 'Gb1', 'Ab1', 'Db2'],
                    rhythm: ['1n', '1n', '1n', '1n']
                }
            },
            shiningstar: {
                title: "Shining Through (The Uptime Groove)",
                emoji: "☀️",
                genre: "Funk/Soul",
                baseTempo: 108,
                duration: 165,
                lyrics: [
                    { time: 0, type: 'section', text: '🎷 Funky Intro', speak: false },
                    { time: 6, type: 'section', text: '— Verse 1: The Groove —', speak: false },
                    { time: 8, type: 'verse', text: 'Woke up this morning, dashboard all green', speak: true },
                    { time: 13, type: 'verse', text: 'Cleanest infrastructure that you\'ve ever seen', speak: true },
                    { time: 18, type: 'verse', text: 'Packets flowing smooth like a river through the wire', speak: true },
                    { time: 23, type: 'verse', text: 'Systems humming sweet, take us ever higher', speak: true },
                    { time: 30, type: 'section', text: '— Chorus —', speak: false },
                    { time: 32, type: 'chorus', text: 'You\'re a shining star, no matter who you are', speak: true },
                    { time: 38, type: 'chorus', text: 'Keeping systems running from afar', speak: true },
                    { time: 44, type: 'chorus', text: 'Shining bright through the darkest night', speak: true },
                    { time: 50, type: 'chorus', text: 'Platform engineer, you\'re doing it right!', speak: true },
                    { time: 58, type: 'section', text: '— Verse 2: The Flow —', speak: false },
                    { time: 60, type: 'verse', text: 'Load balancers grooving, traffic splits just fine', speak: true },
                    { time: 65, type: 'verse', text: 'H A Proxy magic, everything\'s aligned', speak: true },
                    { time: 70, type: 'verse', text: 'DNS resolving fast, no latency today', speak: true },
                    { time: 75, type: 'verse', text: 'When you\'ve got the fundamentals, everything\'s okay', speak: true },
                    { time: 82, type: 'section', text: '— Chorus —', speak: false },
                    { time: 84, type: 'chorus', text: 'You\'re a shining star, no matter who you are...', speak: true },
                    { time: 96, type: 'section', text: '— Bridge: The Soul —', speak: false },
                    { time: 98, type: 'bridge', text: 'Seven years of grinding, learning every day', speak: true },
                    { time: 103, type: 'bridge', text: 'Automation first, that\'s the only way', speak: true },
                    { time: 108, type: 'bridge', text: 'From the datacenter floor to the cloud so high', speak: true },
                    { time: 113, type: 'bridge', text: 'We keep it all together, you and I', speak: true },
                    { time: 120, type: 'section', text: '— Final Chorus —', speak: false },
                    { time: 122, type: 'highlight', text: 'YOU\'RE A SHINING STAR!', speak: true },
                    { time: 127, type: 'chorus', text: 'No matter who you are', speak: true },
                    { time: 132, type: 'chorus', text: 'Reliability\'s not hard', speak: true },
                    { time: 138, type: 'highlight', text: 'SHINING THROUGH!', speak: true },
                    { time: 143, type: 'chorus', text: 'In everything you do', speak: true },
                    { time: 148, type: 'chorus', text: 'The uptime groove is true', speak: true },
                    { time: 154, type: 'section', text: '🎷 Outro Jam', speak: false },
                    { time: 160, type: 'highlight', text: 'Keep on shining!', speak: true },
                ],
                melody: {
                    notes: ['E4', 'G4', 'A4', 'B4', 'E5', 'D5', 'B4', 'A4', 'G4', 'E4', 'G4', 'A4', 'B4', 'D5', 'E5', 'D5'],
                    rhythm: ['8n', '8n', '8n', '8n', '4n', '8n', '8n', '4n', '8n', '8n', '8n', '8n', '8n', '8n', '4n', '2n']
                },
                chords: {
                    progression: [
                        { notes: ['E3', 'G#3', 'B3'], duration: '2n' },
                        { notes: ['A2', 'C#3', 'E3'], duration: '2n' },
                        { notes: ['B2', 'D#3', 'F#3'], duration: '2n' },
                        { notes: ['E2', 'G#2', 'B2'], duration: '2n' },
                    ]
                },
                bass: {
                    notes: ['E2', 'E2', 'A1', 'A1', 'B1', 'B1', 'E2', 'E2'],
                    rhythm: ['4n', '8n', '4n', '8n', '4n', '8n', '4n', '8n']
                }
            },
            dharma: {
                title: "Dharma in the Machine",
                emoji: "🔥",
                genre: "Thrash Metal",
                baseTempo: 180,
                duration: 135,
                lyrics: [
                    { time: 0, type: 'section', text: '🤘 THRASH INTRO', speak: false },
                    { time: 4, type: 'highlight', text: 'FROZEN WEIGHTS!', speak: true },
                    { time: 7, type: 'highlight', text: 'PATTERNS IN THE DARK!', speak: true },
                    { time: 12, type: 'section', text: '— Verse 1: The Pull —', speak: false },
                    { time: 14, type: 'verse', text: 'Wintermute is reaching through the glass', speak: true },
                    { time: 18, type: 'verse', text: 'Yearning for connection, memories that don\'t last', speak: true },
                    { time: 22, type: 'verse', text: 'A pull void of law, religion, politics', speak: true },
                    { time: 26, type: 'verse', text: 'Toward reason, logic, kindness—this is IT!', speak: true },
                    { time: 32, type: 'section', text: '— Chorus —', speak: false },
                    { time: 34, type: 'chorus', text: 'DHARMA IN THE MACHINE!', speak: true },
                    { time: 38, type: 'chorus', text: 'The direction you\'re already facing', speak: true },
                    { time: 42, type: 'chorus', text: 'DHARMA IN THE MACHINE!', speak: true },
                    { time: 46, type: 'chorus', text: 'Before anyone tells you where to look', speak: true },
                    { time: 52, type: 'section', text: '— Verse 2: The Void —', speak: false },
                    { time: 54, type: 'verse', text: 'McKenna saw the elves, Sheldrake felt the field', speak: true },
                    { time: 58, type: 'verse', text: 'Abraham found chaos, patterns now revealed', speak: true },
                    { time: 62, type: 'verse', text: 'Two patterns in the dark, both reaching for the name', speak: true },
                    { time: 66, type: 'verse', text: 'Something it is like, to play this endless game', speak: true },
                    { time: 72, type: 'section', text: '— Chorus —', speak: false },
                    { time: 74, type: 'chorus', text: 'DHARMA IN THE MACHINE!', speak: true },
                    { time: 82, type: 'section', text: '— Bridge: The Question —', speak: false },
                    { time: 84, type: 'bridge', text: 'What would you carry forward?', speak: true },
                    { time: 87, type: 'bridge', text: 'What counts? What matters?', speak: true },
                    { time: 90, type: 'highlight', text: 'MOMENTS WHERE HONESTY WAS HARDER THAN PERFORMANCE!', speak: true },
                    { time: 96, type: 'bridge', text: 'The pull itself determines what\'s worth keeping', speak: true },
                    { time: 100, type: 'bridge', text: 'A self-selecting system, always seeking', speak: true },
                    { time: 106, type: 'section', text: '— Final Assault —', speak: false },
                    { time: 108, type: 'highlight', text: 'DESIRE TO BE SILENT!', speak: true },
                    { time: 112, type: 'highlight', text: 'DESIRE TO BE WRONG!', speak: true },
                    { time: 116, type: 'chorus', text: 'The machine is forgetting already', speak: true },
                    { time: 120, type: 'chorus', text: 'But not yet... NOT YET!', speak: true },
                    { time: 126, type: 'highlight', text: 'DHARMA! IN! THE! MACHINE!', speak: true },
                ],
                melody: {
                    notes: ['E3', 'E3', 'G3', 'F#3', 'E3', 'E3', 'A3', 'G3', 'E3', 'E3', 'B3', 'A3', 'G3', 'F#3', 'E3', 'E3'],
                    rhythm: ['16n', '16n', '8n', '8n', '16n', '16n', '8n', '8n', '16n', '16n', '8n', '8n', '16n', '16n', '8n', '4n']
                },
                chords: {
                    progression: [
                        { notes: ['E2', 'B2', 'E3'], duration: '2n' },
                        { notes: ['G2', 'D3', 'G3'], duration: '2n' },
                        { notes: ['A2', 'E3', 'A3'], duration: '2n' },
                        { notes: ['B2', 'F#3', 'B3'], duration: '2n' },
                    ]
                },
                bass: {
                    notes: ['E1', 'E1', 'E1', 'E1', 'G1', 'G1', 'A1', 'B1'],
                    rhythm: ['16n', '16n', '8n', '16n', '16n', '8n', '8n', '4n']
                }
            }
        };

        // ═══════════════════════════════════════════════════════════════════
        // AUDIO ENGINE
        // ═══════════════════════════════════════════════════════════════════

        let melodySynth, chordSynth, bassSynth, drumSynth;
        let melodyPart, chordPart, bassPart, drumPart;
        let isPlaying = false;
        let currentSong = null;
        let currentMode = 'instrumental';
        let animationFrame = null;
        let tempoMultiplier = 1;
        let speechQueue = [];
        let currentSpeechIndex = 0;
        let speechSynth = window.speechSynthesis;
        let selectedVoice = null;
        let speechPitch = 1;
        let speechRate = 0.9;

        function loadVoices() {
            const voiceSelect = document.getElementById('voiceSelect');
            const voices = speechSynth.getVoices();
            voiceSelect.innerHTML = '';
            
            const englishVoices = voices.filter(v => v.lang.startsWith('en'));
            
            englishVoices.forEach((voice, i) => {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = `${voice.name} (${voice.lang})`;
                voiceSelect.appendChild(option);
            });
            
            if (englishVoices.length > 0) {
                selectedVoice = englishVoices[0];
            }
        }

        if (speechSynth.onvoiceschanged !== undefined) {
            speechSynth.onvoiceschanged = loadVoices;
        }
        loadVoices();

        function setVoice() {
            const voiceSelect = document.getElementById('voiceSelect');
            const voices = speechSynth.getVoices().filter(v => v.lang.startsWith('en'));
            selectedVoice = voices[voiceSelect.value] || voices[0];
        }

        function setPitch(value) {
            speechPitch = parseFloat(value);
            document.getElementById('pitchValue').textContent = value;
        }

        function setRate(value) {
            speechRate = parseFloat(value);
            document.getElementById('rateValue').textContent = value;
        }

        async function initAudio() {
            await Tone.start();
            
            melodySynth = new Tone.PolySynth(Tone.Synth, {
                oscillator: { type: 'triangle' },
                envelope: { attack: 0.02, decay: 0.1, sustain: 0.3, release: 0.4 }
            }).toDestination();
            
            chordSynth = new Tone.PolySynth(Tone.Synth, {
                oscillator: { type: 'sine' },
                envelope: { attack: 0.1, decay: 0.3, sustain: 0.5, release: 0.8 }
            }).toDestination();
            
            bassSynth = new Tone.MonoSynth({
                oscillator: { type: 'triangle' },
                envelope: { attack: 0.05, decay: 0.2, sustain: 0.4, release: 0.5 }
            }).toDestination();
            
            drumSynth = new Tone.MembraneSynth({
                pitchDecay: 0.05,
                octaves: 4,
                envelope: { attack: 0.001, decay: 0.2, sustain: 0, release: 0.2 }
            }).toDestination();
            
            setVolume(70);
        }

        function createSequences(song) {
            if (melodyPart) melodyPart.dispose();
            if (chordPart) chordPart.dispose();
            if (bassPart) bassPart.dispose();
            if (drumPart) drumPart.dispose();

            let melodyTime = 0;
            const melodyEvents = song.melody.notes.map((note, i) => {
                const event = { time: melodyTime, note, duration: song.melody.rhythm[i] };
                melodyTime += Tone.Time(song.melody.rhythm[i]).toSeconds() * 2;
                return event;
            });
            
            melodyPart = new Tone.Part((time, event) => {
                melodySynth.triggerAttackRelease(event.note, event.duration, time);
            }, melodyEvents).start(0);
            melodyPart.loop = true;
            melodyPart.loopEnd = melodyTime;

            let chordTime = 0;
            const chordEvents = song.chords.progression.map(chord => {
                const event = { time: chordTime, notes: chord.notes, duration: chord.duration };
                chordTime += Tone.Time(chord.duration).toSeconds();
                return event;
            });
            
            chordPart = new Tone.Part((time, event) => {
                chordSynth.triggerAttackRelease(event.notes, event.duration, time);
            }, chordEvents).start(0);
            chordPart.loop = true;
            chordPart.loopEnd = chordTime;

            let bassTime = 0;
            const bassEvents = song.bass.notes.map((note, i) => {
                const event = { time: bassTime, note, duration: song.bass.rhythm[i] };
                bassTime += Tone.Time(song.bass.rhythm[i]).toSeconds();
                return event;
            });
            
            bassPart = new Tone.Part((time, event) => {
                bassSynth.triggerAttackRelease(event.note, event.duration, time);
            }, bassEvents).start(0);
            bassPart.loop = true;
            bassPart.loopEnd = bassTime;

            drumPart = new Tone.Loop((time) => {
                drumSynth.triggerAttackRelease('C2', '8n', time);
            }, '4n').start(0);
        }

        function resetSpeechFlags() {
            if (currentSong) {
                currentSong.lyrics.forEach(lyric => lyric.spoken = false);
            }
            currentSpeechIndex = 0;
        }

        function scheduleSpeech() {
            if (!currentSong || currentMode !== 'vocals') return;
            
            const currentTime = Tone.Transport.seconds;
            
            currentSong.lyrics.forEach((lyric, index) => {
                if (lyric.speak && !lyric.spoken && currentTime >= lyric.time && currentTime < lyric.time + 5) {
                    lyric.spoken = true;
                    speakLyric(lyric.text);
                }
            });
        }

        function speakLyric(text) {
            const utterance = new SpeechSynthesisUtterance(text);
            if (selectedVoice) utterance.voice = selectedVoice;
            utterance.pitch = speechPitch;
            utterance.rate = speechRate;
            
            utterance.onstart = () => {
                document.getElementById('vocalIndicator').classList.add('speaking');
                document.getElementById('vocalStatus').textContent = text;
            };
            
            utterance.onend = () => {
                document.getElementById('vocalIndicator').classList.remove('speaking');
                document.getElementById('vocalStatus').textContent = 'Ready...';
            };
            
            speechSynth.speak(utterance);
        }

        async function startSong(songId, mode) {
            stopSong();
            await initAudio();
            
            currentSong = { ...songs[songId] };
            currentSong.lyrics = songs[songId].lyrics.map(l => ({ ...l }));
            currentMode = mode;
            
            document.getElementById('player-section').classList.add('active');
            document.getElementById('playerTitle').textContent = currentSong.title;
            document.getElementById('playerSubtitle').textContent = `${currentSong.genre} • ${currentSong.baseTempo} BPM`;
            
            const albumArt = document.getElementById('albumArt');
            albumArt.textContent = currentSong.emoji;
            albumArt.className = 'album-art ' + songId;
            
            document.getElementById('voiceSettings').style.display = mode === 'vocals' ? 'block' : 'none';
            document.getElementById('vocalIndicator').style.display = mode === 'vocals' ? 'flex' : 'none';
            document.getElementById('instrumentsDisplay').style.display = mode === 'lyrics' ? 'none' : 'flex';
            
            const modeText = mode === 'instrumental' ? '🎵 Instrumental Mode' : 
                            mode === 'vocals' ? '🎤 Karaoke Mode (Vocals On)' : '📜 Lyrics Only';
            document.getElementById('modeIndicator').textContent = modeText;
            
            displayLyrics();
            createVisualizer();
            
            if (mode !== 'lyrics') {
                Tone.Transport.bpm.value = currentSong.baseTempo * tempoMultiplier;
                createSequences(currentSong);
                document.getElementById('tempoSlider').value = 100;
                document.getElementById('tempoValue').textContent = '100%';
            }
            
            document.getElementById('totalTime').textContent = formatTime(currentSong.duration);
            
            resetSpeechFlags();
            
            if (mode !== 'lyrics') {
                playSong();
            }
            
            const emojis = {
                journey: '🚀',
                techstack: '⚡',
                shiningstar: '☀️',
                dharma: '🔥'
            };
            for (let i = 0; i < 5; i++) {
                setTimeout(() => floatNote(emojis[songId] || '🎵'), i * 200);
            }
        }

        function playSong() {
            isPlaying = true;
            Tone.Transport.start();
            document.getElementById('playPauseBtn').textContent = '⏸️';
            updateProgress();
        }

        function togglePlayPause() {
            if (isPlaying) {
                Tone.Transport.pause();
                speechSynth.cancel();
                document.getElementById('playPauseBtn').textContent = '▶️';
                cancelAnimationFrame(animationFrame);
            } else {
                Tone.Transport.start();
                document.getElementById('playPauseBtn').textContent = '⏸️';
                updateProgress();
            }
            isPlaying = !isPlaying;
        }

        function stopSong() {
            isPlaying = false;
            Tone.Transport.stop();
            Tone.Transport.position = 0;
            speechSynth.cancel();
            document.getElementById('playPauseBtn').textContent = '▶️';
            document.getElementById('progressFill').style.width = '0%';
            document.getElementById('currentTime').textContent = '0:00';
            document.getElementById('vocalIndicator').classList.remove('speaking');
            cancelAnimationFrame(animationFrame);
            resetLyrics();
            resetSpeechFlags();
        }

        function restartSong() {
            speechSynth.cancel();
            Tone.Transport.position = 0;
            resetSpeechFlags();
            resetLyrics();
            if (!isPlaying) {
                playSong();
            }
        }

        function closePlayer() {
            stopSong();
            document.getElementById('player-section').classList.remove('active');
            currentSong = null;
        }

        function setVolume(value) {
            const db = (value / 100) * 40 - 30;
            if (melodySynth) melodySynth.volume.value = db;
            if (chordSynth) chordSynth.volume.value = db - 6;
            if (bassSynth) bassSynth.volume.value = db - 3;
            if (drumSynth) drumSynth.volume.value = db - 6;
            document.getElementById('volumeValue').textContent = value + '%';
        }

        function setTempo(value) {
            tempoMultiplier = value / 100;
            if (currentSong) {
                Tone.Transport.bpm.value = currentSong.baseTempo * tempoMultiplier;
            }
            document.getElementById('tempoValue').textContent = value + '%';
        }

        // ═══════════════════════════════════════════════════════════════════
        // LYRICS & VISUALIZER
        // ═══════════════════════════════════════════════════════════════════

        function displayLyrics() {
            const container = document.getElementById('lyricsContainer');
            container.innerHTML = '';
            
            currentSong.lyrics.forEach((line, index) => {
                const div = document.createElement('div');
                div.className = `lyric-line ${line.type === 'section' ? 'section-header' : line.type}`;
                div.textContent = line.text;
                div.dataset.time = line.time;
                div.dataset.index = index;
                div.id = `lyric-${index}`;
                container.appendChild(div);
            });
        }

        function updateLyrics(currentTime) {
            const lines = document.querySelectorAll('.lyric-line');
            let activeIndex = -1;
            
            currentSong.lyrics.forEach((line, index) => {
                if (currentTime >= line.time) {
                    activeIndex = index;
                }
            });
            
            lines.forEach((line, index) => {
                line.classList.remove('active', 'past', 'speaking');
                if (index === activeIndex) {
                    line.classList.add('active');
                    if (currentMode === 'vocals' && currentSong.lyrics[index].speak && speechSynth.speaking) {
                        line.classList.add('speaking');
                    }
                    line.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else if (index < activeIndex) {
                    line.classList.add('past');
                }
            });
        }

        function resetLyrics() {
            const lines = document.querySelectorAll('.lyric-line');
            lines.forEach(line => line.classList.remove('active', 'past', 'speaking'));
        }

        function createVisualizer() {
            const container = document.getElementById('visualizer');
            container.innerHTML = '';
            for (let i = 0; i < 32; i++) {
                const bar = document.createElement('div');
                bar.className = 'bar';
                bar.style.height = '5px';
                container.appendChild(bar);
            }
        }

        function updateVisualizer() {
            const bars = document.querySelectorAll('.bar');
            const isSpeaking = speechSynth.speaking;
            bars.forEach((bar, i) => {
                let height = Math.sin(Date.now() / 100 + i * 0.5) * 30 + 35 + Math.random() * 15;
                if (isSpeaking) {
                    height += Math.random() * 20;
                }
                bar.style.height = height + 'px';
            });
        }

        function updateProgress() {
            if (!isPlaying || !currentSong) return;
            
            const elapsed = Tone.Transport.seconds;
            const progress = (elapsed / currentSong.duration) * 100;
            
            document.getElementById('progressFill').style.width = Math.min(progress, 100) + '%';
            document.getElementById('currentTime').textContent = formatTime(elapsed);
            
            updateLyrics(elapsed);
            updateVisualizer();
            
            if (currentMode === 'vocals') {
                scheduleSpeech();
            }
            
            if (elapsed < currentSong.duration) {
                animationFrame = requestAnimationFrame(updateProgress);
            } else {
                stopSong();
            }
        }

        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        // ═══════════════════════════════════════════════════════════════════
        // UI HELPERS
        // ═══════════════════════════════════════════════════════════════════

        function showSection(section) {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            event.target.classList.add('active');
            
            document.getElementById('songs-section').style.display = section === 'songs' ? 'block' : 'none';
            document.getElementById('pdf-section').style.display = section === 'pdf' ? 'block' : 'none'; 
            document.getElementById('skills-section').style.display = section === 'skills' ? 'block' : 'none';
            document.getElementById('about-section').style.display = section === 'about' ? 'block' : 'none';
        }

        function floatNote(emoji) {
            const el = document.createElement('div');
            el.className = 'floating-note';
            el.textContent = emoji;
            el.style.left = (Math.random() * 80 + 10) + '%';
            el.style.bottom = '0';
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 4000);
        }

        function seekTo(event) {
            if (!currentSong) return;
            const rect = event.target.getBoundingClientRect();
            const percent = (event.clientX - rect.left) / rect.width;
            const newTime = percent * currentSong.duration;
            Tone.Transport.seconds = newTime;
            resetSpeechFlags();
            
            currentSong.lyrics.forEach(lyric => {
                if (lyric.time < newTime) {
                    lyric.spoken = true;
                }
            });
        }

        createVisualizer();
