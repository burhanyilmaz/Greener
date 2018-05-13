import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const style = {
  mainContainer: {
    padding: 18,
    paddingTop: 0,
    flex: 1,
    backgroundColor: "#fff"
  },
  subContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "#333643",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    marginTop: 8,
    marginLeft: 3
  },
  avatarContainer: {
    _: {},
    image: {
      height: 42,
      width: 42,
      borderRadius: 21
    }
  },
  tabContainer: {
    _: {
      flexDirection: "row",
      borderBottomWidth: 1,
      marginBottom: 8,
      borderColor: "#c8ced8",
      margin: 0,
      padding: 0,
    },
    textContainer: {
      paddingBottom: 16,
    },
    selectedTextContainer: {
      borderBottomWidth: 2,
      borderColor: "#60d4ae",
    },
    text: {
      marginRight: 16,
      fontSize: 17,
      color: '#c8ced8',
    },
    selectedText: {
      marginRight: 16,
      fontSize: 17,
    }
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
  shadow: {
    position: 'absolute',
    borderRadius: 4,
    borderTopWidth: 4,
    borderColor: 'rgba(0,0,0,0.05)',
    width: (width / 3),
    bottom: 20,
    left: (width / 3),
}
};

export default style;
