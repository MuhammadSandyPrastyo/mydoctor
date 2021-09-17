const MainColor = {
    green1: '#0BCAD4',
    green2: '#EDFCFD',
    grey1: '#495A75',
    grey2: '#7D8797',
    grey3: '#EEEEEE',
    grey4: '#EDEEF0',
    grey5: '#E9E9E9',
    blue1: '#112340',
    blue2: '#0066CB',
    white: '#ffffff',
    black: '#000000'
}

export const colors = {
    main: MainColor.blue1,
    secondary: MainColor.grey2,
    background: {
        listCard: MainColor.green2,
    },
    text: {
        main: MainColor.blue1,
        secondary: MainColor.grey2,
        third: MainColor.white,
        tabActive: MainColor.green1,
        tabInActive: MainColor.grey1,
    },
    line: MainColor.grey3,
    chat: {
        background: {
            me: MainColor.green2,
            opponent: MainColor.green1,
        },
        text: {
            me: MainColor.black,
            opponent: MainColor.white,
        },
        textInput: {
            background: MainColor.grey4,
        }
    },
    buttonIcon: {
        on: MainColor.blue2,
        off: MainColor.grey4,
    },
    border: {
        onFocus: MainColor.blue1,
        onBlur: MainColor.grey5,
    }
}