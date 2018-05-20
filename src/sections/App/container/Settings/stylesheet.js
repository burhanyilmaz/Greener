import { Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');

const styles = {
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
      editableTextContainer: {
          _: {
          },
          label: {
              paddingLeft: 4,
              color: "rgb(197, 204, 214)",
          },
          inputContainer: {
              _: {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
              },
              input: {
                width: width / 1.3,
                height: 34,
                marginTop: 0,
                paddingLeft: 4,
                fontSize: 12,
                color: "#2d313e",
                borderRadius: 4,
              }
          }
      },
      border: {
        borderTopWidth: 1.5,
        borderColor: "#f4f4f4",
        marginTop: 16,
        paddingLeft: 4
      },
      slider: {
          _: {
            flex: 1, marginTop: 16,
          },
          label: {
            marginBottom: 16,
          },
          slider: {
            top: 24,
            width: width ,
            position: 'absolute',
            flex: 1,padding: 0, margin: 0,     alignSelf: 'stretch', justifyContent: 'flex-start'
          },
          price: {
            flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 8
          }
      },
      switchContainer: {
          _: {
            flexDirection: 'row', justifyContent: 'space-between', marginTop: 16
          },
      }
};

export default styles;