// Assignment 1 of Class 2
import { Text, View, StyleSheet, ScrollView } from "react-native"
import { Button, Heading, NativeBaseProvider, Input, Stack } from "native-base";
import { useState } from "react";

export default function Todo() {
    const [inputText, setInputText] = useState(null)
    const [list, setList] = useState([])
    const [edit, setEdit] = useState(false)
    const [editIndex, setEditIndex] = useState()

    const AddtoList = () => {
        if (inputText == null) {
            alert("Enter Some Todo")
            return
        }
        const tempList = [...list, inputText]
        setList(tempList)
        setInputText(null)
    }
    // console.log("inputText", inputText)
    // console.log("list", list)

    const EditList = (i) => {
        const editText = list.slice(i, i + 1)
        setInputText(...editText)//because editText is an "array" that's why i use "spread"
        setEdit(true)
        setEditIndex(i)
    }

    const UpdateTodo = () => {

        const tempList = [...list]
        tempList.splice(editIndex, 1, inputText)
        setList(tempList)
        setInputText(null)


        setInputText()
        setEdit(false)
    }
    const DeleteItem = (i) => {
        const tempList = [...list]
        tempList.splice(i, 1)
        setList(tempList)
        setEdit(false)

    }
    const DeleteAll = () => {
        setEdit(false)
        setList([])
    }
    return (
        <View style={styles.container}>
            <NativeBaseProvider >
                <ScrollView>


                    <View style={styles.body}>
                        <Heading size="sm" >TODO App</Heading>
                        <Text>{'\n'}</Text>
                        <Input variant="filled" w="57%"
                            placeholder="Enter Todos"
                            value={inputText}
                            onChangeText={(text) => setInputText(text)}
                        />
                        <Stack space={1} w="50%" maxW="300px" mx="auto" mb="10px" d-flex>
                            <View style={{ display: "flex", flexDirection: "row", gap: 10, marginVertical: 10 }}>

                                {edit ?
                                    <Button size="sm" w="50%" colorScheme="secondary" onPress={UpdateTodo}>Update</Button>
                                    :
                                    <Button size="sm" w="50%" colorScheme="secondary" onPress={AddtoList}>Add</Button>
                                }


                                <Button size="sm" w="50%" colorScheme="secondary" onPress={DeleteAll}>Delete All</Button>
                            </View>
                        </Stack>

                        <View style={styles.list}>
                            {list.map((data, index) => {
                                return (
                                    <View style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignSelf: "center",
                                        alignItems: "center",
                                        marginVertical: 3,

                                    }}>
                                        <Text key={index} style={{ paddingVertical: 6, paddingHorizontal: 3, width: "80%", backgroundColor: "pink", }}>
                                            {index + 1}. {data}
                                        </Text>
                                        <Button size="sm" colorScheme="secondary" onPress={() => DeleteItem(index)}>Delete Item</Button>
                                        <Button size="sm" colorScheme="secondary" onPress={() => EditList(index)}>Edit</Button>
                                    </View>
                                )
                            })}
                        </View>
                    </View>

                </ScrollView>
            </NativeBaseProvider >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: "skyblue",
        // backgroundColor: '#fff',

    },
    body: {
        justifyContent: "center",
        alignItems: "center",
        height: 600,
    },
    list: {
        width: "50%",
        justifyContent: "center",
        alignContent: "center",
    }
});