import React, {useState} from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';


export default function(props)
{
    return (
        <View>
            <View
                style={{
                    height: 60,
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 8,
                }}
            >

                
                
                    {/* {props.withBack ?
                        <TouchableOpacity onPress={ ()=>props.navigation.goBack()} style={{flexDirection: 'row',  alignItems: 'center'}}>
                            <Image style={{width: 20, height: 20, }} source={require('../')}/>
                        </TouchableOpacity>
                        :
                        <View></View>    
                    }  */}
                    
                    
                    <Text  style={{fontSize: 24, color: '#17093a', justifyContent: 'center', fontFamily: Platform.OS === 'android' ? 'poppins_bold' : 'Poppins-Bold', textAlign: 'center'}}>
                        PhotoTest 
                    </Text>
            
            </View>
        </View>
    );
}