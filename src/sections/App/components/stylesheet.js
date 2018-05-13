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
    cardContainer: {
        _: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#fff',
          borderColor: 'rgba(0,0,0,0.01)',
          margin: 8,
          padding: 40,
          paddingLeft: 16,
          paddingRight: 16,
          marginLeft: 0,
          borderRadius: 5,
          elevation: 14,
        },
        imageContainer: {
          _: {
            backgroundColor: "rgb(232, 251, 246)",
            height: 60,
            width: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          },
          image: {
            height: 34, width: 34,
          }
        },
        productNameText: {
            fontSize: 17,
            color: '#3e3e3e',
            marginTop: 16,
        },
        productCountText: {
            fontSize: 14,
            color: '#d1d5df',
            marginTop: 2,
        }
      },
      avatarContainer: {
        _: {},
        image: {
          height: 42,
          width: 42,
          borderRadius: 21
        }
      },
};

export default styles;