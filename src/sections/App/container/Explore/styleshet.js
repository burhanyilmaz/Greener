import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const style = {
  mainContainer: {
    padding: 18,
    paddingBottom: 0,
    paddingTop: 0,
    flex: 1,
    backgroundColor: "#fff"
  },
  subContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 0
  },
  title: {
    color: "#333643",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    marginTop: 8,
    marginLeft: 3
  },
  inputContainer: {
    _: {
      marginTop: 10
    },
    iconImage: {
      height: 20,
      width: 20,
      position: "absolute",
      right: 8,
      top: 6
    },
    textInput: {
      width: width / 2,
      height: 34,
      marginTop: 0,
      paddingLeft: 4,
      fontSize: 12,
      color: "#a9a9a9",
      borderRadius: 4,
      borderColor: "#48BBEC",
      backgroundColor: "#f9f9f9"
    }
  },
  contentContainer: {
    _: {
      flexGrow: 1
    },
    bigImage: {
      width: "100%",
      height: 300,
      borderRadius: 4
    },
    sliderImages: {
      _: {
        flexGrow: 1,
        marginTop: 16
      },
      image: {
        width: 250,
        height: 100,
        marginRight: 8,
        borderRadius: 4
      }
    },
    otherImages: {
      _: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingBottom: 16
      },
      image: {
        width: (width - 32) / 2 - 6,
        height: 100,
        marginTop: 16,
        borderRadius: 4
      }
    },
    filterButton: {
      _: {
        left: width / 2 - 50,
        width: 100,
        height: 32,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(96,212,174)",
        position: "absolute",
        bottom: 4,
        borderRadius: 5
      },
      text: {
        alignSelf: "center",
        color: "#fff",
        fontWeight: "bold"
      }
    }
  }
};

export default style;
