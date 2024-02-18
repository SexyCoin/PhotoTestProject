import * as React from 'react';
import { Text, View, TouchableOpacity, Dimensions, FlatList, Image, TextInput} from 'react-native';
import Layouts from '../components/global/Layouts';
import axios from 'axios';
import { dataPhotosStore } from '../components/store/photosData';
import { Observer } from 'mobx-react';
export default class Lenta extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navigation: props.navigation,
            collum: 1,
            search: '',
        }
    }
    componentDidMount(){
        console.log('baadddd')
        var config = {
            method: 'get',
            url: 'https://api.slingacademy.com/v1/sample-data/photos?limit=100',
          };        
        axios(config).then((response) => {
            dataPhotosStore.addDataPhotos(response.data.photos)
        }).catch((error) => {
            console.log(error);
        });
    }
    item(index){
        return(
            <TouchableOpacity style={{marginBottom: 10,}} onPress={()=> {dataPhotosStore.addDataPhotoCard(index), this.state.navigation.navigate('CardPhoto')}}>
                <Image style={this.state.collum == 1 ? {width: deviceWidth, height: 300, resizeMode: 'cover',} : {width: (deviceWidth-32)/2, height: 150, resizeMode: 'cover',}} source={{uri: index.url}}/>
            </TouchableOpacity>
        )
    }

    render(){  
        return(
            <Layouts navigation={this.state.navigation}  title="Lenta" >
                <View style={{paddingHorizontal: 16, flex: 1}}>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: 50, borderBlockColor: '#000', borderWidth: 1, marginBottom: 10}}>
                            <TouchableOpacity onPress={()=>this.setState({collum: 1})} style={{ padding: 5}}>
                                <Text style={{fontSize: 20, color: '#000',fontFamily: Platform.OS === 'android' ? 'poppins_bold' : 'Poppins-Bold'}}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState({collum: 2})} style={{ borderLeftWidth: 1, borderLeftColor: '#000', padding: 5}}>
                                <Text style={{fontSize: 20, color: '#000',fontFamily: Platform.OS === 'android' ? 'poppins_bold' : 'Poppins-Bold'}}>2</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput 
                              name="search"
                              autoComplete='username'
                              placeholder='Search'
                              placeholderTextColor={'#ACACAC'}
                              value={this.state.search}
                              onChangeText={(value) => this.setState({search: value})}
                              style={{width: '100%', color: '#000', fontSize: 24}}
                              onSubmitEditing = {() => dataPhotosStore.searchPhoto(this.state.search)}
                        />
                    </View>
                    <View>
                        <Observer>
                            {()=>
                                <FlatList  
                                    data={dataPhotosStore.found ? dataPhotosStore.searchedPtotos : dataPhotosStore.dataPhotos}
                                    renderItem={({item}) =>this.item(item)}
                                    style={[{height: deviceHeight-190},this.state.collum == 2 && {width: deviceWidth,}, {marginBottom: 140}]}
                                    horizontal={false}
                                    numColumns={2}
                                    keyExtractor={item => item.id}
                                    contentContainerStyle={{}}
                                    onEndReachedThreshold={1}
                                    onMomentumScrollBegin = {() => {this.onEndReached = false;}}
                                    progressViewOffset={10}
                                    refreshing={false}
                                    ListEmptyComponent={<Text style={{padding: 20, textAlign: 'center', fontSize: 24, color: '#000'}}>Ничего не найдено</Text>}
                                />
                            }
                        </Observer>
                    </View>
                </View>
            </Layouts>
        )
    }
    
    
}

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height