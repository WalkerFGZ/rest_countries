export default function useContriesSortAndFilter(countriesList, searchText, region) {

    return countriesList.filter((country) => {
        return country.name.toLowerCase().includes(searchText.toLowerCase()) && country.region.toLowerCase().includes(region.toLowerCase())
    })

}