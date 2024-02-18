import { action, computed, makeObservable, observable } from "mobx";

class photosData{
    dataPhotos = []
    dataPhoto = {}
    searchedPtotos = []
    found = false
    
    constructor(){
        makeObservable(this,{
            dataPhotos: observable,
            dataPhoto: observable,
            searchedPtotos: observable,
            found: observable,
            searchPhoto: action,
            addDataPhotoCard: action,
            addDataPhotos: action,
        })    
    }

    addDataPhotoCard(date){
        this.dataPhoto = date
    }
    addDataPhotos(date){
        this.dataPhotos = date
    }

    searchPhoto(serchWord){
        console.log('поиск')
        console.log(serchWord)
        function foundPhoto(value) {
            if(value.title.includes(serchWord) || value.description.includes(serchWord))
                return value
        }
        if(serchWord)
        {
            let filtered = this.dataPhotos.filter(foundPhoto);
            this.searchedPtotos = filtered
            this.found = true
        }
        else
            this.found = false
    }

}
export const dataPhotosStore = new photosData();