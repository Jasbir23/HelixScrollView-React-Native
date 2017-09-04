import React, { Component } from "react";
import HelixScroll from "../components/HelixScroll";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  StatusBar
} from "react-native";
import { Button } from "native-base";
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
          name: "Sea Lions",
          url: "http://www.nationalgeographic.com/content/dam/photography/PROOF/2017/July/slowest-animals-gallery/01-slowest-animals-2852968_uploadsmember256581yourshot-256581-2852968jpg_jaup46uf5pq4jv7mlnrdgxwnh7p3eflutfvvbpyjwjhzlmh4iziq_1600x1060.jpg"
        },
        {
          name: "Owl",
          url: "https://static.boredpanda.com/blog/wp-content/uploads/2014/10/animals-in-autumn-211__880.jpg"
        },
        {
          name: "Tiger",
          url: "https://ak5.picdn.net/shutterstock/videos/7646350/thumb/1.jpg"
        },
        {
          name: "Hero fennec",
          url: "http://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_fennec2.jpg"
        },
        {
          name: "Squirrel",
          url: "https://www.wpcc.org.uk/images/nature/mammals/header-squirrel.jpg"
        },
        {
          name: "Eagle",
          url: "http://www.wallpaperawesome.com/wallpapers-awesome/wallpapers-animals-pets-puppies-awesome/wallpaper-animal-pet-puppy-awesome-315.jpg"
        },
        {
          name: "Bad Boy",
          url: "https://i.pinimg.com/736x/65/34/49/653449c123e8187772acc852f3c691d7--extinct-animals-prehistoric-animals.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <StatusBar barStyle="light-content" />
        <HelixScroll
          itemCount={7}
          contentContainerStyle={{
            backgroundColor: "rgba(0,0,0,0.3)"
          }}
          backgroundImage={
            "https://i.pinimg.com/236x/55/14/80/5514809a99b0286b727a40f1964bdb33--iphone-desktop-desktop-wallpapers.jpg"
          }
          renderCard={index => {
            return (
              <View
                style={{
                  height: 300,
                  width: 300,
                  borderWidth: 1.8,
                  borderRadius: 10,
                  borderColor: "green",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 300,
                    backgroundColor: "rgba(0,255,0,0.1)",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 20
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "rgba(255,255,255,0.7)"
                    }}
                  >
                    {this.state.dataArray[index].name}
                  </Text>
                </View>
                <Image
                  style={{
                    width: 300,
                    borderRadius: 10,
                    height: 250,
                    justifyContent: "flex-end",
                    alignItems: "flex-end"
                  }}
                  source={{
                    uri: this.state.dataArray[index].url
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: 250,
                      width: 300,
                      backgroundColor: "rgba(0,0,0,0.3)"
                    }}
                  />
                </Image>
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
            flexDirection: "column"
          }}
        >
          <Button
            transparent
            style={{ alignSelf: "center" }}
            onPress={() => this.props.navigation.navigate("SocialTheme")}
          >
            <Text
              style={{
                fontSize: 25,
                marginTop: 20,
                fontWeight: "bold",
                color: "rgba(255,255,255,0.7)"
              }}
            >
              Animal Kingdom
            </Text>
          </Button>
          <Text
            style={{
              fontSize: 13,
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
