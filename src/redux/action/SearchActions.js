export const SET_SEARCH = "Set Search"

export function SetSearch(results)
{
    return {type: SET_SEARCH, search: results}
}