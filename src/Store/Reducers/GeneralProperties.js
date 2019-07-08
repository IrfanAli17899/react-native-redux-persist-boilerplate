export default class GeneralProperties {
    static defaultProperties = () => ({
        isLoading: false,
        isError: false,
        errorMessage: '',
        successMessage: ''
    })

    static generalRsponseProperties = (error, message) => ({
        ...GeneralProperties.defaultProperties(),
        isError: error,
        successMessage: error ? '' : message,
        errorMessage: error ? message : ''
    })
}

