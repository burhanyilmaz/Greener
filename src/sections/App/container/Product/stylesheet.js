import { Dimensions } from "react-native";

const styles = {
  mainContainer: {
    paddingBottom: 0,
    paddingTop: 0,
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    width: Dimensions.get("screen").width,
    height: 250
  },
  subContainer: {
    _: {
      backgroundColor: "#fff",
      margin: 16
    },
    title: {
      fontWeight: "bold",
      fontSize: 16,
      color: '#2d313f',
    },
    tag: {
      _: {
        flexDirection: "row",
        marginTop: 16
      },
      text: {
        fontSize: 11,
        color: "#999fb1",
        padding: 4,
        paddingRight: 12,
        paddingLeft: 12,
        marginRight: 12,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#f4f4f4"
      }
    },
    description: {
      fontSize: 14,
      marginTop: 16,
      color: "#999fb1"
    }
  },
  border: {
    borderTopWidth: 1.5,
    borderColor: "#f4f4f4",
    marginTop: 16
  },
  galery: {
    _: {
      marginTop: 16
    },
    text: {
      marginBottom: 16,
      fontSize: 15,
      color: '#2d313f',
      fontWeight: 'bold',
    },
    scroll: {
      flexGrow: 1
    },
    image: {
      height: 100,
      marginRight: 16,
      borderRadius: 100 / 15,
      width: (Dimensions.get("screen").width - 48) / 3
    },
    moreImages: {
        _: {
            backgroundColor: '#f3f5f7',
            borderRadius: 5,
            height: 100 / 1.5,
            width: (Dimensions.get("screen").width - 48) / 5,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            color: '#999fb1',
            fontSize: 17,
        }
    }
  }
};

export default styles;
