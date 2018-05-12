import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const styles ={
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgb(66, 69, 80)',
        alignItems: 'center',
    },
    subTitle: {
        fontSize: 18,
        color: 'rgb(200, 208, 218)',
    },
    loginButton: {
        _: {
            backgroundColor: '#69eed3',
            width: width - 80,
            alignItems: 'center',
            padding: 10,
            margin: 8,
        },
        text: {
            color: '#fff',
            fontSize: 16,
        }
    },
    input: {
        marginTop: 16,
        marginBottom: 8,
        width: '100%'
    },
    inputText: {
        color: 'rgb(197, 204, 214)',
        marginLeft: 3,
        
    },
    showIconContainer: {
        position: 'absolute',
        right: 5,
        bottom: 16,
    },
    showIcon: {
        height: 16,
        width: 16,
    },
    inputContainer: {
        borderBottomColor: 'red',
    },
};

export default styles;