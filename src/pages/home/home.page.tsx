import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  VStack,
  View,
} from "native-base";
import { Dimensions, StyleSheet, Text } from "react-native";

import { ContainerPage } from "../../components/ContainerPage/ContainerPage.component";
import ExpoFastImage from "expo-fast-image";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { T } from "@components";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { usePost } from "@store";
import { useTranslation } from "react-i18next";

//@ts-ignore

const CustomIcomoonIcons = createIconSetFromIcoMoon(
  require("../../assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export function HomePage() {
  const { t } = useTranslation("common");
  const { post, someAsyncAction } = usePost();
  /*
  const header = (
    <>
      <T fontSize={"4xl"} fontWeight={900}>
        Here are a custom fonts and preloaded images
      </T>
    </>
  );

  const hookStateDemo = (
    <>
      <VStack space={"md"}>
        <T fontSize="xl" fontWeight={500} color={"white"}>
          A value read from the store : {post.get().title}
        </T>

        <Button
          size="md"
          onPress={() =>
            post.title.set("This was set from the component from a setter")
          }
        >
          Set from component
        </Button>
        <Button
          size="md"
          onPress={() =>
            someAsyncAction("This was set from a component using a saga")
          }
        >
          Set from a saga
        </Button>
      </VStack>
    </>
  );

  const iconsDemo = (
    <>
      <T fontSize="xl" color={"white"}>
        A simple icon
      </T>
      <Ionicons name="md-checkmark-circle" size={r.m(30)} color="green" />
      <T fontSize="xl" color={"white"}>
        A custom icon
      </T>
      <CustomIcomoonIcons name="nativebase-logo" size={r.m(30)} color="red" />
    </>
  );

  return (
    <ContainerPage h="full">
      {header}
      <ExpoFastImage
        style={{ height: r.v(120) }}
        resizeMode="contain"
        uri="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      />
      {hookStateDemo}
      {iconsDemo}
    </ContainerPage>
  );
  */

  const renderGrid = () => {
    return (
      <>
        <View
          style={{
            left: "50%",
            position: "absolute",
            height: 1000,
            width: 5,
            backgroundColor: "yellow",
            zIndex: 100,
          }}
        />
        <View
          style={{
            top: "50%",
            position: "absolute",
            height: 5,
            width: 1000,
            backgroundColor: "yellow",
            zIndex: 100,
          }}
        />
      </>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {renderGrid()}
      <View>
        <View style={rs.box}>
          <T style={rs.txt}>Stylesheet</T>
          <View style={rs.box2} />
        </View>
        <View style={rs.box}>
          <T style={rs.txt}>Stylesheet</T>
          <View style={rs.box2} />
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  box: {
    marginLeft: 100,
    paddingTop: 40,
    width: 249,
    height: 249,
    backgroundColor: "black",
    marginBottom: 20,
  },
  txt: {
    color: "white",
    fontSize: 30,
    fontFamily: "EduSABeginner-Regular",
  },
  box2: {
    paddingVertical: 80,
    backgroundColor: "red",
    fontSize: 16,
  },
});

const rs = StyleSheet.create({
  box: {
    margin: 400,
    marginLeft: 100,
    paddingTop: 40,
    width: 249,
    height: 249,
    backgroundColor: "black",
    marginBottom: 20,
  },
  txt: {
    padding: 200,
    color: "white",
    fontSize: 30,
    fontFamily: "EduSABeginner-Regular",
  },
  box2: {
    paddingVertical: 80,
    backgroundColor: "red",
    fontSize: 16,
  },
});
