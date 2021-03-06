import CharacterImage from './components/character-image/CharacterImage.vue';
import CharacterBasicInfo from './components/character-basic-info/CharacterBasicInfo.vue';
import CharacterDetailedInfo from './components/character-detailed-info/CharacterDetailedInfo.vue';
import ChangeButton from './components/change-button/change-button.vue';
import axios from 'axios';

export default {
    name: 'App',
    components: {
        CharacterImage,
        CharacterBasicInfo,
        CharacterDetailedInfo,
        ChangeButton,
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
            },
            disabled: false,
        }
    },
    mounted() {
        this.getCharacter();
    },
    methods: {
        randomNumber() {
            return Math.round((Math.random() * 100));
        },
        getCharacter() {
            this.disabled = true;
            const characterID = this.randomNumber();
            axios.get(`https://rickandmortyapi.com/api/character/${characterID}`)
            .then(response => {
                const { data } = response;
                this.imageURL = data.image;
                this.basicInfo.name = data.name;
                this.basicInfo.status = data.status;
                this.basicInfo.gender = data.gender;
                this.detailedInfo.specie = data.species;
                this.detailedInfo.location = data.location.name;
            })
            .catch(error => console.log(error))
            .finally(() => this.disabled = false);
        },
        changeCharacter() {
            this.getCharacter();
        },
    }
}