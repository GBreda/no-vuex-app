import CharacterImage from './components/character-image/CharacterImage.vue';
import CharacterBasicInfo from './components/character-basic-info/CharacterBasicInfo.vue';
import CharacterDetailedInfo from './components/character-detailed-info/CharacterDetailedInfo.vue';
import axios from 'axios';

export default {
    name: 'App',
    components: {
        CharacterImage,
        CharacterBasicInfo,
        CharacterDetailedInfo
    },
    data() {
        return {
            imageURL: '',
            basicInfo: {
                name: '',
                status: '',
                gender: '',
            },
            detailedInfo: {
                specie: '',
                location: '',
            }
        }
    },
    mounted() {
        axios.get('https://rickandmortyapi.com/api/character/1')
            .then(response => {
                const { data } = response;
                this.imageURL = data.image;
                this.basicInfo.name = data.name;
                this.basicInfo.status = data.status;
                this.basicInfo.gender = data.gender;
                this.detailedInfo.specie = data.species;
                this.detailedInfo.location = data.location.name;
            })
            .catch(error => console.log(error));
    }
}