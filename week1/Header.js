import { Text, View } from "react-native";

export default function Header(props) {
  console.log(props.name)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'skyblue',
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Text Style={{
        fontSize:30,
        color: 'red',
      }}>{props.name}</Text>
      {props.price > 10000 && <Text>비싼 가격</Text>}

    </View>
    
  );
} 
