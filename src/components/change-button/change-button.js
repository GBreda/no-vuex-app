export default {
    name: 'ChangeButton',
    props: {
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        changeButton() {
            this.$emit('changeCharacter');
        },
    }
}