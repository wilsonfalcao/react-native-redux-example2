//Importação Recursos do Sistema
import React,{useState} from 'react';
import {Text, View, TextInput,TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Importação de Recursos de Estilos e Fontes
import Style from "./style";

//Importação de Componentes Personalizados
import {checkList} from "../../hooks/reducers";


export default function Main({navigation}){

    const [inputItem, setInputItem] = useState(null);

    const [state, additem, checkitem, removeitem] = checkList();

    const flatListText = ({item}) =>{
        return(
            
            <TouchableOpacity onPress={()=>{
                    checkitem(item.id);
                }} 
                style={!item.check ? Style.textContainerFlatList : 
                Style.textContainerFlatListCheck }
            >
                <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        alignItems:"center",
                    }}
                >

                    <Text style={[Style.fontSize30,Style.marginLeft10]}>{item.title}</Text>

                    <TouchableOpacity onPress={()=>{
                        removeitem(item.id)
                    }}>
                        <View style={{
                                marginHorizontal:20,
                            }}
                        >
                            <Icon name={"check"} size={30} color={"red"}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

        );
    }

    return(
        <View style={Style.container}>
            <View style={Style.inputContainer}>
                <TextInput
                    placeholder={"Adicione algo..."}
                    onChangeText={(value)=>{setInputItem(value)}}
                    value={inputItem} 
                    style={Style.input}
                />
                <TouchableOpacity 
                    onPress={
                        ()=>{
                            additem(inputItem)
                            setInputItem(null);
                        }
                    }
                >
                    <Icon name={"plus"} size={30} color={"#3f8434"}/>
                </TouchableOpacity>
            </View>
            <View style={Style.arrayContainer}>
                <FlatList
                    data={state}
                    renderItem={flatListText}
                    keyExtractor={(_,index)=>index.toString()}
                    contentContainerStyle={Style.flatlistContainer}
                />
            </View>
            
        </View>
    );
}