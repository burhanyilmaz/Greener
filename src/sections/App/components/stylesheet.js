import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "rgb(66, 69, 80)",
    alignItems: "center"
  },
  subTitle: {
    fontSize: 18,
    color: "rgb(200, 208, 218)"
  },
  loginButton: {
    _: {
      backgroundColor: "#69eed3",
      width: width - 80,
      alignItems: "center",
      padding: 10,
      margin: 8
    },
    text: {
      color: "#fff",
      fontSize: 16
    }
  },
  input: {
    marginTop: 16,
    marginBottom: 8,
    width: "100%"
  },
  inputText: {
    color: "rgb(197, 204, 214)",
    marginLeft: 3
  },
  showIconContainer: {
    position: "absolute",
    right: 5,
    bottom: 16
  },
  showIcon: {
    height: 16,
    width: 16
  },
  inputContainer: {
    borderBottomColor: "red"
  },
  cardContainer: {
    _: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      borderColor: "rgba(0,0,0,0.01)",
      margin: 8,
      padding: 40,
      paddingLeft: 16,
      paddingRight: 16,
      marginLeft: 0,
      borderRadius: 5,
      elevation: 14
    },
    imageContainer: {
      _: {
        backgroundColor: "rgb(232, 251, 246)",
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
      },
      image: {
        height: 34,
        width: 34
      }
    },
    productNameText: {
      fontSize: 17,
      color: "#3e3e3e",
      marginTop: 16
    },
    productCountText: {
      fontSize: 14,
      color: "#d1d5df",
      marginTop: 2
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
  searchInputContainer: {
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
  slider: {
    _: {
      flex: 1,
      marginTop: 16
    },
    label: {
      _: {
        marginBottom: 16,
      },
      text: {
        color: "rgb(197, 204, 214)"
      }
    },
    slider: {
      top: 24,
      width: width,
      position: "absolute",
      flex: 1,
      padding: 0,
      margin: 0,
      alignSelf: "stretch",
      justifyContent: "flex-start"
    },
    price: {
      _: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 8
      },
      text: {
        color: "#9fa7b3"
      }
    }
  },
  switchContainer: {
    _: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 16
    },
    labelText: {
      color: "rgb(197, 204, 214)"
    }
  },
  editableTextContainer: {
    _: {},
    label: {
      paddingLeft: 4,
      color: "rgb(197, 204, 214)"
    },
    inputContainer: {
      _: {
        flexDirection: "row",
        justifyContent: "space-between"
      },
      input: {
        width: width / 1.3,
        height: 34,
        marginTop: 0,
        paddingLeft: 4,
        fontSize: 12,
        color: "#2d313e",
        borderRadius: 4
      }
    }
  }
};

export default styles;
