import useFetchCountriesData from "./useFetchCountriesData"

function useListCountriesData() {
    const url = "../../../data.json"
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