import useFetchCountriesData from "./useFetchCountriesData"

function useListCountriesData() {
    const url = "https://api.github.com/repos/WalkerFGZ/rest_countries/git/blobs/1a74c81e637557f1de96b67912be777b4d28a31c"
    const errorNotification = (error) => {
        console.log(error)
    }

    const { data, loadingStatus, error } = useFetchCountriesData(url, errorNotification)

    return {
        countriesList: data,
        loadingStatus,
        error
    }
}

export default useListCountriesData