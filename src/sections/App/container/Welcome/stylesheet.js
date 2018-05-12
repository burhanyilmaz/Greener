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
    },
    subTitle: {
        fontSize: 18,
        color: 'rgb(200, 208, 218)',
    },
    image: {
        height: 300,
        width: 150,
        resizeMode: 'contain',
    },
    loginButton: {
        _: {
            backgroundColor: '#69eed3',
            width: width - 80,
            alignItems: 'center',
            padding: 10,
            margin: 16,
        },
        text: {
            color: '#fff',
            fontSize: 16,
        }
    },
    signupButton: {
        _: {
            backgroundColor: '#fff',
            borderWidth: 0,
            width: width - 80,
            alignItems: 'center',
            padding: 10,
            margin: 16,
            marginTop: 0,
            borderWidth: 1,
            borderColor: '#e8ebef',
        },
        text: {
            color: '#323743',
            fontSize: 16
        }
    },
    terms: {
        color: 'rgba(0,0,0,0.3)',
        marginTop: 8,
    },
    shadow: {
        position: 'absolute',
        bottom: 20,
        borderRadius: 4,
        borderTopWidth: 4,
        borderColor: 'rgba(0,0,0,0.05)',
        width: 220,
    }
};

export default styles;