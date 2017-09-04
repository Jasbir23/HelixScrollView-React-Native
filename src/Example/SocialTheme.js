import React, { Component } from "react";
import HelixScroll from "../components/HelixScroll";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  StatusBar,
  Platform,
  Animated
} from "react-native";
import { Icon, Button } from "native-base";
const { width, height } = Dimensions.get("window");
export default class Animals extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [
        {
          name: "Jack Seen",
          username: "@jackseen",
          shots: 12,
          following: 314,
          followers: 487,
          image: "http://www.inspirefirst.com/wp-content/uploads/2012/09/0223.jpg"
        },
        {
          name: "Spade Haan",
          username: "@spadeHaan",
          shots: 41,
          following: 122,
          followers: 865,
          image: "https://developers.google.com/web/images/contributors/ilyagrigorik.jpg"
        },
        {
          name: "Julia Joe",
          username: "@juliajoe",
          shots: 61,
          following: 12,
          followers: 544,
          image: "https://i.pinimg.com/originals/6f/90/17/6f901708bf30f8a04bc04ce143fadade.jpg"
        },
        {
          name: "Don Davy",
          username: "@dondavy",
          shots: 13,
          following: 114,
          followers: 233,
          image: "https://pp.userapi.com/c7007/v7007830/213eb/_G_cVZ5A_ag.jpg"
        },
        {
          name: "Jaz Pen",
          username: "@jazpen",
          shots: 42,
          following: 13,
          followers: 561,
          image: "http://data.whicdn.com/images/20992812/original.jpg"
        },
        {
          name: "Dan Bridge",
          username: "@danbridge",
          shots: 32,
          following: 115,
          followers: 421,
          image: "https://favim.com/orig/201106/24/black-and-white-boy-cute-hair-profile-Favim.com-81599.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HelixScroll
          itemCount={6}
          contentContainerStyle={{
            backgroundColor: "rgb(79, 79, 81)"
          }}
          renderCard={index => {
            return (
              <View
                style={{
                  height: 220,
                  width: width - 20,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >

                <View
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: "rgb(249, 62, 90)",
                    top: 205,
                    zIndex: Platform.OS === "ios" ? 2 : null,
                    elevation: Platform.OS === "ios" ? null : 2,
                    position: "absolute",
                    transform: [{ translateX: -70 }],
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Button
                    transparent
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Icon
                      name="add"
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 30
                      }}
                    />
                  </Button>
                </View>
                <Image
                  style={{
                    height: 220,
                    width: width - 160,
                    borderRadius: 7,
                    justifyContent: "flex-start",
                    flexDirection: "column"
                  }}
                  source={{
                    uri: this.state.dataArray[index].image
                  }}
                >
                  <View
                    style={{
                      height: 40,
                      width: width - 160,
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start"
                    }}
                  >
                    <Button transparent>
                      <Icon name="list" style={{ color: "white" }} />
                    </Button>
                    <Button transparent style={{ marginLeft: 100 }}>
                      <View
                        style={{
                          height: 15,
                          width: 30,
                          borderRadius: 7.5,
                          backgroundColor: "rgb(39, 39, 40)",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 7,
                            fontWeight: "bold",
                            color: "white"
                          }}
                        >
                          PRO
                        </Text>
                      </View>
                    </Button>
                  </View>
                </Image>
                <View
                  style={{
                    height: 200,
                    width: 140,
                    backgroundColor: "white",
                    flexDirection: "column"
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column"
                    }}
                  >
                    <Text style={{ fontSize: 15 }}>
                      {this.state.dataArray[index].name}
                    </Text>
                    <Text style={{ fontSize: 10 }}>
                      {this.state.dataArray[index].username}
                    </Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <View
                      style={{
                        flex: 3,
                        justifyContent: "space-around",
                        flexDirection: "row",
                        alignItems: "center"
                      }}
                    >
                      <Text style={{ fontSize: 10, color: "grey" }}>Shots</Text>
                      <Text style={{ fontSize: 10, color: "grey" }}>
                        following
                      </Text>
                      <Text style={{ fontSize: 10, color: "grey" }}>
                        followers
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 5,
                        justifyContent: "space-around",
                        flexDirection: "row",
                        alignItems: "center"
                      }}
                    >
                      <Text style={{ fontSize: 20, marginBottom: 25 }}>
                        {this.state.dataArray[index].shots}
                      </Text>
                      <Text style={{ fontSize: 20, marginBottom: 25 }}>
                        {this.state.dataArray[index].followers}
                      </Text>
                      <Text style={{ fontSize: 20, marginBottom: 25 }}>
                        {this.state.dataArray[index].following}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Button
                      round
                      dark
                      style={{
                        height: 30,
                        width: 100,
                        borderRadius: 18,
                        marginLeft: 20
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 8,
                          fontWeight: "bold",
                          color: "white"
                        }}
                      >
                        SEND MESSAGE
                      </Text>
                    </Button>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <View
          style={{
            height: 80,
            width: width,
            top: 0,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.3)",
            paddingLeft: 20,
            flexDirection: "column"
          }}
        >
          <Button
            transparent
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center"
            }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text
              style={{
                fontSize: 25,
                marginTop: 20,
                fontWeight: "bold",
                color: "rgba(255,255,255,0.7)"
              }}
            >
              SOCIAL
            </Text>
          </Button>
          <Text
            style={{
              fontSize: 12,
              marginTop: 5,
              color: "rgba(255,255,255,0.7)"
            }}
          >
            Tap to change
          </Text>
        </View>
      </View>
    );
  }
}
