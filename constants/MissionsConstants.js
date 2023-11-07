import ICONS from "./icons"

const MISSIONSCONSTANTS = {
    cardHeaderButtons: [
        'Backend',
        'Beginner',
        '2 hrs'
    ],
    cardTopContent: [
        {
            icon: ICONS.coinicon,
            value: '$12000',
            text: 'prize pool',
            borderColor: 'var(--gradients-gradient-yellow, #FACC15)'
        },
        {
            icon: ICONS.groupicon,
            value: '34/50',
            text: 'players',
            borderColor: 'var(--gradients-gradient-red, #FF5A5F)'
        },
        {
            icon: ICONS.diamondicon,
            value: 500,
            text: 'entry fee',
            borderColor: 'var(--gradients-gradient-blue, #246BFD)'
        }
    ],
    cardContentButtons: [
        {
            number: '00',
            text: 'Days'
        },
        {
            number: '04',
            text: 'Hours'
        },
        {
            number: '24',
            text: 'Minutes'
        }
    ],
    footerCharacters: [
        ICONS.character1,
        ICONS.character2,
        ICONS.character3,
        ICONS.character4,
        ICONS.character5,
        ICONS.character6
    ],
    marginLeft: [-290, -180, -70, 40, 150, 260], 
    missionComponentRepeat: [0, 1, 2]
}

export default MISSIONSCONSTANTS