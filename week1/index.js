import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "./Header";
import { useState } from "react";

export default function Index() {
  let [counter, setCounter] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.counterText}>{counter}</Text>
      <TouchableOpacity onPress={() => {
          setCounter(counter+1);
        //   Alert.alert('버튼 클릭', '버튼이 클릭되었습니다.', [
        //     {
        //       text: '확인',
        //       onPress: () => {
        //         console.log('확인 버튼 클릭');
        //       }
        //     },
        //     {
        //       text: '취소',
        //       onPress: () => {
        //         console.log('취소 버튼 클릭');
        //       }
        //     }
        //   ]);
        }}>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>더하기</Text>
        </View>
      
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => {
          setCounter(counter-1);
        }}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>빼기</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({  // 함수일 때 소괄호 () 사용
  buttonText: {
    fontSize: 20,
    color: 'white',
},
  buttonView: {
    width: 100,
    heigth: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'ClientQueryOptions',
    alignItems: 'center',
  }
})
 